---
episode: 8
title: "What To Do After You Launch Your Ads"
summary: "The work that decides whether your ads make money happens after you press publish, not before. This deep-dive covers the post-launch discipline for South African store owners: leaving the account alone long enough to learn, running a pixel gut-check in Events Manager, reading leading metrics like cost-per-add-to-cart before judging ROAS, scoring the whole account instead of single ads, using breakdowns to confirm spend is hitting the right people, pausing far less than instinct says, iterating horizontally then vertically, mining the Meta Ads Library for proven templates, and scaling winners deliberately. Ends with a simple weekly operating rhythm: one upload day, one analysis day."
topic_tags: [meta-ads, facebook-ads, ecommerce, dropshipping, south-africa, scaling, pixel, analytics, post-launch, creative-testing]
audience: "DropStore community (South African e-commerce / dropshipping store owners)"
---
# What To Do After You Launch Your Ads

Most store owners think the hard part is the setup. You pick the product, write the copy, build the campaign, choose the audience, and the moment you press publish it feels like the work is done. It is not done. It has barely started. The setup is maybe twenty percent of the result. The other eighty percent is what you do in the days and weeks after the ads go live, and almost nobody is disciplined about it.

This episode is about that discipline. It is the unglamorous part: watching the right numbers, resisting the urge to fiddle, knowing when to kill an ad and when to leave it alone, and building a weekly rhythm you can keep. Get this right and a mediocre setup can still make money. Get it wrong and a brilliant setup will quietly bleed your rand away while you panic-click your way to a closed account.

## Leave it alone

The single most expensive mistake new advertisers make is touching the campaign too early. You launch on a Monday, check it three times before lunch, and by Tuesday afternoon you have no sales, so you start changing things. You bump the budget. You swap the audience. You pause an ad. You tell yourself you are being proactive. You are actually breaking the machine.

Here is what is happening under the surface. Meta needs data to learn who your buyer is, and it only gets that data by showing your ad to people and watching what they do. A purchase is the very last step in a chain that often runs over several days. Someone sees your ad, scrolls past, sees it again, taps through, browses, leaves, comes back, adds to cart, hesitates, and only then buys. That journey can take many impressions and a few days for a single customer. If you have only spent a few hundred rand, the system has barely had a chance to find anyone, let alone close them.

Every time you make a meaningful edit, you can reset that learning. The algorithm goes back to square one. So the rule is simple and hard to follow: once you launch, leave the campaign structurally alone for the first few days. Let it spend. Let it gather data. Your job in those first days is to watch, not to touch.

## The pixel gut check

Before you trust a single number in your dashboard, confirm the dashboard is telling the truth. The pixel is the tracking code that tells Meta what happens on your store: who viewed a product, who added to cart, who bought. If it is misreporting, every decision you make afterwards is built on sand.

Go into Events Manager, which is Meta's tracking control room, and look at your purchase event specifically. There are three quick checks.

First, browser events versus server events should roughly agree. Browser events are tracked from the shopper's device. Server events are sent straight from your store's backend, which is more reliable because ad blockers cannot strip them out. The two counts will never match perfectly, but they should land within roughly ten to twenty percent of each other. If browser says forty purchases and server says four, something is broken.

Second, server events should actually be appearing. If you see nothing on the server side, your conversions tracking is not properly connected and Meta is flying half-blind. That alone can wreck performance.

Third, and most important, the purchase count in Events Manager should match the order count in your Shopify admin. If Shopify shows twelve orders and the pixel shows three, you are under-reporting and the algorithm thinks your ads are working far worse than they are. If the pixel shows twenty and Shopify shows twelve, you are double-counting and you will scale into a number that is not real. Do this gut check in the first day or two. It takes ten minutes and saves weeks of chasing ghosts.

## Watch the leading metrics, not the lagging one

On day one everyone stares at ROAS. ROAS means return on ad spend: revenue divided by what you spent. It is the number that ultimately matters, but early on it is the worst thing to obsess over, because it is a lagging metric. It only fills in once purchases happen, and purchases are the slow final step.

What you want early are the leading metrics, the signals that show up first and predict where ROAS is heading. The two that matter most are cost per add-to-cart and cost per checkout initiated. An add-to-cart is someone putting your product in their basket. A checkout initiated is someone starting the payment process. Both happen far more often and far sooner than purchases, so they tell you whether the funnel is healthy long before the sales catch up.

Think of it like a tap and a bucket. The purchase is the bucket filling, which is slow. The add-to-cart is the water already flowing, which you see immediately. If you are getting add-to-carts at a sensible cost, say R30 to R60 depending on your product and margin, the buyers are likely on their way and you just have to be patient. If you are spending R500 and have not had a single add-to-cart, that is an early warning that something is off. Treat those figures as illustrative; your own product and margin set the line.

## Judge the account, not the ad

Stop grading every individual ad as pass or fail. The number that pays your bills is account-wide performance: total revenue against total spend, or your blended cost per acquisition, meaning what it costs on average to win one customer across everything you run.

Inside any healthy account, some ads look like losers and some look like heroes, and that is normal. To find the winners you have to spend on a lot of things that turn out not to be winners. That wasted spend is not a mistake, it is the cost of discovery. Call it the learning tax. You pay it once to find the one or two creatives that carry the account for months. So zoom out. Ask whether the account as a whole is at or near your target, not whether ad number four had a bad Tuesday.

## Use breakdowns to confirm the spend is landing right

Once you have a few days of data, break it down to see who is actually receiving your ads. Meta lets you slice performance by age, by gender, by placement, which means where the ad showed such as the feed or Reels, by platform, meaning Facebook versus Instagram, and by audience segment.

You are looking for mismatches between where the money is going and where the sales are coming from. Say you sell premium skincare and your buyers are clearly women aged 30 to 45, but the breakdown shows half your budget going to men under 25. That is leakage. The breakdown tells you the spend is landing on the wrong people, so now you can fix it. Without it you would just see a soft ROAS and have no idea why.

A South African specific note: check the platform and placement breakdowns carefully, because data costs and device habits here mean your audience may behave differently to the overseas case studies you watched. Let your own numbers tell you where your buyers are, not a guru in another country.

## Pause far less than your instinct says

New advertisers pause ads constantly. Every ad that has not sold by lunchtime gets switched off. This is almost always wrong, and it is wrong for two reasons.

First, you are killing ads before they have had a fair chance. The sensible threshold: only consider pausing an ad once it has spent roughly twice your target cost per purchase with nothing to show for it. If you would be happy paying R250 for a sale, give the ad until about R500 of spend before you call it dead. Below that you do not have enough information. Those rand figures are just an example; plug in your own target.

Second, and this catches people out, a high-spending ad that looks like it is losing money on its own may be quietly holding up the whole account. It might be the ad that introduces your brand to people who then buy through a different ad later. Pause it and your total sales can drop even though you only removed a so-called loser. Big brands run thousands of ads at once and are slow to kill anything, because they manage a system, not a spreadsheet of winners and losers. Pause with a scalpel, not a hatchet.

## Iterate horizontal, then vertical

When you start making new creatives, there is an order to it. Go horizontal first, then vertical.

Horizontal means breadth: many different concepts, angles, hooks, and formats, each one a genuinely different idea for selling the product. One ad leads with the price, another with a problem it solves, another with a customer using it, another with a bold claim. You are casting wide to discover which angle the market responds to. Most will flop. You are fishing.

Vertical means depth: once an angle clearly works, you make many variations of that proven winner. Same core idea, different opening line, different first three seconds, different thumbnail. You are squeezing every drop out of the thing that already prints. The mistake is going vertical too early, making twenty versions before you have proven the concept is worth scaling. Prove the concept horizontally, then mine it vertically.

## Steal like a professional from the Ads Library

You do not have to invent every winning idea yourself. The Meta Ads Library is a free public tool that shows you every ad any business is currently running. The trick is to look for ads that have been running a long time. Nobody keeps paying for an ad that loses money, so an ad live for weeks or months is almost certainly profitable. That is a proven winner someone else has already paid to discover.

Find the long-runners in your niche, study what they have in common, pull out the underlying template such as the hook, the structure, the offer, and the pacing, and adapt it to your own product and your own South African audience. Do not copy it word for word. Take the skeleton that is clearly working and put your own flesh on it. This is how the best operators shortcut months of testing.

## Scale deliberately, do not leave money on the table

The opposite failure of panic-pausing is timidity. Something is working profitably day after day, and the owner just lets it run at the same small budget for fear of breaking it. That is leaving money on the table.

When an ad or campaign has genuinely proven itself, scale it on purpose. The cautious method is to raise the budget in small steady steps, perhaps fifteen to twenty percent every few days, so the algorithm keeps its learning intact. The bolder method is to lean harder into the proven winners, but that carries more variance and is for when you have the data and the cash flow to absorb a wobble. Either way, scaling is a deliberate decision, watching the numbers as you go, not a switch you flip in one jump and walk away from.

## Your weekly operating rhythm

Pull it all together into a routine you can actually keep. The whole point is to stop reacting hour by hour and start operating on a calm weekly cadence.

- Day one of your week is your upload day. This is when you push new creatives live, horizontal concepts if you are still searching, vertical variations if you have a proven winner. New ads go up on this day and this day only.
- One other day of your week is your deep-dive day. This is when you sit down properly, run the pixel gut check, read the leading metrics, pull the breakdowns, judge the account as a whole, and decide what to pause, scale, or leave alone. Real decisions get made on this day, with a clear head, not in panic.
- Every other day, you watch and you wait. You can glance at the numbers, but you do not touch the account. No edits, no panic pauses, no budget jumps outside the plan.

That is the entire discipline. Leave it alone long enough to learn. Trust the numbers only after you have checked they are true. Judge the system, not the soldier. Kill slowly, scale deliberately, and run your week on rhythm instead of reflex. The owners who win are not the ones with the cleverest setup. They are the ones who can sit on their hands while the machine works, then act decisively on the one day a week that counts.

So here is your first concrete move: open a calendar now, name one day this week your upload day and one your deep-dive day, and write both in. That single act turns everything above from theory into a routine you will actually run.
