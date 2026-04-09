# Phase 1: LeadForm Hardening - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-09
**Phase:** 01-leadform-hardening
**Areas discussed:** Error feedback UX, Honeypot design, Env var approach, Toast integration
**Mode:** Auto (--auto flag, all recommended defaults selected)

---

## Error Feedback UX

| Option | Description | Selected |
|--------|-------------|----------|
| Toast only | Sonner toast on error, no inline UI | |
| Inline only | Error message below submit button | |
| Both (Recommended) | Sonner toast + inline error with retry | ✓ |

**User's choice:** [auto] Both — Sonner toast + inline error state (recommended default)
**Notes:** Redundant feedback ensures visibility. Error messages in Peninsular Spanish with napData phone fallback.

---

## Honeypot Design

| Option | Description | Selected |
|--------|-------------|----------|
| display:none field | Simple hidden field | |
| Off-screen CSS (Recommended) | position:absolute left:-9999px with tabIndex=-1 | ✓ |
| CSS clip-path | Modern clipping approach | |

**User's choice:** [auto] Off-screen CSS with inline styles (recommended default)
**Notes:** Research confirmed display:none is detected by modern bots and causes iOS autofill issues. Field named "website" for plausibility.

---

## Env Var Approach

| Option | Description | Selected |
|--------|-------------|----------|
| VITE_ prefix | import.meta.env.VITE_WEBHOOK_URL | |
| astro:env schema (Recommended) | Declared in astro.config.mjs with build-time validation | ✓ |
| Hardcoded with config file | Move to a config.ts instead of env var | |

**User's choice:** [auto] astro:env schema (recommended default)
**Notes:** Build fails loudly if var missing. Auto-generates TypeScript types. Confirmed stable in Astro 5.0+.

---

## Toast Integration

| Option | Description | Selected |
|--------|-------------|----------|
| BaseLayout mount (Recommended) | <Toaster client:load /> in BaseLayout.astro | ✓ |
| Per-component mount | Mount Toaster inside LeadForm | |
| Custom toast | Build custom notification without library | |

**User's choice:** [auto] BaseLayout mount (recommended default)
**Notes:** Global mount point, single instance, reusable across all forms site-wide.

---

## Claude's Discretion

- Toast positioning (top-right vs bottom-right)
- Exact Spanish wording of error messages
- Brief delay before success redirect to show toast

## Deferred Ideas

None — all discussion stayed within phase scope.
