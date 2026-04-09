# Project Retrospective

*A living document updated after each milestone. Lessons feed forward into future planning.*

## Milestone: v1.0 — Website Template MVP

**Shipped:** 2026-04-09
**Phases:** 8 | **Plans:** 22 | **Tasks:** 29

### What Was Built
- Lead form hardening (honeypot, env var webhook, error feedback with toasts)
- Image consolidation (73 S3 images → local assets, central registry)
- Astro native image optimization pipeline (replacing hand-rolled system)
- CLI onboarding system (9-category question flow → 4 config files)
- Full template debranding (layouts, components, pages, articles, auto-publish pipeline)
- Auto-publish pipeline decoupled from hardcoded brand block

### What Worked
- **Milestone audit after Phase 4** caught 18 debranding gaps that would have shipped — the audit-then-fix pattern (Phases 5-8) was the right call
- **Central registry pattern** (utils/images.ts) made image migration tractable — one file to update, all consumers follow
- **Phase ordering** (consolidation before optimization) avoided rework — Astro `<Image>` needs local files
- **Draft/promote flow** in CLI prevents accidental config overwrites — safe by default
- **YOLO mode + coarse granularity** kept overhead low for a brownfield project with clear requirements

### What Was Inefficient
- **Summary one-liners not consistently written** — many SUMMARY.md files had blank "One-liner:" fields, making auto-extraction for milestones unreliable
- **Phase 2 was the largest** (5 plans, 323 files) — could have been split into main-site vs seo-system to reduce blast radius per plan
- **Audit gap phases (5-8) were reactive** — a pre-milestone "debranding sweep" requirement would have avoided the audit → gap → new phases loop

### Patterns Established
- Two-registry pattern: `images.ts` (URL strings for seo-system) + `images-astro.ts` (ImageMetadata for Astro)
- `define:vars` directive for passing napData values to Astro inline scripts
- Brand-agnostic type names (BrandSection, not ImpulseSection) for template consumers
- CLI generators produce known template content rather than reading original files at runtime
- BRAND alias pattern in auto-publish.js preserves prompt code unchanged while sourcing from config

### Key Lessons
1. **Run milestone audit early, not just at the end** — the 18 gaps found after Phase 4 added 4 more phases. An audit checkpoint after the initial 4 phases would have surfaced these sooner.
2. **Brownfield debranding is a separate concern from feature work** — mixing "add new features" (Phases 1-4) with "debrand existing code" (Phases 5-8) in one milestone works but the second half is pure cleanup with different risk profiles.
3. **Central registries are worth the upfront cost** — every downstream migration (components, blog pages, seo-system) was mechanical once images.ts existed.
4. **seo-system is a separate dependency tree** — it has its own node_modules, its own Vite config, and its own path alias resolution. Always test both build systems.

### Cost Observations
- Model mix: primarily opus (planning + execution), sonnet for research agents
- Sessions: multiple across 20 days
- Notable: Phase 2 (image consolidation) was the most file-heavy at 323 files but executed cleanly due to mechanical nature of the changes

---

## Cross-Milestone Trends

### Process Evolution

| Milestone | Phases | Plans | Key Change |
|-----------|--------|-------|------------|
| v1.0 | 8 | 22 | Initial milestone — established audit-then-fix pattern for gap closure |

### Top Lessons (Verified Across Milestones)

1. Milestone audits catch integration gaps that phase-level verification misses
2. Central registries pay for themselves in downstream migration phases
