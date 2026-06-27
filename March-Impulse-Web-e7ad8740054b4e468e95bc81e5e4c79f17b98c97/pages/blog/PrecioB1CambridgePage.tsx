import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Cuánto Cuesta el Examen B1 Cambridge? Precios 2026",
    description: "El examen B1 Cambridge cuesta entre 115€ y 140€ según el centro y modalidad. Precios actualizados, descuentos y cómo inscribirse paso a paso.",
    url: `${businessInfo.url}/blog/precio-b1-cambridge`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿El precio del B1 incluye el certificado?",
      answer: "Sí, el precio de la matrícula incluye la emisión del certificado oficial en caso de aprobar. No hay costes adicionales por la certificación. El certificado digital está disponible unas semanas después de los resultados, y el certificado físico se envía al centro examinador donde realizaste la inscripción."
    }

  ,
    {
      question: "¿Puedo pagar el examen B1 a plazos?",
      answer: "La mayoría de centros examinadores exigen el pago completo en el momento de la inscripción. Sin embargo, algunos centros ofrecen facilidades de pago si te inscribes con antelación suficiente. Consulta directamente con el centro de tu elección. En academias que ofrecen cursos preparatorios, a veces incluyen la tasa del examen en el precio del curso."
    },
    {
      question: "¿Hay descuentos para estudiantes o desempleados?",
      answer: "Cambridge English no ofrece descuentos oficiales por condición de estudiante o desempleo. Sin embargo, algunos centros examinadores y comunidades autónomas ofrecen ayudas o subvenciones para certificaciones de idiomas. Consulta con tu ayuntamiento, comunidad autónoma o servicio de empleo local por posibles programas de ayuda."
    },
    {
      question: "¿Qué pasa si suspendo? ¿Pago otra vez el precio completo?",
      answer: "Sí, si no apruebas el examen, debes abonar la tasa completa para presentarte de nuevo. No existe tarifa reducida para repetidores. Por eso es tan importante prepararse bien antes de presentarse. Invierte en una buena preparación para maximizar tus probabilidades de aprobar a la primera."
    },
    {
      question: "¿Es más barato el B1 en formato digital o en papel?",
      answer: "Generalmente, la diferencia de precio entre formato digital y papel es mínima (5-10€). El formato digital suele ser ligeramente más económico y ofrece la ventaja de recibir resultados más rápido (2-3 semanas vs 4-6 semanas). La elección debería basarse en tu comodidad con cada formato, no en el precio."
    }
  ];

export default function PrecioB1CambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const priceComparison = [
    { concept: "Tasa de examen (papel)", price: "125€ - 140€", notes: "Varía según centro" },
    { concept: "Tasa de examen (digital)", price: "115€ - 135€", notes: "Resultados más rápidos" },
    { concept: "Inscripción tardía (recargo)", price: "+30€ - 55€", notes: "Según centro y convocatoria" },
    { concept: "Material preparación oficial", price: "30€ - 50€", notes: "Libros Cambridge oficiales" },
    { concept: "Curso preparatorio (academia)", price: "250€ - 500€", notes: "8-12 semanas típicamente" },
    { concept: "Certificado físico", price: "Incluido", notes: "En la tasa del examen" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Precio examen B1 Cambridge información actualizada" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Precio B1 Cambridge' }
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
                  ¿Cuánto Cuesta el Examen B1 Cambridge? Precios 2026
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Precios actualizados, modalidades de examen y cómo inscribirte para obtener tu certificado B1 Preliminary.
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
                <li><a href="#precio-2026" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Precio del B1 en 2026</a></li>
                <li><a href="#papel-digital" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Diferencia Papel vs Digital</a></li>
                <li><a href="#costes-adicionales" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Costes Adicionales</a></li>
                <li><a href="#inscripcion-madrid" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Dónde Inscribirse en Madrid</a></li>
                <li><a href="#inversion" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ ¿Merece la Inversión?</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si estás pensando en certificar tu nivel de inglés con el <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline">B1 Preliminary de Cambridge</a>, una de las primeras preguntas que surge es: <strong>¿cuánto cuesta?</strong> En este artículo desglosamos todos los costes asociados al examen, desde la tasa de inscripción hasta los materiales de preparación, para que puedas planificar tu presupuesto sin sorpresas.
            </p>

            {/* Section 1 */}
            <section id="precio-2026" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Precio del Examen B1 Cambridge en 2026
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El precio del examen B1 Preliminary varía según el centro examinador, la modalidad elegida (papel o digital) y la ciudad. En España, los precios actualizados para 2026 se sitúan en el siguiente rango:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Concepto</th>
                      <th className="text-left p-4 font-semibold">Precio</th>
                      <th className="text-left p-4 font-semibold">Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.concept}</td>
                        <td className="p-4 text-emerald-600 font-semibold">{item.price}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato importante:</strong> Los precios pueden variar ligeramente entre centros examinadores. Siempre confirma el precio exacto con el centro donde vayas a realizar la inscripción antes de abonar cualquier cantidad.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="papel-digital" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Examen en Papel vs Digital: Diferencias de Precio
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cambridge ofrece el B1 Preliminary en dos modalidades: papel y digital. Más allá del precio, hay diferencias prácticas importantes que debes considerar:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Examen en Papel
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Precio: 125€ - 140€</li>
                    <li>• Resultados en 4-6 semanas</li>
                    <li>• Escribes en hojas de respuesta</li>
                    <li>• Formato tradicional familiar</li>
                    <li>• Fechas más limitadas</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Examen Digital
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Precio: 115€ - 135€</li>
                    <li>• Resultados en 2-3 semanas</li>
                    <li>• Respondes en ordenador</li>
                    <li>• Puedes editar respuestas fácilmente</li>
                    <li>• Mayor disponibilidad de fechas</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La parte de Speaking se realiza de la misma forma en ambas modalidades: cara a cara con dos examinadores y otro candidato. El contenido del examen es idéntico; solo cambia el soporte de las partes de Reading, Writing y Listening.
              </p>
            </section>

            {/* Section 3 */}
            <section id="costes-adicionales" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Costes Adicionales a Tener en Cuenta
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Además de la tasa del examen, conviene presupuestar otros gastos asociados a la obtención de tu certificado B1:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Inscripción tardía (+30€ a 55€)
                  </h3>
                  <p className="text-gray-700">Si te inscribes después del plazo ordinario, la mayoría de centros aplican un recargo. Para evitarlo, inscríbete al menos 3-4 semanas antes de la fecha del examen. Algunos centros cierran inscripciones con mayor antelación.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Material de preparación (30€ - 50€)
                  </h3>
                  <p className="text-gray-700">Los libros oficiales como "B1 Preliminary Trainer" o "Complete Preliminary" cuestan entre 30€ y 50€. También hay recursos gratuitos disponibles en la web de Cambridge English que complementan perfectamente la preparación.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Curso preparatorio (250€ - 500€)
                  </h3>
                  <p className="text-gray-700">Aunque no es obligatorio, un curso preparatorio en academia multiplica significativamente las probabilidades de aprobar. Los cursos suelen durar 8-12 semanas con 2 sesiones semanales de 90 minutos e incluyen simulacros de examen.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Ahorra dinero:</strong> La mejor inversión es aprobar a la primera. Un segundo intento significa pagar la tasa completa otra vez. Un buen curso preparatorio, aunque supone un coste adicional, reduce enormemente el riesgo de tener que repetir.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="inscripcion-madrid" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Dónde Inscribirse en Madrid
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Madrid cuenta con múltiples centros examinadores autorizados por Cambridge. El proceso de <a href="/blog/registro-cambridge/" className="text-emerald-600 hover:underline">inscripción</a> es sencillo y se puede completar en pocos pasos:
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Pasos para Inscribirse
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-2xl mb-2">1</div>
                    <div className="text-gray-700 text-sm font-medium">Elige centro y fecha</div>
                    <div className="text-gray-500 text-xs mt-1">Consulta disponibilidad online</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-2xl mb-2">2</div>
                    <div className="text-gray-700 text-sm font-medium">Completa el registro</div>
                    <div className="text-gray-500 text-xs mt-1">Datos personales y foto</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-2xl mb-2">3</div>
                    <div className="text-gray-700 text-sm font-medium">Realiza el pago</div>
                    <div className="text-gray-500 text-xs mt-1">Tarjeta o transferencia</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Consulta las <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline">fechas y precios actualizados</a> de los exámenes Cambridge en nuestra sección dedicada. Los centros más populares en Madrid suelen llenar plazas rápidamente, especialmente en convocatorias de junio y diciembre.
              </p>
            </section>

            {/* Section 5 */}
            <section id="inversion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Merece la Inversión el B1 Cambridge?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Comparado con otros exámenes de inglés, el B1 Preliminary ofrece una excelente relación calidad-precio. Veamos por qué:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Ventajas del B1 Cambridge
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Certificado que no caduca nunca</li>
                    <li>• Reconocimiento internacional amplio</li>
                    <li>• Precio competitivo vs IELTS/TOEFL</li>
                    <li>• Certificado incluido en el precio</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Retorno de la inversión
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mejora tu CV permanentemente</li>
                    <li>• Acceso a más ofertas de empleo</li>
                    <li>• Cumple requisitos universitarios</li>
                    <li>• Base para progresar a B2/C1</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Mientras que el IELTS (200-250€) y el TOEFL (200-260€) caducan a los 2 años, el B1 Cambridge (115-140€) <strong>no caduca nunca</strong>. A largo plazo, es la opción más económica y práctica.
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
                  El <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline font-medium">examen B1 Cambridge</a> tiene un precio de entre 115€ y 140€, con costes adicionales opcionales de preparación. Comparado con otros exámenes de inglés con validez temporal, el B1 Preliminary representa la opción más rentable a largo plazo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> ofrecemos cursos preparatorios que maximizan tus probabilidades de aprobar a la primera, optimizando así tu inversión total. Consulta nuestros <a href="/blog/registro-cambridge/" className="text-emerald-600 hover:underline font-medium">pasos de registro</a> para empezar.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para certificar tu B1?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Prepárate con nosotros y aprueba a la primera. Te ayudamos con la inscripción y la preparación completa del examen.
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
                <a href="/examenes-cambridge/b1-preliminary/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Guía Completa del B1 Preliminary
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge B1: formato, estructura y preparación.</p>
                </a>
                <a href="/blog/registro-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cómo Registrarse para Cambridge
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