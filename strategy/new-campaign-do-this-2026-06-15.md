# DropStore — DO THIS NOW (Brand-New Build)

> **BUDGET (updated 2026-06-15 per Josh): 4 ad sets × R1,500/day = R6,000/day to start — NOT 6 × R600.**
> R1,500/ad set ≈ 6 conversions/day at ~R250 CPA → exits Meta's learning phase in ~1 week (R600 ≈ 2–3/day, never exits cleanly, Meta starves the weak sets). Start with the 4 strongest concepts (Proof/Big-number, First AI System, Pain, Student win — seeded with proven winners), add Package-clarity + Founder + step winners +20%/48h once a set clears 2x. At ~3x ROAS, R6,000 spend → ~R18,000 income → **~R10k profit/day from day one** (still ~R6.9k at 2.5x). The R3,600 / 6×R600 figures below are superseded by this line.

Fresh ABO from zero. Numbers are at your current 3.04x ROAS, margin model `profit = income×0.95 − spend×1.15 − income×0.03` → **R1.65 profit per R1 spent**. Store: dropstoresa.co.za. Recovery engine: `/Users/henryburton/.openclaw/workspace-anthropic/clients/dropstore/platform`.

---

## 1. THE NUMBER

**Start: 6 ad sets × R600/day = R3,600/day total.** That is profitable on day one (R5,796 profit at 3.04x; still +R2,484 even if ROAS sags to 2.0).

| Target | Spend/day @ 3.04x | Income/day | How you get there |
|---|---|---|---|
| **Launch (validation)** | **R3,600** (6 × R600) | R10,944 | Day 1 |
| **R5,000 profit/day** | **R3,036** | R9,230 | Already cleared at launch |
| **R10,000 profit/day** | **R6,072** | R18,460 | Step winners +20% every 48–72h, ~9–12 days |

Per-ad-set starting budget: **R600**. Total to hold for R10k/day profit: **R6,072 spend**. The entire game is climbing R3,600 → R6,072 while ROAS stays ≥3.

---

## 2. THE NEW ABO

Objective: **Sales / Conversions**, optimise **Purchase**. Broad: SA, 18–55, no interests, Advantage+ audience ON, Advantage+ placements ON. 2–3 creatives per set so Meta picks the winner inside the set.

| # | Ad set | Daily | Role | Creatives in it |
|---|---|---|---|---|
| 1 | **Proof / Big Number** | R600 | TOF | R6M Generated (5.05x), R10M proof, Bill Board (2.3x) |
| 2 | **First AI System** | R600 | TOF | First AI System (5.92x), Should-be-asking-AI (2.19x) |
| 3 | **Pain / Over-perfecting** | R600 | TOF | Over-perfecting (5.90x), Medicine/pain (2.8x) |
| 4 | **Student Win** | R600 | TOF→MOF | Student win, UGC testimonial, before/after |
| 5 | **Package Clarity** | R600 | MOF | Package-clarity (R299/R449/R999 "we build it"), before/after |
| 6 | **Founder / Authority** | R600 | MOF→BOF | Founder, Should-be-asking-AI |

No separate retargeting set on day one. Add a BOF retargeting set (R300/day, 7-day cart-viewers) only once total spend is past R4k/day.

---

## 3. FIX THE CHECKOUT FIRST (biggest money, do before launch)

Your add-to-cart is 5.7% and checkout abandonment is 61.8%. The product page hides the buy button and the win-back system is half-off. Fix both before you spend a rand.

### 3a. Product page — turn the buy box back on
Shopify Admin → Online Store → Themes → Customize → Product template, for all 3 pages (`store-course`, `2-stores-course-45-days-of-support`, `dropstore-store-setup`):
1. Make **price visible** (R299 / R449 / R999) directly above one high-contrast **"Get Instant Access — R299"** button.
2. **Demote "Skip the Line +R60"** to a small checkbox BELOW the main button. Right now it is the only prominent button — buyers can't tell how to buy the base product.
3. **Fix or delete the countdown** — it currently shows `00:00:00` (dead timer reads as fake, kills trust).
4. Add a 3-item FAQ + sticky mobile buy bar: "Is it really mine?", "How fast?" (24h / 3h Skip), "What if it doesn't work?" (30-day refund).

### 3b. Checkout — carry trust through
Shopify Admin → Settings → Checkout:
1. **Enable guest checkout** (Customer accounts: Optional). Kills "Log in to check out faster" friction.
2. Add checkout branding: card icons + "30-day money-back guarantee · Secure Yoco checkout".
3. **Uncheck "This product requires shipping"** on each digital variant — drops the address step.
4. Popup fix: show DROP10 **instantly on-page** (auto-applied via `/discount/DROP10?redirect=`) instead of "give us your WhatsApp to get the code". Your `src/app/api/checkout-track/route.ts` already builds this URL shape. Removes the phone-gate.
5. Auto-apply the discount in cart permalinks at `src/app/(app)/need-more/checkout-links.ts` — wrap through `/discount/DROP10?redirect=/cart/<variant>:1`.

### 3c. Win-back — turn on abandoned-cart EMAIL (free money already captured)
**The email channel has NEVER sent a single message.** 282 abandoned carts since Jun 3, 237 still open, **202 have a captured email, only 121 have a phone.** WhatsApp recovery works (305 sent) but reaches only the 121 with phones. `dropstore_recovery_emails` table: **0 rows ever.** Root cause: `RECOVERY_EMAIL_ENABLED` is UNSET in Vercel prod (stuck in dry-run). Transport (`GOG_BRIDGE_TOKEN`) is already set. **118 unique emails are eligible and overdue right now.**

Discount codes already exist on Shopify (DROP10, DROP15, MAIL10, MAIL15 — all active). You create nothing.

Run from `/Users/henryburton/.openclaw/workspace-anthropic/clients/dropstore/platform`:
```bash
printf 'true'   | vercel env add RECOVERY_EMAIL_ENABLED production
printf 'MAIL10' | vercel env add RECOVERY_EMAIL_STEP2_CODE production
printf 'MAIL15' | vercel env add RECOVERY_EMAIL_STEP3_CODE production
```
Takes effect on the next cron run, no redeploy. **The 118 overdue carts start getting step-1 emails within ~2 minutes.** Cadence (already coded): 1h (no discount) → 24h (MAIL10) → 48h (MAIL15). Capped at 15/run, so the backlog drains over ~32 min. Unsubscribe built in. At AOV R526 and a conservative 8% recovery, that backlog alone is ~16 carts ≈ **R8.4k**, recurring.

Optional second flip (only once a Meta marketing template is approved — 316 popup opt-ins waiting):
```bash
printf '<approved_template_name>' | vercel env add RECOVERY_WELCOME_TEMPLATE production
```

---

## 4. CONTENT

**Daily (every weekday):**
- **PAID — 6 new ads:** 3 TOF statics + 1 TOF video + 1 MOF static + 1 BOF static into the ABO.
- **ORGANIC:** 3 TikTok (2 reels + 1 reply-video — reply-videos are your only organic over-performers), 1 IG reel, 2 IG stories, 1 FB post, 1 YT short.

**TOF angles (cold, not-into-ecommerce):** FOMO (Should-be-asking-AI 3.63x), AI-builds-store (First AI System 5.10x), pain/escape-9-5 (Medicine 2.86x), before/after (4.08x).
**MOF (semi-aware):** build-live transparency (2.89x), R10M proof (2.52x), scam-reversal honesty.
**BOF (convert):** student win (Janko 3.77x), package clarity, course VSL (1.77x), objection-handling captions.

**Weekly:** ~32 new paid ads (25 statics + 7 videos), ~35 organic assets. Run **1 live Discord build/week** → clip into 5–7 shorts.

**Iterate-the-winners (Mon/Wed/Fri):** pull ad-level data. Any ad ≥1.25x breakeven, ≥3 days, ≥R300 spend → spin 2 diversity variants (A: swap format, B: swap angle copy). Kill anything <1.25x after 3 days + R300. Never fewer than 4 or more than ~12 live creatives per set.

Library is ready today: 43 statics + 14 video scripts + 8 angle files at `/Users/henryburton/.openclaw/workspace-anthropic/clients/dropstore/dropstore-vault/ad-variants/` — ~6 weeks of paid before regeneration.

---

## 5. SCALE RULE

Check daily, same time, per ad set (rolling 3 days):

- **Scale +20%** (max once per 48–72h) when: ROAS ≥ 3.0 **and** frequency ≤ 2.0 **and** out of learning. Stack: R600 → R720 → R864 → R1,037 → R1,244…
- **Hold flat** when: ROAS 2.0–3.0, or frequency 2.0–2.5.
- **Kill the ad set** when: ROAS < 2.0 after ≥R600 spent (≥3 days).
- **Swap creatives, don't add budget** when: frequency > 2.5 with falling ROAS.
- **Hard gate:** if blended ROAS drops below 2.5 on the way up, stop raising and hold one full 3-day cycle before resuming.

**Path:** R3,600 → R6,072 total spend = +69%, reached by stepping the 2–3 winning sets +20% every 2–3 days → **~9–12 days to R10k/day profit.**

---

## 6. WHAT I'M BUILDING vs WHAT YOU LAUNCH

**I build / turn on now (no ad spend, code + specs):**
- Flip `RECOVERY_EMAIL_ENABLED=true` + set MAIL10/MAIL15 step codes → 118 overdue carts chased in ~2 min (Part 3c).
- Wire discount auto-apply into cart permalinks (`checkout-links.ts`) and the tracked-checkout redirect.
- Hand you the exact theme-editor change list for the 3 product pages + checkout settings (Part 3a/3b — Shopify admin, not in repo, so this is the spec; you click).
- The full 37-creative launch library is already inventoried and ready to pull.

**You launch (your money, your Meta account):**
- The 6 × R600 ABO ad sets (Part 2) = R3,600/day.
- The 20%-step scaling decisions (Part 5).
- The Shopify theme-editor + checkout-settings clicks (Part 3a/3b).
- Meta marketing-template approval, then the WhatsApp welcome flip (Part 3c optional).

**Order of operations:** (1) I flip the email env vars + wire discounts → backlog starts recovering today. (2) You fix the product buy box + enable guest checkout. (3) You launch the R3,600 ABO. (4) Daily content + 48–72h scale steps to R6,072/day.