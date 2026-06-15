// Live DropStore performance (read-only) — run: node live-perf.mjs
// Meta numbers are pulled LIVE from the Graph API on every run; Shopify orders
// are real-time. Read-only: VIEW only, never spends or changes anything.
// This prints highlights; the full JSON (in `d`) has everything for your Claude.
import { readFileSync } from "node:fs"

const env = {}
try { for (const l of readFileSync(new URL("./.env", import.meta.url), "utf8").split("\n")) { const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/); if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "") } } catch {}
const URL_ = env.PERF_URL, TOKEN = env.PERF_TOKEN
if (!URL_ || !TOKEN) { console.error("Missing PERF_URL / PERF_TOKEN in .env (next to this file)."); process.exit(1) }

let r
try { r = await fetch(URL_, { headers: { Authorization: "Bearer " + TOKEN } }) }
catch (e) { console.error("Can't reach the endpoint. Is Tailscale connected on this laptop?\n", e.message); process.exit(1) }
if (!r.ok) { console.error("HTTP", r.status, await r.text()); process.exit(1) }

const d = await r.json()
const R = (x) => "R" + Number(x || 0).toLocaleString("en-ZA")
const s = d.summary, f = d.shopify.funnel, A = d.ads, t = s.today

console.log(`\nDropStore LIVE  (${d.generated_at})`)
console.log(`ads: ${d.freshness.meta_ads}\norders: ${d.freshness.shopify_orders}\n`)
if (t) console.log(`TODAY : spend ${R(t.spend_zar)} | ROAS ${t.roas}x | ${t.purchases} purchases | freq ${t.frequency} | CPM ${R(t.cpm_zar)} | CTR ${t.ctr}%`)
console.log(`30d   : income ${R(s.last_30d.income_zar)} | ad ${R(s.last_30d.ad_spend_zar)} | ROAS ${s.last_30d.roas}x | orders ${s.last_30d.orders} | AOV ${R(s.last_30d.aov_zar)} | net ${R(s.last_30d.net_zar)}`)
console.log(`life  : income ${R(s.lifetime.income_zar)} | ROAS ${s.lifetime.roas}x | net ${R(s.lifetime.net_zar)}   (breakeven ${s.breakeven_roas}x)`)

if (f) {
  console.log(`\nFUNNEL (30d): ${f.landing_page_views} views -> ${f.add_to_cart} ATC -> ${f.initiate_checkout} checkout -> ${f.purchases} bought`)
  console.log(`  completion ${f.checkout_completion_rate_pct}%  |  ABANDONMENT ${f.checkout_abandonment_rate_pct}%  |  recoverable carts(30d) ${d.shopify.abandoned_carts_30d}`)
}
console.log(`  discount codes: ${JSON.stringify(d.shopify.orders_by_discount)}`)

console.log(`\nTOP ADS (live 7d — scale high-ROAS+low-freq, kill high-freq+low-ROAS):`)
for (const a of A.by_ad.slice(0, 15)) console.log(`  ${R(a.spend_zar).padEnd(9)} ROAS ${String(a.roas ?? "-").padEnd(5)} freq ${String(a.frequency ?? "-").padEnd(5)} CPA ${R(a.cpa_zar).padEnd(6)} ${a.purchases}p  ${a.ad}`)

const act = (A.verdicts || []).filter((v) => v.verdict && v.verdict !== "hold")
console.log(`\nAUTO-VERDICTS: ${(A.verdicts || []).length} total${act.length ? " — flagged:" : " (all hold)"}`)
for (const v of act.slice(0, 8)) console.log(`  ${String(v.verdict).toUpperCase().padEnd(16)} ${v.budget_change_pct != null ? "(" + v.budget_change_pct + "%) " : ""}${v.entity}`)

console.log(`\n(${A.by_ad.length} live ads in JSON. Ask Claude to dig into d.ads / d.shopify for the rest.)`)
