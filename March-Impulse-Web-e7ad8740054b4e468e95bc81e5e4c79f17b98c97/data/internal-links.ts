// Internal link resolver: maps reference names from PAA-opportunities.csv to actual URLs

export const internalLinkMap: Record<string, { url: string; anchorText: string }> = {
  // Cambridge exam pages
  'B2 page': { url: '/examenes-cambridge/b2-first/', anchorText: 'preparación B2 First' },
  'C1 Guide': { url: '/examenes-cambridge/c1-advanced/', anchorText: 'guía C1 Advanced' },
  'B1 Guide': { url: '/examenes-cambridge/b1-preliminary/', anchorText: 'guía B1 Preliminary' },
  'A2 Guide': { url: '/examenes-cambridge/', anchorText: 'exámenes Cambridge' },
  'Cambridge Hub': { url: '/examenes-cambridge/', anchorText: 'exámenes Cambridge' },
  'Escala Cambridge': { url: '/blog/escala-cambridge/', anchorText: 'escala Cambridge' },
  'Registro Cambridge': { url: '/blog/registro-cambridge/', anchorText: 'registro Cambridge' },
  'Ejercicios B2': { url: '/blog/ejercicios-b2-cambridge/', anchorText: 'ejercicios B2 Cambridge' },
  'Libros Cambridge': { url: '/blog/libros-cambridge-recursos/', anchorText: 'libros Cambridge' },
  'Precios Cambridge': { url: '/examenes-cambridge/fechas-precios/', anchorText: 'precios exámenes Cambridge' },

  // Linguaskill pages
  'Linguaskill page': { url: '/linguaskill/', anchorText: 'guía Linguaskill' },
  'Linguaskill Online Casa': { url: '/blog/linguaskill-online-casa/', anchorText: 'Linguaskill online desde casa' },
  'Certificado Linguaskill': { url: '/blog/certificado-linguaskill/', anchorText: 'certificado Linguaskill' },
  'Precios Linguaskill': { url: '/linguaskill/precios-fechas/', anchorText: 'precios Linguaskill' },
  'Registro Linguaskill': { url: '/blog/registro-linguaskill/', anchorText: 'registro Linguaskill' },

  // Study abroad
  'Extranjero': { url: '/ingles-en-el-extranjero/', anchorText: 'inglés en el extranjero' },
  'Ano Escolar': { url: '/ingles-en-el-extranjero/irlanda/ano-escolar/', anchorText: 'año escolar en Irlanda' },
  'Irlanda': { url: '/ingles-en-el-extranjero/irlanda/', anchorText: 'estudiar inglés en Irlanda' },
  'Canada': { url: '/ingles-en-el-extranjero/canada/', anchorText: 'año escolar en Canadá' },

  // Course pages
  'Cursos Adultos': { url: '/cursos-ingles/adultos/', anchorText: 'cursos de inglés para adultos' },
  'Cursos': { url: '/cursos-ingles/adultos/', anchorText: 'nuestros cursos' },
  'Infantil': { url: '/cursos-ingles/infantil/', anchorText: 'inglés infantil' },
  'Primaria': { url: '/cursos-ingles/primaria/', anchorText: 'inglés primaria' },
  'Secundaria': { url: '/cursos-ingles/secundaria/', anchorText: 'inglés secundaria' },
  'Great Little People': { url: '/cursos-ingles/infantil/', anchorText: 'método Great Little People' },

  // General pages
  'Metodología': { url: '/metodologia/', anchorText: 'nuestra metodología' },
  'Sobre Nosotros': { url: '/sobre-nosotros/', anchorText: 'sobre nosotros' },
  'Contacto': { url: '/contacto/', anchorText: 'contactar' },
  'Home': { url: '/', anchorText: 'Impulse English Academy' },

  // Location pages: Madrid hub + 10 barrio spokes
  'Location pages': { url: '/academias-ingles-madrid/', anchorText: 'academias de inglés en Madrid' },
  'Madrid Hub': { url: '/academias-ingles-madrid/', anchorText: 'academias de inglés en Madrid' },
  'Por Barrios': { url: '/academias-ingles-madrid/por-barrios/', anchorText: 'academias de inglés por barrios' },
  'Barrio del Pilar': { url: '/academia-ingles-barrio-del-pilar/', anchorText: 'academia Barrio del Pilar' },
  'Barrio del Pilar page': { url: '/academia-ingles-barrio-del-pilar/', anchorText: 'academia Barrio del Pilar' },
  'La Vaguada page': { url: '/academia-ingles-la-vaguada/', anchorText: 'academia La Vaguada' },
  'Peñagrande page': { url: '/academia-ingles-penagrande/', anchorText: 'academia Peñagrande' },
  'La Ventilla page': { url: '/academia-ingles-la-ventilla/', anchorText: 'academia La Ventilla' },
  'La Paz page': { url: '/academia-ingles-la-paz/', anchorText: 'academia La Paz' },
  'Plaza Castilla page': { url: '/academia-ingles-plaza-castilla/', anchorText: 'academia Plaza Castilla' },
  'Tetuán page': { url: '/academia-ingles-tetuan/', anchorText: 'academia Tetuán' },
  'Cuatro Torres page': { url: '/academia-ingles-cuatro-torres/', anchorText: 'academia Cuatro Torres' },
  'Mirasierra page': { url: '/academia-ingles-mirasierra/', anchorText: 'academia Mirasierra' },
  'Montecarmelo Las Tablas page': { url: '/academia-ingles-montecarmelo-las-tablas/', anchorText: 'academia Montecarmelo y Las Tablas' },

  // Pages the map never covered, which is why the writer's refs for them resolved to
  // nothing. "Prueba de nivel gratis de 25 minutos" alone was requested 27 times — the
  // single most-linked destination on the site had no entry at all.
  'Prueba de nivel': { url: '/prueba-de-nivel-ingles/', anchorText: 'prueba de nivel gratuita' },
  'Particulares': { url: '/cursos-ingles/particulares/', anchorText: 'clases particulares de inglés' },
  'Online': { url: '/cursos-ingles/online/', anchorText: 'clases de inglés online' },
  'Cursos Overview': { url: '/cursos-ingles/', anchorText: 'cursos de inglés' },
  'Testimonios': { url: '/testimonios/', anchorText: 'opiniones de nuestros alumnos' },
  'Precios': { url: '/precios/', anchorText: 'precios' },
  'Preparación B2 Madrid': { url: '/preparacion-b2-first-madrid/', anchorText: 'preparación B2 First en Madrid' },
};

/**
 * Human-readable names → canonical keys above.
 *
 * The writer emits refs the way a person would say them ("Inglés para secundaria"),
 * while the map was keyed the way the original PAA spreadsheet did ("Secundaria").
 * resolveInternalLinks dropped every mismatch in silence, so 253 of 383 refs across the
 * article collection — 66% — resolved to nothing and six articles rendered a completely
 * empty "Te puede interesar". Nothing failed, because dropping a ref is not an error.
 *
 * Lookup is accent- and case-insensitive (see normalise), so only genuinely different
 * wordings need an entry here; "Sobre nosotros" already matches 'Sobre Nosotros'.
 */
const ALIASES: Record<string, string> = {
  'Prueba de nivel gratis de 25 minutos': 'Prueba de nivel',
  'Exámenes Cambridge': 'Cambridge Hub',
  'Cambridge B2 First': 'B2 page',
  'Cambridge C1 Advanced': 'C1 Guide',
  'Cambridge B1 Preliminary': 'B1 Guide',
  'Inglés para secundaria': 'Secundaria',
  'Inglés para primaria': 'Primaria',
  'Inglés infantil': 'Infantil',
  'Inglés para adultos': 'Cursos Adultos',
  'Clases particulares de inglés': 'Particulares',
  'Inglés online': 'Online',
  'Cursos de inglés': 'Cursos Overview',
  'Linguaskill': 'Linguaskill page',
  'Inglés en el extranjero': 'Extranjero',
  'Estudiar inglés en Irlanda': 'Irlanda',
  'Año escolar en Irlanda': 'Ano Escolar',
  'Año escolar en Canadá': 'Canada',
  'Academias de inglés en Madrid': 'Madrid Hub',
  'Academias de inglés por barrios en Madrid': 'Por Barrios',
  'Academia de inglés en Barrio del Pilar': 'Barrio del Pilar page',
  'Academia de inglés en La Vaguada': 'La Vaguada page',
  'Academia de inglés en Tetuán': 'Tetuán page',
  'Fechas y precios exámenes Cambridge': 'Precios Cambridge',
  'Preparación B2 First en Madrid': 'Preparación B2 Madrid',
  // No dedicated page exists for either. The Cambridge hub is the closest real
  // destination rather than the nearest-sounding blog post.
  'Certificaciones de inglés en Madrid': 'Cambridge Hub',
  'Centros examinadores Cambridge en Madrid': 'Cambridge Hub',
};

/** Lowercase, strip accents, collapse whitespace — so casing and tildes cannot break a ref. */
const normalise = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

// Built once: normalised form → canonical key. Aliases resolve through their target, so
// an alias pointing at a key that later disappears fails loudly here rather than silently
// at render time.
const INDEX: Record<string, string> = {};
for (const key of Object.keys(internalLinkMap)) INDEX[normalise(key)] = key;
for (const [alias, target] of Object.entries(ALIASES)) {
  if (!(target in internalLinkMap)) {
    throw new Error(`internal-links: alias "${alias}" points at "${target}", which is not a key in internalLinkMap.`);
  }
  INDEX[normalise(alias)] = target;
}

/**
 * Look one ref up. Returns null when nothing matches — callers decide how loud to be.
 * Exported so the gate (scripts/verify-links) uses the exact same resolution the page
 * does, rather than a second implementation that can disagree with it.
 */
export function resolveInternalLink(ref: string): { url: string; anchorText: string } | null {
  const key = INDEX[normalise(ref)];
  return key ? internalLinkMap[key] : null;
}

/** Every ref this build could not resolve, for the gate to read after a render. */
export const unresolvedInternalLinks = new Set<string>();

/**
 * Resolves a list of internal link reference names into actual link objects.
 *
 * Unresolved refs are recorded and warned about rather than dropped in silence. The
 * previous version filtered them out with no signal at all, which is how 66% of the
 * refs in the article collection came to point nowhere without a single build failing.
 * Run `npm run verify:links` to fail on it.
 */
export function resolveInternalLinks(refs: string[]): { url: string; anchorText: string }[] {
  const out: { url: string; anchorText: string }[] = [];
  for (const raw of refs) {
    const ref = raw.trim();
    if (!ref) continue;
    const hit = resolveInternalLink(ref);
    if (hit) {
      out.push(hit);
    } else if (!unresolvedInternalLinks.has(ref)) {
      unresolvedInternalLinks.add(ref);
      console.warn(`[internal-links] unresolved ref: "${ref}" — add it to ALIASES or internalLinkMap in data/internal-links.ts`);
    }
  }
  return out;
}
