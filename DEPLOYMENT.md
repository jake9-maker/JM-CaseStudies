# Deployment Guide

This document outlines the deployment process for the JM Case Studies portfolio site at jakemaisel.com.

## Pre-Deployment Checklist

Before deploying to production, **always run the pre-deployment validation script**:

```bash
npm run pre-deploy
```

This script performs critical checks to prevent deployment errors:

### Tests Performed

1. **Untracked Files Check** - Ensures all files are committed to git
2. **Uncommitted Changes Check** - Verifies no staged changes exist
3. **Production Build** - Runs `astro build` to catch build errors early
4. **Image Path Resolution** - Detects unresolved image paths (the issue that caused our deployment failure)
5. **CSS Background-Image URLs** - Validates no hardcoded `/JM-CaseStudies/` paths in CSS
6. **Missing Image Assets** - Confirms all referenced images exist in `/public/images/`
7. **BASE_URL Configuration** - Verifies astro.config.mjs is set correctly
8. **Internal Links** - Basic validation of generated HTML links

### Understanding the Output

The script will display:
- ✅ Green checks for passing tests
- ⚠️ Yellow warnings for non-blocking issues
- ❌ Red errors that must be fixed before deployment

**Exit Codes:**
- `0` = Ready to deploy (all checks passed, warnings are OK)
- `1` = Fix errors before deploying

## Deployment Process

### Step 1: Run Pre-Deployment Checks

```bash
npm run pre-deploy
```

All tests must pass (warnings are acceptable).

### Step 2: Push to Origin/Main

```bash
git push origin main
```

### Step 3: GitHub Actions Deployment

GitHub Actions will automatically:
1. Run the full test suite
2. Build the production bundle
3. Deploy to jakemaisel.com via GitHub Pages

Monitor the deployment at: https://github.com/jake9-maker/JM-CaseStudies/actions

## Common Issues & Solutions

### Issue: Build Warnings About Unresolved Image Paths

**Symptom:** Build output shows `didn't resolve at build time` warnings

**Root Cause:** CSS background-image URLs contain hardcoded base path (e.g., `/JM-CaseStudies/images/...`)

**Solution:**
- CSS background-image URLs should use `/images/...` only
- Astro/Vite automatically injects the base path during build
- Use in HTML/markdown: `/JM-CaseStudies/images/...` (full path needed for runtime)
- Use in CSS: `/images/...` (Vite resolves this at build time)

**Example Fix:**
```css
/* ❌ WRONG - causes build warnings */
.hero {
  background: url('/JM-CaseStudies/images/hero.png');
}

/* ✅ CORRECT - Vite resolves the base path */
.hero {
  background: url('/images/hero.png');
}
```

### Issue: Missing Image Assets

**Symptom:** Pre-deploy script reports missing images

**Solution:**
1. Verify image file exists: `ls public/images/[filename].png`
2. Check filename matches exactly (case-sensitive)
3. Ensure image is committed to git: `git add public/images/` && `git commit`

### Issue: Script Permission Denied

**Symptom:** `Permission denied` when running npm run pre-deploy

**Solution:**
```bash
chmod +x scripts/pre-deploy-check.sh
```

## Image Management

### Image Paths by Context

| Context | Path Format | Example |
|---------|-------------|---------|
| Markdown inline images | `/JM-CaseStudies/images/...` | `![Title](/JM-CaseStudies/images/diagram.png)` |
| HTML img src | `/JM-CaseStudies/images/...` | `<img src="/JM-CaseStudies/images/photo.png">` |
| CSS background-image | `/images/...` | `background: url('/images/hero.png')` |
| Featured image frontmatter | `/JM-CaseStudies/images/...` | `featured_image: "/JM-CaseStudies/images/preview.png"` |

### Adding New Images

1. Add PNG file to `public/images/`
2. Use correct path format based on context (see table above)
3. Run `npm run pre-deploy` to validate
4. Commit: `git add public/images/` && `git commit -m "..."`

## Environment

- **Site URL (Production):** jakemaisel.com
- **Repository:** https://github.com/jake9-maker/JM-CaseStudies
- **Hosting:** GitHub Pages (via Actions)
- **Base Path:** `/JM-CaseStudies/`
- **Build Command:** `npm run build`
- **Deploy Trigger:** Push to main branch

## Rollback

If a deployment fails in production:

1. Identify the problematic commit: `git log --oneline`
2. Revert the commit: `git revert [commit-hash]`
3. Push: `git push origin main`
4. Verify the rollback deployed: Check GitHub Actions

## Testing Locally

Test the production build locally before deploying:

```bash
# Build the production bundle
npm run build

# Preview the built site
npm run preview
```

Open http://localhost:3000/JM-CaseStudies/ to test locally.

## Questions?

For deployment issues, check:
1. Pre-deploy script output for specific error details
2. GitHub Actions logs: https://github.com/jake9-maker/JM-CaseStudies/actions
3. This documentation for common issues
