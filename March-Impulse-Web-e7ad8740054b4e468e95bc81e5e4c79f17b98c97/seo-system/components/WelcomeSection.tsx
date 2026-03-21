import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-8">
          ¡Bienvenido a nuestra Academia de Inglés
        </h2>

        <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
          <p>
            En Impulse English Academy somos una academia de inglés en Madrid norte, ubicada en La Vaguada / Barrio del Pilar, donde ayudamos a niños, jóvenes y adultos a aprender inglés de forma eficaz, práctica y motivadora.
          </p>

          <p>
            Ofrecemos clases de inglés presenciales adaptadas a cada etapa y objetivo, desde el aprendizaje general hasta la preparación de exámenes oficiales de Cambridge. Nuestro enfoque combina método, seguimiento y motivación para que cada alumno avance con seguridad y confianza en un mundo cada vez más globalizado.
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/reservar-clase"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Haz tu prueba de nivel
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-zinc-500 mt-3">
            Descubre tu punto de partida
          </p>
        </div>
      </div>
    </section>
  );
}
