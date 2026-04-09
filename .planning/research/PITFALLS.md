# Domain Pitfalls

**Project:** Impulse English Academy — Astro 5 Template Improvement
**Analysed:** 2026-04-09
**Scope:** Image migration, env var extraction, honeypot spam protection, client onboarding automation, form error feedback

---

## Critical Pitfalls

These mistakes cause broken deployments, lost leads, or rework across the whole codebase.

---

### Pitfall 1: Treating "Move to /assets/" as a Simple Find-Replace

**What goes wrong:** The grep for S3 URLs returns 170 file matches. A developer runs a bulk find-replace, pushing every string to a local path — but dozens of those matches are in the `seo-system/` subtree (a parallel Vite app with its own `src/data/images.ts`, `components/`, and `pages/`), in CSV/TXT data files, in `public/sitemap-images.xml`, in `scripts/` utilities, and in JSON manifests. The replace works locally, then build fails in Vercel because the physical files aren't present in `public/images/optimized/`, or the seo-system routes break because they have different import paths.

**Why it happens:** The repo has three distinct image consumers with different path conventions:
1. Main Astro site — resolves from `public/images/` (served as static)
2. seo-system Vite app — has its own `src/data/images.ts` and `components/` mirroring the main site
3. `scripts/generate-image-sitemap.mjs` and `scripts/optimize-images.mjs` — expect S3 source URLs to know what to download

Treating all 170 as one problem collapses three separate problems into chaos.

**Consequences:** Silent 404s on images that look fine in dev (browser caches S3 originals), broken sitemap generation, seo-system build failures, and a partial migration that is harder to fix than the original.

**Prevention:**
- Audit the 170 matches into four buckets before touching anything: (a) main site components/pages, (b) seo-system components/pages, (c) data/manifest files, (d) scripts and CSVs
- Migrate bucket (a) first, build and deploy, validate, then do (b)
- Scripts that reference S3 as a download source (optimize-images.mjs) keep S3 URLs intentionally — don't migrate those
- The `public/sitemap-images.xml` needs regenerating after migration, not manual updating

**Detection:** `grep -r "impulseenglish.s3" . --include="*.tsx" --include="*.ts" --include="*.astro" | wc -l` before and after — this number must reach zero in production source files only, not in scripts/data files

**Phase:** Image consolidation phase (do this before image optimisation)

---

### Pitfall 2: Public Env Vars Expose the Webhook URL Anyway

**What goes wrong:** The team moves the LeadConnectorHQ webhook URL from the component default prop to `import.meta.env.VITE_WEBHOOK_URL`. This feels like a security win. It is not. Vite/Astro bundles `VITE_` prefixed variables directly into the client-side JS bundle at build time. The URL appears verbatim in the compiled output shipped to the browser — just in a different location. Anyone opening DevTools Network tab or reading the bundle already has the URL regardless.

**Why it happens:** The distinction between build-time public env vars (`VITE_` / `PUBLIC_`) and server-only env vars is non-obvious. The Astro docs describe `PUBLIC_` prefix for client-accessible values, which creates the false impression of a secure handoff.

**Consequences:** False sense of security. The team ticks the "webhook URL secured" box, closes the ticket, and the URL remains equally exposed. If the goal is security, the result is zero improvement. If the goal is portability (no code change per client), the env var approach does achieve that — but only portability, not security.

**Prevention:**
- Be explicit in the ticket about what the env var achieves: **portability only**, not security
- Document this clearly in `.env.example` with a comment: `# This value is bundled into client JS — do not treat it as a secret`
- If actual security is needed later, that requires a server-side proxy (Vercel Edge Function or API route) — out of scope for this milestone but must not be ruled out by calling the env var approach "secure"
- The `webhookUrl` prop on `LeadForm` already allows per-instance override — the env var just sets the default so it doesn't need to be in the source file

**Detection:** After the change, run `npm run build` and search the output in `dist/` for the webhook URL string. It will be there. This is expected. Write this finding down so future engineers don't "fix" it by removing the env var and hardcoding again.

**Phase:** Webhook env var phase

---

### Pitfall 3: Astro Image Pipeline Cannot Process S3 URLs at Build Time

**What goes wrong:** After moving webhook and honeypot work, the team turns to image optimisation and decides to use Astro's `<Image />` component or `astro:assets` with the remaining S3 URLs (BaseLayout's `DEFAULT_OG_IMAGE` still points to S3 after the migration). Astro's image service (Sharp) only processes images it can access at build time. Remote URLs from arbitrary domains are blocked by default — Astro will throw a build error unless the domain is whitelisted in `astro.config.mjs` under `image.domains` or `image.remotePatterns`.

**Why it happens:** The `output: 'static'` configuration means there is no runtime image processing. Developers assume `<Image src="https://..." />` works like a Next.js `<Image />` with its server-side optimisation proxy. It does not.

**Consequences:** Build errors on any `<Image>` component pointing to a non-whitelisted remote URL. If domains are whitelisted, images are downloaded and processed at build time, increasing build duration significantly and potentially hitting memory limits on Vercel's build tier.

**Prevention:**
- Image optimisation must happen after image consolidation. The correct order is: download originals from S3 → run Sharp locally via `scripts/optimize-images.mjs` → commit optimised files → reference local paths → then use `<picture>` with local srcset (already partially implemented in `OptimizedImage.tsx`)
- The existing `OptimizedImage.tsx` component is already correct — it uses a `<picture>` element with local paths in `src/data/images.ts`. The gap is that S3 references exist in components that bypass this component entirely (raw `<img>` tags with `impulseenglish.s3` URLs)
- Do not enable `image.domains` for S3 in astro.config — it will download images every build

**Detection:** Search for raw `<img src="https://impulseenglish.s3` in `.tsx`/`.astro` files after migration — every match is a missed local reference

**Phase:** Image optimisation phase (depends on image consolidation being complete first)

---

### Pitfall 4: Honeypot Field Detected by Screen Readers and Submitted by Autofill

**What goes wrong:** A honeypot field is added with `display: none` or `visibility: hidden`. Bots that parse and submit form fields programmatically still see it (they parse DOM, not computed styles). More importantly, browser autofill and some password managers fill hidden fields — a real user's submission is flagged as spam and silently dropped.

**Why it happens:** The naive honeypot implementation uses CSS hiding, which is the pattern shown in most quick tutorials. These tutorials don't account for (a) headless browsers that evaluate JS and computed styles, (b) autofill edge cases, or (c) accessibility implications (screen readers encounter an unlabelled input).

**Consequences:** Legitimate leads blocked. Spanish mobile users with aggressive autofill (common on iOS) have their form submissions silently rejected. No error is shown because the check is server-side at the webhook level — or if it's client-side, the form appears to submit but the data is discarded.

**Prevention:**
- Use the correct honeypot pattern: a field that is visually positioned off-screen with `position: absolute; left: -9999px` (not `display: none`), combined with `tabIndex={-1}` and `autoComplete="off"` and `aria-hidden="true"`
- The field must have a plausible-sounding name (`website`, `url`, `company`) that bots are likely to fill but humans won't see
- Check the honeypot value on submission: if it's non-empty, silently set status to 'success' (fake success) rather than showing an error — bots should not receive confirmation that they were detected
- Add a visual comment in JSX (`{/* honeypot - do not remove */}`) so future developers don't delete it thinking it's dead code

**Detection:** Test with a mobile iOS device using autofill and check if a real name/email autofills the honeypot field. Also validate the rendered HTML with a screen reader emulator to ensure `aria-hidden` is present.

**Phase:** Honeypot phase

---

### Pitfall 5: Client Onboarding Automation Underestimates Data Ambiguity

**What goes wrong:** The onboarding system is scoped as "provide client info → research agent scrapes details → populates brand-config.ts / napData.ts → builds all pages." The research agent scrapes a business name and finds: three different phone numbers across Google Maps, the website, and Facebook; two addresses (registered office vs. actual teaching location); and opening hours that vary by season. The agent picks one value for each field. The generated site goes live with the wrong phone number.

**Why it happens:** Business data is never perfectly consistent across the internet. The agent treats the first credible source as canonical. There is no human review step before the data is committed to config files and pages are built.

**Consequences:** Live site with incorrect NAP (Name, Address, Phone) data. This directly damages local SEO — Google's local algorithm uses NAP consistency as a signal. A single wrong phone number in napData.ts propagates into Organization schema, all location pages, and the footer simultaneously.

**Prevention:**
- Design the onboarding flow with a mandatory human review step before any files are written: present a structured summary of scraped data with source attribution and ask the client to confirm each field
- Never auto-populate `napData.ts` without confirmation. Auto-populate a draft file (`napData.draft.ts`) and diff it against the template
- Require the client to provide phone, address, and hours explicitly (don't scrape these — scrape only supplementary data like taglines, service descriptions)
- The research agent's output should be a question-answer session, not a silent write to disk

**Detection:** After onboarding, run a schema validation step that cross-checks Organization schema phone/address against what the client signed off on

**Phase:** Client onboarding system phase

---

## Moderate Pitfalls

---

### Pitfall 6: Form Error State Survives Page Navigation and Confuses Returning Users

**What goes wrong:** When error feedback is added to LeadForm, the error message is stored in component state. The current code on success calls `window.location.href = '/gracias'` — which is fine. But if the webhook fails (error state), the user sees the error, closes the tab, reopens the site, navigates to the same page with the same form — and the state is reset because React reinitialises. That's correct. The problem occurs when multiple `LeadForm` instances exist on one page (e.g., a course page with a top form and a bottom form). An error on one form's submission does not clear the other form, but the user may try the second form and get a second error. The UX becomes two error messages on screen simultaneously with no guidance.

**Prevention:**
- Error messages must be specific to the failed submission, not global to the page
- Include a human-readable suggestion in the error message: "No hemos podido enviar tu solicitud. Llámanos al 604 910 611 o inténtalo de nuevo."
- The phone number in the error message must come from `NAP.phone` in napData.ts — never hardcode it in the component

**Detection:** Place two `LeadForm` instances on a test page, fail both, verify error messages are independent and both contain the correct fallback contact info

**Phase:** LeadForm error feedback phase

---

### Pitfall 7: Vercel's Free/Pro Tier Build Size Limits Will Be Hit After Image Consolidation

**What goes wrong:** Currently images are served from S3 — zero build artifact size. After consolidation, 125+ local images (assets/images/optimized already at 56MB + assets/images at 69MB = ~125MB) plus the Sharp-generated variants will be committed to the repo. Vercel's deployment package has a 250MB compressed limit for the `public/` directory on Pro and a 100MB limit on Free. The build may start failing silently or images may not be served.

**Why it happens:** The team measures local disk size, sees it's under 1GB, and assumes deployment will work. Vercel applies its own limits at the CDN edge packaging stage, not just at build time.

**Prevention:**
- Before consolidating images into `public/`, calculate the total compressed size of all image files that will land there
- Use Vercel's Image Optimization service (available on Pro) or keep large images on a CDN (Cloudinary free tier, or a public Vercel Blob store) rather than committing them to the repo
- At minimum, consolidate only the images actually referenced in production pages, not all originals — the `assets/images/original/` directory (16 files) should never go into `public/`
- After migration, add a build-time check that logs `du -sh dist/` so size regressions are visible

**Detection:** Run `du -sh public/images/` before and after adding optimised variants. Compare to Vercel's limits for the account tier in use.

**Phase:** Image consolidation phase

---

### Pitfall 8: The `seo-system/` Directory Has Mirrored Components That Won't Get Updated

**What goes wrong:** The S3-to-local migration and honeypot work update the main site components. The seo-system has its own copies of `ExamPageLayout.tsx`, `Footer.tsx`, `LocationsSection.tsx`, `PartnersSection.tsx`, `ValuesSection.tsx`, `SEOHead.tsx`, `Navbar.tsx`, and `CoursesSection.tsx` — all confirmed to also contain S3 URLs (grep shows them in the 170 match list). If the main site is updated but seo-system is not, the seo-system pages will reference dead image paths after the S3 bucket is cleaned up.

**Why it happens:** The seo-system is a Vite preview app, not the production site — developers treat it as lower priority. But it is used by the 10-agent SEO pipeline to generate pages. If its templates reference broken images, every page generated by the pipeline will have broken images on first publish.

**Prevention:**
- Any component change in the main site must be explicitly mirrored to the corresponding seo-system component in the same PR
- Consider whether the duplication is necessary at all — if seo-system components could import from the main site's `components/` directory via alias, the duplication disappears
- At minimum, add a comment at the top of every mirrored file: `// MIRROR of /components/[name].tsx — keep in sync manually`

**Detection:** After the main site migration, run the same S3 grep specifically on `seo-system/` to confirm zero remaining references

**Phase:** Image consolidation phase (must be included in scope from the start)

---

## Minor Pitfalls

---

### Pitfall 9: Honeypot CSS Class Names Collide with Tailwind Purge

**What goes wrong:** The honeypot field's positioning classes (e.g., `absolute -left-[9999px]`) may be purged by Tailwind if they don't appear elsewhere in the codebase and the Tailwind config uses content scanning. The field disappears from the CSS output. The element is then visible on screen as an unlabelled text input.

**Prevention:** Use an inline `style` attribute for honeypot positioning, not Tailwind classes. `style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}` is immune to purging.

**Detection:** Run `npm run build` and inspect the compiled CSS for the honeypot positioning rules. If absent, the mitigation is needed.

**Phase:** Honeypot phase

---

### Pitfall 10: The `/gracias` Redirect Fires Even on Webhook Error

**What goes wrong:** The current LeadForm code at lines 67-68 redirects to `/gracias` inside the `try` block, after `await fetch(webhookUrl, ...)`. The `fetch()` call does not throw on a non-2xx HTTP response — it only throws on network failure. If LeadConnectorHQ returns a 400 or 500, the code reaches `setStatus('success')` and redirects to `/gracias`, while the lead was never recorded.

**Why it happens:** `fetch` resolves its promise on any HTTP response; only network errors (no connection, DNS failure) reject it. Developers assume `try/catch` around `fetch` catches HTTP errors.

**Consequences:** The user sees a thank-you page. The lead is lost. No error is surfaced. This is the exact silent-failure problem the error feedback task is supposed to fix — but it will remain broken if the fix only adds a UI error state without also checking `response.ok`.

**Prevention:** After `await fetch(...)`, check `if (!response.ok) throw new Error(response.statusText)` before calling `setStatus('success')`. This must be part of the error feedback implementation spec, not a separate task.

**Detection:** Use a test webhook URL that returns 500. Verify the form shows the error state instead of redirecting.

**Phase:** LeadForm error feedback phase (this is the actual root cause of the silent failure)

---

### Pitfall 11: Client Onboarding Overwrites Working Config If Run on the Production Repo

**What goes wrong:** The onboarding automation is built as a CLI tool or agent command. A developer accidentally runs it against the Impulse production repo (not a clone) to test it. The tool overwrites `brand-config.ts` and `napData.ts`. The production site deploys with partial or incorrect data before anyone notices.

**Prevention:**
- Onboarding automation must detect whether it is running against a "template" instance or a "live" instance. One simple guard: check for the presence of a `TEMPLATE_MODE=true` env var in `.env`, and refuse to run if it is absent
- All writes must go to draft files first (`brand-config.draft.ts`, `napData.draft.ts`), never directly to the working files
- Git status check before any write: if uncommitted changes exist in the config files, abort and warn

**Detection:** Test the onboarding tool with `git status` monitoring — verify it never modifies a file that hasn't been explicitly staged for the onboarding run.

**Phase:** Client onboarding system phase

---

## Phase-Specific Warning Map

| Phase | Likely Pitfall | Mitigation |
|-------|---------------|------------|
| Image consolidation | 170-file scope explosion across three sub-systems | Bucket by consumer, migrate in order: main site → seo-system → data files |
| Image consolidation | Vercel build artifact size limit | Measure `public/images/` compressed size before committing |
| Image consolidation | seo-system mirrored components left behind | Include seo-system in migration scope explicitly |
| Image optimisation | Astro `<Image>` fails on S3 URLs | Complete consolidation first; use existing `OptimizedImage.tsx` pattern |
| Webhook env var | False sense of security | Document that `PUBLIC_` vars are client-visible; portability is the goal |
| LeadForm error feedback | `fetch()` not throwing on HTTP errors | Check `response.ok` in the fix, not just try/catch |
| LeadForm error feedback | Multiple form instances showing simultaneous errors | Scope error state per-instance; include fallback phone number from napData.ts |
| Honeypot | Autofill populating the hidden field | Use off-screen positioning, not `display:none`; set `autoComplete="off"` |
| Honeypot | Tailwind purging honeypot position classes | Use inline `style={}` for positioning |
| Client onboarding | Scraped NAP data ambiguity | Require human confirmation before writing to config files |
| Client onboarding | Tool run against production repo accidentally | Guard with `TEMPLATE_MODE` env var; write to draft files only |
