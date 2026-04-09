import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Local images for value cards
const valueCards = [
  {
    imageUrl: '/images/academy/team/jp-with-students.jpg',
    imageAlt: 'Estudiantes con certificados Cambridge en Impulse English Academy',
    title: "100% Aprobados Cambridge",
    description: "Todos nuestros estudiantes aprobaron sus exámenes Cambridge 2024-2025. Centro Oficial de Preparación. Haz el examen donde te preparas.",
    link: "Ver Exámenes",
    href: "/examenes-cambridge"
  },
  {
    imageUrl: '/images/academy/facilities/infantil-classes.jpg',
    imageAlt: 'Clase de inglés infantil Great Little People - ambiente familiar y cercano',
    title: "Una academia familiar, cercana y única",
    description: "No somos franquicia. Somos una academia familiar con atención personalizada real en grupos de máximo 7-10 alumnos.",
    link: "Conocer más",
    href: "/sobre-nosotros"
  },
  {
    imageUrl: '/images/academy/facilities/escuela-gonzalo-18.jpeg',
    imageAlt: 'Clase de inglés en Impulse English Academy La Vaguada Madrid',
    title: "145+ Familias Satisfechas",
    description: "Más de 145 reseñas de 5 estrellas en Google. Las familias de Barrio del Pilar, La Vaguada y alrededores nos recomiendan.",
    link: "Ver Reseñas",
    href: "#testimonials"
  }
];

export default function ValuesSection() {
  return (
    <section id="innovation" className="w-full bg-zinc-50 py-12 px-6 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueCards.map((card, index) => (
            <div key={index} className="flex flex-col group bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] transition-shadow duration-300 rounded-sm overflow-hidden">
              <div className="aspect-[3/2] w-full overflow-hidden mb-0">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-zinc-900 mb-6 group-hover:text-accent-blue transition-colors leading-tight">
                    {card.title}
                </h3>

                <p className="text-zinc-500 leading-relaxed font-light mb-8 flex-grow">
                    {card.description}
                </p>

                <div className="pt-8 border-t border-zinc-100 mt-auto">
                    {card.href.startsWith('#') ? (
                      <a href={card.href} className="flex items-center text-accent-blue font-semibold text-sm uppercase tracking-wide group-hover:gap-3 gap-2 transition-all">
                          {card.link}
                          <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link to={card.href} className="flex items-center text-accent-blue font-semibold text-sm uppercase tracking-wide group-hover:gap-3 gap-2 transition-all">
                          {card.link}
                          <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
