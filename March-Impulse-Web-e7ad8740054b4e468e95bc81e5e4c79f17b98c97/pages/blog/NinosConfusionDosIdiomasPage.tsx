import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Se Confunden los Niños con Dos Idiomas? Mitos y Realidad",
    description: "No, los niños no se confunden con dos idiomas. El bilingüismo mejora la cognición. Desmontamos los 5 mitos más comunes sobre niños bilingües.",
    url: `${businessInfo.url}/blog/ninos-confusion-dos-idiomas`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Es normal que mi hijo mezcle español e inglés en la misma frase?",
      answer: "Sí, es completamente normal y se llama code-switching o alternancia de códigos. Lejos de ser un signo de confusión, es una habilidad lingüística sofisticada que demuestra que el niño domina ambos idiomas lo suficiente como para combinarlos estratégicamente. Los bilingües adultos también lo hacen. Suele disminuir a medida que el vocabulario del niño crece en ambos idiomas."
    }

  ,
    {
      question: "¿Debería hablar solo un idioma con mi hijo para no confundirlo?",
      answer: "No es necesario. La estrategia 'un padre, un idioma' (OPOL) es popular pero no es la única que funciona. Los niños son perfectamente capaces de aprender dos idiomas del mismo hablante si la exposición es consistente y abundante. Lo importante es la calidad y cantidad de input en cada idioma, no quién lo habla. Muchas familias bilingües usan ambos idiomas de forma natural."
    },
    {
      question: "¿El bilingüismo puede causar problemas de aprendizaje?",
      answer: "No. No existe evidencia científica de que el bilingüismo cause problemas de aprendizaje. De hecho, los estudios muestran lo contrario: los niños bilingües suelen tener mejores funciones ejecutivas (atención, memoria de trabajo, flexibilidad cognitiva). Si un niño bilingüe tiene dificultades de aprendizaje, la causa es independiente del bilingüismo y se manifestaría igualmente en un entorno monolingüe."
    },
    {
      question: "¿Mi hijo habla menos que otros niños de su edad porque es bilingüe?",
      answer: "Los niños bilingües alcanzan los hitos del habla al mismo ritmo que los monolingües. Su vocabulario en cada idioma por separado puede ser menor, pero su vocabulario total (sumando ambos idiomas) suele ser equivalente o superior. Si tu hijo muestra un retraso significativo del habla, consulta con un logopeda bilingüe, pero no asumas que el bilingüismo es la causa."
    }
  ];

export default function NinosConfusionDosIdiomasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const myths = [
    {
      myth: "Los niños bilingües se confunden entre los dos idiomas",
      reality: "Los niños distinguen perfectamente los dos idiomas desde los primeros meses. Estudios con bebés de 4-5 meses demuestran que ya diferencian entre idiomas por sus patrones rítmicos. Lo que parece 'confusión' es en realidad code-switching, una estrategia comunicativa sofisticada."
    },
    {
      myth: "Aprender dos idiomas retrasa el desarrollo del habla",
      reality: "Los hitos del habla (primeras palabras, primeras frases) se alcanzan al mismo tiempo en niños monolingües y bilingües. El vocabulario en cada idioma puede ser algo menor por separado, pero el vocabulario conceptual total es equivalente."
    },
    {
      myth: "Es mejor que el niño domine un idioma antes de aprender otro",
      reality: "El cerebro infantil está diseñado para procesar múltiples idiomas simultáneamente. Esperar a que 'domine' el español para introducir el inglés desperdicia los años de máxima plasticidad cerebral (0-6 años). La introducción simultánea o temprana produce mejores resultados."
    },
    {
      myth: "Los niños bilingües tienen problemas escolares",
      reality: "Los estudios longitudinales demuestran que los niños bilingües obtienen mejores resultados académicos a medio y largo plazo. Tienen mejores puntuaciones en lectura, matemáticas y resolución de problemas. Las ventajas cognitivas del bilingüismo se transfieren a todas las áreas académicas."
    },
    {
      myth: "Solo funciona si ambos padres hablan ambos idiomas",
      reality: "El bilingüismo infantil puede lograrse con diversas estrategias: un padre bilingüe, clases con profesores titulados, inmersión parcial, exposición a medios en inglés. Lo esencial es la cantidad y calidad de la exposición, no que ambos padres sean bilingües."
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
              <img src="/images/academy/infantil-classes.jpg" alt="Niños bilingües aprendiendo inglés sin confusión en clase" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Confusión Dos Idiomas' }
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
                  ¿Se Confunden los Niños con Dos Idiomas? Mitos y Realidad
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Desmontamos los 5 mitos más extendidos sobre el bilingüismo infantil con evidencia científica actual.
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
                <li><a href="#mito-confusion" className="text-purple-600 hover:text-purple-700 transition-colors">→ El mito de la confusión</a></li>
                <li><a href="#ciencia" className="text-purple-600 hover:text-purple-700 transition-colors">→ Qué dice la ciencia</a></li>
                <li><a href="#code-switching" className="text-purple-600 hover:text-purple-700 transition-colors">→ Code-switching es normal</a></li>
                <li><a href="#5-mitos" className="text-purple-600 hover:text-purple-700 transition-colors">→ 5 mitos desmontados</a></li>
                <li><a href="#apoyar" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cómo apoyar el bilingüismo en casa</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "¿No se va a liar con dos idiomas?" Es probablemente la preocupación número uno de los padres que consideran criar a sus hijos en un entorno bilingüe. Es comprensible: cuando ves a tu hijo mezclar español e inglés en la misma frase, parece que algo no funciona bien. Pero la ciencia es rotunda: <strong>los niños no se confunden con dos idiomas</strong>. Lo que parece confusión es en realidad el signo de un cerebro extraordinariamente competente que gestiona dos sistemas lingüísticos simultáneamente.
            </p>

            {/* Section 1 */}
            <section id="mito-confusion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Mito de la Confusión Lingüística
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La idea de que los niños se confunden con dos idiomas se originó en los años 1950-60, cuando estudios metodológicamente deficientes (que no controlaban factores socioeconómicos) sugirieron que el bilingüismo era perjudicial. Desde entonces, <strong>décadas de investigación rigurosa han demostrado exactamente lo contrario</strong>.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Los bebés son capaces de distinguir entre dos idiomas desde antes de nacer. Estudios con neonatos demuestran que los recién nacidos de madres bilingües ya muestran patrones cerebrales diferentes cuando escuchan cada uno de los idiomas a los que fueron expuestos en el útero. A los 4-5 meses, los bebés distinguen idiomas incluso viéndolos hablar sin sonido, solo por los movimientos faciales.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Evidencia clave:</strong> Un estudio de 2017 publicado en <em>Nature Communications</em> demostró mediante resonancia magnética funcional que los bebés bilingües de 4 meses ya activan áreas cerebrales diferentes para cada idioma. El cerebro infantil no "confunde" los idiomas; los procesa en redes neuronales parcialmente diferenciadas desde el principio.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="ciencia" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Qué Dice la Ciencia sobre el Bilingüismo Infantil
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La investigación neurocientífica moderna ha transformado completamente nuestra comprensión del bilingüismo infantil. Lejos de ser un obstáculo, crecer con dos idiomas produce <strong>ventajas cognitivas medibles</strong> que se extienden mucho más allá del lenguaje.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Ventajas demostradas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mayor control atencional y capacidad de filtrar distracciones</li>
                    <li>• Mejor memoria de trabajo y flexibilidad mental</li>
                    <li>• Superior capacidad de resolución de conflictos cognitivos</li>
                    <li>• Mayor conciencia metalingüística (entender el lenguaje como sistema)</li>
                    <li>• Facilidad para aprender un tercer o cuarto idioma</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Lo que dicen los estudios
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Bialystok (2001-2020): ventaja bilingüe en funciones ejecutivas</li>
                    <li>• Kuhl (2010): la exposición bilingüe mantiene la percepción fonológica universal</li>
                    <li>• Kovács & Mehler (2009): bebés bilingües de 7 meses superan a monolingües en tareas cognitivas</li>
                    <li>• Costa (2008): bilingües procesan información más rápidamente</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La investigadora Ellen Bialystok, de la Universidad de York, ha dedicado más de 30 años a estudiar los efectos del bilingüismo en el cerebro. Su trabajo demuestra consistentemente que <strong>gestionar dos idiomas entrena las funciones ejecutivas del cerebro</strong> de forma similar a como el ejercicio físico entrena los músculos. Este "entrenamiento cerebral" beneficia a los niños bilingües en todas las áreas de su vida, no solo en el lenguaje.
              </p>
            </section>

            {/* Section 3 */}
            <section id="code-switching" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Code-Switching: Lo Que Parece Confusión No Lo Es
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cuando un niño dice "Mamá, quiero more juice" o "Look, un perro grande!", no está confundido. Está haciendo <strong>code-switching</strong> (alternancia de códigos), una habilidad lingüística sofisticada que demuestra competencia en ambos idiomas. Los lingüistas han identificado reglas gramaticales complejas que los bilingües siguen inconscientemente al mezclar idiomas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    ¿Por qué hacen code-switching?
                  </h3>
                  <p className="text-gray-700">Los niños alternan entre idiomas por razones estratégicas: usan la palabra que conocen primero, se adaptan al idioma de su interlocutor, expresan conceptos que asocian con un idioma específico, o rellenan temporalmente huecos de vocabulario. Es un recurso inteligente, no una limitación.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    ¿Cuándo desaparece?
                  </h3>
                  <p className="text-gray-700">A medida que el vocabulario crece en ambos idiomas, la frecuencia del code-switching disminuye naturalmente. Sin embargo, nunca desaparece del todo, y no debería: los bilingües adultos también alternan entre idiomas cuando hablan con otros bilingües. Es un rasgo natural del bilingüismo, no un defecto.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    ¿Cómo responder como padre?
                  </h3>
                  <p className="text-gray-700">No corrijas ni muestres preocupación cuando tu hijo mezcle idiomas. Simplemente reformula la frase en un solo idioma de forma natural: si dice "Quiero more milk", puedes responder "¿Quieres más leche? Aquí tienes". Así le ofreces el modelo correcto sin generar ansiedad. La exposición continuada hará el resto.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - 5 Myths */}
            <section id="5-mitos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                5 Mitos sobre el Bilingüismo Infantil Desmontados
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                A pesar de la evidencia científica abrumadora a favor del bilingüismo temprano, ciertos mitos persisten en la cultura popular. Veamos los cinco más comunes y la realidad que hay detrás de cada uno:
              </p>

              <div className="space-y-6 mb-8">
                {myths.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">MITO {index + 1}</span>
                      <h3 className="font-bold text-gray-900">{item.myth}</h3>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">REALIDAD</span>
                      <p className="text-gray-700 text-sm">{item.reality}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Para saber más:</strong> Si te interesa cómo funciona la adquisición temprana de idiomas en la práctica, descubre la <a href="/blog/edad-empezar-ingles-bebes/" className="text-purple-600 hover:underline">edad ideal para empezar con el inglés</a> y cómo la <a href="/blog/great-little-people-metodologia/" className="text-purple-600 hover:underline">metodología Great Little People</a> aplica estos principios científicos en el aula.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="apoyar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Apoyar el Bilingüismo en Casa
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Una vez que sabes que el bilingüismo es beneficioso y que tu hijo no se va a confundir, la pregunta es: ¿cómo puedes crear el mejor entorno posible para que crezca bilingüe? Estas son las estrategias más efectivas respaldadas por la investigación:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    En el día a día
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Establece momentos del día en inglés (bath time, meal time)</li>
                    <li>• Pon dibujos animados y canciones en inglés de forma regular</li>
                    <li>• Lee cuentos en inglés antes de dormir 2-3 noches a la semana</li>
                    <li>• Usa aplicaciones de vocabulario en inglés adaptadas a su edad</li>
                    <li>• Celebra y refuerza cada palabra o frase que diga en inglés</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    A nivel social
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Busca playdates con niños anglófonos o bilingües</li>
                    <li>• Apúntale a actividades extraescolares en inglés (deporte, arte)</li>
                    <li>• Viaja a países anglófonos cuando sea posible</li>
                    <li>• Matricúlale en <a href="/cursos-ingles/infantil/" className="text-purple-600 hover:underline">clases de inglés con profesores titulados</a></li>
                    <li>• Crea una comunidad de familias con interés en el bilingüismo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  La clave es la <strong>exposición consistente y positiva</strong>. Los expertos recomiendan que un niño reciba al menos el 30% de su input lingüístico total en el segundo idioma para desarrollar un bilingüismo funcional. Esto puede lograrse combinando clases regulares, exposición en casa y actividades en inglés.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/infantil/" className="text-purple-600 hover:underline font-medium">Impulse English Academy</a>, nuestras clases de inglés infantil proporcionan la base de inmersión que tu hijo necesita, y te orientamos sobre cómo complementar en casa para maximizar los resultados.
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
                  La ciencia es clara: <strong>los niños no se confunden con dos idiomas</strong>. El bilingüismo temprano es una ventaja cognitiva, social y académica que beneficiará a tu hijo durante toda su vida. Lo que a veces parece confusión es en realidad code-switching, una habilidad lingüística sofisticada que demuestra competencia en ambos idiomas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si estás considerando iniciar a tu hijo en el inglés, no dejes que los mitos te frenen. En <a href="/cursos-ingles/infantil/" className="text-purple-600 hover:underline font-medium">Impulse English Academy</a> contamos con profesores altamente cualificados especializados en primera infancia y la <a href="/blog/great-little-people-metodologia/" className="text-purple-600 hover:underline font-medium">metodología Great Little People</a> para que tu hijo crezca bilingüe de forma natural. <a href="/contacto/" className="text-purple-600 hover:underline font-medium">Solicita información</a> y resuelve todas tus dudas.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Dale a tu hijo la ventaja del bilingüismo</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Nuestros programas de inglés infantil están diseñados para que los niños aprendan de forma natural, sin presión y con resultados demostrados.
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
                  <p className="text-gray-600 text-sm">Programas de inmersión para niños desde los 2 años.</p>
                </a>
                <a href="/blog/edad-empezar-ingles-bebes/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    ¿A Qué Edad Empezar con el Inglés?
                  </h3>
                  <p className="text-gray-600 text-sm">Guía por etapas desde los 6 meses hasta los 6 años.</p>
                </a>
                <a href="/blog/great-little-people-metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Great Little People
                  </h3>
                  <p className="text-gray-600 text-sm">Metodología de inglés para los más pequeños de la casa.</p>
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