import React, { useState, useEffect } from 'react';
import { Zap, Clock, ChevronDown, ChevronUp, CheckCircle, Calendar, Target, Users, BookOpen } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Curso Intensivo Linguaskill Online 2026: Preparación Rápida",
    description: "Guía completa sobre cursos intensivos de Linguaskill online. Duración, modalidades, qué nivel puedes alcanzar y cómo prepararte rápidamente.",
    url: `${businessInfo.url}/linguaskill/curso-intensivo-linguaskill`,
    datePublished: "2025-01-12"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Cuánto tiempo necesito para prepararme para Linguaskill?",
      answer: "Depende de tu nivel actual y objetivo. Un candidato B1 que aspira a B2 necesita 6-8 semanas con 30 horas de curso intensivo más 20 horas de práctica personal. Candidatos A2 que buscan B1 requieren mínimo 10-12 semanas. Programas ultra-acelerados de 2-4 semanas funcionan solo para niveles B1-B2 consolidados que necesitan familiarizarse con el formato del examen."
    }

  ,
    {
      question: "¿Los cursos intensivos incluyen el test Linguaskill final?",
      answer: "La mayoría de programas completos incluyen un test Linguaskill (General o Business) en el precio del paquete, evitando costos adicionales de 75€ por módulo. Verifica siempre qué incluye tu curso: algunos ofrecen solo un módulo (Reading&Listening) mientras que paquetes premium incluyen los tres módulos (Reading&Listening, Writing, Speaking). El certificado Cambridge obtenido no tiene fecha de caducidad oficial."
    },
    {
      question: "¿Qué diferencia hay entre Linguaskill General y Business?",
      answer: "Ambas versiones evalúan las mismas competencias lingüísticas y utilizan tecnología adaptativa idéntica. La diferencia radica en el contexto del vocabulario y situaciones: Linguaskill General usa lenguaje cotidiano y social, mientras Linguaskill Business incorpora terminología profesional, emails corporativos, informes empresariales y situaciones laborales. Los cursos de preparación ajustan el contenido didáctico según la versión que necesites certificar."
    },
    {
      question: "¿Necesito equipo técnico especial para el curso y el examen?",
      answer: "Para el curso intensivo online necesitas ordenador/tablet con cámara y micrófono, conexión estable a internet (mínimo 5 Mbps) y navegador actualizado. Para el examen Linguaskill oficial requieres los mismos requisitos más ambiente silencioso sin interrupciones. El Speaking se graba mediante micrófono y las respuestas de Writing se escriben directamente en la plataforma del test, sin procesador de texto externo."
    },
    {
      question: "¿Los cursos intensivos preparan para todos los niveles CEFR?",
      answer: "Los cursos cubren niveles A2 a C1, aunque el examen Linguaskill certifica desde B1 hasta C2. Si tu nivel es A1, necesitas primero un curso general de inglés para alcanzar A2 antes de iniciar preparación específica Linguaskill. El placement test inicial que ofrecen los cursos intensivos determina tu nivel real y ajusta el contenido didáctico. No intentes certificar C2 con solo 4-6 semanas de preparación sin nivel C1 previo consolidado."
    }
  ];

export default function CursoIntensivoLinguaskillPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const courseFeatures = [
    { icon: Clock, title: "Formato flexible", description: "Clases online en directo o grabadas para estudiar a tu ritmo" },
    { icon: Target, title: "Enfoque al examen", description: "Práctica específica de los 4 módulos: Reading, Listening, Writing, Speaking" },
    { icon: Users, title: "Grupos reducidos", description: "Máximo 8-10 estudiantes para atención personalizada" },
    { icon: BookOpen, title: "Material incluido", description: "Acceso a plataforma con ejercicios, simulacros y recursos oficiales" }
  ];

  const weeklyPlan = [
    { week: "Semana 1-2", focus: "Reading & Listening", activities: "Familiarización con formato adaptativo, estrategias de comprensión, vocabulario clave" },
    { week: "Semana 3-4", focus: "Writing", activities: "Estructura de emails y ensayos, conectores, práctica con corrección automática y humana" },
    { week: "Semana 5-6", focus: "Speaking", activities: "Práctica de las 5 partes, fluidez, pronunciación, grabaciones con feedback" },
    { week: "Semana 7-8", focus: "Simulacros completos", activities: "Exámenes de práctica cronometrados, análisis de errores, estrategias finales" }
  ];

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG" alt="Aula tecnológica preparación Linguaskill Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Curso Intensivo Linguaskill' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Preparación Linguaskill
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Curso Intensivo Linguaskill Online: Preparación Rápida y Efectiva
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Prepárate para el examen Linguaskill en pocas semanas con cursos intensivos online. Estrategias, práctica y feedback personalizado.
            </p>
          </div>
        </div>
      </header>

      {/* Quick Info */}
      <section className="py-8 bg-orange-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">4-8</p>
                <p className="text-sm text-zinc-600">semanas</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">10-20h</p>
                <p className="text-sm text-zinc-600">semanales</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">+1</p>
                <p className="text-sm text-zinc-600">nivel CEFR</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">79€</p>
                <p className="text-sm text-zinc-600">desde/mes</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-zinc-600 leading-relaxed">
                ¿Necesitas certificar tu nivel de inglés con Linguaskill en poco tiempo? Los cursos intensivos online te permiten
                prepararte eficazmente en 4-8 semanas, combinando clases en directo, práctica autónoma y simulacros del formato
                adaptativo. Esta guía te explica qué buscar en un curso intensivo, cómo estructurar tu preparación y qué resultados
                puedes esperar según tu dedicación.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué incluye un buen curso intensivo de Linguaskill?
              </h2>
              <p className="text-zinc-600 mb-6">
                Un curso intensivo efectivo debe cubrir los 4 módulos del examen con práctica específica del formato adaptativo.
                No basta con mejorar tu inglés general; necesitas familiarizarte con los tipos de preguntas, la gestión del tiempo
                y las estrategias específicas de cada sección. Puedes consultar información oficial sobre el examen en la <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">página oficial de Cambridge Linguaskill</a> para entender mejor su estructura.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-5 flex items-start gap-4">
                    <div className="bg-orange-100 rounded-lg p-2">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{feature.title}</h4>
                      <p className="text-sm text-zinc-600">{feature.description}</p>
                    </div>

                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <p className="text-orange-800">
                  <strong>Elemento clave:</strong> Asegúrate de que el curso incluye práctica de Speaking con feedback real,
                  ya que es el módulo donde más diferencia marca la preparación guiada frente al autoaprendizaje.
                </p>
              </div>
            </section>

            {/* Section 2 - Weekly Plan */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Plan de estudio intensivo de 8 semanas
              </h2>
              <p className="text-zinc-600 mb-6">
                Esta es una estructura típica de un curso intensivo efectivo. Adapta las horas según tu disponibilidad,
                pero mantén el equilibrio entre los 4 módulos.
              </p>

              <div className="space-y-4 mb-6">
                {weeklyPlan.map((item, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-5 border-l-4 border-orange-400">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold w-fit">
                        {item.week}
                      </span>
                      <span className="font-bold text-zinc-900">{item.focus}</span>
                    </div>
                    <p className="text-zinc-600 text-sm">{item.activities}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Online vs Presencial */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Cursos online vs presenciales: ¿Qué elegir?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded text-sm">Online</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Flexibilidad horaria total",
                      "Acceso a grabaciones 24/7",
                      "Práctica con herramientas digitales",
                      "Simulacros similares al examen real",
                      "Ideal para autodisciplinados"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-sm">Presencial</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Interacción directa con profesor",
                      "Práctica de Speaking en vivo",
                      "Rutina de estudio estructurada",
                      "Corrección inmediata de errores",
                      "Motivación del grupo"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="bg-zinc-100 rounded-xl p-6">
                <p className="text-zinc-700">
                  <strong>Nuestra recomendación:</strong> En <a href="/academia-ingles-barrio-del-pilar" className="text-orange-600 hover:underline font-medium">nuestra academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada" className="text-orange-600 hover:underline font-medium">junto a La Vaguada</a>, ofrecemos un formato híbrido que combina
                  clases presenciales para Speaking con recursos online para práctica autónoma en nuestros <a href="/cursos-ingles/adultos" className="text-orange-600 hover:underline font-medium">cursos de inglés para adultos</a>. Esto te da lo mejor de ambos mundos
                  por solo 79€/mes.
                </p>
              </div>
            </section>

            {/* Section 4 - Impulse Highlight */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preparación Linguaskill en Impulse English Academy
              </h2>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-6">
                <h3 className="text-2xl font-bold mb-4">Curso Intensivo Linguaskill - 79€/mes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Incluye:</h4>
                    <ul className="space-y-2">
                      {[
                        "Clases en grupos reducidos (máx. 8)",
                        "Material de preparación oficial",
                        "Simulacros cronometrados",
                        "Práctica de Speaking con feedback",
                        "Corrección personalizada de Writing",
                        "Acceso a plataforma online"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Horarios flexibles:</h4>
                    <p className="text-sm text-white/90 mb-4">
                      Mañana, tarde y fines de semana. Adaptamos los grupos a tu disponibilidad para que puedas compaginar
                      la preparación con trabajo o estudios.
                    </p>
                    <a
              href="/contacto"
                      className="inline-block bg-white text-orange-600 font-bold py-2 px-6 rounded-lg hover:bg-zinc-100 transition-colors"
                    >
                      Solicitar información
                    </a>
                  </div>

                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas Frecuentes sobre Cursos Intensivos Linguaskill
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-zinc-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between bg-zinc-50 hover:bg-zinc-100 transition-colors"
                    >
                      <span className="font-semibold text-zinc-900">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-zinc-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-zinc-600">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Un curso intensivo de Linguaskill online es la forma más eficiente de prepararte para el examen en poco tiempo.
                  La clave está en elegir un programa que combine teoría, práctica de los 4 módulos y feedback personalizado,
                  especialmente en Speaking y Writing donde más diferencia marca la preparación guiada.
                </p>
                <p className="text-white/90">
                  En <strong>Impulse English Academy</strong> ofrecemos preparación intensiva de <a href="/linguaskill" className="text-white hover:underline font-medium">Linguaskill</a> y otros <a href="/examenes-cambridge" className="text-white hover:underline font-medium">exámenes Cambridge</a> desde <strong>79€/mes</strong>,
                  con profesores especializados en certificaciones Cambridge, <a href="/cursos-ingles/particulares" className="text-white hover:underline font-medium">clases particulares</a> disponibles y grupos reducidos para máxima atención.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Listo para prepararte para Linguaskill?
                    </h3>
                    <p className="text-zinc-400">
                      Empieza tu curso intensivo y certifica tu nivel en pocas semanas.
                    </p>
                  </div>
                  <a
              href="/contacto"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Empezar ahora
                  </a>
                </div>

              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/linguaskill" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-orange-600">GUÍA COMPLETA</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa del Examen Linguaskill 2026</h4>
                </a>
                <a href="/linguaskill/precios-fechas" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-orange-600">PRECIOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Precio del Test Linguaskill Online 2026</h4>
                </a>
              </div>
            </section>
          </div>

        </div>
      </article>

      <LeadForm />

      {/* External Authority Link */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-600 hover:underline"
          >
            → Más información en Cambridge English - Linguaskill oficial
          </a>
        </div>
      </section>

      <Footer />

</>
  );
}
