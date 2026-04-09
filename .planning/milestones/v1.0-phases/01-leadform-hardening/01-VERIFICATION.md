---
phase: 01-leadform-hardening
verified: 2026-04-09T00:00:00Z
status: gaps_found
score: 3/4 success criteria verified
gaps:
  - truth: "Sonner toast notifications fire on both successful and failed submissions"
    status: partial
    reason: "Main site (Astro) mounts Toaster in BaseLayout and toast calls are wired correctly. seo-system LeadForm.tsx calls toast.error() and toast.success() but seo-system/App.tsx and seo-system/index.tsx do not mount <Toaster> — calls fire into a void and produce no visible output."
    artifacts:
      - path: "March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/App.tsx"
        issue: "No <Toaster> mounted anywhere in the seo-system React app tree"
      - path: "March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/index.tsx"
        issue: "No <Toaster> in root render — only BrowserRouter + App"
    missing:
      - "Import Toaster from 'sonner' in seo-system/App.tsx"
      - "Mount <Toaster /> as a sibling to <main> (or as first child inside App's return) in seo-system/App.tsx"
human_verification:
  - test: "Submit main site form successfully"
    expected: "Toast notification '¡Solicitud enviada! Te contactamos en menos de 24 horas.' appears, then page redirects to /gracias after ~1500ms"
    why_human: "Cannot invoke a live form submission or observe toast rendering programmatically"
  - test: "Submit main site form with an invalid/unreachable webhook URL"
    expected: "Inline red error paragraph with AlertCircle icon appears below submit button AND toast.error fires with phone number. No silent failure."
    why_human: "Requires network condition manipulation to produce a 4xx/5xx response"
  - test: "Submit main site form with honeypot field filled (simulate bot)"
    expected: "Page redirects to /gracias without any network request to the webhook. No webhook hit."
    why_human: "Requires browser DevTools network tab to verify no webhook request is made"
  - test: "Submit seo-system form successfully (at localhost:5173 or built preview)"
    expected: "Toast success notification appears (requires Toaster gap to be fixed first)"
    why_human: "Cannot verify UI-rendered toasts programmatically; also blocked by gap"
---

# Phase 1: LeadForm Hardening Verification Report

**Phase Goal:** The lead form captures every submission reliably, protects against bots, and tells users when something goes wrong
**Verified:** 2026-04-09
**Status:** gaps_found — 3 of 4 success criteria verified; 1 partial (seo-system toasts not rendered)
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths (from ROADMAP.md Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Submitting the form with a filled honeypot field returns a fake success without reaching the webhook | VERIFIED | `LeadForm.tsx` line 43: `if (honeypot) { window.location.href = '/gracias'; return; }` runs before any fetch call. seo-system mirrors at line 37: `if (honeypot) { navigate('/gracias'); return; }`. Both guard precede `setStatus('loading')` and `fetch()`. |
| 2 | When the webhook returns a 4xx or 5xx error, the user sees a visible error message with a retry option | VERIFIED | `response.ok` check at line 72 throws on non-2xx. Status set to `'error'` triggers inline red error div (lines 230–240) with AlertCircle icon and phone link. Both main and seo-system forms have this. |
| 3 | The webhook URL does not appear anywhere in source code — read from environment variable via astro:env | VERIFIED | Main form imports `PUBLIC_WEBHOOK_URL` from `'astro:env/client'` (line 4). No hardcoded `leadconnectorhq.com` URL remains in `components/LeadForm.tsx`. `astro.config.mjs` declares the schema with `envField.string({ context: 'client', access: 'public' })`. seo-system uses `import.meta.env.PUBLIC_WEBHOOK_URL` inline (correct for Vite SPA). |
| 4 | Sonner toast notifications fire on both successful and failed submissions | PARTIAL | Main site: `toast.success()` (line 86) and `toast.error()` (line 97) call in `components/LeadForm.tsx`; `<Toaster client:load />` mounted in `BaseLayout.astro` line 248 before `<main>` — WIRED and functional. seo-system: `toast.success()` (line 64) and `toast.error()` (line 74) call in `seo-system/components/LeadForm.tsx` — UNWIRED because neither `seo-system/App.tsx` nor `seo-system/index.tsx` mounts `<Toaster>`. Toast calls fire into a void. |

**Score:** 3/4 success criteria fully verified. 1 partial.

---

### Required Artifacts

#### Plan 01 Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `March-Impulse-Web-.../astro.config.mjs` | astro:env schema with PUBLIC_WEBHOOK_URL | VERIFIED | Imports `envField` from `'astro/config'`. `env.schema.PUBLIC_WEBHOOK_URL` declared with `context: 'client', access: 'public'`. |
| `March-Impulse-Web-.../package.json` | sonner dependency | VERIFIED | `"sonner": "^2.0.7"` in dependencies. |
| `.env.example` | PUBLIC_WEBHOOK_URL documentation | VERIFIED | Exists at project root. Contains `PUBLIC_WEBHOOK_URL` with full explanatory comments. |

#### Plan 02 Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `March-Impulse-Web-.../components/LeadForm.tsx` | Hardened form — all four changes | VERIFIED | All imports present, honeypot field wired with inline style `position: absolute`, response.ok check, toast calls, inline error UI. No hardcoded webhook URL. |
| `March-Impulse-Web-.../src/layouts/BaseLayout.astro` | Global Toaster mount | VERIFIED | `import { Toaster } from 'sonner'` in frontmatter (line 5). `<Toaster client:load />` at line 248, immediately before `<main id="main">`. |

#### Plan 03 Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `March-Impulse-Web-.../seo-system/components/LeadForm.tsx` | Hardened seo-system form | VERIFIED | `import.meta.env.PUBLIC_WEBHOOK_URL` used (line 53). `response.ok` check (line 59). Honeypot with inline absolute positioning (lines 99–111). `toast.error()` and `toast.success()` calls (lines 64, 74). AlertCircle inline error UI (lines 199–209). Simulated delay removed. `navigate('/gracias')` preserved. |
| `March-Impulse-Web-.../seo-system/package.json` | sonner dependency | VERIFIED | `"sonner": "^2.0.7"` in dependencies — seo-system has its own package.json and sonner was installed separately. |

---

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `components/LeadForm.tsx` | `astro:env/client` | `import { PUBLIC_WEBHOOK_URL } from 'astro:env/client'` | WIRED | Line 4 confirmed |
| `components/LeadForm.tsx` | sonner | `import { toast } from 'sonner'` + `toast.error`/`toast.success` calls | WIRED | Lines 3, 86, 97 confirmed |
| `src/layouts/BaseLayout.astro` | sonner Toaster | `<Toaster client:load />` before `<main>` | WIRED | Lines 5 (import) and 248 (mount) confirmed |
| `seo-system/components/LeadForm.tsx` | `import.meta.env.PUBLIC_WEBHOOK_URL` | Inline in fetch call | WIRED | Line 53 confirmed |
| `seo-system/components/LeadForm.tsx` | sonner toast | `import { toast } from 'sonner'` + calls | PARTIAL | Import and calls exist (lines 4, 64, 74) but no `<Toaster>` mounted in seo-system app tree — toasts are invoked but not rendered |
| `seo-system/App.tsx` | sonner Toaster | `<Toaster />` mounted in app root | NOT WIRED | Neither App.tsx nor index.tsx mounts Toaster |

---

### Data-Flow Trace (Level 4)

Not applicable. This phase contains no data-rendering components — it hardens a form submission flow, not a data display component. The relevant data flow is: user input → fetch → webhook response → UI state (error/success). This is verified through the key link checks above.

---

### Behavioral Spot-Checks

Step 7b: SKIPPED for main site — requires running Astro dev server with a live PUBLIC_WEBHOOK_URL env var, which is not available in this environment.

Static checks run in lieu of live execution:

| Behavior | Check | Result | Status |
|----------|-------|--------|--------|
| No hardcoded webhook URL in main LeadForm | `grep "leadconnectorhq" components/LeadForm.tsx` | 0 matches | PASS |
| No hardcoded webhook URL in seo-system LeadForm | `grep "leadconnectorhq\|n8n.example" seo-system/components/LeadForm.tsx` | 0 matches | PASS |
| Simulated delay removed from seo-system | `grep "setTimeout.*resolve\|Simulate" seo-system/components/LeadForm.tsx` | 0 matches | PASS |
| Honeypot uses inline style, not display:none | `grep "display.*none" components/LeadForm.tsx seo-system/components/LeadForm.tsx` | 0 matches | PASS |
| Honeypot guard fires before fetch | Manual read — `if (honeypot)` block precedes `setStatus('loading')` and `fetch()` | Confirmed | PASS |
| response.ok check present in both forms | Pattern at line 72 (main) and line 59 (seo-system) | Confirmed | PASS |
| seo-system Toaster mounted | `grep -r "Toaster" seo-system/App.tsx seo-system/index.tsx` | 0 matches | FAIL |

---

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|----------|
| FORM-01 | 01-01, 01-02 | Webhook URL read from env var, not hardcoded | SATISFIED | `astro:env/client` import in main LeadForm; `import.meta.env.PUBLIC_WEBHOOK_URL` in seo-system form; `envField` schema in astro.config.mjs |
| FORM-02 | 01-02, 01-03 | response.ok check after fetch, throws on 4xx/5xx | SATISFIED | `if (!response.ok) { throw new Error(...) }` in both LeadForm implementations |
| FORM-03 | 01-02, 01-03 | User sees visible error message with retry option on failure | SATISFIED | Inline red div with AlertCircle and phone link renders when `status === 'error'` in both forms |
| FORM-04 | 01-02, 01-03 | Honeypot field using off-screen CSS positioning (not display:none), tabIndex=-1, autoComplete=one-time-code | SATISFIED | Honeypot field present with `style={{ position: 'absolute', left: '-9999px' }}`, `tabIndex={-1}`, `autoComplete="one-time-code"`, wrapped in `aria-hidden="true"` div — in both forms |
| FORM-05 | 01-02, 01-03 | Bot submissions return fake success without hitting webhook | SATISFIED | Honeypot guard returns early before any fetch call in both forms |
| FORM-06 | 01-01, 01-02, 01-03 | Sonner toast library added; toast notifications on success and error | PARTIALLY SATISFIED | Sonner installed in both package.json files. Main site toast calls are fully functional (Toaster mounted in BaseLayout). seo-system toast calls invoke sonner but no `<Toaster>` is mounted in the seo-system app tree — notifications will not render |

---

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `seo-system/App.tsx` | — | `<Toaster>` not mounted despite toast calls in child component | Warning | seo-system form error/success toast notifications produce no visible output. Does not break form submission — errors still appear via the inline AlertCircle UI. Degrades UX in seo-system context only. |

No TODO/FIXME stubs, no placeholder returns, no hardcoded empty data arrays, no simulated delays — clean across all modified files.

---

### Human Verification Required

#### 1. Main Form — Successful Submission Toast

**Test:** Submit the main site contact form with valid data and a working webhook URL in `.env`
**Expected:** Sonner toast appears with "¡Solicitud enviada! Te contactamos en menos de 24 horas." then page navigates to /gracias after 1.5 seconds
**Why human:** Cannot invoke live form submission or observe toast rendering programmatically

#### 2. Main Form — Error State

**Test:** Submit the form while the webhook is unreachable (disconnect network, or set PUBLIC_WEBHOOK_URL to an invalid URL)
**Expected:** Inline red error div with AlertCircle appears below the submit button, AND a Sonner toast.error fires with the phone number. No silent failure — status does not stay "loading".
**Why human:** Requires controlled network failure to produce a 4xx/5xx response

#### 3. Main Form — Honeypot Bot Simulation

**Test:** Open DevTools console, set the hidden `website` input value to "bot" via JavaScript, then submit the form
**Expected:** Page navigates to /gracias immediately. Network tab shows zero requests to the webhook URL.
**Why human:** Requires browser DevTools inspection to confirm no network request fires

#### 4. seo-system Form — Toast Visibility (after gap fix)

**Test:** After mounting Toaster in seo-system/App.tsx, submit the seo-system form
**Expected:** Toast notification appears on success and error — same behavior as main site form
**Why human:** Requires running the Vite dev server; cannot verify rendered UI programmatically

---

### Gaps Summary

One gap found blocking full goal achievement for the seo-system context:

**seo-system Toaster not mounted.** Plan 03 correctly added `toast.success()` and `toast.error()` calls to `seo-system/components/LeadForm.tsx` and installed sonner in the seo-system package.json. However, the plan's `files_modified` list did not include `seo-system/App.tsx`. Without a `<Toaster>` component in the React render tree, all toast calls silently do nothing. The fix is two lines: import Toaster in App.tsx and mount it alongside the `<main>` element.

**Impact scoping:** This gap only affects the seo-system preview tool (localhost Vite SPA used during content creation). The production Astro site (main `components/LeadForm.tsx` + `BaseLayout.astro`) is fully functional. The seo-system form still shows the inline AlertCircle error UI on failure — only the toast layer is missing. Severity: warning, not blocker for production.

---

_Verified: 2026-04-09_
_Verifier: Claude (gsd-verifier)_
