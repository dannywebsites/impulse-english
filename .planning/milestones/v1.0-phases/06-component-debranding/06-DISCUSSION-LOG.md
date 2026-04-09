# Phase 6: Component Debranding - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-09
**Phase:** 06-component-debranding
**Areas discussed:** ImpulseSection rename, Cookie consent key, Logo text rendering, seo-system Toaster
**Mode:** Auto (all recommended defaults selected)

---

## ImpulseSection Rename

| Option | Description | Selected |
|--------|-------------|----------|
| BrandSection | Generic, matches brand-config.ts naming pattern | ✓ |

**User's choice:** [auto] BrandSection (recommended default)
**Notes:** Cascades through types.ts, config.ts, article data files, PAAArticlePage, brand-config.ts

---

## Cookie Consent Key

| Option | Description | Selected |
|--------|-------------|----------|
| Derive from NAP.shortName slugified | e.g., impulse_english_cookie_consent — portable per client | ✓ |

**User's choice:** [auto] Derive from NAP.shortName (recommended default)
**Notes:** Existing users' consent state resets on key change — acceptable for template

---

## Logo Text Rendering

| Option | Description | Selected |
|--------|-------------|----------|
| Split NAP.shortName on space | First word = brand, rest = second line. Preserves current visual layout. | ✓ |

**User's choice:** [auto] Split NAP.shortName (recommended default)
**Notes:** None

---

## seo-system Toaster

| Option | Description | Selected |
|--------|-------------|----------|
| Mount Toaster in App.tsx | Closes FORM-06 gap. Sonner already installed. | ✓ |

**User's choice:** [auto] Yes, mount Toaster (recommended default)
**Notes:** Closes gap from Phase 1 milestone audit

---

## Claude's Discretion

- Exact shortName splitting logic
- Whether to add NAP.cookieConsentKey or compute inline
- Order of changes within plans
- seo-system SEOHead.tsx status check

## Deferred Ideas

- auto-publish.js impulseSectionTemplate — Phase 8 scope
- seo-system SEOHead.tsx debranding verification
