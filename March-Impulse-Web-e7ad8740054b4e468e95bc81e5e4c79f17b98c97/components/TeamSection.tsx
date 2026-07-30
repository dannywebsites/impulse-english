import React from 'react';
import { teamImages } from '../src/data/images';
import OptimizedImage from './OptimizedImage';

export default function TeamSection() {
  return (
    <section className="section surface-alt w-full px-6">
      <div className="max-w-7xl mx-auto">
        {/* 7/5 split rather than a 50/50 mirror: the photograph carries more
            weight than the copy beside it. */}
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-12">

          {/* Image Side */}
          <div className="relative order-2 lg:order-1 lg:col-span-7">
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <OptimizedImage
                image={teamImages.estudiantesSonriendo}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 order-1 lg:order-2 lg:col-span-5">
            <div>
              <span className="eyebrow mb-4">
                Nuestro Equipo
              </span>
              <h2 className="t-h2 text-zinc-900 mb-5">
                Un equipo apasionado por formarte
              </h2>
              <div className="rule"></div>
            </div>

            <div className="space-y-5 t-body text-zinc-600">
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
