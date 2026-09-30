---
title: "ClearCar"
date: "2025-06-01"
summary: "An AI-powered trade-in platform: a 60-second offer for consumers, and the tools dealers use to turn that offer into a car. I was the lead designer for three years and designed nearly every part of it."
role: "Lead Product Designer"
team_size: 25
duration: "3 years (Quick Quote flow: ~3 months)"
featured: true
featured_image: "/images/cc-hero.jpg"
featured_image_alt: "A dealer website with the ClearCar widget: 'Sell or trade-in your vehicle. Get a real offer in minutes.' with plate, VIN, and make and model options"
hero_frame: true
featured_order: 2
pillars:
  - ai-integration
  - complex-problem-solving
  - product-strategy
meta_description: "How I led design for ClearCar, ACV's AI-powered trade-in platform: a consumer offer flow with 65%+ completion, AI damage detection, and the dealer tools that turn leads into cars."
og_image: "/images/cc-hero.jpg"
---

## In 60 seconds

- **The problem:** Dealers want to buy cars straight from consumers, before those cars hit auction. But a trade-in offer is a lead form, and most people abandon lead forms. And an offer based on a guess isn't one anyone trusts.
- **What I did:** I was ClearCar's lead designer for three years and designed nearly all of it: the consumer offer flow, the condition survey, photo capture with AI damage detection, the dealer portal, and its mobile version for the lot. I worked side by side with the engineering manager and product owner, and led collaboration with an engineering team of 6 to 18, QA, marketing, and our field facilitators.
- **The result:** A consumer flow that more than 65% of people finish, running on dealer websites, on the lot, and in the service lane. It's now a core part of ACV MAX.

<div class="stats">
  <div class="stat"><span class="stat-num">65%+</span><span class="stat-label">of consumers who start the online offer finish it</span></div>
  <div class="stat"><span class="stat-num">3</span><span class="stat-label">channels from one design: website, lot, and service lane</span></div>
  <div class="stat"><span class="stat-num">~3 mo</span><span class="stat-label">to take Quick Quote from concept to launch</span></div>
  <div class="stat"><span class="stat-num">3 yrs</span><span class="stat-label">as lead designer, across every phase of the product</span></div>
</div>

## The problem

ClearCar is a lead generation product. A dealer puts it on their website, and a consumer uses it to find out what their car is worth. Every consumer who finishes becomes a car the dealer can buy.

That creates two problems at once. People drop out of long forms, especially ones that ask for photos and personal details before showing any value. And the offer has to be real. A lowball guess breaks trust, and a number that changes at the dealership breaks it even more.

**The insight:** people will do a surprising amount of work if every step clearly moves them closer to their answer. The job wasn't to make the flow as short as possible. It was to make every step feel like progress.

## The consumer offer: four decisions

### 1. Make starting effortless

The widget opens with the easiest possible question: a license plate, a VIN, or year, make, and model. Everything we could look up, we filled in, and if a plate or VIN couldn't be found, the flow offered another way in instead of a dead end.

### 2. Ask about condition in plain language

Condition is what makes a price accurate, and it's also where people give up. I turned it into a short survey of grouped questions that open one at a time and check themselves off when they're done. Every answer is written the way people talk, with everyday reference points like "damage smaller than a baseball" instead of industry grading terms.

<figure class="shot">
  <div class="frame"><img src="/images/cc-condition.png" alt="ClearCar condition survey: Body Damage question with No Body Damage, Minor, Moderate, and Major options, each with a one-line plain-language description" loading="lazy"></div>
  <figcaption>One question at a time, one plain-language description per answer.</figcaption>
</figure>

### 3. Show the work behind the number

This is the moment the whole flow builds toward, so I designed it to earn trust. The price comes with the market around it: what cars like yours sell for in rough, okay, and excellent condition, and exactly where yours lands. Below that, "What's behind your price" lists the facts it's based on, and "What's next" tells people what to bring to the dealership to lock it in.

<div class="promise">
  <p class="promise-line">Not just a number. <em>A number you can check.</em></p>
  <div class="frame"><img src="/images/cc-price.png" alt="ClearCar price guarantee page: a guaranteed price of $16,540, a market bar showing rough, okay, and excellent condition prices with 'Your vehicle' marked, and a list of what's behind the price" loading="lazy"></div>
  <p class="promise-note">The market bar turns a single price into a position people can see and understand.</p>
</div>

### 4. Let photos and AI do the heavy lifting

Photos make the offer accurate, but they're the biggest ask in the flow. On a computer, we text people a link so they can take photos with their phone. On a phone, they can start right away. Any damage they mention in the survey comes up first in the photo steps, and ACV's AI checks every image for dents, rust, and scratches. The condition is based on evidence, not a guess.

<div class="phones wide">
  <figure><div class="frame"><img src="/images/cc-m-start.png" alt="Mobile: Get an Offer in 60 Seconds, with plate, VIN, and make and model tabs" loading="lazy"></div><figcaption>Start in seconds</figcaption></figure>
  <figure><div class="frame"><img src="/images/cc-m-condition.png" alt="Mobile: body damage question with plain-language answers" loading="lazy"></div><figcaption>Condition in plain language</figcaption></figure>
  <figure><div class="frame"><img src="/images/cc-m-report.png" alt="Mobile: Your ClearCar Market Report is Ready, with market price ranges" loading="lazy"></div><figcaption>A price with context</figcaption></figure>
</div>

I also mapped what happens when someone comes back. Returning users can update their answers and get a fresh price, and if their price is more than two weeks old, we ask them to confirm their car's condition again.

<figure class="shot plain wide">
  <div class="frame"><img src="/images/cc-flow.png" alt="Flow chart of the pricing engine: entry by license plate, VIN, or year make and model, then vehicle information, disclosures, loan information, customer information, and pricing, with a separate path for returning users" loading="lazy"></div>
  <figcaption>The consumer flow, including the logic for returning users.</figcaption>
</figure>

<p class="chapter">The dealer side</p>

## Turning an offer into a car

A finished offer is only half the job. Leads arrive from the dealer's website, the lot, the service lane, and partners like Amazon, and for each one the dealer still has to call the customer, inspect the car, and make a final offer. I designed the ClearCar dealer portal to make that fast, and to bring ACV's other products into the same screen.

<figure class="shot wide">
  <div class="frame"><img src="/images/cc-dealer-aip.png" alt="ClearCar dealer portal appraisal page: vehicle and customer details, the customer's price on a market bar, ACV Guarantee and Wholesale options, a final offer calculator, and ACV Capital floorplan financing" loading="lazy"></div>
  <figcaption>One page per car: the customer's price, ACV's guarantee, a final-offer calculator, and financing through ACV Capital.</figcaption>
</figure>

- **The same market bar the customer saw.** Dealers see exactly what the customer was shown, so both sides start from the same number.
- **A calculator, not a spreadsheet.** Start from the appraisal, subtract the reconditioning estimate, adjust, and send the final offer from the same page.
- **ACV built in.** One click to get an ACV guarantee on the car (the same Guaranteed Sale I designed) or to finance it through ACV Capital.

The most useful view compares three sources side by side: what the **customer** said, what the **dealer** found, and what the **AI inspection** detected. Differences stand out immediately, and the AI damage report shows each damaged panel with photos and a repair estimate.

<div class="pair wide">
  <figure>
    <span class="tag">Customer vs. dealer vs. AI</span>
    <div class="frame"><img src="/images/cc-dealer-compare.png" alt="Vehicle condition table comparing consumer answers, dealer findings, and AI inspection results; the consumer reported no glass damage and the AI found some" loading="lazy"></div>
    <figcaption>The customer said no glass damage. The AI found some.</figcaption>
  </figure>
  <figure>
    <span class="tag accent">AI damage report</span>
    <div class="frame"><img src="/images/cc-damage-report.jpg" alt="AI damage report showing photos of the passenger bumper and passenger door with minor damage and a repair estimate for each" loading="lazy"></div>
    <figcaption>Damage by panel, with photos and a repair estimate.</figcaption>
  </figure>
</div>

### Built for the lot, not just the desk

Dealers don't appraise cars at a desk. They do it walking the lot with the customer standing next to them. So I designed a mobile version of the dealer portal: leads, appraisal details, customer info, and the offer calculator, all usable with one hand.

<div class="phones wide">
  <figure><div class="frame"><img src="/images/cc-m-leads.png" alt="Mobile dealer portal: list of leads with price, status, and call and email buttons" loading="lazy"></div><figcaption>Leads</figcaption></figure>
  <figure><div class="frame"><img src="/images/cc-m-vehicle.png" alt="Mobile dealer portal: appraisal info with vehicle and customer details" loading="lazy"></div><figcaption>Appraisal info</figcaption></figure>
  <figure><div class="frame"><img src="/images/cc-m-aip.png" alt="Mobile dealer portal: appraisal page with customer price and actions" loading="lazy"></div><figcaption>Price and offer</figcaption></figure>
</div>

<p class="chapter">Scale</p>

## One product, many storefronts

As ClearCar grew, the same flow had to work for many dealers at once. I designed it to be white-labeled, so each dealer, brand store, and partner could run it under their own name. For dealer groups with many locations, I designed centralized lead routing: the customer enters a ZIP code and picks a nearby store, and the lead goes straight to that store's portal. I designed two versions to test: matching people to the closest store automatically, and matching automatically while still letting them pick a different store.

<figure class="shot plain wide">
  <div class="frame"><img src="/images/cc-routing.png" alt="Dealer group website: 'Find a location below to start your trade-in' with ZIP code, radius, and brand search and a map of store locations" loading="lazy"></div>
  <figcaption>Centralized lead routing: one trade-in page for a whole dealer group.</figcaption>
</figure>

White-labeling also made ClearCar a platform for new ideas. When ACV wanted to test selling cars straight to its dealer network under a brand of its own, I built BidRev on this same flow, including the brand, messaging, and go-to-market: [read the BidRev case study →](/projects/bidrev/)

Behind all of it sat the ClearCar Admin Portal, where ACV's team set up every dealer, store, and integration. I redesigned that too: [read the Admin Portal case study →](/projects/admin-portal-redesign/)

<p class="chapter">2026</p>

## Designing in code

In 2026 I redesigned the ClearCar customer offer widget, and this time the design lived in code. I used a live Storybook prototype as the source of truth instead of static mockups, took part in engineering code review, and fixed real bugs before handoff: an animation timing issue, expiration dates that didn't update, unsafe data handling, and empty values that could break the page. I documented every decision and tradeoff in a design journal so engineering could pick it up cleanly.

It's the same principle as the rest of ClearCar: the offer has to be right. This time I made sure it stayed right all the way to production.

## What changed

- **For consumers:** a real offer in about a minute, with the reasoning visible.
- **For dealers:** a steady stream of cars bought directly from consumers, priced on real condition data, with the tools to close the deal on the lot.
- **For ACV:** ClearCar became one of the pillars of ACV MAX, and the foundation for bringing ClearCar and MAX together into one platform, a project I also led.

## What I took away

In lead generation, length isn't the enemy. Uncertainty is. People will finish a long flow if they trust where it's going and can see themselves getting closer.
