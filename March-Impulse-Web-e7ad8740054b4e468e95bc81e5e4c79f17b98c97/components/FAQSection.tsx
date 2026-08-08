import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../utils/schemaData';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
  /**
   * `legacy` (default) renders the original markup byte-for-byte. The 17 blog
   * articles that mount this component keep it until the blog gets its own
   * design pass. Non-blog pages opt in with `variant="refresh"`.
   */
  variant?: 'legacy' | 'refresh';
  eyebrow?: string;
  /**
   * Which answers start expanded.
   *
   * `first` (default) is the original behaviour exactly: answer 0 open, and opening
   * another closes the previous one — a single-open accordion.
   *
   * `all` renders every answer expanded and lets several stay open at once. Used where
   * the questions ARE the content and making someone click to read them costs more than
   * the vertical space saves. It is also the safer shape for AI answer engines: an answer
   * behind an interaction is an answer that may not get attributed.
   */
  defaultOpen?: 'first' | 'all';
}

export default function FAQSection({
  faqs,
  title = "Preguntas Frecuentes",
  className = "",
  variant = 'legacy',
  eyebrow,
  // Everything open at mount, site-wide (Danny, 2026-08-08). An answer behind a click is an
  // answer most readers never read, and the accordion was saving vertical space we do not
  // need. Collapsing still works; it is just no longer required in order to READ.
  defaultOpen = 'all',
}: FAQSectionProps) {
  // A Set rather than a single index, so `all` can hold more than one open at a time.
  // Lazy initialiser: this is the mount-time state, not a value recomputed each render.
  const [openSet, setOpenSet] = useState<Set<number>>(() =>
    defaultOpen === 'all' ? new Set(faqs.map((_, i) => i)) : new Set([0])
  );

  const isOpen = (i: number) => openSet.has(i);

  const toggle = (i: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        // Preserve the single-open accordion for `first`, so the ~21 pages already
        // using this component behave exactly as they did before.
        if (defaultOpen !== 'all') next.clear();
        next.add(i);
      }
      return next;
    });

  if (variant === 'refresh') {
    return (
      <section className={`section surface-alt px-6 ${className}`}>
        <div className="mx-auto w-full max-w-3xl">
          {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
          <h2 className="t-h2 text-zinc-900">{title}</h2>

          {/* One divided list, not a stack of floating cards. */}
          <div className="mt-10 divide-y divide-zinc-300/70 border-y border-zinc-300/70">
            {faqs.map((faq, index) => {
              const open = isOpen(index);
              return (
                <div key={index}>
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <h3 className="t-h3 text-zinc-900 transition-colors group-hover:text-accent-blue">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 flex-shrink-0 text-accent-blue transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {/* 0fr -> 1fr animates to the answer's true height. The old
                      max-h-96 silently clipped long answers. */}
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="measure pb-6 pr-10 text-zinc-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 px-6 bg-zinc-50 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">{title}</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen(index)}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
              >
                <h3 className="font-bold text-zinc-900 text-lg pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent-blue flex-shrink-0 transition-transform ${isOpen(index) ? 'rotate-180' : ''}`}
                />
              </button>
              {/* Same 0fr -> 1fr technique as the refresh variant above. This branch still
                  used max-h-96, which silently clips any answer over ~384px — and this is the
                  variant the blog uses (PAAArticlePage passes no `variant`). With every panel
                  open by default a clip would be permanently visible rather than rare. */}
              <div
                id={`faq-answer-${index}`}
                role="region"
                className={`grid px-6 transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen(index) ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
