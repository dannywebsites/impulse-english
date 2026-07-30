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
}

export default function FAQSection({
  faqs,
  title = "Preguntas Frecuentes",
  className = "",
  variant = 'legacy',
  eyebrow,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (variant === 'refresh') {
    return (
      <section className={`section surface-alt px-6 ${className}`}>
        <div className="mx-auto w-full max-w-3xl">
          {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
          <h2 className="t-h2 text-zinc-900">{title}</h2>

          {/* One divided list, not a stack of floating cards. */}
          <div className="mt-10 divide-y divide-zinc-300/70 border-y border-zinc-300/70">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <h3 className="t-h3 text-zinc-900 transition-colors group-hover:text-accent-blue">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 flex-shrink-0 text-accent-blue transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {/* 0fr -> 1fr animates to the answer's true height. The old
                      max-h-96 silently clipped long answers. */}
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
              >
                <h3 className="font-bold text-zinc-900 text-lg pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent-blue flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div id={`faq-answer-${index}`} role="region" className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
