# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimal portfolio site built with Astro showcasing 3 UX design case studies for recruiters. The site emphasizes content-first design with markdown-based case studies, static output for GitHub Pages hosting, and implicit framing of three core design competencies: complex problem-solving, AI integration, and UX research.

## Key Architecture

**Framework**: Astro 5 (static site generator)
- Uses Astro's content collections for structured markdown frontmatter
- Astro components (.astro) for layouts and reusable UI
- CSS-in-component styling with CSS variables for theming
- Zod schema validation for all project frontmatter at build time

**Content Structure**:
- Projects live in `src/content/projects/[project-slug]/index.md`
- Each project has a YAML frontmatter defining metadata, featured status, role, team size, duration, pillars, and impact
- Schema defined in `src/content/config.ts` with required/optional fields documented in `src/content/CASE_STUDY_SCHEMA.md`
- Homepage queries featured projects using `getCollection('projects')` and sorts by `featured_order`

**Styling Approach**:
- CSS variables for theming defined in `src/styles/theme.css`
- Dark/light mode toggle stored in localStorage with immediate initialization to prevent flash
- Base layout at `src/layouts/BaseLayout.astro` provides header, footer, and analytics
- Component-scoped styles using Astro's `<style>` blocks
- Responsive design with mobile breakpoints at 768px

**Design Philosophy**:
- Whitespace-driven typography and layout
- Content is the protagonist; design system is minimal and supporting
- Three pillars (complex-problem-solving, ai-integration, ux-research) are implicit—visible through case study framing, not explicit labels
- Pillar structure maps to content sections: Approach & Research (UX research), Solution & Implementation (problem-solving), Results & Impact (AI integration)

## Common Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production (generates static HTML)
npm run build

# Preview production build locally
npm run preview

# Run pre-deployment checks (image optimization, link validation, etc.)
npm run pre-deploy
```

## Adding a New Case Study

1. Create directory: `src/content/projects/[project-slug]/`
2. Add `index.md` with required frontmatter fields from `CASE_STUDY_SCHEMA.md`
3. Store featured image in same directory (relative path in frontmatter)
4. Structure content with markdown sections: Problem & Context, Approach & Research, Solution & Implementation, Results & Impact
5. Set `featured: true` and `featured_order` (1-3) to appear on homepage
6. Featured projects will auto-validate at build time if schema is violated

## Key Files & Their Roles

- **src/pages/index.astro**: Homepage—fetches featured projects, renders grid, includes ContactCTA
- **src/pages/projects/index.astro**: Projects listing page with filter UI
- **src/pages/projects/[slug].astro**: Dynamic project detail page with table of contents
- **src/layouts/BaseLayout.astro**: Base HTML wrapper with header, footer, meta tags, theme initialization
- **src/content/config.ts**: Zod schema defining project frontmatter structure
- **src/styles/theme.css**: CSS variables for colors, gradients, spacing (light/dark mode)
- **astro.config.mjs**: Site config, markdown options (GFM enabled), static output mode
- **scripts/pre-deploy.js**: Runs pre-deployment validation checks

## Important Design Decisions

- **Markdown + Static**: No database or CMS—all content is markdown in git. This keeps content versioned and hosting simple.
- **Three Featured Projects Maximum**: Respects recruiter time by surfacing only the strongest work on homepage. Additional projects available via /projects.
- **Implicit Pillar Framing**: Pillars are not displayed as tags or labels in the UI. Instead, case study narrative and section headers implicitly showcase each competency.
- **Featured Image Required**: Every project card on homepage displays an image. Image must be provided in frontmatter (`featured_image` field).
- **Dark Mode First**: Theme toggle uses localStorage to persist choice. Light mode is default but respects system preference if not set.

## Project Frontmatter Required Fields

All fields enforced via Zod schema at build time:

- `title` (string): Project name
- `date` (YYYY-MM-DD): Completion date
- `summary` (string): 1-2 sentence overview for card preview
- `role` (string): Your role on project
- `team_size` (integer): Total team count
- `duration` (string): Project timeframe (e.g., "4 months")
- `featured` (boolean): Show on homepage?
- `featured_image` (string): Relative path to image
- `featured_order` (integer): Display order (1-3) if featured
- `pillars` (array): One or more of: `complex-problem-solving`, `ai-integration`, `ux-research`, `retention-strategy`, `data-driven-design`, `mobile-ux`, `operational-design`, `field-research`, `product-strategy`, `market-discovery`

Optional fields: `impact` (array of outcome statements), `tags` (array for future use), `meta_description`, `og_image`

See `src/content/CASE_STUDY_SCHEMA.md` for complete documentation with examples.

## CSS Variables & Theming

Theme variables defined in `src/styles/theme.css` and scoped to `[data-theme]` attribute on `<html>`:

- `--color-text`: Primary text color
- `--color-text-muted`: Secondary/reduced prominence text
- `--color-bg-primary`: Main background
- `--color-bg-secondary`: Card/container backgrounds
- `--color-bg-tertiary`: Tertiary elements
- `--color-border`: Border colors
- `--color-accent`: Highlight/interaction color
- `--gradient-start`, `--gradient-end`: Hero section gradients

Values differ between light and dark modes. Add mode-specific variable overrides under `html[data-theme="dark"]` selector.

## Content Collections & Validation

Astro content collections auto-validate at build time. If frontmatter violates schema (missing required field, wrong type, invalid enum value), build fails with clear error message pointing to the specific field and issue. This prevents invalid projects from entering production.

## Hosting & Deployment

- **Static Output**: `output: 'static'` in astro.config.mjs means no server required
- **GitHub Pages Compatible**: Built site is pure HTML/CSS/JS, works on any static host
- **Pre-deploy Checks**: Run `npm run pre-deploy` before pushing to validate images, links, schema compliance

## Theme Toggle Behavior

Theme initialization happens immediately in `<script>` tag in BaseLayout head to prevent light/dark flash on page load:

1. Check localStorage for saved theme preference
2. Fall back to system preference (prefers-color-scheme: dark)
3. Default to light if neither available
4. Set `[data-theme]` attribute on `<html>` before page renders

CSS variables automatically apply based on `[data-theme]` selector.
