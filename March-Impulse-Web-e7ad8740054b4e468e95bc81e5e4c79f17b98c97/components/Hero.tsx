import React from 'react';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full xl:h-full" aria-label="Hero">
        {/* ONE hero block for every breakpoint. Below xl the copy sits on the solid blue
            panel under the 16:9 video band, centred; at xl+ it is overlaid on the
            full-bleed cover, left aligned. Previously the visible H1 lived inside
            `hidden xl:flex` and mobile got an sr-only duplicate, so the rendered mobile
            H1 was invisible to layout and weak under mobile-first indexing. Now exactly
            one H1 exists in the DOM and it renders visibly at every width. */}
        <div className="xl:flex xl:flex-col xl:justify-center xl:h-full">
            {/* Main Container - Matches NewsOverlay max-w-7xl and centering */}
            <div className="container mx-auto max-w-7xl px-0">

                {/* Content Wrapper - centred on the mobile panel, strictly left aligned at xl+ */}
                <div className="w-full flex flex-col items-center text-center px-6 xl:items-start xl:text-left xl:px-0 xl:pl-12 pointer-events-auto">

                    {/* Eyebrow. The rule is a desktop flourish; the label itself shows everywhere. */}
                    <div className="hero-eyebrow flex items-center gap-4 mb-5 xl:mb-8 animate-fade-in-up">
                        <span className="hidden xl:block h-px w-12 bg-white/60"></span>
                        <span className="text-white/90 font-medium tracking-[0.2em] text-xs xl:text-sm uppercase">
                            Centro Oficial Cambridge
                        </span>
                    </div>

                    {/* Single H1 for SEO — the visible hero headline is the real H1 */}
                    <h1 className="hero-h1 text-white text-3xl sm:text-5xl xl:text-7xl xl:max-w-[700px] font-semibold tracking-tight leading-[1.1] xl:leading-[1.05] mb-6 xl:mb-8 animate-fade-in-up delay-100">
                        Academia de Inglés<br />
                        {/* "Barrio del Pilar" is held together so the 700px cap breaks the
                            line before it, not mid-place-name — otherwise the wrap orphans
                            "Pilar" on a line of its own. */}
                        <span className="text-white/60">
                            en La Vaguada y{' '}
                            <span className="whitespace-nowrap">Barrio del Pilar</span>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="hero-sub hidden xl:block text-white/80 text-lg max-w-xl leading-relaxed mb-10 font-light text-left animate-fade-in-up delay-200">
                        A 6 minutos de Línea 9 (Barrio del Pilar), en el tranquilo Parque de la Alcazaba. Zona verde, parque infantil y aparcamiento. El entorno perfecto para aprender inglés.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col w-full xl:flex-row xl:w-auto gap-3 xl:gap-4 animate-fade-in-up delay-300">
                        <a href="/prueba-de-nivel-ingles/" className="w-full xl:w-auto bg-brand-red text-white px-8 py-4 rounded-lg md:rounded-md font-semibold text-sm uppercase tracking-widest hover:bg-brand-red-600 transition-colors shadow-cta active:scale-[0.98] text-center">
                            Prueba de Nivel Gratuita
                        </a>
                        <a href="tel:+34604910611" className="w-full xl:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg md:rounded-md font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-accent-blue transition-colors active:scale-[0.98] text-center flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            604 910 611
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <style>{`
          /* Short desktop viewports. At xl the hero must fit three fixed things into
             100dvh: the transparent navbar (141px), this copy block (417px at full
             size) and the NewsOverlay card band (218px) — 776px in total. A 1280x720
             or 1366x768 laptop cannot hold all three, which is what pushed the CTA row
             out of the video. Rather than let them collide, the copy tightens until it
             fits: ~81px comes off, which clears every laptop height down to 720. */
          @media (min-width: 1280px) and (max-height: 860px) {
            .hero-eyebrow { margin-bottom: 1rem; }
            .hero-h1 { font-size: 3.75rem; margin-bottom: 1.25rem; }
            .hero-sub { font-size: 1rem; margin-bottom: 1.5rem; }
          }

          /* The headline is capped at 700px (xl:max-w) so it wraps before reaching the
             director in the doorway, who stands at ~59-63% of the frame: the old
             single-line "en La Vaguada y Barrio del Pilar" ran 820-984px wide and put
             the word "Pilar" straight across his face. The source video is 16:9 and so
             are most laptops, so there is no pan room to move him instead.
             The cap costs a third headline line. Below 780px tall there is no room for
             both that line and the location paragraph, so the paragraph gives way -
             the headline and the two CTAs are what the hero has to deliver. */
          @media (min-width: 1280px) and (max-height: 780px) {
            .hero-sub { display: none; }
          }

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
