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

const VARIANTS: Record<PopupKey, PopupVariant> = {
  c1: {
    key: 'c1',
    level: 'c1',
    source: 'popup-c1',
    title: '¿Vas a por el C1 Advanced?',
    subtitle:
      'Te montamos un plan para conseguirlo en tiempo récord. Déjanos tu email y teléfono y te llamamos para contarte cómo.',
    ctaText: 'Quiero mi plan C1',
  },
  b2: {
    key: 'b2',
    level: 'b2',
    source: 'popup-b2',
    title: 'Prepara tu B2 First con un plan claro',
    subtitle:
      'Grupos reducidos y simulacros reales hasta aprobar. Déjanos tus datos y te contamos cómo lo hacemos.',
    ctaText: 'Quiero info del B2',
  },
  b1: {
    key: 'b1',
    level: 'b1',
    source: 'popup-b1',
    title: 'Aprueba tu B1 Preliminary a la primera',
    subtitle:
      'Te decimos exactamente qué necesitas para certificarte. Déjanos tu email y teléfono y te ayudamos.',
    ctaText: 'Quiero info del B1',
  },
  linguaskill: {
    key: 'linguaskill',
    level: 'linguaskill',
    source: 'popup-linguaskill',
    title: 'Certifícate con Linguaskill',
    subtitle:
      'Centro autorizado, con resultados oficiales rápido. Déjanos tu email y teléfono y resolvemos tus dudas.',
    ctaText: 'Quiero info Linguaskill',
  },
  general: {
    key: 'general',
    level: '',
    source: 'popup-general',
    title: '¿Cursos online o presenciales?',
    subtitle:
      'Tenemos ambos. Déjanos tu email y teléfono y te decimos cuál encaja mejor con tu nivel y tus horarios.',
    ctaText: 'Solicita información',
  },
};

/** Pages where the popup must never appear (already forms / thank-you / legal). */
const SUPPRESSED = new Set<string>([
  '/reservar-clase',
  '/contacto',
  '/gracias',
  '/politica-privacidad',
  '/politica-cookies',
  '/aviso-legal',
]);

function normalize(pathname: string): string {
  // Strip a single trailing slash so '/contacto' and '/contacto/' match.
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

export function isSuppressed(pathname: string): boolean {
  return SUPPRESSED.has(normalize(pathname).toLowerCase());
}

/**
 * Resolve the popup variant for a pathname. First-match-wins ordering handles
 * pages that mention multiple levels (e.g. `/blog/diferencia-b2-c1` -> C1,
 * `/blog/b1-vs-b2-...` -> B2), biasing toward the higher / more specific target.
 */
export function resolveVariant(pathname: string): PopupVariant {
  const p = normalize(pathname).toLowerCase();

  if (p.includes('linguaskill')) return VARIANTS.linguaskill;
  if (p.includes('c1') || p.includes('advanced')) return VARIANTS.c1;
  if (p.includes('b2') || p.includes('first')) return VARIANTS.b2;
  if (p.includes('b1') || p.includes('preliminary')) return VARIANTS.b1;
  return VARIANTS.general;
}
