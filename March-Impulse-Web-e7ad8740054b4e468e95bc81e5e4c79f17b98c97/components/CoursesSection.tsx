import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { courseImages, infantilImages, certificationImages, studentImages, teamImages } from '../src/data/images';
import type { OptimizedImageData } from '../src/data/images';

export default function CoursesSection() {
  // These six cards mirror /cursos-ingles/ exactly — one card per course page, same order,
  // same group size. The homepage used to sell a different taxonomy entirely (MOVERS, KET,
  // FLYERS, Extensivos) with "Máx. 10 alumnos" on every card, including the adult courses
  // that are capped at 8. Group sizes here are the approved per-course figures:
  // Infantil 7 · Primaria 10 · Secundaria 10 · Adultos 8 · Online 8 · Particulares 1:1.
  const courses = [
    {
      category: "2 a 5 años",
      title: "Infantil",
      description: "Inmersión total en inglés a través del juego con la metodología Great Little People, en grupos muy pequeños para que cada niño hable en cada clase.",
      details: ["Great Little People", "Máx. 7 niños", "Desde 64 €/mes"],
      optimizedImage: infantilImages.greatLittlePeople,
      link: "/cursos-ingles/infantil/"
    },
    {
      category: "6 a 12 años",
      title: "Primaria",
      description: "Inglés estructurado con preparación Cambridge Young Learners — Starters, Movers y Flyers — para construir una base sólida sin perder la motivación.",
      details: ["Cambridge Young Learners", "Máx. 10 alumnos", "83 €/mes"],
      optimizedImage: courseImages.preparacionMovers,
      link: "/cursos-ingles/primaria/"
    },
    {
      category: "13 a 17 años",
      title: "Secundaria",
      description: "Preparación de EBAU y de los exámenes Cambridge B1, B2 y C1, con seguimiento continuo del progreso y simulacros periódicos.",
      details: ["EBAU + Cambridge B1-C1", "Máx. 10 alumnos", "Desde 87 €/mes"],
      optimizedImage: studentImages.teenagers,
      link: "/cursos-ingles/secundaria/"
    }
  ];

  const additionalCourses = [
    {
      category: "Adultos",
      title: "Inglés para adultos",
      description: "Clases orientadas a objetivos reales: trabajo, viajes o certificación. Preparación Cambridge y Linguaskill en grupos de máximo ocho personas.",
      details: ["Cambridge y Linguaskill", "Máx. 8 alumnos", "94 €/mes"],
      optimizedImage: certificationImages.studentC1,
      link: "/cursos-ingles/adultos/"
    },
    {
      category: "Uno a uno",
      title: "Clases particulares",
      description: "Clases individuales presenciales u online, con el temario y el horario construidos íntegramente alrededor de tu objetivo y tu ritmo.",
      details: ["1 a 1", "Horario flexible", "29 €/hora"],
      optimizedImage: courseImages.preparacionKet,
      link: "/cursos-ingles/particulares/"
    },
    {
      category: "Desde cualquier lugar",
      title: "Inglés online",
      description: "Clases en directo por videoconferencia con el mismo profesorado y la misma preparación Cambridge que en el aula, para toda España.",
      details: ["En directo", "Máx. 8 alumnos", "Desde 64 €/mes"],
      optimizedImage: teamImages.estudiantesSonriendo,
      link: "/cursos-ingles/online/"
    }
  ];

  return (
    <section id="courses" className="section w-full bg-white px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
                <span className="eyebrow mb-4">
                    ¡Tu primera opción!
                </span>
                <h2 className="t-h2 text-zinc-900 mb-5">
                    Aprende inglés en todos los niveles:
                </h2>
                <div className="rule"></div>
                <p className="t-lede text-zinc-600 mt-6 max-w-xl">
                    En nuestra escuela de idiomas en Madrid, impartimos cursos de inglés para todos los niveles, desde principiante hasta avanzado (A1-C2), con especialización en preparación de exámenes Cambridge.
                </p>
            </div>
            <a href="/cursos-ingles/particulares/" className="group flex shrink-0 items-center gap-2 font-medium text-zinc-500 transition-colors hover:text-accent-blue">
                Clases Particulares <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
        </div>

        {/* Intro text */}
        <div className="mb-12 measure">
          <p className="text-zinc-600 leading-relaxed">
            Ofrecemos: <strong>Inglés general para niños, jóvenes y adultos</strong> · Cursos presenciales adaptados al ritmo de cada alumno · Preparación de exámenes oficiales de Cambridge · Clases orientadas a objetivos académicos y profesionales.
          </p>
          <p className="text-zinc-600 leading-relaxed mt-4">
            Aprender inglés con nosotros es efectivo, estructurado y motivador. Creemos que el progreso real se consigue con constancia, buen método y acompañamiento continuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>

        {/* Additional courses row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {additionalCourses.map((course, index) => (
            <CourseCard key={index + 3} course={course} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, index }: { course: { title: string; category: string; description: string; details: string[]; optimizedImage: OptimizedImageData; link: string }, index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="card-interactive group relative flex flex-col overflow-hidden">

      {/* Image Container */}
      <div className="aspect-[16/10] w-full overflow-hidden">
        <picture>
          <source
            type="image/webp"
            srcSet={`${course.optimizedImage.sizes.sm.webp} 400w, ${course.optimizedImage.sizes.md.webp} 800w, ${course.optimizedImage.sizes.lg.webp} 1200w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <source
            type="image/jpeg"
            srcSet={`${course.optimizedImage.sizes.sm.jpg} 400w, ${course.optimizedImage.sizes.md.jpg} 800w, ${course.optimizedImage.sizes.lg.jpg} 1200w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <img
            src={course.optimizedImage.sizes.md.jpg}
            alt={course.optimizedImage.alt}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
            <span className="eyebrow text-accent-blue">
                {course.category}
            </span>
        </div>

        <h3 className="t-h3 text-zinc-900 mb-2 transition-colors group-hover:text-accent-blue">
            {course.title}
        </h3>

        <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
            {course.description}
        </p>

        {/* Detail pills. Three centred micro-labels in an equal grid read as
            filler; inline chips read as facts. */}
        <div className="mb-5 flex flex-wrap gap-1.5 border-t border-zinc-200/80 pt-4">
            {course.details.map((detail: string, i: number) => (
                <span key={i} className="rounded-full bg-accent-blue-50 px-2.5 py-1 text-[11px] font-medium text-accent-blue-800">
                    {detail}
                </span>
            ))}
        </div>

        <a
            ref={buttonRef}
            href={course.link}
            className={`block w-full rounded-lg border border-zinc-200 bg-white py-3 text-center text-xs font-bold uppercase tracking-widest text-zinc-900 transition-all duration-400 ease-out hover:border-accent-blue hover:bg-accent-blue hover:text-white motion-reduce:transition-none
                ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-5 scale-95'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            Más Información
        </a>
      </div>
    </div>
  );
}
