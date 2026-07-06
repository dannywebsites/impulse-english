# verify-tracking — the double-tick tracking test

Proves every conversion CTA on the **live** site actually records in GA4.
Born 2026-07-06 after a week of silently broken conversion tracking that had
been declared "verified" from network captures alone.

## The double-tick standard (non-negotiable)

A tracking claim may only be called **verified** when BOTH ticks pass:

1. **Tick 1 — sent:** the browser emitted a GA4 hit with `tid=G-KNMS5YW69T`
   and the expected `en=` event name (network capture).
2. **Tick 2 — recorded:** the GA4 **Realtime API** count for that event
   increased on property `503609664` (Google's own data, not ours).

Forms add **Tick 3:** the GoHighLevel webhook answered HTTP 200.

"Code deployed" is not verified. "Request seen leaving the browser" is not
verified — that exact mistake hid a broken pipeline for a week (June 30 →
July 6, 2026): headless UAs get bot-filtered by GA4, and hits aimed at a
measurement ID that isn't a stream of the property vanish without any error.

## Running it

```bash
npm run verify:tracking            # all click CTAs on 12 page templates
npm run verify:tracking -- --forms # + 3 real form submits (marked test leads in GHL — delete after)
npm run verify:tracking -- --popup # + the 40s CoursePopup submit test
```

Requirements (Danny's Mac): Google Chrome, `gcloud`, and the GA4 service
account env at `~/.config/gcloud/impulse-ga4-reporter.env` (service account
`ga4-reporter@impulse-ga4-rpt-4009…`, Editor on the property).

Test sessions load pages with `?tt=test`, which the BaseLayout consent script
turns into `traffic_type=internal` — excluded from reports once the GA4
"Internal Traffic" data filter is **Active** (GA4 Admin → Data collection and
modification → Data filters; API cannot toggle this, it's UI-only).

Output: console table + `scripts/verify-tracking/last-audit.md`.
Exit code 0 = all PASS (usable in CI/cron).

## When you MUST run this

- After ANY change to: `src/layouts/BaseLayout.astro` scripts,
  `components/LeadForm.tsx`, `components/CoursePopup.tsx`,
  `pages/ReservarClasePage.tsx`, the GTM container, or GA4 admin config.
- Monthly (scheduled), so silent breakage is caught within ~30 days.

## Gotchas that already bit us once (do not rediscover these)

- **Never verify with the default headless UA** — GA4 bot-filters
  `HeadlessChrome`. The harness sets a real Chrome UA.
- **`gtag('config')` must be queued inline at parse time**, not in a script
  `onload` — else first-tap clicks race the deferred loader and are dropped.
- **Every `gtag('event')` needs `send_to: 'G-KNMS5YW69T'`** — GTM also claims
  that destination on-page; events without explicit `send_to` are dropped.
- **`G-WN5973VY1M` is a phantom** — not a stream of the property. Never use it.
- `.first()` on a wa.me selector may match a hidden mobile-menu link;
  the harness clicks visible elements only.
- Realtime deltas use a pre-run baseline; a real visitor clicking during the
  run can only over-count (never false-FAIL), which is acceptable.

Adding a CTA to the matrix = one entry in `config.mjs`.
