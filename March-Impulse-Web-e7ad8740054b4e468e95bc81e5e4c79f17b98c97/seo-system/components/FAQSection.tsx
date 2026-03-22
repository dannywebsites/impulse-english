import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../utils/schemaData';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
}

export default function FAQSection({ faqs, title = "Preguntas Frecuentes", className = "" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate JSON-LD schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={`py-16 px-6 bg-zinc-50 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">{title}</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
              >
                <h3 className="font-bold text-zinc-900 text-lg pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent-blue flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </div>
    </section>
  );
}
