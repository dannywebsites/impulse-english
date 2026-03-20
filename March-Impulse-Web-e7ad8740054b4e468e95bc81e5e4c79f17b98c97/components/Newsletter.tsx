import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import { NAP } from '../utils/napData';

export default function Newsletter() {
  return (
    <section id="contact" className="w-full bg-zinc-50 py-12 md:py-20 px-6 border-t border-zinc-200">
      <div className="container mx-auto max-w-7xl bg-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-zinc-100 shadow-sm">

        {/* Left Copy */}
        <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
                ¡Mantente en contacto!
            </h2>
            <p className="text-zinc-500 text-base md:text-lg">
                Síguenos en redes sociales para consejos de inglés, noticias y contenido educativo.
            </p>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col gap-8 w-full md:w-auto items-center md:items-start">
            <AnimatedButtons />

            <div className="flex items-center gap-6 justify-center md:justify-start text-zinc-400">
                <a href={NAP.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                <a href={NAP.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
                <a href={NAP.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" aria-label="TikTok"><TikTokIcon /></a>
                <a href={NAP.social.x} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" aria-label="X"><XIcon /></a>
                <a href={NAP.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href={NAP.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
        </div>

      </div>
    </section>
  );
}

function AnimatedButtons() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col sm:flex-row gap-4 w-full">
            <a
                href="/reservar-clase"
                className={`bg-accent-blue text-white font-bold py-4 px-8 rounded-md hover:bg-blue-900 transition-all duration-400 ease-out transform w-full sm:w-auto text-center
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
            >
                Solicitar Información
            </a>
            <a
                href={NAP.phoneTel}
                className={`bg-white border border-zinc-200 text-zinc-900 font-bold py-4 px-8 rounded-md hover:bg-zinc-50 transition-all duration-400 ease-out delay-100 transform w-full sm:w-auto text-center
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
            >
                Llamar: {NAP.phone}
            </a>
        </div>
    );
}

function TikTokIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
