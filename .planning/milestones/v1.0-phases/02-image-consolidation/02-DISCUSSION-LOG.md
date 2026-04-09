# Phase 2: Image Consolidation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-09
**Phase:** 02-image-consolidation
**Areas discussed:** Registry architecture, Image download strategy, seo-system sync approach, Existing image system handling
**Mode:** --auto (all decisions auto-selected)

---

## Registry Architecture

| Option | Description | Selected |
|--------|-------------|----------|
| Category-based object exports | Groups images by semantic category matching existing patterns | [auto] |
| Flat named exports | All images as individual named exports | |
| Re-export existing files | Keep images.ts and academyImages.ts, add barrel file | |

**User's choice:** [auto] Category-based object exports (recommended default)
**Notes:** Matches existing semantic groupings in src/data/images.ts and src/data/academyImages.ts. Provides natural namespacing (logos.cambridge, facilities.classroom).

---

## Image Download Strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Category subdirectories in src/assets/images/ | Organized by semantic category (facilities/, logos/, etc.) | [auto] |
| Flat directory | All 73 images in single directory | |
| Mirror S3 path structure | Replicate S3 folder hierarchy locally | |

**User's choice:** [auto] Category subdirectories in src/assets/images/ (recommended default)
**Notes:** 73+ images in a flat directory would be hard to navigate. Category subdirectories match the registry's category-based exports.

---

## seo-system Sync Approach

| Option | Description | Selected |
|--------|-------------|----------|
| Import from main project via relative paths | seo-system imports ../../utils/images.ts | [auto] |
| Symlink seo-system data files | Filesystem symlinks to main registry | |
| Copy registry at build time | Build script copies registry before seo-system build | |

**User's choice:** [auto] Import from main project via relative paths (recommended default)
**Notes:** Simplest approach. Single source of truth. seo-system already uses relative imports for some shared files. Satisfies IMG-04 "same changeset" requirement.

---

## Existing Image System Handling

| Option | Description | Selected |
|--------|-------------|----------|
| Consolidate into utils/images.ts, delete originals | Merge both data files into single registry | [auto] |
| Keep as secondary exports | Keep old files, have them re-export from new registry | |
| Deprecate gradually | Mark old files deprecated, migrate consumers over time | |

**User's choice:** [auto] Consolidate into utils/images.ts, delete originals (recommended default)
**Notes:** Clean break. Two overlapping image files with scattered S3 URLs is exactly the problem this phase solves. All consumers updated in same changeset.

---

## Claude's Discretion

- Exact category naming for subdirectories
- Whether to create a download script or download manually
- Order of file migration (which components first)
- Whether to batch-commit by category or by subsystem

## Deferred Ideas

None — discussion stayed within phase scope
