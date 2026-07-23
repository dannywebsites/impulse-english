# SEO Decisions Log

Every SEO decision is logged here, grounded in [`SEO-Master-Class-Reference.md`](./SEO-Master-Class-Reference.md)
(the standing first-consult playbook). Newest first.

---

## 2026-07-23 — Target keyword: "academia de inglés cerca de mí" (6,600/mo, ~#22)

**Context:** biggest generic local term in the niche; a proximity/"near-me" query. No page currently
targets it; homepage is anchored to "La Vaguada y Barrio del Pilar."

### Decision 1 — The **homepage** owns the term as the Tier-1 pillar; the `por-barrios` hub + 10 barrio pages are the interlinked Tier-2/3 moat.
**Why (book):**
- Homepage is the authority node and *already ranks #22* — Expansion step says **build the moat around the proven winner**, don't move the target to a zero-authority page.
- **One intent = one page** — chasing the term on both homepage *and* hub = self-cannibalization.
- **Broad-vs-narrow rule** removes the only risk (barrio dilution): broaden the H1/title/intro to "Madrid norte / cerca de ti," keep "La Vaguada"/"Barrio del Pilar" as H2 sub-sections.
- Rejected: new `/academia-ingles-cerca-de-mi/` page (don't spin up a thin page for a term you already rank for); hub-as-pillar (discards homepage traction/authority).

### Decision 2 — Optimise existing surfaces **this PR**; build new location pages (Herrera Oria, Valdeacederas, Fuentelarreina) as a **separate Expansion PR after validation.**
**Why (book):** **Validation precedes Expansion** — measure the term's avg position + the barrio cluster
(GSC "URLs containing academia-ingles") first; *"don't build hubs just to build hubs."* Then expand
around what's working, using the routing data in `Competitor info and direction for new location pages.docx`.

### Decision 3 — **Defer the homepage copy rewrite.** Ship the near-me signal through new surfaces, geo data and internal linking only; leave title, H1 and intro untouched.
**Why (book):** same principle as Decision 2 — **Validation precedes Expansion.** The homepage's barrio
consolidation merged the *same day* (`f29b3b9`) and has **zero GSC data**. Rewriting its title/H1/intro
now would overwrite an unmeasured change and make both experiments unreadable: if position moves, we
couldn't attribute it. Decision 1 stands — the homepage is still the Tier-1 pillar — but the
broad-vs-narrow rewrite of its copy waits for one GSC cycle on the barrio terms.

**Shipped instead (PR `seo/cerca-de-mi-pillar`):**
- Corrected the LocalBusiness `geo` pin (~500 m off) to the real GBP coordinates; added `geo.position` + `ICBM` head meta.
- Homepage FAQ + `FAQPage` schema, six proximity questions (metro/bus/coche/aparcamiento), answers <300 chars.
- "Cómo llegar desde tu barrio" routing block on the homepage — real metro L9 / bus / drive times per origin.
- "Zonas" header-nav entry → the `por-barrios` hub (it had no nav entry at all).
- Completed the lateral barrio ring + added homepage up-links, via a shared `NearbyAreas` component
  fed by a single `utils/barrioAreas.ts` list (the hand-maintained rings had drifted: several pages
  were missing Mirasierra and Montecarmelo/Las Tablas).

**Scope note:** the book has **no GBP/citations chapter** → the "citations" half of this keyword's
attack is a separate, off-repo workstream (GBP category, NAP consistency vs `utils/napData.ts`, reviews).

**Implementation plan:** `~/.claude/plans/handoff-saved-vectorized-ullman.md` (approved and executed
2026-07-23). Supersedes the earlier draft `twinkly-popping-gosling.md`, whose Deliverable B1
(homepage copy rewrite) is deferred by Decision 3.
