---
title: "New Car Workflow"
date: "2025-12-01"
summary: "Dealers couldn't verify pricing decisions, creating disputes, rework, and compliance risk. I made pricing auditable to rebuild trust and ship under a fixed launch deadline."
role: "Lead Product Designer (Research Lead)"
team_size: 6
duration: "14 weeks"
featured: true
featured_image: "/images/new-car-pricing-preview.png"
featured_image_alt: "MAX New Car Pricing workflow — insights to action"
featured_order: 1
pillars:
  - ux-research
  - complex-problem-solving
  - ai-integration
meta_description: "Learn how I made pricing auditable to rebuild trust with dealers. Resolved disputes and compliance risks in a 14-week launch deadline through UX research and AI integration."
og_image: "/images/new-car-pricing-preview.png"
---

---

## 60-Second Summary (TL;DR)

- **The outcome:** Dealers gained confidence in pricing decisions, materially reducing post-sale disputes and rework. Vehicle launch cycles accelerated. The system shipped on deadline with zero compliance incidents.
- **Why it mattered:** Pricing ambiguity created operational friction and compliance risk. Every vehicle launch triggered dealer disputes, internal rework, and escalations that delayed inventory availability and exposed the company to regulatory risk.
- **What I did:** Led research to uncover that the problem was transparency, not accuracy. Owned problem framing that separated justification from calculation. Aligned executives on a different success metric (trust, not training). Drove three specific design decisions that proved the model under a fixed 14-week deadline.
- **Proof:** Dealers adopted the system without training. Support escalations dropped measurably. Cross-functional teams accelerated cycles because validation was no longer the bottleneck. System shipped on deadline with full executive confidence.

---

## The Problem

**What everyone thought:** Dealers distrust pricing because they don't understand it. We need better training or a system rebuild.

**What research revealed:** Dealers understood the pricing logic perfectly. They just couldn't verify it. The system didn't expose inputs or decision logic—dealers received a final number with no way to audit it. In a domain where price depends on many variable inputs (market conditions, inventory age, demand signals, competitive benchmarks), dealers fell back on skepticism and escalation.

**Why this mattered:** Every vehicle launch slipped 2–3 weeks post-launch due to pricing disputes. Support volume grew. Dealer retention eroded. Company would invest in expensive infrastructure to replace something that was already correct—just opaque.

**The insight:** The problem isn't mathematical correctness. It's transparency. Make pricing auditable by showing the work. Separate the technical problem (is the price correct?) from the communication problem (can a dealer understand why?). Solve the communication problem through design; trust the technical problem.

---

## The 3 Decisions That Drove the Outcome

### Decision 1: Expose Key Inputs Before the Final Number

**Problem:** Dealers needed to verify the system had considered all relevant market factors before trusting the output. Without seeing inputs, they had no way to sanity-check. This forced escalation for every questionable price.

**Solution:** Show the 4–5 inputs that moved the needle most (market conditions, inventory age, demand signal, competitive benchmarks, margin target) in plain language, *before* the final price. Let dealers see the premises before evaluating the conclusion.

**Impact:** Dealers immediately gained agency. They could say "I see why this price was set; I agree" or "I disagree with the inventory age weighting—here's my counterargument." Disagreement became technical debate instead of blind pushback. Escalations dropped because most pushback evaporated once dealers could verify the decision was sound. In validation with 12 dealers, 10 could articulate the pricing logic unprompted and said "I would trust this without training." Post-launch, pricing-related support escalations dropped from ~8 per launch to 2–3.

---

### Decision 2: Separate "What" From "Why" Across User Types

**Problem:** Dealers and buyers needed different information density. Dealers needed full justification; buyers needed enough context to feel informed without being overwhelmed. Showing everything would confuse; showing nothing would repeat the trust problem.

**Solution:** Progressive disclosure. Buyer-facing interface shows price + 1-line reason ("This price reflects current market demand and low inventory availability"). Dealer interface shows full breakdown behind a click. Both consume the same underlying pricing data model, so logic lives in one place.

**Impact:** Buyers felt informed without overload. Dealers could drill as deep as they needed. The organization maintained a single source of truth for pricing logic, which reduced bugs and compliance issues. Post-launch, pricing changes propagated instantly across both surfaces with no sync problems. Buyer testing with 15+ customers showed zero complaints. Dealer adoption reached 95% within two weeks—no training required.

---

### Decision 3: Use Confidence Tiers to Manage Uncertainty Transparently

**Problem:** Data quality varied. Sometimes prices were based on real-time demand signals and recent comparable sales; sometimes on limited data or historical benchmarks. Dealers needed to understand reliability without either hiding uncertainty (dishonest) or overwhelming them with confidence percentages (precise but not actionable).

**Solution:** Define 3 tiers (High/Medium/Low) with explicit, honest plain-language criteria. Tie tier to workflow: High-confidence prices go live immediately; Medium requires ops review; Low triggers escalation. Make tier criteria public so dealers understand the system.

**Impact:** Dealers accepted that some decisions were more justified than others. They stopped demanding equal rigor across all prices. The tier system gave the pricing ops team clear escalation criteria, which reduced debate about what required review. When dealers questioned a Medium-confidence price, ops could point to the tier definition and explain. This converted adversarial conversations into collaborative ones. Ops team reported escalation decisions became "predictable and defensible." Pricing-related debates between sales and ops dropped measurably. The system shipped with full VP Compliance sign-off because confidence tiers made pricing auditable.

---

## Evidence and Results

**Quantitative:**
- Time to resolve pricing disputes dropped materially; dealers could self-verify
- Support escalations related to pricing decreased measurably from baseline
- Vehicle launch cycles accelerated—pricing validation was no longer the bottleneck
- System shipped on deadline with zero compliance incidents and zero post-launch compliance support

**Qualitative:**
- Dealer feedback: "Finally I can see why a price is set" and "I trust this because I can check the math myself"
- Operations team: Escalations transformed from "Why don't you trust us?" to "I disagree with the inventory age weighting; here's my counterargument." Technical debate replaced trust debates
- VP Compliance: "Pricing is now auditable and defensible"
- Cross-functional alignment: All teams referenced the same pricing narrative

![New Car Pricing Userflow](/images/new-car-pricing-userflow.png)

![New Car Pricing Timeline](/images/new-car-pricing-timeline.png)

---

## What This Unlocked

- **Immediate:** Confidence-tier framework became standard pattern for other high-stakes decisions (discounts, inventory allocation, financing terms)
- **Scaling:** Transparent-logic approach reduced dependency on specialized training. New dealers could use the system effectively without onboarding. Improved time-to-contribution and satisfaction
- **Organizational capability:** Proved that in high-ambiguity domains, transparency increases trust and reduces support burden. Shifted how the org approached other opaque systems

---

## Reflection

**Key insight:** Trust problems are usually information architecture problems, not communication or training problems. The solution isn't better docs or more training—it's redesigning what information is surfaced and in what order.

**How it changed my approach:** I now ask "What would have to be true for a skeptical person to verify this decision?" before "How do we explain this better?" The first question points to transparency and data structure; the second points to training. Most "trust" and "communication" problems are actually information design problems.

**Problems I now look for:** Systems where smart, motivated people distrust an outcome not because it's wrong, but because it's opaque. These are high-leverage problems because the solution is often elegant—rearchitect what information is visible and in what order, not the system itself.

---

## Appendix

**Supporting artifacts:**
- 12 dealer interviews revealing "I can't verify this" as the root cause (not training gap or system error)
- Wireframes showing progressive disclosure and confidence tier system
- Confidence tier criteria definitions with real examples
- Compliance sign-off and audit documentation

**Related work:**
- Framework was applied post-launch to financing terms transparency and inventory allocation using the same "show your work" pattern

---
