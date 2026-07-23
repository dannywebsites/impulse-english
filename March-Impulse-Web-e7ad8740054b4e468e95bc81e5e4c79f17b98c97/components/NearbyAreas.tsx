import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BARRIO_AREAS, BARRIOS_HUB_HREF } from '../utils/barrioAreas';

interface NearbyAreasProps {
  /** href de la página actual, para excluirla del listado (p. ej. "/academia-ingles-tetuan/"). */
  currentHref: string;
  /**
   * "accent" — caja azul clara, dentro del bloque de mapa/ubicación.
   * "plain"  — caja blanca sobre fondo gris, como sección independiente.
   */
  variant?: 'accent' | 'plain';
  className?: string;
}

/**
 * Enlaces laterales entre páginas de barrio + enlaces hacia arriba al hub y a
 * la home. La home es la página pilar para los términos de cabecera, así que
 * el enlace de subida usa su misma frase objetivo como texto ancla.
 */
export default function NearbyAreas({ currentHref, variant = 'accent', className = '' }: NearbyAreasProps) {
  const others = BARRIO_AREAS.filter((area) => area.href !== currentHref);
  const isAccent = variant === 'accent';

  const boxClass = isAccent
    ? 'mt-8 p-4 bg-accent-blue/5 rounded-xl border border-accent-blue/10'
    : 'p-6 bg-white rounded-xl border border-zinc-200';
  const labelClass = isAccent
    ? 'text-accent-blue font-medium text-sm mb-3'
    : 'text-zinc-900 font-medium mb-4';
  const separatorClass = isAccent ? 'text-accent-blue/50' : 'text-zinc-400';
  const upLinksClass = isAccent
    ? 'mt-4 pt-4 border-t border-accent-blue/10 flex flex-col gap-2 items-start'
    : 'mt-4 flex flex-col gap-2 items-start';

  return (
    <div className={`${boxClass} ${className}`}>
      <p className={labelClass}>
        <strong>Servimos también zonas cercanas:</strong>
      </p>
      <div className="flex flex-wrap gap-2">
        {others.map((area, index) => (
          <React.Fragment key={area.href}>
            {index > 0 && <span className={separatorClass}>•</span>}
            <a href={area.href} className="text-accent-blue hover:underline text-sm">
              {area.name}
            </a>
          </React.Fragment>
        ))}
      </div>
      <div className={upLinksClass}>
        <a
          href={BARRIOS_HUB_HREF}
          className="text-accent-blue hover:underline text-sm font-medium inline-flex items-center gap-1"
        >
          Ver todas las ubicaciones en Madrid <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="/"
          className="text-accent-blue hover:underline text-sm font-medium inline-flex items-center gap-1"
        >
          Nuestra academia de inglés en La Vaguada y Barrio del Pilar <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
