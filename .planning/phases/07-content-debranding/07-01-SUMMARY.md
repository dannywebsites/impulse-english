---
phase: 07-content-debranding
plan: 01
subsystem: ui
tags: [astro, typescript, napData, template-portability, debranding]

# Dependency graph
requires:
  - phase: 06-component-debranding
    provides: NAP-driven components (Logo, Navbar, Footer, etc.) — page meta layer is the next portability gap
provides:
  - 16 .astro page files with NAP imports and zero hardcoded Impulse strings in meta tags
  - 2 TS article data files with NAP imports replacing all 40 brand literal strings
  - Template literal pattern for brandSection headings/content in article data
affects:
  - 07-02-content-debranding (markdown articles, safety-net)
  - future client onboarding — swapping napData.ts now cleanly updates all page meta

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "NAP import in .astro frontmatter — import { NAP } from '../../utils/napData' at correct depth"
    - "Template literals for meta props — title={`...${NAP.name}...`} instead of static strings"
    - "define:vars directive for passing NAP to inline is:inline scripts"
    - "Template literal backticks for TS string fields with NAP interpolation"

key-files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/index.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/sobre-nosotros.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/metodologia.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/nuestro-equipo.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/precios.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/testimonios.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/contacto.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/reservar-clase.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/aviso-legal.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/politica-cookies.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/politica-privacidad.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/blog/index.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/cursos-ingles/infantil.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/cursos-ingles/online.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/cursos-ingles/primaria.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/academias-ingles-madrid/adultos.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/data/articles/cambridge-b2-first.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/data/articles/cambridge-c1-advanced.ts

key-decisions:
  - "NAP import depth varies by page subdirectory: src/pages/*.astro uses ../../utils/napData, subdirs use ../../../utils/napData, data/articles/ uses ../utils/napData"
  - "index.astro inline is:inline script uses define:vars to pass NAP.name and NAP.neighborhood — frontmatter vars not available in is:inline without this directive"
  - "brandSection heading strings in TS article files use NAP.shortName for short headings (en Impulse) and NAP.name for full-name references"
  - "adultos.astro fullTitle page uses NAP.city and NAP.shortName in its title expression since it already has fullTitle={true}"

patterns-established:
  - "Page meta debranding pattern: add NAP import, convert static string props to template literal expressions"
  - "TS data file debranding: convert single-quoted strings to backtick template literals with ${NAP.*} interpolation"

requirements-completed: [ONBD-01]

# Metrics
duration: 20min
completed: 2026-04-09
---

# Phase 7 Plan 1: Content Debranding - Page Meta Tags and Article Data Summary

**16 .astro page files and 2 TS article data files debranded via NAP imports — zero hardcoded "Impulse" strings remain in any page meta or article brand section**

## Performance

- **Duration:** ~20 min
- **Started:** 2026-04-09
- **Completed:** 2026-04-09
- **Tasks:** 2
- **Files modified:** 18

## Accomplishments

- Added `import { NAP }` to all 16 .astro page files at the correct relative path depth for each subdirectory level
- Replaced all hardcoded Impulse strings in title, description, and keywords props with NAP template literals
- Fixed index.astro's inline script to use `define:vars={{ brandName: NAP.name, neighborhood: NAP.neighborhood }}` so the Vimeo iframe title is also debranded
- Replaced 21 Impulse occurrences in cambridge-b2-first.ts and 19 in cambridge-c1-advanced.ts with NAP.name/NAP.shortName template literals

## Task Commits

1. **Task 1: Debrand all 16 .astro page meta tags with NAP imports** - `6805ed5` (feat)
2. **Task 2: Debrand 2 TypeScript article data files with NAP imports** - `0f687de` (feat)

## Files Created/Modified

- `src/pages/index.astro` - NAP import + meta props + inline script define:vars + 2 alt text attributes
- `src/pages/sobre-nosotros.astro` - NAP import + description + keywords
- `src/pages/metodologia.astro` - NAP import + description (shortName used for methodology name)
- `src/pages/nuestro-equipo.astro` - NAP import + description + keywords
- `src/pages/precios.astro` - NAP import + description
- `src/pages/testimonios.astro` - NAP import + description + keywords
- `src/pages/contacto.astro` - NAP import + description + keywords
- `src/pages/reservar-clase.astro` - NAP import + description
- `src/pages/aviso-legal.astro` - NAP import + description
- `src/pages/politica-cookies.astro` - NAP import + description
- `src/pages/politica-privacidad.astro` - NAP import + description
- `src/pages/blog/index.astro` - NAP import + description (depth ../../../)
- `src/pages/cursos-ingles/infantil.astro` - NAP import + description
- `src/pages/cursos-ingles/online.astro` - NAP import + description (shortName for methodology ref)
- `src/pages/cursos-ingles/primaria.astro` - NAP import + description
- `src/pages/academias-ingles-madrid/adultos.astro` - NAP import + fullTitle title prop
- `data/articles/cambridge-b2-first.ts` - NAP import + 21 brand ref conversions to template literals
- `data/articles/cambridge-c1-advanced.ts` - NAP import + 19 brand ref conversions to template literals

## Decisions Made

- NAP import depth varies by page directory level — no single relative path works for all; each file gets the correct depth
- index.astro inline script required `define:vars` directive since `is:inline` blocks cannot access frontmatter variables directly
- TS article files use `../utils/napData` path since `data/articles/` is one level down from project root where `utils/` lives
- brandSection headings with "en Impulse" use `NAP.shortName`; headings/content with "Impulse English Academy" use `NAP.name`

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All 16 .astro page meta tags and both TS article data files are fully debranded
- Changing napData.ts for a new client will now update all page titles, descriptions, and article brand sections automatically
- Plan 07-02 (markdown article debranding + onboarding CLI safety-net) is ready to proceed

---
*Phase: 07-content-debranding*
*Completed: 2026-04-09*

## Self-Check: PASSED

Files verified:
- `src/pages/index.astro` - FOUND (NAP import present, zero Impulse refs)
- `data/articles/cambridge-b2-first.ts` - FOUND (NAP import present, zero Impulse refs outside import)
- `data/articles/cambridge-c1-advanced.ts` - FOUND (NAP import present, zero Impulse refs outside import)

Commits verified:
- `6805ed5` - FOUND: feat(07-01): debrand 16 .astro page meta tags with NAP imports
- `0f687de` - FOUND: feat(07-01): debrand 2 TS article data files with NAP imports
