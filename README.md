# JM Case Studies - UX Design Portfolio

A minimal, content-first portfolio site showcasing three flagship UX design projects. Built with Astro and designed for recruiters to quickly understand your expertise and get in touch.

## About This Site

This portfolio demonstrates:
- **Complex Problem-Solving** - Strategic thinking applied to product challenges
- **AI Integration** - How AI and automation enhance user experiences
- **UX Research** - User-centered design backed by research methodologies

The site is intentionally minimal—content is the protagonist, design is supporting. All projects are markdown-based for easy versioning and maintenance.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site locally. The dev server includes hot reload—save any changes and they'll appear instantly.

## Building & Deployment

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Run pre-deployment validation
npm run pre-deploy
```

The `build` command outputs static HTML to `dist/` for hosting on GitHub Pages or any static host.

## Adding Projects

1. **Create a new project directory:**
   ```
   src/content/projects/[project-slug]/
   ```

2. **Add `index.md` with frontmatter:**
   ```yaml
   ---
   title: "Your Project Title"
   date: "2024-09-15"
   summary: "1-2 sentence description of what was built and the outcome."
   role: "Lead UX Designer"
   team_size: 5
   duration: "4 months"
   featured: true
   featured_image: "hero.jpg"
   featured_order: 1
   pillars: ["complex-problem-solving", "ai-integration"]
   impact:
     - "40% reduction in setup time"
     - "Adopted by 12 teams"
   ---
   ```

3. **Add project content** using markdown sections:
   ```markdown
   ## Problem & Context
   What challenge did the team face?

   ## Approach & Research
   What research methods did you use? (Emphasizes UX research pillar)

   ## Solution & Implementation
   What did you design/build? (Emphasizes problem-solving pillar)

   ## Results & Impact
   What were the outcomes? How did AI contribute? (Emphasizes AI integration pillar)
   ```

4. **Add featured image** in the same directory (referenced in frontmatter)

5. **Set `featured: true`** and `featured_order` (1-3) to appear on homepage

See `src/content/CASE_STUDY_SCHEMA.md` for complete frontmatter documentation with all required and optional fields.

## Project Structure

```
src/
├── pages/
│   ├── index.astro              # Homepage with featured projects
│   ├── about.astro              # About page
│   ├── contact.astro            # Contact page
│   └── projects/
│       ├── index.astro          # All projects listing
│       └── [slug].astro         # Individual project detail page
├── layouts/
│   └── BaseLayout.astro         # Base HTML wrapper with header/footer
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ContactCTA.astro         # Contact call-to-action
│   ├── ProjectFilter.astro      # Filter UI for projects
│   ├── TableOfContents.astro    # Auto-generated TOC for projects
│   ├── ThemeToggle.astro        # Dark/light mode toggle
│   └── Analytics.astro
├── content/
│   ├── config.ts                # Zod schema for project frontmatter
│   ├── CASE_STUDY_SCHEMA.md     # Schema documentation
│   └── projects/
│       └── [project-slug]/
│           ├── index.md         # Project content
│           └── hero.jpg         # Featured image
└── styles/
    └── theme.css                # CSS variables for light/dark theming
```

## Configuration

### Site Config
Edit `astro.config.mjs`:
- `site`: Your domain (used for Open Graph and canonical URLs)
- `base`: Base path for deployments (default: `/` for root)

### Theme Variables
Edit `src/styles/theme.css` to customize colors, spacing, and gradients. All theming uses CSS variables that support light and dark modes.

### Content Schema
Project frontmatter is validated via Zod in `src/content/config.ts`. Invalid fields will cause the build to fail with clear error messages. Edit this file to add new frontmatter fields or modify validation rules.

## Features

- **Dark Mode**: Automatic theme detection with localStorage persistence
- **Responsive Design**: Works on desktop, tablet, and mobile
- **SEO Optimized**: Meta tags, Open Graph, canonical URLs, and structured data
- **Fast**: Static HTML with no runtime JavaScript overhead
- **Markdown Content**: All projects version-controlled in git
- **Schema Validation**: Zod ensures all project data is valid at build time
- **Table of Contents**: Auto-generated for long case studies

## Hosting

This site works on any static host:
- **GitHub Pages** - Enable in repo settings, push to `main` branch
- **Vercel** - Connect repo and deploy (detects Astro automatically)
- **Netlify** - Connect repo with build command `npm run build`
- **Any static host** - Upload contents of `dist/` folder

## Customization

### Colors & Spacing
All colors and spacing use CSS variables defined in `src/styles/theme.css`. Update these to match your brand.

### Typography
Font stack is defined in `BaseLayout.astro`. Change the font-family to use different typefaces.

### Sections & Pages
All top-level pages live in `src/pages/`. Create new `.astro` files to add pages. Use `BaseLayout` for consistent header/footer.

### Components
Reusable components live in `src/components/`. Each is a standalone `.astro` file. Import and use in pages.

## Development

### Hot Reload
Changes to `.astro`, `.md`, and CSS files automatically reload the browser.

### Type Checking
TypeScript is supported by default. Add types to props interfaces in components.

### Adding Dependencies
```bash
npm install [package-name]
```

The site has minimal dependencies—only Astro. Additional packages should be justified.

## Build & Deploy Workflow

1. **Develop locally** - `npm run dev`
2. **Validate before pushing** - `npm run pre-deploy`
3. **Build for production** - `npm run build`
4. **Push to git** - GitHub Pages or other host will auto-deploy
5. **Verify on live site** - Check your domain

## Performance

- **Minimal JavaScript**: ~0kb of shipped JavaScript (100% static HTML/CSS)
- **Optimized Images**: Featured images are lazy-loaded
- **Fast Builds**: Astro builds are typically <5 seconds
- **High Lighthouse Scores**: Expect 90+ on all metrics

## Troubleshooting

**Build fails with schema error**: Check project frontmatter matches schema in `src/content/config.ts`. Missing required fields or incorrect types will fail.

**Images not showing**: Ensure `featured_image` path is relative to project directory. Example: `hero.jpg` or `./images/hero.png`.

**Theme not persisting**: Check browser console for localStorage errors. Dark mode toggle uses localStorage—clear if having issues.

**Links broken on deployment**: Verify `site` in `astro.config.mjs` matches your domain. This affects Open Graph and canonical URLs.

## License

ISC

## Author

JM
