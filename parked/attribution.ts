// attribution.ts — 29-field lead payload assembly + organic source derivation.
// First-touch session data is captured by the inline bootstrap script in
// src/layouts/BaseLayout.astro and stashed in sessionStorage under `imp_*` keys.
// deriveOrganicSource() is duplicated inline in that script; keep them in sync.

export interface LeadPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  consent: boolean;
  submitted_at: string;

  level: string;
  service_interest: string;

  page_type: string;
  page_url: string;
  current_page_referrer: string;

  session_entry_page: string;
  session_entry_referrer: string;

  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;

  gclid: string;
  gbraid: string;
  wbraid: string;
  fbclid: string;

  pages_viewed_count: number;
  time_on_site_seconds: number;
  time_on_page_seconds: number;

  device_type: 'mobile' | 'tablet' | 'desktop';
  country_code: string;
  preferred_language: string;

  session_id: string;
}

export interface LeadFormInput {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  level: string;
  consent: boolean;
}

export function deriveOrganicSource(entryReferrer: string): { utm_source: string; utm_medium: string } {
  if (!entryReferrer) return { utm_source: 'direct', utm_medium: 'direct' };

  const ref = entryReferrer.toLowerCase();

  if (ref.includes('maps.google')) return { utm_source: 'google_maps', utm_medium: 'local' };
  if (ref.includes('google.')) return { utm_source: 'organic_google', utm_medium: 'organic' };
  if (ref.includes('bing.')) return { utm_source: 'organic_bing', utm_medium: 'organic' };
  if (ref.includes('duckduckgo')) return { utm_source: 'organic_ddg', utm_medium: 'organic' };
  if (ref.includes('yahoo')) return { utm_source: 'organic_yahoo', utm_medium: 'organic' };

  if (ref.includes('instagram.')) return { utm_source: 'instagram', utm_medium: 'social' };
  if (ref.includes('facebook.') || ref.includes('fb.com')) return { utm_source: 'facebook', utm_medium: 'social' };
  if (ref.includes('tiktok.')) return { utm_source: 'tiktok', utm_medium: 'social' };
  if (ref.includes('linkedin.')) return { utm_source: 'linkedin', utm_medium: 'social' };
  if (ref.includes('youtube.')) return { utm_source: 'youtube', utm_medium: 'social' };
  if (ref.includes('twitter.') || ref.includes('x.com')) return { utm_source: 'twitter', utm_medium: 'social' };

  if (ref.includes('mail.') || ref.includes('outlook.')) return { utm_source: 'email', utm_medium: 'email' };

  if (ref.includes('impulse-english.es')) return { utm_source: 'internal', utm_medium: 'internal' };

  return { utm_source: 'referral', utm_medium: 'referral' };
}

export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent.toLowerCase();
  const touch = navigator.maxTouchPoints > 1;
  if (/ipad|tablet|playbook|silk/.test(ua) || (touch && /macintosh/.test(ua))) return 'tablet';
  if (/mobi|iphone|ipod|android.*mobile|blackberry|iemobile|opera mini/.test(ua)) return 'mobile';
  return 'desktop';
}

function readSession(key: string, fallback = ''): string {
  if (typeof sessionStorage === 'undefined') return fallback;
  return sessionStorage.getItem(key) ?? fallback;
}

function secondsSince(startMs: number): number {
  if (!startMs || Number.isNaN(startMs)) return 0;
  return Math.max(0, Math.round((Date.now() - startMs) / 1000));
}

export function buildLeadPayload(form: LeadFormInput, source: string): LeadPayload {
  const sessionStart = parseInt(readSession('imp_session_start', '0'), 10);
  const pageStart = parseInt(readSession('imp_page_start', '0'), 10);

  return {
    first_name: form.first_name.trim(),
    last_name: form.last_name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    consent: form.consent,
    submitted_at: new Date().toISOString(),

    level: form.level,
    service_interest: source,

    page_type: source,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    current_page_referrer: typeof document !== 'undefined' ? document.referrer : '',

    session_entry_page: readSession('imp_session_entry_page'),
    session_entry_referrer: readSession('imp_session_entry_referrer'),

    utm_source: readSession('imp_utm_source'),
    utm_medium: readSession('imp_utm_medium'),
    utm_campaign: readSession('imp_utm_campaign'),
    utm_content: readSession('imp_utm_content'),
    utm_term: readSession('imp_utm_term'),

    gclid: readSession('imp_gclid'),
    gbraid: readSession('imp_gbraid'),
    wbraid: readSession('imp_wbraid'),
    fbclid: readSession('imp_fbclid'),

    pages_viewed_count: parseInt(readSession('imp_pages_viewed', '1'), 10),
    time_on_site_seconds: secondsSince(sessionStart),
    time_on_page_seconds: secondsSince(pageStart),

    device_type: getDeviceType(),
    country_code: readSession('imp_country_code'),
    preferred_language: typeof navigator !== 'undefined' ? navigator.language : '',

    session_id: readSession('imp_session_id'),
  };
}
