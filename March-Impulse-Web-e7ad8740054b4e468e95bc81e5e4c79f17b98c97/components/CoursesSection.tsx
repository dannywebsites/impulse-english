import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CoursesSectionProps {
  courseImageUrls?: Record<string, string>;
}

interface CourseItem {
  category: string;
  title: string;
  description: string;
  details: string[];
  imageUrl: string;
  imageAlt: string;
  link: string;
}

// Fallback URLs (public/images/academy/ paths — always available)
const FALLBACK_URLS: Record<string, string> = {
  generalInfantil: '/images/academy/students/curso-ingles-general-infantil.jpg',
  preparacionMovers: '/images/academy/students/curso-preparacion-movers-primaria.jpg',
  extensivoSecundaria: '/images/academy/students/curso-extensivo-secundaria.jpg',
  preparacionKet: '/images/academy/students/curso-preparacion-ket.jpg',
  kidsLearning: '/images/academy/students/ninos-aprendiendo-ingles-jugando.jpg',
  cambridgeCert: '/images/academy/students/certificado-oficial-cambridge-impulse.jpg',
  studentC1: '/images/academy/students/alumna-certificado-c1-cambridge.jpg',
};

export default function CoursesSection({ courseImageUrls }: CoursesSectionProps) {
  const urls = courseImageUrls ?? FALLBACK_URLS;

  const courses: CourseItem[] = [
    {
      category: "Todos los niveles",
      title: "Inglés general",
      description: "Curso de inglés general para niños y adultos, diseñado para mejorar la comprensión, la expresión oral y escrita, y el uso práctico del idioma en situaciones reales.",
      details: ["A1–C2", "Grupos reducidos", "Niños y adultos"],
      imageUrl: urls.generalInfantil ?? FALLBACK_URLS.generalInfantil,
      imageAlt: "Curso de inglés general infantil - Impulse English Academy",
      link: "/cursos-ingles/infantil"
    },
    {
      category: "Young Learners",
      title: "Preparación MOVERS",
      description: "Curso intensivo de preparación para el examen Cambridge MOVERS, adaptado a la edad y nivel del alumnado, con un enfoque dinámico y motivador.",
      details: ["Primaria", "Máx. 10 alumnos", "Cambridge"],
      imageUrl: urls.preparacionMovers ?? FALLBACK_URLS.preparacionMovers,
      imageAlt: "Preparación examen Cambridge MOVERS primaria - Impulse English Academy",
      link: "/cursos-ingles/primaria"
    },
    {
      category: "Viernes y Sábados",
      title: "Extensivos",
      description: "Cursos extensivos de inglés general y preparación de exámenes Cambridge, ideales para quienes necesitan compatibilizar el aprendizaje con otras actividades.",
      details: ["Fin de semana", "Flexible", "Todos niveles"],
      imageUrl: urls.extensivoSecundaria ?? FALLBACK_URLS.extensivoSecundaria,
      imageAlt: "Curso extensivo inglés secundaria - Impulse English Academy",
      link: "/cursos-ingles/secundaria"
    },
    {
      category: "A2",
      title: "Preparación KET",
      description: "Curso intensivo de preparación para el examen Cambridge KET, con refuerzo de vocabulario, gramática y comprensión oral y escrita.",
      details: ["Nivel A2", "Máx. 10 alumnos", "Cambridge"],
      imageUrl: urls.preparacionKet ?? FALLBACK_URLS.preparacionKet,
      imageAlt: "Preparación examen Cambridge KET nivel A2 - Impulse English Academy",
      link: "/examenes-cambridge/b1-preliminary"
    }
  ];

  const additionalCourses: CourseItem[] = [
    {
      category: "Young Learners",
      title: "Preparación FLYERS",
      description: "Curso intensivo de preparación para el examen Cambridge FLYERS, enfocado a afianzar la base del idioma y ganar seguridad en el uso del inglés.",
      details: ["Primaria", "Máx. 10 alumnos", "Cambridge"],
      imageUrl: urls.kidsLearning ?? FALLBACK_URLS.kidsLearning,
      imageAlt: "Niños aprendiendo inglés jugando - metodología Great Little People",
      link: "/cursos-ingles/primaria"
    },
    {
      category: "Anual",
      title: "Cambridge Extensivo",
      description: "Curso extensivo de preparación para los exámenes oficiales de Cambridge, enfocado a un progreso sólido y sostenido a lo largo del curso académico.",
      details: ["Todo el año", "Máx. 10 alumnos", "B1–C2"],
      imageUrl: urls.cambridgeCert ?? FALLBACK_URLS.cambridgeCert,
      imageAlt: "Certificado oficial centro preparador Cambridge - Impulse English Academy",
      link: "/examenes-cambridge"
    },
    {
      category: "B2 / C1 / C2",
      title: "First, Advanced y Proficiency",
      description: "Curso extensivo de preparación para los exámenes Cambridge FCE, CAE y CPE, con trabajo específico de las destrezas evaluadas y seguimiento continuo del progreso.",
      details: ["FCE / CAE / CPE", "Máx. 10 alumnos", "100% aprobados"],
      imageUrl: urls.studentC1 ?? FALLBACK_URLS.studentC1,
      imageAlt: "Alumna con certificado C1 Advanced Cambridge - caso de éxito",
      link: "/examenes-cambridge/b2-first"
    }
  ];

  return (
    <section id="courses" className="w-full bg-white py-12 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
            <div className="max-w-2xl">
                <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
                    ¡Tu primera opción!
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
                    Aprende inglés en todos los niveles:
                </h2>
                <div className="w-24 h-1 bg-accent-blue/20"></div>
                <p className="text-lg text-zinc-600 mt-6 max-w-xl leading-relaxed">
                    En nuestra escuela de idiomas en Madrid, impartimos cursos de inglés para todos los niveles, desde principiante hasta avanzado (A1–C2), con especialización en preparación de exámenes Cambridge.
                </p>
            </div>
            <a href="/cursos-ingles/particulares/" className="text-zinc-500 hover:text-accent-blue font-medium flex items-center gap-2 transition-colors">
                Clases Particulares <ArrowRight className="w-4 h-4" />
            </a>
        </div>

        {/* Intro text */}
        <div className="mb-10 max-w-3xl">
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

function CourseCard({ course, index }: { course: CourseItem, index: number }) {
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
    <div className="group relative flex flex-col bg-zinc-50 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-zinc-100">

      {/* Image Container */}
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-white border border-zinc-200 text-xs font-bold text-zinc-500 uppercase tracking-wider rounded-sm">
                {course.category}
            </span>
        </div>

        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">
            {course.title}
        </h3>

        <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
            {course.description}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-1 border-t border-zinc-200 pt-4 mb-4">
            {course.details.map((detail: string, i: number) => (
                <div key={i} className="text-center">
                    <span className="block text-[10px] font-semibold text-zinc-900">{detail}</span>
                </div>
            ))}
        </div>

        <a
            ref={buttonRef}
            href={course.link}
            className={`w-full py-3 bg-white border border-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-widest hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-400 ease-out transform text-center block
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
