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
};

/**
 * Resolves a semicolon-separated list of internal link reference names
 * from the PAA-opportunities CSV into actual link objects.
 */
export function resolveInternalLinks(refs: string[]): { url: string; anchorText: string }[] {
  return refs
    .map(ref => ref.trim())
    .filter(ref => ref in internalLinkMap)
    .map(ref => internalLinkMap[ref]);
}
