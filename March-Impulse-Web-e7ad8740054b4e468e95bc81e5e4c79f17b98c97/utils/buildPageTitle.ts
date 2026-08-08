import { NAP } from './napData';

// The brand chain reads from napData so the title says exactly what the schema, the GBP and
// every citation say. Until 2026-08-08 these were hardcoded as "Impulse English Academy
// La Vaguada" / "Impulse English La Vaguada" — the locality-bearing name that napData:8-11
// retired, which put the retired entity on the <title> of all 190 pages, the strongest
// entity signal on the site. The locality still reaches the title through BARRIO_SUFFIX,
// where it belongs: as a place, not as part of the name.
const CORE_BRAND = NAP.name;
const BARRIO_SUFFIX = 'Barrio del Pilar';
const SHORT_BRAND = NAP.shortName;
const SEP = ' | ';

export function buildPageTitle(theme: string): string {
  const barrioBonus = `${theme}${SEP}${CORE_BRAND}${SEP}${BARRIO_SUFFIX}`;
  const standard = `${theme}${SEP}${CORE_BRAND}`;
  const emergency = `${theme}${SEP}${SHORT_BRAND}`;

  // Barrio Bonus: short themes get the full location chain
  if (theme.length < 15 && barrioBonus.length <= 70) {
    return barrioBonus;
  }

  // Standard: core brand fits within 70 chars
  if (standard.length <= 70) {
    return standard;
  }

  // Emergency: shortened brand for long themes
  if (emergency.length <= 70) {
    return emergency;
  }

  // Hard safety: truncate theme to fit within 70 chars
  const maxTheme = 70 - SEP.length - SHORT_BRAND.length;
  return `${theme.slice(0, maxTheme)}${SEP}${SHORT_BRAND}`;
}
