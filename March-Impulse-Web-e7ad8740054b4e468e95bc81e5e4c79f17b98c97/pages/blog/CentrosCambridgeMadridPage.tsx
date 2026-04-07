import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, MapPin, CheckCircle, Building, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Centros Cambridge en Madrid y Barcelona: Guía Completa 2025",
    description: "Guía completa de centros Cambridge en Madrid y Barcelona. Dónde examinarte, precios, diferencias entre centros Platino y regulares.",
    url: `${businessInfo.url}/examenes-cambridge/centros-madrid/`,
    datePublished: "2025-01-15"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Cuánto cuesta hacer un examen Cambridge en Madrid o Barcelona?",
      answer: "El precio varía según el nivel: A2 Key cuesta aproximadamente 125-145 euros, B1 Preliminary 160-175 euros, B2 First 195-220 euros, C1 Advanced 210-230 euros, y C2 Proficiency 220-240 euros. Los centros Platino suelen aplicar tarifas en el rango superior debido a servicios adicionales incluidos, mientras que centros más pequeños pueden ofrecer precios ligeramente inferiores. Algunas academias ofrecen paquetes que combinan curso preparatorio y examen con descuentos del 10-15%."
    }

  ,
    {
      question: "¿Con cuánta antelación debo inscribirme en un centro Cambridge?",
      answer: "Se recomienda inscribirse con 6-8 semanas de antelación mínima para asegurar plaza en la fecha deseada, especialmente para convocatorias populares como junio (antes de vacaciones) o diciembre (antes de fin de año). Los centros grandes con formato digital pueden ofrecer plazas con 3-4 semanas de antelación, pero sujetas a disponibilidad limitada. Para exámenes en papel, el plazo de inscripción suele cerrar 5-6 semanas antes de la fecha oficial."
    },
    {
      question: "¿Qué diferencia hay entre un centro Platino y uno regular?",
      answer: "Los centros Platino han demostrado excelencia continua durante mínimo 3 años en organización, satisfacción del candidato y volumen de exámenes administrados. Ofrecen más fechas de convocatoria (hasta 48 anuales vs 12-24 en centros regulares), personal específicamente formado, resultados más rápidos en exámenes digitales, y servicios complementarios como simulacros y masterclasses. Solo 67 centros en España tienen estatus Platino de los 180 autorizados totales. Madrid y Barcelona concentran la mayor cantidad de centros Platino del país."
    },
    {
      question: "¿Puedo cambiar la fecha de mi examen después de inscribirme?",
      answer: "Sí, pero con condiciones específicas según el centro. La mayoría permite cambios sin coste adicional hasta 8 semanas antes del examen, cobrando tasas administrativas de 25-40 euros entre 5-8 semanas antes, y permitiendo cambios con penalización del 50% entre 3-5 semanas antes. Menos de 3 semanas, generalmente no se permiten cambios excepto por causas de fuerza mayor documentadas médicamente (enfermedad grave, hospitalización), casos en los que se reembolsa hasta el 80% o se traslada a convocatoria futura sin coste."
    },
    {
      question: "¿Los resultados de exámenes digitales y en papel tienen la misma validez?",
      answer: "Absolutamente. Cambridge Assessment English garantiza que ambos formatos evalúan las mismas competencias con idénticos criterios y que los certificados emitidos son indistinguibles en cuanto a validez oficial. El certificado final no indica qué formato realizaste, solo tu nivel alcanzado y puntuación desglosada por competencias. Universidades, empleadores y procesos de inmigración aceptan ambos formatos sin distinción alguna. La única diferencia práctica es el tiempo de espera para resultados: 2-3 semanas digital vs 4-6 semanas papel."
    }
  ];

export default function CentrosCambridgeMadridPage() {
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
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
              items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Centros Cambridge Madrid' }
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
                  Centros Cambridge en Madrid y Barcelona: Guía Completa 2025
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Más de 40 centros autorizados en las dos principales ciudades españolas para tu certificación oficial.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-red-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#que-son" className="text-red-600 hover:text-red-700 transition-colors">→ ¿Qué Son los Centros Cambridge?</a></li>
                <li><a href="#madrid" className="text-red-600 hover:text-red-700 transition-colors">→ Centros Autorizados en Madrid</a></li>
                <li><a href="#barcelona" className="text-red-600 hover:text-red-700 transition-colors">→ Centros Autorizados en Barcelona</a></li>
                <li><a href="#digital-papel" className="text-red-600 hover:text-red-700 transition-colors">→ Exámenes Digitales vs Papel</a></li>
                <li><a href="#inscripcion" className="text-red-600 hover:text-red-700 transition-colors">→ Cómo Inscribirse</a></li>
                <li><a href="#faq" className="text-red-600 hover:text-red-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Elegir el centro examinador adecuado para tu certificación Cambridge puede marcar la diferencia entre una experiencia fluida y complicaciones innecesarias. En Madrid y Barcelona existen <strong>más de 40 centros autorizados</strong> que organizan exámenes oficiales durante todo el año. Este artículo identifica exactamente dónde realizar tu examen Cambridge en estas dos ciudades, qué distingue a cada tipo de centro, y cómo tomar la decisión correcta.
            </p>

            {/* Section 1 */}
            <section id="que-son" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Qué Son los Centros Cambridge y Por Qué Importa Elegir Bien?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Los centros Cambridge son instituciones autorizadas oficialmente por Cambridge Assessment English para organizar y administrar exámenes de certificación. En 2025, España cuenta con aproximadamente <strong>180 centros activos</strong>, de los cuales 67 tienen la distinción de <strong>Centro Platino</strong> por cumplir estándares excepcionales de calidad.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="font-bold text-amber-900 text-lg mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Centro Platino
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hasta 48 convocatorias anuales</li>
                    <li>• Personal especialmente formado</li>
                    <li>• Resultados digitales en 2-3 semanas</li>
                    <li>• Servicios complementarios (simulacros, masterclasses)</li>
                    <li>• Acceso prioritario a nuevos formatos</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Centro Regular
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 12-24 convocatorias anuales</li>
                    <li>• Estándares Cambridge garantizados</li>
                    <li>• Resultados en 4-6 semanas (papel)</li>
                    <li>• Precios generalmente más ajustados</li>
                    <li>• Grupos más reducidos</li>
                  </ul>
                </div>

              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> Solo los centros autorizados pueden emitir certificados válidos que universidades y empleadores aceptarán sin cuestionamiento. Verifica siempre el estatus del centro en el <a href="https://www.cambridgeenglish.org/es/find-a-centre/find-an-exam-centre/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">buscador oficial de centros examinadores de Cambridge English</a>.
                </p>
              </div>
            </section>

            {/* Section 2 - Madrid */}
            <section id="madrid" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Centros Cambridge Autorizados en Madrid
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Madrid: El Centro Más Grande de la Península</h3>
                    <p className="text-gray-600">+16 sedes autorizadas | +25.000 candidatos anuales</p>
                  </div>

                </div>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Centro Platino principal:</strong> El más grande de Europa occidental, con múltiples ubicaciones estratégicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Formato digital:</strong> 68% de candidatos madrileños optan por esta modalidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Convocatorias B2/C1:</strong> Prácticamente semanales en formato digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Ubicaciones:</strong> Centro, Alcalá de Henares, Getafe, Pozuelo de Alarcón</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El precio estándar en Madrid ronda los <strong>195-220 euros</strong> para B2 First y C1 Advanced, con descuentos ocasionales del 10-15% para inscripciones anticipadas (más de 8 semanas). Los centros Platino permiten modificar la fecha de examen hasta 5 semanas antes sin penalización.
              </p>
            </section>

            {/* Section 3 - Barcelona */}
            <section id="barcelona" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Centros Cambridge Autorizados en Barcelona
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Barcelona: Innovación y Tradición</h3>
                    <p className="text-gray-600">12 centros autorizados | 3 centros Platino | +94% satisfacción</p>
                  </div>

                </div>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Adopción digital:</strong> 72% de exámenes B2 First y C1 en formato ordenador</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Accesibilidad:</strong> Sedes en zonas céntricas accesibles por metro (L1, L3, L5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Horarios:</strong> Sesiones sabatinas para profesionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Servicios extra:</strong> Simulacros gratuitos (35-50€) y masterclasses online</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Los precios en Barcelona oscilan entre <strong>190-215 euros</strong> según nivel, ligeramente inferiores a Madrid debido a acuerdos específicos. Algunos centros ofrecen pago fraccionado en dos plazos sin interés adicional.
              </p>
            </section>

            {/* Section 4 */}
            <section id="digital-papel" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Diferencias Entre Exámenes Digitales y en Papel
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-blue-900 text-lg mb-3">Formato Digital (65% preferencia)</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Múltiples slots semanales disponibles</li>
                    <li>• Resultados en 2-3 semanas</li>
                    <li>• Procesador de texto integrado</li>
                    <li>• Auriculares individuales para Listening</li>
                    <li>• Diccionario monolingüe integrado</li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-6">
                  <h3 className="font-bold text-amber-900 text-lg mb-3">Formato Papel</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Convocatorias mensuales/bimensuales</li>
                    <li>• Resultados en 4-6 semanas</li>
                    <li>• Posibilidad de subrayar textos</li>
                    <li>• Escribir a mano en Writing</li>
                    <li>• Familiar para candidatos tradicionales</li>
                  </ul>
                </div>

              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Las estadísticas de 2024 muestran tasas de aprobación prácticamente idénticas: <strong>76% en digital vs 75% en papel</strong> para B2 First. La decisión debe basarse en preferencias personales de examinación.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Consejo práctico:</strong> Si optas por digital, familiarízate con el simulador oficial gratuito en cambridge.org/exams, que replica exactamente la interfaz del examen real.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="inscripcion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Inscribirse y Qué Considerar
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Identificar el centro</h3>
                    <p className="text-gray-700 text-sm">Usa el buscador oficial de Cambridge (cambridgeenglish.org/find-a-centre) filtrando por ciudad, nivel y formato preferido.</p>
                  </div>

                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Registro online</h3>
                    <p className="text-gray-700 text-sm">Completa el formulario con datos personales, elige fecha específica (digital) o convocatoria (papel), y carga fotografía tipo carnet.</p>
                  </div>

                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Pago completo</h3>
                    <p className="text-gray-700 text-sm">Realiza el pago para confirmar reserva. El plazo recomendado es 6-8 semanas antes del examen deseado.</p>
                  </div>

                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Confirmación</h3>
                    <p className="text-gray-700 text-sm">Recibirás email con información práctica: qué llevar, horarios exactos, ubicación de sala y recordatorios.</p>
                  </div>

                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Advertencia:</strong> Existen academias que ofrecen "exámenes Cambridge" pero no están autorizadas, emitiendo certificados sin validez oficial. La autorización se confirma con el código de centro (formato ES001, ES002, etc.) visible en la web oficial.
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
                        <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Elegir el centro Cambridge adecuado en Madrid o Barcelona requiere evaluar ubicación, formato disponible, servicios complementarios y política de cambios específica de cada sede.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Para candidatos que buscan preparación integral antes del examen, academias especializadas como <strong><a href="/academia-ingles-barrio-del-pilar/" className="text-red-600 hover:underline font-medium">academia en Barrio del Pilar</a></strong> ofrecen programas específicos Cambridge con tasas de éxito comprobadas. Si buscas <a href="/examenes-cambridge/b2-first/" className="text-red-600 hover:underline font-medium">B2 First</a> o <a href="/examenes-cambridge/b1-preliminary/" className="text-red-600 hover:underline font-medium">B1 Preliminary</a>, nuestra <a href="/academia-ingles-la-vaguada/" className="text-red-600 hover:underline font-medium">junto a La Vaguada</a> ofrece <a href="/cursos-ingles/particulares/" className="text-red-600 hover:underline font-medium">clases particulares</a> personalizadas para maximizar tu puntuación.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Buscas preparación Cambridge en Madrid?</h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te preparamos con metodología oficial para aprobar tu examen Cambridge con la mejor puntuación.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                    Guía de Exámenes Cambridge 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Todo lo que necesitas saber sobre certificaciones Cambridge.</p>
                </a>
                <a href="/examenes-cambridge/c1-advanced/" className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                    Precio C1 Advanced en Madrid
                  </h3>
                  <p className="text-gray-600 text-sm">Costes detallados y proceso de registro para el C1.</p>
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
              className="text-sm text-red-600 hover:underline"
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
