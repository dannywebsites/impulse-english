import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, FileText, CheckCircle, AlertTriangle, ArrowRight, UserCheck } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

export const articleSchema = generateArticleSchema({
    headline: "Cómo Registrarse en Exámenes Cambridge 2025: Guía Paso a Paso",
    description: "Guía completa para registrarse en exámenes Cambridge en España. Proceso de inscripción, documentos necesarios y plazos importantes.",
    url: `${businessInfo.url}/blog/registro-cambridge`,
    datePublished: "2025-01-02"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Puedo registrarme directamente en la web de Cambridge English?",
      answer: "No, Cambridge English no gestiona inscripciones individuales de candidatos. Debes registrarte obligatoriamente a través de un centro examinador autorizado de tu zona. Estos centros son los únicos con capacidad legal para procesar tu inscripción, cobrar las tasas y organizar las sesiones de examen. Puedes buscar tu centro más cercano usando la herramienta oficial \"Find a Centre\" en cambridgeenglish.org."
    }

  ,
    {
      question: "¿Qué ocurre si mi documento de identidad caduca antes del examen?",
      answer: "Tu documento debe estar vigente el día de todas las pruebas, incluyendo el Speaking si se realiza en fecha diferente. Si tu DNI o pasaporte caduca antes, renuévalo inmediatamente o no podrás realizar el examen bajo ninguna circunstancia. No se aceptan documentos caducados ni certificados provisionales de renovación. Planifica con meses de antelación para evitar este problema común."
    },
    {
      question: "¿Cuánto tiempo tengo para pagar después de registrarme?",
      answer: "Los plazos de pago varían según el centro, pero generalmente tienes entre 3 y 7 días laborables tras completar el formulario de inscripción. Si no pagas dentro de ese período, tu reserva se cancela automáticamente y pierdes la plaza. Algunos centros requieren pago inmediato en el momento del registro. Consulta específicamente esta información para evitar perder tu convocatoria."
    },
    {
      question: "¿Puedo cambiar mi examen a otra fecha después de registrarme?",
      answer: "Sí, pero con restricciones importantes. Los cambios de fecha están sujetos a disponibilidad en la nueva convocatoria solicitada y requieren pago de tasas adicionales de 40-60 euros aproximadamente. Además, solo son posibles si solicitas el cambio con al menos 4 semanas de antelación a tu fecha original. Pasado ese plazo, cambios o cancelaciones no tienen derecho a reembolso ni transferencia."
    },
    {
      question: "¿Los menores de edad necesitan autorización parental para registrarse?",
      answer: "Sí, candidatos menores de 18 años requieren firma de consentimiento de padres o tutores legales en el formulario de inscripción. Para menores de 14 años, esta autorización es aún más estricta e incluye la responsabilidad de un adulto que debe acompañar al menor el día del examen. La documentación específica varía según el centro, así que consulta sus requisitos particulares durante el registro inicial."
    }
  ];

export default function RegistroCambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);


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
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src={blogImages.cambridgeCertificate.url} alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
              items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Registro Cambridge' }
              ]}
              variant="light"
              className="mb-6"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Actualizado: Diciembre 2025
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  Cómo Registrarse en Exámenes Cambridge: Guía Completa 2025
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Todo el proceso de inscripción paso a paso: centros autorizados, documentación, fechas y consejos prácticos.
                </p>
              </div>
            </div>
          </header>

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

              <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El registro Cambridge es un proceso estructurado que requiere atención a detalles específicos: elegir el centro autorizado correcto, preparar documentación vigente, respetar plazos de inscripción y confirmar el pago completo. Puedes consultar más información sobre los <a href="/examenes-cambridge/" className="text-sky-600 hover:underline font-medium">exámenes Cambridge</a> disponibles, incluyendo el <a href="/examenes-cambridge/b2-first/" className="text-sky-600 hover:underline font-medium">B2 First</a> y <a href="/linguaskill/" className="text-sky-600 hover:underline font-medium">Linguaskill</a>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Con planificación anticipada de 6-8 semanas, evitarás problemas de disponibilidad y costes adicionales. Si buscas un centro de preparación oficial en Madrid que también gestione tu registro, <a href="/academia-ingles-barrio-del-pilar/" className="text-sky-600 hover:underline font-medium">nuestra academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-sky-600 hover:underline font-medium">junto a La Vaguada</a>, ofrece soporte integral desde <a href="/cursos-ingles/adultos/" className="text-sky-600 hover:underline font-medium">cursos para adultos</a> hasta la inscripción formal.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu registro?</h3>
              <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te ayudamos con todo el proceso de registro y te preparamos para tu examen Cambridge.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-colors"
              >
                Contactar ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-sky-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors mb-2">
                    Guía de Exámenes Cambridge 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Todo lo que necesitas saber sobre certificaciones Cambridge.</p>
                </a>
                <a href="/examenes-cambridge/centros-madrid/" className="group bg-gray-50 rounded-xl p-6 hover:bg-sky-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors mb-2">
                    Centros Cambridge en Madrid y Barcelona
                  </h3>
                  <p className="text-gray-600 text-sm">Dónde examinarte y cómo elegir el mejor centro.</p>
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

</>
  );
}
