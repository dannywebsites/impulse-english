import React from 'react';
import { Star } from 'lucide-react';
import { s3CambridgeImages, s3LinguaskillImages } from '@/utils/images';

export default function PartnersSection() {
  const partners = [
    { name: "Cambridge English", logo: s3CambridgeImages.cambridgeLogo.url, url: "https://www.cambridgeenglish.org/", subtitle: "" },
    { name: "Linguaskill", logo: s3LinguaskillImages.logoWhite.url, url: "https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/", subtitle: "" },
    { name: "Great Little People", logo: "/images/academy/logos/great-little-people-black.png", url: "https://www.greatlittlepeople.com/en", subtitle: "" },
    { name: "ESIC Idiomas", logo: "/images/academy/logos/esic-idiomas.jpg", url: "https://www.esic.edu/idiomas", subtitle: "Cambridge Exam Centre ES278" },
  ];

  const reviews = [
    { text: "Luego de pasar por varias academias en toda Madrid esta fue la única que dio con el método y el contenido perfecto para aprender.", author: "Cesar S.", role: "Local Guide" },
    { text: "Desde que llevo a mis hijos están aprobando inglés y sobre todo que van encantados. El trato es excepcional.", author: "Lidia R.", role: "Madre de alumnos" },
    { text: "Mi evolución en inglés ha sido gracias a ellos totalmente. Las clases son muy didácticas y se aprende mucho.", author: "Lucia S.", role: "Alumna desde los 8 años" },
    { text: "Gracias a Impulse logré obtener mi certificado C1 de inglés. Esto me ha abierto muchas puertas en el mercado laboral.", author: "Gonzalo T.", role: "Local Guide" },
    { text: "Impulse Academy es y será la mejor academia para aprender inglés! Los mejores maestros y atención de la mejor calidad.", author: "Jorge M.", role: "Padre de alumna" },
    { text: "100% recomendado, vale la pena. Mi hijo ahora continúa con JP para hacer sus exámenes de cualificación.", author: "Luis M.", role: "Padre de alumno" },
  ];

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
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
        <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
          Partners
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">Colaboradores Oficiales</h2>
        <div className="w-24 h-1 bg-accent-blue/20"></div>
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
         <span className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4 block">Reseñas Reales</span>
         <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">Lo Que Dicen de Nosotros</h3>
         <div className="w-24 h-1 bg-accent-blue/20"></div>
      </div>

      {/* Reviews Marquee (Reverse Direction) */}
      <div className="relative w-full">
         <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
         <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

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
        <div className="w-[300px] md:w-[400px] flex-shrink-0 bg-zinc-50 p-6 md:p-8 rounded-sm border border-zinc-100 hover:shadow-lg hover:border-zinc-200 transition-all duration-300">
            <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
            </div>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
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
