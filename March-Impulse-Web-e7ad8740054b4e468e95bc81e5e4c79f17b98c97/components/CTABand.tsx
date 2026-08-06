import React from 'react';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { NAP } from '../utils/napData';

/**
 * Mid-page conversion band.
 *
 * The service pages shipped with the only CTAs in the hero and the footer form,
 * so anyone reading down the page had nothing to click. Drop one of these after
 * each substantial block.
 */

interface Props {
  title: string;
  subtitle?: string;
  /** Defaults to the free 25-minute level test. Infantil passes its clase de prueba instead. */
  ctaText?: string;
  ctaHref?: string;
  /** Prefilled WhatsApp message, so the enquiry arrives with context. */
  whatsappText?: string;
  /**
   * Which WhatsApp line to open. Defaults to the academy number, which is what
   * every page except the study-abroad section wants. The extranjero pages pass
   * Daniel's line, because they name him and he runs those programmes.
   */
  whatsappUrl?: string;
  /** Label on the WhatsApp button — "WhatsApp" unless the page names a person. */
  whatsappLabel?: string;
}

export default function CTABand({
  title,
  subtitle,
  ctaText = 'Reservar prueba de nivel gratuita',
  ctaHref = '/prueba-de-nivel-ingles/',
  whatsappText = 'Hola, me gustaría información sobre los cursos',
  whatsappUrl = NAP.whatsappUrl,
  whatsappLabel = 'WhatsApp',
}: Props) {
  return (
    <section className="section-tight px-6">
      <div className="container-narrow">
        <div className="card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h2 className="t-h3 mb-2 text-zinc-900">{title}</h2>
            {subtitle ? <p className="t-body text-zinc-600">{subtitle}</p> : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
            <a href={ctaHref} className="btn-primary">
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`${whatsappUrl}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
