// popupVariants.ts — resolves which one-to-one offer to show for a given page,
// based on URL pathname or article category. Used by the timed popup
// (components/CoursePopup.tsx) AND the blog CTAs (OneToOneCTA / InlineOneToOneCTA).
//
// Page-targeting comes from the Search Console landing-page data: traffic on
// impulse-english.es clusters around Cambridge C1, B2, B1 and Linguaskill
// exam pages, plus a kids cluster. Each cluster gets a tailored offer.
// Everything else falls back to a generic one-to-one popup.
//
// SINGLE SOURCE OF TRUTH for one-to-one copy. Group classes aren't running:
// every offer here pitches personalised one-to-one classes, never groups.
//
// The `source` value is what GoHighLevel keys off (it mirrors the `source`
// field the existing LeadForm / reservar-clase forms already send), so the CRM
// can see exactly which page/level produced the lead.

export type PopupKey = 'c1' | 'b2' | 'b1' | 'linguaskill' | 'kids' | 'general';

export interface PopupVariant {
  key: PopupKey;
  /** CEFR level sent to the CRM (empty for the generic offer). */
  level: '' | 'c1' | 'b2' | 'b1' | 'linguaskill';
  /** Tracking value POSTed to the GHL webhook + GA `course_name`. */
  source: string;
  /** Short human label for the exam/topic, e.g. "B2 First" (empty for generic). */
  examLabel: string;
  // --- Popup copy ---
  title: string;
  subtitle: string;
  ctaText: string;
  // --- Blog CTA copy (OneToOneCTA / InlineOneToOneCTA) ---
  /** Headline for the end-of-article CTA block. */
  ctaHeadline: string;
  /** Body paragraph for the end-of-article CTA block (tú voice). */
  ctaBody: string;
  /** One-line hook for the lighter mid-article CTA band. */
  inlineHook: string;
  /** Pre-filled WhatsApp message (encoded before appending to wa.me URL). */
  waMessage: string;
  /** Brand trust line shown under the end CTA (empty to omit). Brand-level, not per-article. */
  proof: string;
}

const CAMBRIDGE_PROOF =
  'Centro Preparador Oficial Cambridge · 100% de aprobados en 2024-2025 · profes certificados TEFL/CELTA';

// Shared closing line reused across offers so the promise stays identical everywhere.
const PROMISE =
  'Déjanos tu nombre, tu teléfono y tu email y te llamamos en menos de 24h para organizar tu prueba de nivel y tu plan de estudio personalizado. Sin compromiso.';

const VARIANTS: Record<PopupKey, PopupVariant> = {
  c1: {
    key: 'c1',
    level: 'c1',
    source: 'popup-c1',
    examLabel: 'C1 Advanced',
    title: '¿Vas a por el C1 Advanced?',
    subtitle:
      'Con clases one-to-one avanzas al ritmo que tú necesitas. Déjanos tu teléfono y te llamamos en menos de 24h para montarte un plan a medida. Sin compromiso.',
    ctaText: 'Quiero mi plan C1',
    ctaHeadline: '¿Quieres aprobar el C1 Advanced en tiempo récord?',
    ctaBody:
      `Con clases one-to-one avanzas al ritmo que tú necesitas y trabajas justo lo que se te atraganta. ${PROMISE}`,
    inlineHook: '¿Preparando el C1 Advanced? Te lo montamos one-to-one, a tu ritmo.',
    waMessage: 'Hola, me interesan las clases one-to-one para preparar el C1 Advanced.',
    proof: CAMBRIDGE_PROOF,
  },
  b2: {
    key: 'b2',
    level: 'b2',
    source: 'popup-b2',
    examLabel: 'B2 First',
    title: '¿Vas a por el B2 First?',
    subtitle:
      'Con clases one-to-one avanzas al ritmo que tú necesitas. Déjanos tu teléfono y te llamamos en menos de 24h para montarte un plan a medida. Sin compromiso.',
    ctaText: 'Quiero mi plan B2',
    ctaHeadline: '¿Quieres aprobar el B2 First en tiempo récord?',
    ctaBody:
      `Con clases one-to-one avanzas al ritmo que tú necesitas y trabajas justo lo que se te atraganta. ${PROMISE}`,
    inlineHook: '¿Preparando el B2 First? Te lo montamos one-to-one, a tu ritmo.',
    waMessage: 'Hola, me interesan las clases one-to-one para preparar el B2 First.',
    proof: CAMBRIDGE_PROOF,
  },
  b1: {
    key: 'b1',
    level: 'b1',
    source: 'popup-b1',
    examLabel: 'B1 Preliminary',
    title: '¿Vas a por el B1 Preliminary?',
    subtitle:
      'Con clases one-to-one avanzas al ritmo que tú necesitas. Déjanos tu teléfono y te llamamos en menos de 24h para montarte un plan a medida. Sin compromiso.',
    ctaText: 'Quiero mi plan B1',
    ctaHeadline: '¿Quieres certificar tu B1 Preliminary a la primera?',
    ctaBody:
      `Con clases one-to-one avanzas al ritmo que tú necesitas y trabajas justo lo que se te atraganta. ${PROMISE}`,
    inlineHook: '¿Preparando el B1 Preliminary? Te lo montamos one-to-one, a tu ritmo.',
    waMessage: 'Hola, me interesan las clases one-to-one para preparar el B1 Preliminary.',
    proof: CAMBRIDGE_PROOF,
  },
  linguaskill: {
    key: 'linguaskill',
    level: 'linguaskill',
    source: 'popup-linguaskill',
    examLabel: 'Linguaskill',
    title: '¿Te certificas con Linguaskill?',
    subtitle:
      'Con clases one-to-one avanzas al ritmo que tú necesitas. Déjanos tu teléfono y te llamamos en menos de 24h para montarte un plan a medida. Sin compromiso.',
    ctaText: 'Quiero mi plan Linguaskill',
    ctaHeadline: '¿Quieres sacar tu Linguaskill en tiempo récord?',
    ctaBody:
      `Con clases one-to-one avanzas al ritmo que tú necesitas y trabajas justo lo que se te atraganta. ${PROMISE}`,
    inlineHook: '¿Preparando el Linguaskill? Te lo montamos one-to-one, a tu ritmo.',
    waMessage: 'Hola, me interesan las clases one-to-one para preparar el Linguaskill.',
    proof: 'Preparación con simulacros reales · profes certificados TEFL/CELTA',
  },
  kids: {
    key: 'kids',
    level: '',
    source: 'popup-kids',
    examLabel: 'niños',
    title: '¿Quieres que tu hijo/a despegue con el inglés?',
    subtitle:
      'Con clases individuales avanza al ritmo que necesita, con un plan hecho a su medida. Déjanos tu teléfono y te llamamos en menos de 24h. Sin compromiso.',
    ctaText: 'Quiero info para mi hijo/a',
    ctaHeadline: '¿Quieres que tu hijo/a despegue con el inglés?',
    ctaBody:
      `Con clases individuales avanza al ritmo que necesita y trabaja justo lo que le cuesta, con un profe para él/ella solo. ${PROMISE}`,
    inlineHook: '¿Quieres que tu hijo/a avance de verdad? Clases individuales a su medida.',
    waMessage: 'Hola, me interesan las clases individuales de inglés para mi hijo/a.',
    proof: 'Profes nativos certificados TEFL/CELTA · en La Vaguada (Madrid)',
  },
  general: {
    key: 'general',
    level: '',
    source: 'popup-general',
    examLabel: 'inglés',
    title: '¿Quieres aprender inglés a tu ritmo?',
    subtitle:
      'Con clases one-to-one avanzas al ritmo que tú necesitas. Déjanos tu teléfono y te llamamos en menos de 24h para montarte un plan a medida. Sin compromiso.',
    ctaText: 'Quiero mi plan',
    ctaHeadline: '¿Quieres avanzar en inglés en tiempo récord?',
    ctaBody:
      `Con clases one-to-one avanzas al ritmo que tú necesitas y trabajas justo lo que se te atraganta. ${PROMISE}`,
    inlineHook: '¿Quieres avanzar de verdad con el inglés? Te lo montamos one-to-one.',
    waMessage: 'Hola, me interesan las clases one-to-one de inglés.',
    proof: 'Profes nativos certificados TEFL/CELTA · en La Vaguada (Madrid)',
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
 * Resolve the offer variant for a pathname. First-match-wins ordering handles
 * pages that mention multiple levels (e.g. `/blog/diferencia-b2-c1` -> C1,
 * `/blog/b1-vs-b2-...` -> B2), biasing toward the higher / more specific target.
 * Kids is checked before the generic fallback so children's articles stop
 * silently inheriting the adult offer.
 */
export function resolveVariant(pathname: string): PopupVariant {
  const p = normalize(pathname).toLowerCase();

  if (p.includes('linguaskill')) return VARIANTS.linguaskill;
  if (p.includes('c1') || p.includes('advanced')) return VARIANTS.c1;
  if (p.includes('b2') || p.includes('first')) return VARIANTS.b2;
  if (p.includes('b1') || p.includes('preliminary')) return VARIANTS.b1;
  if (
    p.includes('nino') ||
    p.includes('niño') || // niño with ñ, defensive (URLs are usually ascii)
    p.includes('hijo') ||
    p.includes('infantil') ||
    p.includes('bebe') ||
    p.includes('primaria')
  )
    return VARIANTS.kids;
  return VARIANTS.general;
}

/** Alias with an offer-centric name for the blog CTAs (same resolver). */
export const resolveOffer = resolveVariant;

/**
 * Resolve the offer from an article's `category` field. Used by PAAArticlePage,
 * which knows its category directly and shouldn't have to parse URLs.
 * Falls back to the generic offer for unmapped categories.
 */
export function offerForCategory(category: string | undefined): PopupVariant {
  switch (category) {
    case 'Cambridge C1 Advanced':
      return VARIANTS.c1;
    case 'Cambridge B2 First':
      return VARIANTS.b2;
    case 'Cambridge B1 Preliminary':
    case 'Cambridge A2 Key':
      return VARIANTS.b1;
    case 'Linguaskill':
      return VARIANTS.linguaskill;
    case 'Kids Early Childhood':
      return VARIANTS.kids;
    default:
      return VARIANTS.general;
  }
}

/** Build a ready-to-use WhatsApp deep link with the offer's pre-filled message. */
export function waLink(whatsappUrl: string, offer: PopupVariant): string {
  return `${whatsappUrl}?text=${encodeURIComponent(offer.waMessage)}`;
}
