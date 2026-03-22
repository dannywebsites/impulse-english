import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../utils/schemaData';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
}

export default function FAQSection({ faqs, title = "Preguntas Frecuentes", className = "" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
