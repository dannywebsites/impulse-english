import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

export const articleSchema = generateArticleSchema({
    headline: 'Cómo Motivar a tu Hijo con el Inglés: 10 Estrategias que Funcionan',
    description: 'Motiva a tu hijo con el inglés usando estas 10 estrategias probadas: videojuegos, series, recompensas por hitos y más. Guía práctica para padres con niños 6-14 años.',
    url: `${businessInfo.url}/blog/motivar-hijo-ingles`,
    datePublished: '2025-03-01'
  });

export const faqItems = [
    {
      question: 'Mi hijo odia el inglés. ¿Qué hago?',
      answer: 'El rechazo suele tener causa concreta: método aburrido, profesor incompatible, comparación con otros, o experiencia negativa previa. Identifica la causa antes de buscar solución.'
    }

  ,
    {
      question: '¿Cómo hacer que el inglés sea divertido en casa?',
      answer: 'Películas de Disney en inglés, Minecraft en inglés, canciones de artistas favoritos en inglés. Lo clave es integrar el inglés en actividades que ya le gustan, no añadir "deberes extra".'
    },
    {
      question: '¿Las recompensas funcionan para motivar?',
      answer: 'A corto plazo sí, pero no son sostenibles solas. Las mejores son las recompensas intrínsecas: "puedo entender mi serie favorita", "puedo chatear con mi amigo extranjero". El objetivo real motiva más que el premio.'
    },
    {
      question: '¿Cuándo buscar ayuda profesional?',
      answer: 'Si el rechazo dura más de 3 meses y afecta a su autoestima o relación con los estudios en general, consulta con el profesor o el centro. Puede haber un problema de aprendizaje subyacente.'
    }
  ];

export default function MotivarHijoInglesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const estrategias = [
    {
      num: '01',
      title: 'Inglés en sus actividades favoritas',
      desc: 'Si le gusta Minecraft, Fortnite o Roblox, configura el juego en inglés. Si le gustan los youtubers, busca canales similares en inglés. El truco es que el inglés no sea una actividad extra, sino parte de lo que ya disfruta.'
    },
    {
      num: '02',
      title: 'Objetivos con significado real',
      desc: 'En lugar de "necesitas saber inglés para trabajar", prueba con "cuando sepas inglés podrás chatear con los fans de tu artista favorito" o "podrás entender los vídeos originales en inglés sin subtítulos". Los objetivos concretos y cercanos motivan más.'
    },
    {
      num: '03',
      title: 'Celebra cada hito',
      desc: 'Primera película entendida en inglés sin subtítulos, primera canción cantada completa, primera vez que habla en inglés con un nativo. Celebra estos momentos de forma especial: dan evidencia real del progreso.'
    },
    {
      num: '04',
      title: 'Conexión con pares extranjeros',
      desc: 'Los intercambios de idiomas online, los pen pals o los campamentos internacionales son fuentes de motivación poderosas. Cuando el inglés permite hacer amigos reales, la motivación es intrínseca y duradera.'
    },
    {
      num: '05',
      title: 'Dale autonomía en el aprendizaje',
      desc: 'Que tu hijo elija qué serie ver en inglés, qué canciones practicar, qué libro leer. La autonomía genera propiedad del aprendizaje: aprende porque él lo decide, no porque se lo impones.'
    },
    {
      num: '06',
      title: 'Gamificación y retos',
      desc: 'Apps como Duolingo, retos de vocabulario semanales, juegos de palabras en inglés. La gamificación convierte el aprendizaje en un juego con puntuación, lo que activa el circuito de recompensa del cerebro.'
    },
    {
      num: '07',
      title: 'Evita las comparaciones',
      answer: 'Nunca compares el inglés de tu hijo con el de su hermano, primo o compañero. Las comparaciones generan vergüenza y rechazo. Compara únicamente con él mismo: "hace dos meses no sabías esta canción y ahora la cantas perfecta".'
    },
    {
      num: '08',
      title: 'Crea un ambiente inglés en casa',
      desc: 'Post-its con palabras en inglés en los objetos de la casa, series en inglés encendidas (aunque no las esté viendo activamente), música en inglés de fondo. La exposición pasiva acelera la adquisición.'
    },
    {
      num: '09',
      title: 'Viajes y experiencias en inglés',
      desc: 'Un viaje a Londres, Dublín o cualquier país de habla inglesa cambia radicalmente la motivación. Cuando el niño experimenta que el inglés "sirve para algo real", la motivación se multiplica.'
    },
    {
      num: '10',
      title: 'El profesor adecuado',
      desc: 'No todos los buenos profesores de inglés conectan con todos los niños. Si tu hijo no tiene relación positiva con su profesor, busca una alternativa. La relación profesor-alumno es el factor motivacional más potente en la infancia.'
    }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={blogImages.infantilClass.url}
                alt="Niños motivados aprendiendo inglés"
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
                  { label: 'Motivar Hijo Inglés' }
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
                  Cómo Motivar a tu Hijo con el Inglés: 10 Estrategias que Funcionan
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Guía práctica para padres: 10 estrategias probadas para que tu hijo de 6 a 14 años quiera aprender inglés sin que se lo pidas.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-purple-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#por-que-pierden" className="text-purple-600 hover:text-purple-700 transition-colors">→ Por qué pierden la motivación</a></li>
                <li><a href="#estrategias" className="text-purple-600 hover:text-purple-700 transition-colors">→ 10 estrategias detalladas</a></li>
                <li><a href="#papel-padres" className="text-purple-600 hover:text-purple-700 transition-colors">→ El papel de los padres</a></li>
                <li><a href="#errores" className="text-purple-600 hover:text-purple-700 transition-colors">→ Errores que desmotivan</a></li>
                <li><a href="#indicadores" className="text-purple-600 hover:text-purple-700 transition-colors">→ Indicadores de progreso</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La motivación es el motor del aprendizaje de idiomas. Sin ella, las clases más caras del mundo dan resultados mediocres. Con ella, incluso el aprendizaje informal produce avances sorprendentes. Si tu hijo no está motivado con el inglés, no es porque sea "malo para los idiomas": es porque aún no ha encontrado la razón personal para aprender.
            </p>

            {/* Section 1 - Por qué pierden la motivación */}
            <section id="por-que-pierden" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué los Niños Pierden la Motivación con el Inglés
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-red-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-red-700">Causas frecuentes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span>Método aburrido o poco relevante</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span>Presión excesiva de los padres</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span>Comparación con otros niños</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span>Experiencia negativa previa</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">•</span>Contenido poco interesante para su edad</li>
                  </ul>
                </div>
                <div className="bg-white border border-purple-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-purple-700">Lo que realmente funciona</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Conectar el inglés con sus intereses</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Objetivos personales y alcanzables</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Celebrar los logros</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Autonomía en el proceso</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />El profesor adecuado</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 - 10 estrategias */}
            <section id="estrategias" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                10 Estrategias para Motivar a tu Hijo con el Inglés
              </h2>

              <div className="space-y-4 mb-8">
                {estrategias.map((e) => (
                  <div key={e.num} className="bg-white border border-gray-200 rounded-xl p-6 flex gap-5">
                    <div className="text-3xl font-bold text-purple-200 flex-shrink-0 leading-none">{e.num}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{e.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{e.desc || (e as any).answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Papel de los padres */}
            <section id="papel-padres" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Papel de los Padres en la Motivación
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los padres son el factor motivacional más potente en el aprendizaje infantil. Pero hay una línea fina entre apoyar y presionar. Estas son las actitudes que marcan la diferencia:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Actitudes que motivan</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Mostrar interés genuino en lo que aprende</li>
                    <li>Pedir que te enseñe palabras en inglés</li>
                    <li>Ver series en inglés juntos</li>
                    <li>Modelar el aprendizaje de idiomas</li>
                    <li>Celebrar el progreso, no el resultado</li>
                  </ul>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Actitudes que desmotivan</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Preguntar sobre notas y exámenes constantemente</li>
                    <li>Comparar con hermanos o compañeros</li>
                    <li>Mostrar ansiedad sobre el nivel de inglés</li>
                    <li>Obligar a estudiar inglés cuando está cansado</li>
                    <li>Penalizar los errores en lugar de celebrarlos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 - Errores */}
            <section id="errores" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Errores Más Comunes que Desmotivan
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Forzar el estudio cuando está cansado</h3>
                  <p className="text-gray-700">El cerebro cansado no aprende. Si tu hijo llega agotado del colegio, el inglés "después de cenar" producirá rechazo y poco aprendizaje. Busca el momento óptimo del día para cada niño.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Comparar con los hermanos</h3>
                  <p className="text-gray-700">"Tu hermana a tu edad ya sabía más inglés" es una de las frases más destructivas que puede escuchar un niño. Cada niño tiene su propio ritmo de adquisición, y la comparación solo genera vergüenza y resistencia.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Presión excesiva sobre los exámenes</h3>
                  <p className="text-gray-700">Hablar constantemente del Cambridge, de si va a aprobar, de las consecuencias de suspender. Los niños que sufren ansiedad examinadora rinden muy por debajo de su nivel real. El examen debe ser un hito celebrado, no una amenaza.</p>
                </div>
              </div>
            </section>

            {/* Section 5 - Indicadores de progreso */}
            <section id="indicadores" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Indicadores de que la Motivación está Funcionando
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Estos son los signos que indican que tu hijo ha desarrollado motivación intrínseca por el inglés. Cuando aparecen, el aprendizaje se sostiene por sí solo:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">🎵</div>
                  <p className="text-gray-700 text-sm font-medium">Canta canciones en inglés espontáneamente</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">📺</div>
                  <p className="text-gray-700 text-sm font-medium">Elige ver contenido en inglés voluntariamente</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="text-gray-700 text-sm font-medium">Usa palabras en inglés en sus conversaciones</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">🎮</div>
                  <p className="text-gray-700 text-sm font-medium">Juega a videojuegos configurados en inglés</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="text-gray-700 text-sm font-medium">Pide libros o comics en inglés</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">✈️</div>
                  <p className="text-gray-700 text-sm font-medium">Quiere viajar a un país de habla inglesa</p>
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
                        <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
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
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Un entorno donde los niños quieren venir a clase</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Primera sesión gratis. Comprueba por qué nuestros alumnos piden ellos mismos ir a inglés.
              </p>
              <a
              href="/cursos-ingles/primaria/"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Ver cursos de primaria
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/cursos-ingles/primaria/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Primaria
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para niños de 6 a 12 años en Madrid.</p>
                </a>
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">El enfoque que mantiene a los niños motivados.</p>
                </a>
                <a href="/cursos-ingles/infantil/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Infantil
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para los más pequeños con Great Little People.</p>
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
              href="https://www.cambridgeenglish.org/es/learning-english/parents-and-children/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Recursos para padres - Cambridge English Learning
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
