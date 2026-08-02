import React from 'react';
import { Star } from 'lucide-react';

export default function PartnersSection() {
  const partners = [
    { name: "Cambridge English", logo: "/images/academy/cambridge-logo-edited.png", url: "https://www.cambridgeenglish.org/", subtitle: "" },
    { name: "Linguaskill", logo: "/images/academy/linguaskill-logo-blanco.png", url: "https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/", subtitle: "" },
    { name: "Great Little People", logo: "/images/academy/great-little-people-black.png", url: "https://www.greatlittlepeople.com/en", subtitle: "" },
    { name: "ESIC Idiomas", logo: "/images/academy/esic-idiomas.jpg", url: "https://www.esic.edu/idiomas", subtitle: "Cambridge Exam Centre ES278" },
  ];

  const reviews = [
    { author: "Carlos Javier Ayllón Gordillo", role: "Reseña verificada en Google", text: "Excelente ambiente, profesores muy amables y muy cercanos a los estudiantes. Definitivamente recomiendo esta academia para aprender inglés." },
    { author: "Alejandro Carre", role: "Reseña verificada en Google", text: "Academia muy recomendable! Profesores muy cualificados y un ambiente estupendo" },
    { author: "Yosmari A. Diaz O.", role: "Reseña verificada en Google", text: "No puedo estar mas contenta con mi profesor, JP, y la facilidad para todo en general en la academia, que mas que un lugar donde ir a aprender, es un espacio donde soy muy feliz cada vez que voy! :) 100% recomendado" },
    { author: "Carmen Suarez", role: "Reseña verificada en Google", text: "Academia totalmente recomendable para mejorar tu inglés, buenos profesores y mejores personas aún, si estás buscando una academia de calidad, este es tu sitio." },
    { author: "Natalia López Casado", role: "Reseña verificada en Google", text: "Llevo 2 meses dando clase con Danny y estoy encantada. Clases muy amenas y en las que conversamos todo el rato. Me hace correcciones y me da tips para mejorar. Además, agradezco de ellos su disponibilidad y adaptación a mis complicados horarios. La recomiendo 100 %" },
    { author: "Laura Garcia", role: "Reseña verificada en Google", text: "Recomendable 100%!! He coincidido tanto con Danny como con JP y transmiten de maravilla. Gracias a ellos conseguí mis objetivos y mejoré mucho con el idioma. Sin duda seguiré contando con ellos" },
  ];

  return (
    <section className="section w-full bg-white overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 35s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 mb-16">
        <span className="eyebrow mb-4">
          Partners
        </span>
        <h2 className="t-h2 text-zinc-900 mb-5">Colaboradores Oficiales</h2>
        <div className="rule"></div>
      </div>

      {/* Partners Marquee */}
      <div className="relative w-full mb-16 mask-linear-fade">
        <div className="flex w-max animate-scroll pause-on-hover">
          {/* First Set */}
          <div className="flex gap-16 md:gap-32 px-8 md:px-16 items-center">
            {partners.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex flex-col items-center">
                <img src={p.logo} alt={p.name} className="h-10 md:h-14 w-auto object-contain hover:opacity-80 transition-all duration-300" loading="lazy" />
                {p.subtitle && <span className="text-[10px] text-zinc-400 mt-1 text-center">{p.subtitle}</span>}
              </a>
            ))}
          </div>
          {/* Duplicate Set */}
          <div className="flex gap-16 md:gap-32 px-8 md:px-16 items-center">
            {partners.map((p, i) => (
              <a key={`dup-${i}`} href={p.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex flex-col items-center">
                <img src={p.logo} alt={p.name} className="h-10 md:h-14 w-auto object-contain hover:opacity-80 transition-all duration-300" loading="lazy" />
                {p.subtitle && <span className="text-[10px] text-zinc-400 mt-1 text-center">{p.subtitle}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mb-12">
         <span className="eyebrow mb-4">Reseñas Reales</span>
         <h3 className="t-h3 text-zinc-900 mb-4">Lo Que Dicen de Nosotros</h3>
         <div className="rule"></div>
      </div>

      {/* Reviews Marquee (Reverse Direction). Edge fade is a mask, not a pair of
          absolutely-positioned gradient overlays. */}
      <div className="relative w-full mask-linear-fade">
         <div className="flex w-max animate-scroll-reverse pause-on-hover py-4">
            {/* First Set */}
            <div className="flex gap-6 px-3">
                {reviews.map((r, i) => (
                    <ReviewCard key={i} review={r} />
                ))}
            </div>
            {/* Duplicate Set */}
            <div className="flex gap-6 px-3">
                {reviews.map((r, i) => (
                    <ReviewCard key={`dup-${i}`} review={r} />
                ))}
            </div>
            {/* Triplicate Set for wider screens to ensure loop */}
            <div className="flex gap-6 px-3">
                {reviews.map((r, i) => (
                    <ReviewCard key={`trip-${i}`} review={r} />
                ))}
            </div>
         </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: any }) {
    return (
        <div className="card-quiet w-[300px] md:w-[400px] flex-shrink-0 p-6 md:p-8 transition-colors duration-300 hover:border-zinc-300">
            <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
            </div>
            <p className="text-zinc-600 t-body mb-6">
                "{review.text}"
            </p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold text-sm">
                    {review.author.charAt(0)}
                </div>
                <div>
                    <div className="font-bold text-zinc-900 text-sm">{review.author}</div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wider">{review.role}</div>
                </div>
            </div>
        </div>
    )
}
