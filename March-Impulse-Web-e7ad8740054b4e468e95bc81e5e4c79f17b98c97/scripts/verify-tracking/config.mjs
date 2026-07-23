// Double-tick tracking test matrix for impulse-english.es
// Each page lists CTA tests: { label, find, expect } where `find` is a CSS
// selector resolved against VISIBLE elements only. Tests whose selector
// matches nothing are reported as SKIP (n/a on that template) unless
// required: true. `race: true` pages get their FIRST wa-click dispatched
// ~2.5s after load, before the deferred gtag.js has loaded — the regression
// case that silently ate events until 2026-07-06.
// Target site. Defaults to live prod; override with VERIFY_SITE to point the
// harness at a local `astro preview` (http://localhost:4321) or any deploy —
// lets a changeset be double-tick verified BEFORE it reaches prod. Events
// record to the same GA4 property regardless of origin, so Realtime (Tick 2)
// works from localhost; ?tt=test still tags them traffic_type=internal.
export const SITE = process.env.VERIFY_SITE || 'https://impulse-english.es';
export const MEASUREMENT_ID = 'G-KNMS5YW69T';
export const PROPERTY = 'properties/503609664';
export const TEST_QUERY = '?tt=test'; // tags hits traffic_type=internal

export const WA = 'a[href*="wa.me"]';
export const TEL = 'a[href^="tel:"]';
export const MAILTO = 'a[href^="mailto:"]';

export const MATRIX = [
  {
    path: '/', race: true,
    tests: [
      { label: 'WhatsApp (first-tap race)', find: WA, expect: 'whatsapp_click', required: true, raceClick: true },
      { label: 'Phone (hero/body)', find: TEL, expect: 'phone_click', required: true },
      { label: 'WhatsApp (footer)', find: `footer ${WA}`, expect: 'whatsapp_click' },
      { label: 'Email (footer)', find: MAILTO, expect: 'email_click' },
    ],
    form: { source: 'homepage-contact', submit: true },
  },
  {
    path: '/cursos-ingles/adultos/',
    tests: [
      { label: 'WhatsApp (body)', find: WA, expect: 'whatsapp_click', required: true },
      { label: 'Phone (body)', find: TEL, expect: 'phone_click', required: true },
    ],
    form: { source: 'curso-adultos', submit: false },
  },
  {
    path: '/examenes-cambridge/b2-first/',
    tests: [
      { label: 'Phone (exam layout)', find: TEL, expect: 'phone_click', required: true },
      { label: 'WhatsApp (exam layout)', find: WA, expect: 'whatsapp_click', required: true },
    ],
    form: { source: 'exam', submit: false },
  },
  {
    path: '/blog/es-dificil-b2-first/',
    tests: [
      { label: 'WhatsApp (blog CTA)', find: WA, expect: 'whatsapp_click' },
      { label: 'Phone (blog)', find: TEL, expect: 'phone_click' },
    ],
    form: { source: 'general', submit: false },
  },
  {
    path: '/blog/academia-cambridge-vs-academia-generica/', // PAA dynamic [slug] template
    tests: [
      { label: 'WhatsApp (PAA)', find: WA, expect: 'whatsapp_click' },
      { label: 'Phone (PAA)', find: TEL, expect: 'phone_click' },
    ],
    form: { source: 'paa', submit: false },
  },
  {
    path: '/academia-ingles-mirasierra/', race: true,
    tests: [
      { label: 'WhatsApp (first-tap race)', find: WA, expect: 'whatsapp_click', required: true, raceClick: true },
      { label: 'Phone (body)', find: TEL, expect: 'phone_click', required: true },
    ],
    form: { source: 'mirasierra', submit: false },
  },
  {
    path: '/academias-ingles-madrid/',
    tests: [
      { label: 'WhatsApp (hub)', find: WA, expect: 'whatsapp_click' },
      { label: 'Phone (hub)', find: TEL, expect: 'phone_click' },
    ],
  },
  {
    path: '/precios/',
    tests: [
      { label: 'WhatsApp (pricing)', find: WA, expect: 'whatsapp_click', required: true },
      { label: 'Phone (pricing)', find: TEL, expect: 'phone_click', required: true },
    ],
    form: { source: 'precios', submit: false },
  },
  {
    path: '/contacto/',
    tests: [
      { label: 'Phone (contact)', find: TEL, expect: 'phone_click', required: true },
      { label: 'WhatsApp (contact)', find: WA, expect: 'whatsapp_click', required: true },
      { label: 'Email (contact)', find: MAILTO, expect: 'email_click', required: true },
    ],
    form: { source: 'contacto', submit: true },
  },
  {
    path: '/reservar-clase/',
    tests: [
      { label: 'Phone (sidebar)', find: TEL, expect: 'phone_click', required: true },
    ],
    form: { source: 'reservar-clase', submit: true, native: true },
  },
  {
    path: '/gracias/',
    tests: [
      { label: 'WhatsApp (thanks)', find: WA, expect: 'whatsapp_click', required: true },
      { label: 'Phone (thanks)', find: TEL, expect: 'phone_click', required: true },
      { label: 'Email (thanks)', find: MAILTO, expect: 'email_click', required: true },
    ],
  },
  {
    path: '/linguaskill/',
    tests: [
      { label: 'WhatsApp (linguaskill)', find: WA, expect: 'whatsapp_click' },
      { label: 'Phone (linguaskill)', find: TEL, expect: 'phone_click' },
    ],
    form: { source: 'blog-linguaskill-guia', submit: false },
  },
];

// Popup test (run with --popup): waits 41s on this page, fills the popup, submits.
export const POPUP_PAGE = '/cursos-ingles/primaria/';

export const TEST_LEAD = {
  name: 'PRUEBA TEST - IGNORAR',
  email: 'DANNYAIAGENTS@gmail.com',
  phone: '+34604910611',
  level: 'adulto',
};
