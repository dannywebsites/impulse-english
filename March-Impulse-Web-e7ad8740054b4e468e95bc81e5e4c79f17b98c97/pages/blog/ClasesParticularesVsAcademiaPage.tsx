import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Clases Particulares vs Academia de Inglés: ¿Qué Elegir?",
    description: "Compara clases particulares y academia de inglés: precio (30-50€/h vs 64-79€/mes), método, resultados y flexibilidad. Descubre cuál se adapta a tu perfil.",
    url: `${businessInfo.url}/blog/clases-particulares-vs-academia`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Son más efectivas las clases particulares?",
      answer: "Depende del perfil. El particular es más efectivo para objetivos muy específicos o ritmos no estándar. La academia ofrece estructura probada, materiales y seguimiento de progreso."
    }

  ,
    {
      question: "¿Cuánto cuesta un profesor particular de inglés?",
      answer: "Un profesor particular en Madrid cobra entre 25-50€/hora según experiencia y titulación. Una academia cuesta 64-79€/mes por varias sesiones, resultando más económica."
    },
    {
      question: "¿Puedo preparar Cambridge con un particular?",
      answer: "Sí, pero necesitas un profesor especializado en Cambridge. Las academias oficiales tienen profesores certificados y materiales específicos de preparación."
    },
    {
      question: "¿Hay término medio entre particular y academia?",
      answer: "Sí: las clases particulares en academia (one-to-one). Combinas la personalización del particular con la estructura y recursos de la academia."
    }
  ];

export default function ClasesParticularesVsAcademiaPage() {
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
                src="/images/academy/classroom-facilities-main-classroom.jpg"
                alt="Clases particulares vs academia de inglés"
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
                  { label: 'Particular vs Academia' }
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
                  Clases Particulares vs Academia de Inglés: ¿Qué Elegir?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Comparativa completa entre profesor particular y academia: precio real, efectividad por objetivo y cómo elegir según tu perfil y situación.
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
                <li><a href="#tabla-comparativa" className="text-blue-600 hover:text-blue-700 transition-colors">→ Tabla comparativa: particular vs academia</a></li>
                <li><a href="#ventajas-particular" className="text-blue-600 hover:text-blue-700 transition-colors">→ Ventajas del profesor particular</a></li>
                <li><a href="#ventajas-academia" className="text-blue-600 hover:text-blue-700 transition-colors">→ Ventajas de la academia</a></li>
                <li><a href="#precio-comparativo" className="text-blue-600 hover:text-blue-700 transition-colors">→ Precio comparativo real</a></li>
                <li><a href="#recomendacion-perfil" className="text-blue-600 hover:text-blue-700 transition-colors">→ Recomendación por perfil de alumno</a></li>
                <li><a href="#faq" className="text-blue-600 hover:text-blue-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "¿Particular o academia?" es la pregunta que se hacen muchos adultos antes de empezar a estudiar inglés. Ambas opciones tienen mérito real, pero para perfiles y objetivos distintos. Esta guía te da los datos que necesitas para decidir con criterio, no con publicidad.
            </p>

            {/* Section 1 - Tabla comparativa */}
            <section id="tabla-comparativa" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tabla Comparativa: Particular vs Academia
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                      <th className="text-left p-4 font-semibold">Aspecto</th>
                      <th className="text-left p-4 font-semibold">Profesor particular</th>
                      <th className="text-left p-4 font-semibold">Academia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Precio</td>
                      <td className="p-4 text-gray-700">25-50€/hora</td>
                      <td className="p-4 text-green-600 font-medium">64-79€/mes (varias sesiones)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Personalización</td>
                      <td className="p-4 text-green-600 font-medium">Muy alta</td>
                      <td className="p-4 text-gray-700">Media-alta (según grupo)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Estructura curricular</td>
                      <td className="p-4 text-gray-700">Variable (depende del profesor)</td>
                      <td className="p-4 text-green-600 font-medium">Probada y certificada</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Materiales</td>
                      <td className="p-4 text-gray-700">Variable / coste adicional</td>
                      <td className="p-4 text-green-600 font-medium">Incluidos y actualizados</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Seguimiento de progreso</td>
                      <td className="p-4 text-gray-700">Informal</td>
                      <td className="p-4 text-green-600 font-medium">Sistemático y documentado</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Práctica de speaking en grupo</td>
                      <td className="p-4 text-red-600">No disponible</td>
                      <td className="p-4 text-green-600 font-medium">Sí, con compañeros</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Flexibilidad horaria</td>
                      <td className="p-4 text-green-600 font-medium">Alta</td>
                      <td className="p-4 text-gray-700">Media (horarios fijos)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2 - Ventajas del particular */}
            <section id="ventajas-particular" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ventajas del Profesor Particular
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Máxima personalización del contenido
                  </h3>
                  <p className="text-gray-700">Con un particular, cada clase se adapta al 100% a tus necesidades del momento. Si tienes una presentación en inglés la semana siguiente, esa semana trabajas exactamente eso. Esta flexibilidad de contenido no existe en academia.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Ritmo completamente adaptado
                  </h3>
                  <p className="text-gray-700">Si avanzas más rápido o más lento que la media, el particular puede ajustarse al instante. No hay que esperar al grupo ni sentirse presionado por el ritmo ajeno.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Horario más flexible
                  </h3>
                  <p className="text-gray-700">Los particulares suelen tener más flexibilidad horaria que una academia con horarios fijos. Útil para profesionales con viajes frecuentes o turnos irregulares.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Ventajas de la academia */}
            <section id="ventajas-academia" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ventajas de la Academia de Inglés
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Precio significativamente más económico
                  </h3>
                  <p className="text-gray-700">Con academias a 64-79€/mes por varias sesiones semanales, el coste por hora de aprendizaje es 3-5 veces menor que con un particular. Para estudios prolongados de 6-12 meses, el ahorro es muy significativo.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Estructura curricular probada
                  </h3>
                  <p className="text-gray-700">Una academia con experiencia tiene un currículo estructurado y probado con cientos de alumnos. La progresión está diseñada para maximizar el aprendizaje. No dependes de que el profesor particular tenga metodología sólida.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Práctica de speaking con otros alumnos
                  </h3>
                  <p className="text-gray-700">La práctica del speaking con otros alumnos de nivel similar es irremplazable. Prepara para situaciones reales, reduce la presión frente a nativos y construye confianza gradualmente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Seguimiento sistemático del progreso
                  </h3>
                  <p className="text-gray-700">Las academias documentan el progreso del alumno, realizan pruebas periódicas y pueden ajustar la preparación en función de resultados medibles. Esta trazabilidad es difícil de conseguir con un particular.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - Precio comparativo */}
            <section id="precio-comparativo" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Precio Comparativo Real
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Analizamos el coste real para un alumno tipo que estudia inglés durante 9 meses (un curso académico), con 2 sesiones semanales:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Profesor particular (precio medio)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 35€/hora × 2 sesiones × 4 semanas = <strong>280€/mes</strong></li>
                    <li>• × 9 meses = <strong>2.520€ anuales</strong></li>
                    <li>• Materiales: ~100€ adicionales</li>
                    <li className="font-bold text-red-700 pt-2">Total: ~2.620€</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Academia (precio típico)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 70€/mes (2 sesiones/semana incluidas)</li>
                    <li>• × 9 meses = <strong>630€ anuales</strong></li>
                    <li>• Materiales incluidos</li>
                    <li className="font-bold text-green-700 pt-2">Total: ~630€</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Diferencia de precio:</strong> La academia sale entre 3 y 5 veces más barata que el profesor particular para el mismo número de horas. Para quien prioriza resultados por euro invertido, la academia es claramente más eficiente.
                </p>
              </div>
            </section>

            {/* Section 5 - Recomendación por perfil */}
            <section id="recomendacion-perfil" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Recomendación por Perfil de Alumno
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Elige academia si...</h3>
                  <p className="text-gray-700">Quieres aprender inglés general o preparar Cambridge. Buscas estructura, compañeros de aprendizaje, materiales incluidos y precio razonable. Eres estudiante o adulto con objetivos laborales o académicos.</p>
                </div>
                <div className="bg-gray-50 border-l-4 border-gray-400 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Elige particular si...</h3>
                  <p className="text-gray-700">Tienes un objetivo muy específico a corto plazo (entrevista de trabajo en inglés, presentación puntual). Tu horario es muy irregular. O complementas clases en academia con práctica adicional extra.</p>
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">La mejor opción: one-to-one en academia</h3>
                  <p className="text-gray-700">Muchas academias ofrecen clases one-to-one (particulares dentro de la academia). Obtienes la personalización del particular con la estructura, materiales y metodología probada de la academia. Lo mejor de ambos mundos.</p>
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

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ofrecemos tanto clases grupales como one-to-one. Consúltanos.</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Te orientamos hacia la modalidad que mejor encaja con tus objetivos y presupuesto. Sin compromiso.
              </p>
              <a
              href="/cursos-ingles/particulares/"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Ver clases particulares
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo funcionan nuestras clases grupales y one-to-one.</p>
                </a>
                <a href="/cursos-ingles/particulares/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Cursos Particulares
                  </h3>
                  <p className="text-gray-600 text-sm">Clases one-to-one con la estructura y calidad de una academia.</p>
                </a>
                <a href="/contacto/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Contacto
                  </h3>
                  <p className="text-gray-600 text-sm">Cuéntanos tu caso y te orientamos sin compromiso.</p>
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
              href="https://www.cambridgeenglish.org/es/find-a-centre/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Buscar centro Cambridge oficial autorizado en tu zona
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
