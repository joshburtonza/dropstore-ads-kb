// Live DropStore performance (read-only) — run: node live-perf.mjs
// Pulls current Meta Ads + Shopify numbers from the Mac Mini over Tailscale.
// Read-only: it can VIEW performance, never spend or change anything.
import { readFileSync } from "node:fs"

const env = {}
try {
  for (const l of readFileSync(new URL("./.env", import.meta.url), "utf8").split("\n")) {
    const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/)
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "")
  }
} catch {}

const URL_ = env.PERF_URL, TOKEN = env.PERF_TOKEN
if (!URL_ || !TOKEN) { console.error("Missing PERF_URL / PERF_TOKEN in .env (next to this file)."); process.exit(1) }

let r
try { r = await fetch(URL_, { headers: { Authorization: "Bearer " + TOKEN } }) }
catch (e) { console.error("Can't reach the performance endpoint. Is Tailscale connected on this laptop?\n", e.message); process.exit(1) }
if (!r.ok) { console.error("HTTP", r.status, await r.text()); process.exit(1) }

const d = await r.json()
const s = d.summary
const R = (x) => "R" + Number(x).toLocaleString("en-ZA")
console.log(`\nDropStore LIVE performance  (${d.generated_at}, ${d.currency}, read-only)\n`)
console.log(`Last 30d : income ${R(s.last_30d.income_zar)} | ad ${R(s.last_30d.ad_spend_zar)} | ROAS ${s.last_30d.roas}x | orders ${s.last_30d.orders} | AOV ${R(s.last_30d.aov_zar)} | net ${R(s.last_30d.net_zar)}`)
console.log(`Lifetime : income ${R(s.lifetime.income_zar)} | ad ${R(s.lifetime.ad_spend_zar)} | ROAS ${s.lifetime.roas}x | net ${R(s.lifetime.net_zar)}`)
console.log(`Breakeven ROAS: ${s.breakeven_roas}x\n`)
console.log("Top ads by spend (ROAS / CPA / purchases):")
for (const a of (d.ads || []).slice(0, 20)) {
  console.log(`  ${R(a.spend_zar).padEnd(9)} ROAS ${String(a.roas).padEnd(5)} CPA ${R(a.cpa_zar).padEnd(6)} ${String(a.purchases || 0).padStart(3)}p  ${a.ad}`)
}
console.log(`\n(${(d.ads || []).length} ads total. Data syncs ~hourly. This is a read-only view — no ads can be spent or changed from here.)`)
