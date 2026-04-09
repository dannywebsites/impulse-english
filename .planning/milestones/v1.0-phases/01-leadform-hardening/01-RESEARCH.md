# Phase 1: LeadForm Hardening - Research

**Researched:** 2026-04-09
**Domain:** React form hardening, astro:env, Sonner toast, honeypot spam protection
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Use both Sonner toast AND inline error state. Toast fires on failure with human-readable Spanish message. Inline error paragraph below submit button with retry option.
- **D-02:** On success, keep redirect to `/gracias` but fire Sonner success toast briefly before redirect.
- **D-03:** Error messages in Peninsular Spanish. Use `NAP.phone` from napData.ts in fallback: "Ha ocurrido un error. Inténtalo de nuevo o llámanos al [phone]."
- **D-04:** Honeypot field named `website`. Inline style `position: 'absolute', left: '-9999px'` — NOT Tailwind (purge), NOT `display:none` (bots detect).
- **D-05:** Honeypot has `tabIndex={-1}` and `autoComplete="one-time-code"` to prevent iOS autofill.
- **D-06:** `aria-hidden="true"` on honeypot wrapper.
- **D-07:** If honeypot filled → fake success (redirect /gracias + GTM event) without hitting webhook.
- **D-08:** Use `astro:env` schema in `astro.config.mjs`, declare `PUBLIC_WEBHOOK_URL` with `context: 'client'`, `access: 'public'`. Build fails if missing.
- **D-09:** Create `.env.example` documenting all required env vars.
- **D-10:** `PUBLIC_` prefix is correct and intentional for the webhook URL — document in `.env.example`.
- **D-11:** Install `sonner` package in the main website project (not yet installed; seo-writer monorepo has v2.0.7).
- **D-12:** Mount `<Toaster />` in `BaseLayout.astro` as a React island with `client:load`.
- **D-13:** Use `toast.error()` and `toast.success()` directly in LeadForm.tsx.
- **D-14:** Add `if (!response.ok) throw new Error(...)` after fetch. Root cause of silent lead loss.
- **D-15:** Remove misleading comment "In production, this would send to the actual webhook."

### Claude's Discretion

- Toast positioning — use Sonner default positioning
- Exact error message wording beyond the D-03 pattern
- Whether to add a brief delay before redirect on success to show the toast

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FORM-01 | LeadForm webhook URL read from environment variable via astro:env, not hardcoded | astro:env schema confirmed working in Astro 5 — `envField.string({ context: 'client', access: 'public' })` |
| FORM-02 | LeadForm checks `response.ok` after fetch and throws on HTTP 4xx/5xx (fixes silent lead loss) | Current code confirmed NOT checking `response.ok` — fetch resolves on 4xx/5xx silently |
| FORM-03 | User sees visible error message with retry option when form submission fails | `error` state exists in component but has no UI — gap confirmed, needs inline error paragraph |
| FORM-04 | Honeypot field using off-screen CSS positioning (not display:none), tabIndex={-1}, autoComplete="one-time-code" | Off-screen pattern confirmed best practice; D-04/D-05 specify exact implementation |
| FORM-05 | Bot submissions (honeypot filled) return fake success without hitting webhook | Pre-submit guard in handleSubmit confirmed as correct approach |
| FORM-06 | Sonner toast library added for error/success notifications in LeadForm | Sonner v2.0.7 confirmed compatible with React 19; not yet installed in project |
</phase_requirements>

---

## Summary

Phase 1 hardens the existing `LeadForm.tsx` component across four independent concerns: moving the hardcoded webhook URL to an environment variable, fixing the silent failure bug where HTTP 4xx/5xx responses are treated as successes, adding honeypot spam protection, and mounting Sonner toast notifications.

All decisions were locked in CONTEXT.md by the user. Research confirms the technical approach for each decision is sound. The most critical finding is that Sonner v2.0.7 is the current release, supports React 19, and is not yet installed in the project. The `astro:env` system is stable in Astro 5 and uses a different import path than older VITE_ prefix approaches. The seo-system has a mirrored `LeadForm.tsx` that must be kept in sync but uses `react-router-dom` instead of `window.location.href` — changes need to be applied carefully.

**Primary recommendation:** Apply all four concerns as separate, sequential task waves so each change can be verified independently before combining. The fetch bug fix and honeypot are pure TypeScript changes; the env var and Sonner integrations touch config files and layout.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| sonner | 2.0.7 | Toast notification system | Default in shadcn/ui ecosystem; works with React 19; single API `toast.error()` / `toast.success()` |
| astro:env | built-in (Astro 5) | Type-safe env variable schema | Native Astro 5 feature; provides build-time validation and auto TypeScript types |
| lucide-react | ^0.460.0 (already installed) | Icon set | Already used in LeadForm for Send, CheckCircle, Loader2 — add AlertCircle for error state |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @astrojs/react | ^4.2.0 (already installed) | React island hydration | `client:load` directive for Toaster mount |
| react | ^19.0.0 (already installed) | UI framework | Already in project |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| sonner | react-hot-toast | Older API; sonner is the current standard in modern React projects |
| astro:env | VITE_ prefix manually | No build validation, no TypeScript types; astro:env is the Astro 5 canonical approach |
| Off-screen honeypot CSS | CAPTCHA / rate limiting | CAPTCHA adds friction; rate limiting requires serverless — both deferred to v2 |

**Installation:**
```bash
# Run inside March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/
npm install sonner
```

---

## Architecture Patterns

### Files Modified in This Phase

```
March-Impulse-Web-.../
├── components/
│   └── LeadForm.tsx              ← All form logic changes (honeypot, fetch fix, sonner calls, env var)
├── seo-system/
│   └── components/LeadForm.tsx   ← Mirror — apply same changes (uses useNavigate not window.location)
├── src/layouts/
│   └── BaseLayout.astro          ← Mount <Toaster /> as React island
├── astro.config.mjs              ← Add env.schema block with PUBLIC_WEBHOOK_URL
└── package.json                  ← Add sonner dependency

Root project:
└── .env.example                  ← New file documenting PUBLIC_WEBHOOK_URL
```

### Pattern 1: astro:env Schema Declaration

**What:** Declares type-safe env variable schema in `astro.config.mjs`. Astro validates presence at build time and generates TypeScript types automatically.

**When to use:** Any env variable that must exist for the build to succeed.

```typescript
// Source: https://docs.astro.build/en/guides/environment-variables/
// astro.config.mjs
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  env: {
    schema: {
      PUBLIC_WEBHOOK_URL: envField.string({
        context: "client",
        access: "public",
      }),
    }
  }
  // ...rest of existing config
});
```

**Consuming in LeadForm.tsx (React component):**
```typescript
// Source: https://docs.astro.build/en/guides/environment-variables/
import { PUBLIC_WEBHOOK_URL } from "astro:env/client";

// Use directly — no prop needed
const webhookUrl = PUBLIC_WEBHOOK_URL;
```

**Important:** The existing `webhookUrl` prop on `LeadFormProps` can be removed or kept as an optional override. Research recommendation: remove it to enforce single source of truth.

### Pattern 2: fetch response.ok Guard

**What:** Explicitly check `response.ok` after `await fetch()`. The Fetch API only throws on network failure, not on HTTP error status codes.

```typescript
// The bug — resolves silently on 4xx/5xx:
await fetch(webhookUrl, { method: 'POST', ... });
setStatus('success'); // WRONG — reached even when webhook returns 500

// The fix:
const response = await fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
});

if (!response.ok) {
  throw new Error(`Webhook error: ${response.status}`);
}
// Only reach here on 2xx
```

### Pattern 3: Honeypot Field

**What:** A hidden text input that real users never see or fill. Bots that scrape form fields and fill everything will populate it. The guard check happens before any fetch call.

```tsx
// In JSX — honeypot field (before or after real fields, before submit button)
<div
  aria-hidden="true"
  style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
>
  <input
    type="text"
    name="website"
    tabIndex={-1}
    autoComplete="one-time-code"
    value={honeypot}
    onChange={(e) => setHoneypot(e.target.value)}
  />
</div>

// In handleSubmit — check before fetch:
if (honeypot) {
  // Fake success — bot is caught, don't reveal detection
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'generate_lead', form_type: 'course_inquiry', ... });
  window.location.href = '/gracias';
  return;
}
```

**State:** Add `const [honeypot, setHoneypot] = useState('');` alongside existing state.

### Pattern 4: Sonner Toaster Mount in Astro

**What:** `<Toaster />` is a singleton that must be mounted once at the layout level. In Astro, React components require a client directive to hydrate.

```astro
---
// BaseLayout.astro — add import
import { Toaster } from 'sonner';
---

<!-- Inside <body>, after <main> or as a sibling island -->
<Toaster client:load />
```

**Calling toasts from LeadForm.tsx:**
```typescript
import { toast } from 'sonner';

// On success (before redirect):
toast.success('¡Solicitud enviada! Te contactamos en menos de 24 horas.');
setTimeout(() => { window.location.href = '/gracias'; }, 1500);

// On error (in catch block):
toast.error(`Ha ocurrido un error. Inténtalo de nuevo o llámanos al ${NAP.phone}.`);
```

### Pattern 5: Inline Error UI (alongside toast)

**What:** Per D-01, in addition to the toast, show an inline error message below the submit button. The existing `status === 'error'` state drives this.

```tsx
{/* After submit button in form JSX */}
{status === 'error' && (
  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
    <p className="text-sm text-red-700 flex items-center gap-2">
      <AlertCircle className="w-4 h-4 flex-shrink-0" />
      Ha ocurrido un error. Inténtalo de nuevo o llámanos al{' '}
      <a href={NAP.phoneTel} className="font-semibold underline">{NAP.phone}</a>.
    </p>
  </div>
)}
```

### Anti-Patterns to Avoid

- **`display: none` on honeypot:** Bots detect and skip `display:none` fields. Off-screen absolute positioning is required (D-04).
- **Tailwind classes on honeypot:** Tailwind purges unused classes at build time. Inline styles are required (D-04).
- **Checking honeypot AFTER fetch:** The honeypot guard must be the first check in `handleSubmit`, before `setStatus('loading')` and before any fetch call.
- **Mounting `<Toaster />` inside LeadForm.tsx:** Toaster must be at layout level — mounting it inside the form component causes multiple Toaster instances when the form renders on multiple pages.
- **Using `response.status` for success without checking `response.ok`:** `response.ok` is `true` for 200-299 only. Using `response.status === 200` exactly would miss 201, 204, etc.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Toast notifications | Custom toast component with portal, z-index, animations, auto-dismiss timers | `sonner` | Sonner handles stacking, accessibility, animations, auto-dismiss, and positioning correctly |
| Env var type safety | Manual `process.env.X || ''` with runtime checks | `astro:env` schema | Build-time validation, auto TypeScript types, clear error messages on missing vars |
| Bot detection | IP-based rate limiting, CAPTCHA integration, server-side validation | Honeypot field | Honeypot is zero-dependency, zero-UX-friction, and sufficient for low-traffic forms |

**Key insight:** The fetch/response.ok bug is the highest-value fix in this phase — it is a single line of code that closes the silent lead loss gap. Everything else is additive.

---

## Common Pitfalls

### Pitfall 1: Sonner Toaster / island timing race

**What goes wrong:** The `toast()` call in `LeadForm.tsx` fires before the `<Toaster client:load />` island has hydrated. The toast is silently dropped — no visible output.

**Why it happens:** `client:load` islands hydrate after the initial HTML paint. If `toast()` is called synchronously during hydration of a *different* island (LeadForm), Toaster may not be registered yet.

**How to avoid:** Mount `<Toaster />` early in `BaseLayout.astro` — before `<slot />`, not after it. Use `client:load` (not `client:idle` or `client:visible`) for the Toaster so it hydrates immediately. The LeadForm only fires toasts on user interaction (form submit), which is always after page load — this makes the race condition theoretical in practice, but placement still matters.

**Warning signs:** Toast function returns without any visible toast appearing.

### Pitfall 2: `astro:env` import in React component

**What goes wrong:** Trying to import from `astro:env/client` in LeadForm.tsx causes a build error or runtime undefined because the module resolution is Astro-specific.

**Why it happens:** `astro:env/client` is a virtual module injected by Astro's build pipeline. It works in `.astro` files and React components that are part of Astro's build graph.

**How to avoid:** Verify the import path is exactly `astro:env/client` (not `astro:env`, not `astro/env/client`). The variable name must match the schema key exactly: `PUBLIC_WEBHOOK_URL`.

**Warning signs:** TypeScript error "Cannot find module 'astro:env/client'" — this resolves after running `astro dev` or `astro sync` which generates the type declarations.

### Pitfall 3: seo-system LeadForm sync

**What goes wrong:** Main `components/LeadForm.tsx` is updated but `seo-system/components/LeadForm.tsx` is not. The seo-system has a different implementation (uses `useNavigate` from react-router-dom, different props interface) — changes must be adapted, not blindly copied.

**Why it happens:** The two files serve different runtime contexts (Astro island vs. React Router SPA).

**How to avoid:** Treat seo-system as a separate task within the same wave. Apply the same logical changes (honeypot, response.ok guard, error state UI, env var) but adapt for the react-router-dom navigation pattern. Sonner toast calls are identical.

**Warning signs:** Bot submissions or failed submissions behave differently in the seo-system preview environment vs the main site.

### Pitfall 4: Removing `webhookUrl` prop breaks callers

**What goes wrong:** The `webhookUrl` prop is removed from LeadFormProps, but existing call sites that pass the prop get a TypeScript error.

**Why it happens:** The prop was previously required (with a default). If callers pass it explicitly, removing it breaks compilation.

**How to avoid:** Grep for all `<LeadForm` usages and confirm none pass `webhookUrl` explicitly before removing the prop. If any do, remove the prop from the call site first.

**Warning signs:** `TS2322: Type '{ webhookUrl: string; }' is not assignable to type 'IntrinsicAttributes & LeadFormProps'`.

### Pitfall 5: Missing `PUBLIC_WEBHOOK_URL` in Vercel environment

**What goes wrong:** Build deploys fine locally but fails on Vercel because `PUBLIC_WEBHOOK_URL` is not set in the Vercel project environment variables.

**Why it happens:** `astro:env` validation runs at build time. Without the variable, Astro throws during `astro build`.

**How to avoid:** After implementing FORM-01, add `PUBLIC_WEBHOOK_URL` to Vercel dashboard (Settings → Environment Variables) before the next deploy. Document in `.env.example`.

**Warning signs:** Vercel build log shows "Missing environment variable PUBLIC_WEBHOOK_URL".

---

## Code Examples

### Complete handleSubmit with all four hardening changes

```typescript
// Source: synthesized from CONTEXT.md decisions + verified patterns
const [honeypot, setHoneypot] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // FORM-04/FORM-05: Honeypot guard — must be FIRST, before setStatus('loading')
  if (honeypot) {
    // Fake success — do not hit webhook
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'generate_lead',
      form_type: 'course_inquiry',
      course_name: formData.level || 'General',
      location_preference: 'Barrio del Pilar',
    });
    window.location.href = '/gracias';
    return;
  }

  setStatus('loading');

  try {
    // FORM-01: Webhook URL from astro:env (no hardcoded URL)
    const payload = {
      ...formData,
      source,
      timestamp: new Date().toISOString()
    };

    // FORM-02: Check response.ok — throws on 4xx/5xx
    const response = await fetch(PUBLIC_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    // GTM event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'generate_lead',
      form_type: 'course_inquiry',
      course_name: formData.level || 'General',
      location_preference: 'Barrio del Pilar',
    });

    // FORM-06: Success toast before redirect (D-02)
    toast.success('¡Solicitud enviada! Te contactamos en menos de 24 horas.');
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', level: '' });
    setPrivacyAccepted(false);

    setTimeout(() => { window.location.href = '/gracias'; }, 1500);

  } catch (error) {
    setStatus('error');
    // FORM-06: Error toast (D-03)
    toast.error(`Ha ocurrido un error. Inténtalo de nuevo o llámanos al ${NAP.phone}.`);
  }
};
```

### BaseLayout.astro Toaster mount

```astro
---
// Add to existing imports in BaseLayout.astro
import { Toaster } from 'sonner';
---

<!-- Place inside <body>, before <slot /> -->
<Toaster client:load />
<main id="main" ...>
  <slot />
</main>
```

### astro.config.mjs env schema addition

```javascript
// Source: https://docs.astro.build/en/guides/environment-variables/
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://impulse-english.es',
  output: 'static',
  trailingSlash: 'always',
  server: { port: 3000 },
  integrations: [
    react(),
    tailwind({ configFile: './tailwind.config.ts' }),
    sitemap(),
  ],
  env: {
    schema: {
      PUBLIC_WEBHOOK_URL: envField.string({
        context: 'client',
        access: 'public',
      }),
    }
  },
  build: { format: 'directory' },
  vite: {
    resolve: {
      alias: { '@': '.' }
    }
  }
});
```

### .env.example content

```bash
# PUBLIC_WEBHOOK_URL — CRM intake endpoint for LeadForm submissions
# This value is PUBLIC (visible in client bundle) — this is intentional.
# The webhook URL is not a secret; it is a CRM intake endpoint.
# Set this in Vercel dashboard: Settings → Environment Variables
PUBLIC_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_HOOK_ID/webhook-trigger/YOUR_TRIGGER_ID
```

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node / npm | Install sonner | ✓ | (project already runs) | — |
| sonner package | FORM-06 toast | ✗ (not installed) | — | No fallback — must install |
| astro:env module | FORM-01 | ✓ (built into Astro 5.7.10) | Astro 5.7.10 | — |
| PUBLIC_WEBHOOK_URL env var | FORM-01 runtime | ✗ (no .env file exists) | — | Must be added to .env and Vercel dashboard |
| lucide-react AlertCircle | FORM-03 inline error UI | ✓ (lucide-react installed, AlertCircle available) | ^0.460.0 | — |

**Missing dependencies with no fallback:**
- `sonner` package — install with `npm install sonner` in website directory
- `PUBLIC_WEBHOOK_URL` env var — must be created in `.env` file (not committed) and set in Vercel dashboard

**Missing dependencies with fallback:**
- None

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `VITE_` prefix for env vars in Astro | `astro:env` schema with `envField` | Astro 5.0 (Nov 2024) | Build-time validation, auto TypeScript types; VITE_ still works but is no longer idiomatic |
| Manual fetch result checking | Always check `response.ok` | — (fundamental Fetch API knowledge) | Any fetch to a webhook must check this |
| `display:none` honeypots | Off-screen absolute positioning | Industry standard since ~2018 | Bots check computed visibility; `display:none` is ineffective |

**Deprecated / outdated in this codebase:**
- Hardcoded webhook URL in component default prop — will be removed by FORM-01
- Misleading comment "In production, this would send to the actual webhook" — will be removed by D-15

---

## Open Questions

1. **Delay before redirect on success**
   - What we know: D-02 says "fire success toast briefly before redirect"; Claude's discretion covers exact delay
   - What's unclear: If 1500ms feels too long or too short for the toast to read
   - Recommendation: Use 1500ms. Sonner default auto-dismiss is 4000ms, so the toast will still be visible after the redirect resolves to the /gracias page (if /gracias also mounts Toaster — which it currently does not). Use 1500ms and accept that the redirect completes before the toast auto-dismisses.

2. **seo-system LeadForm scope**
   - What we know: The seo-system copy uses `useNavigate` from react-router-dom and has a different props interface (no `showPhone`, `showAge`, `showLevel`)
   - What's unclear: Whether `astro:env/client` import works in the seo-system React SPA context (Vite/React Router, not Astro)
   - Recommendation: For the seo-system copy, use `import.meta.env.PUBLIC_WEBHOOK_URL` instead of `astro:env/client` — the seo-system is a plain Vite app, not an Astro project. Verify by checking seo-system's vite.config or package.json.

---

## Sources

### Primary (HIGH confidence)
- [Astro Environment Variables Guide](https://docs.astro.build/en/guides/environment-variables/) — `envField` syntax, `astro:env/client` import, build validation behavior
- [Astro astro:env API Reference](https://docs.astro.build/en/reference/modules/astro-env/) — module reference
- LeadForm.tsx source (read directly) — confirmed current implementation, missing `response.ok` check, `error` state with no UI

### Secondary (MEDIUM confidence)
- [Sonner GitHub](https://github.com/emilkowalski/sonner) — v2.0.7 confirmed latest; `<Toaster />` and `toast()` API confirmed
- [Sonner Getting Started](https://sonner.emilkowal.ski/getting-started) — installation and mount pattern verified
- [Bryan Robinson — Type-safe environment variables in Astro 5.0](https://bryanlrobinson.com/blog/type-safe-environment-variables-in-astro-5-0/) — confirmed `envField` from `'astro/config'`

### Tertiary (LOW confidence)
- [Sonner GitHub Issue #427](https://github.com/emilkowalski/sonner/issues/427) — Toaster timing with Astro islands; LOW because issue from 2024, may be resolved in v2.0.7

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — versions verified against installed package.json and npm
- Architecture: HIGH — all file locations read directly from codebase; patterns from official docs
- Pitfalls: MEDIUM — honeypot CSS and response.ok are well-established; Sonner/Astro timing is based on one GitHub issue

**Research date:** 2026-04-09
**Valid until:** 2026-05-09 (Astro and Sonner APIs stable; env var approach is Astro 5 canonical)
