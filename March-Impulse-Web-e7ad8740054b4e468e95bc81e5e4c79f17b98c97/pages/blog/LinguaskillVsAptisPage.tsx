import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, Scale, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

const vsAptisFaqs = [
  {
    question: "¿Linguaskill o APTIS?",
    answer: "Linguaskill destaca por su evaluación adaptativa con IA, resultados en 48 horas y amplia aceptación en universidades y empleos globales. APTIS ofrece diagnóstico detallado y es ideal para evaluaciones masivas organizacionales. Ambos miden niveles A1-C2 según el MCER, pero Linguaskill ofrece mayor flexibilidad modular y online en 2025/26."
  },
  {
    question: "¿Cambridge o Linguaskill cuál es mejor?",
    answer: "Cambridge ofrece evaluación integral y fija por niveles, ideal para estudios formales con certificación permanente. Linguaskill destaca por rapidez, flexibilidad, modalidad online y adaptabilidad al nivel real, con resultados en 48 horas y módulos repetibles. Ambos, de Cambridge English, difieren en formato y objetivos de certificación."
  },
  {
    question: "¿Cambridge o IELTS para España?",
    answer: "Cambridge ofrece certificación permanente sin caducidad, ideal para estudios oficiales y empleo. IELTS proporciona puntuación válida 2 años con opción digital desde casa, conveniente para procesos migratorios. En España, Cambridge tiene mayor reconocimiento en universidades; IELTS es común en visados a Reino Unido y Australia."
  },
  {
    question: "¿Diferencia entre Cambridge y Linguaskill?",
    answer: "Linguaskill ofrece evaluación online bajo demanda, modular y adaptativa con IA, niveles B1-C2 (140-210 puntos) y resultados rápidos. Los exámenes Cambridge tradicionales (B2 First, C1 Advanced, C2 Proficiency) requieren centros presenciales, fechas fijas y certificación estructurada detallada con certificado físico permanente."
  },
  {
    question: "¿Es Linguaskill equivalente a IELTS?",
    answer: "Linguaskill no es equivalente a IELTS, aunque ambos exámenes alinean con el MCER y permiten comparar resultados mediante la Cambridge English Scale. Linguaskill evalúa niveles B1-C2 con puntuaciones 140-210, es totalmente online bajo demanda con evaluación híbrida humana-IA, permite pruebas modulares y ofrece versión general y Business. IELTS requiere centros de examen presenciales, entrevista oral cara a cara y módulos Academic/General Training."
  },
  {
    question: "¿Se acepta LANGUAGECERT en el Reino Unido?",
    answer: "LanguageCert se acepta en el Reino Unido como organización regulada por Ofqual. Sus exámenes SELT están aprobados por UK Visas and Immigration para visados, residencia y ciudadanía. LanguageCert International ESOL está reconocido por universidades e instituciones educativas británicas, alineado con el MCER y el Regulated Qualifications Framework (RQF)."
  },
  {
    question: "¿Qué examen de inglés se acepta en todo el mundo?",
    answer: "Los exámenes de Cambridge English se aceptan mundialmente, reconocidos por más de 25.000 organizaciones en 130 países, incluyendo universidades como Stanford, University of Sydney y King's College London. TOEFL e IELTS también gozan de reconocimiento global. Cambridge ofrece certificados sin caducidad (B2 First, C1 Advanced, C2 Proficiency) válidos para admisión universitaria y visados en Reino Unido, EE.UU., Australia, Canadá, Irlanda y Nueva Zelanda."
  }
];

export const articleSchema = generateArticleSchema({
    headline: "Linguaskill vs Aptis: ¿Cuál Elegir? Comparativa Completa 2025",
    description: "Comparativa detallada entre Linguaskill y Aptis: formato adaptativo vs estructurado, resultados en 48 vs 72 horas, reconocimiento internacional y flexibilidad.",
    url: `${businessInfo.url}/blog/linguaskill-vs-aptis`,
    datePublished: "2025-12-10"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Cuál es más fácil, Linguaskill o Aptis?",
      answer: "La dificultad es comparable ya que ambos evalúan el mismo espectro CEFR de A1 a C2. Linguaskill puede parecer más desafiante porque su formato adaptativo ajusta preguntas según tu desempeño, mientras que Aptis presenta preguntas con dificultad progresiva predecible. La \"facilidad\" depende de tu nivel real: ambos exámenes identificarán con precisión tu competencia lingüística sin posibilidad de inflarlo artificialmente."
    }

  ,
    {
      question: "¿Puedo preparar ambos exámenes con los mismos recursos?",
      answer: "Sí, parcialmente. Ambos evalúan las cuatro destrezas con tareas similares (redacciones, comprensión auditiva, expresión oral), por lo que mejorar tu inglés general beneficia ambos exámenes. Sin embargo, familiarizarse con el formato específico es crucial: Linguaskill utiliza interfaces digitales únicas con tecnología de reconocimiento de voz, mientras que Aptis tiene secciones particulares de Grammar y Vocabulary. Dedica al menos 10-15 horas a practicar con simulacros del examen específico que elijas."
    },
    {
      question: "¿Cuánto cuestan Linguaskill y Aptis en 2025?",
      answer: "En España, Linguaskill completo (cuatro destrezas) cuesta aproximadamente 130€ (120€ para estudiantes universitarios), con módulos individuales entre 48-75€ cada uno. Aptis General ronda los 130-150€ completo, mientras que Aptis Advanced alcanza 160-180€. Los precios varían según el centro examinador y ubicación geográfica. Algunos centros ofrecen descuentos para grupos o estudiantes matriculados en programas específicos de preparación."
    },
    {
      question: "¿Cada cuánto tiempo puedo repetir el examen?",
      answer: "Ambos exámenes permiten repeticiones sin períodos de espera obligatorios, aunque se recomienda espaciar intentos al menos 4-6 semanas para permitir mejora real del nivel. Linguaskill permite política \"My best score\" donde puedes presentar tu mejor resultado de múltiples intentos. Aptis no limita repeticiones, pero cada intento requiere pago completo. Considera que repetir sin preparación adicional raramente mejora significativamente la puntuación obtenida."
    },
    {
      question: "¿Los examinadores de Speaking y Writing son nativos?",
      answer: "En Linguaskill, el Speaking es evaluado mediante IA entrenada con miles de muestras de voz, complementada con revisión humana de examinadores certificados de Cambridge (no necesariamente nativos). Aptis emplea exclusivamente examinadores humanos certificados por British Council, siguiendo rúbricas estandarizadas internacionalmente. Ambos sistemas garantizan evaluación objetiva mediante criterios CEFR, independientemente de la nacionalidad del evaluador."
    }
  ];

export default function LinguaskillVsAptisPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const comparisonData = [
    { feature: "Organismo", linguaskill: "Cambridge Assessment English", aptis: "British Council" },
    { feature: "Formato", linguaskill: "Adaptativo (IA)", aptis: "Estructurado fijo" },
    { feature: "Duración total", linguaskill: "~180 minutos", aptis: "~170 minutos" },
    { feature: "Resultados", linguaskill: "48 horas", aptis: "72 horas" },
    { feature: "Módulos separados", linguaskill: "Sí", aptis: "Sí (limitado)" },
    { feature: "Online desde casa", linguaskill: "Sí (completo)", aptis: "Parcial" },
    { feature: "Precio aproximado", linguaskill: "~130€", aptis: "130-150€" },
    { feature: "Validez certificado", linguaskill: "Sin caducidad", aptis: "Sin caducidad" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src={blogImages.technologyClassroom.url} alt="Aula tecnológica preparación Linguaskill Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
              items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Linguaskill vs Aptis' }
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
                  Linguaskill vs Aptis: ¿Cuál Elegir? Comparativa Completa 2025
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Ambos exámenes computarizados evalúan las cuatro destrezas lingüísticas y entregan resultados en menos de una semana, pero presentan diferencias importantes en formato, velocidad y flexibilidad.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-orange-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#formato" className="text-orange-600 hover:text-orange-700 transition-colors">→ Formato y Metodología de Evaluación</a></li>
                <li><a href="#resultados" className="text-orange-600 hover:text-orange-700 transition-colors">→ Velocidad de Resultados: 48 vs 72 Horas</a></li>
                <li><a href="#flexibilidad" className="text-orange-600 hover:text-orange-700 transition-colors">→ Flexibilidad y Modalidades de Examen</a></li>
                <li><a href="#reconocimiento" className="text-orange-600 hover:text-orange-700 transition-colors">→ Reconocimiento y Aplicaciones</a></li>
                <li><a href="#tabla" className="text-orange-600 hover:text-orange-700 transition-colors">→ Tabla Comparativa</a></li>
                <li><a href="#faq" className="text-orange-600 hover:text-orange-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </article>

          {/* FAQ Section - HIGH UP before main content */}
          <FAQSection faqs={vsAptisFaqs} title="Preguntas Frecuentes sobre Linguaskill vs Aptis" />

          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              ¿Necesitas certificar tu nivel de inglés pero no sabes si elegir <a href="/linguaskill/" className="text-orange-600 hover:underline font-medium">Linguaskill</a> o Aptis? Ambos exámenes computarizados evalúan las cuatro destrezas lingüísticas y entregan resultados en menos de una semana, pero presentan diferencias importantes en formato, velocidad y flexibilidad. En esta comparativa analizamos los aspectos clave que distinguen a estos dos certificados para que puedas tomar una decisión informada según tu situación académica o profesional. Si prefieres los <a href="/examenes-cambridge/" className="text-orange-600 hover:underline font-medium">exámenes Cambridge tradicionales</a> como el <a href="/examenes-cambridge/b2-first/" className="text-orange-600 hover:underline font-medium">B2 First</a>, también tenemos opciones para ti.
            </p>

            {/* Section 1 */}
            <section id="formato" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Formato y Metodología de Evaluación: Adaptativo vs Estructurado
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Linguaskill</strong> utiliza tecnología adaptativa desarrollada por Cambridge Assessment English que ajusta la dificultad de las preguntas en tiempo real durante las secciones de Reading y Listening. Esto significa que el sistema presenta preguntas más difíciles si respondes correctamente o más sencillas si fallas, permitiendo determinar tu nivel exacto en menos tiempo. El examen completo dura aproximadamente 180 minutos, con 60-85 minutos para Reading y Listening combinados, 45 minutos para Writing y 15 minutos para Speaking.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong><a href="https://www.britishcouncil.es/examenes/aptis" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Aptis</a></strong>, desarrollado por British Council, emplea un formato más estructurado con preguntas predeterminadas que evalúan desde nivel A1 hasta C2. La prueba completa requiere unas 2 horas y 50 minutos: Grammar y Vocabulary (25 minutos), Reading (30 minutos), Listening (25 minutos), Speaking (12 minutos) y Writing (50 minutos). Esta estructura fija permite a los candidatos familiarizarse mejor con el formato durante la preparación.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo práctico:</strong> Si prefieres saber exactamente qué esperar y practicar con materiales estándar, Aptis resulta más predecible. Si buscas una evaluación que se ajuste dinámicamente a tu nivel, elige Linguaskill.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="resultados" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Velocidad de Resultados y Certificación: 48 vs 72 Horas
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-blue-900 text-lg mb-3">Linguaskill - 48 horas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Reading y Listening: puntuaciones preliminares inmediatas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Writing y Speaking: 48 horas (evaluación humana + IA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Certificado digital disponible online</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 text-lg mb-3">Aptis - 72 horas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Todas las destrezas evaluadas por examinadores certificados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Incluye Lexile Reading Score adicional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Verificación blockchain para autenticidad</span>
                    </li>
                  </ul>
                </div>

              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Esta diferencia de 24 horas puede resultar determinante en procesos con plazos ajustados como solicitudes universitarias, trámites de visado o contrataciones urgentes. Linguaskill ofrece ventaja competitiva en situaciones donde cada día cuenta, mientras que las 72 horas de Aptis siguen siendo considerablemente rápidas comparadas con exámenes tradicionales que requieren hasta cuatro semanas.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Advertencia importante:</strong> Ambos exámenes pueden experimentar retrasos en períodos de alta demanda. Planifica realizar tu prueba con al menos una semana de margen respecto a tu fecha límite.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="flexibilidad" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Flexibilidad y Modalidades de Examen: Online vs Presencial
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Linguaskill</strong> destaca por su flexibilidad excepcional al permitir realizar el examen completamente online desde casa con supervisión remota mediante AI-Exam, o en centros autorizados de Cambridge. Los candidatos pueden inscribirse para el examen completo o módulos individuales según necesidad, permitiendo certificar únicamente Speaking y Writing si ya cuentan con certificación de Reading y Listening.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Aptis</strong> también ofrece opciones modulares pero tradicionalmente requiere acudir a un centro autorizado del British Council para realizar la prueba en sesiones supervisadas presencialmente. Aunque existe Aptis Online disponible en algunos países desde 2023, la disponibilidad varía geográficamente y las fechas de convocatoria suelen ser más rígidas.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La posibilidad de examinar módulos por separado en ambas pruebas representa un ahorro considerable. Linguaskill Reading y Listening cuestan aproximadamente 75€, mientras que Speaking y Writing rondan los 75€ adicionales. Aptis mantiene precios similares con opciones de módulos individuales disponibles en centros específicos.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Recomendación práctica:</strong> Para máxima flexibilidad horaria y geográfica, Linguaskill desde casa es imbatible. Si prefieres un entorno controlado tradicional o no dispones de equipo informático adecuado, opta por Aptis en centro autorizado.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="reconocimiento" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Reconocimiento y Aplicaciones: Contexto Académico vs Empresarial
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    Linguaskill (Cambridge)
                  </h3>
                  <p className="text-gray-700 mb-3">Amplio reconocimiento en instituciones educativas superiores:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Reconocido oficialmente por CRUE en España</li>
                    <li>• Admisiones universitarias y programas Erasmus</li>
                    <li>• Acreditación de títulos universitarios</li>
                    <li>• 78% de universidades españolas lo aceptan para B2</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 text-lg mb-3 flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    Aptis (British Council)
                  </h3>
                  <p className="text-gray-700 mb-3">Preferido en contextos gubernamentales y corporativos:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Regulado por Ofqual (autoridad británica)</li>
                    <li>• Procesos de selección empresarial</li>
                    <li>• Requisitos de inmigración</li>
                    <li>• 65% de oposiciones públicas lo especifican</li>
                  </ul>
                </div>

              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Ambos certificados son válidos internacionalmente y alineados con el Marco Común Europeo de Referencia (CEFR), por lo que técnicamente tienen equivalencia en términos de nivel certificado. Sin embargo, la percepción institucional varía: universidades tienden a preferir Cambridge (Linguaskill), mientras que empresas y gobiernos confían en British Council (Aptis). Antes de inscribirte, verifica específicamente qué certificado acepta tu institución objetivo.
              </p>
            </section>

            {/* Comparison Table */}
            <section id="tabla" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tabla Comparativa: Linguaskill vs Aptis
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                      <th className="text-left p-4 font-semibold">Característica</th>
                      <th className="text-left p-4 font-semibold">Linguaskill</th>
                      <th className="text-left p-4 font-semibold">Aptis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="p-4 text-gray-700">{row.linguaskill}</td>
                        <td className="p-4 text-gray-700">{row.aptis}</td>
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
                        <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
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
                Conclusión: ¿Cuál Elegir?
              </h2>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Linguaskill y Aptis ofrecen certificación válida de inglés con reconocimiento internacional, pero se ajustan a necesidades diferentes:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-5">
                    <h3 className="font-bold text-blue-900 mb-2">Elige Linguaskill si:</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Priorizas resultados rápidos en 48 horas</li>
                      <li>• Necesitas flexibilidad para examinarte online desde casa</li>
                      <li>• Buscas reconocimiento universitario</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-5">
                    <h3 className="font-bold text-green-900 mb-2">Opta por Aptis si:</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Tu objetivo es contexto empresarial o gubernamental</li>
                      <li>• Prefieres formato estructurado tradicional</li>
                      <li>• Necesitas versiones especializadas (Advanced, Teachers)</li>
                    </ul>
                  </div>

                </div>

                <p className="text-gray-700 leading-relaxed">
                  Para prepararte eficazmente para cualquiera de estos exámenes con metodología personalizada y profesores certificados, en nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-orange-600 hover:underline font-medium">academia en Barrio del Pilar</a> ofrecemos <a href="/cursos-ingles/adultos/" className="text-orange-600 hover:underline font-medium">cursos de inglés para adultos</a> con preparación específica que maximizan tus posibilidades de éxito en la primera convocatoria.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda para decidir?</h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te orientamos sobre qué examen es mejor para tu situación y te preparamos con metodología especializada.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
              >
                Solicitar asesoramiento gratuito
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/linguaskill/" className="group bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                    Linguaskill: Guía Completa 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Todo lo que necesitas saber sobre el examen Linguaskill de Cambridge.</p>
                </a>
                <a href="/linguaskill/precios-fechas/" className="group bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                    Precio Linguaskill 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Descubre los precios actualizados y cómo reservar tu examen.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-600 hover:underline"
            >
              → Más información en Cambridge English - Linguaskill oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
