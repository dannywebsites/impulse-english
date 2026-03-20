import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Euro, Clock, ChevronDown, ChevronUp, CheckCircle, Globe, Calculator, CreditCard } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export default function PrecioLinguaskillOnlinePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Precio Linguaskill Online 2026: Costes del Examen | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Precio Linguaskill Online 2026: Costes del Examen",
    description: "Precio actualizado del examen Linguaskill online: 130€ completo o modalidad modular. Descuentos para estudiantes universitarios.",
    url: `${businessInfo.url}/linguaskill/precio-linguaskill-online`,
    datePublished: "2025-01-13"
  });

  const faqs = [
    {
      question: "¿Cuánto dura el examen Linguaskill?",
      answer: "El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular."
    },
    {
      question: "¿Se puede suspender Linguaskill?",
      answer: "Linguaskill no se puede suspender ni aprobar; es un examen adaptativo que certifica el nivel real de inglés del candidato, desde A1 hasta C1/C2, ajustando las preguntas según sus respuestas. Esto permite una evaluación precisa y justa basada en competencias, sin calificaciones tradicionales de aprobado o suspenso."
    },
    {
      question: "¿Cuánto tarda en llegar el certificado Linguaskill?",
      answer: "El certificado Linguaskill suele entregarse en formato digital aproximadamente 48 horas hábiles tras completar el examen. Resultados de reading y listening se obtienen de inmediato, mientras writing y speaking tardan hasta 48 horas. El certificado es válido internacionalmente y se envía por correo electrónico."
    },
    {
      question: "¿Puedo repetir solo una parte de Linguaskill?",
      answer: "En 2026, Linguaskill permite repetir solo módulos individuales (Reading, Listening, Writing o Speaking) sin necesidad de hacer el examen completo, facilitando mejorar puntuaciones específicas. Esta opción ofrece flexibilidad, ahorro de tiempo y mantiene la validez oficial del certificado para cada destreza evaluada."
    },
    {
      question: "¿Cuántas veces puedo hacer Linguaskill?",
      answer: "Linguaskill puede realizarse múltiples veces sin límite, permitiendo repetir módulos individuales (Reading, Listening, Writing y Speaking) para mejorar la puntuación sin hacer el examen completo. Esta flexibilidad, junto con resultados en 48 horas, facilita certificaciones adaptadas a objetivos académicos y profesionales."
    },
    {
      question: "¿Qué puntuación es B2 en Linguaskill?",
      answer: "La puntuación que define el nivel B2 en Linguaskill de Cambridge abarca entre 160 y 179 puntos. Este nivel 'Independent User' acredita habilidades sólidas para comunicarse y comprender textos complejos, siendo fundamental para acceso académico y profesional, con certificación online, modular y adaptativa en 2026."
    }
  ];

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
      <SEOHead
        title="Precio Linguaskill Online 2026: Guía Completa de Costes"
        description="Precio actualizado del examen Linguaskill online 2026: 130€ completo o modalidad modular. Descuentos universitarios, comparativa internacional y costes de preparación en España."
        keywords="precio linguaskill online, cuánto cuesta linguaskill, linguaskill precio españa, examen linguaskill coste, linguaskill descuento universitario, precio módulos linguaskill"
        canonical="/linguaskill/precio-online"
        ogType="article"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blogs-impulse' },
                { label: 'Precio Linguaskill Online' }
              ]}
              variant="light"
            />
            <div className="flex items-center gap-2 mb-4 mt-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Precios Linguaskill
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Precio del Test Linguaskill Online: Guía Completa 2026
            </h1>
            <p className="text-xl text-white/90 font-light mb-6">
              Descubre el precio del test Linguaskill online en 2026. Costes detallados por módulo, descuentos disponibles y comparativa completa.
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <Euro className="w-4 h-4" />
                Precios 2026
              </span>
            </div>
          </div>
        </div>
      </section>

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
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-white">
                        <p className="text-zinc-600">{faq.answer}</p>
                      </div>
                    )}
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
                  En nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-white hover:underline font-bold">academia en Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-white hover:underline font-bold">junto a La Vaguada</Link>, te preparamos para el <Link to="/examenes-cambridge/linguaskill" className="text-white hover:underline font-bold">Linguaskill</Link> por solo <strong>79€/mes</strong>,
                  con profesores especializados y materiales actualizados. También ofrecemos <Link to="/ingles-la-vaguada/adultos" className="text-white hover:underline font-bold">cursos de inglés para adultos</Link> y preparación para otros <Link to="/examenes-cambridge" className="text-white hover:underline font-bold">exámenes Cambridge</Link>.
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
                  <Link
                    to="/contacto"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Solicitar información
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/linguaskill/precios-sedes" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-green-600">PRECIOS Y SEDES</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Linguaskill: Precios, Sedes y Servicios 2026</h4>
                </Link>
                <Link to="/linguaskill/registro" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-green-600">REGISTRO</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Cómo Registrarse para el Examen Linguaskill</h4>
                </Link>
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

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
