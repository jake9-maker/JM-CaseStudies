---
# CASE STUDY TEMPLATE
# Copy this file to create new case studies
# See CASE_STUDY_SCHEMA.md for complete field documentation

# Required fields
title: "Project Title Here"
date: "2024-01-01"  # YYYY-MM-DD format
summary: "1-2 sentence description of what was built and the outcome. This appears on preview cards and the project page intro."
role: "Lead UX Designer"  # Your role on the project
team_size: 5  # Number of people on team (integer)
duration: "4 months"  # Human-readable duration
featured: false  # Set to true for homepage display (max 3 projects)
featured_image: "hero.jpg"  # Relative path to hero image
featured_order: 1  # 1-3, only relevant if featured: true
pillars: ["complex-problem-solving", "ai-integration", "ux-research"]  # One or more pillars

# Optional fields
impact:
  - "Key metric or outcome #1"
  - "Key metric or outcome #2"
  - "Key metric or outcome #3"
tags: ["Tag1", "Tag2", "Tag3"]  # For future use
---

# Case Study Content

## Problem & Context

[What challenge did the team face? What was the business context?]

**Purpose:** This section sets up the problem space and demonstrates your ability to understand business needs.

**Tips:**
- Start with the business problem, not the design problem
- Include relevant context (company size, industry, constraints)
- Explain why this problem mattered

---

## Approach & Research

[What research methods did you use? What did you learn?]

**Purpose:** This section emphasizes the **UX research pillar** by showing your research-driven approach.

**Tips:**
- Detail your research methodology (user interviews, surveys, competitive analysis, etc.)
- Share key findings or insights
- Explain how research informed the solution
- Include data or quotes if available

---

## Solution & Implementation

[What did you design/build? How did it solve the problem?]

**Purpose:** This section emphasizes the **complex problem-solving pillar** by showing your solution design process.

**Tips:**
- Explain your design decisions and rationale
- Include screenshots, wireframes, or prototypes
- Describe collaboration with engineers/stakeholders
- Highlight trade-offs or constraints you navigated

---

## Results & Impact

[What were the measurable outcomes? How did AI contribute?]

**Purpose:** This section emphasizes the **AI integration pillar** (if applicable) and demonstrates measurable impact.

**Tips:**
- Lead with quantitative results (metrics from impact array)
- Explain how AI/ML enhanced the solution (if applicable)
- Include qualitative feedback from users or stakeholders
- Discuss what you learned or would do differently

---

## Additional Notes

**Image Guidelines:**
- Store images in the same directory as this markdown file
- Use descriptive filenames (e.g., `wireframes-v2.png` instead of `image1.png`)
- Optimize images for web (< 500KB per image)
- Reference images using relative paths: `![Alt text](./image-name.png)`

**Pillar Mapping:**
- Don't explicitly label sections as "UX Research" or "AI Integration"
- Let the content naturally emphasize each pillar through narrative
- Research section → UX research pillar
- Solution section → Problem-solving pillar
- Impact section → AI integration pillar (when applicable)
