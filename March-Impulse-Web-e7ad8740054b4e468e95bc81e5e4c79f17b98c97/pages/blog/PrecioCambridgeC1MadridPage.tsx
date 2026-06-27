import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, CreditCard, CheckCircle, AlertTriangle, ArrowRight, Euro } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
export const articleSchema = generateArticleSchema({
    headline: "Precio Cambridge C1 Madrid 2026: Costes y Registro Completo",
    description: "Precios actualizados del examen Cambridge C1 Advanced en Madrid. Costes de inscripción, descuentos y proceso de registro paso a paso.",
    url: `${businessInfo.url}/blog/precio-cambridge-c1-madrid`,
    datePublished: "2025-01-07"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿El precio del examen Cambridge C1 incluye materiales de preparación?",
      answer: "No, la tarifa de 233 euros cubre únicamente la inscripción al examen oficial. Los materiales de preparación (libros, exámenes de práctica, cursos online) deben adquirirse por separado. Sin embargo, la inscripción incluye una clase online gratuita con recomendaciones para el día del examen y acceso al portal oficial de resultados."
    }

  ,
    {
      question: "¿Puedo obtener un reembolso si no puedo asistir al examen?",
      answer: "Sí, se conceden reembolsos por motivos médicos graves o razones familiares serias, siempre que se presente documentación oficial justificativa. El centro examinador deduce tasas administrativas del importe total, generalmente entre 30 y 50 euros. Las solicitudes de reembolso deben presentarse con la mayor antelación posible antes de la fecha del examen."
    },
    {
      question: "¿Cuándo recibiré los resultados después de realizar el examen?",
      answer: "Los resultados del formato digital están disponibles en 2 semanas aproximadamente, mientras que el formato en papel requiere hasta 4 semanas. Accedes a los resultados mediante el portal de Cambridge English utilizando el número de candidato proporcionado en la Confirmation of Entry. El certificado físico puede recogerse en el centro o solicitarse por mensajería."
    },
    {
      question: "¿Es más barato hacer el examen C1 fuera de Madrid?",
      answer: "No significativamente. Los precios del Cambridge C1 Advanced varían mínimamente entre ciudades españolas, manteniéndose en el rango de 220-240 euros. La diferencia de 10-15 euros no justifica desplazamientos, considerando costes de transporte y alojamiento. Es más práctico y económico realizar el examen en tu ciudad de residencia."
    },
    {
      question: "¿Qué documentación necesito para inscribirme al examen?",
      answer: "Necesitas tu DNI o pasaporte vigente (el documento debe ser el mismo que presentarás el día del examen), datos de contacto actualizados y, si aplicas al descuento universitario, certificado de matrícula vigente de una universidad pública participante. No se requieren fotografías ni títulos académicos previos para la inscripción."
    }
  ];

export default function PrecioCambridgeC1MadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const newFaqItems = [
    {
      question: '¿Cuánto cuesta Cambridge al año?',
      answer: 'Los exámenes Cambridge English tienen precios individuales que oscilan entre 69,50€ (Pre A1 Starters, A1 Movers) y 242€ (C2 Proficiency), con descuentos University Project de 9,50€ en niveles B1-C2. Linguaskill cuesta 130€ (120€ con descuento). TKT docente: 75€ por módulo. Los precios varían según el centro autorizado. No existe un coste anual único, ya que los candidatos eligen exámenes específicos según su nivel y necesidades académicas o profesionales.'
    },
    {
      question: '¿Cuánto cuesta el examen de Cambridge?',
      answer: 'El precio del examen de Cambridge oscila entre 69,50€ y 242€ según el nivel. Young Learners (Pre A1-A2 Flyers): 69,50-72€. Educación general: A2 Key (110€), B1 Preliminary (117,50€), B2 First (218€), C1 Advanced (233€), C2 Proficiency (242€). El University Project ofrece descuentos de 6,50-9,50€ para estudiantes universitarios. Linguaskill cuesta 130€ (120€ con descuento). TKT docente: 75€ por módulo. Los precios varían según el centro autorizado.'
    }
  ];


  const priceComparison = [
    { level: "A2 Key", price: "125-145€" },
    { level: "B1 Preliminary", price: "160-175€" },
    { level: "B2 First", price: "195-220€" },
    { level: "C1 Advanced", price: "210-233€" },
    { level: "C2 Proficiency", price: "220-240€" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
              items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Precio Cambridge C1 Madrid' }
              ]}
              variant="light"
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
                  Precio Cambridge C1 Advanced en Madrid: Guía Completa 2025
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Todo sobre el coste de 233€, descuentos universitarios, plazos de inscripción y centros autorizados en Madrid.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Price Highlight */}
            <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl p-8 mb-12 text-center border border-indigo-100">
              <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Euro className="w-4 h-4" />
                Precio oficial 2025
              </div>
              <div className="text-5xl font-bold text-indigo-900 mb-2">233€</div>
              <p className="text-gray-600">Precio estándar para candidatos particulares</p>
              <p className="text-indigo-600 font-medium mt-2">223,50€ con descuento universitario</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-indigo-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#precio-oficial" className="text-indigo-600 hover:text-indigo-700 transition-colors">→ Precio Oficial del C1 Advanced</a></li>
                <li><a href="#registro" className="text-indigo-600 hover:text-indigo-700 transition-colors">→ Plazos y Proceso de Registro</a></li>
                <li><a href="#formatos" className="text-indigo-600 hover:text-indigo-700 transition-colors">→ Formato Papel vs Digital</a></li>
                <li><a href="#centros" className="text-indigo-600 hover:text-indigo-700 transition-colors">→ Centros Autorizados en Madrid</a></li>
                <li><a href="#faq" className="text-indigo-600 hover:text-indigo-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* FAQ Section - HIGH UP on page */}
            <FAQSection
              faqs={newFaqItems}
              title="Preguntas Frecuentes sobre Precios Cambridge"
              className="mb-12"
            />

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              El precio del examen <a href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Cambridge C1 Advanced</a> en Madrid es de <strong>233 euros en 2025</strong>, aunque los estudiantes de universidades públicas pueden acceder a una tarifa reducida de 223,50 euros. Esta certificación internacional requiere planificación cuidadosa, ya que los plazos de inscripción cierran entre 4 y 6 semanas antes de cada convocatoria. Conocer los costes exactos, opciones de descuento y procedimientos de registro resulta fundamental para quienes buscan obtener este certificado reconocido mundialmente.
            </p>

            {/* Section 1 */}
            <section id="precio-oficial" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Precio Oficial del Examen Cambridge C1 Advanced en Madrid
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El coste estándar del examen Cambridge C1 Advanced en Madrid es de <strong>233 euros para candidatos particulares</strong> en 2025. Esta tarifa incluye la inscripción al examen completo de aproximadamente 4 horas de duración, que evalúa las cinco competencias lingüísticas: Reading, Writing, Use of English, Listening y Speaking.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-indigo-600" />
                    Precio estándar
                  </h3>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">233€</div>
                  <p className="text-gray-600 text-sm">Para candidatos particulares y estudiantes de universidades privadas</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Descuento universitario
                  </h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">223,50€</div>
                  <p className="text-gray-600 text-sm">University Project (UP) para alumnos de universidades públicas</p>
                </div>

              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La tarifa base incluye servicios adicionales: una <strong>clase online gratuita</strong> con consejos para el día del examen, acceso al portal de resultados de Cambridge English, y la posibilidad de recoger el certificado presencialmente o solicitarlo por mensajería con coste adicional.
              </p>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> Los candidatos que se inscriben fuera del periodo estándar enfrentan recargos por inscripción tardía que pueden incrementar el precio final entre 15 y 30 euros.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="registro" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plazos de Inscripción y Proceso de Registro
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los plazos de inscripción para el Cambridge C1 Advanced en Madrid cierran entre <strong>4 y 6 semanas antes</strong> de la fecha del examen. El proceso se realiza a través de la plataforma oficial del centro examinador.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Completar registro online</h3>
                    <p className="text-gray-700 text-sm">Formulario con datos personales, selección de tipo de examen (papel o digital) y datos de contacto. Verifica que nombre y apellidos coincidan exactamente con tu documento de identidad.</p>
                  </div>

                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Recibir instrucciones de pago</h3>
                    <p className="text-gray-700 text-sm">Email con datos bancarios y plazo específico para realizar la transferencia (generalmente 7 días). Sin el pago, la inscripción puede cancelarse automáticamente.</p>
                  </div>

                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Recibir Confirmation of Entry (CoE)</h3>
                    <p className="text-gray-700 text-sm">Documento esencial con tu número de candidato, fecha, hora y ubicación exacta del examen. Guárdalo cuidadosamente.</p>
                  </div>

                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Candidatos con necesidades especiales:</strong> Solicita adaptaciones durante el registro con documentación médica oficial. Estas solicitudes requieren tiempo adicional de aprobación.</span>
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="formatos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Diferencias Entre Formato Papel y Digital
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El examen Cambridge C1 Advanced se ofrece en dos formatos con el <strong>mismo precio de 233€</strong> y reconocimiento internacional idéntico:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-blue-900 text-lg mb-3">Formato Digital</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Respuestas en teclado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Audios mediante auriculares</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Resultados en ~2 semanas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Mayor flexibilidad de fechas</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-6">
                  <h3 className="font-bold text-amber-900 text-lg mb-3">Formato Papel</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Escritura a mano tradicional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Audios en altavoces de sala</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Resultados en ~4 semanas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Convocatorias fijas mensuales</span>
                    </li>
                  </ul>
                </div>

              </div>

              <p className="text-gray-700">
                La sección oral (Speaking) se realiza de manera <strong>presencial en ambos formatos</strong>, frente a dos examinadores.
              </p>
            </section>

            {/* Section 4 */}
            <section id="centros" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Centros Autorizados y Convocatorias en Madrid
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Madrid cuenta con múltiples centros oficiales autorizados por Cambridge Assessment English. <strong>Exams Madrid</strong> es el centro examinador oficial principal, con instalaciones en diferentes zonas de la capital y convocatorias mensuales durante todo el año calendario.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Fechas más demandadas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-red-600 font-bold">Marzo</div>
                    <div className="text-gray-600 text-sm">Alta demanda</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-red-600 font-bold">Mayo</div>
                    <div className="text-gray-600 text-sm">Alta demanda</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-red-600 font-bold">Junio</div>
                    <div className="text-gray-600 text-sm">Máxima demanda</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-red-600 font-bold">Noviembre</div>
                    <div className="text-gray-600 text-sm">Alta demanda</div>
                  </div>

                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Recomendación:</strong> Inscríbete con al menos 2 meses de antelación para asegurar tu plaza en la fecha deseada, especialmente para convocatorias de junio y diciembre.
                </p>
              </div>
            </section>

            {/* Price Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comparativa de Precios Cambridge en España
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                      <th className="text-left p-4 font-semibold">Nivel</th>
                      <th className="text-left p-4 font-semibold">Precio aproximado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceComparison.map((item, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${item.level === 'C1 Advanced' ? 'bg-indigo-50 font-medium' : ''}`}>
                        <td className="p-4 text-gray-900">{item.level}</td>
                        <td className="p-4 text-gray-700">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                        <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-indigo-600 flex-shrink-0" />
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
                Conclusión: Planifica Tu Registro
              </h2>

              <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El precio del examen Cambridge C1 Advanced en Madrid (<strong>233 euros</strong>, o 223,50€ con descuento universitario) representa una inversión accesible para obtener una certificación de inglés avanzado reconocida internacionalmente.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Planificar el registro con 6-8 semanas de antelación garantiza acceso a la fecha y formato preferidos. Para quienes buscan preparación adicional, nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-indigo-600 hover:underline font-medium">academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-indigo-600 hover:underline font-medium">junto a La Vaguada</a>, ofrece cursos especializados con metodologías específicas para maximizar las posibilidades de éxito. Preparamos <a href="/examenes-cambridge/" className="text-indigo-600 hover:underline font-medium">exámenes Cambridge</a> con <a href="/cursos-ingles/adultos/" className="text-indigo-600 hover:underline font-medium">cursos de inglés para adultos</a> y <a href="/cursos-ingles/particulares/" className="text-indigo-600 hover:underline font-medium">clases particulares</a> desde 79€/mes.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Quieres prepararte para el C1 Advanced?</h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te ayudamos a conseguir la mejor puntuación con metodología probada.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/c1-advanced/" className="group bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    Examen Cambridge C1 Advanced: Guía
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre estructura, formato y preparación del C1.</p>
                </a>
                <a href="/examenes-cambridge/centros-madrid/" className="group bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    Centros Cambridge en Madrid
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-violet-600 hover:underline"
            >
              → Más información en Cambridge English - C1 Advanced oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
