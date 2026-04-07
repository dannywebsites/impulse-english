import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿A Qué Edad Deben Empezar los Bebés con el Inglés?",
    description: "Los bebés pueden empezar con el inglés desde los 6 meses mediante exposición musical y juego. La edad ideal para clases estructuradas es 2-3 años.",
    url: `${businessInfo.url}/blog/edad-empezar-ingles-bebes`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Es demasiado pronto empezar con inglés a los 6 meses?",
      answer: "No, nunca es demasiado pronto para la exposición al inglés. A los 6 meses, el bebé está en plena fase de percepción fonológica universal: puede distinguir todos los sonidos de todos los idiomas. La exposición a canciones, rimas y habla en inglés durante esta etapa preserva su capacidad de distinguir sonidos que se perderían si solo escucha español. No se trata de clases formales, sino de exposición natural a través de música y juego."
    }

  ,
    {
      question: "¿Los bebés bilingües tardan más en hablar?",
      answer: "Es un mito muy extendido. Los estudios muestran que los bebés bilingües alcanzan los hitos del habla al mismo tiempo que los monolingües. Pueden tener un vocabulario ligeramente menor en cada idioma por separado al principio, pero su vocabulario total (sumando ambos idiomas) suele ser igual o superior. Hacia los 3-4 años, la diferencia desaparece completamente."
    },
    {
      question: "¿Necesito hablar inglés yo para que mi bebé aprenda?",
      answer: "No es necesario, aunque ayuda. Puedes crear un entorno de exposición al inglés mediante canciones, dibujos animados, cuentos en inglés y, sobre todo, clases con profesores titulados. Lo importante es la calidad y consistencia de la exposición. Muchos padres no anglófonos crían hijos bilingües exitosamente combinando clases, medios audiovisuales y actividades en inglés."
    },
    {
      question: "¿Cuánto tiempo de inglés al día necesita un bebé?",
      answer: "Para bebés de 6 a 18 meses, entre 15 y 30 minutos diarios de exposición activa (canciones, cuentos interactivos, juego con vocabulario) son suficientes para mantener la sensibilidad fonológica. A partir de los 2 años, se pueden añadir sesiones más largas de 45-60 minutos en clases estructuradas 2-3 veces por semana. La regularidad importa más que la duración."
    },
    {
      question: "¿Qué señales indican que mi bebé está preparado para clases de inglés?",
      answer: "Tu bebé está listo para clases grupales cuando puede permanecer en un espacio con otros niños sin angustia excesiva, muestra interés por canciones y juegos, y es capaz de seguir instrucciones simples. Esto suele ocurrir entre los 18 meses y los 3 años. Antes de esa edad, la exposición en casa es la mejor opción. Cada niño tiene su ritmo; no es una carrera."
    }
  ];

export default function EdadEmpezarInglesBebesPage() {
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
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG" alt="Bebés aprendiendo inglés mediante juego en Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Edad Empezar Inglés Bebés' }
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
                  ¿A Qué Edad Deben Empezar los Bebés con el Inglés?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Desde la exposición musical a los 6 meses hasta las clases estructuradas a los 2-3 años: una guía completa por etapas.
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
                <li><a href="#capacidad" className="text-purple-600 hover:text-purple-700 transition-colors">→ Capacidad lingüística del bebé</a></li>
                <li><a href="#0-12" className="text-purple-600 hover:text-purple-700 transition-colors">→ 0-12 meses: exposición natural</a></li>
                <li><a href="#1-2" className="text-purple-600 hover:text-purple-700 transition-colors">→ 1-2 años: juego en inglés</a></li>
                <li><a href="#2-3" className="text-purple-600 hover:text-purple-700 transition-colors">→ 2-3 años: clases estructuradas</a></li>
                <li><a href="#senales" className="text-purple-600 hover:text-purple-700 transition-colors">→ Señales de que tu hijo está listo</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "¿No es demasiado pronto?" es la pregunta que más escuchamos de los padres cuando hablamos de inglés para bebés. La respuesta corta es: <strong>nunca es demasiado pronto</strong>. El cerebro de tu bebé está diseñado para absorber idiomas desde el nacimiento, y cada mes que pasa es una oportunidad que se aprovecha o se pierde. Lo que cambia según la edad no es si empezar, sino <strong>cómo empezar</strong>. En esta guía te explicamos qué tipo de exposición al inglés es apropiada para cada etapa, desde los primeros meses hasta el inicio de la educación formal.
            </p>

            {/* Section 1 */}
            <section id="capacidad" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                La Increíble Capacidad Lingüística del Bebé
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Los bebés nacen con una capacidad lingüística que supera con creces la de cualquier adulto. La investigadora Patricia Kuhl, de la Universidad de Washington, ha demostrado que los recién nacidos pueden distinguir los <strong>800 sonidos</strong> que componen todos los idiomas del mundo. Sin embargo, esta capacidad es temporal: hacia los 10-12 meses, el cerebro comienza a "podar" las conexiones neuronales que no se utilizan.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Superpoderes lingüísticos del bebé
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Distingue sonidos de todos los idiomas al nacer</li>
                    <li>• Reconoce patrones rítmicos y melódicos del habla</li>
                    <li>• Detecta límites entre palabras antes de entender su significado</li>
                    <li>• Prefiere el habla dirigida a bebés (motherese) en cualquier idioma</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Lo que se pierde sin exposición
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• A los 12 meses, pierde la capacidad de distinguir sonidos no usados</li>
                    <li>• La discriminación fonológica se vuelve específica del idioma materno</li>
                    <li>• Sonidos como "th", "v/b" o "r/l" inglesas se hacen difíciles de distinguir</li>
                    <li>• Recuperar esta sensibilidad en la adolescencia requiere mucho más esfuerzo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> El estudio "Native Language Neural Commitment" de Kuhl demuestra que la exposición a un segundo idioma antes del primer año de vida mantiene activas las redes neuronales necesarias para procesar ese idioma. Los bebés expuestos al inglés conservan la capacidad de distinguir sonidos ingleses que los bebés monolingües pierden.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="0-12" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                0-12 Meses: Exposición Natural al Inglés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                En el primer año de vida, el objetivo no es que el bebé "aprenda" inglés en el sentido tradicional, sino que su cerebro mantenga abiertas las puertas a la percepción de los sonidos ingleses. La exposición debe ser <strong>natural, cálida y vinculada a momentos de conexión</strong> con el cuidador.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Canciones y nanas en inglés
                  </h3>
                  <p className="text-gray-700">Las nursery rhymes (canciones infantiles inglesas) son perfectas para esta etapa. "Twinkle Twinkle Little Star", "Row Your Boat" o "Head, Shoulders, Knees and Toes" tienen ritmos y melodías que el bebé puede procesar y disfrutar. Cantarlas mientras bañas, vistes o juegas con tu bebé crea asociaciones positivas con el inglés.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Habla dirigida en inglés
                  </h3>
                  <p className="text-gray-700">Si tú o alguien de tu entorno habla inglés, dirigirse al bebé en inglés durante momentos específicos del día (por ejemplo, durante el baño o la hora de comer) es enormemente beneficioso. El "motherese" o habla dirigida a bebés es especialmente efectivo porque exagera los sonidos y la entonación.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Cuentos ilustrados bilingües
                  </h3>
                  <p className="text-gray-700">Leer cuentos sencillos en inglés mientras señalas las ilustraciones conecta el lenguaje con el significado visual. No importa si tu pronunciación no es perfecta; lo relevante es la exposición al ritmo y los sonidos del idioma. Libros con texturas y solapas mantienen la atención del bebé durante más tiempo.</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> En esta etapa, la interacción humana es crucial. Los estudios muestran que los bebés aprenden idiomas significativamente mejor de personas reales que de pantallas o grabaciones. La televisión o las tablets no sustituyen la interacción con un cuidador que hable inglés.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="1-2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                1-2 Años: Juego en Inglés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Entre el primer y el segundo año de vida, el bebé experimenta una explosión del vocabulario y comienza a comprender frases simples. Es el momento perfecto para introducir el inglés a través del <strong>juego activo y sensorial</strong>. A esta edad, los niños aprenden haciendo, tocando y experimentando.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Actividades recomendadas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Juegos de vocabulario con objetos reales (frutas, animales, colores)</li>
                    <li>• Canciones con movimiento y gestos (action songs)</li>
                    <li>• Pintura de dedos nombrando colores en inglés</li>
                    <li>• Plastilina y juego sensorial con vocabulario básico</li>
                    <li>• Cuentos interactivos con repetición y anticipación</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Lo que puedes esperar
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• El niño comprende instrucciones simples en inglés</li>
                    <li>• Puede señalar objetos cuando se nombran en inglés</li>
                    <li>• Intenta repetir palabras sueltas o finales de canciones</li>
                    <li>• Muestra preferencia por ciertas canciones o cuentos en inglés</li>
                    <li>• Mezcla español e inglés (completamente normal)</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En esta etapa, la <a href="/blog/ingles-jugando-funciona/" className="text-purple-600 hover:underline font-medium">metodología de aprender inglés jugando</a> es fundamental. Los niños de 1-2 años no pueden sentarse y "estudiar", pero pueden absorber cantidades extraordinarias de vocabulario y estructuras a través del juego multisensorial. Por eso en nuestras <a href="/cursos-ingles/infantil/" className="text-purple-600 hover:underline font-medium">clases de inglés infantil</a> cada sesión está diseñada como una experiencia de juego completa.
              </p>
            </section>

            {/* Section 4 */}
            <section id="2-3" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                2-3 Años: El Momento Ideal para Clases Estructuradas
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                A los 2-3 años, la mayoría de los niños están preparados para beneficiarse de <strong>clases de inglés grupales y estructuradas</strong>. En esta etapa el niño ya tiene suficiente autonomía social, capacidad de atención y desarrollo motor para participar activamente en actividades dirigidas. Es el momento donde la inversión en clases formales empieza a dar los mejores retornos.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Características de una buena clase para 2-3 años
                  </h3>
                  <p className="text-gray-700">Grupos reducidos (máximo 8 niños), profesor titulado, sesiones de 45-60 minutos con variedad de actividades (música, movimiento, manualidades, cuentos), inmersión total en inglés, espacio seguro y estimulante. La <a href="/blog/great-little-people-metodologia/" className="text-purple-600 hover:underline">metodología Great Little People</a> cumple todos estos criterios.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Frecuencia y duración recomendada
                  </h3>
                  <p className="text-gray-700">Lo ideal son 2-3 sesiones semanales de 45-60 minutos cada una, complementadas con exposición diaria en casa (canciones, cuentos, dibujos animados). La consistencia es más importante que la intensidad: mejor tres sesiones cortas a la semana que una larga los sábados.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Resultados esperados tras un curso
                  </h3>
                  <p className="text-gray-700">Después de un año de clases regulares a esta edad, la mayoría de los niños comprenden instrucciones en inglés, conocen más de 200 palabras, cantan canciones completas, y empiezan a producir frases cortas de 2-3 palabras en inglés. Algunos niños muestran avances más rápidos que otros, lo cual es completamente normal.</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo profesional:</strong> A los 2-3 años, el factor emocional es determinante. Tu hijo debe asociar el inglés con diversión, no con obligación. Si alguna sesión no va bien, no te preocupes: los niños necesitan un periodo de adaptación. En Impulse, nuestros profesores están especializados en gestionar la transición y crear un vínculo de confianza.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="senales" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Señales de que Tu Hijo Está Listo para el Inglés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Aunque la exposición al inglés es beneficiosa a cualquier edad, las clases estructuradas funcionan mejor cuando el niño muestra ciertas señales de madurez. Aquí te ayudamos a identificar si tu hijo está preparado:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Señales positivas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Muestra interés cuando escucha canciones o habla en otros idiomas</li>
                    <li>• Puede separarse del cuidador sin angustia prolongada</li>
                    <li>• Disfruta de actividades grupales con otros niños</li>
                    <li>• Sigue instrucciones simples en español</li>
                    <li>• Le gustan los cuentos, las canciones y el juego imaginativo</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Mejor esperar un poco si...
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Experimenta ansiedad de separación intensa</li>
                    <li>• Está en pleno proceso de adaptación a la guardería</li>
                    <li>• Ha tenido una experiencia negativa reciente con el inglés</li>
                    <li>• El pediatra ha identificado un retraso del lenguaje que requiere atención</li>
                    <li>• Muestra rechazo persistente a actividades grupales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Recuerda que cada niño tiene su propio ritmo de desarrollo. Si tu hijo de 2 años no está listo para clases grupales, eso no significa que debas renunciar al inglés. Puedes seguir con la exposición en casa mientras esperas el momento adecuado. Lo importante es <strong>no forzar ni crear asociaciones negativas</strong> con el idioma.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/infantil/" className="text-purple-600 hover:underline font-medium">Impulse English Academy</a> ofrecemos una clase de prueba gratuita para que tanto tú como tu hijo podáis comprobar si es el momento adecuado. Nuestros profesores altamente cualificados evalúan la disposición de cada niño y recomiendan el grupo más apropiado.
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
                  La respuesta a "¿a qué edad empezar?" es clara: <strong>la exposición al inglés puede comenzar desde los primeros meses de vida</strong>, adaptando el tipo de estímulo a cada etapa. Los 6 meses son ideales para comenzar con canciones y exposición natural, los 1-2 años para el juego en inglés, y los 2-3 años para clases estructuradas con profesores titulados.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Lo más importante es que la experiencia sea positiva y natural. En <a href="/cursos-ingles/infantil/" className="text-purple-600 hover:underline font-medium">nuestros programas de inglés infantil</a>, con la <a href="/blog/great-little-people-metodologia/" className="text-purple-600 hover:underline font-medium">metodología Great Little People</a>, cada sesión está diseñada para que tu hijo disfrute mientras su cerebro absorbe el inglés de forma natural. <a href="/contacto/" className="text-purple-600 hover:underline font-medium">Contáctanos</a> para una clase de prueba gratuita.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Tu bebé está listo para el inglés?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Descubre nuestros programas de inglés desde los 2 años con profesores altamente cualificados y metodología lúdica especializada.
              </p>
              <a
              href="/contacto/"
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
                <a href="/cursos-ingles/infantil/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Infantil
                  </h3>
                  <p className="text-gray-600 text-sm">Programas diseñados para los más pequeños desde los 2 años.</p>
                </a>
                <a href="/blog/ingles-jugando-funciona/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    ¿Inglés Jugando Funciona?
                  </h3>
                  <p className="text-gray-600 text-sm">Evidencia científica sobre el aprendizaje a través del juego.</p>
                </a>
                <a href="/blog/great-little-people-metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Great Little People
                  </h3>
                  <p className="text-gray-600 text-sm">La metodología de inglés para niños de 1 a 7 años.</p>
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