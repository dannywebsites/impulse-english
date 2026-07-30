import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { s3InfantilImages, s3CambridgeImages, courseImages, infantilImages, certificationImages } from '../src/data/images';
import type { OptimizedImageData } from '../src/data/images';

export default function CoursesSection() {
  const courses = [
    {
      category: "Todos los niveles",
      title: "Inglés general",
      description: "Curso de inglés general para niños y adultos, diseñado para mejorar la comprensión, la expresión oral y escrita, y el uso práctico del idioma en situaciones reales.",
      details: ["A1-C2", "Grupos reducidos", "Niños y adultos"],
      optimizedImage: courseImages.generalInfantil,
      link: "/cursos-ingles/infantil/"
    },
    {
      category: "Young Learners",
      title: "Preparación MOVERS",
      description: "Curso intensivo de preparación para el examen Cambridge MOVERS, adaptado a la edad y nivel del alumnado, con un enfoque dinámico y motivador.",
      details: ["Primaria", "Máx. 10 alumnos", "Cambridge"],
      optimizedImage: courseImages.preparacionMovers,
      link: "/cursos-ingles/primaria/"
    },
    {
      category: "Viernes y Sábados",
      title: "Extensivos",
      description: "Cursos extensivos de inglés general y preparación de exámenes Cambridge, ideales para quienes necesitan compatibilizar el aprendizaje con otras actividades.",
      details: ["Fin de semana", "Flexible", "Todos niveles"],
      optimizedImage: courseImages.extensivoSecundaria,
      link: "/cursos-ingles/secundaria/"
    },
    {
      category: "A2",
      title: "Preparación KET",
      description: "Curso intensivo de preparación para el examen Cambridge KET, con refuerzo de vocabulario, gramática y comprensión oral y escrita.",
      details: ["Nivel A2", "Máx. 10 alumnos", "Cambridge"],
      optimizedImage: courseImages.preparacionKet,
      link: "/examenes-cambridge/b1-preliminary/"
    }
  ];

  const additionalCourses = [
    {
      category: "Young Learners",
      title: "Preparación FLYERS",
      description: "Curso intensivo de preparación para el examen Cambridge FLYERS, enfocado a afianzar la base del idioma y ganar seguridad en el uso del inglés.",
      details: ["Primaria", "Máx. 10 alumnos", "Cambridge"],
      optimizedImage: infantilImages.kidsLearning,
      link: "/cursos-ingles/primaria/"
    },
    {
      category: "Anual",
      title: "Cambridge Extensivo",
      description: "Curso extensivo de preparación para los exámenes oficiales de Cambridge, enfocado a un progreso sólido y sostenido a lo largo del curso académico.",
      details: ["Todo el año", "Máx. 10 alumnos", "B1-C2"],
      optimizedImage: certificationImages.cambridgeCertificate,
      link: "/examenes-cambridge/"
    },
    {
      category: "B2 / C1 / C2",
      title: "First, Advanced y Proficiency",
      description: "Curso extensivo de preparación para los exámenes Cambridge FCE, CAE y CPE, con trabajo específico de las destrezas evaluadas y seguimiento continuo del progreso.",
      details: ["FCE / CAE / CPE", "Máx. 10 alumnos", "100% aprobados"],
      optimizedImage: certificationImages.studentC1,
      link: "/examenes-cambridge/b2-first/"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>

        {/* Additional courses row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {additionalCourses.map((course, index) => (
            <CourseCard key={index + 4} course={course} index={index + 4} />
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
