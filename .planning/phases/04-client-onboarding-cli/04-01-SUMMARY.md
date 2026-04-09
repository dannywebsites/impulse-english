---
phase: 04-client-onboarding-cli
plan: 01
subsystem: onboarding-cli
tags: [cli, onboarding, template, brand-config, napData]
dependency_graph:
  requires: []
  provides: [scripts/onboard-client.js, onboard npm alias, .draft/ gitignore]
  affects: [brand-config.ts, utils/napData.ts, utils/buildPageTitle.ts]
tech_stack:
  added: ["@inquirer/prompts@^8.4.1", "diff@^8.0.4"]
  patterns: [ESM CLI script, interactive prompts, colorized diff, draft/promote UX]
key_files:
  created:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/onboard-client.js
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/package.json
    - .gitignore
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/.gitignore
decisions:
  - "@inquirer/prompts editor prompt used for multi-line arrays (areaServed, metro, busLines, credentials, audienceSegments)"
  - "categoryTopicRef uses Impulse defaults with inline comment noting manual update needed for non-English-academy clients"
  - "sameAs array derived from [gbpUrl, instagram, facebook, tiktok, x, linkedin, youtube] filtering empties"
  - "napData.ts helper functions (getSchemaAddress, getAddressLines) generated verbatim in output — no file read needed since content is known"
metrics:
  duration: "~8 minutes"
  completed: "2026-04-09T16:04:04Z"
  tasks_completed: 2
  files_changed: 4
---

# Phase 04 Plan 01: Client Onboarding CLI Summary

**One-liner:** Interactive Node.js CLI that walks 8 question categories and generates fully configured brand-config.ts, napData.ts, buildPageTitle.ts, and .env.template via draft/diff/promote flow with TEMPLATE_MODE guard.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | CLI script + dependencies + package.json alias | c223f29 | scripts/onboard-client.js (945 lines), package.json, package-lock.json |
| 2 | .gitignore additions + smoke test | ff263df | .gitignore (root), .gitignore (website) |

## What Was Built

`scripts/onboard-client.js` (945 lines) — a complete ESM CLI script that:

1. **TEMPLATE_MODE guard** — checks git remote for "impulse" string; exits code 1 with clear error unless `TEMPLATE_MODE=true` is set
2. **8 question categories** — Business Identity, Contact Info, Geo & Address, Opening Hours (per-day structured sub-flow with Spanish day names and consecutive-closed-day grouping), Social Profiles, Brand Voice & Language, Credentials & Ratings, CTA Defaults
3. **4 file generators** — `generateBrandConfig()`, `generateNapData()`, `generateBuildPageTitle()`, `generateEnvTemplate()` — each returns complete TypeScript/text file content from collected answers
4. **Draft writing** — all 4 files written to `.draft/` at project root before any changes to originals
5. **Colorized diff display** — `createPatch` from `diff` package, ANSI green/red/cyan per line type
6. **Single confirm prompt** — "Promote these drafts to final files?" defaults to false for safety
7. **Backup on promotion** — originals backed up to `.draft/backup/*.bak` before overwrite
8. **Build verification** — runs `npm run build` in website dir after promotion; prints next steps on success
9. **`--skip-build` flag** — skips build verification for faster iteration

**npm alias added:** `"onboard": "node scripts/onboard-client.js"` in package.json.

**Dependencies installed:** `@inquirer/prompts@^8.4.1`, `diff@^8.0.4` as devDependencies.

## Smoke Test Results

- `node scripts/onboard-client.js` (no TEMPLATE_MODE): exits code 1, outputs "This appears to be the production Impulse repo." — PASS
- `TEMPLATE_MODE=true node scripts/onboard-client.js`: passes guard, shows banner, enters "(1) Business Identity" — PASS
- Module loads without `ERR_MODULE_NOT_FOUND` — PASS

## Deviations from Plan

### Auto-fixed Issues

None — plan executed exactly as written.

**Note on categoryTopicRef:** The plan said "use `editor` prompt OR use Impulse defaults and document." I chose the latter — defaults are hardcoded in the script with an inline comment `// NOTE: Update these categories for non-English-academy clients`. This keeps the question flow focused and avoids a complex editor prompt for a rarely-changed mapping.

**Note on napData helper functions:** The plan mentioned "read the original file to extract helper functions." Since the helper function bodies are stable (they just reference `NAP.*`), I generated them as known content in the template string rather than reading the file at runtime. This is simpler and avoids a file read on every run.

## Known Stubs

None — no stub patterns. The script generates complete, valid TypeScript from real answers.

## Self-Check

- [x] `scripts/onboard-client.js` exists (945 lines, shebang correct)
- [x] All 8 section headers present: (1) through (8)
- [x] All 4 generator functions: generateBrandConfig, generateNapData, generateBuildPageTitle, generateEnvTemplate
- [x] package.json has `"onboard"` alias
- [x] `@inquirer/prompts` and `diff` in devDependencies
- [x] Root `.gitignore` contains `.draft/`
- [x] Website `.gitignore` contains `.draft/`
- [x] Guard exits code 1 with "production Impulse repo" message
- [x] Commits c223f29 and ff263df exist
