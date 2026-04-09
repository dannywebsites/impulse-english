# Phase 5: Critical Infrastructure Debranding - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-09
**Phase:** 05-critical-infrastructure-debranding
**Areas discussed:** Tracking IDs location, Site title format, Twitter/X handle, Webmanifest approach

---

## Tracking IDs Location

| Option | Description | Selected |
|--------|-------------|----------|
| napData.ts tracking section | Add tracking object with ga4Id, googleAdsId, gtmId. Onboarding CLI already generates napData.ts. Single source of truth. | ✓ |
| Environment variables via astro:env | Like PUBLIC_WEBHOOK_URL. More secure but adds env var management burden per client. | |
| brand-config.ts | Group with other brand identity. But brand-config.ts is at project root, not in website codebase. | |

**User's choice:** napData.ts tracking section (Recommended)
**Notes:** User wants tracking IDs to be placeholders that onboarding CLI fills in.

---

## Site Title Format

| Option | Description | Selected |
|--------|-------------|----------|
| Single field: NAP.siteTitle | Add a dedicated siteTitle field. Onboarding CLI asks for it. Simple, no composition logic. | ✓ |
| Compose from NAP.name + NAP.neighborhood | Build the title dynamically. More flexible but adds concatenation logic in layouts. | |

**User's choice:** Single field: NAP.siteTitle (Recommended)
**Notes:** None

---

## Twitter/X Handle

| Option | Description | Selected |
|--------|-------------|----------|
| New NAP.social.xHandle field | Explicit field like '@ImpulseEnglish'. No URL parsing logic. Onboarding CLI asks for it. | ✓ |
| Extract from NAP.social.x URL | Parse URL to get handle. No new field but adds parsing and current handle doesn't match. | |

**User's choice:** New NAP.social.xHandle field (Recommended)
**Notes:** None

---

## Webmanifest Approach

| Option | Description | Selected |
|--------|-------------|----------|
| Static + CLI updates it | Keep site.webmanifest as static JSON. Onboarding CLI writes brand name + correct icon paths. | ✓ |
| Astro endpoint generates it | Create src/pages/site.webmanifest.ts that imports napData and generates JSON. Dynamic but adds build step. | |

**User's choice:** Static + CLI updates it (Recommended)
**Notes:** User confirmed static approach as long as it works correctly with Astro.

---

## Claude's Discretion

- Exact tracking object property names (ga4Id vs ga4MeasurementId, etc.)
- Whether xHandle goes inside social object or at top level
- Field ordering in napData.ts
- Exact phrasing of new onboarding CLI questions

## Deferred Ideas

None — discussion stayed within phase scope
