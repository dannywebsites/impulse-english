import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { NAP } from '../utils/napData';

/**
 * Price beside address, hours and how to get here.
 *
 * Price prose comes in as children so the figures stay in the page source — the
 * GEO scorecard's Pricing element reads the page .tsx, and the numbers differ per
 * course anyway. Address, hours and phone render from utils/napData.ts so they
 * cannot drift from the single source of truth.
 */

interface Props {
  heading: string;
  /** Price copy for this course. Plain JSX — never dangerouslySetInnerHTML. */
  children: React.ReactNode;
  /** Transit line; defaults to the standard directions from the academy. */
  transport?: React.ReactNode;
}

const DEFAULT_TRANSPORT = (
  <>
    Metro Barrio del Pilar (Línea 9) a 3 min andando · Metro Peñagrande y Metro Herrera Oria
    (Línea 7) · buses 147, 42 y 83, parada Ginzo de Limia - Ferrol, a 1 min · el centro comercial
    La Vaguada está a 1 min.
  </>
);

export default function PriceLocationCards({ heading, children, transport }: Props) {
  return (
    <section className="section bg-white px-6">
      <div className="container-narrow">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow mb-4">Precios y ubicación</span>
          <h2 className="t-h2 mb-5 text-zinc-900">{heading}</h2>
          <span className="rule"></span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <div className="t-body space-y-4 text-zinc-600">{children}</div>
            <a href="/precios/" className="btn-outline btn-sm mt-6">
              Ver todos los precios
            </a>
          </div>

          <div className="card p-8">
            <h3 className="t-h3 mb-5 text-zinc-900">Dónde estamos y cuándo abrimos</h3>
            <ul className="t-body space-y-4 text-zinc-600">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent-blue" />
                <span>{NAP.fullAddress}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent-blue" />
                <span>
                  {NAP.openingHoursText.map((h) => (
                    <span key={h} className="block">
                      {h}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent-blue" />
                <span>
                  <a href={NAP.phoneTel} className="font-semibold text-accent-blue hover:underline">
                    {NAP.phone}
                  </a>
                </span>
              </li>
            </ul>
            <p className="t-small mt-5 text-zinc-500">{transport ?? DEFAULT_TRANSPORT}</p>
            <a
              href={NAP.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-sm mt-6"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
