import React from 'react';
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { s3FacilityImages } from '../src/data/images';

export default function InfoCards() {
  return (
    <section id="academics" className="w-full bg-zinc-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Content - One image blended with text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={s3FacilityImages.classroom1.url}
                alt={s3FacilityImages.classroom1.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm">Reseñas 5★</div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
                Por qué elegirnos
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
                Nuestra diferencia
              </h2>
              <div className="w-24 h-1 bg-accent-blue/20"></div>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Una academia familiar, cercana y única</h3>
                  <p className="text-zinc-500 leading-relaxed">
                    No somos franquicia. Somos una academia familiar con atención personalizada real en grupos de máximo 7-10 alumnos.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">100% Aprobados Cambridge</h3>
                  <p className="text-zinc-500 leading-relaxed">
                    Tasa de aprobados del 100% en exámenes Cambridge 2024-2025. Preparamos a nuestros alumnos para el éxito.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Metodología probada</h3>
                  <p className="text-zinc-500 leading-relaxed">
                    Great Little People para infantil, Cambridge para niños y adultos. Metodologías que funcionan.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/sobre-nosotros"
                className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Conocer más
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/examenes-cambridge"
                className="inline-flex items-center justify-center gap-2 border-2 border-accent-blue text-accent-blue font-semibold py-3 px-6 rounded-lg hover:bg-accent-blue hover:text-white transition-colors"
              >
                Exámenes Cambridge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
