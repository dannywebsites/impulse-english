// popupVariants.ts — resolves which timed-popup variant to show for a given
// page, based on the URL pathname. Used by components/CoursePopup.tsx.
//
// Page-targeting comes from the Search Console landing-page data: traffic on
// impulse-english.es clusters around Cambridge C1, B2, B1 and Linguaskill
// exam pages, so each cluster gets a tailored lead-capture popup. Everything
// else falls back to a generic "online + in-person courses" popup.
//
// The `source` value is what GoHighLevel keys off (it mirrors the `source`
// field the existing LeadForm / reservar-clase forms already send), so the CRM
// can see exactly which page/level produced the lead.

export type PopupKey = 'c1' | 'b2' | 'b1' | 'linguaskill' | 'general';

export interface PopupVariant {
  key: PopupKey;
  /** CEFR level sent to the CRM (empty for the generic popup). */
  level: '' | 'c1' | 'b2' | 'b1' | 'linguaskill';
  /** Tracking value POSTed to the GHL webhook + GA `course_name`. */
  source: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

/* Every variant now sells the same thing — the free 25-minute prueba de nivel
   with the Director de Estudios — and only the *hook* changes by page. The old
   variants asked for "info", which is a weaker ask than a concrete appointment
   and gave the visitor nothing in return for their details. The level targeting
   is kept because it's what makes the hook feel written for the page. */
const VARIANTS: Record<PopupKey, PopupVariant> = {
  c1: {
    key: 'c1',
    level: 'c1',
    source: 'popup-c1',
    title: '¿Estás listo de verdad para el C1 Advanced?',
    subtitle:
      'Averígualo antes de pagar la tasa. Prueba de nivel gratuita de 25 minutos con nuestro Director de Estudios: tu nivel exacto y un plan para llegar al C1. Sin ningún tipo de compromiso.',
    ctaText: 'Pide tu prueba de nivel',
  },
  b2: {
    key: 'b2',
    level: 'b2',
    source: 'popup-b2',
    title: '¿Cuánto te falta de verdad para el B2 First?',
    subtitle:
      'En 25 minutos te decimos tu nivel exacto, qué destrezas te están frenando y en cuánto tiempo puedes presentarte. Gratis y sin compromiso.',
    ctaText: 'Pide tu prueba de nivel',
  },
  b1: {
    key: 'b1',
    level: 'b1',
    source: 'popup-b1',
    title: '¿Ya llegas al B1 Preliminary?',
    subtitle:
      'Descúbrelo en una prueba de nivel gratuita de 25 minutos. Te llevas tu nivel MCER exacto y un plan de estudios personalizado. Sin compromiso.',
    ctaText: 'Pide tu prueba de nivel',
  },
  linguaskill: {
    key: 'linguaskill',
    level: 'linguaskill',
    source: 'popup-linguaskill',
    title: '¿Sacarás la nota de Linguaskill que te piden?',
    subtitle:
      'Compruébalo antes de examinarte. Prueba de nivel gratuita de 25 minutos con nuestro Director de Estudios, con tu nivel real y los plazos para llegar. Sin compromiso.',
    ctaText: 'Pide tu prueba de nivel',
  },
  general: {
    key: 'general',
    level: '',
    source: 'popup-general',
    title: '¿Sabes cuál es tu nivel real de inglés?',
    subtitle:
      'Pide tu prueba de nivel gratuita: 25 minutos con nuestro Director de Estudios y te llevas tu nivel MCER exacto, tus puntos débiles y un plan de estudios personalizado. Sin ningún tipo de compromiso.',
    ctaText: 'Pide tu prueba de nivel',
  },
};

/** Pages where the popup must never appear (already forms / thank-you / legal). */
const SUPPRESSED = new Set<string>([
  '/prueba-de-nivel-ingles',
  '/contacto',
  '/gracias',
  '/politica-privacidad',
  '/politica-cookies',
  '/aviso-legal',
]);

/**
 * Whole sections where the popup must never appear. The popup is for the main
 * site pages only: blog traffic arrives from search mid-question and is reading,
 * not shopping, so an overlay there interrupts the answer it came for. The blog
 * already converts through its own in-article CTAs.
 *
 * Matches the section root and everything beneath it ('/blog', '/blog/',
 * '/blog/<slug>') without catching an unrelated sibling like '/blogueros'.
 */
const SUPPRESSED_PREFIXES: readonly string[] = ['/blog'];

function normalize(pathname: string): string {
  // Strip a single trailing slash so '/contacto' and '/contacto/' match.
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

export function isSuppressed(pathname: string): boolean {
  const p = normalize(pathname).toLowerCase();
  if (SUPPRESSED.has(p)) return true;
  return SUPPRESSED_PREFIXES.some((prefix) => p === prefix || p.startsWith(`${prefix}/`));
}

/**
 * Resolve the popup variant for a pathname. First-match-wins ordering handles
 * pages that mention multiple levels (e.g. `/examenes-cambridge/c1-advanced/`
 * -> C1, `/preparacion-b2-first-madrid/` -> B2), biasing toward the higher /
 * more specific target.
 *
 * Only ever called for pages that survived `isSuppressed`, so blog paths never
 * reach it — the level matching now serves the exam and course pages.
 */
export function resolveVariant(pathname: string): PopupVariant {
  const p = normalize(pathname).toLowerCase();

  if (p.includes('linguaskill')) return VARIANTS.linguaskill;
  if (p.includes('c1') || p.includes('advanced')) return VARIANTS.c1;
  if (p.includes('b2') || p.includes('first')) return VARIANTS.b2;
  if (p.includes('b1') || p.includes('preliminary')) return VARIANTS.b1;
  return VARIANTS.general;
}
