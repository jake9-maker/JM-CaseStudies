---
title: "Guaranteed Sale"
date: "2026-03-01"
summary: "A guaranteed payout for dealers, with all the upside kept. I led design and research end to end: 10× growth in under a year, pricing in minutes instead of days, and in 2026, ACV Offers, a guarantee before the car is even inspected."
role: "Lead Product Designer & Lead Researcher"
team_size: 12
duration: "MVP in 3 months (2024), then led it through ACV Offers (2026)"
featured: true
featured_image: "/images/gs-offer-guarantee.png"
featured_image_alt: "ACV Offers in MyACV: a guaranteed offer shown next to wholesale and retail values, with a Guarantee, Inspection, Sale progress tracker"
hero_frame: true
featured_order: 1
pillars:
  - complex-problem-solving
  - product-strategy
  - market-discovery
meta_description: "How I designed and researched ACV's Guaranteed Sale end to end: a guaranteed dealer payout that grew 10× in under a year, became ACV's first white-label component system, and evolved into ACV Offers."
og_image: "/images/gs-offer-guarantee.png"
---

## In 60 seconds

- **The problem:** When a car doesn't sell at auction, the dealer is stuck: relaunch it and hope, or take a loss. ACV had a better answer, a guaranteed payout, but almost no one used it.
- **What I did:** I owned it end to end as lead designer and lead researcher. I found out why dealers avoided it, put it where the decision actually happens, turned a days-long manual pricing process into minutes, and led a 12-person cross-functional team through launch.
- **The result:** 10× more guaranteed vehicles in under a year and ACV's first white-label component system. In 2026 I took it further with ACV Offers: a guarantee before the car is even inspected.

<div class="stats">
  <div class="stat"><span class="stat-num">10×</span><span class="stat-label">guaranteed vehicles launched (~30 → 300+ a week)</span></div>
  <div class="stat"><span class="stat-num">2% → 32%</span><span class="stat-label">of unsold cars now going to Guaranteed Sale</span></div>
  <div class="stat"><span class="stat-num">&lt;1 hr</span><span class="stat-label">to price a car, down from 1–2 days</span></div>
  <div class="stat"><span class="stat-num">18–22%</span><span class="stat-label">margin, vs. 8–12% for relaunches</span></div>
</div>

## The promise

<div class="promise">
  <p class="promise-line">A floor you can count on. <em>Every dollar above it is yours.</em></p>
  <div class="frame"><img src="/images/gs-promise.png" alt="Guaranteed Sale performance banner: 'Over-performer! Your vehicles are outperforming' next to a graphic showing the ACV-protected floor and the upside the dealer keeps" loading="lazy"></div>
  <p class="promise-note">The performance view I designed shows dealers both halves of the deal at once: the part ACV protects, and the upside they keep.</p>
</div>

A dealer picks a car and gets a guaranteed price. The car runs in ACV's No Reserve Sale, open to bidders nationwide. If it sells for more, the dealer keeps all of it. If it sells for less, ACV pays the difference. No phone calls and no negotiating.

It's a simple promise. Making it feel simple took a lot of work behind the scenes.

## The problem

Everyone assumed dealers didn't understand guaranteed sales, and that more education would fix it.

I interviewed 25+ dealers, and they told a different story. They understood it fine. The problem was timing. The offer lived in a separate flow, away from the moment a car failed to sell, and a price took one to two days. By then, most dealers had already relaunched.

So I mapped the whole life of a car in a dealer's inventory, from the moment it's imported to the moment it sells, to find every point where a guarantee could show up naturally. That map became the plan for the product.

<figure class="shot plain wide">
  <div class="frame"><img src="/images/gs-lifecycle-map.png" alt="Future user flow for Guaranteed Sale and My Inventory: a vehicle's path from not inspected to initial quote, soft offer, firm offer, and sale, with opportunities called out" loading="lazy"></div>
  <figcaption>My future-state map of Guaranteed Sale inside My Inventory. The blue notes are opportunities, including cars dealers bring in through ClearCar.</figcaption>
</figure>

**The insight:** don't explain the option better. Put it where the decision already happens, and make the answer instant.

## Three decisions that drove the outcome

### 1. Put the guarantee where the decision happens

Dealers manage their cars in one table, My Inventory. I built the guarantee right into it: every car shows its ACV estimate and its guaranteed price, with a clear status (Firm, Pending, or Unavailable). Dealers can select one car or twenty and choose, side by side, to send them to auction or take the guarantee.

<div class="pair wide">
  <figure>
    <span class="tag">Wireframe</span>
    <div class="frame"><img src="/images/gs-wireframe.png" alt="Low-fidelity wireframe of My Inventory with Accept Guaranteed Offer and Send to Auction actions" loading="lazy"></div>
  </figure>
  <figure>
    <span class="tag accent">Shipped</span>
    <div class="frame"><img src="/images/gs-inventory.png" alt="Final My Inventory design with five cars selected, each showing a firm guaranteed price, and buttons to submit to Guaranteed Sale or send to auction" loading="lazy"></div>
  </figure>
</div>

Then one checkout to review every car and see a single number: the total guaranteed payout.

<figure class="shot wide">
  <div class="frame"><img src="/images/gs-checkout.png" alt="Guaranteed Sale checkout: five selected vehicles with their guaranteed prices and a Total Guaranteed Proceeds of $41,655" loading="lazy"></div>
  <figcaption>Checkout turns a stressful decision into one clear number, confirmed in a single step.</figcaption>
</figure>

**Result:** 2% → 28% of unsold cars within 90 days, a 14× lift. It kept climbing to 32%.

### 2. Take pricing from days to minutes

Three specialists priced every car by hand: 4 to 8 hours each, with a 1 to 2 day wait. I led the effort to capture their judgment in a pricing model built on their past decisions and market data. When the model is confident, the price updates instantly. When it isn't, the car goes to a specialist, and the dealer sees exactly where it stands. Offers expire after five days, so ACV never guarantees a price the market has moved past.

**Result:** 95% of cars priced automatically in under 5 minutes. The same specialists went from handling about 30 cars a week to overseeing 450+.

### 3. Design it once, reuse it everywhere

"Guaranteed" meant slightly different things on eight different ACV screens. I audited every place it appeared, including how each one showed disclosures and valuations. Then I ran three standardization workshops with design and engineering to agree on what should be shared and what should stay unique, wrote the design system guidelines, and partnered on the component build. The result was one set of building blocks (price, status, actions, and wording) that any team could reuse.

<figure class="shot plain">
  <div class="frame"><img src="/images/guaranteed-sale-white-label-component1.png" alt="The white-label Guaranteed Sale component: guidelines, audits, and the reusable offer card" loading="lazy"></div>
  <figcaption>The white-label component: one source of truth for how a guarantee looks and behaves anywhere at ACV.</figcaption>
</figure>

**Result:** Trade-in and retail designs estimated at 20+ weeks took under 10. The pattern became the design team's standard and has been reused in 3 other products.

<p class="chapter">Chapter 2 · 2026</p>

## ACV Offers: a guarantee before the inspection

Guaranteed Sale worked, but it had a limit: a car had to be inspected and committed to wholesale before a dealer saw a guarantee. My research surfaced two kinds of dealers. Some want a **guaranteed outcome**. Others want **speed and control** and plan to set their own price. The old flow only served the first group, and only late in the process.

So I designed ACV Offers, which shipped in MyACV in 2026. I took it end to end: the pricing portal, the offers table in My Inventory, the offer page in MyACV, the flow for generating a condition disclosure, and the mobile versions of each, then stayed on through production to support the build.

<div class="versus">
  <div class="vs-col">
    <span class="tag">2024 · Guaranteed Offer</span>
    <p class="vs-title">After the inspection</p>
    <ul>
      <li>Car is inspected by ACV first</li>
      <li>Dealer commits to wholesale</li>
      <li>Lower, safer price</li>
    </ul>
  </div>
  <div class="vs-col accent">
    <span class="tag accent">2026 · ACV Offers</span>
    <p class="vs-title">Before the inspection</p>
    <ul>
      <li>Based on the dealer's own condition disclosure</li>
      <li>No commitment: retail, wholesale, or take the offer</li>
      <li>Higher price and more choice</li>
    </ul>
  </div>
</div>

<figure class="shot plain wide">
  <div class="frame"><img src="/images/gs-dealer-intent.png" alt="User flow splitting dealers by intent: a Guaranteed Outcome path through offer, inspection, and pricing review, and a Speed and Control path where the dealer sets their own price" loading="lazy"></div>
  <figcaption>One entry point, two dealer mindsets. Each path has its own rules, including when a price change needs a specialist.</figcaption>
</figure>

A few design decisions made it work:

- **Show the choice, then get out of the way.** Before a dealer decides, the offer sits next to ACV's wholesale and retail values. Once they accept, the offer leads and retail steps back, because the decision is made.
- **One tracker for the whole journey.** Guarantee, inspection, and sale in a single progress bar, so dealers never have to call to ask where a car stands.
- **Every offer shows when it expires.** It's honest about how pricing works, and it gives dealers a reason to act.
- **A "no" still has a next step.** If a dealer declines, the design points them straight to a wholesale launch.

For the 2026 launch of the new ACV Guarantee, I designed the in-product onboarding guides with Marketing, audited the whole experience before the soft launch, and made the Guaranteed Sale performance dashboard easier to find from the inventory page.

<figure class="shot">
  <div class="frame"><img src="/images/gs-offer-sold.png" alt="ACV Offers vehicle page after the sale: the offer marked Sold for $17,450, $450 above the offer, with all three progress steps complete" loading="lazy"></div>
  <figcaption>The end of the journey: sold for $450 above the offer, with the upside shown right on the card.</figcaption>
</figure>

## What changed

- **For dealers:** a guaranteed floor on every car, with all the upside kept, and now an offer before the inspection.
- **For ACV:** Guaranteed Sale went from a niche offer to a real revenue driver. I led its expansion into trade-in and retail, and today it's part of how ACV MAX prices a car: retail it, or wholesale it with a guarantee.
- **For the team:** pricing specialists moved from manual intake to managing risk and monitoring the pricing model.

<blockquote>
  <p>"Guaranteed Sale used to feel like a separate thing. Now it's just the natural choice when an auction fails."</p>
  <cite>Dealer, after launch</cite>
</blockquote>

## What I took away

Big growth often comes from removing friction, not adding features. The product already existed. The path to it was the problem.

Now I always ask: *where is the user in their decision when we show this?* Making something available isn't enough. It has to show up at the right moment.
