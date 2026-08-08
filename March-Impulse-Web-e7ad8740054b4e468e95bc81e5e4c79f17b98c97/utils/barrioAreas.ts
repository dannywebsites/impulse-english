/**
 * Fuente única de verdad para las zonas/barrios con página propia.
 *
 * La usan LocationsSection (home), NearbyAreas (páginas de barrio) y el hub de
 * ubicaciones (/academias-ingles-madrid/por-barrios/), de forma que el anillo de
 * enlaces laterales queda siempre completo: al añadir un barrio nuevo aquí,
 * aparece automáticamente en todas las páginas existentes.
 *
 * Reglas de enlazado interno del proyecto: sin www y siempre con barra final.
 */
export interface BarrioArea {
  name: string;
  href: string;
  /**
   * Agrupación por FORMA del trayecto, que es el único criterio que distingue de
   * verdad a un barrio de otro y que además está contrastado. La usa el hub para
   * no presentar quince tarjetas idénticas.
   */
  group?: 'directo' | 'transbordo' | 'l7-bus';
  /**
   * Cómo se llega. Se publica la RUTA, no un minutaje inventado: es la doctrina
   * que Danny fijó el 2026-08-08 (c3a4d9e) y que verify:facts vigila. Ojo al
   * copiar de las páginas de barrio: varias siguen publicando cifras retiradas
   * ("a solo 500 metros" en Barrio del Pilar) que sobreviven sólo porque esas rutas
   * no están en facts.json. No se traen aquí.
   * El único minutaje permitido es el andando canónico: 4 minutos.
   */
  access?: string;
  /** Para quién está escrita esa página. Máx. ~70 caracteres, sin repetir frases. */
  serves?: string;
}

export const BARRIO_AREAS: BarrioArea[] = [
  { name: "Barrio del Pilar", href: "/academia-ingles-barrio-del-pilar/", group: 'directo',
    access: "Metro Barrio del Pilar (línea 9), a cuatro minutos andando",
    serves: "El barrio de la academia: se viene andando" },
  { name: "La Vaguada", href: "/academia-ingles-la-vaguada/", group: 'directo',
    access: "Junto al centro comercial La Vaguada, en el propio Barrio del Pilar",
    serves: "Quien ya baja al centro comercial entre semana" },
  // 2026-08-08, resuelto por Danny: Peñagrande es la LÍNEA 7, no la 9, y desde el
  // barrio son 10-15 minutos ANDANDO. El sitio publicaba "línea 9 · 3 minutos" en el
  // H1, el título, el hero, la cápsula y tres FAQ a la vez, así que el error se
  // corroboraba solo y ningún cotejo podía cazarlo. Va en 'l7-bus' y no en 'directo'.
  { name: "Peñagrande", href: "/academia-ingles-penagrande/", group: 'l7-bus',
    access: "De 10 a 15 minutos andando por la Av. de Peñagrande",
    serves: "El barrio de al lado: se viene a pie, sin coger el metro" },
  { name: "La Ventilla", href: "/academia-ingles-la-ventilla/", group: 'directo',
    access: "Línea 9: Ventilla → Barrio del Pilar, una parada",
    serves: "Una parada de metro, sin cambiar de línea" },
  { name: "La Paz", href: "/academia-ingles-la-paz/", group: 'l7-bus',
    access: "Autobuses 147, 42 y 83, o caminando desde el hospital",
    serves: "Personal sanitario y vecinos del entorno de La Paz" },
  { name: "Plaza Castilla", href: "/academia-ingles-plaza-castilla/", group: 'directo',
    access: "Línea 9 directa · 2 paradas",
    serves: "Quien hace transbordo a diario en el intercambiador" },
  { name: "Tetuán", href: "/academia-ingles-tetuan/", group: 'l7-bus',
    access: "Bus 147 directo desde el eje de la Castellana, sin transbordos",
    serves: "Adultos que evitan el doble transbordo de metro" },
  { name: "Cuatro Torres", href: "/academia-ingles-cuatro-torres/", group: 'transbordo',
    access: "L10 Begoña a Plaza de Castilla, y L9 a Barrio del Pilar",
    serves: "Inglés de negocios para quien trabaja en las torres" },
  { name: "Mirasierra", href: "/academia-ingles-mirasierra/", group: 'directo',
    access: "Línea 9 directa desde Mirasierra, sin transbordo",
    serves: "Familias con los colegios de la zona y el Parque Norte" },
  { name: "Las Tablas", href: "/academia-ingles-las-tablas/", group: 'transbordo',
    access: "Línea 10 hasta Plaza de Castilla y cambio a la línea 9",
    serves: "Adultos que salen de la oficina, hasta las 21:30" },
  { name: "Montecarmelo", href: "/academia-ingles-montecarmelo/", group: 'directo',
    access: "Línea 9 directa hasta Barrio del Pilar, sin transbordo",
    serves: "Familias del PAU, con inglés desde los 2 años" },
  { name: "Arroyo del Fresno", href: "/academia-ingles-arroyo-del-fresno/", group: 'l7-bus',
    access: "Línea 7 desde Arroyofresno · 3 paradas · sin transbordos",
    serves: "Un barrio nuevo, sin academia propia cerca" },
  { name: "Valdezarza", href: "/academia-ingles-valdezarza/", group: 'l7-bus',
    access: "Línea 7 · 2 paradas · Antonio Machado y Peñagrande",
    serves: "Universitarios y adultos de la zona de Antonio Machado" },
  { name: "Chamartín", href: "/academia-ingles-chamartin/", group: 'transbordo',
    access: "Línea 10 hasta Plaza de Castilla y línea 9 · 3 paradas en total",
    serves: "Quien llega en Cercanías a la estación de Chamartín" },
  { name: "Sanchinarro", href: "/academia-ingles-sanchinarro/", group: 'transbordo',
    access: "Metro ligero ML1 hasta Las Tablas, enlace con la línea 10",
    serves: "Sin metro convencional: muchos eligen las clases online" }
];

/** Hub que agrupa todas las páginas de barrio (Tier 2). */
export const BARRIOS_HUB_HREF = "/academias-ingles-madrid/por-barrios/";

/** Los tres grupos del hub, en el orden en que se presentan. */
export const BARRIO_GROUPS: { id: NonNullable<BarrioArea['group']>; title: string; blurb: string }[] = [
  { id: 'directo', title: 'Sin transbordo: la línea 9, o andando',
    blurb: 'La academia está en Barrio del Pilar, sobre la propia línea 9. Desde estos barrios se llega sin cambiar de tren.' },
  { id: 'transbordo', title: 'Un transbordo en Plaza de Castilla',
    blurb: 'Desde el corredor de la línea 10 se baja a Plaza de Castilla y allí se enlaza con la 9. Es un cambio, y preferimos decirlo.' },
  { id: 'l7-bus', title: 'Línea 7, autobús o andando',
    blurb: 'La línea 7 y el autobús 147 cubren el otro lado del distrito, en varios casos mejor que el metro.' }
];
