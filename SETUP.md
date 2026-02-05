# JM Case Studies - Setup & Configuration Guide

## Project Overview

This is a portfolio website built with Astro, showcasing design case studies. It features:
- Static site generation for optimal performance
- Dark/light theme support with CSS variables
- Responsive design with mobile-first approach
- SEO optimized with meta tags and sitemap
- Project filtering by focus area
- Analytics integration ready
- Table of contents for long-form content

## Prerequisites

- Node.js 18+ and npm
- Git
- Text editor (VS Code recommended)

## Installation

```bash
# Clone the repository
git clone https://github.com/jake9-maker/JM-CaseStudies.git
cd JM-CaseStudies

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```
# Google Analytics ID (optional)
PUBLIC_GA_ID=G-XXXXXXXXXX
```

To get your Google Analytics ID:
1. Go to https://analytics.google.com/
2. Create a property for your website
3. Copy the measurement ID (starts with G-)

### Site Configuration

Edit `astro.config.mjs` to update:
- `site`: Your production domain
- `base`: URL path (typically `/` for root domain)

### Theme Colors

Edit `src/styles/theme.css` to customize colors:
- Light theme variables (`:root` selector)
- Dark theme variables (`[data-theme='dark']` selector)

## Adding New Case Studies

1. Create a new folder in `src/content/projects/`:
   ```
   src/content/projects/your-project-name/
   ├── index.md
   └── images/ (optional)
   ```

2. Create `index.md` with this frontmatter:
   ```yaml
   ---
   title: "Your Project Title"
   date: "2025-01-15"
   summary: "One-line summary of the project"
   role: "Your roles"
   team_size: 5
   duration: "3 months"
   featured: true
   featured_order: 1
   featured_image: "/images/project-preview.png"
   featured_image_alt: "Alt text for SEO"
   pillars:
     - ux-research
     - product-strategy
   meta_description: "SEO description for search results"
   og_image: "/images/project-preview.png"
   ---
   
   Your markdown content here...
   ```

3. Available pillars:
   - `complex-problem-solving`
   - `ai-integration`
   - `ux-research`
   - `retention-strategy`
   - `data-driven-design`
   - `mobile-ux`
   - `operational-design`
   - `field-research`
   - `product-strategy`
   - `market-discovery`

## Page Structure

```
src/
├── pages/
│   ├── index.astro (homepage)
│   ├── about.astro
│   ├── contact.astro
│   └── projects/
│       ├── index.astro (projects listing)
│       └── [slug].astro (individual project)
├── layouts/
│   └── BaseLayout.astro (main layout)
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProjectFilter.astro
│   ├── TableOfContents.astro
│   └── Analytics.astro
├── content/
│   ├── config.ts (content schema)
│   └── projects/ (case study markdown)
└── styles/
    └── theme.css (CSS variables)
```

## Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment. To deploy:

```bash
# Build the site
npm run build

# Commit changes
git add .
git commit -m "your message"

# Push to GitHub
git push origin main
```

GitHub Actions will automatically build and deploy to your custom domain.

### Custom Domain

Update your GitHub Pages settings:
1. Go to repository Settings > Pages
2. Set custom domain to `jakemaisel.com`
3. Update `astro.config.mjs` with your domain

## Development Workflow

### Local Development

```bash
npm run dev
```

Starts server at http://localhost:4323. Changes hot-reload automatically.

### Building

```bash
npm run build
```

Creates optimized static files in `dist/` directory.

## Key Features & Usage

### Dark/Light Mode

Users can toggle theme via the theme toggle in the header. Preference is saved to localStorage.

### Project Filtering

On the projects page, users can filter by "Focus Area" (pillars) to find relevant work.

### Table of Contents

Long-form case studies automatically generate a table of contents with jump links based on headings.

### Analytics

Once you add your Google Analytics ID to `.env.local`, the site will automatically track:
- Page views
- User engagement
- Scroll depth
- Click events

## Color Contrast & Accessibility

All colors meet WCAG AAA standards for contrast:
- Light mode text on background: 13:1
- Light mode muted text: 9:1  
- Dark mode text on background: 13:1
- Dark mode muted text: 9:1
- Dark mode subtle text: 5.5:1

## Performance Optimization

### Images

Images are optimized for web:
- Hero images: 950KB each (compressed)
- Case study images: Resized to max 1920px width
- All images support lazy loading

### CSS & JavaScript

- Selective CSS transitions (not on all elements)
- Inline critical CSS for fast first paint
- Deferred non-critical JavaScript
- No heavy JavaScript dependencies

### Build Output

- Static HTML (no server needed)
- Minimal CSS (~15KB gzipped)
- Minimal JavaScript (~5KB gzipped)

## Troubleshooting

### Build Errors

If you get build errors:
1. Delete `node_modules` and `dist` directories
2. Run `npm install` again
3. Try `npm run build`

### Dark Mode Not Working

1. Check that `localStorage` is available
2. Verify `theme.css` is imported in BaseLayout
3. Check browser DevTools for JavaScript errors

### Images Not Loading

1. Verify image paths use `/images/filename` format
2. Check that images are in `public/images/` directory
3. Check file permissions and case sensitivity

## Git Workflow

```bash
# Create a new branch for features
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: your feature description"

# Push and create pull request
git push origin feature/your-feature
```

## Maintenance

- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Test all pages after updates
- Verify analytics connection monthly

## Support & Resources

- [Astro Documentation](https://docs.astro.build)
- [MDN Web Docs](https://developer.mozilla.org)
- [Google Analytics Help](https://support.google.com/analytics)
