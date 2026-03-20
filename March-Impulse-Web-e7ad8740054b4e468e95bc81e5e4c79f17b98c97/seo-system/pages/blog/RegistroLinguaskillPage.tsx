import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, FileText, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export default function RegistroLinguaskillPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Registro Linguaskill 2025: Guía Completa de Matrícula | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Registro Linguaskill 2025: Guía Completa de Matrícula",
    description: "Cómo registrarse en el examen Linguaskill: proceso de inscripción, requisitos, costes y plazos para matricularte en España.",
    url: `${businessInfo.url}/linguaskill/registro-linguaskill`,
    datePublished: "2025-01-16"
  });

  const faqs = [
    {
      question: "¿Cuánto dura el examen Linguaskill?",
      answer: "El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular."
    },
    {
      question: "¿Qué universidades aceptan Linguaskill?",
      answer: "Linguaskill es aceptado por más de 80 universidades españolas, incluidas públicas y privadas en Madrid, Andalucía y Cataluña, así como universidades a distancia como UNED, UOC, UDIMA, UNIR y VIU. También lo reconocen universidades internacionales en Canadá, Italia y China, facilitando acreditaciones académicas y laborales."
    },
    {
      question: "¿Linguaskill tiene validez para oposiciones?",
      answer: "Linguaskill es un examen multinivel online de Cambridge con certificación oficial reconocida por universidades e instituciones públicas. Su validez para oposiciones en 2025/26 crece gracias a resultados en 48 horas, evaluación precisa y aceptación creciente en procesos selectivos oficiales y laborales."
    },
    {
      question: "¿Puedo repetir solo una parte de Linguaskill?",
      answer: "En 2026, Linguaskill permite repetir solo módulos individuales (Reading, Listening, Writing o Speaking) sin necesidad de hacer el examen completo, facilitando mejorar puntuaciones específicas. Esta opción ofrece flexibilidad, ahorro de tiempo y mantiene la validez oficial del certificado para cada destreza evaluada."
    },
    {
      question: "¿Cuánto tarda en llegar el certificado Linguaskill?",
      answer: "El certificado Linguaskill suele entregarse en formato digital aproximadamente 48 horas hábiles tras completar el examen. Resultados de reading y listening se obtienen de inmediato, mientras writing y speaking tardan hasta 48 horas. El certificado es válido internacionalmente y se envía por correo electrónico."
    }
  ];

  const registrationSteps = [
    {
      number: "1",
      title: "Localizar centro autorizado",
      description: "Usa el buscador oficial de Cambridge English o contacta academias reconocidas que trabajen con Linguaskill."
    },
    {
      number: "2",
      title: "Confirmar fecha y disponibilidad",
      description: "Reserva con mínimo 5 días de anticipación para permitir los trámites administrativos con Cambridge."
    },
    {
      number: "3",
      title: "Completar formulario de inscripción",
      description: "Proporciona tus datos personales, número de documento, email y teléfono. Especifica qué módulos deseas examinar."
    },
    {
      number: "4",
      title: "Realizar el pago",
      description: "Transferencia bancaria o pago online mediante tarjeta. Envía el comprobante al centro por email."
    },
    {
      number: "5",
      title: "Recibir confirmación",
      description: "Recibirás tu código de candidato, instrucciones y requisitos técnicos para el día del examen."
    }
  ];

  return (
    <>
      <SEOHead
        title="Registro Linguaskill 2025: Cómo Inscribirse Paso a Paso"
        description="Guía completa de registro Linguaskill: proceso de inscripción, documentación requerida, modalidades presencial y online, y centros autorizados en España 2025."
        keywords="registro linguaskill, inscripción linguaskill, cómo registrarse linguaskill, matrícula linguaskill online, centros linguaskill españa, documentos linguaskill"
        canonical="/linguaskill/registro"
        ogType="article"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-700 py-16 md:py-24">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blogs-impulse' },
                  { label: 'Registro Linguaskill' }
                ]}
                variant="light"
              />

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Cómo Registrarse en el Examen Linguaskill: Guía Paso a Paso 2025
              </h1>

              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Todo lo que necesitas saber sobre el proceso de matrícula, documentación requerida y modalidades de examen disponibles.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-cyan-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>7 min de lectura</span>
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
            <div className="bg-cyan-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#proceso" className="text-cyan-600 hover:text-cyan-700 transition-colors">→ ¿Qué es el Proceso de Registro Linguaskill?</a></li>
                <li><a href="#documentacion" className="text-cyan-600 hover:text-cyan-700 transition-colors">→ Documentación Obligatoria</a></li>
                <li><a href="#pasos" className="text-cyan-600 hover:text-cyan-700 transition-colors">→ Pasos Detallados del Proceso</a></li>
                <li><a href="#modalidades" className="text-cyan-600 hover:text-cyan-700 transition-colors">→ Modalidades: Presencial vs Online</a></li>
                <li><a href="#faq" className="text-cyan-600 hover:text-cyan-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Registrarse en el examen Linguaskill genera dudas frecuentes sobre dónde hacerlo y qué documentos presentar. Este artículo explica específicamente el proceso de matrícula paso a paso, desde la elección del centro autorizado hasta la confirmación final de tu plaza. Linguaskill ofrece la flexibilidad de examinar presencialmente o desde casa, con resultados disponibles en 48 horas que certifican tu nivel según el Marco Común Europeo de Referencia para las Lenguas (MCER).
            </p>

            {/* Section 1 */}
            <section id="proceso" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Qué es el Proceso de Registro Linguaskill y Por Qué es Diferente?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El registro <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">Linguaskill</a> no se realiza directamente con Cambridge Assessment, sino a través de <strong>centros autorizados</strong> que gestionan toda la matrícula, pago y programación del examen. Estos centros actúan como intermediarios oficiales que garantizan que tu prueba cumple los estándares de Cambridge y que recibirás un certificado válido reconocido internacionalmente.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La principal diferencia con otros exámenes de Cambridge es la <strong>flexibilidad total</strong>: Linguaskill es un examen bajo demanda, lo que significa que no hay convocatorias fijas mensuales. Puedes realizarlo casi cualquier día del año, adaptándose a tus necesidades académicas o profesionales.
              </p>

              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo práctico:</strong> Verifica que el centro esté oficialmente acreditado por Cambridge consultando el buscador oficial de centros Linguaskill en la web de Cambridge English para evitar fraudes o certificados no válidos.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="documentacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Documentación Obligatoria para la Matrícula Linguaskill
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-600" />
                  Documentos requeridos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Documento de identidad oficial:</strong> DNI, pasaporte o carné de conducir vigente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Fotografía de identidad:</strong> Se toma durante el examen para vincular a tu expediente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Datos de contacto:</strong> Email activo y número de teléfono</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Importante:</strong> No se aceptan documentos digitales o electrónicos almacenados en el móvil. Debes presentar el documento físico original tanto en el momento de la inscripción como el día del examen.</span>
                </p>
              </div>
            </section>

            {/* Section 3 - Steps */}
            <section id="pasos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Pasos Detallados del Proceso de Registro
              </h2>

              <div className="space-y-4">
                {registrationSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl mt-8">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo práctico:</strong> Guarda todos los correos electrónicos del centro en una carpeta específica y anota tu código de candidato en un lugar seguro, lo necesitarás para acceder al sistema el día del examen.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="modalidades" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Modalidades de Examen: Presencial vs. Online desde Casa
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-blue-900 text-lg mb-3">Modalidad Presencial</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>El centro proporciona todo el equipo necesario</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Supervisión directa de un examinador</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Condiciones técnicas óptimas garantizadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Llegar 15 minutos antes de la convocatoria</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 text-lg mb-3">Modalidad Online desde Casa</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Máxima flexibilidad geográfica y de horario</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Requiere: PC/Mac, webcam, micrófono, internet 2Mbps+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Supervisión dual: IA + supervisores humanos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Habitación privada, silenciosa y bien iluminada</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-gray-800 flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibiciones estrictas:</strong> No puedes llevar relojes, teléfonos móviles, smartwatches, auriculares, reproductores ni dispositivos electrónicos. Violar estas normas puede resultar en descalificación inmediata sin derecho a reembolso.</span>
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Preguntas Frecuentes sobre el Registro Linguaskill
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
                        <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyan-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Registrarse en el examen Linguaskill requiere elegir un centro autorizado, preparar tu documentación oficial, completar el formulario de inscripción con datos precisos y realizar el pago en plazo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En Madrid, nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-cyan-600 hover:underline font-medium">academia en Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-cyan-600 hover:underline font-medium">junto a La Vaguada</Link>, ofrece preparación específica para <Link to="/examenes-cambridge/linguaskill" className="text-cyan-600 hover:underline font-medium">Linguaskill</Link> además de actuar como centro examinador oficial, facilitando todo el proceso de matrícula y certificación. También preparamos otros <Link to="/examenes-cambridge" className="text-cyan-600 hover:underline font-medium">exámenes Cambridge</Link> con <Link to="/ingles-la-vaguada/adultos" className="text-cyan-600 hover:underline font-medium">cursos de inglés para adultos</Link> y <Link to="/ingles-la-vaguada/particulares" className="text-cyan-600 hover:underline font-medium">clases particulares</Link>. Planifica tu registro con al menos una semana de antelación para asegurar tu plaza en la fecha deseada.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para registrarte?</h3>
              <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te ayudamos con todo el proceso de registro y te preparamos para obtener la mejor puntuación posible.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
              >
                Contactar ahora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/linguaskill" className="group bg-gray-50 rounded-xl p-6 hover:bg-cyan-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
                    Linguaskill: Guía Completa 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Todo lo que necesitas saber sobre el examen Linguaskill de Cambridge.</p>
                </Link>
                <Link to="/linguaskill/precio-reservar" className="group bg-gray-50 rounded-xl p-6 hover:bg-cyan-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
                    Precio Linguaskill 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Descubre los precios actualizados y cómo reservar tu examen.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-violet-600 hover:underline"
            >
              → Más información en Cambridge English - Linguaskill oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
