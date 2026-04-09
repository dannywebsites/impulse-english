---
phase: 04-client-onboarding-cli
verified: 2026-04-09T17:00:00Z
status: passed
score: 4/4 success criteria verified
re_verification: false
---

# Phase 4: Client Onboarding CLI Verification Report

**Phase Goal:** A developer can clone the repo, run a single CLI script, answer questions, and receive a fully configured website ready to build — without touching Impulse-specific config files manually
**Verified:** 2026-04-09
**Status:** PASSED
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths (from ROADMAP.md Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Running the onboarding script walks through all required question categories and produces draft versions of brand-config.ts, napData.ts, buildPageTitle.ts, and .env.template | VERIFIED | All 8 section headers confirmed at lines 374/408/437/542/623/669/740/769. Four generators: `generateBrandConfig`, `generateNapData`, `generateBuildPageTitle`, `generateEnvTemplate` all present. DRAFT_DIR wiring confirmed with `writeFileSync` calls writing to `.draft/`. |
| 2 | The script halts with an error if run against the production Impulse repo (TEMPLATE_MODE guard active) | VERIFIED | `isProductionRepo()` checks git remote for "impulse" string (lines 20–33). Running `node scripts/onboard-client.js` without TEMPLATE_MODE exits code 1 with "This appears to be the production Impulse repo." — confirmed via live execution. |
| 3 | Draft files require explicit human confirmation before being promoted to final files — the originals are never overwritten silently | VERIFIED | Promotion gated on `confirm()` prompt at line 870 ("Promote these drafts to final files?", default false). Rejection path at line 876 prints "Drafts preserved in .draft/ directory." and exits without touching originals. Backup of originals to `.draft/backup/*.bak` occurs before any `copyFileSync` to final locations (lines 883–905). |
| 4 | After confirmation, running npm run build against the generated config succeeds without TypeScript or Astro errors | VERIFIED | SUMMARY 04-02 confirms: "Confirmed npm run build succeeds (131 pages built) with generated files substituted for originals." Build exec at line 921: `execSync('npm run build', { cwd: WEBSITE_ROOT, stdio: 'inherit' })`. All 13 content checks passed in integration test. |

**Score:** 4/4 success criteria verified

---

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `March-Impulse-Web-.../scripts/onboard-client.js` | Complete CLI onboarding script, min 350 lines | VERIFIED | 948 lines. Shebang present. ESM module. |
| `March-Impulse-Web-.../package.json` | Contains `onboard` script alias | VERIFIED | `"onboard": "node scripts/onboard-client.js"` confirmed. `@inquirer/prompts@^8.4.1` and `diff@^8.0.4` in devDependencies. |

**Plan 02 artifacts** (`.draft/` files) are runtime outputs — not statically checkable; verified by integration test in SUMMARY 04-02.

---

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `scripts/onboard-client.js` | `brand-config.ts` | generates `.draft/brand-config.ts` from answers | VERIFIED | `generateBrandConfig(answers)` uses `answers.*` for all values; `copyFileSync` to `PROJECT_ROOT/brand-config.ts` confirmed at line 897. Pattern `brand-config.ts` present. |
| `scripts/onboard-client.js` | `utils/napData.ts` | generates `.draft/napData.ts` preserving helper functions | VERIFIED | `generateNapData()` includes verbatim `getSchemaAddress()` and `getAddressLines()` function bodies at lines 280–294. `copyFileSync` to `WEBSITE_ROOT/utils/napData.ts` confirmed. |
| `scripts/onboard-client.js` | `utils/buildPageTitle.ts` | generates `.draft/buildPageTitle.ts` with new brand constants | VERIFIED | `generateBuildPageTitle(answers)` uses `answers.CORE_BRAND`, `answers.BARRIO_SUFFIX`, `answers.SHORT_BRAND`. Pattern `buildPageTitle.ts` present. `copyFileSync` to final location confirmed. |
| `scripts/onboard-client.js` | `.draft/backup/*.bak` | backup before promotion | VERIFIED | `backupMap` at lines 883–888 backs up all 3 source files before any overwrite. |

---

### Data-Flow Trace (Level 4)

The CLI is not a data-rendering component — it collects user input via prompts and writes files. Data flows from `answers` object → generator functions → `writeFileSync` → `.draft/` → `copyFileSync` → final files. Verified: `generateBrandConfig(answers)` references `answers.companyName`, `answers.shortName`, `answers.tagline`, and all other collected fields via template literals. No static/empty returns in generator functions. No hardcoded empty arrays passed to final output (arrays are built from `answers.*` fields).

| Stage | Data Variable | Source | Produces Real Data | Status |
|-------|--------------|--------|--------------------|--------|
| Brand config generation | `answers.*` | User prompts via `@inquirer/prompts` | Yes — all fields use `esc(answers.X)` interpolation | FLOWING |
| NAP data generation | `answers.openingHours`, `answers.areaServed`, etc. | User prompts + derived values | Yes — arrays built from prompt answers | FLOWING |
| Build verification | Output of `npm run build` | Astro build against generated files | Yes — 131 pages confirmed built | FLOWING |

---

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Guard exits code 1 on production repo | `node scripts/onboard-client.js` (no env) | "ERROR: This appears to be the production Impulse repo." + exit 1 | PASS |
| Module loads without ERR_MODULE_NOT_FOUND | `node -e "import('./scripts/onboard-client.js')"` | Guard fires (not load error) | PASS |
| All 8 section headers present | `grep -n "console.log.*[0-9].*─"` | Lines 374/408/437/542/623/669/740/769 found | PASS |
| Package alias wired | `grep "onboard" package.json` | `"onboard": "node scripts/onboard-client.js"` | PASS |
| Dependencies installed | `grep "@inquirer/prompts\|\"diff\"" package.json` | Both in devDependencies | PASS |

---

### Requirements Coverage

| Requirement | Source Plan(s) | Description | Status | Evidence |
|-------------|---------------|-------------|--------|----------|
| ONBD-01 | 04-01, 04-02 | CLI script at scripts/onboard-client.js walks user through structured question flow using @inquirer/prompts | SATISFIED | Script exists (948 lines), imports `@inquirer/prompts`, 8 question categories confirmed |
| ONBD-02 | 04-01, 04-02 | Question flow covers: business identity, contact info, geo coordinates, opening hours, social profiles, brand voice, credentials | SATISFIED | All 8 categories at lines 374/408/437/542/623/669/740/769 |
| ONBD-03 | 04-01, 04-02 | Script generates populated brand-config.ts and napData.ts from answers | SATISFIED | `generateBrandConfig` and `generateNapData` present, use `answers.*` for all fields |
| ONBD-04 | 04-01, 04-02 | Script generates buildPageTitle.ts with new brand constants | SATISFIED | `generateBuildPageTitle` present, updates CORE_BRAND/BARRIO_SUFFIX/SHORT_BRAND |
| ONBD-05 | 04-01, 04-02 | Script creates .env.template with required environment variables documented | SATISFIED | `generateEnvTemplate` present, produces file with `PUBLIC_WEBHOOK_URL` documented |
| ONBD-06 | 04-01, 04-02 | Script runs npm run build after generation to verify the template compiles | SATISFIED | `execSync('npm run build', ...)` at line 921; build passed with 131 pages per SUMMARY 04-02 |
| ONBD-07 | 04-01 only | TEMPLATE_MODE guard prevents running onboarding on production repo | SATISFIED | `isProductionRepo()` checks git remote for "impulse"; exits code 1 — confirmed via live execution |
| ONBD-08 | 04-01, 04-02 | Generated config files are written as drafts first, requiring human confirmation before promotion | SATISFIED | Draft written to `.draft/` before any confirmation; `confirm()` prompt default false; backup-then-copy promotion flow |

No orphaned requirements — all 8 ONBD IDs declared in plans are accounted for. ONBD-07 appears only in plan 04-01 (which is correct — the guard was built and smoke-tested in that plan).

---

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `scripts/onboard-client.js` | 129 | `{companyName}`, `{tagline}`, `{socialProof}` in string | INFO | These are intentional literal placeholder strings in `impulseSectionTemplate.content` per PLAN spec — they are the template pattern that article writers use, not unresolved interpolations. Not a stub. |

No blockers. No warnings. One informational note about intentional placeholder strings.

---

### Human Verification Required

Task 2 of Plan 02 was a `checkpoint:human-verify` gate. Per SUMMARY 04-02, it was "auto-approved" (checkpoint, no commit needed). The human UX verification (visual appearance of colorized diffs, interactive prompt flow feel, confirmation dialog readability) was not documented as completed by a human. This is flagged below.

#### 1. Interactive CLI UX

**Test:** From the website directory, run `TEMPLATE_MODE=true npm run onboard`, press Enter on all prompts to accept defaults, type "n" at the promotion prompt.
**Expected:** All 8 section headers display in order with clear visual separation. Colorized diffs appear in green/red/cyan after the question flow. Promotion prompt defaults to "n". Drafts appear in `.draft/` without touching originals.
**Why human:** Visual layout, terminal rendering, and prompt ergonomics cannot be verified programmatically.

---

### Gaps Summary

No gaps. All 4 ROADMAP success criteria verified. All 8 ONBD requirements satisfied. Script exists and is substantive (948 lines), wired (package.json alias, copyFileSync to correct paths), and data-flowing (answers object consumed by all generators). Guard confirmed working via live execution.

The only outstanding item is human UX verification of the interactive terminal flow — this was marked as auto-approved in SUMMARY 04-02 without documented human confirmation. This does not block the phase goal (the code is correct), but noting it for completeness.

---

_Verified: 2026-04-09T17:00:00Z_
_Verifier: Claude (gsd-verifier)_
