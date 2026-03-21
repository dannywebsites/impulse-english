const CORE_BRAND = 'Impulse English Academy La Vaguada';
const BARRIO_SUFFIX = 'Barrio del Pilar';
const SHORT_BRAND = 'Impulse English La Vaguada';
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
