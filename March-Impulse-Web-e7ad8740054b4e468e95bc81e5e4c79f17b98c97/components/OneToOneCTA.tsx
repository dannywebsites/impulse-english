import React from 'react';
import { MessageCircle } from 'lucide-react';
import LeadForm from './LeadForm';
import { NAP } from '../utils/napData';
import {
  resolveOffer,
  offerForCategory,
  waLink,
  type PopupVariant,
} from '../utils/popupVariants';

interface OneToOneCTAProps {
  /** Pre-resolved offer. If omitted, resolved from `pathname` or `category`. */
  offer?: PopupVariant;
  /** Blog pathname (e.g. "/blog/pdfs-cambridge-advanced"), used to resolve the offer. */
  pathname?: string;
  /** Article category, used by PAAArticlePage which knows it directly. */
  category?: string;
  /** Override the CRM source (bespoke legacy pages keep their own value). */
  source?: string;
}

/**
 * End-of-article conversion block. Pitches the topic-matched one-to-one offer,
 * captures a lead (nombre / teléfono / email → one-to-one), and offers WhatsApp.
 * Group classes aren't running, so this replaces the old free-trial / group CTA.
 *
 * `id="hablamos"` is the anchor target for the lighter mid-article CTA.
 */
export default function OneToOneCTA({
  offer,
  pathname,
  category,
  source,
}: OneToOneCTAProps) {
  const resolved =
    offer ??
    (category ? offerForCategory(category) : undefined) ??
    resolveOffer(pathname ?? '');

  const leadSource = source ?? `blog-1to1-${resolved.key}`;
  const whatsapp = waLink(NAP.whatsappUrl, resolved);

  return (
    <section id="hablamos" className="py-12 px-6 bg-accent-blue scroll-mt-24">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {resolved.ctaHeadline}
            </h2>
            <p className="text-white/85 leading-relaxed mb-6">{resolved.ctaBody}</p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-sm bg-[#25D366] text-white hover:bg-[#1ebe5b] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Hablar por WhatsApp ahora
            </a>
            {resolved.proof && (
              <p className="text-white/60 text-xs mt-5 leading-relaxed">{resolved.proof}</p>
            )}
          </div>
          <div>
            <LeadForm
              source={leadSource}
              compact
              showLevel={false}
              fixedLevel="one-to-one"
              title="Empieza tus clases one-to-one"
              subtitle="Te llamamos en menos de 24h"
              ctaText="Reservar mi llamada"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
