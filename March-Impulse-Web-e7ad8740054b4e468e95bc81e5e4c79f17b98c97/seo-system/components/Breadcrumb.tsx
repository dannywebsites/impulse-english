import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';
import { generateBreadcrumbSchema, businessInfo } from '../utils/schemaData';

export interface BreadcrumbItem {
  label: string;
  href?: string; // Optional - if not provided, it's the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark'; // light for dark backgrounds, dark for light backgrounds
  showHome?: boolean;
  className?: string;
}

export default function Breadcrumb({
  items,
  variant = 'light',
  showHome = true,
  className = ''
}: BreadcrumbProps) {
  // Build full breadcrumb list with home
  const fullItems = showHome
    ? [{ label: 'Inicio', href: '/' }, ...items]
    : items;

  // Generate schema data
  const schemaItems = fullItems.map(item => ({
    name: item.label,
    url: item.href ? `${businessInfo.url}${item.href}` : businessInfo.url
  }));

  const textColor = variant === 'light'
    ? 'text-white/70 hover:text-white'
    : 'text-zinc-500 hover:text-zinc-900';

  const activeColor = variant === 'light'
    ? 'text-white'
    : 'text-zinc-900';

  const iconColor = variant === 'light'
    ? 'text-white/50'
    : 'text-zinc-400';

  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${className}`}>
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          const isFirst = index === 0;

          return (
            <React.Fragment key={item.label}>
              {index > 0 && (
                <ChevronRight className={`w-4 h-4 flex-shrink-0 ${iconColor}`} />
              )}
              {isLast || !item.href ? (
                <span className={`${activeColor} font-medium truncate`}>
                  {isFirst && showHome ? <Home className="w-4 h-4" /> : item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className={`${textColor} transition-colors truncate flex items-center gap-1`}
                >
                  {isFirst && showHome ? (
                    <Home className="w-4 h-4" />
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}

// Pre-configured breadcrumb paths for common page types
export const breadcrumbPaths = {
  // Cursos
  cursos: { label: 'Cursos', href: '/ingles-la-vaguada/infantil' },
  infantil: { label: 'Infantil', href: '/ingles-la-vaguada/infantil' },
  primaria: { label: 'Primaria', href: '/ingles-la-vaguada/primaria' },
  secundaria: { label: 'Secundaria', href: '/ingles-la-vaguada/secundaria' },
  adultos: { label: 'Adultos', href: '/ingles-la-vaguada/adultos' },
  particulares: { label: 'Particulares', href: '/ingles-la-vaguada/particulares' },

  // Cambridge
  examenesCambridge: { label: 'Exámenes Cambridge', href: '/examenes-cambridge' },
  b1Preliminary: { label: 'B1 Preliminary', href: '/examenes-cambridge/b1-preliminary' },
  b2First: { label: 'B2 First', href: '/examenes-cambridge/b2-first' },
  linguaskill: { label: 'Linguaskill', href: '/linguaskill' },

  // Blog & Content
  blog: { label: 'Blog', href: '/blogs-impulse' },

  // Locations
  ubicaciones: { label: 'Ubicaciones', href: '/academia-ingles-barrio-del-pilar' },
  barrioDelPilar: { label: 'Barrio del Pilar', href: '/academia-ingles-barrio-del-pilar' },
  laVaguada: { label: 'La Vaguada', href: '/academia-ingles-la-vaguada' },
  penagrande: { label: 'Peñagrande', href: '/academia-ingles-penagrande' },
  laVentilla: { label: 'La Ventilla', href: '/academia-ingles-la-ventilla' },
  laPaz: { label: 'La Paz', href: '/academia-ingles-la-paz' },
  plazaCastilla: { label: 'Plaza Castilla', href: '/academia-ingles-plaza-castilla' },
  tetuan: { label: 'Tetuán', href: '/academia-ingles-tetuan' },
  cuatroTorres: { label: 'Cuatro Torres', href: '/academia-ingles-cuatro-torres' },

  // Academia
  sobreNosotros: { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  metodologia: { label: 'Metodología', href: '/metodologia' },
  testimonios: { label: 'Testimonios', href: '/testimonios' },
  preguntasFrecuentes: { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
  contacto: { label: 'Contacto', href: '/contacto' },

  // Legal
  legal: { label: 'Legal', href: '/aviso-legal' },
  avisoLegal: { label: 'Aviso Legal', href: '/aviso-legal' },
  politicaPrivacidad: { label: 'Política de Privacidad', href: '/politica-privacidad' },
  politicaCookies: { label: 'Política de Cookies', href: '/politica-cookies' },

  // Academias Madrid
  academiasMadrid: { label: 'Academias Madrid', href: '/academias-ingles-madrid' },
};
