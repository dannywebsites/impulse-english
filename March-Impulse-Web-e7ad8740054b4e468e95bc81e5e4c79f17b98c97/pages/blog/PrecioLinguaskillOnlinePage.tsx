import React, { useState, useEffect } from 'react';
import { Euro, Clock, ChevronDown, ChevronUp, CheckCircle, Globe, Calculator, CreditCard } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Precio Linguaskill Online 2026: Costes del Examen",
    description: "Precio actualizado del examen Linguaskill online: 130€ completo o modalidad modular. Descuentos para estudiantes universitarios.",
    url: `${businessInfo.url}/blog/precio-linguaskill-online`,
    datePublished: "2025-01-13"
  });

export const faqs = [
    {
      question: "¿El precio de 130€ incluye el certificado oficial?",
      answer: "Sí, el precio del test Linguaskill online de 130€ incluye tu certificado digital oficial Cambridge con validez internacional. Recibirás el documento PDF descargable en 6 días laborables, especificando tu nivel CEFR conseguido en cada habilidad evaluada. No existen costes ocultos ni tasas adicionales por emisión de certificado o envío de resultados a instituciones."
    }

  ,
    {
      question: "¿Puedo obtener descuentos si repito el examen?",
      answer: "Cambridge no ofrece descuentos oficiales por repetición del Linguaskill completo, deberás pagar nuevamente 130€ por intento. Sin embargo, la modalidad modular permite repetir únicamente habilidades específicas por 48-75€ en lugar del precio completo. Algunos centros examinadores ofrecen paquetes de dos convocatorias con descuento del 10-15% si compras ambas matrículas simultáneamente, aunque esta práctica no está generalizada."
    },
    {
      question: "¿Qué incluye exactamente el precio del examen online?",
      answer: "El precio cubre acceso a la plataforma de examen durante tu sesión programada, supervisión remota mediante proctoring online, evaluación automática mediante inteligencia artificial Cambridge, corrección humana del módulo Writing, emisión del certificado digital oficial y soporte técnico durante el examen. No incluye material de preparación, tutorías, ni reembolsos por problemas técnicos ajenos a la plataforma oficial de Cambridge."
    },
    {
      question: "¿Los estudiantes universitarios pagan menos en todos los centros?",
      answer: "El descuento universitario de 120€ (frente a 130€ estándar) aplica únicamente en centros participantes del \"University Project\" para alumnos de universidades públicas españolas. Necesitarás acreditar tu condición de estudiante con matrícula vigente. Universidades privadas y centros no asociados mantienen el precio estándar. Este descuento representa la principal diferencia de precio dentro del mercado español para Linguaskill online."
    },
    {
      question: "¿Cuánto cuesta si solo necesito certificar Speaking o Writing?",
      answer: "Los módulos individuales Speaking y Writing cuestan aproximadamente 48-60€ cada uno cuando se compran por separado, siempre que el centro examinador ofrezca esta opción modular. La duración total es menor (15-20 minutos para Speaking, 45 minutos para Writing) y recibes certificación parcial oficial especificando únicamente la habilidad evaluada. Esta modalidad ahorra 70-82€ respecto al examen completo de cuatro habilidades."
    }
  ];

export default function PrecioLinguaskillOnlinePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const priceComparison = [
    { country: "España", price: "130€", notes: "Precio estándar, 120€ universitarios" },
    { country: "Reino Unido", price: "£115 (~135€)", notes: "Online Excellence" },
    { country: "Alemania", price: "€230", notes: "Proveedores privados" },
    { country: "Suiza", price: "340 CHF (~360€)", notes: "Mercado más costoso" },
    { country: "Italia", price: "€120-140", notes: "Precios intermedios" }
  ];

  const modulesPricing = [
    { module: "Examen Completo (4 habilidades)", price: "130€", duration: "~2 horas" },
    { module: "Reading & Listening", price: "~75€", duration: "60-85 min" },
    { module: "Speaking", price: "~50-60€", duration: "15-20 min" },
    { module: "Writing", price: "~48-55€", duration: "45 min" }
  ];

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG" alt="Aula tecnológica preparación Linguaskill Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Precio Linguaskill Online' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Precios Linguaskill
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Precio del Test Linguaskill Online: Guía Completa 2026
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Descubre el precio del test Linguaskill online en 2026. Costes detallados por módulo, descuentos disponibles y comparativa completa.
            </p>
          </div>
        </div>
      </header>

      {/* Price Highlight */}
      <section className="py-8 bg-green-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-green-600 font-medium">Precio Oficial España 2026</p>
                  <p className="text-4xl font-bold text-zinc-900">130€ <span className="text-lg font-normal text-zinc-500">examen completo</span></p>
                  <p className="text-sm text-zinc-500">120€ para estudiantes universitarios</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-zinc-500">Resultados en</p>
                  <p className="text-2xl font-bold text-green-600">48h - 6 días</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-zinc-600 leading-relaxed">
                El precio del <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Linguaskill online</a> varía según el formato elegido, pero generalmente oscila entre 120€ y 135€
                para el examen completo en España. Este test de Cambridge, que utiliza inteligencia artificial adaptativa,
                evalúa tu nivel de inglés con resultados disponibles en 6 días. La inversión incluye certificación oficial
                reconocida por CRUE y la posibilidad de realizar el examen desde casa.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Precio Oficial del Linguaskill: Desglose Completo
              </h2>
              <p className="text-zinc-600 mb-6">
                <strong>El test Linguaskill online tiene un precio estándar de 130€ en España para la modalidad completa.</strong> Este
                coste incluye las cuatro habilidades evaluadas: Reading, Listening, Writing y Speaking, junto con tu certificado
                oficial Cambridge alineado con el Marco Común Europeo de Referencia (CEFR).
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <h4 className="font-bold text-zinc-900 mb-3">El precio incluye:</h4>
                  <ul className="space-y-2">
                    {["4 habilidades evaluadas", "Certificado digital oficial", "Supervisión online (proctoring)", "Resultados en 48h-6 días", "Soporte técnico durante el examen"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h4 className="font-bold text-zinc-900 mb-3">Descuento universitario:</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-2">120€</p>
                  <p className="text-sm text-zinc-600">
                    Los estudiantes de universidades públicas españolas pueden acceder a un precio reducido mediante el
                    "University Project", un descuento del 7,7%.
                  </p>
                </div>

              </div>

              <p className="text-zinc-600">
                El precio único cubre todas las modalidades sin recargos adicionales: puedes elegir entre Linguaskill General
                (inglés cotidiano y académico) o Business (contextos profesionales) sin diferencia económica.
              </p>
            </section>

            {/* Section 2 - Modular Pricing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Opciones Modulares: Precio por Habilidad Individual
              </h2>
              <p className="text-zinc-600 mb-6">
                <strong>Linguaskill permite comprar módulos separados con precios aproximados de 48-75€ por habilidad.</strong> Esta
                flexibilidad resulta especialmente útil cuando necesitas certificar competencias específicas sin pagar por el examen completo.
              </p>

              <div className="bg-zinc-50 rounded-xl overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-zinc-100">
                    <tr>
                      <th className="text-left p-4 font-bold text-zinc-900">Módulo</th>
                      <th className="text-center p-4 font-bold text-zinc-900">Precio</th>
                      <th className="text-center p-4 font-bold text-zinc-900">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modulesPricing.map((item, index) => (
                      <tr key={index} className={index === 0 ? "bg-green-50" : ""}>
                        <td className="p-4 text-zinc-700">{item.module}</td>
                        <td className="p-4 text-center font-bold text-green-600">{item.price}</td>
                        <td className="p-4 text-center text-zinc-500">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800">
                  <strong>Advertencia importante:</strong> No todos los centros examinadores ofrecen módulos individuales.
                  Verifica disponibilidad antes de matricularte, ya que algunos solo administran el examen completo.
                </p>
              </div>
            </section>

            {/* Section 3 - International Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Comparativa Internacional: Precios por Región
              </h2>
              <p className="text-zinc-600 mb-6">
                <strong>Los precios del Linguaskill varían significativamente entre países.</strong> Esta disparidad refleja
                diferencias en costes operativos locales, poder adquisitivo regional y estructuras de centros examinadores autorizados.
              </p>

              <div className="bg-zinc-50 rounded-xl overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-zinc-100">
                    <tr>
                      <th className="text-left p-4 font-bold text-zinc-900">País</th>
                      <th className="text-center p-4 font-bold text-zinc-900">Precio</th>
                      <th className="text-left p-4 font-bold text-zinc-900">Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceComparison.map((item, index) => (
                      <tr key={index} className={item.country === "España" ? "bg-green-50" : ""}>
                        <td className="p-4 text-zinc-700 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-zinc-400" />
                          {item.country}
                        </td>
                        <td className="p-4 text-center font-bold text-zinc-900">{item.price}</td>
                        <td className="p-4 text-zinc-500 text-sm">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">
                  <strong>Tip estratégico:</strong> Un Linguaskill obtenido en España tiene idéntico reconocimiento que uno
                  británico o suizo. La ubicación solo determina el coste de acceso, no la calidad ni aceptación del resultado.
                </p>
              </div>
            </section>

            {/* Section 4 - Preparation Costs */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Costes de Preparación: Material y Cursos Adicionales
              </h2>
              <p className="text-zinc-600 mb-6">
                <strong>La preparación efectiva para Linguaskill requiere inversión adicional de 10-200€</strong> en materiales
                oficiales Cambridge y cursos especializados.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <Calculator className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-zinc-900"><a href="https://www.cambridge.es/en/catalogue/exams" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline">Linguaskill Trainer</a></h4>
                  <p className="text-2xl font-bold text-green-600 my-2">~23€</p>
                  <p className="text-sm text-zinc-500">Material oficial Cambridge con prueba práctica completa</p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <CreditCard className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-zinc-900">Plataformas Online</h4>
                  <p className="text-2xl font-bold text-blue-600 my-2">~99€</p>
                  <p className="text-sm text-zinc-500">Acceso a 1,400+ ejercicios y pruebas simuladas</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-zinc-900">Cursos Presenciales</h4>
                  <p className="text-2xl font-bold text-green-600 my-2">79€/mes</p>
                  <p className="text-sm text-zinc-500">Preparación con profesor en Impulse English Academy</p>
                </div>

              </div>

              <div className="bg-zinc-100 rounded-xl p-6">
                <p className="text-zinc-700">
                  <strong>Recomendación práctica:</strong> Comienza con material gratuito (Cambridge ofrece pruebas demo sin coste)
                  para evaluar tu nivel inicial. Si estás a menos de 6 meses de tu objetivo CEFR, invierte en preparación profesional.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas Frecuentes sobre el Precio del Linguaskill Online
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-zinc-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between bg-zinc-50 hover:bg-zinc-100 transition-colors"
                    >
                      <span className="font-semibold text-zinc-900">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-zinc-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-zinc-600">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  El Linguaskill online ofrece una excelente relación calidad-precio a 130€ (120€ universitarios), incluyendo
                  certificación oficial Cambridge, resultados rápidos y la comodidad de realizarlo desde casa. Combinado con
                  preparación adecuada, es una inversión que puede abrirte puertas académicas y profesionales.
                </p>
                <p className="text-white/90">
                  En nuestra <a href="/academia-ingles-barrio-del-pilar" className="text-white hover:underline font-bold">academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada" className="text-white hover:underline font-bold">junto a La Vaguada</a>, te preparamos para el <a href="/linguaskill" className="text-white hover:underline font-bold">Linguaskill</a> por solo <strong>79€/mes</strong>,
                  con profesores especializados y materiales actualizados. También ofrecemos <a href="/cursos-ingles/adultos" className="text-white hover:underline font-bold">cursos de inglés para adultos</a> y preparación para otros <a href="/examenes-cambridge" className="text-white hover:underline font-bold">exámenes Cambridge</a>.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Prepárate para Linguaskill con nosotros
                    </h3>
                    <p className="text-zinc-400">
                      Cursos de preparación desde 79€/mes con profesores expertos en certificaciones Cambridge.
                    </p>
                  </div>
                  <a
              href="/contacto"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Solicitar información
                  </a>
                </div>

              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/linguaskill/precios-fechas" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-green-600">PRECIOS Y SEDES</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Linguaskill: Precios, Sedes y Servicios 2026</h4>
                </a>
                <a href="/linguaskill" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-green-600">REGISTRO</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Cómo Registrarse para el Examen Linguaskill</h4>
                </a>
              </div>
            </section>
          </div>

        </div>
      </article>

      <LeadForm />

      {/* External Authority Link */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-blue hover:underline"
          >
            → Más información en Cambridge English - Linguaskill oficial
          </a>
        </div>
      </section>

      <Footer />

</>
  );
}
