import React, { useEffect } from 'react';
import { Euro, CheckCircle, ArrowRight, MessageCircle, Phone, Users, BookOpen, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import Breadcrumb from '../components/Breadcrumb';
import { NAP } from '../utils/napData';
import type { FAQItem } from '../utils/schemaData';

export const faqs: FAQItem[] = [
  {
    question: "¿Cuánto cuestan las clases de inglés en Impulse?",
    answer: "Nuestros precios van desde 64€ hasta 79€ al mes, dependiendo del curso y la modalidad. Ofrecemos descuento trimestral. Contacta con nosotros para conocer la tarifa exacta para tu caso."
  },
  {
    question: "¿Hay matrícula o coste de inscripción?",
    answer: "Sí, hay matrícula y libro de texto que van aparte como coste adicional. La cuota mensual incluye las clases semanales y el seguimiento personalizado."
  },
  {
    question: "¿Qué incluye el precio de las clases?",
    answer: "La cuota mensual incluye clases semanales, simulacros de examen, seguimiento personalizado del progreso y acceso a recursos online complementarios. El libro de texto y la matrícula son un extra aparte."
  },
  {
    question: "¿Ofrecéis descuentos?",
    answer: "Sí, ofrecemos descuento por pago trimestral y descuento para familias con más de un hijo matriculado. Consulta las condiciones exactas."
  },
  {
    question: "¿Cuánto cuesta preparar un examen Cambridge?",
    answer: "La preparación Cambridge está incluida en nuestros cursos regulares. Solo pagas la tasa de examen aparte (varía según nivel). Consulta fechas y precios en nuestra página de exámenes Cambridge."
  },
  {
    question: "¿Puedo hacer una clase de prueba antes de matricularme?",
    answer: "Sí, ofrecemos una prueba de nivel gratuita de 25 minutos donde evaluamos tu nivel y te recomendamos el curso más adecuado, sin compromiso."
  }
];

const courses = [
  {
    name: "Infantil",
    ages: "2–5 años",
    price: "Desde 64€/mes",
    desc: "Metodología Great Little People. Aprenden jugando desde los 2 años.",
    href: "/cursos-ingles/infantil/"
  },
  {
    name: "Primaria",
    ages: "6–12 años",
    price: "71€/mes",
    desc: "Cambridge Young Learners. Refuerzo escolar y preparación de exámenes.",
    href: "/cursos-ingles/primaria/"
  },
  {
    name: "Secundaria",
    ages: "13–17 años",
    price: "Desde 75€/mes",
    desc: "Preparación Cambridge B1/B2/C1 y EBAU. Grupos reducidos.",
    href: "/cursos-ingles/secundaria/"
  },
  {
    name: "Adultos",
    ages: "Todos los niveles",
    price: "79€/mes",
    desc: "Desde principiante hasta C2. Conversación, Cambridge y Linguaskill.",
    href: "/cursos-ingles/adultos/"
  },
  {
    name: "Clases Particulares",
    ages: "Todas las edades",
    price: "A consultar",
    desc: "Clases individuales presenciales u online, adaptadas a tu ritmo.",
    href: "/cursos-ingles/particulares/"
  },
  {
    name: "Clases Online",
    ages: "Todas las edades",
    price: "A consultar",
    desc: "Misma calidad desde casa. Plataforma interactiva y profesor en directo.",
    href: "/contacto/"
  }
];

const included = [
  "Clases semanales en grupos reducidos (máx. 7-10)",
  "Material didáctico incluido",
  "Simulacros de examen Cambridge",
  "Seguimiento personalizado del progreso",
  "Matrícula y libro aparte",
  "Descuento trimestral disponible"
];

export default function PreciosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-blue/95 to-[#0a3560]"></div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Precios' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <Euro className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Tarifas
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Precios y Tarifas
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Inglés de calidad a precios accesibles. Precios claros, sin sorpresas.
            </p>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a
                href="/reservar-clase/"
                className="bg-brand-red hover:bg-[#d4444e] text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                Reservar Prueba Gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`${NAP.whatsappUrl}?text=Hola,%20me%20gustaría%20información%20sobre%20precios`}
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

      {/* Price Range Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-accent-blue/5 border border-accent-blue/10 rounded-full px-6 py-3 mb-8">
              <Euro className="w-6 h-6 text-accent-blue" />
              <span className="text-accent-blue font-display font-medium">Precios mensuales</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
              Desde 64€ hasta 79€<span className="text-accent-blue">/mes</span>
            </h2>
            <p className="text-lg text-zinc-600 font-display">
              Dependiendo del curso y la modalidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Pricing Overview */}
      <section className="py-16 md:py-24 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Tarifas por Tipo de Curso
            </h2>
            <p className="text-zinc-600 text-lg">
              Encuentra el curso perfecto para ti o tu familia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-zinc-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  {i === 0 && <Users className="w-6 h-6 text-accent-blue" />}
                  {i === 1 && <BookOpen className="w-6 h-6 text-accent-blue" />}
                  {i === 2 && <Award className="w-6 h-6 text-accent-blue" />}
                  {i === 3 && <Users className="w-6 h-6 text-accent-blue" />}
                  {i === 4 && <Phone className="w-6 h-6 text-accent-blue" />}
                  {i === 5 && <MessageCircle className="w-6 h-6 text-accent-blue" />}
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg">{course.name}</h3>
                    <span className="text-zinc-500 text-sm">{course.ages}</span>
                  </div>
                </div>
                <p className="text-accent-blue font-bold text-xl mb-2">{course.price}</p>
                <p className="text-zinc-600 text-sm mb-4 flex-grow">{course.desc}</p>
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={`${NAP.whatsappUrl}?text=Hola,%20me%20gustaría%20conocer%20el%20precio%20del%20curso%20de%20${encodeURIComponent(course.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar precio exacto
                  </a>
                  <a
                    href={course.href}
                    className="text-accent-blue font-semibold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Ver detalles del curso <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Quieres conocer el precio exacto para tu caso?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Cada alumno es diferente. Contacta con nosotros y te daremos un presupuesto personalizado sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${NAP.whatsappUrl}?text=Hola,%20me%20gustaría%20conocer%20los%20precios%20de%20los%20cursos`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="/reservar-clase/"
              className="bg-white text-accent-blue font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors flex items-center gap-2"
            >
              Reservar Prueba Gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre precios
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

      {/* Exam Pricing Info */}
      <section className="py-12 md:py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 text-center">
            Precios de Exámenes Oficiales
          </h2>
          <p className="text-zinc-600 text-center mb-8 max-w-2xl mx-auto">
            Las tasas de exámenes oficiales Cambridge y Linguaskill son independientes de la cuota del curso. Consulta precios y fechas actualizados en nuestras páginas de exámenes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/examenes-cambridge/fechas-precios/"
              className="bg-white p-6 rounded-xl border border-zinc-200 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">
                Exámenes Cambridge
              </h3>
              <p className="text-zinc-600 text-sm mb-3">
                Pre-A1 Starters hasta C2 Proficiency. Fechas y tasas oficiales.
              </p>
              <span className="text-accent-blue font-semibold text-sm inline-flex items-center gap-1">
                Ver fechas y precios <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="/linguaskill/precios-fechas/"
              className="bg-white p-6 rounded-xl border border-zinc-200 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">
                Linguaskill
              </h3>
              <p className="text-zinc-600 text-sm mb-3">
                Certificado en 48 horas. Reconocido por universidades y empresas.
              </p>
              <span className="text-accent-blue font-semibold text-sm inline-flex items-center gap-1">
                Ver precios y fechas <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* LeadForm Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Solicita Tu Presupuesto
              </h2>
              <p className="text-zinc-600 mb-8">
                Rellena el formulario y te contactamos en menos de 24 horas con toda la información sobre precios y disponibilidad.
              </p>
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
                <a
                  href={NAP.phoneTel}
                  className="bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </div>
              <p className="text-zinc-500 mt-6 text-sm">
                {NAP.fullAddress}
              </p>
            </div>
            <div>
              <LeadForm
                title="Consulta de Precios"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Solicitar Información"
                source="precios"
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
