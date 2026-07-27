import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Play, ArrowRight, X } from 'lucide-react';
import { teamImages } from '../src/data/images';

export const VIDEO_SRC = '/media/impulse-academia-la-vaguada.v1.mp4';
export const VIDEO_POSTER = '/media/hero-poster.v1.jpg';

export default function VideoCTA() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      // Return focus to the button that opened the dialog.
      triggerRef.current?.focus();
      return;
    }

    // Lock background scroll while the dialog is up.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      // Minimal focus trap: only the close button and the video are focusable in here,
      // so keep Tab cycling between them rather than escaping to the page behind.
      if (e.key === 'Tab') {
        const focusable = [closeRef.current, videoRef.current].filter(Boolean) as HTMLElement[];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  const img = teamImages.estudiantesSonriendo;
  const webpSrcSet = `${img.sizes.sm.webp} 400w, ${img.sizes.md.webp} 800w, ${img.sizes.lg.webp} 1200w, ${img.sizes.xl.webp} 1920w`;
  const jpegSrcSet = `${img.sizes.sm.jpg} 400w, ${img.sizes.md.jpg} 800w, ${img.sizes.lg.jpg} 1200w, ${img.sizes.xl.jpg} 1920w`;

  return (
    <>
    <section id="vision" className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image/Video representation */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source type="image/webp" srcSet={webpSrcSet} sizes="100vw" />
          <source type="image/jpeg" srcSet={jpegSrcSet} sizes="100vw" />
          <img
            src={img.sizes.lg.jpg}
            alt={img.alt}
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-60"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/80 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-left md:pl-24">
        {/* Play Button — opens the self-hosted video in a dialog */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label="Ver el vídeo de Impulse English Academy"
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-12 hover:scale-110 transition-transform duration-300 shadow-lg group focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
        >
            <Play className="w-8 h-8 text-accent-blue ml-1 group-hover:text-zinc-900 transition-colors" fill="currentColor" />
        </button>

        <div className="max-w-4xl">
             {/* Striped decorative line */}
             <div className="flex gap-1 mb-8 opacity-50">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-4 bg-white/60 skew-x-[-20deg]"></div>
                ))}
             </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9] tracking-tight mb-8">
                Listos para<br/>
                aprender, crecer<br/>
                y abrir puertas
            </h2>

             {/* Bottom Striped decorative line */}
             <div className="flex gap-1 mt-8 opacity-50">
                {[...Array(40)].map((_, i) => (
                    <div key={i} className="w-1 h-2 bg-white/60 skew-x-[-20deg]"></div>
                ))}
             </div>

            {/* Crawl path links */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/blog/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm border border-white/30 rounded-lg px-5 py-2.5 hover:bg-white/10 transition-colors"
              >
                Recursos y guías
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/academias-ingles-madrid/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm border border-white/30 rounded-lg px-5 py-2.5 hover:bg-white/10 transition-colors"
              >
                Academias en Madrid
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/sobre-nosotros/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm border border-white/30 rounded-lg px-5 py-2.5 hover:bg-white/10 transition-colors"
              >
                Sobre nosotros
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
        </div>
      </div>
    </section>

    {open && (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Vídeo de Impulse English Academy"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
        onClick={close}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Cerrar el vídeo"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Stop clicks on the player itself from closing the dialog. */}
        <video
          ref={videoRef}
          controls
          autoPlay
          playsInline
          preload="none"
          poster={VIDEO_POSTER}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-5xl aspect-video rounded-lg shadow-2xl bg-black outline-none"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          Tu navegador no puede reproducir este vídeo.
        </video>
      </div>
    )}
    </>
  );
}
