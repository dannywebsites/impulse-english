/**
 * Fuente única de verdad para las zonas/barrios con página propia.
 *
 * La usan LocationsSection (home) y NearbyAreas (páginas de barrio), de forma
 * que el anillo de enlaces laterales queda siempre completo: al añadir un
 * barrio nuevo aquí, aparece automáticamente en todas las páginas existentes.
 *
 * Reglas de enlazado interno del proyecto: sin www y siempre con barra final.
 */
export interface BarrioArea {
  name: string;
  href: string;
}

export const BARRIO_AREAS: BarrioArea[] = [
  { name: "Barrio del Pilar", href: "/academia-ingles-barrio-del-pilar/" },
  { name: "La Vaguada", href: "/academia-ingles-la-vaguada/" },
  { name: "Peñagrande", href: "/academia-ingles-penagrande/" },
  { name: "La Ventilla", href: "/academia-ingles-la-ventilla/" },
  { name: "La Paz", href: "/academia-ingles-la-paz/" },
  { name: "Plaza Castilla", href: "/academia-ingles-plaza-castilla/" },
  { name: "Tetuán", href: "/academia-ingles-tetuan/" },
  { name: "Cuatro Torres", href: "/academia-ingles-cuatro-torres/" },
  { name: "Mirasierra", href: "/academia-ingles-mirasierra/" },
  { name: "Las Tablas", href: "/academia-ingles-las-tablas/" },
  { name: "Montecarmelo", href: "/academia-ingles-montecarmelo/" },
  { name: "Arroyo del Fresno", href: "/academia-ingles-arroyo-del-fresno/" },
  { name: "Valdezarza", href: "/academia-ingles-valdezarza/" },
  { name: "Chamartín", href: "/academia-ingles-chamartin/" },
  { name: "Sanchinarro", href: "/academia-ingles-sanchinarro/" }
];

/** Hub que agrupa todas las páginas de barrio (Tier 2). */
export const BARRIOS_HUB_HREF = "/academias-ingles-madrid/por-barrios/";
