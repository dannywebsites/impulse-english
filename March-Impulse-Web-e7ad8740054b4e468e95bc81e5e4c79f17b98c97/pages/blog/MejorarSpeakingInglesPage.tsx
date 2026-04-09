import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

export const articleSchema = generateArticleSchema({
    headline: "Cómo Mejorar el Speaking en Inglés: Guía Práctica",
    description: "Mejora tu speaking en inglés: técnicas de fluidez, pronunciación y confianza. Ejercicios prácticos para hacer solo o en grupo con resultados en 4 semanas.",
    url: `${businessInfo.url}/blog/mejorar-speaking-ingles`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Cuánto tiempo se tarda en mejorar el speaking?",
      answer: "Con práctica diaria de 20-30 minutos, la mayoría nota mejora en fluidez en 4-6 semanas. La pronunciación mejora más lentamente (3-6 meses)."
    }

  ,
    {
      question: "¿Puedo mejorar el speaking sin hablantes nativos?",
      answer: "Sí. El shadowing, el hablar en voz alta solo, grabarte y las apps de conversación con IA son efectivos. Los hablantes nativos ayudan pero no son imprescindibles."
    },
    {
      question: "¿Importa el acento en inglés?",
      answer: "En contextos profesionales, lo importante es la claridad, no el acento. Un acento español reconocible no perjudica si articulas bien. Forzar un acento nativo puede aumentar la ansiedad."
    },
    {
      question: "¿Cómo practicar speaking para Cambridge?",
      answer: "Para el B2 First, practica: describir fotos (1 min), dar opiniones estructuradas, debate en pares. Las secciones del examen tienen formatos específicos que hay que practicar."
    }
  ];

export default function MejorarSpeakingInglesPage() {
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
                src={blogImages.adultOneToOne.url}
                alt="Mejorar el speaking en inglés con clases one-to-one"
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
                  { label: 'Mejorar Speaking' }
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
                  Cómo Mejorar el Speaking en Inglés: Guía Práctica
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Técnicas de fluidez, pronunciación y confianza para mejorar tu speaking en inglés, con ejercicios que puedes practicar solo y resultados en 4 semanas.
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
                <li><a href="#pilares-speaking" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Los 5 pilares del buen speaking</a></li>
                <li><a href="#tecnicas-fluidez" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Técnicas de fluidez</a></li>
                <li><a href="#ejercicios-pronunciacion" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Ejercicios de pronunciación</a></li>
                <li><a href="#practicar-solo" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo practicar speaking solo</a></li>
                <li><a href="#speaking-examenes" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Speaking para exámenes Cambridge</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              El speaking es la habilidad que más beneficio profesional aporta y la que más miedo da practicar. Pero también es la que más rápido mejora con el método correcto. Esta guía te da técnicas concretas, ejercicios prácticos y un plan de acción para mejorar tu speaking en inglés, tanto si tienes acceso a hablantes nativos como si no.
            </p>

            {/* Section 1 - Pilares */}
            <section id="pilares-speaking" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Los 5 Pilares del Buen Speaking en Inglés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El speaking de calidad se construye sobre cinco pilares. Mejorar todos a la vez es agotador; es más efectivo trabajarlos de forma secuencial, de más a menos fundamental:
              </p>

              <div className="grid md:grid-cols-1 gap-4 mb-8">
                {[
                  { num: "1", title: "Vocabulario", desc: "Sin palabras no hay conversación. El vocabulario activo (palabras que usas) importa más que el pasivo (palabras que reconoces). Objetivo: activar vocabulario que ya conoces pasivamente." },
                  { num: "2", title: "Gramática funcional", desc: "No necesitas gramática perfecta para comunicarte, pero sí estructuras básicas sin errores que interrumpan la comprensión. Foco en los 20% de estructuras que cubren el 80% de conversaciones." },
                  { num: "3", title: "Pronunciación inteligible", desc: "No necesitas acento nativo, necesitas pronunciación clara. Los sonidos más problemáticos para hispanohablantes: /v/ vs /b/, vocales largas vs cortas (ship/sheep), /th/." },
                  { num: "4", title: "Fluidez", desc: "Hablar sin pausas excesivas. La fluidez no viene de hablar rápido, sino de recuperar palabras y estructuras automáticamente. Se construye con práctica repetida hasta la automatización." },
                  { num: "5", title: "Confianza", desc: "El componente psicológico. Sin confianza, los otros cuatro pilares quedan bloqueados en situaciones reales. La confianza se construye con exposición gradual y éxitos acumulados." }
                ].map((p) => (
                  <div key={p.num} className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
                    <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{p.num}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                      <p className="text-gray-700 text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 - Técnicas de fluidez */}
            <section id="tecnicas-fluidez" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Técnicas de Fluidez: Cómo Hablar sin Pausas
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Monólogo cronometrado
                  </h3>
                  <p className="text-gray-700">Elige un tema al azar (el tiempo, tus planes del fin de semana, una opinión sobre cualquier cosa) y habla durante 2 minutos sin parar, aunque cometas errores. El objetivo es mantener el flujo, no la perfección.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Technique 4-3-2
                  </h3>
                  <p className="text-gray-700">Habla sobre el mismo tema durante 4 minutos, después 3, después 2. Al repetir el mismo contenido con menos tiempo, automáticamente recuperas las palabras más rápido y la fluidez aumenta de forma medible.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Fillers naturales en inglés
                  </h3>
                  <p className="text-gray-700">Aprende los fillers que usan los nativos para ganar tiempo: "well...", "you know...", "I mean...", "as I was saying...", "to be honest...". Usarlos evita los silencios incómodos mientras buscas la palabra correcta.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Pronunciación */}
            <section id="ejercicios-pronunciacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ejercicios de Pronunciación para Hispanohablantes
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los hispanohablantes tienen errores de pronunciación predecibles. Trabajar los más frecuentes produce el mayor impacto en la inteligibilidad:
              </p>

              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Los 5 sonidos más problemáticos</h3>
                <div className="space-y-3">
                  {[
                    { sound: "/θ/ y /ð/", example: "think, this, mother", tip: "Coloca la lengua entre los dientes. Practica exagerando el movimiento." },
                    { sound: "Vocales largas vs cortas", example: "ship/sheep, bit/beat, full/fool", tip: "En inglés la duración de la vocal cambia el significado. Practica pares mínimos." },
                    { sound: "/v/ vs /b/", example: "vine/bine, very/berry", tip: "La /v/ requiere el labio superior sobre los dientes. La /b/ sella los dos labios." },
                    { sound: "Sílaba tónica", example: "PHOtograph vs phoTOgraphy", tip: "El acento silábico en inglés varía según la forma de la palabra. Márcalo en el diccionario." },
                    { sound: "Schwa /ə/", example: "about, the, support", tip: "El sonido más frecuente del inglés. Las sílabas átonas se reducen a /ə/. Pronunciar todas las vocales con su valor total suena extranjero." }
                  ].map((s, i) => (
                    <div key={i} className="bg-white rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-emerald-700 font-bold flex-shrink-0">{s.sound}</span>
                        <div>
                          <p className="text-gray-600 text-sm italic mb-1">Ejemplos: {s.example}</p>
                          <p className="text-gray-700 text-sm">{s.tip}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4 - Practicar solo */}
            <section id="practicar-solo" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Practicar Speaking Solo (Sin Pareja de Conversación)
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Narrar tu día en inglés</h3>
                  <p className="text-gray-700 text-sm">5 minutos cada mañana narrando en inglés lo que harás ese día. Por la noche, lo que hiciste. Sin audiencia, sin presión. Construye hábito y fluidez simultáneamente.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Shadowing activo</h3>
                  <p className="text-gray-700 text-sm">Repite en tiempo real lo que escuchas en un vídeo o audio. Empieza 10% más lento con herramientas como YouTube (velocidad 0.75x) e incrementa gradualmente.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Conversación con IA</h3>
                  <p className="text-gray-700 text-sm">Herramientas como ChatGPT voice mode o apps de conversación IA permiten practicar speaking sin compañero humano. Son especialmente útiles para practicar vocabulario específico (entrevistas de trabajo, presentaciones).</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Grabarte y analizarte</h3>
                  <p className="text-gray-700 text-sm">Graba 2 minutos de speaking, escucha, identifica 3 cosas a mejorar (pronunciación, vocabulario, fluidez) y trabaja esas 3 en la siguiente grabación.</p>
                </div>
              </div>
            </section>

            {/* Section 5 - Speaking para exámenes */}
            <section id="speaking-examenes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Speaking para Exámenes Cambridge
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El Speaking del B2 First tiene un formato específico que requiere práctica dirigida. Conocer el formato elimina la ansiedad y permite centrarse en el contenido:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { parte: "Parte 1 (2 min)", desc: "Preguntas personales sobre ti. Practica respuestas de 3-4 frases sobre trabajo, hobbies, planes. Evita respuestas de una frase." },
                  { parte: "Parte 2 (4 min)", desc: "Describe y compara dos fotos durante 1 minuto. Practica: 'In the first photo I can see... whereas in the second... Both photos show... The main difference is...'" },
                  { parte: "Parte 3 (4 min)", desc: "Tarea colaborativa con el compañero. Practica turnarte, pedir opinión ('What do you think?'), llegar a consenso y mantener conversación natural." },
                  { parte: "Parte 4 (5 min)", desc: "Debate con el examinador sobre el tema de Parte 3. Practica dar opiniones elaboradas con 'I believe that... because...' y contraargumentar educadamente." }
                ].map((p, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="bg-emerald-100 text-emerald-700 font-semibold text-sm px-2 py-1 rounded flex-shrink-0">{p.parte}</span>
                      <p className="text-gray-700 text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
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

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Nuestros profesores te dan feedback de speaking en tiempo real</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                El feedback inmediato de un profesor experto acelera el progreso de speaking más que cualquier práctica en solitario.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Reservar clase de speaking
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Nuestra Metodología</h3>
                  <p className="text-gray-600 text-sm">Speaking como centro de nuestra metodología de enseñanza.</p>
                </a>
                <a href="/blog/perder-miedo-hablar-ingles/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Perder el Miedo a Hablar Inglés</h3>
                  <p className="text-gray-600 text-sm">7 estrategias para superar la ansiedad lingüística.</p>
                </a>
                <a href="/blog/mejorar-listening-ingles/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Mejorar el Listening en Inglés</h3>
                  <p className="text-gray-600 text-sm">10 técnicas para mejorar la comprensión oral.</p>
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
              href="https://www.cambridgeenglish.org/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Cambridge English - Recursos oficiales de preparación de speaking
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
