---
phase: 05-critical-infrastructure-debranding
verified: 2026-04-09T19:00:00Z
status: passed
score: 5/5 must-haves verified
re_verification: false
---

# Phase 05: Critical Infrastructure Debranding — Verification Report

**Phase Goal:** Core layout files read all brand identity, tracking IDs, and PWA config from napData/brand-config — no Impulse-specific values remain hardcoded
**Verified:** 2026-04-09
**Status:** PASSED
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | BaseLayout.astro contains zero hardcoded tracking IDs — GA4, Google Ads, GTM all read from NAP.tracking | VERIFIED | `grep "G-WN5973VY1M\|AW-11461982741\|GTM-TDC7CQDD" BaseLayout.astro` → 0 matches; `NAP.tracking.ga4Id/googleAdsId/gtmContainerId` present via `define:vars` at line 91 and noscript at line 243 |
| 2 | BaseLayout.astro reads site name from NAP.siteTitle, base URL from NAP.website, author from NAP.name | VERIFIED | `NAP.siteTitle` at lines 148, 160; `NAP.website` at line 42; `author = NAP.name` at line 35; no `const SITE_NAME` or `const BASE_URL` remain |
| 3 | SEOHead.tsx reads site name, base URL, and author from napData — no duplicate SITE_NAME or BASE_URL constants | VERIFIED | `NAP.siteTitle` at lines 41, 76, 89; `NAP.website` at lines 81, 92; `author = NAP.name` at line 35; `const SITE_NAME`/`const BASE_URL` deleted |
| 4 | site.webmanifest icon paths resolve to existing files in /images/favicons/ | VERIFIED | Manifest contains `/images/favicons/favicon-192x192.png` and `/images/favicons/apple-touch-icon.png`; both files confirmed present in `public/images/favicons/` |
| 5 | Twitter meta tags read from NAP.social.xHandle, not hardcoded @ImpulseEnglish | VERIFIED | `NAP.social.xHandle` at lines 169–170 of BaseLayout.astro; `@ImpulseEnglish` grep returns 0 matches |

**Score:** 5/5 truths verified

---

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `utils/napData.ts` | siteTitle, social.xHandle, tracking object with ga4Id/googleAdsId/gtmContainerId | VERIFIED | All 5 new fields confirmed at lines 9, 79, 141–143; `grep -c` returns 5 |
| `src/layouts/BaseLayout.astro` | Debranded layout using NAP imports | VERIFIED | NAP imported at line 6; all hardcoded Impulse strings replaced; `define:vars` directive present |
| `components/SEOHead.tsx` | Debranded SEO head using NAP imports | VERIFIED | NAP imported at line 2; SITE_NAME/BASE_URL deleted; all usages replaced with NAP.siteTitle/NAP.website |
| `public/site.webmanifest` | Fixed PWA manifest with correct favicon paths | VERIFIED | `/images/favicons/` paths present; no `/images/optimized/` references |
| `scripts/onboard-client.js` | Extended CLI with tracking questions, xHandle, webmanifest generator | VERIFIED | `generateWebmanifest` defined and exported; tracking category (9) present; xHandle question present |

---

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| BaseLayout.astro | napData.ts | `import { NAP } from '../../utils/napData'` | WIRED | Import confirmed at line 6; `NAP.tracking.` used in define:vars and noscript iframe |
| SEOHead.tsx | napData.ts | `import { NAP } from '../utils/napData'` | WIRED | Import confirmed at line 2; NAP.siteTitle and NAP.website used at 5 callsites |
| onboard-client.js generateNapData() | napData.ts template | template literal output containing `tracking:` | WIRED | Lines 281–285 of onboard-client.js confirm `tracking: { ga4Id, googleAdsId, gtmContainerId }` in template |
| onboard-client.js generateWebmanifest() | public/site.webmanifest | JSON.stringify output | WIRED | draftFiles entry at line 912–915; backupMap at line 954; promotionMap at line 970 all confirmed |

---

### Data-Flow Trace (Level 4)

Not applicable — modified files are layout wrappers (BaseLayout.astro, SEOHead.tsx) and config files, not data-rendering components. The "data" here is NAP constants which are compile-time `as const` values, not runtime fetches. No dynamic data fetching to trace.

---

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| generateWebmanifest produces favicons-path JSON with client brand name | `TEMPLATE_MODE=true node -e "import('./scripts/onboard-client.js').then(m => { const r = m.generateWebmanifest({companyName:'Test Co', shortName:'Test'}); const j = JSON.parse(r); console.log(j.name === 'Test Co' && j.icons[0].src.includes('favicons') ? 'PASS' : 'FAIL'); })"` | PASS — icon[0]: /images/favicons/favicon-192x192.png, icon[1]: /images/favicons/apple-touch-icon.png | PASS |
| generateNapData template includes tracking block | Code inspection at onboard-client.js lines 281–285 | `tracking: { ga4Id: "${answers.ga4Id}", googleAdsId: "${answers.googleAdsId}", gtmContainerId: "${answers.gtmContainerId}" }` confirmed | PASS |
| Zero hardcoded tracking IDs in consumer files | `grep -n "G-WN5973VY1M\|AW-11461982741\|GTM-TDC7CQDD" BaseLayout.astro SEOHead.tsx` | 0 matches | PASS |
| site.webmanifest icon paths are correct | `cat public/site.webmanifest` | Both icon paths use /images/favicons/; both files exist on disk | PASS |

---

### Requirements Coverage

Phase 5 plans declare `ONBD-01` in their `requirements` frontmatter. REQUIREMENTS.md additionally maps gap-closure IDs CRIT-01, CRIT-02, CRIT-04, BROKEN-01, and BROKEN-03 to Phase 5 (these are not v1 requirement IDs — they are milestone audit gap IDs tracked in the Gap Closure table).

| Requirement / Gap ID | Source Plan | Description | Status | Evidence |
|---------------------|------------|-------------|--------|----------|
| ONBD-01 | 05-01, 05-02 | CLI script walks user through structured question flow (Phase 5 extends with tracking/webmanifest) | SATISFIED | Tracking category (9), xHandle question, siteTitle question, generateWebmanifest all present in onboard-client.js |
| CRIT-01 (gap) | 05-01 | BaseLayout.astro hardcodes Impulse SITE_NAME, BASE_URL, GA4, GTM, @ImpulseEnglish | CLOSED | All zero in BaseLayout.astro; replaced with NAP imports |
| CRIT-02 (gap) | 05-01 | SEOHead.tsx hardcodes SITE_NAME, BASE_URL, author as Impulse | CLOSED | All zero in SEOHead.tsx; replaced with NAP imports |
| CRIT-04 (gap) | 05-01 | site.webmanifest has Impulse branding + broken /images/optimized/ paths | CLOSED | Manifest now uses /images/favicons/; both icon files exist |
| BROKEN-01 (gap) | 05-01, 05-02 | New client onboarding E2E breaks at site.webmanifest | CLOSED | site.webmanifest generated by CLI via generateWebmanifest(); added to draftFiles/backupMap/promotionMap |
| BROKEN-03 (gap) | 05-01 | site.webmanifest icon loading 404s — /images/optimized/ deleted in Phase 3 | CLOSED | Paths corrected to /images/favicons/ which exists |

**Note on orphaned gap IDs:** REQUIREMENTS.md traceability table shows CRIT-03, BROKEN-02 as Phase 8 (not Phase 5). No gap IDs assigned to Phase 5 in REQUIREMENTS.md are unaccounted for.

---

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `src/layouts/BaseLayout.astro` | 76–77 | `content="PLACEHOLDER"` for Google Search Console verification | Info | Pre-existing item from SEC-02 (v2 requirement); not introduced by Phase 5 and not blocking Phase 5 goal |

No blockers or warnings introduced by Phase 5 changes.

---

### Human Verification Required

None. All success criteria for this phase are verifiable programmatically:
- Hardcoded string absence is grep-verifiable
- Icon file existence is filesystem-verifiable
- CLI generator output is node-executable

---

### Gaps Summary

No gaps. All five observable truths verified. All four core artifacts confirmed substantive and wired. All gap-closure IDs (CRIT-01, CRIT-02, CRIT-04, BROKEN-01, BROKEN-03) addressed. Phase goal achieved.

---

_Verified: 2026-04-09T19:00:00Z_
_Verifier: Claude (gsd-verifier)_
