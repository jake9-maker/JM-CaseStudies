---
title: "New Car Pricing"
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
---

---
  60-Second Summary (TL;DR)

  - **The outcome:** Dealers gained confidence in pricing decisions, materially reducing post-sale disputes and rework. Vehicle launch cycles accelerated past the critical path. The system shipped on deadline with zero compliance incidents and no compliance-related support escalations post-launch.
  - **Why it mattered:** Pricing ambiguity was creating operational friction and compliance risk. Every vehicle launch triggered dealer disputes, internal rework cycles, and escalations that delayed inventory availability and exposed the company to regulatory and reputation risk in a high-stakes domain.
  - **What I did:** Led research to uncover that the problem was transparency, not accuracy. Then owned the problem framing that separated justification from calculation, aligned executives on a different success metric (trust, not training), and drove three specific design decisions that proved the model under a fixed deadline.
  - **Proof:** Dealers adopted the system without training; support escalations dropped measurably; cross-functional teams accelerated their cycles because validation was no longer the bottleneck; system shipped on deadline with full executive confidence.

  ---
  Overview (Impact-First)

  - **Primary Impact:** Eliminated the primary bottleneck in vehicle launch cycles—pricing validation and dealer confidence—by making pricing logic transparent and justifiable. Enabled predictable, accelerated go-to-market under a fixed launch deadline while reducing compliance risk and support burden.
  - **Secondary Impacts:**
    - Reduced support escalations and operational rework through upfront transparency instead of post-hoc explanation.
    - Increased dealer adoption velocity—no training required; dealers could self-verify decisions.
    - Created a scalable pattern for handling other high-ambiguity, high-stakes decisions where transparency reduces risk.
  - **Role:** Lead Product Designer; owned end-to-end research, problem synthesis, executive alignment on strategy, and design direction for all three product surfaces (dealer tools, buyer-facing, internal admin).
  - **Timeframe:** 14 weeks from research kickoff to launch under fixed deadline.
  - **Scope:** Cross-functional: 1 researcher (me, leading), 2 additional product designers, 1 dedicated engineer, 2 product managers, alignment with VP Sales, VP Compliance, and CEO.
  - **Why This Is Hard:** The organization was primed for a system rebuild (expensive, 6+ month timeline). The real problem—dealer perception of justification under uncertainty—could only be solved through research-backed insight and confident problem reframing. Worse: we had 14 weeks and couldn't afford a wrong bet.

  ---
  Why Leadership Needed Proof

  - **Executive mandate:** CEO flagged pricing as a critical blocker. Vehicle launches were slipping post-launch due to dealer disputes; the VP of Compliance raised concerns about pricing transparency creating regulatory exposure; the VP of Sales reported retention risk from dealer frustration.
  - **What decision this unlocked:** Whether to commit engineering to a system rebuild (6+ months, high cost, high risk) or prove that a design and process fix could solve the underlying problem in time for the launch window. Leadership needed clear evidence that dealer distrust was a transparency problem, not a system correctness problem.
  - **Why existing approach was insufficient:** The organization's hypothesis was "dealers distrust us because they don't understand pricing; we need better training or a new system." Early interviews revealed the opposite: dealers understood the logic; they just couldn't verify it. Training wouldn't fix that. A system rebuild would, but it would take too long and address the wrong problem. Leadership needed proof that this reframing was right before committing to a new delivery strategy.

  ---
  The Real Problem (Not the Obvious One)

  - **Surface problem everyone talked about:** "Dealers are distrust pricing; we need to rebuild the system or train them better."
  - **The problem I uncovered through research:** Dealers couldn't verify pricing decisions because the system didn't expose inputs or logic. This created a verification gap: dealers received a final number with no way to audit it. In a domain where price depends on many variable inputs (market conditions, inventory age, demand signals, competitive benchmarks), dealers fell back on skepticism and escalation. The pricing logic itself was sound; it was just invisible.
  - **Organizational risk if nothing changed:** Every vehicle launch would continue to slip 2–3 weeks post-launch due to pricing disputes. Support volume would grow. Dealer retention would erode. The organization would invest in expensive infrastructure to replace something that was already correct—just opaque—and still miss the launch deadline. Compliance risk would persist because pricing logic wouldn't be auditable.

  ---
  Operating Model We Proved

  Strategy: Make pricing decisions auditable by showing work. Separate the technical problem (is the price correct?) from the communication problem (can a dealer understand why?). Solve the communication problem through design; trust the technical problem.

  The mental model: Dealer confidence has two independent components—(1) correctness (is the math right?) and (2) justification (can I verify this decision was sound?). Research revealed dealers already trusted correctness; they lacked justification. By redesigning the interface to expose inputs and decision logic upfront, we shifted from "trust our black box" to "see for yourself." This eliminated the escalation spiral because dealers could now make informed decisions instead of defaulting to skepticism.

  This replaced the current workflow where dealers questioned every number, pricing ops validated manually, and rework cascaded through the launch cycle.

  ---
  The 3 Decisions That Drove the Outcome

  Decision 1: Expose Key Pricing Inputs Before Revealing the Final Number

  **Problem it solved:** Dealers needed to verify that the pricing system had considered all relevant market factors before trusting the output. Without seeing inputs, they had no way to perform independent sanity checks. This forced escalation for every questionable price.

  **Options considered:**
  1. Expose the full pricing formula and all 20+ variables—complete transparency but cognitive overload; dealers would still need help interpreting it.
  2. Show only the final number with a confidence score—fast to build, but repeats the "trust us" problem; dealers still can't verify.
  3. Show the 4–5 inputs that moved the needle most (market conditions, inventory age, demand signal, competitive benchmarks, margin target) in plain language, before the final price, so dealers can see the premises before evaluating the conclusion.

  **Tradeoff accepted:** We sacrificed mathematical completeness for cognitive clarity and launchability. Dealers wouldn't see every variable; they'd see the ones that mattered most. This meant some edge cases felt under-explained, but we accepted that friction in exchange for adoption, speed, and a launchable product. We could always add depth post-launch if needed; what we couldn't afford was a system dealers wouldn't use.

  **Decision:** Design pricing breakdown as a logical narrative—first the inputs (what the system knows), then decision gates ("If inventory age exceeds 90 days, apply discount"), then the result (the final price). This forces dealers to evaluate the premises before objecting to the conclusion. Test with real dealers to validate that 80%+ could articulate the logic unprompted.

  **Why this worked:** Dealers immediately gained agency. They could say "I see why this price was set; I agree" or "I disagree with the inventory age weighting—here's my specific counterargument." Disagreement became technical debate instead of blind pushback. This reduced escalations because most pushback evaporated once dealers could verify the decision was sound.

  **Proof:** In validation interviews with 12 dealers, 10 could articulate the pricing logic unprompted and said "I would trust this without training." Post-launch, pricing-related support escalations dropped from ~8 per vehicle launch to 2–3. Dealers used the system immediately without onboarding.

  ---
  Decision 2: Separate "What" From "Why" in Presentation to Manage Cognitive Load Across User Types

  Problem it solved: Dealers and buyers needed different information density. Dealers needed full justification to make go/no-go decisions and explain to their teams; buyers needed enough context to feel informed without being overwhelmed. Showing everything to everyone would create confusion; showing nothing would repeat the trust problem.

  **Options considered:**
  1. Single unified view for all users—simpler to build and maintain, but satisfies no one; dealers feel constrained, buyers feel lost.
  2. Completely separate dealer and buyer systems—clear interfaces but expensive, hard to keep pricing logic in sync, higher maintenance risk, dangerous before a launch deadline.
  3. Progressive disclosure: buyer-facing interface shows price + 1-line reason in plain language. Dealer interface shows full breakdown behind a click. Both consume the same underlying pricing data model, so logic lives in one place.

  **Tradeoff accepted:** We invested in conditional rendering and a unified data model, which added complexity to the codebase. This was the right tradeoff because it bought us confidence (single source of truth for pricing logic) and speed (we didn't have to build and validate two systems). Alternative approach (two separate systems) would have been slower and riskier pre-launch.

  **Decision:** Design buyer experience as: price + 1-line reason ("This price reflects current market demand and low inventory availability"). Dealer interface shows full breakdown of inputs, decision gates, and confidence tier on click. One pricing engine; two presentation layers.

  **Why this worked:** Buyers felt informed without information overload. Dealers could drill as deep as they needed. The organization maintained a single source of truth for pricing logic, which reduced the surface area for bugs and compliance issues. Post-launch, this meant pricing changes propagated instantly across both surfaces with no sync problems.

  **Proof:** Buyer testing with 15+ customers showed zero complaints about insufficient context or feeling misled. Dealer adoption reached 95% within two weeks of launch—no training required. Compliance team validated that pricing logic was auditable and consistent across all surfaces.

  ---
  Decision 3: Use Confidence Tiers to Manage Uncertainty Transparently and Gate Workflow

  Problem it solved: Data quality varied. Sometimes prices were based on real-time demand signals and recent comparable sales; sometimes they were based on limited data or historical benchmarks. Dealers needed to understand the reliability of each decision without either hiding uncertainty (dishonest, risks trust breakdown later) or overwhelming them with confidence percentages (precise but not actionable).

  **Options considered:**
  1. Show a confidence percentage (87%, 62%, etc.)—precise but doesn't tell dealers what to do with that information; still creates debate about whether 87% is "good enough."
  2. Hide uncertainty entirely to simplify the interface—dangerous; if dealers discover the system is hiding caveats, trust collapses and compliance exposure increases.
  3. Define 3 tiers (High/Medium/Low) with explicit, honest plain-language criteria for each. Tie tier to workflow: High-confidence prices go live immediately; Medium requires ops review; Low triggers escalation. This makes uncertainty actionable.

  **Tradeoff accepted:** We sacrificed statistical precision for decisiveness. "High confidence" doesn't mean "95% probability"; it means "we have real-time market data, recent comparable sales, low inventory variance." This is less mathematically rigorous but more useful for decision-making and operations. We accepted that some dealers would still debate tier assignments, but at least the framework was transparent and defensible.

  **Decision:** Label each price with a confidence tier and explain in one sentence why it earned that tier. Bake tier into workflow: tiers determine whether a price goes live immediately, requires ops review, or triggers escalation. Make tier criteria public so dealers can understand the system.

  **Why this worked:** Dealers accepted that some decisions were more justified than others. They stopped demanding equal rigor across all prices. The tier system also solved an operational problem—it gave the pricing ops team clear escalation criteria, which reduced debate about what required human review. When dealers questioned a Medium-confidence price, ops could point to the tier definition and explain the review process. This converted adversarial conversations ("Why do you distrust the data?") into collaborative ones ("I see why this triggered review; here's my perspective on the data quality").

  **Proof:** Ops team reported escalation decisions became "predictable and defensible." Pricing-related debates between sales and ops dropped measurably. The system shipped on deadline with full VP Compliance sign-off because confidence tiers made pricing auditable and defensible.

  ---
  Evidence and Validation

  **Quantitative signals:**
  - Time to resolve pricing disputes dropped materially; dealers could self-verify instead of requiring support.
  - Support escalations related to pricing questions decreased measurably from baseline.
  - Vehicle launch cycles accelerated—pricing validation was no longer the critical path bottleneck.
  - System shipped on deadline with zero compliance incidents and zero post-launch compliance-related support.

  **Qualitative signals:**
  - Dealer feedback: "Finally I can see why a price is set" and "I trust this because I can check the math myself."
  - Operations team feedback: Escalations transformed from "Why don't you trust us?" to "I disagree with the inventory age weighting; here's my counterargument." Technical debate replaced trust debates.
  - VP Compliance sign-off: "Pricing is now auditable and defensible." This was the gate for launch approval.
  - Cross-functional alignment: Product, Engineering, Sales, and Ops teams all referenced the same pricing narrative. No more second-guessing or parallel interpretations.

![New Car Pricing Userflow](/images/new-car-pricing-userflow.png)

  **What would not have happened without this work:**
  - Dealers would continue to escalate routinely; launch would slip past the deadline.
  - Compliance risk would persist because pricing logic wouldn't be auditable.
  - The organization would have likely invested in a 6+ month system rebuild that didn't address the real problem.
  - Support volume would grow instead of shrinking.

![New Car Pricing Timeline](/images/new-car-pricing-timeline.png)

  ---
  Constraints That Shaped the Work

  - Fixed launch deadline: 14 weeks from research kickoff to go-live. This forced ruthless prioritization. We couldn't afford to pursue two approaches in parallel or revisit decisions after launch. Every research insight and design decision had to be high-confidence and executable. This shaped the research approach—rapid validation interviews instead of lengthy studies—and the design approach—iterate fast, don't redesign.
  - Data quality and availability: Pricing logic depends on external data feeds (market conditions, competitor prices, inventory trends) with varying freshness and reliability. We couldn't assume perfect data; we had to design a system that made data limitations transparent. This is why confidence tiers were critical—they let us be honest about data gaps without breaking trust.
  - Cross-functional ownership and organizational skepticism: Pricing logic lived in Engineering; dealer experience lived in Product Design; strategy lived with Sales; compliance lived in its own org. No single team owned "pricing perception." We had to build alignment through shared language and frameworks (confidence tiers, input transparency) that all teams could reference. Some ops leaders were skeptical that transparency would increase trust; research had to prove the model before engineering committed time.
  - Compliance and regulatory exposure: This wasn't a standard feature launch. Pricing transparency had compliance implications. The VP of Compliance had to sign off. This meant every design decision had to be defensible and auditable. It also meant we couldn't hide complexity; we had to make it navigable instead.

  ---
  What This Enabled Next

  - Immediate follow-on: The confidence-tier framework became the standard pattern for other high-stakes, high-ambiguity decisions across the platform (discount structures, inventory allocation, buyer financing terms). Other product teams now reference "the pricing model" as a precedent.
  - Scaling and time-to-contribution: The transparent-logic approach reduced dependency on specialized sales training. New dealers could use the system effectively without onboarding. This improved time-to-contribution and dealer satisfaction—they felt empowered, not trained.
  - Organizational capability shift: The work proved that in high-ambiguity, high-stakes domains, transparency increases trust and reduces support burden. This challenged some leaders' intuitions and shifted how the org approached other opaque systems. It established a precedent: "show your work" is better than "trust us."

  ---
  Reflection (Forward-Looking)

  - Capability unlocked: I learned to reframe "trust" problems from communication/training issues to information architecture issues. The solution wasn't better docs or more training; it was redesigning what information was surfaced and in what order. This insight transferred immediately to other stakeholder-confidence problems.
  - How this changed my approach: I now ask "What would have to be true for a skeptical person to verify this decision?" before "How do we explain this better?" The first question points to transparency and data structure; the second points to training. Most "trust" and "communication" problems are actually information design problems. This case study validated that reframe.
  - What kinds of problems I now look for: Systems where smart, motivated people distrust an outcome not because it's wrong, but because it's opaque. These are high-leverage problems because the solution is often elegant—rearchitect what information is visible and in what order, not the system itself.

  ---
  ## Appendix

  **Supporting artifacts:**
  - Research findings: 12 dealer interviews revealing "I can't verify this" as the root cause (not a training gap or system error).
  - Wireframes showing progressive disclosure and confidence tier system.
  - Confidence tier criteria definitions with real examples.
  - Compliance sign-off and audit documentation.

  **Related work:**
  - This framework was applied post-launch to financing terms transparency and inventory allocation, following the same "show your work" pattern.

  ---
