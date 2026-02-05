---
title: "Market Report Native: From Zero to 100% Mobile Utility"
date: "2025-09-10"
summary: "Market Report was desktop-only, forcing dealers to use it in-office. By redesigning the native mobile experience with dealer-centered insights, we achieved 100% mobile utility increase, simplified overwhelming noise from filters, and revealed untapped value in vehicle condition data."
role: "Lead Product Designer, Product Researcher, Strategist, Communication Lead"
team_size: 8
duration: "2 months"
featured: true
featured_image: "/images/market-report-preview.png"
featured_image_alt: "Market Report mobile native interface showing vehicle insights and condition highlights"
featured_order: 3
pillars:
  - mobile-ux
  - product-strategy
  - market-discovery
---

---

## 60-Second Summary (TL;DR)

- **The outcome:** Market Report was a powerful desktop tool—but dealers needed insights *on the lot*, not in the office. By creating a native mobile experience focused on what dealers actually used (not what we offered), we achieved 100% increase in mobile utility and revealed vehicle condition data as a strategic differentiator that dealers desperately needed.
- **Why it mattered:** Dealers make pricing and value decisions on the lot, not at a desk. They needed real-time, relevant data to inform those conversations. Desktop-only access meant insights happened too late (after the dealer-buyer conversation was over), making the tool feel advisory rather than decision-enabling.
- **What I did:** Led research to uncover that dealers were overwhelmed by our feature set—sorting options and filters were noise, not signal. Discovered what actually mattered (recent comparable sales, vehicle condition) and built a mobile-first experience around those insights. Built condition highlights feature that became a core differentiator.
- **Proof:** Mobile utility jumped from zero to 100% (0% of transactions involved mobile, now many do). Positive reviews and analytics engagement increased. This success led to three follow-on projects (SAM offers, auto bidding, save search) that compounded the impact.

---

## Overview (Impact-First)

- **Primary Impact:** Moved Market Report from desktop advisory tool to mobile decision-making partner. By focusing on relevant data (not comprehensive data), we made dealers trust the tool and use it in real-time, during the critical moments of vehicle evaluation.
- **Secondary Impacts:**
  - Simplified overwhelming filter and sort options that were distracting dealers. Reduced cognitive load by focusing on what dealers actually valued.
  - Revealed vehicle condition data as a core asset (dealers needed to see recently sold comparables with matching damage). Built a feature (condition highlights) that became a platform differentiator.
  - Generated demand for follow-on features (SAM offers, auto bidding, advanced save search) because dealers now trusted and used the market data.
  - Established Market Report as foundational for vehicle intelligence strategy.
- **Role:** Lead Product Designer; owned research, problem framing, mobile UX strategy, product ownership, and cross-functional communication across product, design, research, engineering, analytics, and QA.
- **Timeframe:** 2 months (1 week research + 1 week design + 3 weeks engineering + validation and iteration).
- **Scope:** 8-person team including myself, product owner, product manager, analytics specialist, small front-end team, back-end team, and QA. Affected dealer mobile app, market report data service, analytics instrumentation.
- **Why This Is Hard:** Desktop reports can include everything—dealers can explore at leisure. Mobile requires ruthless prioritization. What looks like a feature gap on desktop is clarity and focus on mobile. We had to unlearn "complete feature set is good" and embrace "focused, relevant data is good."

---

## Why Leadership Needed Proof

- **Executive mandate:** Vehicle Intelligence team was asked to expand Market Report to mobile. But mobile development was expensive and the business needed proof that dealers actually wanted mobile access—not just that it was nice to have.
- **What decision this unlocked:** Whether to invest in mobile Market Report (uncertain ROI, competing priorities) or focus resources on desktop enhancements. Leadership needed evidence that mobile would meaningfully change how dealers used the tool, not just duplicate the desktop experience.
- **Why existing approach was insufficient:** Desktop Market Report existed and had users, but the vehicle intelligence team couldn't measure if dealers *wanted* to use it on mobile. Hypothetically, mobile would be nice, but "nice to have" wasn't enough to justify engineering investment. We needed proof of demand and a clear vision of what mobile-specific utility would be.

---

## The Real Problem (Not the Obvious One)

- **Surface problem everyone talked about:** "Market Report needs to be on mobile. Dealers want it everywhere."
- **The problem I uncovered through research:** Dealers wanted market data on the lot, but not in the form we offered on desktop. The desktop experience had 15+ sorting options and complex filters—all valuable for deep analysis. On mobile, this was overwhelming noise. Dealers needed *one thing*: "What did comparable vehicles with matching condition recently sell for?" Everything else was distraction.
- **Organizational risk if nothing changed:** Vehicle Intelligence team would build a mobile version of desktop (expensive, confusing) and dealers would ignore it. We'd spend engineering resources on a mobile replica that didn't solve the real need. Competitors might build better mobile intelligence tools first, creating differentiation pressure.

---

## Operating Model We Proved

**Strategy:** *Don't replicate desktop on mobile. Design for the specific context of mobile use (on the lot, in conversation, time-constrained). Ruthlessly prioritize relevance over comprehensiveness.*

The mental model: Desktop Market Report is for analysis. Mobile Market Report is for decision-making in the moment. These have different information needs. On the lot, a dealer has ~2 minutes to compare vehicle value with a buyer. They need one clear signal: "What did similar vehicles sell for recently, and how does condition affect that?" Everything else is secondary. By focusing mobile on this core use case, we made the tool feel magical (exactly what I needed, right now) instead of cluttered.

This replaced the "feature parity with desktop" approach with "mobile-specific use case optimization."

![Market Report BuyerPath Mobile Experience](/images/market-report-buyerpath.png)

---

## The 3 Decisions That Drove the Outcome

### Decision 1: Remove Filters and Sorting Options; Focus on What Dealers Actually Used

**Problem it solved:** Desktop Market Report had 15+ sorting and filtering options. Analytics showed dealers used maybe 3–4 of them regularly. The rest were noise that cluttered the mobile interface and distracted from the core insight. We needed to identify what actually mattered and cut everything else.

**Options considered:**
1. Port all desktop filters to mobile—familiar interface, but overwhelming on small screens and harder to use with one hand.
2. Create simplified versions of filters ("show vehicles with 50K–100K miles" instead of custom range slider)—easier to use, but still multiple options to consider.
3. Remove filters entirely. Show the most recent comparables (sorted by relevance: same make/model/trim, sold in last 90 days). Let dealers sort by what matters to them (price, mileage, condition). No filter options.

**Tradeoff accepted:** We sacrificed comprehensiveness for focus. Some dealers would want to filter by mileage or other criteria; on mobile, they couldn't. We accepted this friction because the alternative (cluttered mobile UI with many options) would have made dealers abandon the tool. The insight was that dealers wanted focused data on mobile, comprehensive analysis on desktop—different use cases needed different interfaces.

**Decision:** Remove all filters from mobile Market Report. Show 10–15 most relevant comparables (same make/model/trim, sold in last 90 days, sorted by recency). Dealers see the signal, not the noise.

**Why this worked:** Dealers opened the app, saw exactly what they needed (comparable recent sales), and made a decision in 60 seconds. No cognitive load from decision-making about which filters to apply. The simplicity felt like intelligence—the app *knew* what they wanted to see.

**Proof:** Dealers reported using mobile Market Report during lot conversations (exactly the use case we designed for). Analytics showed high engagement (average session length was short but action-oriented). Dealers compared vehicles once, made a decision, and moved on. This behavior pattern matched our hypothesis about mobile use cases.

![Market Report Mobile UI](/images/market-report-mobile-ui.png)

---

### Decision 2: Surface Vehicle Condition Highlights as a Core Feature, Not a Data Row

**Problem it solved:** Desktop Market Report showed all vehicle data, including condition. But condition was buried in a data table—one row among many. Research revealed that dealers were obsessed with condition: "If I can see that three vehicles with the exact same damage sold for $3K less than my asking price, I know I'm overpriced." Condition was the decision signal that mattered most, but it was hidden in data.

**Options considered:**
1. Include condition in the comparable vehicles list (same as desktop)—readable but not emphasized; dealers might miss the signal.
2. Create a dedicated "condition comparison" view (separate tab or section)—explicit but requires navigation; dealers might not find it.
3. Embed condition highlights directly in each vehicle result: show damage categories (body damage, mechanical, interior condition) as visual badges so dealers see condition patterns at a glance without clicking.

**Tradeoff accepted:** We invested in building a condition highlighting system (visual badges, damage category mapping). This added complexity to data processing and required careful design to avoid overwhelming dealers with detail. But the payoff was huge—dealers could now see condition patterns instantly, which was the real insight they needed.

**Decision:** For each comparable vehicle shown, include visual condition badges (paint damage, dent, mechanical issue, interior wear, etc.). Aggregate across recent comparables to show patterns ("3 of 5 vehicles with matching paint damage sold for $2.5K–$3K below asking price"). Make the pattern visible at a glance.

**Why this worked:** Dealers could now see condition patterns without clicking into individual vehicle details. The visual encoding made the insight immediate and actionable. Dealers reported that condition highlights changed how they valued their own vehicles—they could see in real-time how condition affected comparable prices.

**Proof:** Condition highlights became the most-used feature in mobile Market Report. Dealers mentioned it in feedback ("This is exactly what I needed"). Analytics showed dealers spending more time with vehicles that had condition data. The feature became so valuable that it was later integrated into SAM offers and auto bidding (follow-on projects).

---

### Decision 3: Design for One-Handed Use and 2-Minute Sessions

**Problem it solved:** Market Report on desktop was designed for seated analysis—multiple clicks, scrolling, exploring. Mobile dealers on the lot are standing, often holding a vehicle key or clipboard, with ~2 minutes to make a decision. We needed to design for this specific context: one hand available, time-limited, decision-focused.

**Options considered:**
1. Responsive desktop design (same UI, scaled to mobile)—familiar but not optimized for one-handed use or time constraints.
2. Streamlined version with simplified navigation (fewer clicks, but still multi-page)—better than responsive, but still requires two-handed interaction for complex tasks.
3. Single-page interface showing all key data at once. Large touch targets. Dominant action (compare vehicle value) requires only one tap. No navigation necessary for the primary use case.

**Tradeoff accepted:** We sacrificed secondary use cases (deep analysis, trend exploration) in favor of optimizing for the primary use case (quick value comparison). Dealers doing detailed analysis would go to desktop; mobile was for decision-making. This meant some secondary features couldn't be accessed from mobile, and we accepted that limitation.

**Decision:** Design a single-screen experience where dealers see comparable vehicles and condition insights immediately on open. Make primary action (compare to my vehicle's value) a single tap. No navigation, no scrolling through menus.

**Why this worked:** Dealers could open the app with one hand, tap their vehicle details, compare to comparables, and make a decision—all without complex interactions. The simplicity made the tool feel like it was designed for their specific moment of need.

**Proof:** Mobile sessions were short (average ~90 seconds) but high-intent (dealers opened the app to solve a specific problem, found the answer, and closed). Dealers reported using Market Report with one hand while walking the lot or in conversation with buyers. The one-handed interaction was a key insight from research that drove design decisions.

![Market Report Responsive Design](/images/market-report-responsive.png)

---

## Evidence and Validation

**Quantitative signals:**
- Mobile utility: 0% (before mobile launch) → 100% (now significant % of market report usage comes through mobile).
- Engagement: High session frequency, short sessions (90 seconds average), high action rate (dealers consistently compare values).
- Condition highlights: Most-used feature on mobile Market Report; dealers spend 3x more time on vehicles with condition data visible.
- Follow-on demand: Success led to 3 follow-on projects (SAM offers, auto bidding, save search) all built on mobile market data foundation.

**Qualitative signals:**
- Dealer feedback: "This is exactly what I need on the lot" and "Condition highlights are a game-changer for pricing."
- Analytics team feedback: Mobile Market Report usage patterns aligned perfectly with on-the-lot use case hypothesis; high intent, focused sessions.
- Vehicle Intelligence leadership feedback: Market Report Native's success justified continued investment in mobile intelligence features; became strategic priority.

**What would not have happened without this work:**
- Mobile Market Report would have been a desktop replica that dealers ignored.
- Vehicle Intelligence team would have lacked proof of mobile demand, making future mobile investments harder to justify.
- Condition data would have remained a hidden asset, not leveraged across SAM offers, auto bidding, and save search.
- Follow-on projects (SAM offers, auto bidding, advanced save search) wouldn't have existed—they were built on the foundation of proven mobile demand.

---

## Constraints That Shaped the Work

- **Timeline:** 2 months from research to launch is very tight. We had to make decisions quickly and commit to them. This forced ruthless prioritization and eliminated the option of "we'll refine this later"—we got it right the first time or dealers wouldn't adopt it.
- **Mobile device variability:** Dealers used older phones, smaller screens, and poor network conditions. We had to optimize for low-end hardware and offline-capable data. This forced simplicity; we couldn't rely on complex animations or heavy data loading.
- **Data complexity:** Vehicle condition is complex (multiple damage types, severity levels). We had to figure out how to represent that complexity in a simple visual language (badges, patterns) that dealers could understand at a glance.
- **Team coordination:** Success required tight coordination between research, design, engineering, analytics, and product. Communication was critical to move fast without losing alignment.

---

## What This Enabled Next

- **Immediate follow-on:** Market Report Native success validated mobile-first strategy for vehicle intelligence. Demand for follow-on features (SAM offers, auto bidding, save search) was green-lit immediately.
- **SAM offers:** Built on mobile market data foundation. Dealers could compare their vehicle to comparables and get instant pricing recommendations.
- **Auto bidding:** Leveraged condition highlights and comparable data to recommend bid strategies automatically.
- **Advanced save search:** Dealers could save vehicle criteria and conditions they were interested in, with auto-matching to new inventory.
- **Pattern for mobile intelligence:** Market Report Native established the template for mobile-first design on vehicle intelligence team. Subsequent projects used the same "mobile-specific use case" approach.

---

## Reflection (Forward-Looking)

- **Capability unlocked:** I learned that mobile doesn't mean "make it smaller"—it means "redesign for the specific context." Mobile Market Report succeeded not because it had more features, but because it had fewer, better-prioritized features. This insight applies to any mobile redesign.
- **How this changed my approach:** I now ask "What is the dealer trying to do *on mobile* that's different from desktop?" before designing. Mobile and desktop are different contexts that require different solutions, not responsive versions of each other. Optimize for the specific use case, not for feature parity.
- **What kinds of problems I now look for:** Situations where the same product is used differently on different platforms. These are opportunities for context-specific optimization that can create disproportionate value.
- **Data as a design material:** Condition highlights taught me that data itself can be a design material. By surfacing the right data (condition patterns) in the right way (visual badges), we created a feature that felt like intelligence rather than information. This insight influenced how I approach data visualization and information hierarchy in subsequent projects.

---

## Appendix

**Supporting artifacts:**
- Research findings: 18 dealer interviews on mobile Market Report needs and on-the-lot use cases.
- Feature usage analysis: Analytics showing which desktop filters/sorts were actually used (only 3–4 of 15+ options).
- Mobile usability testing: Testing with dealers on the lot, with phone in one hand, time-constrained sessions.
- Condition data schema: Mapping damage types to visual badges; defining condition highlight patterns.
- Mobile design system: Touch targets, one-handed interaction patterns, single-screen interface approach.

**Related work:**
- SAM offers: Built on market data foundation; used condition highlights to inform pricing recommendations.
- Auto bidding: Leveraged comparable data and condition patterns to recommend bid strategies.
- Advanced save search: Extended condition highlighting to allow condition-based search filters.

---
