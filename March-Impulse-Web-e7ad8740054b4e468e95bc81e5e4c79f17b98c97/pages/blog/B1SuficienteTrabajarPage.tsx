import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Es Suficiente el B1 para Trabajar? Realidad del Mercado Laboral",
    description: "El B1 es suficiente para trabajos en atención al cliente, turismo y administración. Conoce qué empleos lo aceptan y cuándo necesitas B2 o superior.",
    url: `${businessInfo.url}/blog/b1-suficiente-trabajar`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Puedo trabajar en una multinacional con un B1?",
      answer: "Depende del puesto. Para roles administrativos o de soporte en multinacionales, un B1 puede ser suficiente. Sin embargo, para puestos que requieran negociación, presentaciones o comunicación constante con clientes internacionales, normalmente se exige B2 o superior. Algunas multinacionales aceptan B1 como mínimo para la contratación y ofrecen formación interna."
    }

  ,
    {
      question: "¿El B1 sirve para oposiciones en España?",
      answer: "Sí, muchas oposiciones en España aceptan el B1 como nivel mínimo de inglés, especialmente en administración general, correos y fuerzas de seguridad. Sin embargo, para cuerpos diplomáticos, traducción o puestos internacionales se suele exigir B2 o C1. Consulta siempre las bases específicas de cada convocatoria."
    },
    {
      question: "¿Qué salario puedo esperar con un nivel B1 de inglés?",
      answer: "El nivel de inglés por sí solo no determina el salario, pero tener un B1 certificado puede aumentar tu competitividad. En sectores como turismo o atención al cliente, el B1 puede suponer un incremento del 5-15% sobre el salario base. Para saltos salariales más significativos vinculados al idioma, el B2 o C1 marca mayor diferencia."
    },
    {
      question: "¿Cuánto tiempo tardaría en pasar de B1 a B2?",
      answer: "Con un B1 consolidado, alcanzar el B2 requiere generalmente entre 200 y 300 horas de estudio adicionales. En un curso intensivo de academia, esto equivale a unos 6-9 meses con 2-3 clases semanales. La práctica regular fuera del aula (lectura, podcasts, conversación) acelera significativamente el progreso."
    },
    {
      question: "¿Prefieren las empresas Cambridge B1 o Linguaskill?",
      answer: "Ambos son reconocidos por Cambridge y tienen alta aceptación. El certificado B1 Preliminary tiene la ventaja de no caducar, mientras que Linguaskill ofrece resultados más rápidos. Para el mercado laboral español, ambos son igualmente válidos, aunque algunas empresas específicas pueden tener preferencias. Lo importante es demostrar el nivel."
    }
  ];

export default function B1SuficienteTrabajarPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const sectorData = [
    {
      sector: "Turismo y Hostelería",
      level: "B1 suficiente",
      description: "Recepción, guías turísticos, agencias de viajes",
      icon: "✓"
    },
    {
      sector: "Atención al Cliente",
      level: "B1 suficiente",
      description: "Call centers, soporte técnico básico, retail",
      icon: "✓"
    },
    {
      sector: "Administración",
      level: "B1 suficiente",
      description: "Secretariado, gestión documental, logística",
      icon: "✓"
    },
    {
      sector: "Comercio Internacional",
      level: "B2 recomendado",
      description: "Negociación, importación/exportación",
      icon: "△"
    },
    {
      sector: "IT y Tecnología",
      level: "B2 mínimo",
      description: "Desarrollo, gestión de proyectos, consultoría",
      icon: "✗"
    },
    {
      sector: "Finanzas y Banca",
      level: "B2-C1 requerido",
      description: "Banca de inversión, auditoría internacional",
      icon: "✗"
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
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Estudiante preparándose para el mercado laboral con inglés B1" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'B1 Suficiente para Trabajar' }
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
                  ¿Es Suficiente el B1 para Trabajar? Realidad del Mercado Laboral
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Descubre en qué sectores el B1 abre puertas y cuándo necesitas un nivel superior para avanzar profesionalmente.
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
                <li><a href="#mercado-laboral" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ B1 en el Mercado Laboral Español</a></li>
                <li><a href="#sectores" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Sectores Donde el B1 es Suficiente</a></li>
                <li><a href="#cuando-b2" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cuándo Necesitas B2</a></li>
                <li><a href="#maximizar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo Maximizar tu B1 Profesionalmente</a></li>
                <li><a href="#subir-nivel" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plan para Subir de Nivel</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Una de las preguntas más frecuentes entre quienes obtienen su certificado de inglés es: <strong>¿me bastará un B1 para encontrar trabajo?</strong> La respuesta depende fundamentalmente de tu sector, tu puesto objetivo y la ciudad donde trabajes. En España, el B1 es el nivel más demandado en ofertas de empleo generalistas, pero hay sectores donde quedarse en este nivel puede limitar tu progresión. Analizamos la realidad del mercado laboral para que tomes la mejor decisión.
            </p>

            {/* Section 1 */}
            <section id="mercado-laboral" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El B1 en el Mercado Laboral Español
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Según datos recientes de portales de empleo españoles, aproximadamente el <strong>60% de las ofertas que requieren inglés</strong> solicitan un nivel B1 como mínimo. Esto convierte al <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline">B1 Preliminary</a> en la certificación más demandada para el mercado laboral general.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
                  <p className="text-gray-700 text-sm">de ofertas piden B1 mínimo</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">25%</div>
                  <p className="text-gray-700 text-sm">exigen B2 o superior</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">15%</div>
                  <p className="text-gray-700 text-sm">no especifican nivel</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En ciudades como Madrid, Barcelona y Valencia, donde la presencia internacional es mayor, la tendencia va hacia exigir niveles más altos. Sin embargo, para la mayoría del tejido empresarial español, el B1 sigue siendo un nivel perfectamente válido y competitivo.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> El B1 certificado por Cambridge no caduca, lo que significa que tu inversión en la certificación te acompañará toda tu carrera profesional, a diferencia de otros exámenes con validez temporal.
                </p>
              </div>
            </section>

            {/* Section 2 - Sectors */}
            <section id="sectores" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Sectores Donde el B1 es Suficiente
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todos los sectores tienen las mismas exigencias lingüísticas. Aquí te presentamos un análisis detallado por industria para que sepas exactamente dónde te posiciona tu nivel B1:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Sector</th>
                      <th className="text-left p-4 font-semibold">Nivel requerido</th>
                      <th className="text-left p-4 font-semibold">Puestos típicos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sectorData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.sector}</td>
                        <td className="p-4 text-gray-700">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            item.icon === '✓' ? 'bg-green-100 text-green-700' :
                            item.icon === '△' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {item.level}
                          </span>
                        </td>
                        <td className="p-4 text-gray-700 text-sm">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Turismo y Hostelería
                  </h3>
                  <p className="text-gray-700 text-sm">El sector turístico es uno de los más accesibles con B1. Puestos de recepción hotelera, guía turístico, agente de viajes y personal de aeropuerto valoran especialmente este nivel. La comunicación es directa y sobre temas predecibles.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Comercio y Retail
                  </h3>
                  <p className="text-gray-700 text-sm">Grandes cadenas de retail, especialmente en zonas turísticas, buscan personal con B1 para atender a clientes internacionales. El vocabulario es específico y repetitivo, lo que facilita el desempeño con este nivel.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="cuando-b2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cuándo Necesitas un B2 o Superior
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Hay situaciones profesionales claras donde el B1 se queda corto. Si te identificas con alguno de estos perfiles, considera seriamente dar el salto al <a href="/blog/diferencia-b2-c1/" className="text-emerald-600 hover:underline">nivel B2 o C1</a>:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Reuniones y presentaciones en inglés
                  </h3>
                  <p className="text-gray-700">Si tu trabajo implica participar activamente en reuniones internacionales, defender propuestas o realizar presentaciones, necesitarás al menos un B2. El B1 permite seguir la conversación, pero no participar con la fluidez y precisión necesarias.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Redacción de informes y documentación técnica
                  </h3>
                  <p className="text-gray-700">Elaborar informes detallados, propuestas comerciales o documentación técnica en inglés requiere un dominio del vocabulario y las estructuras gramaticales que va más allá del B1. El B2 te permite expresar matices y argumentar con claridad.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Negociación con clientes internacionales
                  </h3>
                  <p className="text-gray-700">La negociación requiere persuasión, manejo de objeciones y comprensión de matices culturales. Estas habilidades comunicativas avanzadas necesitan un nivel B2-C1 para ser efectivas.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Importante:</strong> Si estás buscando promoción interna en una empresa internacional, el salto de B1 a B2 puede ser determinante. Muchas empresas usan el nivel de inglés como filtro para ascensos y asignaciones internacionales.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="maximizar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Maximizar tu B1 Profesionalmente
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Mientras decides si subir de nivel, hay formas inteligentes de sacar el máximo partido a tu B1 actual en el entorno laboral:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Especializa tu vocabulario
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Aprende terminología específica de tu sector</li>
                    <li>• Domina las frases clave de emails profesionales</li>
                    <li>• Practica presentaciones cortas sobre tu trabajo</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Mejora tu confianza oral
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Participa en intercambios de idiomas</li>
                    <li>• Prepara guiones para llamadas telefónicas</li>
                    <li>• Practica small talk profesional</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En tu CV, incluye siempre la certificación oficial: "Cambridge B1 Preliminary - Pass/Merit/Distinction". Esto tiene mucho más peso que simplemente escribir "nivel intermedio de inglés" y es verificable por cualquier empleador.
              </p>
            </section>

            {/* Section 5 */}
            <section id="subir-nivel" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan para Subir de Nivel: De B1 a B2
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Si has decidido que necesitas el B2 para tus objetivos profesionales, aquí tienes un plan realista para conseguirlo:
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Cronograma Realista B1 → B2
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Mes 1-2</div>
                    <div className="text-gray-600 text-sm">Consolidar gramática intermedia</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Mes 3-4</div>
                    <div className="text-gray-600 text-sm">Vocabulario avanzado y reading</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Mes 5-6</div>
                    <div className="text-gray-600 text-sm">Writing y speaking avanzado</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Mes 7-9</div>
                    <div className="text-gray-600 text-sm">Simulacros y examen</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La forma más eficiente de dar el salto es combinar <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">clases en academia</a> con práctica autónoma diaria. En <a href="/metodologia/" className="text-emerald-600 hover:underline">Impulse English Academy</a>, nuestros cursos de preparación B2 First están diseñados específicamente para estudiantes que parten de un B1 consolidado.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo:</strong> No esperes a "sentirte preparado" para empezar a estudiar para el B2. El proceso de preparación es en sí mismo lo que te lleva al nivel. Muchos estudiantes descubren que están más cerca del B2 de lo que pensaban.
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
                  El <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline font-medium">B1 Preliminary</a> es suficiente para una amplia gama de empleos en España, especialmente en turismo, atención al cliente y administración. Sin embargo, si aspiras a puestos con mayor responsabilidad internacional o en sectores como tecnología y finanzas, planifica tu progresión hacia el B2.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> te ayudamos tanto a certificar tu B1 como a preparar tu salto al B2 First con <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">metodología probada</a> y profesores altamente cualificados especializados en exámenes Cambridge.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Quieres mejorar tu inglés profesional?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Ya sea certificar tu B1 o dar el salto al B2, en Impulse te acompañamos con clases adaptadas a tus objetivos laborales.
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
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge B1: formato, precio y preparación.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Mejora tu inglés profesional con nuestros cursos especializados.</p>
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