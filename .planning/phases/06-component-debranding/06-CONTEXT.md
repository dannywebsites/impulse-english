# Phase 6: Component Debranding - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning
**Source:** Auto-mode (recommended defaults selected)

<domain>
## Phase Boundary

All React and Astro components read brand name, location, and display text from napData/brand-config — no visible Impulse references remain in component source. The `ImpulseSection` type/schema is renamed to a brand-agnostic name. seo-system App.tsx mounts Toaster (FORM-06 closure).

</domain>

<decisions>
## Implementation Decisions

### ImpulseSection rename
- **D-01:** Rename `ImpulseSection` interface in `data/articles/types.ts` to `BrandSection`
- **D-02:** Rename `impulseSection` schema key in `src/content/config.ts` to `brandSection`
- **D-03:** Update all consumers of `ImpulseSection` type and `impulseSection` schema key across the codebase (article data files, PAAArticlePage.tsx, any imports)
- **D-04:** Rename `impulseSectionTemplate` key in `brand-config.ts` to `brandSectionTemplate`

### Cookie consent key
- **D-05:** CookieBanner.tsx derives the localStorage key from a slugified version of `NAP.shortName` + `_cookie_consent` (e.g., `"impulse_english_cookie_consent"`). Import NAP and compute at module level.

### Logo text rendering
- **D-06:** Logo.tsx imports NAP and reads `NAP.shortName` (e.g., "Impulse English"). Split on first space to get the two display spans (brand word + second word). If shortName has no space, use full shortName for first span and empty second span.

### Component alt text debranding
- **D-07:** Navbar.tsx replaces hardcoded `"Impulse English Academy"` alt text with `NAP.name` (already imports NAP)
- **D-08:** Footer.tsx replaces hardcoded `"Impulse English Academy"` alt text with `NAP.name` (already imports NAP)
- **D-09:** CoursePageLayout.tsx replaces fallback hero alt `"Impulse English Academy La Vaguada Madrid"` with template using `NAP.name` and `NAP.city` (already imports NAP)
- **D-10:** PAAArticlePage.tsx replaces visible "Impulse English Academy" text with `NAP.name` (needs NAP import added)

### LeadForm GTM location
- **D-11:** LeadForm.tsx replaces hardcoded `'Barrio del Pilar'` in GTM dataLayer with `NAP.neighborhood` (already imports NAP)

### seo-system Toaster mount (FORM-06)
- **D-12:** seo-system App.tsx adds `<Toaster />` mount from sonner (sonner already installed in seo-system). This closes the FORM-06 gap from Phase 1 where toast calls fire into void.

### Claude's Discretion
- Exact implementation of shortName splitting logic in Logo.tsx
- Whether to add a `NAP.cookieConsentKey` field or compute the slug inline
- Order of changes within plans
- Whether seo-system's SEOHead.tsx copy also needs NAP import updates (check if it has the same hardcoded constants as main site's SEOHead.tsx — Phase 5 may have only fixed the main site copy)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Components to modify
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Logo.tsx` — Lines 34-35: hardcoded "Impulse" / "Academy" spans
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Navbar.tsx` — Lines 74, 201: hardcoded alt text (NAP already imported)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Footer.tsx` — Line 83: hardcoded alt text (NAP already imported)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/CoursePageLayout.tsx` — Line 72: fallback alt with "Impulse" (NAP already imported)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/PAAArticlePage.tsx` — Line 126: visible "Impulse English Academy" text (no NAP import)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/CookieBanner.tsx` — Line 3: `impulse_cookie_consent` localStorage key (no NAP import)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/LeadForm.tsx` — Lines 49, 82: hardcoded "Barrio del Pilar" (NAP already imported)

### Type/schema files to rename
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/data/articles/types.ts` — Line 13: `ImpulseSection` interface
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/content/config.ts` — Line 17: `impulseSection` schema key
- `brand-config.ts` — Line 67: `impulseSectionTemplate` key

### seo-system
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/App.tsx` — Needs `<Toaster />` mount (sonner imported but not rendered)

### Source of truth
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts` — NAP.name, NAP.shortName, NAP.neighborhood available

### Milestone audit (gap definitions)
- `.planning/v1.0-MILESTONE-AUDIT.md` — Defines HIGH-01 through HIGH-06, MED-01 through MED-03, FORM-06 gaps

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `NAP` import already exists in Navbar, Footer, CoursePageLayout, LeadForm — just need to use existing fields
- `NAP.name` = "Impulse English Academy La Vaguada" — replaces all component alt text
- `NAP.shortName` = "Impulse English" — replaces Logo.tsx split text
- `NAP.neighborhood` = "La Vaguada, Barrio del Pilar" — replaces LeadForm GTM location

### Established Patterns
- Phase 5 pattern: import NAP, replace hardcoded string with NAP.field — same pattern applies here
- seo-system components use relative imports `../utils/napData` (not `@/utils/napData`)

### Integration Points
- `ImpulseSection` rename cascades through: types.ts → config.ts → all article data files → PAAArticlePage.tsx → brand-config.ts → auto-publish.js (Phase 8 scope)
- CookieBanner localStorage key change means existing users' consent state resets (acceptable for template, not for production Impulse site)

</code_context>

<specifics>
## Specific Ideas

- The `ImpulseSection` → `BrandSection` rename is a find-and-replace across types, schema, and consumers
- Cookie consent key derivation: `NAP.shortName.toLowerCase().replace(/\s+/g, '_') + '_cookie_consent'`
- Logo split: `const [brandWord, ...rest] = NAP.shortName.split(' ')` then render `brandWord` and `rest.join(' ')`

</specifics>

<deferred>
## Deferred Ideas

- auto-publish.js references to `impulseSectionTemplate` — Phase 8 scope (Auto-Publish Pipeline Decouple)
- seo-system SEOHead.tsx debranding — check if Phase 5 covered it or if it needs separate attention

</deferred>

---

*Phase: 06-component-debranding*
*Context gathered: 2026-04-09 via auto-mode*
