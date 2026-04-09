---
phase: 03-image-optimization
plan: "03"
subsystem: website
tags: [image-optimization, astro-image-pipeline, react-props, hero-images]
dependency_graph:
  requires: [03-01]
  provides: [zero-tsx-optimized-refs, astro-hero-pipeline-complete]
  affects: [all-page-hero-images]
tech_stack:
  added: []
  patterns: [getImage-prop-pass, heroImageSrc-optional-prop]
key_files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/InfantilPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/PrimariaPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/AdultosPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/ParticularsPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/examenes-cambridge/CambridgeHubPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/examenes-cambridge/B1PreliminaryPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/examenes-cambridge/B2FirstPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/examenes-cambridge/LinguaskillPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/SobreNosotrosPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/ContactoPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/GraciasPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/PreguntasFrecuentesPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/ReservarClasePage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/cursos-ingles/infantil.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/cursos-ingles/primaria.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/cursos-ingles/adultos.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/cursos-ingles/particulares.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/examenes-cambridge/index.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/examenes-cambridge/b1-preliminary.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/examenes-cambridge/b2-first.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/sobre-nosotros.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/contacto.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/gracias.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/preguntas-frecuentes.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/reservar-clase.astro
decisions:
  - "heroImageSrc prop is optional with fallback to original /images/academy/ URL for backward compatibility"
  - "PreguntasFrecuentesPage: photos-of-facilities.jpg not in astroHeroImages, mapped to classroomLaVaguada as nearest facility hero"
  - "LinguaskillPage.tsx has no corresponding astro wrapper (only used by seo-system SPA), still updated to accept heroImageSrc prop"
  - "B1 and B2 ExamPageLayout: heroImageMobile prop removed entirely — single heroImageSrc passed instead"
metrics:
  duration: "~9m"
  completed_date: "2026-04-09"
  tasks_completed: 2
  files_modified: 25
---

# Phase 03 Plan 03: React Hero Image Migration Summary

**One-liner:** Migrated all 13 remaining React page components from hand-rolled `<picture>` hero patterns to prop-passed Astro-optimized image URLs via `heroImageSrc` optional prop.

## What Was Done

All 13 React page components that contained `/images/optimized/heroes-mobile/` path references in hand-rolled `<picture>` elements were migrated to the Astro image pipeline pattern:

1. Each React component received a new `heroImageSrc?: string` prop
2. The `<picture>` element with two `<source>` tags and `<img>` was replaced with a single `<img src={heroImageSrc || fallbackUrl}>` 
3. Each corresponding `.astro` parent page received `getImage()` calls using the correct `astroHeroImages` registry key
4. The computed `heroImg.src` is passed as the `heroImageSrc` prop to the React component

## Tasks Completed

### Task 1: Course and Exam Page Components (8 components, 15 files)

| Component | Registry Key | Astro Parent |
|-----------|-------------|--------------|
| InfantilPage.tsx | astroHeroImages.infantilClasses | infantil.astro |
| PrimariaPage.tsx | astroHeroImages.primaryStudentsSmiling | primaria.astro |
| AdultosPage.tsx | astroHeroImages.adultClasses | adultos.astro |
| ParticularsPage.tsx | astroHeroImages.danielHelping | particulares.astro |
| CambridgeHubPage.tsx | astroHeroImages.laraC1Cert | examenes-cambridge/index.astro |
| B1PreliminaryPage.tsx | astroHeroImages.techClassroom | b1-preliminary.astro |
| B2FirstPage.tsx | astroHeroImages.jpWithStudents | b2-first.astro |
| LinguaskillPage.tsx | astroHeroImages.techClassroom | (seo-system only, no astro wrapper) |

### Task 2: Remaining Page Components (5 components, 10 files)

| Component | Registry Key | Astro Parent |
|-----------|-------------|--------------|
| SobreNosotrosPage.tsx | astroHeroImages.jpWithStudents | sobre-nosotros.astro |
| ContactoPage.tsx | astroHeroImages.outsideAcademy | contacto.astro |
| GraciasPage.tsx | astroHeroImages.jpWithStudents | gracias.astro |
| PreguntasFrecuentesPage.tsx | astroHeroImages.classroomLaVaguada | preguntas-frecuentes.astro |
| ReservarClasePage.tsx | astroHeroImages.primaryStudentsSmiling | reservar-clase.astro |

## Verification Results

- `grep -rl "/images/optimized" pages/ --include="*.tsx"` returns 0 files
- `grep -rl "/images/optimized" components/ --include="*.tsx"` returns 0 files
- Build with `PUBLIC_WEBHOOK_URL` set: 131 pages built successfully

## Deviations from Plan

**1. [Rule 1 - Scope adjustment] LinguaskillPage.tsx has no .astro wrapper**
- **Found during:** Task 1 investigation
- **Issue:** The plan listed LinguaskillPage.tsx as needing an astro parent update, but `src/pages/linguaskill/index.astro` uses a different component (`LinguaskillGuiaCompletaPage`). `LinguaskillPage.tsx` is only consumed by the seo-system React SPA.
- **Fix:** Updated LinguaskillPage.tsx with `heroImageSrc` prop anyway (for correctness and future use), but did not create a non-existent astro wrapper.
- **Impact:** LinguaskillPage.tsx no longer references /images/optimized/ — criterion met.

**2. [Rule 2 - Missing registry key] photos-of-facilities.jpg not in astroHeroImages**
- **Found during:** Task 2 — PreguntasFrecuentesPage
- **Issue:** `photos-of-facilities.jpg` is not in the `astroHeroImages` export in `utils/images-astro.ts`
- **Fix:** Mapped to `astroHeroImages.classroomLaVaguada` as the plan suggested — nearest facility/interior hero available in the registry
- **Files modified:** preguntas-frecuentes.astro

## Known Stubs

None. All hero images are wired to real Astro-processed image URLs via `getImage()`. Fallbacks use existing local `/images/academy/` URLs which are valid static files.

## Self-Check: PASSED

- SUMMARY.md exists at correct path
- Commit e2e6ca2 (Task 1) found in git log
- Commit bbae2fe (Task 2) found in git log
- 0 files with /images/optimized/ in pages/ or components/
- Build produces 131 pages successfully
