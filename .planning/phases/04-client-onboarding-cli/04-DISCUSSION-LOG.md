# Phase 4: Client Onboarding CLI - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-09
**Phase:** 04-client-onboarding-cli
**Areas discussed:** Question Flow Design, Draft/Promotion UX, TEMPLATE_MODE Guard, Build Verification
**Mode:** Auto (--auto flag — recommended defaults selected automatically)

---

## Question Flow Design

| Option | Description | Selected |
|--------|-------------|----------|
| Grouped by category | Questions organized with section headers matching TEMPLATE-SETUP.md groupings | ✓ |
| Flat sequential | All questions in one long sequence | |
| Wizard with navigation | Multi-step wizard with back/forward | |

**User's choice:** [auto] Grouped by category (recommended default)

| Option | Description | Selected |
|--------|-------------|----------|
| @inquirer/prompts | Modern ESM-first API, specified in ONBD-01 | ✓ |
| prompts (terkelg) | Lightweight alternative | |
| readline (built-in) | No dependencies but minimal UX | |

**User's choice:** [auto] @inquirer/prompts (recommended — specified in requirements)

| Option | Description | Selected |
|--------|-------------|----------|
| Show current Impulse values as defaults | Developer sees what to replace, can Enter to keep | ✓ |
| Empty defaults | Clean slate, must fill everything | |
| Placeholder text | Shows format hints but no real values | |

**User's choice:** [auto] Show current Impulse values as defaults (recommended)
**Notes:** Defaults serve dual purpose: document expected format AND allow quick testing

---

## Draft/Promotion UX

| Option | Description | Selected |
|--------|-------------|----------|
| .draft/ directory with diffs | Write to .draft/, show colorized diff, single confirm | ✓ |
| In-place with backup | Write directly, back up originals to .backup/ | |
| Side-by-side preview | Show old vs new in terminal columns | |

**User's choice:** [auto] .draft/ directory with diffs (recommended)

| Option | Description | Selected |
|--------|-------------|----------|
| Single Y/N after all diffs | One confirmation for all files | ✓ |
| Per-file confirmation | Confirm each file individually | |

**User's choice:** [auto] Single Y/N after all diffs (recommended — avoids fatigue)

---

## TEMPLATE_MODE Guard

| Option | Description | Selected |
|--------|-------------|----------|
| Env var + git remote fallback | Check TEMPLATE_MODE=true, then check git remote for "impulse" | ✓ |
| Env var only | Only check TEMPLATE_MODE env var | |
| File marker | Check for .template-mode file | |

**User's choice:** [auto] Env var + git remote fallback (recommended — explicit + heuristic backup)

---

## Build Verification

| Option | Description | Selected |
|--------|-------------|----------|
| Auto-run build, report results | Run npm run build after promotion, show pass/fail | ✓ |
| Manual build | Print "run npm run build" as next step | |
| Build + rollback on failure | Auto-rollback promoted files if build fails | |

**User's choice:** [auto] Auto-run build, report results (recommended — matches ONBD-06)
**Notes:** No rollback on failure — errors are the useful signal for the developer

---

## Claude's Discretion

- Exact question wording and help text
- Whether to add --skip-build flag
- Color scheme for diffs
- Input validation strategy (inline vs batch)
- Category ordering within flow

## Deferred Ideas

- ONBD-09: Firecrawl research agent for auto-populating answers (v2)
- ONBD-10: Web UI alternative for non-technical users (v2)
- Auto-updating CLAUDE.md, vercel.json, analytics IDs (future enhancement)
