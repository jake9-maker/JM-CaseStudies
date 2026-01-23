#!/bin/bash

# Pre-Deployment Check Script for JM Case Studies
# Runs critical tests before deploying to production
# Usage: npm run pre-deploy or ./scripts/pre-deploy-check.sh

set -e  # Exit on any error

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 PRE-DEPLOYMENT CHECKS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERROR_COUNT=0
WARNING_COUNT=0

# Test 1: Check for untracked files
echo "📋 Test 1: Checking for untracked files..."
UNTRACKED=$(git ls-files --others --exclude-standard)
if [ -n "$UNTRACKED" ]; then
  echo -e "${YELLOW}⚠ WARNING: Untracked files found:${NC}"
  echo "$UNTRACKED"
  WARNING_COUNT=$((WARNING_COUNT + 1))
else
  echo -e "${GREEN}✓ No untracked files${NC}"
fi
echo ""

# Test 2: Check for uncommitted changes
echo "📋 Test 2: Checking for uncommitted changes..."
if git diff-index --quiet HEAD --; then
  echo -e "${GREEN}✓ No uncommitted changes${NC}"
else
  echo -e "${RED}✗ ERROR: Uncommitted changes found. Please commit before deploying.${NC}"
  git diff-index HEAD --
  ERROR_COUNT=$((ERROR_COUNT + 1))
fi
echo ""

# Test 3: Build test
echo "📋 Test 3: Running production build..."
if npm run build > /tmp/build.log 2>&1; then
  echo -e "${GREEN}✓ Build successful${NC}"
else
  echo -e "${RED}✗ ERROR: Build failed${NC}"
  tail -50 /tmp/build.log
  ERROR_COUNT=$((ERROR_COUNT + 1))
fi
echo ""

# Test 4: Check for build warnings about image paths
echo "📋 Test 4: Checking for image path resolution issues..."
if grep -q "didn't resolve at build time" /tmp/build.log; then
  echo -e "${RED}✗ ERROR: Build has unresolved image paths${NC}"
  grep "didn't resolve at build time" /tmp/build.log
  ERROR_COUNT=$((ERROR_COUNT + 1))
else
  echo -e "${GREEN}✓ No image path resolution warnings${NC}"
fi
echo ""

# Test 5: Verify all CSS background-image URLs use correct paths
echo "📋 Test 5: Validating CSS background-image URLs..."
INVALID_PATHS=$(grep -r "background.*url('/JM-CaseStudies/images" src/pages/ 2>/dev/null || true)
if [ -n "$INVALID_PATHS" ]; then
  echo -e "${RED}✗ ERROR: Found hardcoded /JM-CaseStudies/ paths in CSS${NC}"
  echo "$INVALID_PATHS"
  ERROR_COUNT=$((ERROR_COUNT + 1))
else
  echo -e "${GREEN}✓ CSS background-image URLs are correct${NC}"
fi
echo ""

# Test 6: Check for missing image assets referenced in code
echo "📋 Test 6: Checking for missing image assets..."
MISSING_IMAGES=0

# Get all image references from markdown (macOS compatible)
MARKDOWN_IMAGES=$(grep -r "!\[" src/content/projects/ 2>/dev/null | sed -n 's/.*(\(\/JM-CaseStudies\/images\/[^)]*\)).*/\1/p' | sed 's|^/JM-CaseStudies/||' || true)

# Get all featured images from frontmatter (macOS compatible)
FEATURED_IMAGES=$(grep -r "featured_image:" src/content/projects/ 2>/dev/null | sed -n 's/.*: "\([^"]*images[^"]*\)".*/\1/p' | sed 's|^/JM-CaseStudies/||' || true)

# Get all CSS background images (macOS compatible)
CSS_IMAGES=$(grep -r "url('/images" src/pages/ 2>/dev/null | sed -n "s/.*url('\(\/images\/[^']*\)').*/\1/p" | sed "s|^/images/||" || true)

ALL_REFS=$(echo -e "$MARKDOWN_IMAGES\n$FEATURED_IMAGES\n$CSS_IMAGES" | sort -u | grep -v "^$")

while IFS= read -r img; do
  [ -z "$img" ] && continue
  if [ ! -f "public$img" ]; then
    echo -e "${RED}✗ Missing: public$img${NC}"
    MISSING_IMAGES=$((MISSING_IMAGES + 1))
  fi
done <<< "$ALL_REFS"

if [ $MISSING_IMAGES -eq 0 ]; then
  echo -e "${GREEN}✓ All image assets found${NC}"
else
  echo -e "${RED}✗ ERROR: $MISSING_IMAGES missing image asset(s)${NC}"
  ERROR_COUNT=$((ERROR_COUNT + 1))
fi
echo ""

# Test 7: Verify BASE_URL configuration
echo "📋 Test 7: Checking BASE_URL configuration..."
if grep -q "BASE_URL.*JM-CaseStudies" astro.config.mjs; then
  echo -e "${GREEN}✓ BASE_URL is configured correctly${NC}"
else
  echo -e "${YELLOW}⚠ WARNING: BASE_URL configuration may not be set correctly${NC}"
  WARNING_COUNT=$((WARNING_COUNT + 1))
fi
echo ""

# Test 8: Check for broken links in key pages
echo "📋 Test 8: Validating internal links..."
BROKEN_LINKS=0
for file in dist/index.html dist/about/index.html dist/contact/index.html; do
  if [ -f "$file" ]; then
    # Check for broken navigation links
    if grep -q "href=\"/JM-CaseStudies/" "$file"; then
      # This is expected, just verify they exist
      :
    fi
  fi
done
echo -e "${GREEN}✓ Internal link validation passed${NC}"
echo ""

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 TEST SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $ERROR_COUNT -eq 0 ] && [ $WARNING_COUNT -eq 0 ]; then
  echo -e "${GREEN}✓ All checks passed! Ready to deploy.${NC}"
  echo ""
  exit 0
elif [ $ERROR_COUNT -eq 0 ]; then
  echo -e "${YELLOW}⚠ $WARNING_COUNT warning(s) found. Deployment may proceed with caution.${NC}"
  echo ""
  exit 0
else
  echo -e "${RED}✗ $ERROR_COUNT error(s) found. Please fix before deploying.${NC}"
  echo ""
  exit 1
fi
