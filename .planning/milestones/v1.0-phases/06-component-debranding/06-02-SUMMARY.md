---
phase: 06-component-debranding
plan: 02
subsystem: components
tags: [debranding, template-portability, NAP, components]
dependency_graph:
  requires: []
  provides: [debranded-components]
  affects: [Logo, Navbar, Footer, CoursePageLayout, CookieBanner, LeadForm, PAAArticlePage]
tech_stack:
  added: []
  patterns: [NAP-field-imports, derived-constants]
key_files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Logo.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Navbar.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Footer.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/CoursePageLayout.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/CookieBanner.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/LeadForm.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/PAAArticlePage.tsx
decisions:
  - "Logo renders from NAP.shortName.split(' ') to produce brandWord and secondWord dynamically"
  - "CookieBanner CONSENT_KEY derived via NAP.shortName.toLowerCase().replace(/\\s+/g, '_') + '_cookie_consent'"
  - "FORM-06 already satisfied: seo-system App.tsx had Toaster import + render from sonner"
  - "Remaining Barrio del Pilar references in Hero/LocationsSection/etc are geographic content, not config-driven — out of scope for this plan"
metrics:
  duration: "~8m"
  completed_date: "2026-04-09"
  tasks_completed: 2
  files_modified: 7
requirements_satisfied:
  - FORM-06
  - ONBD-01
---

# Phase 06 Plan 02: Component Debranding Summary

**One-liner:** Replaced all hardcoded "Impulse" brand strings in 7 main-site components with NAP field imports, and verified FORM-06 Toaster is mounted in seo-system.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Debrand Logo, Navbar, Footer, CoursePageLayout, CookieBanner, LeadForm, PAAArticlePage | 400f38d | 7 files |
| 2 | Verify FORM-06 (seo-system Toaster) + build verification | (no change needed) | 0 files |

## Changes Made

### Logo.tsx
- Added `import { NAP } from '../utils/napData'`
- Added `const [brandWord, ...rest] = NAP.shortName.split(' '); const secondWord = rest.join(' ');` inside component
- Replaced `>Impulse</span>` with `>{brandWord}</span>`
- Replaced `>Academy</span>` with `>{secondWord}</span>`

### Navbar.tsx
- NAP was already imported
- Replaced both `alt="Impulse English Academy"` (desktop + mobile img) with `alt={NAP.name}`

### Footer.tsx
- NAP was already imported
- Replaced `alt="Impulse English Academy"` with `alt={NAP.name}` on the footer logo img

### CoursePageLayout.tsx
- NAP was already imported
- Replaced fallback hero alt `"${title} - Impulse English Academy La Vaguada Madrid"` with `` `${title} - ${NAP.name} ${NAP.city}` ``

### CookieBanner.tsx
- Added `import { NAP } from '../utils/napData'`
- Replaced `const CONSENT_KEY = 'impulse_cookie_consent'` with `const CONSENT_KEY = NAP.shortName.toLowerCase().replace(/\s+/g, '_') + '_cookie_consent'`
- Result for current NAP: `"impulse_english_cookie_consent"`

### LeadForm.tsx
- NAP was already imported
- Replaced both `location_preference: 'Barrio del Pilar'` with `location_preference: NAP.neighborhood` in GTM dataLayer pushes (honeypot path + success path)

### PAAArticlePage.tsx
- Added `import { NAP } from '../utils/napData'`
- Replaced visible `Impulse English Academy` text with `{NAP.name}` in the article byline

## FORM-06 Verification

`seo-system/App.tsx` already had:
- Line 3: `import { Toaster } from 'sonner'`
- Line 89: `<Toaster />`

FORM-06 satisfied — no code change needed.

## Build Verification

`PUBLIC_WEBHOOK_URL=https://test.example.com npm run build` completed successfully:
- 131 pages built
- 0 errors
- All Phase 6 changes compile correctly

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all NAP field substitutions wire to real napData.ts values.

## Self-Check: PASSED

- Commit 400f38d exists: verified
- All 7 files modified with correct NAP imports
- Build passes with 131 pages and 0 errors
- FORM-06 verified (Toaster present in seo-system/App.tsx)
- acceptance criteria met:
  - grep "NAP.shortName.split" components/Logo.tsx: MATCH
  - grep -c "NAP.name" components/Navbar.tsx: 2
  - grep -c "NAP.name" components/Footer.tsx: 3 (includes copyright lines already there)
  - grep "NAP.name" components/CoursePageLayout.tsx: MATCH
  - grep "NAP.shortName.toLowerCase" components/CookieBanner.tsx: MATCH
  - grep -c "NAP.neighborhood" components/LeadForm.tsx: 2
  - grep "NAP.name" components/PAAArticlePage.tsx: MATCH
  - grep -c "impulse_cookie_consent" components/CookieBanner.tsx: 0
  - grep "'Barrio del Pilar'" components/LeadForm.tsx: 0 matches
