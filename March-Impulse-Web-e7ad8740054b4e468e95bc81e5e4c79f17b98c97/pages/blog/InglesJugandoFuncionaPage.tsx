import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: '¿Inglés Jugando Funciona? Metodología y Resultados Reales',
    description: 'Sí, aprender inglés jugando funciona y está respaldado por la neurociencia. Descubre cómo el juego acelera el aprendizaje en niños y qué metodologías lo aplican.',
    url: `${businessInfo.url}/blog/ingles-jugando-funciona`,
    datePublished: '2025-03-01'
  });

export const faqItems = [
    {
      question: '¿Por qué el juego funciona mejor que la instrucción directa para niños?',
      answer: 'El cerebro infantil aprende más en estados de bajo estrés y alta motivación. El juego activa el sistema de recompensa dopaminérgico, fijando el aprendizaje de forma más duradera que la memorización.'
    }

  ,
    {
      question: '¿Hasta qué edad funciona aprender inglés jugando?',
      answer: 'El juego es efectivo hasta los 12 años, con mayor impacto antes de los 7. A partir de la adolescencia, se combina con métodos más estructurados, aunque el elemento lúdico sigue siendo beneficioso.'
    },
    {
      question: '¿Cuántas horas de inglés jugando son efectivas?',
      answer: '2-3 sesiones semanales de 45-60 minutos producen resultados sólidos. Más importante que la cantidad es la calidad: inmersión real, no solo canciones en inglés de fondo.'
    },
    {
      question: '¿Los juegos digitales enseñan inglés?',
      answer: 'Parcialmente. Los videojuegos en inglés mejoran vocabulario y lectura, pero no desarrollan speaking ni pronunciación. Lo ideal es combinar juego presencial con el profesor y juegos digitales complementarios.'
    }
  ];

export default function InglesJugandoFuncionaPage() {
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
                src="/images/academy/infantil-classes.jpg"
                alt="Niños aprendiendo inglés jugando en clase"
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
                  { label: '¿Inglés Jugando Funciona?' }
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
                  ¿Inglés Jugando Funciona? Metodología y Resultados Reales
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  La ciencia respalda el aprendizaje lúdico: descubre por qué el juego es la mejor herramienta para que los niños adquieran inglés de forma natural y duradera.
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
                <li><a href="#neurociencia" className="text-purple-600 hover:text-purple-700 transition-colors">→ La ciencia del aprendizaje lúdico</a></li>
                <li><a href="#por-que-funciona" className="text-purple-600 hover:text-purple-700 transition-colors">→ Por qué funciona mejor que la memorización</a></li>
                <li><a href="#metodologias" className="text-purple-600 hover:text-purple-700 transition-colors">→ Metodologías que lo aplican</a></li>
                <li><a href="#juego-estructurado" className="text-purple-600 hover:text-purple-700 transition-colors">→ Juego estructurado vs libre</a></li>
                <li><a href="#resultados" className="text-purple-600 hover:text-purple-700 transition-colors">→ Resultados medibles</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "¿Aprender inglés jugando realmente funciona?" es una de las preguntas más frecuentes entre los padres que buscan la mejor forma de introducir el inglés a sus hijos. La respuesta, respaldada por décadas de investigación en neurociencia y pedagogía, es un rotundo <strong>sí</strong>. No solo funciona: para los niños menores de 7 años, el juego es probablemente el método más efectivo que existe.
            </p>

            {/* Section 1 - Neurociencia */}
            <section id="neurociencia" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                La Neurociencia del Aprendizaje Lúdico
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Cuando un niño juega, su cerebro libera dopamina, el neurotransmisor asociado al placer y la recompensa. Esta liberación dopaminérgica activa los circuitos de memoria a largo plazo, haciendo que lo aprendido durante el juego se consolide de forma mucho más eficiente que durante la memorización pasiva.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                  <p className="text-gray-700 text-sm">Mayor velocidad de retención con método lúdico frente a memorización</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">A2</div>
                  <p className="text-gray-700 text-sm">Nivel medio alcanzado antes de los 7 años con aprendizaje basado en juego</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">7x</div>
                  <p className="text-gray-700 text-sm">Mayor activación cerebral durante el juego que durante instrucción directa</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El estrés es el principal enemigo del aprendizaje de idiomas. Cuando un niño siente presión para rendir, su cerebro activa el cortisol, que inhibe la formación de nuevas conexiones neuronales. El juego hace exactamente lo contrario: reduce el cortisol y maximiza la plasticidad cerebral.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Reconocimiento institucional:</strong> El Marco Común Europeo de Referencia para las Lenguas (MCER) reconoce explícitamente el aprendizaje basado en el juego como metodología válida y recomendada para las etapas infantil y primaria.
                </p>
              </div>
            </section>

            {/* Section 2 - Por qué funciona */}
            <section id="por-que-funciona" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué Funciona Mejor que la Memorización
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La memorización de vocabulario y reglas gramaticales puede funcionar para adultos con cerebros ya desarrollados. Para los niños, sin embargo, la adquisición del lenguaje es un proceso orgánico que necesita cuatro condicionantes que solo el juego proporciona de forma natural:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Motivación intrínseca
                  </h3>
                  <p className="text-gray-700">El niño juega porque quiere, no porque se le obliga. Esta motivación interna es el combustible más potente para el aprendizaje sostenido. Un niño motivado practica de forma espontánea y busca más input sin que nadie se lo pida.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Reducción de la ansiedad lingüística
                  </h3>
                  <p className="text-gray-700">En el juego, el error no tiene consecuencias. Esta ausencia de miedo al fallo elimina el filtro afectivo que bloquea la adquisición del idioma, permitiendo que el cerebro procese y almacene el input lingüístico de forma directa.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Repetición sin aburrimiento
                  </h3>
                  <p className="text-gray-700">El juego permite repetir estructuras lingüísticas docenas de veces sin que el niño perciba que está repitiendo. Cantar la misma canción 20 veces o jugar al mismo juego varias semanas es natural para un niño y consolida el aprendizaje de forma efectiva.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Aprendizaje multisensorial
                  </h3>
                  <p className="text-gray-700">El juego activa simultáneamente el canal auditivo, visual, kinestésico y emocional. Cuando más sentidos participan en el aprendizaje, más rutas neuronales se crean, aumentando la retención a largo plazo.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Metodologías */}
            <section id="metodologias" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Metodologías que Aplican el Aprendizaje Lúdico
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todas las metodologías de inglés para niños aprovechan igualmente el potencial del juego. Estas son las más respaldadas por la evidencia:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                      <th className="text-left p-4 font-semibold">Metodología</th>
                      <th className="text-left p-4 font-semibold">Edad óptima</th>
                      <th className="text-left p-4 font-semibold">Componente lúdico</th>
                      <th className="text-left p-4 font-semibold">Eficacia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">TPR (Total Physical Response)</td>
                      <td className="p-4 text-gray-700">3-8 años</td>
                      <td className="p-4 text-gray-700">Movimiento + comandos</td>
                      <td className="p-4 text-purple-600 font-medium">Muy alta</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Inmersión lúdica</td>
                      <td className="p-4 text-gray-700">1-6 años</td>
                      <td className="p-4 text-gray-700">100% juego en inglés</td>
                      <td className="p-4 text-purple-600 font-medium">Máxima</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">CLIL</td>
                      <td className="p-4 text-gray-700">6-12 años</td>
                      <td className="p-4 text-gray-700">Contenido + proyectos</td>
                      <td className="p-4 text-purple-600 font-medium">Alta</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Great Little People</td>
                      <td className="p-4 text-gray-700">1-7 años</td>
                      <td className="p-4 text-gray-700">Juego + música + cuentos</td>
                      <td className="p-4 text-purple-600 font-medium">Máxima</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El método <a href="https://www.greatlittlepeople.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium">Great Little People</a>, que aplicamos en Impulse English Academy, combina TPR, inmersión total y narrativa en un currículo estructurado para niños de 1 a 7 años. Cada clase es una aventura donde el inglés es el idioma natural de comunicación, no una asignatura.
              </p>
            </section>

            {/* Section 4 - Juego estructurado vs libre */}
            <section id="juego-estructurado" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Juego Estructurado vs Juego Libre
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todo el juego tiene el mismo impacto pedagógico. Es importante distinguir entre juego estructurado (dirigido por el profesor con objetivos lingüísticos claros) y juego libre (exploración espontánea del niño). Ambos tienen valor, pero en contextos diferentes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-purple-700">Juego Estructurado</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Objetivos lingüísticos claros</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Vocabulario y estructuras específicas</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Guiado por el profesor</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Progresión curricular planificada</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Ideal para la clase</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Juego Libre</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />Exploración espontánea</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />Consolidación natural</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />Autónomo y creativo</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />Menos control de objetivos</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />Ideal para casa</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Recomendación práctica:</strong> En clase, el juego estructurado garantiza que cada sesión aporte vocabulario y estructuras concretas. En casa, anima al niño a jugar libremente con juegos, apps o vídeos en inglés para consolidar lo aprendido sin presión adicional.
                </p>
              </div>
            </section>

            {/* Section 5 - Resultados */}
            <section id="resultados" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Resultados Medibles del Aprendizaje Lúdico
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los resultados del aprendizaje lúdico son sólidos y medibles. Los niños enseñados mediante metodologías basadas en el juego muestran avances significativamente superiores a los de metodologías tradicionales:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Nivel A2 antes de los 7 años
                  </h3>
                  <p className="text-gray-700">Los niños que comienzan con metodología lúdica antes de los 3 años y mantienen 2-3 sesiones semanales alcanzan de media el nivel A2 del MCER antes de cumplir los 7 años, listo para empezar la preparación de exámenes Young Learners.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    40% de retención más rápida
                  </h3>
                  <p className="text-gray-700">Estudios comparativos muestran que los niños que aprenden inglés mediante el juego retienen el vocabulario nuevo un 40% más rápido que los que lo hacen mediante flashcards y repetición. La retención a largo plazo también es significativamente mayor.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Mayor confianza oral
                  </h3>
                  <p className="text-gray-700">Los niños formados en entornos lúdicos muestran mucha mayor disposición a hablar en inglés y cometen menos errores por ansiedad. Esta confianza oral es fundamental para el desarrollo del speaking en etapas posteriores.</p>
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

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Conclusión
              </h2>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El inglés jugando no solo funciona: es la forma más natural y efectiva de aprender idiomas en la infancia. La neurociencia, la pedagogía y los resultados prácticos de miles de niños lo demuestran. Lo importante es que el juego sea estructurado, dirigido por profesores formados y que combine inmersión real con objetivos lingüísticos claros.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/infantil/" className="text-purple-600 hover:underline font-medium">nuestras clases infantiles</a> aplicamos el método <a href="/blog/great-little-people-metodologia/" className="text-purple-600 hover:underline font-medium">Great Little People</a>, que convierte cada sesión en una experiencia memorable donde el inglés fluye de forma natural. Visita nuestra página de <a href="/metodologia/" className="text-purple-600 hover:underline font-medium">metodología</a> para conocer más detalles.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/ingles-jugando-funciona" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/cursos-ingles/infantil/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Infantil
                  </h3>
                  <p className="text-gray-600 text-sm">Clases para los más pequeños con Great Little People.</p>
                </a>
                <a href="/blog/great-little-people-metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Metodología Great Little People
                  </h3>
                  <p className="text-gray-600 text-sm">Conoce en detalle el método que usamos con nuestros alumnos.</p>
                </a>
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Descubre cómo enseñamos inglés en Impulse.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/ingles-jugando-funciona" />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.greatlittlepeople.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información sobre Great Little People - método oficial de inglés infantil
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
