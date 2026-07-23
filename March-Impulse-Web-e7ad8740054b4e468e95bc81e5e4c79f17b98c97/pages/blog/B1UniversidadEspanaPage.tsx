import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿El B1 Sirve para la Universidad en España?",
    description: "El B1 es el nivel mínimo de inglés exigido por muchas universidades españolas para graduación. Conoce requisitos por comunidad y cómo certificarlo.",
    url: `${businessInfo.url}/blog/b1-universidad-espana`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Todas las universidades españolas exigen B1?",
      answer: "No todas, pero la gran mayoría sí. Desde que se implantó el Plan Bolonia, la acreditación de un nivel B1 se ha convertido en requisito habitual para graduación en la mayoría de universidades públicas y privadas. Algunas universidades exigen B2 para determinados grados, especialmente los bilingües o con proyección internacional."
    }

  ,
    {
      question: "¿Puedo usar el B1 de Cambridge para mi universidad?",
      answer: "Sí, el certificado B1 Preliminary de Cambridge está aceptado prácticamente en todas las universidades españolas como acreditación de nivel. Es una de las certificaciones más reconocidas junto con Linguaskill, IELTS y los certificados de la Escuela Oficial de Idiomas. Consulta siempre la normativa específica de tu universidad."
    },
    {
      question: "¿Cuándo debo acreditar el B1 durante la carrera?",
      answer: "La mayoría de universidades exigen la acreditación para poder solicitar el título de grado, es decir, al finalizar los estudios. Sin embargo, es muy recomendable obtenerlo durante los primeros cursos para no encontrarte con prisas al final. Algunas universidades lo exigen para matricularse en asignaturas de últimos cursos."
    },
    {
      question: "¿Sirve el certificado de la Escuela Oficial de Idiomas?",
      answer: "Sí, el certificado de nivel B1 de la Escuela Oficial de Idiomas (EOI) es válido para acreditar el nivel en universidades españolas. Sin embargo, ten en cuenta que la EOI tiene convocatorias limitadas y listas de espera. Los exámenes Cambridge o Linguaskill ofrecen mayor flexibilidad de fechas."
    },
    {
      question: "¿Qué pasa si no acredito el B1 al terminar la carrera?",
      answer: "Si no acreditas el nivel de inglés requerido, no podrás solicitar la expedición del título de grado. Seguirás teniendo todas las asignaturas aprobadas, pero el título oficial quedará pendiente hasta que presentes la acreditación. Esto puede afectar a tu incorporación al mercado laboral o a la inscripción en másteres."
    }
  ];

export default function B1UniversidadEspanaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const universityData = [
    { community: "Madrid", level: "B1 mínimo", notes: "UCM, UAM, UC3M, URJC exigen B1. Algunos grados bilingües exigen B2." },
    { community: "Cataluña", level: "B1-B2", notes: "UB, UAB, UPC exigen B1. Grados en inglés requieren B2." },
    { community: "Andalucía", level: "B1 mínimo", notes: "US, UGR, UMA. Algunas ofrecen cursos internos de acreditación." },
    { community: "Valencia", level: "B1 mínimo", notes: "UV, UPV, UA. Nivel B1 obligatorio para graduación." },
    { community: "País Vasco", level: "B1-B2", notes: "UPV/EHU exige B1. Programas trilingües requieren B2." },
    { community: "Galicia", level: "B1 mínimo", notes: "USC, UVigo, UDC. B1 como requisito de graduación." }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Estudiante universitario preparando certificación B1 de inglés" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'B1 Universidad España' }
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
                  ¿El B1 Sirve para la Universidad en España?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Todo lo que necesitas saber sobre el requisito de inglés para graduarte: niveles exigidos, certificaciones aceptadas y cómo prepararte.
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
                <li><a href="#requisito" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Requisito de B1 para Graduación</a></li>
                <li><a href="#universidades" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Universidades que Exigen B1</a></li>
                <li><a href="#acreditar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Formas de Acreditar el B1</a></li>
                <li><a href="#b1-vs-b2" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ B1 vs B2 para Universidad</a></li>
                <li><a href="#cuando-preparar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cuándo Preparar tu B1 Universitario</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si estás en la universidad o vas a empezar, es fundamental que conozcas el <strong>requisito de acreditación de inglés</strong> para poder graduarte. La mayoría de universidades españolas exigen al menos un nivel B1 del MCER como condición para la expedición del título de grado. En este artículo te explicamos todo lo que necesitas saber: qué universidades lo exigen, qué certificaciones aceptan y cuál es la estrategia más inteligente para cumplir con este requisito.
            </p>

            {/* Section 1 */}
            <section id="requisito" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Requisito de B1 para Graduación Universitaria
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Con la implantación del Espacio Europeo de Educación Superior (Plan Bolonia), las universidades españolas comenzaron a incorporar la acreditación de un nivel mínimo de lengua extranjera como requisito para la obtención del título de grado. En la mayoría de los casos, este nivel mínimo es el <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline">B1 del Marco Común Europeo</a>.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    ¿Por qué B1?
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Es el nivel intermedio del MCER</li>
                    <li>• Permite comunicarse en contextos académicos básicos</li>
                    <li>• Estándar mínimo europeo para graduados</li>
                    <li>• Facilita la movilidad Erasmus</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    ¿Qué implica?
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Sin B1, no se expide el título de grado</li>
                    <li>• Se puede acreditar en cualquier momento</li>
                    <li>• Múltiples vías de acreditación aceptadas</li>
                    <li>• Algunas universidades ofrecen alternativas internas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo estratégico:</strong> No dejes la acreditación del inglés para el último curso. Obtener tu B1 durante primero o segundo de carrera te quita presión, te permite centrarte en las asignaturas finales y, además, te abre la puerta a programas de intercambio Erasmus.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="universidades" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Universidades que Exigen B1: Requisitos por Comunidad
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los requisitos varían ligeramente entre comunidades autónomas y universidades. Aquí tienes un resumen orientativo de los principales centros universitarios:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Comunidad</th>
                      <th className="text-left p-4 font-semibold">Nivel exigido</th>
                      <th className="text-left p-4 font-semibold">Universidades y notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {universityData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.community}</td>
                        <td className="p-4 text-emerald-600 font-semibold">{item.level}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Importante:</strong> Esta tabla es orientativa. Los requisitos pueden cambiar y variar entre grados dentro de la misma universidad. Consulta siempre la normativa académica vigente de tu centro para confirmar el nivel exacto y las certificaciones aceptadas.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="acreditar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Formas de Acreditar el B1 en la Universidad
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las universidades aceptan diversas formas de acreditación del nivel B1. Estas son las más comunes, ordenadas por facilidad y rapidez:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Cambridge B1 Preliminary (PET)
                  </h3>
                  <p className="text-gray-700">Certificado oficial de Cambridge que <strong>no caduca nunca</strong>. Reconocido universalmente. Examen en 4 partes (Reading, Writing, Listening, Speaking). Precio: 115-140€. Ideal para quien quiere un certificado permanente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Linguaskill de Cambridge
                  </h3>
                  <p className="text-gray-700">Test adaptativo online con <a href="/linguaskill/" className="text-emerald-600 hover:underline">resultados en 48 horas</a>. Muy aceptado en universidades españolas. Formato más flexible y rápido. Ideal para quien necesita la acreditación con urgencia.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Escuela Oficial de Idiomas (EOI)
                  </h3>
                  <p className="text-gray-700">Certificado público con validez oficial. Precio muy económico pero con plazas limitadas y listas de espera. Las convocatorias son en junio y septiembre. Requiere haber cursado el nivel correspondiente en la EOI o presentarse como alumno libre.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Prueba de nivel interna de la universidad
                  </h3>
                  <p className="text-gray-700">Algunas universidades ofrecen su propia prueba de acreditación. Suele ser gratuita o de bajo coste. Sin embargo, este certificado solo tiene validez dentro de esa universidad específica y no sirve para otras instituciones ni para el mercado laboral.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Nuestra recomendación:</strong> Opta por una certificación oficial como Cambridge B1 o Linguaskill. Aunque cuestan algo más que las pruebas internas, obtienes un certificado que te servirá también para tu CV profesional, no solo para la universidad.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="b1-vs-b2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                B1 vs B2 para Universidad: ¿Cuál Preparar?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Aunque el mínimo exigido es B1, hay razones de peso para plantearte directamente el B2:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Cuándo B1 es suficiente
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Tu grado no tiene componente internacional</li>
                    <li>• No planeas hacer Erasmus</li>
                    <li>• Quieres cumplir el requisito cuanto antes</li>
                    <li>• Tu nivel actual está cerca del A2-B1</li>
                    <li>• Tu sector laboral no exige más</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Cuándo conviene ir a por el B2
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Planeas estudiar un máster</li>
                    <li>• Quieres hacer Erasmus (B2 es mejor)</li>
                    <li>• Tu sector laboral exige B2+</li>
                    <li>• Tu grado tiene asignaturas en inglés</li>
                    <li>• Tu nivel ya está cerca del B1-B2</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Si tienes tiempo durante la carrera, preparar directamente el B2 es la opción más inteligente a largo plazo. El esfuerzo adicional comparado con el B1 no es proporcional: con unas semanas más de preparación, obtienes una certificación significativamente más valiosa para tu futuro profesional.
              </p>
            </section>

            {/* Section 5 */}
            <section id="cuando-preparar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cuándo Preparar tu B1 Universitario: Estrategia Temporal
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La planificación temporal es crucial. Aquí te proponemos la estrategia más inteligente según el momento de tu carrera:
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  Cronograma Universitario Ideal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">1er curso</div>
                    <div className="text-gray-600 text-sm">Haz test de nivel y empieza preparación</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">2o curso</div>
                    <div className="text-gray-600 text-sm">Presenta el examen B1 (o B2)</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">3er curso</div>
                    <div className="text-gray-600 text-sm">Erasmus o mejora al B2</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">4o curso</div>
                    <div className="text-gray-600 text-sm">Céntrate en el TFG sin preocupaciones</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El peor error es dejarlo para el último curso. Cada año vemos estudiantes que no pueden solicitar su título porque no tienen acreditado el inglés. Evita esta situación empezando a prepararte desde el primer año de carrera.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">Impulse English Academy</a> tenemos horarios especiales para universitarios y programas de preparación que se adaptan al calendario académico. Muchos de nuestros estudiantes universitarios obtienen su B1 o B2 durante el primer o segundo año de carrera.
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
                  El <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline font-medium">B1</a> es el nivel mínimo de inglés exigido por la mayoría de universidades españolas para graduación. La mejor estrategia es obtenerlo durante los primeros cursos de carrera, optando por una certificación oficial como Cambridge o <a href="/linguaskill/" className="text-emerald-600 hover:underline font-medium">Linguaskill</a> que te sirva también para tu futuro profesional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> preparamos a universitarios para obtener su certificación de inglés de forma eficiente y compatible con sus estudios. No dejes este requisito para el final de la carrera.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/b1-universidad-espana" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/b1-preliminary/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Guía Completa del B1 Preliminary
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge B1: formato, precio y preparación.</p>
                </a>
                <a href="/linguaskill/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Linguaskill: Alternativa Rápida
                  </h3>
                  <p className="text-gray-600 text-sm">Certificación Cambridge con resultados en 48 horas. Ideal para universitarios.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/b1-universidad-espana" />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/preliminary/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - B1 Preliminary oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}