import React from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="w-full h-full">
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
                        <Link to="/reservar-clase" className="w-full xl:w-auto bg-red-600 text-white px-8 py-4 rounded-lg md:rounded-md font-semibold text-sm uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg active:scale-[0.98] text-center">
                            Clase de Prueba Gratuita
                        </Link>
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
        <div className="xl:hidden w-full h-full flex items-center justify-center pb-32 pointer-events-auto">
            {/* The Shield Container */}
            <div
                className="relative bg-accent-blue w-56 pt-8 pb-14 px-4 text-center drop-shadow-2xl animate-fade-in-up"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                    WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
                }}
            >
                {/* Text Content - Using span instead of h1 since the real H1 is in desktop version */}
                <div className="text-2xl font-bold text-white uppercase leading-[0.9] tracking-tight mb-2 font-display" aria-hidden="true">
                    Academia<br/>de Inglés
                </div>
                <div className="text-xl font-light text-white/90 uppercase leading-[0.9] tracking-tight mb-6 font-display" aria-hidden="true">
                    La<br/>Vaguada
                </div>

                {/* Bottom Detail */}
                <div className="flex flex-col items-center gap-1 opacity-80 absolute bottom-6 left-0 right-0">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white font-medium">Centro Cambridge</span>
                    <ChevronDown className="w-3 h-3 text-white animate-bounce mt-1" />
                </div>
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
    </div>
  );
}
