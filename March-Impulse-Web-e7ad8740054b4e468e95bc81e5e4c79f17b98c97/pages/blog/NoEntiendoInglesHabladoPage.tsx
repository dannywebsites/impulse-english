import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Por Qué No Entiendo el Inglés Hablado? Causas y Soluciones",
    description: "No entender inglés hablado se debe a velocidad, acentos y connected speech. Descubre las causas científicas y un plan de mejora paso a paso por nivel.",
    url: `${businessInfo.url}/blog/no-entiendo-ingles-hablado`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Por qué entiendo el inglés escrito pero no el hablado?",
      answer: "El inglés hablado usa reducción fonética, elisions y contracciones que cambian totalmente el sonido de las palabras. 'Want to' se convierte en 'wanna', 'going to' en 'gonna'. El inglés escrito no refleja esto."
    }

  ,
    {
      question: "¿Los diferentes acentos del inglés son muy distintos?",
      answer: "Sí, significativamente. El inglés australiano, escocés, americano del sur o indio pueden ser casi incomprensibles al principio. Se necesita exposición específica a múltiples acentos."
    },
    {
      question: "¿Con cuánto estudio puedo mejorar el listening?",
      answer: "Con 30 minutos de escucha activa diaria, la mejora es notable en 6-8 semanas. Pasiva (de fondo) ayuda menos. La clave es concentración y repetición de fragmentos difíciles."
    },
    {
      question: "¿Las películas ayudan a entender el inglés real?",
      answer: "Sí, especialmente series de habla cotidiana. Primero con subtítulos en inglés, luego sin. El cine con diálogos rápidos o argot (Peaky Blinders, Trainspotting) puede ser frustrante al principio."
    }
  ];

export default function NoEntiendoInglesHabladoPage() {
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
                src="/images/academy/facilities/technology-based-classroom-photo.jpg"
                alt="No entiendo el inglés hablado, comprensión oral"
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
                  { label: 'No Entiendo Inglés Hablado' }
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
                  ¿Por Qué No Entiendo el Inglés Hablado? Causas y Soluciones
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Explicación científica de por qué el inglés hablado parece tan difícil de entender y un plan de mejora progresiva con recursos por nivel.
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
                <li><a href="#causas-cientificas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Causas científicas del problema</a></li>
                <li><a href="#connected-speech" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Connected speech explicado</a></li>
                <li><a href="#reto-acentos" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ El reto de los acentos</a></li>
                <li><a href="#plan-mejora" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plan de mejora progresiva</a></li>
                <li><a href="#recursos-nivel" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Recursos por nivel</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "Leo inglés bien, pero cuando lo escucho en una película o de boca de un nativo no entiendo casi nada". Esta es una de las quejas más frecuentes de estudiantes de inglés con nivel B1 o incluso B2. Y tiene una explicación fonológica muy concreta: <strong>el inglés escrito y el inglés hablado son casi dos idiomas distintos</strong>. Esta guía te explica por qué y cómo resolverlo.
            </p>

            {/* Section 1 - Causas científicas */}
            <section id="causas-cientificas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Causas Científicas del Problema
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Cuando aprendemos inglés en un contexto formal (colegio, academia, libros), predomina el inglés escrito y el inglés hablado lento y articulado de los profesores. El cerebro desarrolla representaciones fonológicas idealizadas de las palabras que no corresponden a cómo suenan en el habla espontánea real.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Lo que aprendemos en clase</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• "I am going to the shop"</li>
                    <li>• "Do you want to come?"</li>
                    <li>• "What did you do yesterday?"</li>
                    <li>• "I would have liked that"</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Lo que escuchamos en inglés real</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• "I'm gonna the shop"</li>
                    <li>• "D'ya wanna come?"</li>
                    <li>• "Whadidju do yesterday?"</li>
                    <li>• "I woulda liked that"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Conclusión:</strong> El gap entre inglés escrito y hablado es mayor en inglés que en casi cualquier otro idioma europeo. No es que te falte vocabulario o gramática: es que nadie te ha enseñado cómo suena el inglés real.
                </p>
              </div>
            </section>

            {/* Section 2 - Connected speech */}
            <section id="connected-speech" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Connected Speech: El Corazón del Problema
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El "connected speech" son los fenómenos fonéticos que ocurren cuando las palabras se unen en el habla fluida. Son sistemáticos y predecibles una vez que los conoces:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    fenomeno: "Elisión",
                    explicacion: "Desaparición de sonidos en posición final o interna",
                    ejemplos: [
                      { antes: "next door", despues: "nex' door" },
                      { antes: "last night", despues: "las' night" },
                      { antes: "sandwich", despues: "sanwich" }
                    ]
                  },
                  {
                    fenomeno: "Asimilación",
                    explicacion: "Un sonido cambia para parecerse al sonido adyacente",
                    ejemplos: [
                      { antes: "ten boys", despues: "tem boys" },
                      { antes: "that person", despues: "thap person" },
                      { antes: "would you", despues: "wouldja" }
                    ]
                  },
                  {
                    fenomeno: "Reducción de vocales",
                    explicacion: "Las sílabas átonas se reducen al sonido schwa /ə/",
                    ejemplos: [
                      { antes: "police", despues: "p'lice" },
                      { antes: "banana", despues: "b'nana" },
                      { antes: "tomorrow", despues: "t'morrow" }
                    ]
                  },
                  {
                    fenomeno: "Contracciones coloquiales",
                    explicacion: "Reducción de palabras funcionales en habla rápida",
                    ejemplos: [
                      { antes: "want to", despues: "wanna" },
                      { antes: "going to", despues: "gonna" },
                      { antes: "have to", despues: "hafta" }
                    ]
                  }
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-1">{f.fenomeno}</h3>
                    <p className="text-gray-600 text-sm mb-3">{f.explicacion}</p>
                    <div className="space-y-1">
                      {f.ejemplos.map((e, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm">
                          <span className="font-mono text-red-600 line-through">{e.antes}</span>
                          <ArrowRight className="w-3 h-3 text-gray-400" />
                          <span className="font-mono text-emerald-600 font-medium">{e.despues}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Acentos */}
            <section id="reto-acentos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Reto de los Acentos del Inglés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El inglés no tiene un único acento estándar. Según el país y región, el inglés puede sonar radicalmente diferente. Esta variación es una de las razones por las que la comprensión oral es tan difícil incluso para estudiantes avanzados:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { acento: "Inglés británico (RP)", dificultad: "Media", nota: "El más enseñado en España. Dropping de la 'r' final." },
                  { acento: "Inglés americano estándar", dificultad: "Media", nota: "'r' muy marcada. El más frecuente en medios internacionales." },
                  { acento: "Inglés escocés", dificultad: "Alta", nota: "Entonación muy característica. Vocabulario específico." },
                  { acento: "Inglés australiano", dificultad: "Alta", nota: "Vocales muy diferentes. 'Today' suena como 'to die'." },
                  { acento: "Inglés indio", dificultad: "Media-Alta", nota: "Ritmo silábico en lugar de ritmo acentual. Muy frecuente en ámbitos tech." },
                  { acento: "Inglés americano del sur", dificultad: "Alta", nota: "Diptonguización de vocales. 'Time' suena como 'tahm'." }
                ].map((a, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{a.acento}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${a.dificultad === 'Alta' ? 'bg-red-100 text-red-700' : a.dificultad === 'Media-Alta' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{a.dificultad}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{a.nota}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 - Plan de mejora */}
            <section id="plan-mejora" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan de Mejora Progresiva por Nivel
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 text-sm px-2 py-0.5 rounded">A2-B1</span>
                    Fase 1: Entrenamiento con material controlado
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• BBC Learning English (audio + transcripción)</li>
                    <li>• News in Levels (nivel 1 y 2)</li>
                    <li>• Dictado activo: escuchar → escribir → comparar transcripción</li>
                    <li>• Identificar 3 fenómenos de connected speech por sesión</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 text-sm px-2 py-0.5 rounded">B1-B2</span>
                    Fase 2: Exposición a material semiestandarizado
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• TED Talks (con transcripción disponible)</li>
                    <li>• Series con subtítulos en inglés (The Crown, Suits)</li>
                    <li>• Podcasts con guión (Stuff You Should Know)</li>
                    <li>• Shadowing de fragmentos de 30-60 segundos</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-700 text-sm px-2 py-0.5 rounded">B2-C1</span>
                    Fase 3: Exposición a inglés nativo sin apoyo
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• BBC Radio 4, NPR, podcasts nativos temáticos</li>
                    <li>• Series sin subtítulos o con subtítulos en inglés</li>
                    <li>• Exposición a múltiples acentos sistemáticamente</li>
                    <li>• Conversaciones con nativos o hablantes avanzados</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 - Recursos */}
            <section id="recursos-nivel" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Recursos por Nivel
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { nombre: "BBC Learning English", nivel: "A2-B1", url: "bbc.co.uk/learningenglish", desc: "Referencia para principiantes. Audio claro + transcripción + explicaciones." },
                  { nombre: "elllo.org", nivel: "A2-B2", url: "elllo.org", desc: "Miles de conversaciones con transcripción. Amplia variedad de acentos nativos." },
                  { nombre: "TED Talks", nivel: "B1-B2", url: "ted.com", desc: "Transcripción completa disponible. Amplio rango de temas." },
                  { nombre: "BBC Radio 4 Podcasts", nivel: "B2-C1", url: "bbc.co.uk/radio4", desc: "Inglés nativo real. El estándar para nivel avanzado." }
                ].map((r, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{r.nombre}</h3>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{r.nivel}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{r.desc}</p>
                    <span className="text-emerald-600 text-xs font-mono">{r.url}</span>
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
              <h3 className="text-2xl font-bold mb-4">Entrenamos tu oído con materiales reales y metodología comprobada</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Trabajamos el connected speech, los acentos y la comprensión de inglés real desde el primer día de clase.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Nuestra Metodología</h3>
                  <p className="text-gray-600 text-sm">Cómo entrenamos el oído con inglés real desde el primer día.</p>
                </a>
                <a href="/blog/mejorar-listening-ingles/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Mejorar el Listening en Inglés</h3>
                  <p className="text-gray-600 text-sm">10 técnicas específicas por nivel para mejorar la comprensión oral.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Cursos de Inglés para Adultos</h3>
                  <p className="text-gray-600 text-sm">Programas con entrenamiento de comprensión oral integrado.</p>
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
              → Cambridge English - Recursos oficiales de comprensión oral
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
