import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Por Qué Entiendo Inglés Pero No Puedo Hablarlo?",
    description: "Es normal entender inglés pero no hablarlo. Se debe al desequilibrio entre habilidades pasivas y activas. Descubre 5 estrategias para empezar a hablar.",
    url: `${businessInfo.url}/blog/entiendo-ingles-no-hablo`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Es normal entender inglés pero no poder hablarlo?",
      answer: "Completamente normal. Es un fenómeno lingüístico conocido como 'competencia pasiva'. Tu cerebro ha desarrollado la capacidad de reconocer patrones del idioma (comprensión) pero aún no ha automatizado los procesos necesarios para producir el idioma (expresión). Es como reconocer una cara vs dibujarla: son habilidades cognitivas diferentes."
    }

  ,
    {
      question: "¿Cuánto tiempo tarda en activarse la capacidad de hablar?",
      answer: "Con práctica regular de speaking (3-4 veces por semana, 20-30 minutos), la mayoría de estudiantes empiezan a notar mejora significativa en 4-8 semanas. La transición de comprensión pasiva a producción activa se acelera enormemente con la práctica oral constante en un entorno de confianza."
    },
    {
      question: "¿Puedo aprender a hablar inglés sin vivir en un país anglosajón?",
      answer: "Absolutamente. Aunque la inmersión total es ideal, puedes crear un entorno de inmersión parcial: clases conversacionales, tándems lingüísticos, cambiar el idioma de tus dispositivos, hablar solo en inglés con tu profesor. Miles de personas alcanzan fluidez sin salir de su país."
    },
    {
      question: "¿Me sirve ver series en inglés para aprender a hablar?",
      answer: "Ver series en inglés mejora principalmente tu listening y vocabulario pasivo. Para hablar, necesitas práctica activa: repetir diálogos (shadowing), responder preguntas sobre lo visto, resumir episodios en voz alta. La comprensión es el primer paso, pero la producción requiere práctica específica."
    }
  ];

export default function EntiendoInglesNoHabloPage() {
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
              <img src="/images/academy/facilities/classroom-facilities-main-classroom.jpg" alt="Clase de conversación en inglés en Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Entiendo Inglés Pero No Hablo' }
                ]}
                variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Marzo 2026
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  ¿Por Qué Entiendo Inglés Pero No Puedo Hablarlo?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Descubre por qué ocurre este fenómeno tan común y las estrategias para activar tu capacidad de hablar inglés con confianza.
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
                <li><a href="#por-que" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Por Qué Ocurre: Habilidades Pasivas vs Activas</a></li>
                <li><a href="#verguenza" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ El Papel de la Vergüenza y el Bloqueo</a></li>
                <li><a href="#estrategias" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ 5 Estrategias para Activar el Habla</a></li>
                <li><a href="#practica" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Práctica Diaria sin Profesor</a></li>
                <li><a href="#ayuda" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cuándo Necesitas Ayuda Profesional</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si entiendes películas en inglés, lees artículos sin problemas pero te quedas en blanco cuando intentas hablar, no estás solo. Este fenómeno afecta a <strong>millones de estudiantes de inglés en todo el mundo</strong> y tiene una explicación científica clara. La buena noticia es que tu comprensión es una base sólida: ya tienes el conocimiento, solo necesitas aprender a activarlo. En este artículo te explicamos por qué ocurre y cómo solucionarlo paso a paso.
            </p>

            {/* Section 1 */}
            <section id="por-que" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué Ocurre: Habilidades Pasivas vs Activas
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El cerebro procesa la comprensión y la producción del lenguaje en áreas diferentes. La <strong>comprensión</strong> (reading y listening) es una habilidad pasiva: tu cerebro reconoce patrones que ya ha visto. La <strong>producción</strong> (speaking y writing) es activa: requiere buscar, seleccionar y organizar palabras en tiempo real.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Habilidades Pasivas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Reconocer palabras al escucharlas o leerlas</li>
                    <li>• Deducir significados por contexto</li>
                    <li>• Comprender estructuras gramaticales</li>
                    <li>• Se desarrollan con exposición (series, lecturas)</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Habilidades Activas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Recordar palabras bajo presión temporal</li>
                    <li>• Construir frases en tiempo real</li>
                    <li>• Pronunciar correctamente al hablar</li>
                    <li>• Requieren práctica productiva específica</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Tu vocabulario pasivo (palabras que reconoces) puede ser 3-5 veces mayor que tu vocabulario activo (palabras que usas al hablar). La solución no es aprender más vocabulario, sino <strong>activar</strong> el que ya tienes mediante práctica oral constante.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="verguenza" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Papel de la Vergüenza y el Bloqueo Mental
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Más allá de la explicación lingüística, existe un componente emocional poderoso. Muchos adultos experimentan un <strong>bloqueo psicológico</strong> al intentar hablar inglés que no tiene nada que ver con su nivel real de conocimiento:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Perfeccionismo paralizante
                  </h3>
                  <p className="text-gray-700">Quieres decir la frase perfecta, así que no dices nada. El estándar que te pones es mucho más alto que el necesario para comunicarte eficazmente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Miedo al juicio
                  </h3>
                  <p className="text-gray-700">Temes que otros juzguen tu pronunciación o tus errores gramaticales. Este miedo activa la respuesta de estrés, que literalmente bloquea el acceso a tu memoria lingüística.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Experiencias negativas previas
                  </h3>
                  <p className="text-gray-700">Correcciones humillantes en el colegio o situaciones incómodas al hablar generan una asociación negativa que dificulta la producción oral en el futuro.</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La <a href="/blog/verguenza-hablar-ingles/" className="text-emerald-600 hover:underline">vergüenza al hablar inglés</a> es extremadamente común y tiene solución. El primer paso es entender que los errores son parte natural del proceso y que comunicar imperfectamente es infinitamente mejor que no comunicar.
              </p>
            </section>

            {/* Section 3 */}
            <section id="estrategias" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                5 Estrategias para Activar el Habla en Inglés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Estas estrategias están diseñadas específicamente para personas que ya comprenden pero no pueden producir. El objetivo es crear puentes entre tu conocimiento pasivo y la producción activa:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">1</span>
                    Shadowing: Repite lo que escuchas
                  </h3>
                  <p className="text-gray-700">Escucha un podcast o diálogo y repite en voz alta inmediatamente después. Esta técnica crea conexiones neuronales entre la comprensión y la producción, además de mejorar tu pronunciación y ritmo de forma natural.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">2</span>
                    Monólogos en voz alta
                  </h3>
                  <p className="text-gray-700">Dedica 5 minutos al día a hablar solo en inglés: describe tu día, opina sobre una noticia o explica una receta. Sin presión, sin juicio, solo tú practicando la producción oral.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">3</span>
                    Graba y escúchate
                  </h3>
                  <p className="text-gray-700">Grábate hablando en inglés y escúchate después. Al principio es incómodo, pero te permite identificar áreas de mejora y comprobar que hablas mejor de lo que crees.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">4</span>
                    Conversaciones con red de seguridad
                  </h3>
                  <p className="text-gray-700">Empieza con situaciones controladas: un tándem lingüístico, una clase de conversación en grupo pequeño o práctica con un compañero de tu nivel. El entorno seguro reduce la ansiedad.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">5</span>
                    Piensa en inglés activamente
                  </h3>
                  <p className="text-gray-700">Empieza a narrar mentalmente actividades cotidianas en inglés: "I'm making coffee", "I need to call the dentist". Este ejercicio prepara tu cerebro para la producción sin la presión de tener un interlocutor.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="practica" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Práctica Diaria sin Profesor: Tu Rutina de Speaking
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No necesitas un profesor para practicar speaking todos los días. Aquí tienes una rutina de 20 minutos que puedes hacer tú solo y que activará tu producción oral de forma progresiva:
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  Rutina diaria de 20 minutos
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>5 min - Shadowing:</strong> Escucha un fragmento de podcast y repite en voz alta imitando la entonación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>5 min - Monólogo:</strong> Habla sobre un tema: tu día, una opinión, un plan futuro. Sin parar, sin corregirte.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>5 min - Lectura en voz alta:</strong> Lee un artículo o fragmento de libro en voz alta, prestando atención a la pronunciación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>5 min - Vocabulario activo:</strong> Toma 5 palabras nuevas y crea frases orales con cada una.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  La consistencia es más importante que la duración. 20 minutos diarios de práctica oral producen resultados notables en 4-6 semanas. No busques perfección: busca volumen de práctica.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="ayuda" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cuándo Necesitas Ayuda Profesional
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La práctica autónoma es excelente, pero hay situaciones donde la guía profesional marca la diferencia:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Señales de que necesitas un profesor
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Llevas meses practicando solo sin mejora visible</li>
                    <li>• El bloqueo emocional te impide avanzar</li>
                    <li>• No sabes si tu pronunciación es correcta</li>
                    <li>• Necesitas preparar un examen oral</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Lo que aporta un buen profesor
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Corrección inmediata y personalizada</li>
                    <li>• Entorno seguro para practicar sin juicio</li>
                    <li>• Estructura y progresión adaptada a tu nivel</li>
                    <li>• Motivación y seguimiento constante</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                En <a href="/metodologia/" className="text-emerald-600 hover:underline">Impulse English Academy</a> utilizamos una <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">metodología comunicativa</a> donde el speaking representa el 70% de cada clase. Nuestros profesores altamente cualificados crean un entorno de confianza donde los errores son bienvenidos como parte del aprendizaje.
              </p>
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
                  Entender inglés sin poder hablarlo no es un defecto: es una fase normal del aprendizaje. Tu comprensión es una base sólida sobre la que construir tu producción oral. Con las estrategias correctas y práctica constante, puedes activar todo ese conocimiento pasivo y empezar a hablar con confianza.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si sientes que necesitas apoyo profesional, en <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> te ayudamos a romper el bloqueo con <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">clases diseñadas para hablar desde el primer día</a>. <a href="/contacto/" className="text-emerald-600 hover:underline font-medium">Contacta con nosotros</a> para una clase de prueba gratuita.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para empezar a hablar?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te ayudamos a activar tu inglés con clases 100% comunicativas donde hablarás desde el primer minuto.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Reservar clase de prueba
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo enseñamos inglés de forma comunicativa y efectiva.</p>
                </a>
                <a href="/blog/mejorar-speaking-ingles/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Mejorar Speaking en Inglés
                  </h3>
                  <p className="text-gray-600 text-sm">Técnicas y ejercicios para mejorar tu producción oral.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas comunicativos con grupos reducidos.</p>
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
              → Más información en Cambridge English oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}