# Phase 1: LeadForm Hardening - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Harden the existing LeadForm component to: (1) move the webhook URL to an environment variable, (2) check response.ok and surface errors to users, (3) add honeypot spam protection, (4) add Sonner toast notifications. All changes are scoped to LeadForm.tsx, astro.config.mjs, BaseLayout.astro, and package.json. No new pages, no new routes, no backend.

</domain>

<decisions>
## Implementation Decisions

### Error Feedback UX
- **D-01:** Use both Sonner toast AND inline error state in the form. Toast fires on submission failure with a human-readable message in Spanish. The form also shows an inline error paragraph below the submit button with a retry option.
- **D-02:** On success, keep the existing redirect to `/gracias` but fire a Sonner success toast briefly before redirect (gives visual confirmation).
- **D-03:** Error messages must be in Peninsular Spanish (brand voice enforcer applies). Use napData.ts phone number in the error fallback: "Ha ocurrido un error. Inténtalo de nuevo o llámanos al [phone]."

### Honeypot Design
- **D-04:** Add a hidden field named `website` (plausible name bots fill). Use inline `style={{ position: 'absolute', left: '-9999px' }}` — NOT Tailwind classes (purge would strip them) and NOT `display: none` (bots detect this).
- **D-05:** Set `tabIndex={-1}` and `autoComplete="one-time-code"` on the honeypot to prevent autofill on iOS/mobile.
- **D-06:** Add `aria-hidden="true"` to the honeypot wrapper for accessibility.
- **D-07:** If honeypot is filled, return fake success (redirect to /gracias, fire GTM event) without hitting the webhook. Bots should not know they were caught.

### Env Var Approach
- **D-08:** Use `astro:env` schema in `astro.config.mjs` to declare `PUBLIC_WEBHOOK_URL` with `context: 'client'` and `access: 'public'`. This provides build-time validation (build fails if missing) and auto-generated TypeScript types.
- **D-09:** Create `.env.example` documenting all required env vars for template users.
- **D-10:** The webhook URL is a CRM intake endpoint, not a secret. The `PUBLIC_` prefix is correct and intentional — document this explicitly in .env.example.

### Toast Integration
- **D-11:** Install `sonner` package in the main website project (already in seo-writer monorepo at v2.0.7).
- **D-12:** Mount `<Toaster />` in `BaseLayout.astro` as a React island with `client:load`. This provides a global, single mount point for all toasts across the site.
- **D-13:** Use Sonner's `toast.error()` and `toast.success()` functions directly in LeadForm.tsx.

### Fetch Error Fix
- **D-14:** Add `if (!response.ok) throw new Error(...)` after the fetch call. This is the root cause of silent lead loss — fetch resolves on HTTP 4xx/5xx, so the current code reaches `setStatus('success')` even when the webhook fails.
- **D-15:** Remove the misleading comment "In production, this would send to the actual webhook" — the form already sends to the webhook.

### Claude's Discretion
- Toast positioning (top-right, bottom-right, etc.) — use default Sonner positioning
- Exact error message wording beyond the pattern in D-03
- Whether to add a brief delay before redirect on success to show the toast

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### LeadForm Component
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/LeadForm.tsx` — Current form implementation (192 lines), all changes happen here
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/LeadForm.tsx` — Mirrored copy in seo-system (must stay in sync)

### Layout & Config
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro` — Where Toaster component will be mounted
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/astro.config.mjs` — Where astro:env schema will be declared

### Business Data
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts` — Phone number for error fallback message
- `brand-config.ts` — Brand voice rules for error message language

### Research
- `.planning/research/STACK.md` — astro:env approach confirmed
- `.planning/research/PITFALLS.md` — fetch/response.ok bug documented, honeypot CSS patterns

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `LeadForm.tsx` (192 lines) — Well-structured React component with existing status state machine (`idle | loading | success | error`). The `error` state exists but has no UI — just `setStatus('error')` with no visible feedback.
- `napData.ts` — Provides `NAP.contact.phone.display` for the error fallback message
- `lucide-react` icons already imported (Send, CheckCircle, Loader2) — can add AlertCircle for error state

### Established Patterns
- React islands in Astro with `client:load` / `client:visible` / `client:idle` directives
- Inline Tailwind classes for all styling
- `window.dataLayer.push()` for GTM event tracking in form

### Integration Points
- BaseLayout.astro `<slot />` — Toaster mounts here as a sibling React island
- astro.config.mjs `env.schema` — New section for PUBLIC_WEBHOOK_URL declaration
- package.json — New `sonner` dependency

</code_context>

<specifics>
## Specific Ideas

- User confirmed: honeypot approach (not CAPTCHA, not rate limiting)
- User confirmed: move webhook URL to env var (not backend proxy)
- Research confirmed: astro:env is correct for Astro 5 (not VITE_ prefix)
- Research confirmed: off-screen CSS positioning for honeypot (not display:none)

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-leadform-hardening*
*Context gathered: 2026-04-09*
