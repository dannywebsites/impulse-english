import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Cuánto Dura el Certificado B2 de Cambridge? Validez y Caducidad",
    description: "El certificado B2 First de Cambridge no caduca nunca. Descubre su validez permanente, reconocimiento internacional y diferencias con IELTS y TOEFL.",
    url: `${businessInfo.url}/blog/validez-certificado-b2-cambridge`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿El certificado B2 First de Cambridge caduca?",
      answer: "No, el certificado B2 First de Cambridge no caduca nunca. A diferencia de certificaciones como IELTS o TOEFL que tienen una validez de 2 años, los certificados de Cambridge English tienen validez permanente. Una vez que obtienes tu B2 First, es tuyo para siempre y no necesitas renovarlo ni volver a examinarte para mantenerlo vigente."
    }

  ,
    {
      question: "¿Las empresas aceptan certificados B2 antiguos?",
      answer: "La mayoría de empresas aceptan certificados B2 First independientemente de su antigüedad, ya que la política oficial de Cambridge establece que no caducan. Sin embargo, algunas organizaciones o procesos de selección específicos pueden preferir certificaciones obtenidas en los últimos 2-3 años como garantía de que el nivel se mantiene actualizado. En caso de duda, consulta directamente con la entidad que lo requiere."
    },
    {
      question: "¿Cuál es la diferencia de validez entre Cambridge e IELTS?",
      answer: "La diferencia principal es que los certificados Cambridge (incluido el B2 First) tienen validez permanente, mientras que el IELTS y el TOEFL caducan a los 2 años. Esto convierte al B2 First en una inversión a largo plazo más rentable, ya que solo necesitas examinarte una vez. El IELTS, en cambio, requiere renovación periódica si necesitas mantener la certificación vigente."
    },
    {
      question: "¿El B2 First es suficiente para entrar en la universidad?",
      answer: "El B2 First es aceptado por miles de universidades en todo el mundo como prueba de nivel de inglés suficiente para admisión en programas de grado. En España, muchas universidades lo aceptan para acreditar el nivel B2 necesario para la graduación. Para universidades en el Reino Unido, EE.UU. o Australia, algunas instituciones pueden requerir una puntuación mínima específica o un nivel C1 dependiendo del programa."
    },
    {
      question: "¿Puedo volver a examinarme para mejorar mi nota del B2?",
      answer: "Sí, puedes presentarte al B2 First tantas veces como desees para mejorar tu calificación. No hay restricción de intentos. Si obtuviste un Grade C y quieres alcanzar un Grade A (que equivale al nivel C1), puedes volver a examinarte. Tu certificado anterior seguirá siendo válido, y además tendrás el nuevo con la puntuación mejorada."
    }
  ];

export default function ValidezCertificadoB2CambridgePage() {
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
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Certificado Cambridge B2 First validez permanente" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Validez Certificado B2 Cambridge' }
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
                  ¿Cuánto Dura el Certificado B2 de Cambridge? Validez y Caducidad
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Descubre por qué el B2 First es una inversión para toda la vida: validez permanente, reconocimiento mundial y comparativa con otras certificaciones.
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
                <li><a href="#validez" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Validez Permanente del B2 First</a></li>
                <li><a href="#reconocimiento" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Reconocimiento Internacional</a></li>
                <li><a href="#comparativa" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Comparativa con Otros Certificados</a></li>
                <li><a href="#cuando-recertificar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ ¿Cuándo Recertificarse?</a></li>
                <li><a href="#requisitos" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Requisitos de Empresas y Universidades</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Una de las preguntas más frecuentes entre los candidatos al <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First de Cambridge</a> es si el certificado caduca. La respuesta es clara y definitiva: <strong>el certificado B2 First no caduca nunca</strong>. A diferencia de otras certificaciones de inglés como IELTS o TOEFL, que expiran a los 2 años, los certificados de Cambridge English tienen validez permanente. Esto convierte al B2 First en una de las inversiones más inteligentes para acreditar tu nivel de inglés, ya que solo necesitas aprobar una vez para tenerlo de por vida.
            </p>

            {/* Section 1 - Validez */}
            <section id="validez" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Validez Permanente del Certificado B2 First
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Cambridge Assessment English, la entidad que diseña y administra los exámenes Cambridge, establece oficialmente que sus certificados <strong>no tienen fecha de caducidad</strong>. Esto incluye todos los niveles: A2 Key, B1 Preliminary, B2 First, C1 Advanced y C2 Proficiency. Una vez que apruebas el examen y recibes tu certificado, este documento acredita tu nivel de forma indefinida.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Lo que significa validez permanente
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Tu certificado no tiene fecha de expiración impresa</li>
                    <li>• No necesitas renovarlo ni volver a examinarte</li>
                    <li>• Cambridge no lo revoca ni lo invalida con el tiempo</li>
                    <li>• Puedes verificar tu resultado online indefinidamente</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Ventajas de la validez permanente
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Inversión única sin costes de renovación</li>
                    <li>• Válido para cualquier proceso futuro</li>
                    <li>• No hay presión por plazos de expiración</li>
                    <li>• Mayor retorno de la inversión a largo plazo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato importante:</strong> Cambridge emite los certificados tanto en formato físico como digital. Ambos formatos tienen la misma validez permanente. El certificado digital está disponible para descarga desde tu cuenta de Cambridge y puede verificarse electrónicamente por cualquier institución.
                </p>
              </div>
            </section>

            {/* Section 2 - Reconocimiento Internacional */}
            <section id="reconocimiento" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Reconocimiento Internacional del B2 First
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El B2 First es una de las certificaciones de inglés más reconocidas a nivel mundial. Más de <strong>25.000 organizaciones</strong> en todo el mundo aceptan los certificados de Cambridge English como prueba de nivel de idioma. Este reconocimiento abarca universidades, empresas, gobiernos e instituciones de inmigración en más de 130 países.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Sector</th>
                      <th className="text-left p-4 font-semibold">Ejemplos</th>
                      <th className="text-left p-4 font-semibold">Aceptación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Universidades</td>
                      <td className="p-4 text-gray-700">Oxford, MIT, ETH Zürich</td>
                      <td className="p-4 text-gray-700">Más de 8.000 instituciones</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Empresas</td>
                      <td className="p-4 text-gray-700">Deloitte, HSBC, Airbus</td>
                      <td className="p-4 text-gray-700">Más de 15.000 empresas</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Gobiernos</td>
                      <td className="p-4 text-gray-700">Visados, inmigración</td>
                      <td className="p-4 text-gray-700">Más de 50 países</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Educación España</td>
                      <td className="p-4 text-gray-700">Habilitación lingüística, oposiciones</td>
                      <td className="p-4 text-gray-700">Todas las CCAA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En España, el B2 First es especialmente valioso para acreditar el nivel B2 exigido en oposiciones, habilitación lingüística docente y requisitos de graduación universitaria. Según la <a href="/blog/escala-cambridge/" className="text-emerald-600 hover:underline font-medium">escala de Cambridge</a>, obtener una puntuación de 160 o superior confirma el nivel B2 del MCER reconocido por todas las comunidades autónomas.
              </p>
            </section>

            {/* Section 3 - Comparativa */}
            <section id="comparativa" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comparativa de Validez: Cambridge vs IELTS vs TOEFL
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Una de las principales ventajas del B2 First frente a otras certificaciones es precisamente su validez permanente. Veamos cómo se compara con las alternativas más populares:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Certificado</th>
                      <th className="text-left p-4 font-semibold">Validez</th>
                      <th className="text-left p-4 font-semibold">Precio aprox.</th>
                      <th className="text-left p-4 font-semibold">Renovación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">B2 First (Cambridge)</td>
                      <td className="p-4 text-emerald-600 font-bold">Permanente</td>
                      <td className="p-4 text-gray-700">210-230 EUR</td>
                      <td className="p-4 text-gray-700">No necesaria</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">IELTS</td>
                      <td className="p-4 text-red-600 font-bold">2 años</td>
                      <td className="p-4 text-gray-700">230-250 EUR</td>
                      <td className="p-4 text-gray-700">Nuevo examen completo</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">TOEFL iBT</td>
                      <td className="p-4 text-red-600 font-bold">2 años</td>
                      <td className="p-4 text-gray-700">220-260 EUR</td>
                      <td className="p-4 text-gray-700">Nuevo examen completo</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Linguaskill</td>
                      <td className="p-4 text-red-600 font-bold">2 años*</td>
                      <td className="p-4 text-gray-700">80-100 EUR</td>
                      <td className="p-4 text-gray-700">Nuevo examen completo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Si sumamos el coste de renovar IELTS o TOEFL cada 2 años durante una carrera profesional de 20-30 años, la diferencia económica es significativa. Un estudiante que obtiene su B2 First a los 20 años y lo usa hasta los 50 habría gastado <strong>un único pago de ~220 EUR</strong>, mientras que con IELTS habría necesitado hasta 15 renovaciones (~3.600 EUR en total).
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  *Linguaskill, aunque también es de Cambridge, funciona como un test (no un certificado) y muchas instituciones requieren resultados recientes. Consulta nuestra <a href="/linguaskill/" className="text-emerald-600 hover:underline">guía de Linguaskill</a> para más detalles sobre sus diferencias con el B2 First.
                </p>
              </div>
            </section>

            {/* Section 4 - Cuándo recertificarse */}
            <section id="cuando-recertificar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Cuándo Conviene Recertificarse?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Aunque el certificado B2 First no caduca, existen situaciones en las que puede ser conveniente volver a examinarse. No se trata de que el certificado pierda validez, sino de que tus circunstancias o nivel hayan cambiado:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Para mejorar tu calificación
                  </h3>
                  <p className="text-gray-700">Si obtuviste un Grade C (160-172 puntos) y necesitas un Grade A (180-190, equivalente a C1) para ciertos programas o puestos, puedes volver a presentarte para obtener una puntuación superior que refleje mejor tu nivel actual.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Para subir de nivel
                  </h3>
                  <p className="text-gray-700">Si tu inglés ha mejorado significativamente desde que obtuviste el B2, puede ser más beneficioso presentarte directamente al <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline">C1 Advanced</a> para obtener una certificación que refleje tu nivel actual y abra más puertas profesionales.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Cuando la institución lo requiera
                  </h3>
                  <p className="text-gray-700">Algunas universidades o programas de posgrado específicos pueden solicitar un certificado obtenido en los últimos 2-3 años. Aunque no es lo habitual con Cambridge, conviene consultar los requisitos concretos de la institución antes de matricularse.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Consejo:</strong> Si no has practicado inglés en varios años y necesitas acreditar tu nivel para un proceso específico, considera hacer un test de nivel gratuito antes de decidir si presentarte de nuevo. Tu nivel real puede haber variado respecto al momento en que obtuviste el certificado.
                </p>
              </div>
            </section>

            {/* Section 5 - Requisitos empleadores */}
            <section id="requisitos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Requisitos de Empresas y Universidades
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El reconocimiento del B2 First varía ligeramente según el contexto. Aunque el certificado es permanente, es importante entender cómo lo valoran las diferentes instituciones para planificar correctamente tu estrategia de certificación.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Empresas en España
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Aceptan B2 First sin restricción de antigüedad</li>
                    <li>• Válido para oposiciones y habilitación docente</li>
                    <li>• Multinacionales lo reconocen globalmente</li>
                    <li>• Diferenciador en procesos de selección</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Universidades
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mayoría acepta B2 First para admisión</li>
                    <li>• Requisito de graduación en universidades españolas</li>
                    <li>• Algunas piden puntuación mínima específica</li>
                    <li>• Programas selectivos pueden pedir C1</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Para verificar si una institución específica acepta el B2 First, Cambridge ofrece un buscador oficial de reconocimiento en su web. También puedes consultar directamente con la entidad que requiere la acreditación, ya que las políticas pueden variar entre departamentos o programas dentro de una misma organización.
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
                  El <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">certificado B2 First de Cambridge</a> es una inversión permanente en tu futuro profesional y académico. Su validez ilimitada, combinada con el reconocimiento de más de 25.000 organizaciones en todo el mundo, lo convierte en la opción más rentable y práctica para acreditar tu nivel de inglés intermedio-alto.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si estás considerando certificar tu nivel de inglés, la combinación de validez permanente, reconocimiento universal y una única inversión hace del B2 First la elección más inteligente. En <a href="/blog/registro-cambridge/" className="text-emerald-600 hover:underline font-medium">nuestra guía de registro</a> encontrarás todo lo necesario para inscribirte, y en nuestros <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">cursos para adultos</a> te preparamos para obtener la mejor puntuación posible.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para obtener tu B2 First?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te preparamos con metodología probada para aprobar el B2 First con la mejor puntuación posible. Un certificado para toda la vida.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/b2-first/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cambridge B2 First: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen B2 First: estructura, formato y preparación.</p>
                </a>
                <a href="/blog/escala-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Escala de Cambridge Explicada
                  </h3>
                  <p className="text-gray-600 text-sm">Entiende cómo funciona el sistema de puntuación de Cambridge English.</p>
                </a>
                <a href="/blog/registro-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cómo Registrarse en Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Guía paso a paso para inscribirte en tu examen Cambridge.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/first/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - B2 First oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}