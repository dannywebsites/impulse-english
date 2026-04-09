---
phase: 01-leadform-hardening
plan: 02
subsystem: lead-capture
tags: [leadform, honeypot, toast, sonner, astro-env, error-handling, spam-protection]
dependency_graph:
  requires: [astro-env-schema, sonner-package]
  provides: [hardened-leadform, global-toaster]
  affects: [01-03]
tech_stack:
  added: []
  patterns: [astro:env/client import, sonner toast calls, honeypot with inline style, response.ok error boundary]
key_files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/LeadForm.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro
decisions:
  - NAP.phone and NAP.phoneTel used directly (not NAP.contact.phone.display/tel) — napData.ts uses flat structure, not nested contact object as suggested in plan interfaces section
  - Honeypot uses inline style={{ position absolute }} not Tailwind classes — Tailwind purges unused classes at build, inline style is required per D-04
  - Toaster mounted with client:load (not client:idle) — ensures hydration before user can trigger a toast
metrics:
  duration: 8m
  completed_date: "2026-04-09"
  tasks_completed: 2
  files_changed: 2
requirements_satisfied: [FORM-01, FORM-02, FORM-03, FORM-04, FORM-05, FORM-06]
---

# Phase 01 Plan 02: Harden LeadForm — Error Feedback, Honeypot, Toasts Summary

**One-liner:** Replaced hardcoded CRM webhook URL with PUBLIC_WEBHOOK_URL from astro:env/client, added response.ok error boundary, honeypot bot protection with inline-style hiding, Sonner toast.success/error calls, AlertCircle inline error UI, and global Toaster mount in BaseLayout.astro.

## What Was Built

This plan applied all four hardening changes to `components/LeadForm.tsx` and wired the global toast notification system into `BaseLayout.astro`.

**Task 1 — LeadForm.tsx (all four changes):**

1. **FORM-01 — Env var for webhook URL:** Removed the hardcoded `leadconnectorhq.com` URL and the `webhookUrl` prop from both the interface and destructuring. The component now imports `PUBLIC_WEBHOOK_URL` directly from `'astro:env/client'`. No caller passes `webhookUrl` explicitly so no call sites needed updating.

2. **FORM-02 — response.ok error boundary:** Added `if (!response.ok) { throw new Error(...) }` immediately after the fetch call. The `catch` block now correctly handles both network errors and 4xx/5xx responses, closing the silent lead loss bug where `setStatus('success')` was reached even on server errors.

3. **FORM-04 / FORM-05 — Honeypot spam protection:** Added `const [honeypot, setHoneypot] = useState('')` state variable and a visually hidden JSX field as the first child of `<form>`. The field uses `style={{ position: 'absolute', left: '-9999px' }}` (inline style, not Tailwind — Tailwind purges unused classes at build). The guard check runs before `setStatus('loading')` and before the fetch call. Bot submissions get a fake success redirect to `/gracias` without hitting the webhook.

4. **FORM-06 — Toast notifications:** `toast.success()` fires on successful submission before the 1500ms redirect to `/gracias`. `toast.error()` fires on any failure with a Spanish message including the phone number from `NAP.phone`. Added `AlertCircle` from lucide-react and an inline red error paragraph that renders when `status === 'error'`, giving users a persistent visual fallback if they miss the toast.

**Task 2 — BaseLayout.astro (global Toaster mount):**

Added `import { Toaster } from 'sonner'` in the frontmatter and `<Toaster client:load />` immediately before `<main id="main"`. Using `client:load` ensures Toaster hydrates immediately on page load, before any form submission that could trigger a toast notification.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Harden LeadForm.tsx — all four changes | f91f9cf | components/LeadForm.tsx |
| 2 | Mount Toaster in BaseLayout.astro | 1e4b561 | src/layouts/BaseLayout.astro |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] NAP field path mismatch in plan interfaces**
- **Found during:** Task 1 — reading napData.ts before writing
- **Issue:** The plan's interfaces section documented `NAP.contact.phone.display` and `NAP.contact.phone.tel`, but `utils/napData.ts` uses a flat structure: `NAP.phone` ("+34 604 910 611") and `NAP.phoneTel` ("tel:+34604910611"). No nested `contact` object exists.
- **Fix:** Used `NAP.phone` and `NAP.phoneTel` in the toast error message and inline error UI. Both contain the correct values matching the plan's intent.
- **Files modified:** components/LeadForm.tsx (NAP import + field references)
- **Commit:** f91f9cf

## Known Stubs

None — all data paths are wired to real sources. NAP phone data comes from napData.ts, webhook URL comes from astro:env/client at build time, toasts render from sonner which is now globally mounted.

## Self-Check: PASSED
