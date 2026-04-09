---
name: Vercel Deployer
description: >
  Configure and manage Vercel deployment for the Impulse English Academy website. Use this skill
  when setting up Vercel for the first time, configuring domains, debugging deployment failures,
  setting up analytics (GTM, GA4, Vercel Analytics), configuring GDPR consent mode, or managing
  robots.txt and sitemap generation. Also use when the site needs performance optimization related
  to deployment settings or when configuring preview deployments.
---

# Vercel Deployer

Manages the complete Vercel deployment configuration for impulse-english.es. Covers project settings,
domain configuration, analytics integration, GDPR compliance, and SEO files (robots.txt, sitemap,
llms.txt).

## When to Use

- Setting up Vercel for a new deployment
- Configuring custom domains
- Debugging deployment or build failures
- Setting up analytics (GTM, GA4, Vercel Analytics)
- Configuring GDPR consent mode
- Managing robots.txt, sitemap, or llms.txt
- Performance optimization related to deployment

---

## 1. Vercel Project Settings

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true,
  "trailingSlash": true
}
```

- **Framework:** Astro (auto-detected by Vercel)
- **Node.js version:** 20.x
- **Build output:** Static HTML in `dist/`
- `cleanUrls: true` — removes `.html` extensions
- `trailingSlash: true` — must match `astro.config.mjs: trailingSlash: 'always'`

---

## 2. Domain Configuration

- **Primary:** `impulse-english.es`
- **Redirect:** `www.impulse-english.es` → `impulse-english.es` (301 via vercel.json)
- DNS: A record pointing to Vercel, CNAME for www

---

## 3. Analytics Configuration

### Google Tag Manager
- **Container ID:** `GTM-TDC7CQDD`
- Loaded via deferred script (NOT in `<head>` directly)

### Google Analytics 4
- **Measurement ID:** `G-WN5973VY1M`
- Loaded as part of GTM deferred script

### Google Ads
- **Conversion ID:** `AW-11461982741`
- Loaded alongside GA4

### Deferred Loading Strategy
Analytics scripts load after a 3.5-second timeout OR on first user interaction:
```javascript
setTimeout(load, 3500);
['scroll', 'click', 'touchstart', 'keydown'].forEach(e => {
  document.addEventListener(e, load, { once: true, passive: true });
});
```

This prevents analytics from blocking initial page render and measurably improves Lighthouse performance scores. When advising on analytics loading, always include the actual code pattern (not just a description) and explain how it impacts Lighthouse.

### Vercel Analytics + Speed Insights
Loaded via `requestIdleCallback` (falls back to 2-second timeout):
```javascript
const loadAnalytics = () => {
  import('@vercel/analytics').then(m => m.inject());
  import('@vercel/speed-insights').then(m => m.injectSpeedInsights());
};
if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(loadAnalytics);
} else {
  setTimeout(loadAnalytics, 2000);
}
```

---

## 4. GDPR Consent Mode

Default consent is DENIED until the user accepts via CookieBanner:
```javascript
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'wait_for_update': 500    // Wait 500ms for CMP response
});
```

The `CookieBanner` component (rendered on every page via `client:idle`) updates consent when accepted.

---

## 5. Global Click Tracking

Phone and WhatsApp clicks are tracked to dataLayer for GTM:
```javascript
// Phone clicks → event: 'phone_click'
// WhatsApp clicks → event: 'whatsapp_click'
```

---

## 6. SEO Files

### robots.txt (`public/robots.txt`)
- Allow all crawlers for main content
- Configure AI crawler permissions as needed
- Reference sitemap URL

### Sitemap
Generated automatically by `@astrojs/sitemap` integration:
- Config in `astro.config.mjs`: `sitemap()`
- Site URL: `https://impulse-english.es`
- Output: `dist/sitemap-index.xml` + `dist/sitemap-0.xml`

### llms.txt (`public/llms.txt`)
AI reference file for LLM visibility — describes the business for AI crawlers.

### site.webmanifest (`public/site.webmanifest`)
PWA manifest with app name, icons, theme color (`#12477d`).

---

## 7. Google Search Console

Verification meta tag in BaseLayout:
```html
<meta name="google-site-verification" content="PLACEHOLDER" />
```
Replace `PLACEHOLDER` with the actual verification code from Google Search Console.

---

## 8. Environment Variables (Vercel Dashboard)

For preview deployments, set these in Vercel project settings:
- No build-time env vars needed (static site)
- Analytics IDs are hardcoded in BaseLayout (not env vars)

For the auto-publish pipeline (GitHub Actions), env vars are in GitHub Secrets (see `api-integrations` skill).

---

## 9. Deployment Flow

```
git push to main
  → Vercel detects push
  → Runs: npm run build (astro build)
  → Deploys dist/ to CDN
  → Available at impulse-english.es
```

Preview deployments: Every PR gets a preview URL automatically.

---

## Related Skills

- **astro-site-builder** — build configuration that Vercel executes
- **redirect-manager** — vercel.json redirects applied at edge
- **github-actions-publisher** — git push from pipeline triggers deploy
