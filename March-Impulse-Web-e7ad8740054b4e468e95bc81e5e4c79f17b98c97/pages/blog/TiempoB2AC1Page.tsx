import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Cuánto Tiempo se Tarda en Pasar de B2 a C1?",
    description: "Pasar de B2 a C1 requiere 200-300 horas de estudio guiado. Conoce el plan de transición, duración según dedicación y estrategias para acelerar el proceso.",
    url: `${businessInfo.url}/blog/tiempo-b2-a-c1`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿Cuántas horas de estudio necesito para pasar de B2 a C1?",
      answer: "Según Cambridge Assessment, se necesitan entre 200 y 300 horas de estudio guiado para avanzar de B2 a C1. Si estudias 10 horas semanales, esto equivale a unos 5-7 meses de preparación. Con 15 horas semanales (estudio intensivo), puedes acortar el plazo a 3-5 meses. La clave está en la consistencia y calidad de las horas invertidas."
    }

  ,
    {
      question: "¿Puedo pasar de B2 a C1 por mi cuenta sin academia?",
      answer: "Es posible pero considerablemente más difícil. El salto de B2 a C1 implica dominar matices lingüísticos complejos que requieren retroalimentación profesional. Los candidatos autodidactas suelen necesitar un 40-50% más de tiempo y tienen menor tasa de aprobado en el examen. Una combinación de estudio autónomo con clases puntuales de preparación suele ser la fórmula más eficiente."
    },
    {
      question: "¿Qué nivel de B2 necesito para empezar a preparar el C1?",
      answer: "Idealmente, deberías haber obtenido una puntuación de Grade A o B en el B2 First (180+ en la escala Cambridge). Si aprobaste con Grade C (160-172), conviene consolidar tu B2 durante 2-3 meses antes de iniciar la preparación de C1, ya que las carencias acumuladas ralentizan significativamente el progreso posterior."
    },
    {
      question: "¿Es más difícil pasar de B2 a C1 que de B1 a B2?",
      answer: "Sí, significativamente. El Marco Común Europeo establece que cada nivel requiere más horas que el anterior. Mientras de B1 a B2 se necesitan unas 150-200 horas, de B2 a C1 son 200-300 horas. Además, la diferencia cualitativa es mayor: el C1 exige no solo más vocabulario, sino un uso sofisticado y flexible del idioma."
    }
  ];

export default function TiempoB2AC1Page() {
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
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Preparación Cambridge C1 Advanced en Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'De B2 a C1: Tiempo Necesario' }
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
                  ¿Cuánto Tiempo se Tarda en Pasar de B2 a C1?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Pasar del nivel B2 al C1 en inglés requiere entre 200 y 300 horas de estudio guiado y práctica intensiva. El progreso depende de la frecuencia, método de aprendizaje y motivación.
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
                <li><a href="#salto-b2-c1" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ El salto de B2 a C1 explicado</a></li>
                <li><a href="#horas-estudio" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Horas de estudio necesarias por modalidad</a></li>
                <li><a href="#plan-transicion" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plan de transición mes a mes</a></li>
                <li><a href="#acelerar-progreso" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Factores que aceleran el progreso</a></li>
                <li><a href="#errores" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Errores comunes en la transición</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              El salto de B2 a C1 es considerado uno de los más exigentes en el aprendizaje de inglés. Mientras que el <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> certifica que puedes comunicarte con fluidez en la mayoría de situaciones, el <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">C1 Advanced</a> exige un dominio sofisticado y flexible del idioma. ¿Cuánto tiempo necesitas realmente? Depende de tu punto de partida, dedicación y método, pero la referencia estándar es de <strong>200-300 horas de estudio guiado</strong>.
            </p>

            {/* Section 1 */}
            <section id="salto-b2-c1" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Salto de B2 a C1: ¿Por Qué Es Tan Exigente?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La transición de B2 a C1 no es simplemente aprender más vocabulario o gramática. Implica un cambio cualitativo en cómo usas el idioma: mayor precisión, registro flexible, comprensión implícita y capacidad de argumentación compleja.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Lo que ya tienes en B2
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Fluidez conversacional en temas generales</li>
                    <li>• Gramática intermedia-alta consolidada</li>
                    <li>• Vocabulario de 4.000-5.000 palabras activas</li>
                    <li>• Capacidad de argumentar y expresar opiniones</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Lo que necesitas para C1
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Uso flexible y matizado del idioma</li>
                    <li>• Vocabulario de 6.500-8.000 palabras activas</li>
                    <li>• Comprensión de textos complejos y abstractos</li>
                    <li>• Expresión fluida sin búsqueda evidente de palabras</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Según el Marco Común Europeo, el C1 implica que puedes usar el idioma de forma eficaz y flexible en contextos sociales, académicos y profesionales, produciendo textos bien estructurados y detallados sobre temas complejos.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="horas-estudio" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Horas de Estudio Necesarias por Modalidad
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El tiempo necesario varía según la intensidad y el tipo de preparación. A continuación, una estimación realista basada en datos de Cambridge Assessment y la experiencia de nuestra academia:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Modalidad</th>
                      <th className="text-left p-4 font-semibold">Horas/Semana</th>
                      <th className="text-left p-4 font-semibold">Duración Total</th>
                      <th className="text-left p-4 font-semibold">Perfil ideal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Intensivo</td>
                      <td className="p-4 text-gray-700">15-20 h</td>
                      <td className="p-4 text-gray-700">3-4 meses</td>
                      <td className="p-4 text-gray-700 text-sm">Dedicación exclusiva, B2 alto</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Semi-intensivo</td>
                      <td className="p-4 text-gray-700">10-12 h</td>
                      <td className="p-4 text-gray-700">5-7 meses</td>
                      <td className="p-4 text-gray-700 text-sm">Compatibilizando con trabajo</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Regular</td>
                      <td className="p-4 text-gray-700">6-8 h</td>
                      <td className="p-4 text-gray-700">8-12 meses</td>
                      <td className="p-4 text-gray-700 text-sm">Ritmo sostenible a largo plazo</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Ligero</td>
                      <td className="p-4 text-gray-700">3-4 h</td>
                      <td className="p-4 text-gray-700">12-18 meses</td>
                      <td className="p-4 text-gray-700 text-sm">Agenda muy limitada</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Estas estimaciones incluyen tanto horas de clase como estudio autónomo. El tiempo total depende también de la calidad de la exposición al idioma: inmersión activa (debates, redacciones, escucha crítica) es mucho más efectiva que exposición pasiva.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> Los alumnos que combinan <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">clases presenciales</a> con estudio autónomo estructurado reducen el tiempo de preparación en un 25-30% respecto a quienes estudian exclusivamente por su cuenta.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="plan-transicion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan de Transición Mes a Mes
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Este plan asume una dedicación semi-intensiva de 10-12 horas semanales y un punto de partida de B2 consolidado:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Meses 1-2: Diagnóstico y ampliación
                  </h3>
                  <p className="text-gray-700">Realiza un examen de prueba C1 para identificar debilidades. Enfócate en ampliar vocabulario avanzado (collocations, phrasal verbs complejos, expresiones idiomáticas). Comienza a leer textos de nivel C1: artículos de The Guardian, The Economist o ensayos académicos.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Meses 3-4: Profundización gramatical
                  </h3>
                  <p className="text-gray-700">Trabaja estructuras avanzadas: inversión, cleft sentences, subjuntivo, mixed conditionals, participial clauses. Practica Writing con corrección profesional semanal: essays, proposals, reports y reviews del formato C1 Advanced.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Meses 5-6: Práctica de examen
                  </h3>
                  <p className="text-gray-700">Simulacros completos cronometrados cada semana. Perfecciona técnicas de Use of English (key word transformations, word formation). Practica Speaking con compañeros o profesor especializado en formato CAE.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Mes 7: Pulido final
                  </h3>
                  <p className="text-gray-700">Revisa errores recurrentes de simulacros anteriores. Enfócate en gestión de tiempo en cada parte. Realiza 2-3 exámenes completos en condiciones reales. Descansa los 2-3 días previos al examen oficial.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="acelerar-progreso" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Factores que Aceleran el Progreso
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todas las horas de estudio rinden igual. Estos factores marcan la diferencia entre tardar 5 meses o más de un año:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Inmersión activa diaria
                  </h3>
                  <p className="text-gray-700 text-sm">Podcasts en inglés, series sin subtítulos, lectura de prensa anglófona, pensar en inglés. Dedicar 30-60 minutos diarios a inmersión natural acelera enormemente la adquisición de nivel C1.</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Feedback profesional regular
                  </h3>
                  <p className="text-gray-700 text-sm">Un profesor especializado identifica errores fosilizados que llevas arrastrando desde niveles anteriores. La corrección detallada de Writing y Speaking es esencial para alcanzar la precisión que exige el C1.</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Entorno anglófono laboral
                  </h3>
                  <p className="text-gray-700 text-sm">Los profesionales que usan inglés en su trabajo avanzan hasta un 40% más rápido. Reuniones, emails y presentaciones en inglés proporcionan práctica contextualizada de alto valor.</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Preparación específica del examen
                  </h3>
                  <p className="text-gray-700 text-sm">Conocer a fondo el formato del <a href="/blog/examen-cae-cambridge/" className="text-emerald-600 hover:underline">examen CAE</a> y practicar con materiales oficiales puede significar la diferencia entre aprobar y suspender, independientemente de tu nivel real de inglés.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="errores" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Errores Comunes en la Transición de B2 a C1
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Muchos estudiantes cometen errores que alargan innecesariamente el proceso. Evitar estos fallos puede ahorrarte meses de preparación:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Empezar sin consolidar el B2
                  </h3>
                  <p className="text-gray-700">Si tu B2 no está sólido, intentar el C1 generará frustración. Asegúrate de tener un B2 alto (Grade A o B en el First) antes de iniciar la preparación de C1. De lo contrario, invertirás meses en rellenar huecos de B2 mientras intentas avanzar.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Estudiar solo gramática y vocabulario
                  </h3>
                  <p className="text-gray-700">El C1 no es una versión más difícil del B2. Requiere habilidades diferentes: inferencia, paráfrasis sofisticada, registro flexible. Practica todas las destrezas de forma integrada, no aislada.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Ignorar el Use of English
                  </h3>
                  <p className="text-gray-700">Esta parte del examen es donde más candidatos pierden puntos. Las key word transformations y el word formation requieren práctica específica y sistemática que muchos subestiman.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo:</strong> Consulta la <a href="/blog/escala-cambridge/" className="text-emerald-600 hover:underline">escala Cambridge</a> para entender exactamente dónde te sitúas y qué distancia real hay entre tu nivel actual y el C1 que necesitas.
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
                  El tiempo necesario para pasar de B2 a C1 oscila entre <strong>3 y 18 meses</strong> dependiendo de tu dedicación, método de estudio y punto de partida. La referencia estándar de 200-300 horas es orientativa, pero lo más importante es la calidad de esas horas: inmersión activa, feedback profesional y práctica específica del examen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> diseñamos planes de transición personalizados B2→C1 con seguimiento mensual de progreso. Nuestros <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">métodos de enseñanza</a> están optimizados para maximizar tu rendimiento en el menor tiempo posible.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para dar el salto al C1?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Evaluamos tu nivel actual y diseñamos un plan de preparación personalizado para que consigas tu C1 Advanced en el menor tiempo posible.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Solicitar evaluación gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/c1-advanced/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    C1 Advanced: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge C1 Advanced.</p>
                </a>
                <a href="/examenes-cambridge/b2-first/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    B2 First: Tu punto de partida
                  </h3>
                  <p className="text-gray-600 text-sm">Consolida tu B2 antes de preparar el C1.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas adaptados a tu nivel y objetivos.</p>
                </a>
                <a href="/blog/escala-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Escala Cambridge: Todos los niveles
                  </h3>
                  <p className="text-gray-600 text-sm">Entiende la escala completa de certificaciones.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - C1 Advanced oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
