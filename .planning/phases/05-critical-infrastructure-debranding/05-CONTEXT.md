# Phase 5: Critical Infrastructure Debranding - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Core layout files (BaseLayout.astro, SEOHead.tsx) and site.webmanifest read all brand identity, tracking IDs, and PWA config from napData/brand-config — no Impulse-specific values remain hardcoded. The onboarding CLI is updated to populate the new fields.

</domain>

<decisions>
## Implementation Decisions

### Tracking IDs location
- **D-01:** Add a `tracking` object to napData.ts with `ga4Id`, `googleAdsId`, `gtmContainerId` fields. Current Impulse values become the defaults. BaseLayout.astro imports these instead of hardcoding.
- **D-02:** Onboarding CLI (`scripts/onboard-client.js`) adds a tracking category to its question flow and includes tracking IDs in the generated napData.ts.

### Site title format
- **D-03:** Add a dedicated `NAP.siteTitle` field (e.g., `"Impulse English Academy La Vaguada – Barrio del Pilar"`). BaseLayout.astro and SEOHead.tsx read `NAP.siteTitle` instead of declaring their own `SITE_NAME` constant.
- **D-04:** BaseLayout.astro reads `NAP.website` instead of declaring its own `BASE_URL` constant.

### Twitter/X handle
- **D-05:** Add `NAP.social.xHandle` field (e.g., `"@ImpulseEnglish"`) — explicit, not extracted from URL. BaseLayout.astro reads this for `twitter:site` and `twitter:creator` meta tags.
- **D-06:** Onboarding CLI asks for X/Twitter handle alongside the X URL in the social profiles category.

### Webmanifest approach
- **D-07:** Keep `site.webmanifest` as a static JSON file. Fix broken icon paths from `/images/optimized/` to `/images/favicons/`. Update name/short_name to match NAP values.
- **D-08:** Onboarding CLI adds a step to write the `site.webmanifest` file with the new client's brand name and correct icon paths.

### SEOHead.tsx debranding
- **D-09:** SEOHead.tsx reads `NAP.siteTitle`, `NAP.website`, and `NAP.name` (for author) from napData. Its own `SITE_NAME`, `BASE_URL`, and `author` constants are deleted.

### BaseLayout.astro author
- **D-10:** BaseLayout.astro default `author` prop reads from `NAP.name` instead of hardcoding "Impulse English Academy".

### Claude's Discretion
- Exact property names within the `tracking` object (ga4Id vs ga4MeasurementId, etc.) — pick clear, intuitive names
- Whether to add a `social.xHandle` field or a top-level `twitterHandle` — choose what fits napData structure best
- Order of new fields in napData.ts
- Exact phrasing of onboarding CLI questions for tracking IDs

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Layout files (files to modify)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro` — Contains all hardcoded tracking IDs (lines 23-24, 98-110, 170-171, 244), SITE_NAME, BASE_URL, author, Twitter handle
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/SEOHead.tsx` — Contains duplicate SITE_NAME (line 18), BASE_URL (line 19), author (line 36)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/site.webmanifest` — Broken icon paths + hardcoded brand name

### Config files (sources of truth)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts` — Business identity data, will receive new `tracking`, `siteTitle`, and `social.xHandle` fields
- `brand-config.ts` — Brand voice/content config (at project root, not website codebase)

### Onboarding CLI (must update)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/onboard-client.js` — Question flow and file generators need new tracking + siteTitle + xHandle categories

### Milestone audit (gap definitions)
- `.planning/v1.0-MILESTONE-AUDIT.md` — Defines CRIT-01, CRIT-02, CRIT-04, BROKEN-01, BROKEN-03 gaps this phase closes

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `napData.ts` already has the pattern for brand identity fields — tracking and siteTitle fit naturally
- `astro:env` pattern from Phase 1 (PUBLIC_WEBHOOK_URL) is available but not needed here — tracking IDs go in napData per D-01

### Established Patterns
- All components import from `utils/napData.ts` using `import { NAP } from '../utils/napData'`
- BaseLayout.astro uses Astro component props with defaults — `author` prop already exists
- Onboarding CLI has 8 question categories with `@inquirer/prompts` — adding a tracking category follows the same pattern

### Integration Points
- BaseLayout.astro is the universal page wrapper — every page depends on it
- SEOHead.tsx is used by seo-system pages (separate build context, different import paths)
- Onboarding CLI napData generator must output the new fields
- site.webmanifest is linked from BaseLayout.astro `<link rel="manifest">`

</code_context>

<specifics>
## Specific Ideas

- All tracking IDs, Twitter handle, site name, and base URL should be **placeholders** in the template — the onboarding CLI fills them in
- The Impulse-specific values remain as defaults in the current napData.ts (they're the production values for the Impulse site)
- Fix the broken webmanifest icon paths to `/images/favicons/` (matching what BaseLayout.astro already uses)

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 05-critical-infrastructure-debranding*
*Context gathered: 2026-04-09*
