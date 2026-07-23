import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Cómo Pensar en Inglés y Dejar de Traducir Mentalmente",
    description: "Aprende a pensar directamente en inglés sin traducir del español. 8 técnicas para desarrollar el pensamiento en inglés y hablar con más fluidez.",
    url: `${businessInfo.url}/blog/pensar-ingles-no-traducir`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿A partir de qué nivel puedo empezar a pensar en inglés?",
      answer: "Desde el nivel B1 ya puedes empezar a pensar en inglés para conceptos sencillos. A nivel B2, la mayoría logra pensar en inglés en situaciones conocidas."
    }

  ,
    {
      question: "¿Cuánto tiempo lleva pensar en inglés?",
      answer: "Con práctica constante (30 min/día de exposición + pensamiento activo), la mayoría nota el cambio en 3-6 meses. No es inmediato pero sí progresivo."
    },
    {
      question: "¿Es malo traducir del español?",
      answer: "En niveles básicos, la traducción es normal y útil. El problema es depender de ella en B2+. Cuanto más traduces, más lento hablas y más artificial suena."
    },
    {
      question: "¿Cómo sé si ya pienso en inglés?",
      answer: "Cuando sueñas en inglés ocasionalmente, cuando cuentas en inglés instintivamente, o cuando escuchas una frase en inglés y entiendes sin 'traducirla' en tu cabeza."
    }
  ];

export default function PensarInglesNoTraducirPage() {
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
                src="/images/academy/technology-based-classroom-photo.jpg"
                alt="Pensar en inglés sin traducir"
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
                  { label: 'Pensar en Inglés' }
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
                  Cómo Pensar en Inglés y Dejar de Traducir Mentalmente
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  8 técnicas prácticas para desarrollar el pensamiento directo en inglés, reducir la traducción mental y hablar con más naturalidad y fluidez.
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
                <li><a href="#por-que-traducimos" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Por qué traducimos mentalmente</a></li>
                <li><a href="#cuando-dejar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cuándo dejar de traducir</a></li>
                <li><a href="#8-tecnicas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ 8 técnicas prácticas</a></li>
                <li><a href="#ejercicios-diarios" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Ejercicios diarios</a></li>
                <li><a href="#senales-progreso" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Señales de que ya piensas en inglés</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Pensar directamente en inglés, sin pasar por el español, es el salto cualitativo que distingue a un hablante fluido de uno que simplemente "sabe inglés". Y aunque parece un proceso misterioso, es el resultado lógico de aplicar las técnicas correctas con consistencia. Esta guía te explica cómo funciona cognitivamente y cómo acelerarlo.
            </p>

            {/* Section 1 */}
            <section id="por-que-traducimos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué Traducimos Mentalmente: La Explicación Cognitiva
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La traducción mental es el proceso por el que el cerebro genera un pensamiento en la lengua nativa (español) y luego lo traduce al idioma extranjero antes de producirlo. Es completamente normal en niveles iniciales y se convierte en un obstáculo a partir del nivel B1-B2.
              </p>

              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">El problema de la traducción mental en B2+</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Añade 1-2 segundos de latencia a cada frase, haciendo el habla lenta y entrecortada</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Produce estructuras gramaticales calcadas del español que suenan artificiales</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Bloquea el acceso a idiomas más avanzados que no tienen equivalente directo</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />Aumenta la carga cognitiva y el cansancio en conversaciones largas</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Principio clave:</strong> Pensar en inglés no es un don misterioso. Es el resultado de haber almacenado suficientes "chunks" (bloques de lenguaje) en inglés para que el cerebro pueda pensar directamente en ese idioma sin necesitar el español como intermediario.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="cuando-dejar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cuándo Dejar de Traducir: El Momento Correcto
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Intentar pensar en inglés con nivel A1-A2 es frustrante e ineficaz porque no tienes suficiente vocabulario ni estructuras almacenadas. El momento óptimo para empezar a trabajar activamente en el pensamiento en inglés es:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <div className="text-xl font-bold text-gray-500 mb-2">A1-A2</div>
                  <p className="text-gray-600 text-sm">La traducción es normal y necesaria. No fuerces el cambio.</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-xl font-bold text-emerald-600 mb-2">B1</div>
                  <p className="text-gray-700 text-sm font-medium">Empieza con conceptos simples. Es el nivel ideal para comenzar.</p>
                </div>
                <div className="bg-emerald-100 rounded-xl p-5 text-center">
                  <div className="text-xl font-bold text-emerald-700 mb-2">B2+</div>
                  <p className="text-gray-700 text-sm">El pensamiento en inglés debería ser ya el modo por defecto en temas conocidos.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - 8 técnicas */}
            <section id="8-tecnicas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                8 Técnicas para Desarrollar el Pensamiento en Inglés
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { num: "1", title: "Etiquetar objetos en inglés", desc: "Coloca post-its con el nombre en inglés de los objetos de tu casa: la nevera es 'fridge', la ventana es 'window'. Esta asociación directa objeto-palabra inglesa elimina el paso intermediario del español." },
                  { num: "2", title: "Monólogo interior en inglés", desc: "Cuando caminas, cocinas o haces actividades rutinarias, describe lo que ves y haces en inglés. Empieza con frases simples: 'I'm going to make coffee. It's raining outside. I need to call John.'" },
                  { num: "3", title: "Stream of consciousness writing", desc: "Durante 5 minutos, escribe en inglés todo lo que piensos sin parar, sin correcciones, sin diccionario. No importa si hay errores. El objetivo es entrenar al cerebro a generar pensamiento en inglés." },
                  { num: "4", title: "Entornos de inmersión parcial", desc: "Cambia el idioma de tu móvil, ordenador y apps a inglés. Sigue canales de YouTube en inglés sobre tus temas de interés. Cuanto más tiempo pases en entornos donde el inglés es el idioma por defecto, más rápido se instala." },
                  { num: "5", title: "Pensar en frases simples primero", desc: "No intentes pensar en inglés con frases complejas. Empieza con pensamientos básicos: 'I'm hungry', 'This is good', 'I need to finish this'. La complejidad viene sola con la práctica." },
                  { num: "6", title: "Evitar diccionarios bilingües", desc: "Cambia a diccionarios monolingües en inglés (Oxford, Merriam-Webster). Cuando buscas una palabra española y lees la definición en inglés, refuerzas las conexiones en inglés en lugar de crear puentes al español." },
                  { num: "7", title: "Describir el entorno en voz alta", desc: "Cuando estés solo, describe en voz alta lo que ves: personas, situaciones, lugares. Esta técnica combina el pensamiento en inglés con la práctica del speaking, maximizando el retorno." },
                  { num: "8", title: "Diario de sueños en inglés", desc: "Si recuerdas sueños, escríbelos en inglés nada más despertar. Los sueños en inglés son una señal avanzada de que el cerebro ha adoptado el idioma. Escribirlos refuerza esas conexiones neuronales." }
                ].map((t) => (
                  <div key={t.num} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{t.num}</span>
                      {t.title}
                    </h3>
                    <p className="text-gray-700 ml-11">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 - Ejercicios diarios */}
            <section id="ejercicios-diarios" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Rutina Diaria de 20 Minutos
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  { tiempo: "5 min", actividad: "Al despertar: monólogo interior en inglés sobre los planes del día" },
                  { tiempo: "5 min", actividad: "Durante el día: stream of consciousness writing en inglés" },
                  { tiempo: "5 min", actividad: "Al mediodía: describir en inglés algo que hayas visto u oído" },
                  { tiempo: "5 min", actividad: "Por la noche: narrar en inglés cómo ha ido el día" }
                ].map((r, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                    <span className="font-semibold text-emerald-600 text-sm flex-shrink-0 w-16">{r.tiempo}</span>
                    <p className="text-gray-700 text-sm">{r.actividad}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 - Señales */}
            <section id="senales-progreso" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Señales de Que Ya Piensas en Inglés
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Sueñas en inglés (parcial o totalmente)",
                  "Cuentas instintivamente en inglés",
                  "Piensas en inglés antes de recordar la palabra en español",
                  "Escuchas inglés y entiendes sin 'traducir internamente'",
                  "Te ríes de chistes en inglés sin necesitar explicación",
                  "Buscas palabras en español cuando hablas inglés (buena señal)"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 bg-emerald-50 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">{s}</p>
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

            <InlineOneToOneCTA pathname="/blog/pensar-ingles-no-traducir" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Nuestra Metodología</h3>
                  <p className="text-gray-600 text-sm">Inmersión y pensamiento en inglés desde el primer día.</p>
                </a>
                <a href="/blog/mejorar-speaking-ingles/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Mejorar el Speaking en Inglés</h3>
                  <p className="text-gray-600 text-sm">Técnicas de fluidez y pronunciación para hablar mejor.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Cursos de Inglés para Adultos</h3>
                  <p className="text-gray-600 text-sm">Programas de inmersión para adultos de todos los niveles.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/pensar-ingles-no-traducir" />
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
              → Cambridge English - Recursos de inmersión y aprendizaje avanzado
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
