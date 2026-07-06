# Tracking & Analytics — impulse-english.es

Reference for every measurement tag on this site: what's installed, where it lives, the
consent model, the events we push, and how to verify it. Audited 2026-06-28.

> **GTM-first principle:** Google Tag Manager is the single container that should own the
> Google tags. Do **not** add a second GA4 config tag inside GTM if GA4 is already loaded
> standalone in `BaseLayout.astro` — that double-counts pageviews. See "Open item" below.

## What's installed

All client-side tags are centralized in **one file** — `src/layouts/BaseLayout.astro` —
which every page routes through (directly or via `ArticleLayout` / `CourseLayout` /
`ExamLayout`). One edit there covers the whole site (~121 pages).

| Tool | ID | Where |
|------|----|-------|
| Google Tag Manager | `GTM-TDC7CQDD` | `src/layouts/BaseLayout.astro` (loader + `<noscript>` iframe) |
| Google Analytics 4 | `G-KNMS5YW69T` (property 503609664, its only stream) | `src/layouts/BaseLayout.astro` (standalone `gtag.js`, `send_page_view: false`) **and** GA4 event tags inside GTM (send `page_view`, `ph_call_click`) |
| Google Ads | `AW-11461982741` | `src/layouts/BaseLayout.astro` (`gtag('config', …)`) |
| Vercel Web Analytics + Speed Insights | — (cookieless) | `src/layouts/BaseLayout.astro` (dynamic import) |
| Meta Pixel | **not installed** | — (deliberately omitted) |

Tags are loaded lazily — after ~3.5s **or** the first user interaction (scroll/click/touch/key)
— to protect Core Web Vitals.

## Consent model (GDPR / LSSI — the site is operated from Madrid)

- **Google Consent Mode v2**, default **denied** for `analytics_storage` and `ad_storage`
  (`BaseLayout.astro`). Nothing analytics/ads-related fires until the visitor opts in.
- The banner is `components/CookieBanner.tsx`:
  - "Aceptar" → `gtag('consent','update',{analytics_storage:'granted', ad_storage:'granted'})`
    and writes `impulse_cookie_consent = accepted` to `localStorage`.
  - "Rechazar" → writes `rejected`, consent stays denied.
  - Returning visitors who previously accepted are re-granted on load.
- **If GA4 looks empty, this is almost always why** — data only flows after a visitor clicks
  "Aceptar". It is not a missing tag.

## dataLayer events we push

| Event | Fires when | Source |
|-------|-----------|--------|
| `generate_lead` | Contact or "reservar clase" form submits to the GHL webhook | `components/LeadForm.tsx` |
| `phone_click` | Any `tel:` link is clicked | `src/layouts/BaseLayout.astro` (global click listener) |
| `whatsapp_click` | Any `wa.me` / WhatsApp link is clicked | `src/layouts/BaseLayout.astro` |

Lead submissions also POST a 29-field attribution payload (UTM, gclid, fbclid, session, device,
country) to GoHighLevel — see `utils/attribution.ts`.

## Legal disclosure

The tags above are disclosed in:
- `pages/legal/PoliticaCookiesPage.tsx` — concrete cookie table (`_ga`, `_ga_WN5973VY1M`,
  `_gcl_au`, `impulse_cookie_consent`, Vercel) + per-service opt-out links.
- `pages/legal/PoliticaPrivacidadPage.tsx` — §IV.5 processors (Google, Vercel), legal basis
  (consent), retention, and international-transfer basis (SCC / EU-US DPF).

Keep these in sync whenever a tag is added or removed.

## How to verify

1. **GA4 double-count check (do first):** GA4 stream `G-KNMS5YW69T` is fed from TWO places:
   GA4 event tags inside GTM `GTM-TDC7CQDD` (they send `page_view` + `ph_call_click`) and the
   standalone `gtag.js` in `BaseLayout` (sends `whatsapp_click`/`phone_click`/`generate_lead`,
   with `send_page_view: false` so pageviews are NOT double-counted). If the GTM GA4 tags are
   ever removed, flip `send_page_view` back to true. ⚠️ Never configure `G-WN5973VY1M` — it is
   NOT a stream of property 503609664; events sent there vanish into an inaccessible property
   (this was live until 2026-07-06 and silently ate all contact-click events).
2. **Live events:** open `impulse-english.es`, click **Aceptar**, then use GA4 **Realtime** /
   **DebugView** + **Google Tag Assistant** to confirm `page_view`, `generate_lead`,
   `phone_click`, `whatsapp_click` fire.
3. **Google Ads:** confirm the conversion actions under account `AW-11461982741` are linked to
   the `generate_lead` / phone events.
4. **Build:** `npm run build` — tags are static in `BaseLayout`, so a clean build means they ship.

## Open item

GA4 is currently loaded **standalone** (`gtag.js` in `BaseLayout`) while GTM is also present.
That's fine *as long as* the GTM container does not also hold a GA4 tag for the same ID
(verification step 1). The cleaner long-term architecture is GTM-first (GA4 configured as a tag
**inside** GTM, removed from `BaseLayout`), but the current setup works and should only be
changed if step 1 reveals a duplicate.
