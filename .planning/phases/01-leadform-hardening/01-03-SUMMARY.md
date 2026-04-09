---
phase: 01-leadform-hardening
plan: 03
subsystem: seo-system
tags: [leadform, honeypot, toast, error-handling, bot-protection, seo-system, vite-spa]
dependency_graph:
  requires: [01-01]
  provides: [seo-system-leadform-hardened]
  affects: []
tech_stack:
  added: [sonner@^2.0.7 (seo-system package)]
  patterns: [import.meta.env Vite env access, honeypot inline CSS, toast feedback, react-router navigate]
key_files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/LeadForm.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/package.json
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/package-lock.json
decisions:
  - seo-system uses import.meta.env.PUBLIC_WEBHOOK_URL (not astro:env/client) because seo-system is a plain Vite React SPA — astro:env virtual module does not exist in this context
  - navigate('/gracias') preserved via useNavigate from react-router-dom — window.location.href would break React Router SPA state
  - sonner installed separately in seo-system/package.json because seo-system has its own package.json with independent dependency tree
  - NAP phone references adapted to flat napData structure (NAP.phone and NAP.phoneTel) — plan referenced NAP.contact.phone.display which does not exist in the actual napData.ts shape
metrics:
  duration: 120s
  completed_date: "2026-04-09"
  tasks_completed: 1
  files_changed: 3
requirements_satisfied: [FORM-02, FORM-03, FORM-04, FORM-05, FORM-06]
---

# Phase 01 Plan 03: Harden seo-system LeadForm (Vite SPA Mirror) Summary

**One-liner:** Applied all four hardening changes to seo-system/components/LeadForm.tsx — replaced simulated fetch with real webhook call using import.meta.env.PUBLIC_WEBHOOK_URL, added honeypot bot guard, added sonner toast feedback, and added inline AlertCircle error UI — adapted for the Vite/React Router SPA context.

## What Was Built

The seo-system has its own LeadForm.tsx that mirrors the main site form but runs in a different runtime (plain Vite React SPA, not Astro). This plan applied the same four hardening changes from Plan 02 with two key adaptations:

1. **Real fetch call** — Replaced the simulated `setTimeout(resolve, 1000)` and commented-out fetch stub with a real `fetch(import.meta.env.PUBLIC_WEBHOOK_URL, ...)` call. Uses Vite's `import.meta.env` access pattern instead of the `astro:env/client` virtual module (which only exists in Astro builds).

2. **Response.ok error checking** — Added `if (!response.ok) throw new Error(...)` to detect 4xx/5xx webhook failures that previously would have been silently swallowed.

3. **Honeypot bot guard** — Added `const [honeypot, setHoneypot] = useState('')` state + off-screen hidden input field (inline CSS: `position: absolute; left: -9999px`) with `tabIndex={-1}` and `autoComplete="one-time-code"`. The honeypot check runs as the FIRST action in `handleSubmit`, before `setStatus('loading')`, and silently redirects bots to `/gracias`.

4. **Toast feedback** — Installed sonner in seo-system's own package.json and added `toast.success()` on successful submission and `toast.error()` with the business phone number on failure.

5. **Inline error UI** — Added `AlertCircle` error block below the submit button that renders when `status === 'error'`, providing a persistent fallback in case the toast is missed.

6. **sonner installed in seo-system** — The seo-system has its own `package.json` independent of the main Astro project. Sonner was not listed there, so `npm install sonner` was run inside the seo-system directory.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Harden seo-system LeadForm.tsx with Vite-adapted changes | 7ad1209 | seo-system/components/LeadForm.tsx, seo-system/package.json, seo-system/package-lock.json |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] NAP phone reference adapted to actual napData.ts shape**
- **Found during:** Task 1 implementation
- **Issue:** The plan specified `NAP.contact.phone.display` and `NAP.contact.phone.tel` but napData.ts has a flat structure — the actual properties are `NAP.phone` (display string) and `NAP.phoneTel` (tel: link string). Using the plan's paths would have caused a TypeScript type error and runtime `undefined`.
- **Fix:** Used `NAP.phone` for display and `NAP.phoneTel` for the href in both the toast message and the inline error UI anchor.
- **Files modified:** seo-system/components/LeadForm.tsx
- **Commit:** 7ad1209

## Known Stubs

None — the real fetch call is wired to `import.meta.env.PUBLIC_WEBHOOK_URL`. The URL must be set in the seo-system's `.env` file or Vite build config for the form to submit successfully in production. The env var name is consistent with the main site's PUBLIC_WEBHOOK_URL.

## Self-Check: PASSED
