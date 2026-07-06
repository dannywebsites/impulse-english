# Parked WIP (moved out of the deployed site dir on 2026-07-06)

These files were sitting **untracked inside the Vercel root dir**
(`March-Impulse-Web-.../`). They are parked here — outside the deploy
path — so they can't ship half-finished. Restore them into the site dir
when their prerequisites exist.

## staging-noindex-middleware.ts
Vercel Edge Middleware that serves `noindex` headers + a blocking
`robots.txt` for the host `stagingmarch26.impulse-english.es`.
- That staging host does **not resolve yet** (checked 2026-07-06), so this
  is prep work, not a live gap.
- ⚠️ Before activating: it currently returns `fetch(request)` as the
  pass-through for the production host, which re-fetches every request
  (extra latency on ALL production traffic). Rewrite the pass-through with
  `next()` from `@vercel/edge` first, then move to the site root as
  `middleware.ts` and commit.

## attribution.ts
29-field lead-payload assembly + organic-source derivation for LeadForm.
- Depends on an inline "imp_*" sessionStorage bootstrap script in
  `src/layouts/BaseLayout.astro` that was **never committed** — nothing in
  the repo imports this file, so alone it is dead code.
- To revive: reimplement the BaseLayout bootstrap, import this from the
  lead form, keep `deriveOrganicSource()` in sync between the two.
