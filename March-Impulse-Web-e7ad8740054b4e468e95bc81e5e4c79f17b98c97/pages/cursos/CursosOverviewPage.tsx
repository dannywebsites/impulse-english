import React, { useEffect } from 'react';
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle, Star, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';

const courses = [
  {
    name: "Infantil (2-5 años)",
    method: "Great Little People",
    description: "Aprendizaje natural del inglés a través del juego y la inmersión. Grupos de máximo 8 niños con profesores especializados en primera infancia.",
    href: "/cursos-ingles/infantil",
    image: "/images/academy/facilities/infantil-classes.jpg",
    age: "2-5 años"
  },
  {
    name: "Primaria (6-12 años)",
    method: "Cambridge Young Learners",
    description: "Refuerzo del inglés escolar con metodología comunicativa. Preparación para exámenes Cambridge Young Learners (Starters, Movers, Flyers).",
    href: "/cursos-ingles/primaria",
    image: "/images/academy/facilities/primary-classes-students-smiling.jpg",
    age: "6-12 años"
  },
  {
    name: "Secundaria (13-17 años)",
    method: "Cambridge B1/B2/C1 + EBAU",
    description: "Preparación para selectividad y certificaciones Cambridge. Enfoque en speaking y writing para destacar en la EBAU.",
    href: "/cursos-ingles/secundaria",
    image: "/images/academy/facilities/secondary-classes-student-happy.jpg",
    age: "13-17 años"
  },
  {
    name: "Adultos",
    method: "Todos los niveles (A1-C2)",
    description: "Clases de inglés para profesionales y adultos. Conversación, inglés para trabajo, viajes y preparación de certificaciones oficiales.",
    href: "/cursos-ingles/adultos",
    image: "/images/academy/facilities/adult-one-to-one-classes.jpg",
    age: "18+ años"
  },
  {
    name: "Clases Particulares",
    method: "Presencial u online",
    description: "Atención 100% personalizada. Ritmo adaptado a tus objetivos: exámenes, trabajo, viajes o refuerzo escolar.",
    href: "/cursos-ingles/particulares",
    image: "/images/academy/team/daniel-helping-secondary-school-students.jpg",
    age: "Todas las edades"
  },
  {
    name: "Online",
    method: "Clases en directo por videollamada",
    description: "La misma calidad que nuestras clases presenciales, desde cualquier lugar. Grupos reducidos e interacción real con el profesor.",
    href: "/cursos-ingles/online",
    image: "/images/academy/facilities/technology-based-classroom-photo.jpg",
    age: "Todas las edades"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "¿Qué cursos de inglés ofrecéis?",
    answer: "Ofrecemos cursos para todas las edades y niveles: Infantil (2-5 años) con metodología Great Little People, Primaria (6-12 años) con Cambridge Young Learners, Secundaria (13-17 años) con preparación Cambridge B1/B2/C1 y EBAU, Adultos (todos los niveles A1-C2), Clases Particulares presenciales u online, y Clases Online en directo por videollamada."
  },
  {
    question: "¿Qué metodología utilizáis en vuestros cursos de inglés?",
    answer: "Utilizamos metodologías adaptadas a cada edad: Great Little People para infantil (aprendizaje 100% en inglés a través del juego), Cambridge Young Learners para primaria, preparación específica Cambridge y EBAU para secundaria, y un enfoque comunicativo para adultos centrado en la conversación desde el primer día. Todos los cursos siguen el Marco Común Europeo de Referencia (MCER)."
  },
  {
    question: "¿Cuántos alumnos hay por grupo en las clases de inglés?",
    answer: "Nuestros grupos son reducidos: máximo 7-10 alumnos por clase según el curso. Esto garantiza atención personalizada real y mayor participación de cada alumno. También ofrecemos clases particulares individuales o en parejas."
  },
  {
    question: "¿Ofrecéis prueba de nivel gratuita?",
    answer: "Sí, ofrecemos una prueba de nivel gratuita de 25 minutos sin compromiso. Evaluamos tu nivel actual de inglés y te recomendamos el curso más adecuado para tus objetivos. Puedes reservarla por WhatsApp, teléfono o a través de nuestra web."
  },
  {
    question: "¿Qué certificaciones oficiales puedo obtener?",
    answer: "Somos Centro Oficial de Preparación Cambridge. Preparamos todos los niveles: Pre-A1 Starters, A1 Movers, A2 Flyers, A2 Key, B1 Preliminary, B2 First, C1 Advanced y C2 Proficiency. También ofrecemos preparación para Linguaskill, con certificado en 48 horas. En el curso 24/25 tenemos un 100% de aprobados."
  },
  {
    question: "¿Cuáles son los precios de los cursos de inglés?",
    answer: "Nuestros precios van desde 64€ hasta 79€ al mes, dependiendo del curso y la modalidad. No cobramos matrícula y el material didáctico está incluido. Ofrecemos descuento por pago trimestral. Consulta todos los detalles en nuestra página de precios o solicita información sin compromiso."
  }
];

export default function CursosOverviewPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/academy/locations/outside-academy.jpg"
            alt="Impulse English Academy fachada exterior Madrid Norte"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Cursos' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <BookOpen className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Todos los cursos
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Cursos de Inglés en Madrid Norte
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Programas para todas las edades — desde 2 años hasta adultos
            </p>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro Oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">100% Aprobados 24/25</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Grupos Reducidos</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a
                href="/reservar-clase/"
                className="bg-brand-red hover:bg-[#d4444e] text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                Reservar Prueba de Nivel Gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`${NAP.whatsappUrl}?text=Hola,%20me%20gustaría%20información%20sobre%20los%20cursos%20de%20inglés`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nuestros Cursos de Inglés
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Elige el programa que mejor se adapte a tu edad, nivel y objetivos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <a
                key={i}
                href={course.href}
                className="group bg-white rounded-xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={`Curso de inglés ${course.name} en Impulse English Academy Madrid`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-wider rounded-full">
                      {course.age}
                    </span>
                    <span className="text-zinc-400 text-sm">{course.method}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent-blue font-semibold text-sm group-hover:gap-2 transition-all">
                    Ver curso <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Por Qué Elegir Impulse English Academy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl border border-zinc-100">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-3">Centro Oficial Cambridge</h3>
              <p className="text-zinc-600 text-sm">
                Centro autorizado de preparación de exámenes Cambridge. Preparación y examen en el mismo lugar.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl border border-zinc-100">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-3">Grupos Reducidos Máx. 10</h3>
              <p className="text-zinc-600 text-sm">
                Máximo 7-10 alumnos por clase para garantizar atención personalizada y participación activa.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl border border-zinc-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-3">100% Aprobados 24/25</h3>
              <p className="text-zinc-600 text-sm">
                Todos nuestros alumnos presentados a exámenes Cambridge en el curso 24/25 han aprobado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Conoce nuestra academia
            </h2>
            <p className="text-zinc-600">
              Descubre nuestras instalaciones y metodología
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Cursos de inglés en Madrid Norte"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Cambridge Exam Levels */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Preparación Cambridge Todos los Niveles
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">Pre-A1 Starters</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A1 Movers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Flyers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Key</span>
            <a href="/examenes-cambridge/b1-preliminary/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">B1 Preliminary</a>
            <a href="/examenes-cambridge/b2-first/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-yellow-400 hover:text-blue-900 transition-colors">B2 First</a>
            <a href="/examenes-cambridge/c1-advanced/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">C1 Advanced</a>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">C2 Proficiency</span>
          </div>
          <div className="bg-white/10 p-4 rounded-xl inline-block mb-8">
            <p className="text-white/90 font-medium">
              <a href="/linguaskill/" className="underline hover:text-yellow-300 transition-colors">Linguaskill</a> también disponible - Certificado en 48 horas
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/examenes-cambridge/"
              className="bg-white text-accent-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
            >
              Ver todos los exámenes Cambridge
            </a>
            <a
              href="/linguaskill/"
              className="bg-white/10 text-white border border-white/30 font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-accent-blue transition-colors"
            >
              Conocer Linguaskill
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Preguntas Frecuentes sobre Nuestros Cursos de Inglés
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-50 rounded-xl p-6">
                <h3 className="font-bold text-zinc-900 mb-3">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + LeadForm Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Empieza Tu Curso de Inglés Hoy
              </h2>
              <p className="text-zinc-600 mb-6">
                Reserva tu prueba de nivel gratuita y te recomendamos el curso perfecto para ti. Sin compromiso.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-700">Prueba de nivel gratuita de 25 minutos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-700">Sin matrícula ni permanencia</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-700">Material didáctico incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-700">Descuento por pago trimestral</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href={NAP.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp {NAP.phone}
                </a>
              </div>
              <p className="text-zinc-500 mt-6 text-sm">
                <a href="/precios/" className="text-accent-blue hover:underline font-medium">Ver precios</a> · {NAP.fullAddress}
              </p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="cursos-overview"
                showPhone={true}
                showAge={true}
                showLevel={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
