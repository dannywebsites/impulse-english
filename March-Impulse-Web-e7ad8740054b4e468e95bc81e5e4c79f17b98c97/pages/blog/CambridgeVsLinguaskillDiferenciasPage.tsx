import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Cambridge vs Linguaskill: Diferencias, Precio y ¿Cuál Elegir?",
    description: "Compara Cambridge y Linguaskill: formato, precio, validez, dificultad y reconocimiento. Guía para elegir el examen que más te conviene.",
    url: `${businessInfo.url}/blog/cambridge-vs-linguaskill-diferencias`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Linguaskill es más fácil que Cambridge?",
      answer: "No es más fácil, pero sí más flexible. Linguaskill es un test adaptativo que ajusta la dificultad a tu nivel, lo que puede sentirse más natural. Sin embargo, el resultado refleja tu nivel real independientemente del formato. La dificultad percibida depende más de tu preparación que del examen en sí."
    }

  ,
    {
      question: "¿Las universidades aceptan Linguaskill igual que Cambridge?",
      answer: "Sí, la gran mayoría de universidades españolas aceptan ambas certificaciones para acreditar el nivel de inglés. Ambos son emitidos por Cambridge Assessment English. Consulta siempre la normativa específica de tu universidad, pero en general, Linguaskill tiene la misma validez académica que los exámenes Cambridge tradicionales."
    },
    {
      question: "¿Puedo presentarme a Linguaskill sin preparación?",
      answer: "Técnicamente sí, ya que Linguaskill no requiere preparación específica del formato al ser adaptativo. Sin embargo, familiarizarte con la plataforma y los tipos de preguntas mejora tu rendimiento. Cambridge ofrece tests de práctica gratuitos que recomendamos completar antes del examen real."
    },
    {
      question: "¿Caduca Linguaskill? ¿Y el certificado Cambridge?",
      answer: "El informe de Linguaskill no tiene fecha de caducidad oficial emitida por Cambridge, aunque algunas instituciones pueden solicitar un informe reciente (últimos 2 años). Los certificados Cambridge (PET, FCE, CAE, CPE) no caducan nunca y son válidos de forma permanente."
    },
    {
      question: "¿Puedo hacer Linguaskill desde casa?",
      answer: "No, Linguaskill debe realizarse en un centro autorizado bajo supervisión. Aunque es un examen por ordenador, se necesita un entorno controlado y vigilado para garantizar la integridad del resultado. Los centros autorizados ofrecen múltiples fechas y horarios flexibles."
    }
  ];

export default function CambridgeVsLinguaskillDiferenciasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const comparisonData = [
    { feature: "Formato", cambridge: "Examen fijo por nivel (B1, B2, C1, C2)", linguaskill: "Test adaptativo multinivel" },
    { feature: "Duración", cambridge: "2-4 horas según nivel", linguaskill: "60-85 minutos por módulo" },
    { feature: "Resultado", cambridge: "Pass/Fail + puntuación", linguaskill: "Puntuación MCER (A1-C1+)" },
    { feature: "Tiempo resultados", cambridge: "2-6 semanas", linguaskill: "48 horas" },
    { feature: "Precio", cambridge: "115€-220€ según nivel", linguaskill: "70€-90€ por módulo" },
    { feature: "Validez", cambridge: "No caduca nunca", linguaskill: "Sin caducidad oficial" },
    { feature: "Fechas", cambridge: "Programadas (mensual/bimensual)", linguaskill: "Flexibles (semanal)" },
    { feature: "Modalidad", cambridge: "Papel o digital", linguaskill: "Solo digital" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/classroom-facilities-main-classroom.jpg" alt="Comparativa Cambridge vs Linguaskill exámenes de inglés" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Cambridge vs Linguaskill' }
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
                  Cambridge vs Linguaskill: Diferencias, Precio y ¿Cuál Elegir?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  La diferencia entre Cambridge y Linguaskill radica en formato y flexibilidad: Linguaskill es adaptativo y modular con resultados rápidos, Cambridge certifica niveles específicos en fechas programadas.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#tabla-comparativa" className="text-blue-600 hover:text-blue-700 transition-colors">→ Tabla Comparativa Completa</a></li>
                <li><a href="#formato" className="text-blue-600 hover:text-blue-700 transition-colors">→ Formato y Estructura</a></li>
                <li><a href="#precio" className="text-blue-600 hover:text-blue-700 transition-colors">→ Precio y Disponibilidad</a></li>
                <li><a href="#reconocimiento" className="text-blue-600 hover:text-blue-700 transition-colors">→ Reconocimiento y Validez</a></li>
                <li><a href="#cual-elegir" className="text-blue-600 hover:text-blue-700 transition-colors">→ ¿Cuál Elegir Según tu Objetivo?</a></li>
                <li><a href="#faq" className="text-blue-600 hover:text-blue-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Cambridge y Linguaskill son dos productos del mismo organismo: <strong>Cambridge Assessment English</strong>. Sin embargo, están diseñados para propósitos distintos y con filosofías diferentes. Entender sus diferencias es fundamental para elegir el examen que mejor se adapta a tus necesidades, ya sea para la universidad, el trabajo o el desarrollo personal. En esta guía comparamos ambas opciones en detalle.
            </p>

            {/* Section 1 - Comparison Table */}
            <section id="tabla-comparativa" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tabla Comparativa Completa: Cambridge vs Linguaskill
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                      <th className="text-left p-4 font-semibold">Característica</th>
                      <th className="text-left p-4 font-semibold">Cambridge (PET/FCE/CAE)</th>
                      <th className="text-left p-4 font-semibold">Linguaskill</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.feature}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.cambridge}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.linguaskill}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>En resumen:</strong> Cambridge es ideal si buscas un certificado permanente y reconocido mundialmente. Linguaskill es mejor si necesitas resultados rápidos y flexibilidad de fechas.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="formato" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Formato y Estructura: Dos Filosofías Diferentes
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La diferencia fundamental está en cómo cada examen evalúa tu nivel de inglés:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Cambridge: Examen por Nivel
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">Te inscribes a un nivel específico (B1, B2, C1 o C2) y el examen evalúa si alcanzas ese nivel concreto.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 4 partes obligatorias: Reading, Writing, Listening, Speaking</li>
                    <li>• Duración total: 2-4 horas según nivel</li>
                    <li>• Resultado: Pass, Pass with Merit, Pass with Distinction o Fail</li>
                    <li>• Si tu nivel está entre dos exámenes, puedes obtener certificación del nivel inferior</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Linguaskill: Test Adaptativo
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">El examen se adapta automáticamente a tu nivel. Las preguntas se vuelven más fáciles o difíciles según tus respuestas.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Módulos independientes: Reading & Listening, Writing, Speaking</li>
                    <li>• Puedes hacer solo los módulos que necesites</li>
                    <li>• Duración: 60-85 minutos por módulo</li>
                    <li>• Resultado: puntuación numérica equivalente al MCER (A1-C1+)</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El formato adaptativo de <a href="/linguaskill/" className="text-blue-600 hover:underline">Linguaskill</a> tiene la ventaja de que no necesitas elegir nivel previamente. El propio examen determina tu nivel. Esto elimina el riesgo de inscribirte en un examen Cambridge de nivel inadecuado.
              </p>
            </section>

            {/* Section 3 */}
            <section id="precio" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Precio y Disponibilidad
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El coste es uno de los factores decisivos para muchos candidatos. Aquí comparamos los precios orientativos en España:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Precios Cambridge
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• B1 Preliminary: 115€ - 140€</li>
                    <li>• B2 First: 190€ - 215€</li>
                    <li>• C1 Advanced: 200€ - 225€</li>
                    <li>• C2 Proficiency: 210€ - 230€</li>
                    <li>• Inscripción tardía: +30-55€</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Precios Linguaskill
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Reading & Listening: 70€ - 90€</li>
                    <li>• Writing: 70€ - 90€</li>
                    <li>• Speaking: 70€ - 90€</li>
                    <li>• Paquete completo: 150€ - 200€</li>
                    <li>• Flexibilidad de fechas incluida</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Linguaskill resulta más económico si solo necesitas acreditar comprensión (Reading & Listening), ya que puedes hacer un solo módulo. Para la acreditación completa de las 4 destrezas, los precios son comparables, con Cambridge ligeramente más ventajoso en niveles B1-B2.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Sobre fechas:</strong> Linguaskill ofrece sesiones semanales en muchos centros, mientras que Cambridge tiene convocatorias mensuales o bimensuales. Si necesitas el certificado con urgencia, Linguaskill es la opción clara.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="reconocimiento" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Reconocimiento y Validez
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Ambos exámenes son emitidos por Cambridge Assessment English, lo que les otorga un alto nivel de reconocimiento. Sin embargo, hay diferencias en cómo son percibidos:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    En universidades españolas
                  </h3>
                  <p className="text-gray-700">Ambos son ampliamente aceptados. Linguaskill ha ganado mucho terreno en los últimos años y actualmente es aceptado en la práctica totalidad de universidades españolas para acreditación de nivel B1 y B2.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    En el mercado laboral
                  </h3>
                  <p className="text-gray-700">Cambridge tiene mayor reconocimiento internacional y de marca. Para CVs y procesos de selección, un "B2 First Certificate" es más reconocible que un informe Linguaskill. Sin embargo, ambos acreditan el mismo nivel y las empresas los valoran igual.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    En oposiciones
                  </h3>
                  <p className="text-gray-700">Para <a href="/academias-ingles-madrid/certificaciones/" className="text-blue-600 hover:underline">oposiciones en España</a>, ambos son generalmente aceptados, pero conviene verificar las bases específicas de cada convocatoria, ya que algunas mencionan certificaciones concretas.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> El certificado Cambridge tradicional no caduca nunca. Linguaskill tampoco tiene caducidad oficial, aunque algunas instituciones pueden requerir un informe reciente. Para un certificado de por vida, Cambridge es la opción más segura.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="cual-elegir" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Cuál Elegir Según tu Objetivo?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La elección depende fundamentalmente de tu situación y objetivos. Aquí tienes nuestra recomendación para cada perfil:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-blue-800 mb-3">Elige Cambridge si...</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Quieres un certificado permanente reconocido mundialmente</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Tienes tiempo para prepararte (2-3 meses)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Buscas el máximo reconocimiento en tu CV</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Estás seguro de tu nivel objetivo</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Planeas usarlo para trabajar en el extranjero</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-blue-800 mb-3">Elige Linguaskill si...</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Necesitas resultados rápidos (48h)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Quieres flexibilidad de fechas</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Solo necesitas acreditar para la universidad</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> No estás seguro de tu nivel exacto</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Prefieres un examen más corto</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En <a href="/examenes-cambridge/" className="text-blue-600 hover:underline">Impulse English Academy</a> preparamos para ambos exámenes y te asesoramos sobre cuál es la mejor opción según tu perfil, plazo y objetivos específicos.
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
                        <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Tanto <a href="/examenes-cambridge/" className="text-blue-600 hover:underline font-medium">Cambridge</a> como <a href="/linguaskill/" className="text-blue-600 hover:underline font-medium">Linguaskill</a> son excelentes opciones para certificar tu nivel de inglés. Cambridge destaca por su reconocimiento universal y validez permanente; Linguaskill por su flexibilidad y rapidez. Ambos están respaldados por Cambridge Assessment English.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/academias-ingles-madrid/certificaciones/" className="text-blue-600 hover:underline font-medium">Impulse English Academy</a> somos centro preparador de ambos exámenes y podemos orientarte sobre la mejor opción para tu situación concreta. Contacta con nosotros para una evaluación personalizada.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/cambridge-vs-linguaskill-diferencias" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Exámenes Cambridge: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todos los niveles de Cambridge: B1, B2, C1 y C2 explicados.</p>
                </a>
                <a href="/linguaskill/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Linguaskill: Todo lo que Debes Saber
                  </h3>
                  <p className="text-gray-600 text-sm">El examen adaptativo de Cambridge con resultados en 48 horas.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/cambridge-vs-linguaskill-diferencias" />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Exámenes y tests oficiales
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}