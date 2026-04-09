# Technology Stack — Milestone Improvements

**Project:** Impulse English Academy website template
**Researched:** 2026-04-09
**Scope:** Five specific improvements to existing Astro 5 + React 19 + Tailwind 3 site
**Overall confidence:** HIGH (all recommendations verified against official Astro 5 docs and npm)

---

## 1. Image Migration: S3 to Local with Astro Optimization

### Problem

10+ component files reference `https://impulseenglish.s3.us-east-1.amazonaws.com/...`. Images are uncompressed JPEGs served from S3. `assets/images/` at project root already contains local copies (confirmed). No `src/assets/` directory exists yet.

### What to Use

**Astro's built-in `<Image />` and `<Picture />` components from `astro:assets`**

**Confidence: HIGH** — Official Astro docs, stable since Astro 3. Sharp 0.34.5 already installed in the project's package.json as a dependency.

**No new packages needed.** Sharp is already present.

### Key Facts (verified against official docs)

- Images must live in `src/` (not `assets/` at project root) for Astro to optimize them at build time. Local images in `public/` are copied verbatim — no optimization.
- Create `src/assets/images/` as the canonical location. Migrate images from root `assets/images/` there.
- Import images as ES modules: `import heroImg from '../assets/images/hero.jpg'`
- The `<Image />` component converts to WebP by default and prevents layout shift by inferring dimensions.
- The `<Picture />` component generates a `<picture>` tag with multiple format sources (avif, webp, original fallback). Use this for hero images.

### Props That Matter

```tsx
// <Image /> — single format, srcset via widths or densities
<Image
  src={heroImg}
  alt="descripción en español"
  widths={[400, 800, 1200]}       // generates srcset
  sizes="(max-width: 768px) 100vw, 50vw"
  quality="high"                  // or 0-100
  loading="lazy"                  // default; use "eager" for LCP image
  layout="constrained"            // auto-handles sizing styles
/>

// <Picture /> — multiple formats, use for hero/above-fold images
<Picture
  src={heroImg}
  alt="descripción en español"
  formats={['avif', 'webp']}      // most modern first; original as fallback
  widths={[400, 800, 1200]}
  sizes="100vw"
  loading="eager"                 // LCP images should be eager
/>
```

### astro.config.mjs Change Needed

No change required. Sharp is already the default image service. Optionally add global responsive image defaults:

```js
image: {
  experimentalLayout: 'constrained',  // global default layout — removes need to set per-image
},
```

This is marked experimental in Astro 5.x but functional. Skip it and set `layout` per component for safety.

### Migration Pattern

React components currently use `<img src="https://...s3...">`. Since Astro image optimization only works in `.astro` files natively, the recommended pattern for React components is:

1. In the `.astro` page/layout that renders the React component, use `getImage()` to pre-process the image at build time.
2. Pass the optimized `src` string as a prop to the React component.
3. The React component renders a plain `<img>` with the pre-optimized src.

Alternatively, for React components that own their own images, import the image and use it directly — Vite handles the import, but you lose Astro's srcset generation. Use the `.astro` wrapper pattern for images that need responsive srcset.

**Do NOT use:** The deprecated `@astrojs/image` integration (removed in Astro 3+). Do not put images in `public/` if they need optimization.

---

## 2. Webhook URL to Environment Variable

### Problem

`LeadForm.tsx` line 20 has a hardcoded default: `webhookUrl = "https://services.leadconnectorhq.com/hooks/OAJYwGK3D8G66kUMQsht/..."`. This is a security exposure and blocks template portability.

### What to Use

**Astro's `astro:env` module (stable in Astro 5.0)**

**Confidence: HIGH** — Verified against official Astro 5 docs. This is the preferred approach over the older `import.meta.env.PUBLIC_*` pattern because it provides type safety and build-time validation.

**No new packages needed.**

### Implementation

**Step 1 — Define schema in `astro.config.mjs`:**

```js
import { envField } from 'astro/config';

export default defineConfig({
  // ... existing config ...
  env: {
    schema: {
      PUBLIC_WEBHOOK_URL: envField.string({
        context: 'client',
        access: 'public',
      }),
    },
  },
});
```

`context: 'client'` = accessible in React components (client-side JS). `access: 'public'` = value is embedded in the built bundle. The webhook URL is not a secret — it's a CRM endpoint — so `public` is correct.

**Step 2 — Create `.env` (local) and set in Vercel dashboard:**

```
# .env (gitignored)
PUBLIC_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/OAJYwGK3D8G66kUMQsht/...
```

In Vercel: Project Settings → Environment Variables → add `PUBLIC_WEBHOOK_URL`.

**Step 3 — Import in `LeadForm.tsx`:**

```tsx
import { PUBLIC_WEBHOOK_URL } from 'astro:env/client';

// Remove webhookUrl from props entirely, or keep as optional override:
export default function LeadForm({
  webhookUrl = PUBLIC_WEBHOOK_URL,
  // ...
```

**Why `astro:env` over `import.meta.env.PUBLIC_WEBHOOK_URL`:**
- `astro:env` validates the variable exists at build time — missing env var = build failure, not silent undefined at runtime
- TypeScript types are auto-generated — no manual type assertions needed
- Enforces context: using a server-only var in client code = TypeScript error

**What NOT to use:** Do not create a backend proxy just to hide this URL. The webhook endpoint is not sensitive (it's a CRM intake URL, not an API key). The env var approach achieves portability without added infrastructure.

---

## 3. Honeypot Spam Protection

### Problem

No spam protection on `LeadForm.tsx`. Bots can submit unlimited fake leads to the CRM webhook.

### What to Use

**Custom honeypot field — no library needed**

**Confidence: HIGH** — Standard pattern, verified across multiple sources. No external dependency required.

### Implementation Pattern

Add a hidden field that legitimate users never see or fill. Bots fill all visible fields in the HTML.

```tsx
// In LeadForm state
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  level: '',
  _honey: '',  // honeypot field
});

// In JSX — must be visually hidden but NOT display:none (some bots detect that)
<div
  aria-hidden="true"
  style={{
    position: 'absolute',
    left: '-9999px',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    opacity: 0,
    tabIndex: -1,
  }}
>
  <label htmlFor="website">No rellenar</label>
  <input
    type="text"
    id="website"
    name="website"
    value={formData._honey}
    onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
    autoComplete="off"
    tabIndex={-1}
  />
</div>

// In handleSubmit — bail silently if honeypot is filled
if (formData._honey) {
  setStatus('success');  // fake success so bots don't retry
  return;
}
```

**Field naming:** Use a generic name like `website` or `company` — names that sound like real fields to bots, not `honeypot` which bots can detect.

**Do NOT use:** `display: none` CSS — newer bots detect and skip these fields. Do NOT add `required` to the honeypot field. Do NOT send the honeypot value to the webhook.

**Library option if you want timing analysis too:** `react-spam-shield` (npm, no API key, client-only) adds honeypot + submission timing checks. But for this project, a hand-rolled honeypot is simpler and has zero bundle overhead.

---

## 4. Form Submission Error Feedback

### Problem

`LeadForm.tsx` `catch (error)` block sets `status === 'error'` but renders nothing to the user — silent failure. The `fetch()` call also doesn't check `response.ok`, so HTTP 4xx/5xx errors from the webhook are treated as successes.

### What to Use

**Inline error state rendering + `sonner` for toast notifications**

**Confidence: HIGH for inline state (native React); MEDIUM for sonner (already used in seo-writer, not yet in main website).**

Sonner is already in the monorepo's seo-writer dependencies (v2.0.7). Add it to the main website too for consistency. It has 7M+ weekly npm downloads and is the shadcn/ui default toast library.

**Package to add to main website:**

```bash
npm install sonner
```

Current latest: **2.x** (2.0.7 in seo-writer, which is current).

### Implementation Pattern

Two-layer approach — inline error message (always visible) + toast for transient feedback:

**Fix 1 — Check `response.ok`:**

```tsx
const response = await fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});

if (!response.ok) {
  throw new Error(`Webhook error: ${response.status}`);
}
```

**Fix 2 — Render error state in JSX:**

```tsx
{status === 'error' && (
  <p className="text-sm text-red-600 mt-2 text-center">
    Algo ha salido mal. Por favor, inténtalo de nuevo o llámanos al{' '}
    <a href="tel:+34XXXXXXXXX" className="underline font-semibold">
      +34 XXX XXX XXX
    </a>
    .
  </p>
)}
```

This inline message is visible even without JS toast support and is immediately adjacent to the submit button.

**Fix 3 (optional) — Toast notification via Sonner:**

```tsx
// In root layout (BaseLayout.astro or a React wrapper)
import { Toaster } from 'sonner';
<Toaster position="bottom-center" richColors />

// In LeadForm handleSubmit
import { toast } from 'sonner';

// On error:
toast.error('No se ha podido enviar el formulario. Inténtalo de nuevo.');

// On success (before redirect):
toast.success('¡Solicitud enviada!');
```

**Why Sonner over react-hot-toast:**
- Already in the monorepo (seo-writer), so no net-new dependency category
- React 19 compatible
- Smaller bundle, opinionated defaults, no boilerplate Toaster config
- shadcn/ui standard — future-proof if the design system evolves

**Do NOT use:** Alert dialogs or browser `alert()` for form errors. Do not redirect to `/gracias` on error — only redirect on confirmed success.

---

## 5. Client Onboarding System

### Problem

New client setup requires manually editing 10+ files. The system needs: gather client info → answer questions → auto-populate `brand-config.ts`, `napData.ts`, and page content → produce a deployable website.

### What to Use

**Custom Node.js CLI script using `@inquirer/prompts`**

**Confidence: HIGH for the tooling choice; MEDIUM for the overall architecture (custom build, no existing library solves this exact use case).**

This is a bespoke problem — no off-the-shelf library automates "clone Astro template + populate brand config from questions." The right tool is a Node.js CLI script that ships with the template.

### Core Package

```bash
npm install -D @inquirer/prompts
```

Current version: **8.4.1** (published 2026-04-09, confirmed via npm). Requires Node.js 20+.

`@inquirer/prompts` is the modern rewrite of Inquirer.js — ESM-native, 60% smaller bundle, tree-shakeable, TypeScript-first. The legacy `inquirer` package (v13+) is maintenance-only.

**Prompt types available:** `input`, `confirm`, `select`, `checkbox`, `password`, `number`, `search` — sufficient for all client onboarding questions.

### Supporting Packages (already installed)

- `fs/promises` — Node.js built-in, write generated files
- `path` — Node.js built-in, resolve file paths
- TypeScript is already configured — write the CLI in TS, run with `ts-node` or `tsx`

### Additional Package (if needed for file templating)

None required — use JavaScript template literals for file generation. If complexity grows, consider `handlebars` (template rendering), but start without it.

### Architecture Pattern

```
scripts/onboard-client.js (or .ts)
├── Prompt phase: @inquirer/prompts collects client data
│   ├── Business name, address, phone, website domain
│   ├── Services offered (checkbox from template defaults)
│   ├── Brand colors (hex codes)
│   └── Image locations (paths to uploaded images)
├── Generate phase: fs.writeFile populates config files
│   ├── Writes brand-config.ts from template literal
│   ├── Writes napData.ts from template literal
│   └── Writes .env with PUBLIC_WEBHOOK_URL
└── Build phase: spawns `npm run build` via child_process
```

**Script entry in package.json:**

```json
{
  "scripts": {
    "onboard": "node scripts/onboard-client.js"
  }
}
```

**Why `@inquirer/prompts` over alternatives:**
- Enquirer (alternative) is unmaintained as of 2024
- `readline` (Node.js built-in) works but has terrible DX for multi-question flows
- `@inquirer/prompts` is the de-facto standard for Node.js CLI wizards in 2026

**What NOT to build:** Do not create a web UI for the onboarding wizard at this stage. CLI is simpler, version-controlled alongside the template, and the primary user (the agency developer) is comfortable with a terminal.

---

## Summary Table

| Improvement | Package/API | Version | New Dependency? |
|-------------|------------|---------|----------------|
| Image optimization | `astro:assets` (`<Image>`, `<Picture>`) | Built into Astro 5.7.10 | No — sharp 0.34.5 already installed |
| Env vars for webhook | `astro:env` module | Built into Astro 5.7.10 | No |
| Honeypot spam protection | Custom pattern | N/A | No |
| Form error feedback | Inline JSX + `sonner` | 2.0.7+ | Yes — add `sonner` to main website |
| Client onboarding CLI | `@inquirer/prompts` | 8.4.1 | Yes — add as devDependency |

**Net new dependencies: 2** — both justified, neither exotic.

---

## Confidence Assessment

| Area | Confidence | Basis |
|------|------------|-------|
| Astro image optimization | HIGH | Official Astro 5 docs, verified props and Sharp integration |
| `astro:env` for env vars | HIGH | Official Astro 5 docs, stable API since 5.0 |
| Honeypot pattern | HIGH | Multiple sources, standard practice, no library needed |
| Sonner for error feedback | HIGH (sonner itself); MEDIUM (Astro SSR compat) | Already in monorepo; React 19 compatible per docs |
| `@inquirer/prompts` for CLI | HIGH | npm confirmed version 8.4.1, Node.js 20+ matches project |

---

## Sources

- [Astro Images — Official Docs](https://docs.astro.build/en/guides/images/)
- [Astro Image & Assets API Reference](https://docs.astro.build/en/reference/modules/astro-assets/)
- [Astro Environment Variables — Official Docs](https://docs.astro.build/en/guides/environment-variables/)
- [Type-safe env vars in Astro 5.0 — Bryan Robinson](https://bryanlrobinson.com/blog/type-safe-environment-variables-in-astro-5-0/)
- [@inquirer/prompts — npm](https://www.npmjs.com/package/@inquirer/prompts)
- [Sonner — shadcn/ui docs](https://ui.shadcn.com/docs/components/radix/sonner)
- [Honeypot implementation guide — FormShield](https://formshield.dev/blog/form-honeypot-implementation-guide)
