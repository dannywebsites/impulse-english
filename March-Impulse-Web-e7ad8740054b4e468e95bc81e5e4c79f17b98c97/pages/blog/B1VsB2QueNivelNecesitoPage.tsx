import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "B1 vs B2 Cambridge: ¿Qué Nivel Necesitas?",
    description: "Compara B1 y B2 de Cambridge: dificultad, reconocimiento laboral, uso académico y precio. Guía para elegir el nivel que necesitas según tu situación.",
    url: `${businessInfo.url}/blog/b1-vs-b2-que-nivel-necesito`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Es muy difícil pasar de B1 a B2?",
      answer: "El salto de B1 a B2 requiere 150-200 horas adicionales de estudio. Es el nivel donde más abandonan, por eso es importante una buena preparación estructurada."
    }

  ,
    {
      question: "¿B1 sirve para entrar a la universidad?",
      answer: "El B1 es el mínimo exigido para graduación en muchas universidades españolas, pero para acceso a programas Erasmus o posgrado suelen pedir B2."
    },
    {
      question: "¿Cuánto tiempo entre B1 y B2?",
      answer: "Con nivel B1 sólido, preparar el B2 First requiere entre 6 y 12 meses de estudio regular (6-8h/semana)."
    },
    {
      question: "¿B2 vale más en el mercado laboral?",
      answer: "Significativamente. El B2 abre puertas en multinacionales y puestos internacionales. El B1 es suficiente para roles nacionales con inglés funcional."
    },
    {
      question: "¿Puedo presentarme directamente al B2 sin haber hecho el B1?",
      answer: "Sí, no es obligatorio hacer el B1 antes. El B2 certifica el nivel independientemente del recorrido previo."
    }
  ];

export default function B1VsB2QueNivelNecesitoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG"
                alt="B1 vs B2 Cambridge, qué nivel necesito"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'B1 vs B2' }
                ]}
                variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Actualizado: Marzo 2026
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  B1 vs B2 Cambridge: ¿Qué Nivel Necesitas?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Guía completa para elegir entre B1 y B2: diferencias reales, reconocimiento laboral, uso académico y cómo saber cuál necesitas.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-emerald-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#resumen-comparativo" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Resumen comparativo B1 vs B2</a></li>
                <li><a href="#diferencias-examen" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Diferencias en el examen</a></li>
                <li><a href="#reconocimiento-laboral" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Reconocimiento laboral</a></li>
                <li><a href="#uso-academico" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Uso académico</a></li>
                <li><a href="#decide-situacion" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Decide según tu situación</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              B1 o B2: esta es una de las decisiones más frecuentes entre quienes quieren certificar su nivel de inglés en España. La respuesta correcta depende de tus objetivos académicos, laborales y de tu nivel actual. En esta guía analizamos las diferencias reales entre ambos niveles para que puedas decidir con datos, no con intuición.
            </p>

            {/* Section 1 - Resumen comparativo */}
            <section id="resumen-comparativo" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Resumen Comparativo B1 vs B2
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Aspecto</th>
                      <th className="text-left p-4 font-semibold">B1 Preliminary</th>
                      <th className="text-left p-4 font-semibold">B2 First</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Nombre del examen</td>
                      <td className="p-4 text-gray-700">Cambridge B1 Preliminary (PET)</td>
                      <td className="p-4 text-gray-700">Cambridge B2 First (FCE)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Duración del examen</td>
                      <td className="p-4 text-gray-700">~2 horas 20 min</td>
                      <td className="p-4 text-gray-700">~3 horas 30 min</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Precio aproximado</td>
                      <td className="p-4 text-gray-700">~130-150€</td>
                      <td className="p-4 text-gray-700">~180-210€</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Tasa de aprobados global</td>
                      <td className="p-4 text-gray-700">~75-80%</td>
                      <td className="p-4 text-gray-700">~65-70%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Reconocimiento laboral</td>
                      <td className="p-4 text-gray-700">Básico/medio</td>
                      <td className="p-4 text-emerald-600 font-medium">Alto / internacional</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Validez</td>
                      <td className="p-4 text-gray-700">Permanente</td>
                      <td className="p-4 text-gray-700">Permanente</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> Ambos certificados son permanentes y emitidos por Cambridge. La diferencia no está en la validez sino en qué puertas abre cada uno en el mercado laboral y académico español.
                </p>
              </div>
            </section>

            {/* Section 2 - Diferencias en el examen */}
            <section id="diferencias-examen" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Diferencias en el Examen
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Ambos exámenes evalúan las cuatro destrezas (Reading, Writing, Listening, Speaking) pero con niveles de exigencia muy distintos. Estas son las diferencias más importantes para los candidatos hispanohablantes:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Reading: mayor complejidad textual en B2
                  </h3>
                  <p className="text-gray-700">El B1 trabaja con textos cotidianos de 200-300 palabras. El B2 incluye artículos de opinión, textos académicos y periodísticos de 600-800 palabras con vocabulario especializado. La diferencia de dificultad es significativa.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Writing: formato y sofisticación
                  </h3>
                  <p className="text-gray-700">En B1 escribes emails, historias cortas y artículos sencillos (100-130 palabras). En B2 se exigen essays argumentativos, informes y reseñas de 140-190 palabras con registro formal, conectores avanzados y argumentación estructurada.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Use of English: exclusivo del B2
                  </h3>
                  <p className="text-gray-700">El B2 First incluye una sección específica de Use of English con key word transformations, word formation y open cloze. Esta sección no existe en el B1 y es donde más candidatos hispanohablantes pierden puntos.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Speaking: mayor fluidez y argumentación
                  </h3>
                  <p className="text-gray-700">El Speaking del B2 exige mantener un monólogo de 1 minuto describiendo y comparando imágenes, más una conversación colaborativa con argumento y negociación. En B1 las respuestas pueden ser más básicas.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Reconocimiento laboral */}
            <section id="reconocimiento-laboral" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Reconocimiento Laboral: B1 vs B2
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                En el mercado laboral español, el nivel de inglés certificado puede marcar la diferencia entre conseguir o no un puesto. Así se perciben ambos niveles por las empresas:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">B1 abre puertas en...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Empresas nacionales con inglés ocasional</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Puestos administrativos y atención al cliente</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Oposiciones con requisito de nivel básico</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Complemento de CV en sectores no internacionales</li>
                  </ul>
                </div>
                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">B2 abre puertas en...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Multinacionales y empresas con actividad internacional</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Puestos de gestión, marketing y comunicación</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Oposiciones con requisito de nivel avanzado</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Sector tecnológico, finanzas y consultoría</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Dato del mercado:</strong> En ofertas de trabajo en portales como InfoJobs o LinkedIn, el 60% que pide certificado de inglés requiere B2 o superior. El B1 satisface el 30% restante. Si buscas trabajo en sector internacional, el B2 no es opcional.
                </p>
              </div>
            </section>

            {/* Section 4 - Uso académico */}
            <section id="uso-academico" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Uso Académico: Universidades y Programas
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                En el sistema educativo español, los requisitos de inglés varían según el nivel de estudios. Esto es lo que necesitas saber:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Grado universitario (graduación)</h3>
                  <p className="text-gray-700">La mayoría de universidades españolas exigen B1 para graduarse. Sin embargo, cada vez más universidades públicas están subiendo el requisito mínimo a B2. Verifica los requisitos de tu universidad específica.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Erasmus y programas internacionales</h3>
                  <p className="text-gray-700">Para participar en programas Erasmus en países de habla inglesa, la mayoría exige B2. Para Erasmus en países no anglófonos, el B1 suele ser suficiente. Para dobles grados internacionales, B2 es el estándar.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Posgrado y máster</h3>
                  <p className="text-gray-700">Los másteres en España exigen casi universalmente B2 como mínimo. Los másteres internacionales o impartidos en inglés pueden pedir C1. Aquí el B1 resulta insuficiente en la mayoría de casos.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Oposiciones y administración pública</h3>
                  <p className="text-gray-700">Las oposiciones al cuerpo de maestros, diplomáticas y ciertos cuerpos del Estado exigen B2 o C1. En oposiciones autonómicas, el B1 puede ser suficiente o puntuar como mérito. Consulta las bases de cada convocatoria.</p>
                </div>
              </div>
            </section>

            {/* Section 5 - Decide */}
            <section id="decide-situacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Decide Según Tu Situación
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Usa esta guía rápida para elegir el nivel correcto según tus circunstancias:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Elige B1 si...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Tu nivel actual es A2-B1</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Necesitas certificado para graduarte</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Buscas trabajo en empresa nacional</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Quieres un paso previo al B2</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Tienes poco tiempo de preparación</li>
                  </ul>
                </div>
                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Elige B2 si...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Tu nivel actual es B1+ consolidado</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Buscas trabajo en multinacional</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Necesitas certificado para Erasmus o posgrado</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Quieres el certificado con más reconocimiento</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Tu sector exige nivel avanzado de inglés</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Recomendación general:</strong> Si dudas entre B1 y B2 y tu nivel lo permite, ve a por el B2. Un certificado más alto siempre es mejor que uno más bajo, y el esfuerzo adicional tiene un retorno claro en el mercado laboral y académico.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Conclusión
              </h2>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  La elección entre <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline font-medium">B1</a> y <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2</a> no es solo de dificultad, es de estrategia. El B2 abre significativamente más puertas laborales y académicas, pero requiere una preparación más seria. Si tu nivel actual lo permite, el B2 es la inversión más rentable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Lo más importante es partir de un diagnóstico de nivel correcto para no prepararse a un examen que no se puede aprobar ni infraprepararse para uno que está por debajo de tu nivel real. Te evaluamos sin compromiso para orientarte al examen correcto.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Evaluamos tu nivel actual y te orientamos al examen correcto</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Una prueba de nivel gratuita te dirá exactamente si estás listo para B1 o B2 y cuánto tiempo necesitarías prepararte.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Prueba de nivel gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/b1-preliminary/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Guía B1 Preliminary Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen B1: estructura, preparación y tasas de aprobados.</p>
                </a>
                <a href="/examenes-cambridge/b2-first/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Guía B2 First Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen B2 First: el más valorado en el mercado español.</p>
                </a>
                <a href="/blog/escala-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    La Escala Cambridge Explicada
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo funciona la puntuación Cambridge y qué significa tu nota.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <LeadForm />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Exámenes y certificaciones oficiales
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
