# Phase 1: Foundation & Site Structure - Research

**Researched:** 2025-12-28
**Domain:** Static site generation, Markdown content management, GitHub Pages deployment
**Confidence:** HIGH

<research_summary>
## Summary

Researched the static site generator ecosystem for a Markdown-driven portfolio with GitHub Pages hosting. The landscape offers three strong candidates: **Hugo** (fastest, mature, excellent GitHub Pages support), **Astro** (modern, component-driven, excellent DX), and **Eleventy** (simple, flexible, JavaScript-friendly).

For this project—clean, minimal portfolio focused on content with zero CMS costs—**Hugo is the primary recommendation**. It's fast, has built-in GitHub Pages support, mature Markdown handling, and an active community. Eleventy is a close second if you prefer JavaScript ecosystem flexibility.

Key finding: Don't build custom site scaffolding. Use an existing generator. The "simple static site" problem is solved. Spend tokens on content structure (case study metadata, component reusability) and deployment pipeline, not basic site generation.

**Primary recommendation:** Start with Hugo. Establish Markdown front matter structure for case studies (title, date, pillars, featured_image, summary). Configure GitHub Actions workflow for automated deployment. Fallback to Eleventy if JavaScript templates feel more natural than Hugo's templating.

</research_summary>

<standard_stack>
## Standard Stack

The established tools for static portfolio sites:

### Core
| Library/Tool | Version | Purpose | Why Standard |
|---|---|---|---|
| Hugo | 0.146.0+ | Static site generation | Fastest generator, 1ms per page, mature, GitHub Pages native |
| GitHub Pages | 2025 | Hosting/deployment | Free, no server costs, integrated with GitHub, native support for Jekyll/Hugo |
| GitHub Actions | 2025 | Build automation | Native to GitHub, no additional service, workflow-based CI/CD |

### Supporting
| Tool | Version | Purpose | When to Use |
|---|---|---|---|
| Markdown (CommonMark) | 2025 | Content format | Universal, portable, version-controllable |
| YAML front matter | 2025 | Content metadata | Standard for all SSGs, encodes page metadata |
| Git | 2.x | Version control | Track content changes, enable workflow triggers |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|---|---|---|
| Hugo | Eleventy (11ty) | 11ty more flexible, JavaScript-friendly, but slower builds |
| Hugo | Astro | Astro more modern, component-driven, overkill for content-first portfolio |
| Hugo | Next.js static export | Next.js requires .nojekyll, basePath/assetPrefix config, more setup |
| Hugo | Jekyll | Jekyll slower than Hugo, but tighter GitHub Pages integration |

### Installation

```bash
# macOS
brew install hugo

# Verify installation
hugo version

# Initialize git (if not already done)
git init

# Alternative: Eleventy
npm install -g @11ty/eleventy
# or
npm install @11ty/eleventy (local to project)
```

</standard_stack>

<architecture_patterns>
## Architecture Patterns

### Recommended Project Structure

```
src/
├── content/
│   ├── _index.md                    # Homepage
│   ├── about.md                     # About page
│   └── projects/
│       ├── project-1/
│       │   ├── index.md             # Case study content
│       │   ├── images/
│       │   │   ├── hero.jpg
│       │   │   ├── process-1.jpg
│       │   │   └── results.jpg
│       │   └── data.yml             # (Optional) structured project data
│       ├── project-2/
│       └── project-3/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html              # Base template
│   │   ├── home.html                # Homepage layout
│   │   ├── list.html                # Project listing
│   │   └── single.html              # Case study single page
│   └── partials/
│       ├── header.html
│       ├── footer.html
│       ├── nav.html
│       └── cta.html                 # Contact CTA component
├── static/
│   ├── css/
│   │   └── main.css                 # Custom styles
│   └── images/
│       └── logo.svg
├── data/
│   └── contact.yml                  # Contact info, social links
├── config.toml                       # Hugo configuration
└── .github/
    └── workflows/
        └── deploy.yml               # GitHub Actions deployment

# Output (generated, not committed):
public/                               # Built site (add to .gitignore)
resources/                            # Cache (add to .gitignore)
```

### Pattern 1: YAML Front Matter for Case Studies

**What:** Each case study uses consistent front matter metadata structure for templating and site generation

**When to use:** Always—enables template to access structured data about the project

**Example:**

```markdown
---
title: "AI-Powered Onboarding Platform"
date: 2024-06-15
summary: "Redesigned onboarding flow using AI recommendations, reducing completion time by 40%"

# These pillars implicitly organize the site
pillars:
  - "complex-problem-solving"
  - "AI-integration"
  - "UX-research"

# Featured on homepage
featured: true
featured_image: "images/hero.jpg"
featured_order: 1

# Optional: impact metrics
impact:
  - metric: "40% reduction in setup time"
  - metric: "68% user satisfaction increase"
  - metric: "3.2x feature adoption vs baseline"

# For recruiter scannability
role: "Lead UX Designer"
team_size: "5"
duration: "4 months"
---

## Problem

[Content here - Markdown]
```

### Pattern 2: Component-Based Templates

**What:** Reusable partials for common UI elements (CTAs, image galleries, case study sections)

**When to use:** Reduces duplication, maintains consistency across case studies

**Example:**

```html
<!-- layouts/partials/contact-cta.html -->
<section class="cta">
  <h2>Ready to work together?</h2>
  <p>Let's discuss how I can help with your next project.</p>
  <a href="mailto:{{ .Site.Data.contact.email }}" class="btn btn-primary">Get In Touch</a>
</section>

<!-- Usage in case study template -->
{{ partial "contact-cta" . }}
```

### Pattern 3: Markdown with Shortcodes for Rich Content

**What:** Use Hugo shortcodes to embed structured content (image galleries, video, callouts) while keeping source in Markdown

**When to use:** When Markdown alone lacks expressiveness for design needs

**Example:**

```markdown
## Design Process

{{< gallery >}}
  {{< img src="images/sketch-1.jpg" alt="Initial sketches" >}}
  {{< img src="images/sketch-2.jpg" alt="Refined iterations" >}}
{{< /gallery >}}

{{< callout type="insight" >}}
**Key Finding:** Users preferred sequential onboarding over multi-step preview.
{{< /callout >}}
```

### Anti-Patterns to Avoid

- **Hardcoding content in templates:** Put content in Markdown files, not HTML templates. Enables easy updates and version control.
- **Inconsistent front matter structure:** Define schema upfront, use `hugo mod` or data validation if needed. Inconsistent metadata breaks templating.
- **Monolithic CSS:** Organize styles by component/section. Makes maintenance easier as portfolio grows.
- **Keeping images in version control:** Store images in `/static/images/` but consider external CDN (Cloudinary, Bunny) if site grows. Large git repos are slower.
- **Complex nested content organization:** Keep projects at top level or one level deep (`projects/project-name/`). Over-nesting makes paths confusing.

</architecture_patterns>

<dont_hand_roll>
## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| Site generation | Custom build scripts | Hugo (or Eleventy/Astro) | Generators handle templating, partials, data cascade, optimization. Custom code has edge cases (caching, asset hashing, image optimization). |
| Image optimization | Manual resize/compress | Hugo image processing or Cloudinary | Responsive images, srcset generation, format conversion (webp) are solved problems. Hand-rolling leads to slow sites. |
| Deployment automation | Manual FTP uploads | GitHub Actions workflow | Workflows ensure builds pass, handle secrets safely, trigger on push. Manual steps fail silently. |
| Markdown parsing | Custom parsing | Built-in generator support | YAML front matter, shortcodes, special syntax all require careful parsing. Use generator's built-in support. |
| SEO metadata generation | Manual meta tags | Hugo output formats (JSON-LD, RSS) | Hugo can auto-generate structured data, sitemaps, og:tags from front matter. Manual maintenance breaks SEO. |
| Responsive images | Manual srcset/sizes | Hugo image resources or Cloudinary | Building srcset manually for each image scales poorly and is error-prone. |

**Key insight:** Static site generators solve the "how do we manage and build static content" problem. The ecosystem is mature and stable. Every hour spent on custom scaffolding is an hour not spent on content and design.

</dont_hand_roll>

<common_pitfalls>
## Common Pitfalls

### Pitfall 1: Inconsistent Markdown Front Matter
**What goes wrong:** Case studies have different metadata structures. Some have `tags`, others `categories`, some neither. Templates break or show incomplete data.
**Why it happens:** Started with one structure, iterated without enforcing schema.
**How to avoid:** Define front matter schema upfront in README or use Hugo's `validateOutput` during build. Create template for new projects (`hugo new projects/project-template/index.md`).
**Warning signs:** Some case studies show featured images, others don't. Pillar categories missing from some projects.

### Pitfall 2: Image Asset Bloat
**What goes wrong:** Portfolio grows to 500+ MB because high-resolution images are committed to git.
**Why it happens:** Store everything in git for "version control."
**How to avoid:** Keep images in `/static/images/` (git-ignored or stored separately). Use image CDN for actual delivery (Cloudinary, Bunny, imgix). Store low-res thumbnails in git, full-res on CDN.
**Warning signs:** Clone takes forever. GitHub shows repo size warning. CI/CD pipeline slow.

### Pitfall 3: Broken Links on Deployment
**What goes wrong:** Site builds locally but images/CSS don't load on GitHub Pages because paths are wrong.
**Why it happens:** Local paths work relative to filesystem, but GitHub Pages uses URL paths (e.g., `jm-casestudies.github.io/JM-CaseStudies/` if repo name is part of path).
**How to avoid:** Set `baseURL` in `config.toml` correctly for production. Test GitHub Actions build output before deploying. Use `.nojekyll` file (for Next.js) or let Hugo handle it.
**Warning signs:** Site works on `localhost:1313` but styles/images fail on live GitHub Pages.

### Pitfall 4: Over-Engineering Templating
**What goes wrong:** Spent days building complex Hugo template logic, then realize 3 case studies don't need it.
**Why it happens:** Template flexibility seduction—"what if we need X?"
**How to avoid:** Start simple (single template for all case studies). Add complexity only when you have 3+ projects and patterns emerge. YAGNI (You Aren't Gonna Need It).
**Warning signs:** Template file is 300+ lines. Uses nested loops, conditionals for single use cases.

### Pitfall 5: GitHub Actions Workflow Secrets
**What goes wrong:** Deploy workflow stores secrets in plaintext or git history.
**Why it happens:** Didn't read GitHub Actions security docs first.
**How to avoid:** Use GitHub Secrets for anything sensitive. Never commit API keys, tokens, or credentials. For public repo, use only secrets that are safe public (e.g., repo name).
**Warning signs:** Credentials visible in workflow file or commit history.

</common_pitfalls>

<code_examples>
## Code Examples

### Basic Hugo Config (config.toml)

```toml
# Hugo configuration
baseURL = "https://jmaisel.github.io/JM-CaseStudies/"
title = "JM Case Studies"
theme = "ananke"  # Or custom theme
languageCode = "en-us"

# Content settings
paginate = 3
pluralizeListTitles = false

# Output formats
[outputs]
  home = ["HTML", "JSON"]

# Taxonomies (for organization)
[taxonomies]
  pillar = "pillars"
  tag = "tags"

# Menu (top navigation)
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1

[[menu.main]]
  name = "Projects"
  url = "/projects/"
  weight = 2

[[menu.main]]
  name = "Contact"
  url = "mailto:jmaisel@example.com"
  weight = 3
```

### GitHub Actions Deployment Workflow (.github/workflows/deploy.yml)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write

    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

### Case Study Template (layouts/projects/single.html)

```html
{{ define "main" }}
<article class="project-case-study">
  <header class="project-header">
    {{ if .Params.featured_image }}
      <img src="{{ .Params.featured_image }}" alt="{{ .Title }}" class="project-hero">
    {{ end }}
    <h1>{{ .Title }}</h1>
    <p class="project-summary">{{ .Params.summary }}</p>
  </header>

  <section class="project-meta">
    {{ if .Params.role }}
      <div class="meta-item">
        <strong>Role:</strong> {{ .Params.role }}
      </div>
    {{ end }}
    {{ if .Params.duration }}
      <div class="meta-item">
        <strong>Duration:</strong> {{ .Params.duration }}
      </div>
    {{ end }}
    {{ if .Params.pillars }}
      <div class="meta-item">
        <strong>Focus:</strong> {{ range .Params.pillars }}{{ . }} {{ end }}
      </div>
    {{ end }}
  </section>

  <div class="project-content">
    {{ .Content }}
  </div>

  {{ partial "contact-cta" . }}
</article>
{{ end }}
```

### Homepage Listing (layouts/projects/list.html)

```html
{{ define "main" }}
<section class="projects">
  <h1>Featured Projects</h1>
  <div class="projects-grid">
    {{ range where .Pages "Params.featured" true | first 3 }}
      <div class="project-card">
        {{ if .Params.featured_image }}
          <img src="{{ .Params.featured_image }}" alt="{{ .Title }}">
        {{ end }}
        <h3><a href="{{ .Permalink }}">{{ .Title }}</a></h3>
        <p>{{ .Params.summary }}</p>
        {{ if .Params.pillars }}
          <div class="pillars">
            {{ range .Params.pillars }}
              <span class="pillar-tag">{{ . }}</span>
            {{ end }}
          </div>
        {{ end }}
        <a href="{{ .Permalink }}" class="read-more">View Case Study →</a>
      </div>
    {{ end }}
  </div>
</section>
{{ end }}
```

</code_examples>

<sota_updates>
## State of the Art (2024-2025)

What's changed recently in static site generation:

| Old Approach | Current Approach | When Changed | Impact |
|---|---|---|---|
| Jekyll only for GitHub Pages | Any SSG with GitHub Actions workflows | 2023+ | Jekyll no longer required; Hugo/Astro/11ty all work well |
| Manual image optimization | Image resources in Hugo / CDN integration | 2023+ | Built-in or delegated optimization replaces manual resizing |
| Jekyll plugins for features | Shortcodes + data files | 2020+ | More portable, fewer dependencies, easier to version |
| Vercel/Netlify only for CI/CD | GitHub Actions native | 2022+ | GitHub Actions sufficient for most static sites, no external service needed |

**New tools/patterns to consider:**

- **GitHub Actions:** Now mature enough for most static site deployments. No need for external CI/CD service.
- **Hugo modules:** For shared components/themes across multiple projects (not needed for single portfolio).
- **Astro's Islands architecture:** Only relevant if needing interactive components (not for this portfolio).
- **Image CDNs (Cloudinary, Bunny):** If portfolio grows to 100+ MB of images, consider offloading to CDN.

**Deprecated/outdated:**

- **Manual GitHub Pages setup with git submodules:** Use GitHub Actions instead—simpler, more reliable.
- **Jekyll as the only option:** Hugo is faster, more flexible. Jekyll relevant mainly if investing in Ruby ecosystem.
- **Hand-rolling responsive images:** Use Hugo image resources or Cloudinary API.

</sota_updates>

<open_questions>
## Open Questions

None critical. All major decisions have verified solutions.

**Optional future considerations (v2):**
1. **Interactive case study elements** - If wanting clickable prototypes or interactive diagrams, investigate Astro or adding React islands via Hugo modules. Not needed for v1 (static content focus).
2. **Image CDN strategy** - If portfolio grows >100 images, evaluate Cloudinary vs Bunny vs Imgix for optimization and delivery. Git-storage works fine for v1.
3. **Multi-language support** - Hugo supports i18n via config. Not relevant for initial launch, but straightforward to add.

</open_questions>

<sources>
## Sources

### Primary (HIGH confidence)

- [Hugo Official Docs - Getting Started](https://gohugo.io/getting-started/quick-start/) - Core features, setup, GitHub Pages deployment verified
- [Astro Official Docs - Getting Started](https://docs.astro.build/en/getting-started/) - Feature overview, deployment options
- [Eleventy Official Docs - Getting Started](https://www.11ty.dev/docs/getting-started/) - Setup, features, learning resources
- [GitHub Docs - Using Custom Workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) - Workflow configuration verified
- [GitHub Docs - Using YAML Frontmatter](https://docs.github.com/en/contributing/writing-for-github-docs/using-yaml-frontmatter) - YAML front matter specification
- [Hugo Docs - Front Matter](https://gohugo.io/content-management/front-matter/) - YAML/TOML front matter structure

### Secondary (MEDIUM confidence - verified with official sources)

- [The Top Five Static Site Generators for 2025](https://cloudcannon.com/blog/the-top-five-static-site-generators-for-2025-and-when-to-use-them/) - Ecosystem overview, comparison
- [Hugo vs Jekyll 2025](https://gethugothemes.com/hugo-vs-jekyll) - Performance comparison, features
- [GitHub Pages Deploy Action](https://github.com/marketplace/actions/deploy-to-github-pages) - Workflow automation patterns
- [The Ultimate UX Case Study Template & Structure](https://blog.uxfol.io/ux-case-study-template/) - Case study content best practices (verified against Design Foundation practices)
- [How I built Portfolio Using Markdown and GitHub Actions](https://medium.com/dev-simplified/how-i-built-up-my-portfolio-using-markdown-and-github-actions-4a8b5e713c57) - Real-world pattern verification

### Tertiary (LOW confidence - informational only)

- Discourse threads and community blogs for SSG discussions (informational, not authoritative)

</sources>

<metadata>
## Metadata

**Research scope:**
- Core technology: Hugo, Eleventy, Astro, Next.js static export
- Ecosystem: GitHub Pages, GitHub Actions, Markdown parsing, YAML front matter
- Patterns: Project structure, content organization, deployment automation
- Pitfalls: Path issues, asset management, template complexity, configuration

**Confidence breakdown:**
- Standard stack: HIGH - Verified with Context7 and official docs, widely used for portfolios
- Architecture: HIGH - From official examples and community best practices
- Pitfalls: HIGH - Documented in generator docs and real-world experience
- Code examples: HIGH - From official sources and community patterns

**Research date:** 2025-12-28
**Valid until:** 2026-01-28 (30 days - static site generation stable, but check for Hugo/Eleventy release notes)

**Next steps for Phase 1 planning:**
1. Decision: Hugo vs Eleventy (recommend Hugo for speed/simplicity)
2. Theme selection or custom theme setup
3. YAML front matter schema definition for case studies
4. GitHub Actions workflow configuration
5. Local development setup verification

</metadata>

---

*Phase: 01-foundation-site-structure*
*Research completed: 2025-12-28*
*Ready for planning: yes*
