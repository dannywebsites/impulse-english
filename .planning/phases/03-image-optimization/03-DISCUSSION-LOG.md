# Phase 3: Image Optimization - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-09
**Phase:** 03-image-optimization
**Areas discussed:** Image file migration, Astro/React component boundary, Registry refactor, Hand-rolled cleanup scope
**Mode:** Auto (--auto flag)

---

## Image File Migration

| Option | Description | Selected |
|--------|-------------|----------|
| Move to src/assets/images/academy/ | Enables Astro build-time optimization via static imports | ✓ |
| Keep in public/images/academy/ | No optimization — images served as-is | |
| Symlink from src/assets/ to public/ | Single copy, both systems access | |

**User's choice:** [auto] Move to src/assets/images/academy/ (recommended default)
**Notes:** Astro's <Image> and <Picture> only optimize images imported from src/. The public/ copy is retained for seo-system Vite SPA compatibility.

---

## seo-system Image Access

| Option | Description | Selected |
|--------|-------------|----------|
| Keep public/images/academy/ for seo-system | Minimal disruption, dual copies | ✓ |
| Configure Vite alias to src/assets/ | Single source, more complex config | |
| seo-system references Astro dist/ output | Couples seo-system to Astro build | |

**User's choice:** [auto] Keep public/images/academy/ for seo-system (recommended default)
**Notes:** seo-system is a standalone Vite SPA that cannot use astro:assets. Keeping public/ copy avoids cross-system coupling.

---

## Astro/React Component Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| getImage() in .astro, pass URLs as props | Clean separation, React stays framework-agnostic | ✓ |
| Create Astro wrapper components for each React component | More Astro-native but high refactor cost | |
| Use Astro <Image> only in .astro files, skip React components | Leaves React images unoptimized | |

**User's choice:** [auto] getImage() in .astro frontmatter, pass optimized URLs as props to React components (recommended default)
**Notes:** Most image rendering happens in React .tsx components. getImage() generates optimized URLs at build time; React components use standard <img> tags with those URLs.

---

## Hand-Rolled Cleanup Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Delete all: optimize-images.mjs (x2), OptimizedImage.tsx, public/images/optimized/, public/images/original/ | Full cleanup per OPT-04 | ✓ |
| Keep OptimizedImage.tsx as deprecated | Gradual migration, more files to maintain | |
| Keep public/images/optimized/ as fallback | Safety net, but 194 unnecessary files | |

**User's choice:** [auto] Full cleanup — delete all hand-rolled artifacts (recommended default)
**Notes:** OPT-04 explicitly requires replacing the hand-rolled system. Keeping artifacts would create confusion about which system is active.

---

## Claude's Discretion

- File structure for static imports (one file vs. per-category)
- Whether to create an Astro wrapper component for common image patterns
- Build verification approach
- Order of migration

## Deferred Ideas

None — discussion stayed within phase scope
