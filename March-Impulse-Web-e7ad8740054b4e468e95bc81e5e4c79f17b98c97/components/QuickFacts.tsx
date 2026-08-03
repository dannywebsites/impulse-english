import React from 'react';
import { MapPin } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { NAP } from '../utils/napData';

/**
 * The strip directly under the hero: what it costs, how big the group is, and
 * where we are — the three things a parent checks before reading anything else.
 *
 * Price leads because it was previously only visible near the foot of the page.
 * Address, phone and WhatsApp render from utils/napData.ts.
 */

interface Props {
  /** e.g. "83 €/mes" or "Desde 64 €/mes". Always the figure for THIS course. */
  price: string;
  /** Short facts, group size first. Kept per page — they are not interchangeable. */
  facts: string[];
  whatsappText?: string;
}

export default function QuickFacts({ price, facts, whatsappText = 'Hola, me gustaría información sobre los cursos' }: Props) {
  return (
    <section className="border-b border-zinc-200/70 bg-white py-5">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <span className="inline-flex items-center rounded-full bg-accent-blue/[0.07] px-4 py-1.5 text-sm font-semibold text-accent-blue">
            {price}
          </span>
          {facts.map((f, i) => (
            <React.Fragment key={f}>
              {i > 0 ? <span aria-hidden="true" className="hidden text-zinc-300 sm:inline">·</span> : null}
              <span className="t-small font-medium text-zinc-700">{f}</span>
            </React.Fragment>
          ))}
        </div>

        <p className="t-small mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-zinc-500">
          <MapPin className="h-4 w-4 shrink-0 text-accent-blue" aria-hidden="true" />
          <span>{NAP.shortAddress} · junto a La Vaguada</span>
          <span aria-hidden="true" className="text-zinc-300">·</span>
          <a href={NAP.phoneTel} className="font-medium text-accent-blue hover:underline">
            {NAP.phone}
          </a>
          <span aria-hidden="true" className="text-zinc-300">·</span>
          <a
            href={`${NAP.whatsappUrl}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-accent-blue hover:underline"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
