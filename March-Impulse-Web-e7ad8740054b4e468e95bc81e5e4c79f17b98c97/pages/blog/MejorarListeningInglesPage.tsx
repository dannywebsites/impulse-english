import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Cómo Mejorar el Listening en Inglés: 10 Técnicas Efectivas",
    description: "Mejora tu listening en inglés con 10 técnicas: podcasts, dictados, shadowing y más. Guía detallada por nivel desde A2 hasta C1 con recursos gratuitos.",
    url: `${businessInfo.url}/blog/mejorar-listening-ingles`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Por qué el listening es lo más difícil del inglés?",
      answer: "El listening combina velocidad, acentos, reducción fonética (connected speech) y vocabulario simultáneamente. Es la destreza que más depende de exposición acumulada."
    }

  ,
    {
      question: "¿Cuánto tiempo al día practicar listening?",
      answer: "30 minutos diarios de listening activo (con atención plena, no de fondo) produce mejoras visibles en 4-6 semanas. La constancia supera la intensidad."
    },
    {
      question: "¿Cuáles son los mejores podcasts para aprender inglés?",
      answer: "Para B1: BBC Learning English, 6 Minute English. Para B2: BBC Radio 4, TED-Ed. Para C1: podcasts nativos de tu interés (historia, ciencia, true crime). El tema importa para la motivación."
    },
    {
      question: "¿El shadowing funciona de verdad?",
      answer: "Sí, el shadowing (repetir en tiempo real lo que escuchas) es de las técnicas más efectivas para conectar comprensión oral con pronunciación. Requiere práctica regular para notar resultados."
    },
    {
      question: "¿Sirven las series para mejorar el listening?",
      answer: "Sí con método. Primero con subtítulos en inglés, luego sin. Pausa para escuchar de nuevo palabras que no entiendes. Las series con diálogo rápido (Friends, Suits) son más desafiantes que documentales."
    }
  ];

export default function MejorarListeningInglesPage() {
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
                alt="Mejorar el listening en inglés con tecnología"
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
                  { label: 'Mejorar Listening' }
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
                  Cómo Mejorar el Listening en Inglés: 10 Técnicas Efectivas
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  10 técnicas detalladas por nivel para mejorar tu comprensión oral en inglés, desde A2 hasta C1, con recursos gratuitos y un plan de práctica semanal.
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
                <li><a href="#por-que-dificil" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Por qué el listening es tan difícil</a></li>
                <li><a href="#10-tecnicas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ 10 técnicas por nivel</a></li>
                <li><a href="#recursos-gratuitos" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Recursos gratuitos recomendados</a></li>
                <li><a href="#plan-semanal" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plan semanal de práctica</a></li>
                <li><a href="#errores-comunes" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Errores comunes al practicar listening</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "Entiendo el inglés cuando lo leo pero cuando lo escucho no entiendo nada". Esta queja es universal entre estudiantes de inglés hispanohablantes. El listening no es solo vocabulario: es procesamiento de velocidad, acentos y fenómenos fonéticos que el inglés escrito no refleja. Esta guía te explica por qué y te da las 10 técnicas más efectivas para mejorar, organizadas por nivel.
            </p>

            {/* Section 1 */}
            <section id="por-que-dificil" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué el Listening es Tan Difícil
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El inglés hablado es radicalmente diferente al inglés escrito. Fenómenos como el <strong>connected speech</strong> (habla conectada) modifican los sonidos de las palabras hasta hacerlas irreconocibles si solo estás acostumbrado al inglés escrito.
              </p>

              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Fenómenos del connected speech que debes conocer</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="font-mono bg-white rounded px-2 py-1 text-sm text-emerald-700 flex-shrink-0">Elision</span>
                    <p className="text-gray-700 text-sm">"next day" → "nex' day" (la 't' desaparece)</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono bg-white rounded px-2 py-1 text-sm text-emerald-700 flex-shrink-0">Assimilation</span>
                    <p className="text-gray-700 text-sm">"ten boys" → "tem boys" (la 'n' se convierte en 'm')</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono bg-white rounded px-2 py-1 text-sm text-emerald-700 flex-shrink-0">Reduction</span>
                    <p className="text-gray-700 text-sm">"want to" → "wanna", "going to" → "gonna"</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono bg-white rounded px-2 py-1 text-sm text-emerald-700 flex-shrink-0">Linking</span>
                    <p className="text-gray-700 text-sm">"not at all" → suena como "nota tall"</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>La solución:</strong> Necesitas entrenamiento específico en estos fenómenos fonéticos, no solo más vocabulario. Muchos estudiantes con nivel B2 tienen dificultades de listening porque nadie les ha explicado cómo funciona el inglés hablado real.
                </p>
              </div>
            </section>

            {/* Section 2 - 10 técnicas */}
            <section id="10-tecnicas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                10 Técnicas por Nivel
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { num: "1", nivel: "A2-B1", title: "Dictado activo", desc: "Escucha un fragmento de 30 segundos, escribe lo que oyes, compara con la transcripción, identifica las diferencias. Este ciclo de escucha-escritura-corrección es el más efectivo para nivel básico-intermedio." },
                  { num: "2", nivel: "B1-B2", title: "Shadowing", desc: "Repite en tiempo real lo que escuchas. Empieza con audios lentos (BBC Learning English) y ve aumentando la velocidad. Es la técnica más efectiva para conectar oído y producción." },
                  { num: "3", nivel: "A2-B1", title: "Escucha activa con transcripción", desc: "Lee la transcripción mientras escuchas. Identifica dónde el inglés hablado difiere del escrito. Es el mejor método para aprender connected speech de forma consciente." },
                  { num: "4", nivel: "B1-C1", title: "Podcasts por nivel", desc: "Selecciona podcasts 10-15% por encima de tu nivel actual. La exposición a inglés ligeramente difícil activa el aprendizaje; demasiado fácil o difícil no produce mejora." },
                  { num: "5", nivel: "B2-C1", title: "Series con subtítulos en inglés", desc: "Primero con subtítulos en inglés (no español), después sin. Pausa en frases que no entiendes y repite hasta captar todos los sonidos." },
                  { num: "6", nivel: "A2-B1", title: "News in Levels", desc: "newsinlevels.com ofrece las mismas noticias en tres niveles de dificultad. Ideal para practicar desde A2 con audio e ir subiendo de nivel progresivamente." },
                  { num: "7", nivel: "B2-C1", title: "Radio en inglés en directo", desc: "BBC Radio 4 o NPR: inglés nativo sin guión, velocidad real, acentos variados. Es el nivel más difícil pero el más parecido a la exposición real." },
                  { num: "8", nivel: "B1-B2", title: "TED Talks con transcripción", desc: "ted.com ofrece transcripción en inglés de todas las charlas. Escucha 2 minutos, lee la transcripción, identifica diferencias entre lo que oíste y lo que dicen realmente." },
                  { num: "9", nivel: "A2-B1", title: "Música en inglés con letra", desc: "Escucha la canción, intenta escribir la letra, compara con la letra real. La música usa connected speech intensivamente y es una forma agradable de entrenar el oído." },
                  { num: "10", nivel: "B1-C1", title: "Exposición acumulada diaria", desc: "30 minutos de listening activo diario supera siempre a 3 horas puntuales semanales. El cerebro consolida el aprendizaje entre sesiones. La constancia es la técnica más importante." }
                ].map((item) => (
                  <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900">{item.title}</h3>
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{item.nivel}</span>
                        </div>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Recursos gratuitos */}
            <section id="recursos-gratuitos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Recursos Gratuitos Recomendados
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { nivel: "A2-B1", nombre: "BBC Learning English", url: "bbc.co.uk/learningenglish", desc: "El recurso más completo para nivel básico-intermedio. Audio, vídeo y transcripciones." },
                  { nivel: "A2-B1", nombre: "News in Levels", url: "newsinlevels.com", desc: "Noticias en tres niveles de dificultad con audio. Ideal para subir progresivamente." },
                  { nivel: "B1-B2", nombre: "TED Talks", url: "ted.com", desc: "Charlas con transcripción en inglés. Amplio abanico de temas para mantener motivación." },
                  { nivel: "B2-C1", nombre: "BBC Radio 4 Podcasts", url: "bbc.co.uk/radio4", desc: "Inglés nativo real. In Our Time, Desert Island Discs y más." }
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

            {/* Section 4 - Plan semanal */}
            <section id="plan-semanal" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan Semanal de Práctica (30 min/día)
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  { dia: "Lunes y miércoles", actividad: "Dictado activo (20 min) + shadowing del mismo fragmento (10 min)" },
                  { dia: "Martes y jueves", actividad: "Episodio de podcast con transcripción — escuchar, leer, escuchar de nuevo (30 min)" },
                  { dia: "Viernes", actividad: "Serie o película (30 min con subtítulos en inglés, foco en frases incomprensibles)" },
                  { dia: "Sábado", actividad: "TED Talk completa — primero escuchar, luego con transcripción, identificar connected speech (30 min)" },
                  { dia: "Domingo", actividad: "Repaso libre: vídeo de YouTube, música, radio. Lo que más motiva esa semana (30 min)" }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                    <span className="font-semibold text-emerald-600 text-sm flex-shrink-0 w-32">{p.dia}</span>
                    <p className="text-gray-700 text-sm">{p.actividad}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 - Errores comunes */}
            <section id="errores-comunes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Errores Comunes al Practicar Listening
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Escuchar de fondo sin atención</h3>
                  <p className="text-gray-700 text-sm">Poner inglés de fondo mientras haces otra cosa apenas mejora el listening. El cerebro necesita procesar activamente, no simplemente estar expuesto.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Usar siempre el mismo material</h3>
                  <p className="text-gray-700 text-sm">Si escuchas siempre el mismo acento, canal o tipo de contenido, solo mejoras para ese contexto específico. La variedad de acentos y registros es esencial.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Rendirse cuando no entiendes</h3>
                  <p className="text-gray-700 text-sm">El discomfort de no entender todo es parte del proceso. Escuchar repetidamente el mismo fragmento difícil y desentrañarlo produce más aprendizaje que escuchar mucho contenido fácil.</p>
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

            <InlineOneToOneCTA pathname="/blog/mejorar-listening-ingles" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Nuestra Metodología</h3>
                  <p className="text-gray-600 text-sm">Cómo integramos el listening en nuestra metodología de enseñanza.</p>
                </a>
                <a href="/blog/no-entiendo-ingles-hablado/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">No Entiendo el Inglés Hablado</h3>
                  <p className="text-gray-600 text-sm">Causas científicas y plan de mejora progresiva por nivel.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Cursos de Inglés para Adultos</h3>
                  <p className="text-gray-600 text-sm">Programas con entrenamiento de listening integrado.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/mejorar-listening-ingles" />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.bbc.co.uk/learningenglish/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → BBC Learning English - Recursos oficiales de listening gratuitos
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
