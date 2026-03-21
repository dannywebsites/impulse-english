import React from 'react';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full h-full" aria-label="Hero">
        {/* Single H1 for SEO - visually hidden but accessible */}
        <h1 className="sr-only">Academia de Inglés en La Vaguada</h1>

        {/* =========================================
            DESKTOP VERSION
            Hidden on Mobile & Tablet (< XL)
           ========================================= */}
        <div className="hidden xl:flex flex-col justify-center h-full">
            {/* Main Container - Matches NewsOverlay max-w-7xl and centering */}
            <div className="container mx-auto max-w-7xl px-0 xl:px-0">

                {/* Content Wrapper - Aligns strictly left with NewsOverlay padding (pl-8/12) */}
                <div className="w-full flex flex-col items-start px-6 xl:px-0 xl:pl-12 pointer-events-auto">

                    {/* Decoration Line */}
                    <div className="hidden xl:flex items-center gap-4 mb-8 justify-start w-full animate-fade-in-up">
                        <span className="h-px w-12 bg-white/60"></span>
                        <span className="text-white/90 font-medium tracking-[0.2em] text-sm uppercase">
                            Centro Oficial Cambridge
                        </span>
                    </div>

                    {/* Visual Headline (not H1 - the real H1 is sr-only above) */}
                    <div className="text-white text-left text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-2 md:mb-8 animate-fade-in-up delay-100" aria-hidden="true">
                        Academia de Inglés<br />
                        <span className="text-white/60">en La Vaguada</span>
                    </div>

                    {/* Subheadline */}
                    <p className="hidden xl:block text-white/80 text-lg max-w-xl leading-relaxed mb-10 font-light text-left animate-fade-in-up delay-200">
                        A 6 minutos de Línea 9 (Barrio del Pilar), en el tranquilo Parque de la Alcazaba. Zona verde, parque infantil y aparcamiento. El entorno perfecto para aprender inglés.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col w-full xl:flex-row xl:w-auto gap-4 animate-fade-in-up delay-300">
                        <a href="/reservar-clase" className="w-full xl:w-auto bg-red-600 text-white px-8 py-4 rounded-lg md:rounded-md font-semibold text-sm uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg active:scale-[0.98] text-center">
                            Clase de Prueba Gratuita
                        </a>
                        <a href="tel:+34604910611" className="w-full xl:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg md:rounded-md font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-accent-blue transition-colors active:scale-[0.98] text-center flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            604 910 611
                        </a>
                    </div>

                </div>
            </div>
        </div>

        {/* =========================================
            MOBILE & TABLET VERSION (LOYOLA SHIELD STYLE)
            Hidden on Desktop (XL+)
           ========================================= */}
        <div className="xl:hidden w-full h-full flex flex-col justify-end px-6 pb-44 pointer-events-auto">
            {/* Bottom gradient for text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[5] pointer-events-none"></div>

            <div className="relative z-10">
                {/* Academy Name */}
                <div className="text-[1.75rem] font-semibold text-white leading-[1.1] tracking-tight mb-1 font-serif drop-shadow-md animate-fade-in-up" aria-hidden="true">
                    Impulse English Academy
                </div>
                {/* Location */}
                <div className="text-sm font-medium text-white/80 uppercase tracking-[0.3em] mb-4 animate-fade-in-up delay-100" aria-hidden="true">
                    La Vaguada
                </div>
                {/* Decoration line + Cambridge badge */}
                <div className="flex items-center gap-3 mb-5 animate-fade-in-up delay-200">
                    <span className="h-px w-8 bg-white/50"></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium">Centro Oficial Cambridge</span>
                </div>
                {/* CTA */}
                <a
                    href="/reservar-clase"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg active:scale-[0.98] animate-fade-in-up delay-300"
                >
                    Prueba de Nivel
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>

        <style>{`
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
    </section>
  );
}
