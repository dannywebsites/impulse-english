import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Es Bueno que los Niños Aprendan Inglés desde Pequeños?",
    description: "La ciencia confirma que aprender inglés antes de los 6 años aprovecha la plasticidad cerebral. Beneficios cognitivos, sociales y académicos demostrados.",
    url: `${businessInfo.url}/blog/ninos-aprender-ingles-pequenos`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿A partir de qué edad puede un niño empezar a aprender inglés?",
      answer: "Los bebés pueden empezar a recibir exposición al inglés desde los primeros meses de vida a través de canciones, cuentos y juegos. Sin embargo, las clases estructuradas suelen comenzar a partir de los 2-3 años, cuando el niño ya tiene cierta autonomía. Lo importante es que sea una experiencia lúdica y natural, sin forzar la producción oral."
    }

  ,
    {
      question: "¿Aprender inglés de pequeño puede retrasar el desarrollo del español?",
      answer: "No. Numerosos estudios de neurociencia demuestran que el bilingüismo temprano no retrasa el desarrollo lingüístico. Los niños bilingües pueden experimentar una fase inicial donde mezclan idiomas (code-switching), pero esto es un signo de inteligencia lingüística, no de confusión. A medio y largo plazo, los niños bilingües superan a los monolingües en pruebas verbales."
    },
    {
      question: "¿Cuántas horas semanales son recomendables para niños pequeños?",
      answer: "Para niños de 2 a 5 años, se recomiendan entre 2 y 4 horas semanales de exposición estructurada al inglés, complementadas con exposición natural en casa (canciones, dibujos animados en inglés). La consistencia es más importante que la cantidad: mejor 30 minutos diarios que una sesión larga semanal."
    },
    {
      question: "¿Qué diferencia hay entre exposición e inmersión lingüística?",
      answer: "La exposición implica contacto con el idioma durante periodos limitados (clases, canciones, vídeos). La inmersión supone que el inglés es el idioma vehicular durante toda la jornada o gran parte de ella. Ambas son beneficiosas, pero la inmersión produce resultados más rápidos. En Impulse combinamos sesiones de inmersión total con metodología Great Little People."
    }
  ];

export default function NinosAprenderInglesPequenosPage() {
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
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG" alt="Niños pequeños aprendiendo inglés en clase de Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Inglés desde Pequeños' }
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
                  ¿Es Bueno que los Niños Aprendan Inglés desde Pequeños?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  La neurociencia respalda el aprendizaje temprano: la plasticidad cerebral de los primeros años es una ventana de oportunidad única.
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
                <li><a href="#ciencia" className="text-purple-600 hover:text-purple-700 transition-colors">→ La ciencia del aprendizaje temprano</a></li>
                <li><a href="#ventana" className="text-purple-600 hover:text-purple-700 transition-colors">→ Ventana de oportunidad (0-6 años)</a></li>
                <li><a href="#cognitivos" className="text-purple-600 hover:text-purple-700 transition-colors">→ Beneficios cognitivos demostrados</a></li>
                <li><a href="#sociales" className="text-purple-600 hover:text-purple-700 transition-colors">→ Beneficios sociales y emocionales</a></li>
                <li><a href="#empezar" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cómo empezar (por edad)</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Una de las preguntas más frecuentes entre los padres es si conviene que sus hijos aprendan inglés desde una edad temprana. La respuesta de la comunidad científica es clara: <strong>sí, cuanto antes mejor</strong>. Los primeros años de vida representan un periodo crítico para la adquisición lingüística, durante el cual el cerebro está especialmente preparado para absorber y procesar nuevos idiomas. En este artículo exploramos la evidencia científica y te ayudamos a entender por qué empezar pronto es una de las mejores inversiones educativas para tu hijo.
            </p>

            {/* Section 1 */}
            <section id="ciencia" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                La Ciencia del Aprendizaje Temprano de Idiomas
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La neurociencia ha demostrado que el cerebro infantil posee una capacidad extraordinaria para procesar y almacenar información lingüística. Investigaciones de la Universidad de Harvard y el MIT confirman que los niños menores de 6 años pueden adquirir un segundo idioma con una eficiencia que los adultos no pueden igualar. Este fenómeno se debe a la <strong>plasticidad cerebral</strong>, la capacidad del cerebro para formar nuevas conexiones neuronales con facilidad.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Plasticidad cerebral máxima
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Entre 0 y 6 años, el cerebro forma hasta 700 nuevas conexiones neuronales por segundo</li>
                    <li>• Los niños discriminan sonidos de cualquier idioma hasta los 8-10 meses</li>
                    <li>• La adquisición fonológica temprana produce mejor pronunciación de por vida</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Aprendizaje natural
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Los niños adquieren el idioma de forma implícita, sin estudiar gramática</li>
                    <li>• El juego y la interacción social son vehículos naturales de aprendizaje</li>
                    <li>• No necesitan traducción: asocian directamente concepto-palabra</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El investigador Eric Lenneberg planteó la "hipótesis del período crítico", según la cual existe una ventana temporal óptima para la adquisición lingüística. Estudios más recientes han refinado esta teoría, demostrando que aunque el aprendizaje de idiomas es posible a cualquier edad, la <strong>calidad de la adquisición fonológica y gramatical</strong> es significativamente superior cuando comienza antes de los 6 años.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> Un estudio publicado en la revista <em>Cognition</em> con más de 600.000 participantes concluyó que la capacidad de alcanzar dominio nativo de un idioma comienza a declinar a partir de los 10 años. Cuanto antes se inicie la exposición, mejores serán los resultados a largo plazo.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="ventana" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                La Ventana de Oportunidad: de 0 a 6 Años
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los primeros seis años de vida constituyen lo que los neurocientíficos denominan el "periodo sensible" para el lenguaje. Durante esta etapa, el cerebro del niño está biológicamente programado para absorber idiomas de forma natural, sin esfuerzo consciente. Veamos qué ocurre en cada fase:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    0-12 meses: Percepción fonológica universal
                  </h3>
                  <p className="text-gray-700">Los bebés nacen como "ciudadanos del mundo lingüístico": pueden distinguir los sonidos de todos los idiomas. Hacia los 10-12 meses, el cerebro comienza a especializarse en los sonidos que escucha con frecuencia. La exposición temprana al inglés preserva la capacidad de distinguir sonidos como la "th" o la "r" inglesa.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    1-3 años: Explosión del vocabulario
                  </h3>
                  <p className="text-gray-700">En esta fase los niños pueden aprender hasta 10 palabras nuevas al día. Si reciben input en dos idiomas, construyen dos sistemas léxicos paralelos. El juego sensorial y las canciones son herramientas ideales para esta etapa, tal como aplica la <a href="/blog/great-little-people-metodologia" className="text-purple-600 hover:underline">metodología Great Little People</a>.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    3-6 años: Estructuración gramatical
                  </h3>
                  <p className="text-gray-700">El niño comienza a internalizar reglas gramaticales de forma natural. Es capaz de construir frases complejas, hacer preguntas y narrar historias en ambos idiomas. Las clases estructuradas de <a href="/cursos-ingles/infantil" className="text-purple-600 hover:underline">inglés infantil</a> maximizan esta capacidad natural.</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> No se trata de presionar al niño, sino de aprovechar su curiosidad natural. Los niños pequeños no "estudian" un idioma: lo adquieren a través del juego, la música y la interacción social. Por eso las metodologías lúdicas como las que utilizamos en <a href="/metodologia" className="text-purple-600 hover:underline">nuestra academia</a> son tan efectivas.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="cognitivos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Beneficios Cognitivos Demostrados del Bilingüismo Temprano
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Aprender inglés desde pequeño no solo proporciona competencia lingüística: transforma el cerebro del niño de formas que benefician <strong>todas las áreas de su desarrollo cognitivo</strong>. La investigación neurocientífica ha documentado ventajas consistentes en niños bilingües:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Funciones ejecutivas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mayor capacidad de atención selectiva y control inhibitorio</li>
                    <li>• Mejor memoria de trabajo y flexibilidad cognitiva</li>
                    <li>• Superior capacidad para alternar entre tareas (multitasking)</li>
                    <li>• Resolución de problemas más creativa y eficiente</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Rendimiento académico
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mejores puntuaciones en matemáticas y lectura</li>
                    <li>• Mayor conciencia metalingüística (entender cómo funciona el lenguaje)</li>
                    <li>• Facilidad para aprender un tercer o cuarto idioma</li>
                    <li>• Mejores resultados en pruebas estandarizadas</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Un metaanálisis publicado en <em>Psychological Bulletin</em> que revisó más de 100 estudios confirmó que los niños bilingües muestran ventajas significativas en <strong>control atencional, memoria de trabajo y razonamiento abstracto</strong>. Estos beneficios se observan incluso en niños que no son completamente bilingües, sino que tienen exposición regular a un segundo idioma.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Además, investigaciones recientes sugieren que el bilingüismo puede tener efectos protectores a largo plazo contra el deterioro cognitivo asociado al envejecimiento, retrasando la aparición de síntomas de demencia en una media de 4-5 años.
              </p>
            </section>

            {/* Section 4 */}
            <section id="sociales" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Beneficios Sociales y Emocionales
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los beneficios del aprendizaje temprano de inglés van más allá de lo puramente cognitivo. Los niños que crecen con dos idiomas desarrollan habilidades sociales y emocionales que les acompañarán durante toda su vida:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    Empatía y perspectiva social
                  </h3>
                  <p className="text-gray-700">Estudios de la Universidad de Chicago demuestran que los niños bilingües son mejores para entender el punto de vista de los demás. Al navegar entre dos sistemas lingüísticos, desarrollan una mayor conciencia de que otras personas pueden tener perspectivas diferentes a la suya.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    Confianza y autoestima
                  </h3>
                  <p className="text-gray-700">Dominar un segundo idioma proporciona al niño un sentido de logro y competencia. En un mundo globalizado, sentirse capaz de comunicarse en inglés aumenta su confianza para afrontar nuevos retos y relacionarse con personas de diferentes culturas.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    Apertura cultural
                  </h3>
                  <p className="text-gray-700">El acceso a un segundo idioma abre la puerta a una nueva cultura, literatura, música y formas de pensar. Los niños bilingües muestran mayor tolerancia, curiosidad cultural y capacidad de adaptación a entornos diversos.</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Ventaja profesional futura:</strong> Según el informe de la Comisión Europea sobre multilingüismo, los profesionales bilingües ganan de media un 10-15% más que sus homólogos monolingües, y tienen acceso a un mercado laboral significativamente más amplio.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="empezar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Empezar: Guía por Edad
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cada etapa del desarrollo infantil requiere un enfoque diferente para la introducción del inglés. Lo más importante es que la experiencia sea positiva y natural. Estas son nuestras recomendaciones según la edad de tu hijo:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                      <th className="text-left p-4 font-semibold">Edad</th>
                      <th className="text-left p-4 font-semibold">Actividades</th>
                      <th className="text-left p-4 font-semibold">Duración recomendada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">0-1 año</td>
                      <td className="p-4 text-gray-700">Canciones, nanas, cuentos narrados en inglés</td>
                      <td className="p-4 text-gray-700">15-20 min/día</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">1-2 años</td>
                      <td className="p-4 text-gray-700">Juego sensorial, vocabulario básico, música</td>
                      <td className="p-4 text-gray-700">20-30 min/día</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">2-3 años</td>
                      <td className="p-4 text-gray-700">Clases grupales lúdicas, cuentos interactivos</td>
                      <td className="p-4 text-gray-700">2-3 horas/semana</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">4-6 años</td>
                      <td className="p-4 text-gray-700">Inmersión con metodología, proyectos, teatro</td>
                      <td className="p-4 text-gray-700">3-5 horas/semana</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En <a href="/cursos-ingles/infantil" className="text-purple-600 hover:underline font-medium">nuestros cursos de inglés infantil</a>, aplicamos la <a href="/blog/great-little-people-metodologia" className="text-purple-600 hover:underline font-medium">metodología Great Little People</a>, diseñada específicamente para que los más pequeños aprendan inglés a través de la inmersión total y el juego estructurado. Cada sesión combina música, movimiento, storytelling y actividades sensoriales para aprovechar al máximo la plasticidad cerebral de esta etapa.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  La clave del éxito no está solo en las clases: la <strong>consistencia y la exposición en casa</strong> son fundamentales. Poner dibujos animados en inglés, escuchar canciones durante el desayuno o leer cuentos bilingües antes de dormir multiplica el impacto de las clases formales.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Descubre más sobre nuestra <a href="/metodologia" className="text-purple-600 hover:underline font-medium">metodología</a> y cómo creamos entornos de aprendizaje naturales y divertidos para cada grupo de edad.
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

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  La evidencia científica es contundente: aprender inglés desde pequeño es una de las mejores decisiones que puedes tomar por el futuro de tu hijo. La plasticidad cerebral de los primeros años ofrece una ventana de oportunidad única que, una vez cerrada, es difícil de recuperar. Los beneficios cognitivos, sociales y emocionales del bilingüismo temprano acompañarán a tu hijo durante toda su vida.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/infantil" className="text-purple-600 hover:underline font-medium">Impulse English Academy</a> contamos con programas diseñados para cada etapa del desarrollo, con profesores altamente cualificados especializados en primera infancia y la <a href="/blog/great-little-people-metodologia" className="text-purple-600 hover:underline font-medium">metodología Great Little People</a>. Descubre cómo podemos ayudar a tu hijo a crecer bilingüe de forma natural y divertida.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Quieres que tu hijo empiece a aprender inglés?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy ofrecemos clases de inglés para los más pequeños con metodología lúdica y profesores altamente cualificados especializados.
              </p>
              <a
              href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/cursos-ingles/infantil" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Infantil
                  </h3>
                  <p className="text-gray-600 text-sm">Programas diseñados para los más pequeños de la casa.</p>
                </a>
                <a href="/blog/great-little-people-metodologia" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Great Little People: Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Descubre el método de inglés para niños de 1 a 7 años.</p>
                </a>
                <a href="/metodologia" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo enseñamos inglés en Impulse English Academy.</p>
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
              → Más información en Cambridge English - Recursos para padres e hijos
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}