import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, FileText, CheckCircle, AlertTriangle, ArrowRight, UserCheck } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export default function RegistroCambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Cómo Registrarse en Exámenes Cambridge 2025 | Guía Paso a Paso | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Cómo Registrarse en Exámenes Cambridge 2025: Guía Paso a Paso",
    description: "Guía completa para registrarse en exámenes Cambridge en España. Proceso de inscripción, documentos necesarios y plazos importantes.",
    url: `${businessInfo.url}/examenes-cambridge/registro-cambridge`,
    datePublished: "2025-01-02"
  });

  const faqs = [
    {
      question: "¿Cuánto cuesta el examen de Cambridge?",
      answer: "El precio del examen de Cambridge oscila entre 69,50€ y 242€ según el nivel: Pre A1 Starters a A2 Flyers (69,50€-80€), A2 Key y B1 Preliminary (130€-145€), B2 First (205€-220€), C1 Advanced (220€-242€) y C2 Proficiency (230€-245€). El formato digital no tiene coste adicional. Algunos centros ofrecen descuentos de hasta el 15% en inscripciones anticipadas."
    },
    {
      question: "¿Cuánto tardan en llegar los Certificados de Cambridge?",
      answer: "El certificado original de Cambridge tarda entre 6 y 12 semanas en llegar tras la publicación de resultados, que se emiten en 2-6 semanas según formato digital o papel. El Statement of Results (documento provisional online) está disponible inmediatamente tras la corrección. Los retrasos pueden deberse a procesos de verificación o alta demanda, aunque el documento provisional tiene validez oficial."
    },
    {
      question: "¿Cuánto dura un certificado B2?",
      answer: "Un certificado B2 de Cambridge no tiene fecha de caducidad oficial establecida, siendo válido de por vida. Sin embargo, universidades y empresas pueden exigir exámenes recientes (2-3 años) para verificar competencia actual. Para procesos académicos, laborales o de inmigración, verifica los requisitos específicos de la institución receptora."
    },
    {
      question: "¿Qué certificado de inglés es válido por vida?",
      answer: "Los certificados de Cambridge English son válidos de por vida sin fecha de caducidad oficial. Los niveles más populares son el Cambridge B2 First y el C1 Advanced, aunque B1 Preliminary, A2 Key y C2 Proficiency tampoco caducan. Las instituciones pueden exigir exámenes recientes, recomendando verificar sus requisitos específicos."
    },
    {
      question: "¿Cuánto tiempo se tarda en preparar el B2 First?",
      answer: "La preparación para el examen Cambridge B2 First dura entre 3 y 9 meses según el nivel inicial y dedicación. Estudiantes con base B1 pueden alcanzar el nivel en 3-6 meses con estudio regular, mientras principiantes tardan hasta 12-18 meses. Clave: planificación estructurada y práctica constante."
    }
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Localizar centro autorizado",
      description: "Usa la herramienta \"Find a Centre\" en cambridgeenglish.org para encontrar centros en tu ciudad o región con información de contacto directa."
    },
    {
      step: 2,
      title: "Contactar con el centro",
      description: "Pregunta por fechas disponibles para 2025, precios exactos según certificación, y si ofrecen modalidad papel o digital. No todos los centros ofrecen todas las opciones."
    },
    {
      step: 3,
      title: "Completar formulario de inscripción",
      description: "Proporciona datos personales precisos: nombre completo exactamente como aparece en tu documento de identidad, fecha de nacimiento, dirección, email y teléfono."
    },
    {
      step: 4,
      title: "Presentar documentación",
      description: "Copia de documento de identidad oficial vigente (DNI o pasaporte). Menores de 14 años pueden necesitar formularios especiales de identificación."
    },
    {
      step: 5,
      title: "Realizar el pago completo",
      description: "Transferencia bancaria, tarjeta de crédito o efectivo presencial según las opciones del centro. Guarda el comprobante de pago."
    }
  ];

  return (
    <>
      <SEOHead
        title="Cómo Registrarse en Exámenes Cambridge 2025: Guía Paso a Paso - Inscripción"
        description="Guía completa para registrarse en exámenes Cambridge en España: proceso de inscripción paso a paso, documentos necesarios, plazos, precios y centros autorizados."
        keywords="registro cambridge, inscripción examen cambridge, cómo inscribirse cambridge, centros cambridge españa, fechas cambridge 2025"
        canonical="/examenes-cambridge/registro"
        ogType="article"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-blue-700 py-16 md:py-24">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blogs-impulse' },
                  { label: 'Registro Cambridge' }
                ]}
                variant="light"
                className="mb-6"
              />

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Cómo Registrarse en Exámenes Cambridge: Guía Completa 2025
              </h1>

              <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                Todo el proceso de inscripción paso a paso: centros autorizados, documentación, fechas y consejos prácticos.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sky-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>8 min de lectura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Actualizado: Diciembre 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-sky-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#que-es" className="text-sky-600 hover:text-sky-700 transition-colors">→ ¿Qué es el Registro Cambridge?</a></li>
                <li><a href="#pasos" className="text-sky-600 hover:text-sky-700 transition-colors">→ Pasos para Registrarse</a></li>
                <li><a href="#documentacion" className="text-sky-600 hover:text-sky-700 transition-colors">→ Requisitos y Documentación</a></li>
                <li><a href="#fechas" className="text-sky-600 hover:text-sky-700 transition-colors">→ Fechas y Plazos de Inscripción</a></li>
                <li><a href="#costes" className="text-sky-600 hover:text-sky-700 transition-colors">→ Costes y Opciones de Pago</a></li>
                <li><a href="#faq" className="text-sky-600 hover:text-sky-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Registrarse en un examen Cambridge puede parecer complicado al principio, pero el proceso es más sencillo de lo que imaginas. En esta guía descubrirás exactamente qué pasos seguir para completar tu inscripción sin errores ni contratiempos. Según Cambridge English, existen más de <strong>2,800 centros examinadores autorizados en 130 países</strong>, lo que significa que tendrás opciones cerca de tu ubicación.
            </p>

            {/* Section 1 */}
            <section id="que-es" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Qué Es el Registro Cambridge y Por Qué es Importante?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El registro Cambridge es el procedimiento formal que te permite inscribirte oficialmente para presentar cualquier <a href="https://www.cambridgeenglish.org/es/exams-and-tests/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">examen de certificación Cambridge English</a>. Este proceso debe completarse exclusivamente a través de <strong>centros examinadores autorizados</strong> por Cambridge Assessment English.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-sky-600" />
                  El registro te otorga
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Número de candidato único</strong> que te identifica durante todo el proceso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Soporte oficial</strong> del centro y acceso a recursos de preparación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Validez internacional</strong> de tu certificado reconocido en más de 130 países</span>
                  </li>
                </ul>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo práctico:</strong> Verifica siempre que el centro donde te registras aparezca en el buscador oficial de centros autorizados de Cambridge English para evitar fraudes o certificados no válidos.
                </p>
              </div>
            </section>

            {/* Section 2 - Registration Steps */}
            <section id="pasos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Pasos para Registrarse en un Examen Cambridge
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El proceso de inscripción consta de cinco pasos claramente definidos que debes completar en orden:
              </p>

              <div className="space-y-4 mb-8">
                {registrationSteps.map((item) => (
                  <div key={item.step} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Importante:</strong> Las plazas son limitadas, especialmente en convocatorias de junio y diciembre. Registrarte con al menos 6-8 semanas de antelación garantiza disponibilidad y evita recargos por inscripción tardía.</span>
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="documentacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Requisitos y Documentación Necesaria
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sky-600" />
                  Documentación obligatoria
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Documento de identidad oficial vigente</strong> con fotografía reciente (DNI o pasaporte)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Datos de contacto actualizados</strong> (email activo y teléfono)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Comprobante de pago</strong> una vez realizada la transferencia o cargo</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La fotografía del documento debe ser claramente visible y reconocible, ya que el personal del centro verificará tu identidad comparando el documento con tu apariencia física antes de permitirte acceder al aula de examen.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Para <strong>candidatos menores de 14 años</strong> existe una excepción: pueden utilizar un formulario de identificación especial proporcionado por el centro examinador con firma de padres o tutores legales.
              </p>
            </section>

            {/* Section 4 */}
            <section id="fechas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Fechas y Plazos de Inscripción
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Las fechas de registro Cambridge varían significativamente según el centro examinador y el tipo de examen. No existe un calendario único y universal, lo que hace imprescindible consultar directamente con tu centro elegido.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-blue-900 text-lg mb-3">Plazos generales</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Cierre: 4-6 semanas antes del examen</li>
                    <li>• Inscripción tardía: recargo de 25-50€</li>
                    <li>• Convocatorias populares: junio y diciembre</li>
                    <li>• Speaking: puede ser hasta 7 días antes/después</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 text-lg mb-3">Formato digital</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mayor flexibilidad de fechas</li>
                    <li>• Convocatorias semanales en centros grandes</li>
                    <li>• Registro posible hasta 2-3 semanas antes</li>
                    <li>• Resultados más rápidos (2-3 semanas)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Estrategia eficaz:</strong> Si tienes flexibilidad de fechas, consulta disponibilidad en convocatorias menos populares de primavera u otoño para asegurar plaza con menor competencia y precios ocasionalmente más reducidos.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="costes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Costes de Registro y Opciones de Pago
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El precio del registro Cambridge varía considerablemente según múltiples factores:
              </p>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
                <div className="bg-sky-600 text-white p-4">
                  <h3 className="font-bold">Precios aproximados en España 2025</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">A2 Key</span>
                      <span className="font-medium text-gray-900">130-165€</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">B1 Preliminary</span>
                      <span className="font-medium text-gray-900">160-175€</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">B2 First</span>
                      <span className="font-medium text-gray-900">170-195€</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">C1 Advanced</span>
                      <span className="font-medium text-gray-900">195-220€</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-700">C2 Proficiency</span>
                      <span className="font-medium text-gray-900">220-245€</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Métodos de pago aceptados:</strong> Transferencia bancaria (sin comisiones adicionales), tarjeta de crédito o débito (algunos centros aplican 1-2% de comisión), y pago en efectivo presencial en centros pequeños.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Consejo de ahorro:</strong> Pregunta específicamente por códigos promocionales o descuentos para estudiantes al momento de registrarte; muchos centros tienen acuerdos con instituciones educativas.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-sky-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-sky-600 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 bg-white">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Conclusión
              </h2>

              <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El registro Cambridge es un proceso estructurado que requiere atención a detalles específicos: elegir el centro autorizado correcto, preparar documentación vigente, respetar plazos de inscripción y confirmar el pago completo. Puedes consultar más información sobre los <Link to="/examenes-cambridge" className="text-sky-600 hover:underline font-medium">exámenes Cambridge</Link> disponibles, incluyendo el <Link to="/examenes-cambridge/b2-first" className="text-sky-600 hover:underline font-medium">B2 First</Link> y <Link to="/examenes-cambridge/linguaskill" className="text-sky-600 hover:underline font-medium">Linguaskill</Link>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Con planificación anticipada de 6-8 semanas, evitarás problemas de disponibilidad y costes adicionales. Si buscas un centro de preparación oficial en Madrid que también gestione tu registro, <Link to="/academia-ingles-barrio-del-pilar" className="text-sky-600 hover:underline font-medium">nuestra academia en Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-sky-600 hover:underline font-medium">junto a La Vaguada</Link>, ofrece soporte integral desde <Link to="/ingles-la-vaguada/adultos" className="text-sky-600 hover:underline font-medium">cursos para adultos</Link> hasta la inscripción formal.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu registro?</h3>
              <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te ayudamos con todo el proceso de registro y te preparamos para tu examen Cambridge.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-colors"
              >
                Contactar ahora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/examenes-cambridge/guia-completa" className="group bg-gray-50 rounded-xl p-6 hover:bg-sky-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors mb-2">
                    Guía de Exámenes Cambridge 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Todo lo que necesitas saber sobre certificaciones Cambridge.</p>
                </Link>
                <Link to="/examenes-cambridge/centros-madrid" className="group bg-gray-50 rounded-xl p-6 hover:bg-sky-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors mb-2">
                    Centros Cambridge en Madrid y Barcelona
                  </h3>
                  <p className="text-gray-600 text-sm">Dónde examinarte y cómo elegir el mejor centro.</p>
                </Link>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Exámenes oficiales
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
