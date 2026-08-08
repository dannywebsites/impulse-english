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

export type PopupKey = 'c1' | 'b2' | 'b1' | 'linguaskill' | 'extranjero' | 'empresas' | 'general';

export interface PopupVariant {
  key: PopupKey;
  /** CEFR level sent to the CRM (empty for the generic popup). */
  level: '' | 'c1' | 'b2' | 'b1' | 'linguaskill';
  /** Tracking value POSTed to the GHL webhook + GA `course_name`. */
  source: string;
  title: string;
  subtitle: string;
  ctaText: string;
  /**
   * Overrides the shared benefit list. Only the study-abroad variant uses this:
   * every other popup sells the same 25-minute level test with JP, but a family
   * asking about a school year abroad is not asking for a CEFR grade, and the
   * person they will actually speak to is Daniel.
   */
  benefits?: string[];
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
  // Sin esta variante, /ingles-para-empresas/ caía en `general` y le ofrecía a
  // un responsable de RR. HH. una prueba de nivel personal de 25 minutos para
  // saber "su" nivel de inglés. La conversión de esa página no es una persona
  // midiéndose: es un presupuesto para un equipo.
  empresas: {
    key: 'empresas',
    level: '',
    source: 'popup-empresas',
    title: '¿Formación de inglés para vuestro equipo?',
    subtitle:
      'Decidnos cuántas personas sois, en qué formato y en qué horario, y os pasamos un presupuesto por escrito. La formación es bonificable a través de FUNDAE.',
    ctaText: 'Pedir presupuesto',
    benefits: [
      'En vuestras oficinas, en la academia o en directo online',
      'Prueba de nivel gratuita de 25 minutos a cada persona del equipo',
      'Bonificable a través de FUNDAE',
      'Certificado Linguaskill de Cambridge en 48 horas',
    ],
  },
  extranjero: {
    key: 'extranjero',
    level: '',
    source: 'popup-extranjero',
    title: '¿Estás pensando en mandar a tu hijo a Irlanda?',
    subtitle:
      'Habla directamente con Daniel, cofundador irlandés de la academia y quien organiza los programas en el extranjero. Te dice con franqueza qué encaja, qué no y cuánto cuesta de verdad. Sin compromiso.',
    ctaText: 'Habla con Daniel',
    benefits: [
      'Qué programa encaja según la edad, el curso y el nivel',
      'Cómo funcionan la familia de acogida y el colegio',
      'El desglose real de lo que entra en el precio y lo que no',
      'Con Daniel Fitzpatrick, cofundador y responsable de los programas',
    ],
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

  // Checked first, and by full path segment. The study-abroad pages are about a
  // programme, not an exam level, so an accidental substring match into the
  // Cambridge variants would offer a school-year family a C1 level test.
  if (p.startsWith('/ingles-en-el-extranjero')) return VARIANTS.extranjero;
  // Mismo motivo y mismo sitio: por segmento completo y antes que las pruebas de
  // nivel, que buscan subcadenas y se quedarían con este path por accidente.
  if (p.startsWith('/ingles-para-empresas')) return VARIANTS.empresas;

  if (p.includes('linguaskill')) return VARIANTS.linguaskill;
  if (p.includes('c1') || p.includes('advanced')) return VARIANTS.c1;
  if (p.includes('b2') || p.includes('first')) return VARIANTS.b2;
  if (p.includes('b1') || p.includes('preliminary')) return VARIANTS.b1;
  return VARIANTS.general;
}
