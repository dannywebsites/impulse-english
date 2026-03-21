import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Headphones } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Aprender Inglés con Podcasts: Los Mejores por Nivel (2026)",
    description: "Descubre los mejores podcasts para aprender inglés en 2026 por nivel (A2-C1). Guía con rutina semanal, técnicas de escucha activa y recursos gratuitos.",
    url: `${businessInfo.url}/blog/aprender-ingles-podcasts`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Cuánto tiempo al día debo escuchar podcasts en inglés?",
      answer: "Entre 20 y 30 minutos diarios de escucha activa (con atención plena, no de fondo) es suficiente para notar mejoras en 4-6 semanas. La clave es la constancia, no la cantidad."
    },
    {
      question: "¿Es mejor escuchar podcasts con o sin transcripción?",
      answer: "Depende de tu nivel. En A2-B1 conviene escuchar primero sin transcripción, intentar captar lo máximo posible y después releer con la transcripción para identificar lo que se te escapó. A partir de B2 puedes prescindir de ella gradualmente."
    },
    {
      question: "¿Puedo aprender inglés solo con podcasts?",
      answer: "Los podcasts desarrollan el listening y amplían vocabulario, pero no sustituyen la práctica de speaking, writing ni gramática. Son un complemento excelente, no un método completo por sí solos."
    },
    {
      question: "¿Qué velocidad de reproducción es recomendable?",
      answer: "Empieza a velocidad normal (1x). Si entiendes más del 90 %, sube a 1.25x para acercarte a la velocidad del inglés nativo real. Nunca bajes de 0.75x: la pronunciación se distorsiona y pierdes el beneficio fonético."
    },
    {
      question: "¿Escuchar podcasts de fondo mientras hago otras cosas sirve?",
      answer: "Apenas. El cerebro necesita procesar activamente el idioma para mejorar. La escucha pasiva de fondo puede acostumbrarte a la entonación, pero no mejora la comprensión real ni el vocabulario."
    }
  ];

export default function AprenderInglesPodcastsPage() {
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
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG"
                alt="Aprender inglés con podcasts en Impulse English Academy"
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
                  { label: 'Aprender Inglés con Podcasts' }
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
                  Aprender Inglés con Podcasts: Los Mejores por Nivel
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Guía completa de los mejores podcasts para aprender inglés en 2026, organizados por nivel, con técnicas de escucha activa y una rutina semanal de práctica.
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
                <li><a href="#por-que-podcasts" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Por qué los podcasts funcionan para aprender inglés</a></li>
                <li><a href="#mejores-podcasts" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Los mejores podcasts por nivel</a></li>
                <li><a href="#tecnicas-escucha" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Técnicas de escucha activa</a></li>
                <li><a href="#rutina-semanal" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Rutina semanal con podcasts</a></li>
                <li><a href="#errores-evitar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Errores que debes evitar</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Los podcasts se han convertido en una de las herramientas más eficaces para mejorar el inglés. Son gratuitos, los llevas en el bolsillo y cubren todos los niveles. Pero no basta con darle al play: elegir el podcast adecuado para tu nivel y escucharlo con técnica marca la diferencia entre perder el tiempo y mejorar de verdad. En esta guía te explicamos cómo hacerlo bien.
            </p>

            {/* Section 1 */}
            <section id="por-que-podcasts" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué los Podcasts Funcionan para Aprender Inglés
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La comprensión oral (listening) es la destreza que más horas de exposición necesita. Los podcasts ofrecen exactamente eso: <strong>exposición regular a inglés auténtico</strong>, adaptable a tu nivel y a tu horario.
              </p>

              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Ventajas frente a otros recursos</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm"><strong>Flexibilidad total:</strong> los escuchas al ir al trabajo, en el gimnasio o paseando al perro.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm"><strong>Inglés real:</strong> acentos, velocidad y vocabulario auténticos, no el inglés artificial de los libros de texto.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm"><strong>Gratuitos:</strong> la mayoría son completamente gratuitos en Spotify, Apple Podcasts o YouTube.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm"><strong>Por niveles:</strong> hay podcasts diseñados específicamente para cada nivel, desde A2 hasta C1+.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Dato clave:</strong> Según investigaciones en adquisición de segundas lenguas, la exposición comprensible (input ligeramente por encima de tu nivel actual) es el factor más determinante en la mejora del listening. Los podcasts son el formato ideal para conseguirla de forma constante.
                </p>
              </div>
            </section>

            {/* Section 2 - Mejores podcasts por nivel */}
            <section id="mejores-podcasts" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Los Mejores Podcasts por Nivel
              </h2>

              {/* A2-B1 */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Nivel A2-B1 (Básico-Intermedio)</h3>
              <div className="space-y-4 mb-8">
                {[
                  { nombre: "6 Minute English (BBC)", desc: "Episodios de 6 minutos sobre temas cotidianos. Vocabulario explicado, ritmo pausado y transcripción disponible. El punto de partida ideal.", nivel: "A2-B1" },
                  { nombre: "BBC Learning English", desc: "Múltiples series por nivel: The English We Speak (expresiones), News Review (noticias) y Grammar Drills. Contenido estructurado como una clase.", nivel: "A2-B1" },
                  { nombre: "English Learning for Curious Minds", desc: "Episodios de 20 minutos sobre cultura, historia y ciencia. Habla clara, vocabulario explicado y transcripción completa incluida.", nivel: "B1" },
                  { nombre: "Voice of America Learning English", desc: "Noticias leídas a velocidad reducida con vocabulario simplificado. Perfecto para ganar confianza con temas de actualidad.", nivel: "A2" }
                ].map((p, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{p.nombre}</h4>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{p.nivel}</span>
                    </div>
                    <p className="text-gray-700">{p.desc}</p>
                  </div>
                ))}
              </div>

              {/* B2 */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nivel B2 (Intermedio-Alto)</h3>
              <div className="space-y-4 mb-8">
                {[
                  { nombre: "TED Talks Daily", desc: "Charlas TED en versión podcast. Temas variados, inglés articulado y transcripciones disponibles en ted.com. El salto perfecto hacia el inglés real.", nivel: "B2" },
                  { nombre: "All Ears English", desc: "Dos profesoras americanas conversan sobre cultura, gramática y expresiones. Ritmo natural pero accesible. Ideal para acostumbrarte al inglés americano.", nivel: "B2" },
                  { nombre: "Freakonomics Radio", desc: "Economía y comportamiento humano explicados de forma amena. Vocabulario rico, entrevistas reales y producción excelente.", nivel: "B2" },
                  { nombre: "Stuff You Should Know", desc: "Dos presentadores explican temas curiosos en tono informal. Perfecto para acostumbrarte a la conversación natural entre nativos.", nivel: "B2" }
                ].map((p, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{p.nombre}</h4>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{p.nivel}</span>
                    </div>
                    <p className="text-gray-700">{p.desc}</p>
                  </div>
                ))}
              </div>

              {/* C1 */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nivel C1 (Avanzado)</h3>
              <div className="space-y-4 mb-8">
                {[
                  { nombre: "BBC Radio 4 (In Our Time)", desc: "Debates académicos sobre historia, filosofía y ciencia. Varios acentos británicos, vocabulario especializado y ritmo de conversación real.", nivel: "C1" },
                  { nombre: "The Daily (New York Times)", desc: "Periodismo de investigación en profundidad. Inglés americano nativo a velocidad real con entrevistas complejas.", nivel: "C1" },
                  { nombre: "Radiolab", desc: "Narrativa sonora sobre ciencia y filosofía. Producción innovadora, múltiples voces y vocabulario técnico accesible.", nivel: "C1" },
                  { nombre: "Desert Island Discs (BBC)", desc: "Entrevistas íntimas con personalidades. Acentos variados, vocabulario emocional y narrativa personal. Excelente para matices culturales.", nivel: "C1" }
                ].map((p, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{p.nombre}</h4>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{p.nivel}</span>
                    </div>
                    <p className="text-gray-700">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Técnicas de escucha activa */}
            <section id="tecnicas-escucha" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Técnicas de Escucha Activa con Podcasts
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Escuchar un podcast sin más no es suficiente. Estas cinco técnicas convierten cada episodio en una sesión de aprendizaje real:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { num: "1", title: "Escucha-Pausa-Repite", desc: "Escucha un fragmento de 30 segundos, pausa y repite en voz alta lo que has entendido. Después vuelve a escuchar para comprobar. Activa la conexión entre comprensión y producción." },
                  { num: "2", title: "Escucha sin transcripción → con transcripción", desc: "Primero escucha intentando captar el máximo. Después relee con la transcripción e identifica exactamente qué palabras o frases se te escaparon y por qué." },
                  { num: "3", title: "Caza de vocabulario", desc: "Anota 5-7 palabras o expresiones nuevas por episodio. Búscalas en contexto, escribe una frase propia con cada una. Es más efectivo que aprender listas de vocabulario aislado." },
                  { num: "4", title: "Shadowing (repetición simultánea)", desc: "Repite lo que oyes al mismo tiempo que lo escuchas, imitando la entonación y el ritmo. Mejora la pronunciación y entrena el oído para la velocidad nativa." },
                  { num: "5", title: "Resumen oral", desc: "Después de cada episodio, grábate resumiéndolo en inglés durante 1-2 minutos. Combina listening con speaking y fuerza a tu cerebro a procesar lo escuchado activamente." }
                ].map((item) => (
                  <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</span>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 - Rutina semanal */}
            <section id="rutina-semanal" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Rutina Semanal con Podcasts (25 min/día)
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  { dia: "Lunes", actividad: "Episodio nuevo con escucha activa (sin transcripción). Anota vocabulario desconocido. (25 min)" },
                  { dia: "Martes", actividad: "Reescucha del episodio del lunes con transcripción. Identifica connected speech y expresiones. (25 min)" },
                  { dia: "Miércoles", actividad: "Episodio nuevo diferente + shadowing de un fragmento de 3 minutos. (25 min)" },
                  { dia: "Jueves", actividad: "Podcast de noticias (BBC, VOA). Pausa después de cada noticia y resume en voz alta. (25 min)" },
                  { dia: "Viernes", actividad: "Episodio libre (el tema que más te interese). Escucha por placer pero anota 5 palabras nuevas. (25 min)" },
                  { dia: "Sábado", actividad: "Repaso de vocabulario de la semana (15 min) + episodio de nivel superior al tuyo como reto. (25 min)" },
                  { dia: "Domingo", actividad: "Descanso activo: podcast en español sobre temas que ya escuchaste en inglés, para afianzar conceptos." }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                    <span className="font-semibold text-emerald-600 text-sm flex-shrink-0 w-24">{p.dia}</span>
                    <p className="text-gray-700 text-sm">{p.actividad}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 - Errores */}
            <section id="errores-evitar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Errores que Debes Evitar
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Elegir podcasts demasiado difíciles</h3>
                  <p className="text-gray-700 text-sm">Si entiendes menos del 60 % del contenido, el podcast está por encima de tu nivel. No aprenderás: solo te frustrarás. Baja un nivel y sube cuando entiendas el 80-90 %.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Escuchar siempre de fondo</h3>
                  <p className="text-gray-700 text-sm">Poner un podcast mientras cocinas o limpias apenas mejora tu inglés. El cerebro necesita atención activa para procesar un segundo idioma. Reserva al menos 20 minutos de escucha concentrada.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">No variar de acento ni formato</h3>
                  <p className="text-gray-700 text-sm">Si solo escuchas inglés americano, el británico, australiano o indio te sonará a otro idioma. Alterna podcasts de distintos países para entrenar tu oído con acentos variados.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">No anotar nada</h3>
                  <p className="text-gray-700 text-sm">Escuchar sin tomar notas es como leer sin subrayar: la retención cae drásticamente. Anota al menos 5 palabras o expresiones por episodio.</p>
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

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Integramos podcasts y listening real en nuestras clases</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                En Impulse English trabajamos la comprensión oral con materiales auténticos adaptados a tu nivel, desde el primer día.
              </p>
              <a
              href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Consultar nuestros cursos
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/blog/mejorar-listening-ingles" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Cómo Mejorar el Listening en Inglés</h3>
                  <p className="text-gray-600 text-sm">10 técnicas efectivas por nivel para mejorar tu comprensión oral.</p>
                </a>
                <a href="/blog/mejorar-speaking-ingles" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Cómo Mejorar el Speaking en Inglés</h3>
                  <p className="text-gray-600 text-sm">Técnicas para ganar fluidez y confianza al hablar inglés.</p>
                </a>
                <a href="/cursos-ingles/adultos" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Cursos de Inglés para Adultos</h3>
                  <p className="text-gray-600 text-sm">Programas con listening integrado y materiales auténticos.</p>
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
              href="https://www.bbc.co.uk/learningenglish/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → BBC Learning English - Recursos oficiales gratuitos para aprender inglés
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
