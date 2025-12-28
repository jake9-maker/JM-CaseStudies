# Case Study Front Matter Schema

This document defines the YAML front matter structure for all case study markdown files in the `src/content/projects/` directory.

## Purpose

The front matter schema serves three critical functions:
1. **Homepage filtering & display** - `featured`, `featured_order`, and `featured_image` control which projects appear on the homepage
2. **Pillar-based routing** - `pillars` array enables filtering by the three core competencies (complex problem-solving, AI integration, UX research)
3. **Recruiter scanning** - `role`, `duration`, `team_size`, and `impact` provide at-a-glance project context

## Required Fields

### `title` (string)
Project name or title as it should appear on cards and the project page header.

**Example:** `"AI-Powered Design System Generator"`

---

### `date` (YYYY-MM-DD)
Project completion or launch date. Used for sorting projects chronologically.

**Example:** `"2024-09-15"`

---

### `summary` (string)
1-2 sentence description of what was built and the outcome. Appears on preview cards and project page intro.

**Example:** `"Designed and shipped an AI-powered tool that generates design system components from Figma files, reducing setup time by 40% for design teams."`

---

### `role` (string)
Your role on the project. Should be specific and recruiter-friendly.

**Example:** `"Lead UX Designer"` or `"Product Designer"`

---

### `team_size` (integer)
Number of people on the team, including you.

**Example:** `5`

---

### `duration` (string)
Project duration in human-readable format.

**Example:** `"4 months"` or `"Q2 2024"`

---

### `featured` (boolean)
Whether this project should appear on the homepage. Only 3 projects should have `featured: true` at any time.

**Example:** `true` or `false`

---

### `featured_image` (string)
Relative path to the hero image for this project. Image should be stored in the same directory as the markdown file.

**Example:** `"hero.jpg"` or `"./images/project-hero.png"`

---

### `featured_order` (integer)
Display order for featured projects on homepage (1-3). Only relevant if `featured: true`.

**Example:** `1`, `2`, or `3`

---

### `pillars` (array of strings)
One or more of the three core competency pillars. Each case study should map to at least one pillar.

**Allowed values:**
- `"complex-problem-solving"`
- `"ai-integration"`
- `"ux-research"`

**Example:** `["complex-problem-solving", "ai-integration"]`

**Design note:** Pillars are implicit in the case study narrative, not displayed as explicit labels. The research section emphasizes UX research, the solution section emphasizes problem-solving, and the impact section emphasizes AI capabilities.

---

## Optional Fields

### `impact` (array of strings)
Key metrics or outcomes demonstrating project success. These appear prominently on the project page.

**Example:**
```yaml
impact:
  - "40% reduction in design system setup time"
  - "Adopted by 12 teams across 3 product lines"
  - "Generated 200+ components in first month"
```

---

### `tags` (array of strings)
Additional tags for future organization or filtering. Not currently used in UI but reserved for future functionality.

**Example:** `["Figma", "React", "TypeScript", "Design Systems"]`

---

## Complete Example

```yaml
---
title: "AI-Powered Design System Generator"
date: "2024-09-15"
summary: "Designed and shipped an AI-powered tool that generates design system components from Figma files, reducing setup time by 40% for design teams."
role: "Lead UX Designer"
team_size: 5
duration: "4 months"
featured: true
featured_image: "hero.jpg"
featured_order: 1
pillars: ["complex-problem-solving", "ai-integration"]
impact:
  - "40% reduction in design system setup time"
  - "Adopted by 12 teams across 3 product lines"
  - "Generated 200+ components in first month"
tags: ["Figma", "React", "TypeScript", "Design Systems"]
---
```

## Field Usage Mapping

| Field | Used for Homepage | Used for Filtering | Used for Recruiter Scanning |
|-------|------------------|-------------------|---------------------------|
| `title` | ✅ (card title) | | ✅ (project identity) |
| `date` | | ✅ (chronological sort) | |
| `summary` | ✅ (card preview) | | ✅ (quick context) |
| `role` | | | ✅ (your contribution) |
| `team_size` | | | ✅ (team context) |
| `duration` | | | ✅ (project scope) |
| `featured` | ✅ (display toggle) | | |
| `featured_image` | ✅ (card visual) | | |
| `featured_order` | ✅ (card sort) | | |
| `pillars` | | ✅ (competency filter) | ✅ (implicit framing) |
| `impact` | | | ✅ (outcomes) |
| `tags` | | (future use) | |

## Schema Validation

All front matter is validated at build time via Zod schema defined in `src/content/config.ts`. Invalid or missing required fields will cause the build to fail with a clear error message.

## Content Structure

Case studies should follow this markdown structure after the front matter:

```markdown
## Problem & Context
[What challenge did the team face? What was the business context?]

## Approach & Research
[What research methods did you use? What did you learn? - Emphasizes UX research pillar]

## Solution & Implementation
[What did you design/build? How did it solve the problem? - Emphasizes problem-solving pillar]

## Results & Impact
[What were the measurable outcomes? How did AI contribute? - Emphasizes AI integration pillar]
```

This structure maps implicitly to the three pillars without requiring explicit labels.
