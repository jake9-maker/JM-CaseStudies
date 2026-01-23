#!/usr/bin/env node

/**
 * Pre-deployment validation script
 * Runs critical checks before deploying to production
 *
 * Usage: npm run pre-deploy
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
};

let errors = [];
let warnings = [];

function log(message) {
  console.log(message);
}

function success(message) {
  log(`${colors.green}✓${colors.reset} ${message}`);
}

function error(message) {
  log(`${colors.red}✗${colors.reset} ${message}`);
  errors.push(message);
}

function warn(message) {
  log(`${colors.yellow}⚠${colors.reset} ${message}`);
  warnings.push(message);
}

function run(command) {
  try {
    return execSync(command, { stdio: 'pipe' }).toString();
  } catch (e) {
    return null;
  }
}

function header(text) {
  log('\n' + '─'.repeat(60));
  log(`  ${text}`);
  log('─'.repeat(60) + '\n');
}

// Start checks
header('Pre-Deployment Checks');

// Check 1: No uncommitted changes
if (run('git diff-index --quiet HEAD --')) {
  success('No uncommitted changes');
} else {
  error('Uncommitted changes found. Please commit before deploying.');
}

// Check 2: Production build
try {
  execSync('npm run build', { stdio: 'ignore' });
  success('Build successful');

  // Check for build warnings about image paths
  const buildOutput = execSync('npm run build 2>&1', { encoding: 'utf-8', stdio: 'pipe' }).toString();
  if (buildOutput.includes("didn't resolve at build time")) {
    error('Build has unresolved image path warnings');
  }
} catch (e) {
  error('Build failed');
}

// Check 3: Verify all referenced images exist
const imageRefs = new Set();

// Get images from markdown
const mdFiles = execSync('find src/content/projects -name "index.md" -type f', {
  encoding: 'utf-8',
}).split('\n').filter(f => f);

mdFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(/!\[.*?\]\((.*?\.png)\)/g) || [];
  matches.forEach(m => {
    const img = m.match(/\((.*?\.png)\)/)[1];
    imageRefs.add(img.split('/').pop());
  });
});

// Get images from frontmatter
mdFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const match = content.match(/featured_image:\s*"(.*?\.png)"/);
  if (match) {
    imageRefs.add(match[1].split('/').pop());
  }
});

// Get images from CSS
const astroFiles = execSync('find src/pages -name "*.astro" -type f', {
  encoding: 'utf-8',
}).split('\n').filter(f => f);

astroFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(/url\('\/images\/(.*?\.png)'\)/g) || [];
  matches.forEach(m => {
    const img = m.match(/\/images\/(.*?\.png)/)[1];
    imageRefs.add(img);
  });
});

// Verify all images exist
let missingImages = [];
imageRefs.forEach(img => {
  const filepath = path.join('public/images', img);
  if (!fs.existsSync(filepath)) {
    missingImages.push(img);
  }
});

if (missingImages.length === 0) {
  success('All image assets found');
} else {
  missingImages.forEach(img => {
    error(`Missing image: public/images/${img}`);
  });
}

// Check 4: CSS paths don't have hardcoded base path
const badCssPaths = [];
astroFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  if (content.includes('/JM-CaseStudies/images')) {
    badCssPaths.push(file);
  }
});

if (badCssPaths.length === 0) {
  success('CSS background-image URLs are correct');
} else {
  badCssPaths.forEach(file => {
    error(`CSS has hardcoded base path: ${file}`);
  });
}

// Summary
header('Summary');

if (errors.length === 0) {
  log(`${colors.green}✓ All checks passed! Ready to deploy.${colors.reset}\n`);
  process.exit(0);
} else {
  log(`${colors.red}✗ ${errors.length} error(s) found. Please fix before deploying.${colors.reset}\n`);
  process.exit(1);
}
