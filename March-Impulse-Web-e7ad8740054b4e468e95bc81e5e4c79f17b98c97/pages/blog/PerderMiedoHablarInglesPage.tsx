import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Cómo Perder el Miedo a Hablar Inglés: 7 Estrategias",
    description: "Pierde el miedo a hablar inglés con 7 estrategias: exposición gradual, grupos pequeños, grabarte a ti mismo y más. Guía práctica para adultos.",
    url: `${businessInfo.url}/blog/perder-miedo-hablar-ingles`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Es normal tener miedo a hablar inglés?",
      answer: "Completamente normal. El 85% de adultos siente ansiedad al hablar otro idioma. La causa es el perfeccionismo y el miedo al juicio ajeno, no falta de capacidad."
    }

  ,
    {
      question: "¿Cuánto tiempo lleva superar el miedo?",
      answer: "Con práctica regular y el entorno adecuado, la mayoría nota mejora en 4-8 semanas. La clave es la exposición gradual y sistemática."
    },
    {
      question: "¿Las clases en grupo ayudan o perjudican?",
      answer: "Los grupos pequeños (4-6 personas) son ideales: hay apoyo mutuo, el profesor puede corregir y el entorno es menos intimidante que hablar solo."
    },
    {
      question: "¿Sirve grabarse hablando inglés?",
      answer: "Sí, es una técnica muy efectiva. Al escucharte, te das cuenta de que suenas mejor de lo que creías. Además identificas errores específicos a corregir."
    },
    {
      question: "¿Qué pasa si cometo errores?",
      answer: "Los errores son parte del aprendizaje. Los hablantes nativos valoran el intento, no la perfección. Ningún nativo espera que un no-nativo hable sin errores."
    }
  ];

export default function PerderMiedoHablarInglesPage() {
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
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Superar el miedo a hablar inglés"
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
                  { label: 'Miedo a Hablar Inglés' }
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
                  Cómo Perder el Miedo a Hablar Inglés: 7 Estrategias
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Guía práctica con 7 estrategias probadas para superar la ansiedad lingüística y hablar inglés con confianza, para adultos de cualquier nivel.
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
                <li><a href="#por-que-miedo" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Por qué sentimos miedo a hablar inglés</a></li>
                <li><a href="#ciencia-miedo" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ La ciencia del miedo lingüístico</a></li>
                <li><a href="#7-estrategias" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ 7 estrategias detalladas</a></li>
                <li><a href="#papel-entorno" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ El papel del entorno en tu confianza</a></li>
                <li><a href="#plan-semanal" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plan de acción semanal</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "Entiendo inglés bastante bien pero cuando tengo que hablar me bloqueo". Esta frase la escuchan nuestros profesores cada semana. El miedo a hablar inglés es uno de los obstáculos más comunes —y más superables— en el aprendizaje de idiomas. <strong>No es una cuestión de nivel, es una cuestión de confianza</strong>. Y la confianza se trabaja con las estrategias correctas.
            </p>

            {/* Section 1 - Por qué sentimos miedo */}
            <section id="por-que-miedo" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué Sentimos Miedo a Hablar Inglés
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El miedo a hablar un idioma extranjero tiene un nombre científico: <strong>ansiedad lingüística</strong> o "foreign language anxiety" (FLA). Fue descrita por primera vez por Horwitz, Horwitz y Cope en 1986 y afecta al <strong>85% de adultos</strong> que aprenden un segundo idioma.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">85%</div>
                  <p className="text-gray-700 text-sm">De adultos siente ansiedad al hablar otro idioma</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">4-8</div>
                  <p className="text-gray-700 text-sm">Semanas para notar mejora con el método correcto</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">0</div>
                  <p className="text-gray-700 text-sm">Relación entre miedo y falta de capacidad</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Las causas más frecuentes son: el perfeccionismo (querer hablar sin errores antes de tener nivel para ello), el miedo al juicio ajeno, las experiencias negativas previas en clase y la comparación con hablantes nativos. Ninguna de estas causas tiene que ver con falta de inteligencia o capacidad.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Punto clave:</strong> El perfeccionismo es el mayor enemigo del speaking. Los estudiantes que hablan más y peor progresan más rápido que los que hablan menos y mejor. La fluidez se construye sobre el error, no sobre su ausencia.
                </p>
              </div>
            </section>

            {/* Section 2 - La ciencia */}
            <section id="ciencia-miedo" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                La Ciencia del Miedo Lingüístico
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cuando hablamos en un idioma extranjero, activamos simultáneamente múltiples sistemas cognitivos: recuperación de vocabulario, construcción gramatical, pronunciación y monitorización del mensaje. Esta carga cognitiva elevada, combinada con la amígdala en estado de alerta por el miedo al juicio, literalmente "congela" el acceso al idioma.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">El problema del monitor interno</h3>
                  <p className="text-gray-700">Stephen Krashen describió el "monitor interno": la voz en nuestra cabeza que corrige cada frase antes de hablarla. En adultos con educación formal, este monitor está hiperactivado. La solución no es eliminarlo, sino reducir su velocidad de intervención mediante exposición y práctica.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">El papel de la amígdala</h3>
                  <p className="text-gray-700">La amígdala —el centro del miedo en el cerebro— interfiere directamente con la recuperación de vocabulario. En situaciones de estrés social, accedemos peor a las palabras que conocemos. Por eso el entorno donde practicamos importa tanto como las horas de práctica.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - 7 estrategias */}
            <section id="7-estrategias" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                7 Estrategias Probadas para Perder el Miedo
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                    Exposición gradual y sistemática
                  </h3>
                  <p className="text-gray-700">Empieza por situaciones de menor presión: hablar solo en voz alta, después con el profesor, después en grupos pequeños. La exposición gradual entrena al sistema nervioso a asociar el inglés hablado con seguridad, no con amenaza.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                    Grupos pequeños de 4-6 personas
                  </h3>
                  <p className="text-gray-700">Los grupos pequeños son el entorno ideal para superar el miedo: el ambiente es de apoyo mutuo, el profesor puede corregir individualmente y la presión social es menor que en grupos grandes o situaciones unipersonales.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                    Grabarte y escucharte
                  </h3>
                  <p className="text-gray-700">Grábate hablando inglés 1 minuto al día y escucha la grabación. La mayoría descubre que suena mejor de lo que creía. Además, identifica errores específicos de forma objetiva, sin la presión del momento.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                    Shadowing activo
                  </h3>
                  <p className="text-gray-700">El shadowing —repetir en tiempo real lo que escuchas en un audio o vídeo— reduce el miedo porque el foco está en imitar, no en crear. Quita la presión del contenido y te entrena en ritmo, entonación y pronunciación simultáneamente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">5</span>
                    Foco en comunicación, no en perfección
                  </h3>
                  <p className="text-gray-700">Cambia el objetivo: de "hablar sin errores" a "hacerme entender". Este cambio de mentalidad libera el monitor interno y permite fluir. Los errores de gramática no interrumpen la comunicación; el silencio, sí.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">6</span>
                    Celebrar pequeñas victorias
                  </h3>
                  <p className="text-gray-700">Cada vez que uses una frase nueva, entiendas algo que antes no entendías o mantengas una conversación más larga que la semana anterior, reconócelo. El cerebro aprende motivado: las victorias, aunque pequeñas, liberan dopamina y refuerzan el hábito.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">7</span>
                    Entorno profesional de apoyo
                  </h3>
                  <p className="text-gray-700">El entorno donde practicas importa más que las horas de práctica. Un profesor que corrige con pedagogía positiva, compañeros en la misma situación y un ambiente sin juicio son fundamentales para que el cerebro asocie el inglés con seguridad.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - El papel del entorno */}
            <section id="papel-entorno" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Papel del Entorno en Tu Confianza
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El entorno donde practicas inglés tiene un impacto directo en tu nivel de ansiedad. No es lo mismo practicar en una clase donde el error se sanciona que en una donde se trabaja como herramienta de aprendizaje.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Entornos que aumentan el miedo</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Grupos grandes con poca atención individual</li>
                    <li>• Corrección pública sin preparación</li>
                    <li>• Competitividad entre alumnos</li>
                    <li>• Profesor que prioriza gramática sobre comunicación</li>
                    <li>• Presión por hablar "perfecto"</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Entornos que reducen el miedo</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Grupos reducidos con seguimiento individual</li>
                    <li>• Corrección constructiva y privada</li>
                    <li>• Cultura de apoyo mutuo</li>
                    <li>• Profesor que valora el intento</li>
                    <li>• Foco en comunicación efectiva</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 - Plan semanal */}
            <section id="plan-semanal" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan de Acción Semanal
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Este plan de 4 semanas está diseñado para construir confianza de forma gradual y sistemática:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Semana 1: Habla solo</h3>
                  <p className="text-gray-700 text-sm">5 min al día hablando en inglés solo: describe lo que ves, cuenta tu día, da tu opinión sobre algo. Sin audiencia, sin presión. Grábate el viernes y escúchate.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Semana 2: Habla con el profesor</h3>
                  <p className="text-gray-700 text-sm">Lleva una pregunta o tema preparado a clase. El objetivo: mantener una conversación de 3-5 minutos sin parar. Los errores son bienvenidos.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Semana 3: Habla en grupo pequeño</h3>
                  <p className="text-gray-700 text-sm">Participa activamente en clase al menos 3 veces por sesión. El objetivo no es decirlo perfecto, es decirlo.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Semana 4: Situación real</h3>
                  <p className="text-gray-700 text-sm">Busca una situación real fuera del aula: una tienda con empleado anglófono, una app de intercambio de idiomas, o una llamada con alguien en inglés. Una sola vez es suficiente para el objetivo de esta semana.</p>
                </div>
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
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El miedo a hablar inglés es universal pero no permanente. Con el entorno correcto y las estrategias adecuadas, la mayoría de adultos nota mejora significativa en 4-8 semanas. No esperes a tener nivel perfecto para empezar a hablar: empieza a hablar para conseguir ese nivel.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> creamos un entorno seguro donde el error es bienvenido y la práctica del speaking es el centro de cada clase. Prueba una clase gratis y comprueba la diferencia.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/perder-miedo-hablar-ingles" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo creamos el entorno ideal para hablar sin miedo.</p>
                </a>
                <a href="/blog/verguenza-hablar-ingles/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Vergüenza al Hablar Inglés
                  </h3>
                  <p className="text-gray-600 text-sm">Causas y soluciones para la vergüenza lingüística en adultos.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Clases en grupos reducidos adaptadas a tu nivel y objetivos.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/perder-miedo-hablar-ingles" />
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
              → Más información en Cambridge English - Recursos oficiales de aprendizaje
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
