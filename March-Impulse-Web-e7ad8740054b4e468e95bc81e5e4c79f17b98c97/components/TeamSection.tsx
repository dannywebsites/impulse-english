import React from 'react';
import { teamImages } from '@/utils/images';
import OptimizedImage from './OptimizedImage';

export default function TeamSection() {
  return (
    <section className="w-full bg-zinc-50 py-16 md:py-24 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                image={teamImages.estudiantesSonriendo}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
                Nuestro Equipo
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
                Un equipo apasionado por formarte
              </h2>
              <div className="w-24 h-1 bg-accent-blue/20"></div>
            </div>

            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                Nuestro equipo docente está formado por profesores cualificados, con experiencia en la enseñanza del inglés a niños, adolescentes y adultos.
              </p>

              <p>
                Cada profesor es especialista en su área y trabaja con un enfoque personalizado, dinámico y cercano, definiendo la estrategia educativa más adecuada para cada alumno. Apostamos por una enseñanza clara y estructurada que reduce el tiempo de aprendizaje, refuerza la memorización y favorece la creación de automatismos reales en el uso del idioma.
              </p>

              <p>
                En nuestra academia de inglés en La Vaguada, el aprendizaje se convierte en una experiencia positiva, motivadora y orientada a resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
