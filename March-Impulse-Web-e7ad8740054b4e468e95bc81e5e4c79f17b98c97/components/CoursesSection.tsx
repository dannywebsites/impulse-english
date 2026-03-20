import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { s3InfantilImages, s3CambridgeImages } from '../src/data/images';

export default function CoursesSection() {
  const courses = [
    {
      category: "Todos los niveles",
      title: "Inglés general",
      description: "Curso de inglés general para niños y adultos, diseñado para mejorar la comprensión, la expresión oral y escrita, y el uso práctico del idioma en situaciones reales.",
      details: ["A1–C2", "Grupos reducidos", "Niños y adultos"],
      image: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/INFANTIL.jpg",
      link: "/cursos-ingles/infantil"
    },
    {
      category: "Young Learners",
      title: "Preparación MOVERS",
      description: "Curso intensivo de preparación para el examen Cambridge MOVERS, adaptado a la edad y nivel del alumnado, con un enfoque dinámico y motivador.",
      details: ["Primaria", "Máx. 10 alumnos", "Cambridge"],
      image: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/PRIAMRY.jpg",
      link: "/cursos-ingles/primaria"
    },
    {
      category: "Viernes y Sábados",
      title: "Extensivos",
      description: "Cursos extensivos de inglés general y preparación de exámenes Cambridge, ideales para quienes necesitan compatibilizar el aprendizaje con otras actividades.",
      details: ["Fin de semana", "Flexible", "Todos niveles"],
      image: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/SECONDARY+OFF.jpg",
      link: "/cursos-ingles/secundaria"
    },
    {
      category: "A2",
      title: "Preparación KET",
      description: "Curso intensivo de preparación para el examen Cambridge KET, con refuerzo de vocabulario, gramática y comprensión oral y escrita.",
      details: ["Nivel A2", "Máx. 10 alumnos", "Cambridge"],
      image: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg",
      link: "/examenes-cambridge/b1-preliminary"
    }
  ];

  const additionalCourses = [
    {
      category: "Young Learners",
      title: "Preparación FLYERS",
      description: "Curso intensivo de preparación para el examen Cambridge FLYERS, enfocado a afianzar la base del idioma y ganar seguridad en el uso del inglés.",
      details: ["Primaria", "Máx. 10 alumnos", "Cambridge"],
      image: s3InfantilImages.glpClass.url,
      link: "/cursos-ingles/primaria"
    },
    {
      category: "Anual",
      title: "Cambridge Extensivo",
      description: "Curso extensivo de preparación para los exámenes oficiales de Cambridge, enfocado a un progreso sólido y sostenido a lo largo del curso académico.",
      details: ["Todo el año", "Máx. 10 alumnos", "B1–C2"],
      image: s3CambridgeImages.cambridgeCertificate.url,
      link: "/examenes-cambridge"
    },
    {
      category: "B2 / C1 / C2",
      title: "First, Advanced y Proficiency",
      description: "Curso extensivo de preparación para los exámenes Cambridge FCE, CAE y CPE, con trabajo específico de las destrezas evaluadas y seguimiento continuo del progreso.",
      details: ["FCE / CAE / CPE", "Máx. 10 alumnos", "100% aprobados"],
      image: s3CambridgeImages.laraC1Cert.url,
      link: "/examenes-cambridge/b2-first"
    }
  ];

  return (
    <section id="courses" className="w-full bg-white py-12 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
            <div className="max-w-2xl">
                <span className="text-accent-blue font-bold tracking-widest text-xs uppercase mb-4 block">
                    ¡Tu primera opción!
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight">
                    Aprende inglés en todos los niveles:
                </h2>
                <p className="text-lg text-zinc-600 mt-6 max-w-xl leading-relaxed">
                    En nuestra escuela de idiomas en Madrid, impartimos cursos de inglés para todos los niveles, desde principiante hasta avanzado (A1–C2), con especialización en preparación de exámenes Cambridge.
                </p>
            </div>
            <Link to="/cursos-ingles/particulares" className="text-zinc-500 hover:text-accent-blue font-medium flex items-center gap-2 transition-colors">
                Clases Particulares <ArrowRight className="w-4 h-4" />
            </Link>
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

function CourseCard({ course, index }: { course: any, index: number }) {
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
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

        <Link
            ref={buttonRef}
            to={course.link}
            className={`w-full py-3 bg-white border border-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-widest hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-400 ease-out transform text-center block
                ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-5 scale-95'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            Más Información
        </Link>
      </div>
    </div>
  );
}
