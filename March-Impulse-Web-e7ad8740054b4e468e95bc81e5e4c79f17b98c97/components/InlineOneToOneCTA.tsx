import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { NAP } from '../utils/napData';
import {
  resolveOffer,
  offerForCategory,
  waLink,
  type PopupVariant,
} from '../utils/popupVariants';

interface InlineOneToOneCTAProps {
  /** Pre-resolved offer. If omitted, resolved from `pathname` or `category`. */
  offer?: PopupVariant;
  pathname?: string;
  category?: string;
}

/**
 * Lighter mid-article CTA. Deliberately form-free (two LeadForms on one page
 * would collide) — it nudges to the end-of-page form via the #hablamos anchor
 * and offers WhatsApp for readers who want to talk now. Reads as an aside, not
 * a wall, so it doesn't interrupt the article the way the end block does.
 */
export default function InlineOneToOneCTA({
  offer,
  pathname,
  category,
}: InlineOneToOneCTAProps) {
  const resolved =
    offer ??
    (category ? offerForCategory(category) : undefined) ??
    resolveOffer(pathname ?? '');

  const whatsapp = waLink(NAP.whatsappUrl, resolved);

  return (
    <div className="py-6 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-xl border border-accent-blue/20 bg-accent-blue/5 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-zinc-800 font-medium leading-snug flex-1">
            {resolved.inlineHook}
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a
              href="#hablamos"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-sm bg-accent-blue text-white hover:bg-accent-blue/90 transition-all"
            >
              {resolved.ctaText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-sm bg-[#25D366] text-white hover:bg-[#1ebe5b] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
