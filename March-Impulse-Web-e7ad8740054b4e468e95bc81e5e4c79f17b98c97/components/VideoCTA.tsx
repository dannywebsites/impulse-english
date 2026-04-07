import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { teamImages } from '../src/data/images';

export default function VideoCTA() {
  const img = teamImages.estudiantesSonriendo;
  const webpSrcSet = `${img.sizes.sm.webp} 400w, ${img.sizes.md.webp} 800w, ${img.sizes.lg.webp} 1200w, ${img.sizes.xl.webp} 1920w`;
  const jpegSrcSet = `${img.sizes.sm.jpg} 400w, ${img.sizes.md.jpg} 800w, ${img.sizes.lg.jpg} 1200w, ${img.sizes.xl.jpg} 1920w`;

  return (
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
        {/* Play Button Style Graphic */}
        <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-12 hover:scale-110 transition-transform duration-300 shadow-lg group">
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
  );
}
