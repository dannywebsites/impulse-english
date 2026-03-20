import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, Award, CheckCircle, Globe, ArrowRight, Shield } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

const certificadoFaqs = [
  {
    question: "¿Qué países aceptan Linguaskill?",
    answer: "Linguaskill está reconocido por más de 60 países en todo el mundo. Instituciones destacadas incluyen McMaster University, BCIT, INP Grenoble, Nanyang Technological University, Glion Institute, International House London y RMIT Vietnam. El examen se utiliza para admisiones universitarias, graduación, certificación lingüística y evaluación de personal en entornos académicos y corporativos."
  },
  {
    question: "¿Dónde es válido Linguaskill?",
    answer: "Linguaskill es válido internacionalmente por su alineación con el MCER, reconocido oficialmente por CRUE en España. Se acepta para graduación universitaria, becas, posgrados, oposiciones, admisiones académicas y procesos de selección laboral. Instituciones como Universidad de Murcia, McMaster University, INP Grenoble, Glion Institute, International House London e inlingua Léman lo utilizan. Cambridge English lo validó con hablantes de más de 40 idiomas en 50 países."
  },
  {
    question: "¿Qué validez tiene el Linguaskill?",
    answer: "La validez de Linguaskill se fundamenta en su alineación con el MCER, el estándar internacional de competencia lingüística. Reconocido oficialmente por CRUE en España, acredita destrezas comunicativas para graduación universitaria, becas, posgrados, oposiciones y procesos de selección laboral. Cambridge English garantiza la precisión mediante un sistema de seguridad robusto. El certificado no tiene fecha de caducidad y refleja fielmente la capacidad lingüística actual del candidato."
  },
  {
    question: "¿Es Linguaskill un título oficial?",
    answer: "Linguaskill es un título oficial reconocido por la Conferencia de Rectores de las Universidades Españolas (CRUE). El certificado acredita competencias comunicativas alineadas con el MCER, evaluando niveles B1 a C2. Existen dos versiones: Linguaskill (inglés cotidiano) y Linguaskill Business (inglés empresarial). Es válido para graduación universitaria, becas, posgrados y oposiciones. Los certificados carecen de fecha de caducidad establecida."
  },
  {
    question: "¿El examen Linguaskill caduca?",
    answer: "Los certificados de Linguaskill no tienen fecha de caducidad establecida. Los resultados permanecen disponibles indefinidamente en el portal Cambridge English (Metrica). Sin embargo, instituciones y empresas receptoras pueden determinar la antigüedad máxima aceptable del examen para procesos de admisión o contratación. Se recomienda consultar con la organización correspondiente sobre el plazo de aceptación específico de los resultados."
  },
  {
    question: "¿Qué reconocimiento tiene el examen Linguaskill en España?",
    answer: "El reconocimiento de Linguaskill en España incluye CRUE, ACLES y Consejerías de Educación de Andalucía, Aragón, Cataluña, Extremadura, La Rioja, Madrid, Navarra y País Vasco para habilitación docente. Entidades como Fundación La Caixa, ICEX, AENA, Correos, Policía Nacional y RENFE lo aceptan en convocatorias. Universidades como UNED, UOC, UDIMA, UNIR y múltiples andaluzas lo reconocen para acreditación lingüística."
  },
  {
    question: "¿Caduca el certificado de Linguaskill de Cambridge?",
    answer: "El certificado de Linguaskill de Cambridge no tiene fecha de caducidad establecida. Sin embargo, instituciones y empresas pueden estipular requisitos sobre la antigüedad del examen para procesos de admisión o contratación. El certificado evalúa niveles B1 a C2 del MCER, acreditando habilidades comunicativas para ámbitos académicos y laborales. La aceptación práctica depende de las políticas institucionales específicas."
  },
  {
    question: "¿Cuánto tiempo es válido el certificado de Linguaskill?",
    answer: "El certificado de Linguaskill es válido indefinidamente sin fecha de caducidad establecida. Acredita competencia lingüística según el MCER y puede verificarse mediante el Servicio de Verificación de Resultados de Cambridge English. Las instituciones y empresas receptoras pueden establecer requisitos propios sobre la antigüedad máxima aceptable del examen para admisiones, contrataciones u otros procesos. La autenticidad se confirma mediante el documento de identidad del candidato."
  },
  {
    question: "¿Cómo saber si mi certificado de inglés es válido?",
    answer: "La validez del certificado de inglés se confirma contactando directamente con la institución receptora para verificar sus requisitos específicos. Los certificados Cambridge English, reconocidos por 25.000+ organizaciones mundialmente, no caducan y pueden verificarse online mediante servicio oficial. IELTS requiere consulta en su base de datos oficial. Cada institución establece niveles MCER requeridos: ejemplo, Policía Nacional España exige A2 o B1 según escala."
  }
];

export default function CertificadoLinguaskillPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Certificado Linguaskill y su Validez | Guía Completa 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Certificado Linguaskill y su Validez: Guía Completa 2025",
    description: "Todo sobre el certificado Linguaskill: validez internacional, reconocimiento en España, caducidad y dónde es aceptado.",
    url: `${businessInfo.url}/blog/certificado-linguaskill`,
    datePublished: "2025-01-10"
  });

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda en llegar el certificado Linguaskill después del examen?",
      answer: "Los resultados del examen Linguaskill están disponibles entre 3 y 5 días laborables tras completar la prueba. El certificado digital oficial con fotografía se emite inmediatamente después de que los resultados sean procesados y validados por Cambridge. Puedes descargarlo desde el portal de resultados de forma instantánea y gratuita, sin necesidad de esperar envíos postales."
    },
    {
      question: "¿Puedo repetir solo un módulo del examen para mejorar mi puntuación?",
      answer: "Sí, desde 2025 puedes repetir módulos individuales del examen Linguaskill (Reading, Listening, Writing o Speaking) sin necesidad de realizar el examen completo nuevamente. El certificado siempre mostrará tu mejor puntuación alcanzada en cada habilidad gracias a la función \"My Best Score\". Esta flexibilidad permite optimizar tiempo y costes económicos para alcanzar objetivos específicos de certificación."
    },
    {
      question: "¿El certificado Linguaskill es aceptado en universidades españolas para admisiones?",
      answer: "Sí, la mayoría de universidades españolas públicas y privadas aceptan el certificado Linguaskill como acreditación válida de nivel de inglés para procesos de admisión, graduación y programas de movilidad internacional. La CRUE (Conferencia de Rectores de Universidades Españolas) reconoce oficialmente Linguaskill. Sin embargo, cada institución establece requisitos mínimos específicos, generalmente entre B1 y B2 según el programa académico."
    },
    {
      question: "¿Cómo puedo verificar la autenticidad de un certificado Linguaskill?",
      answer: "Todos los certificados Linguaskill emitidos desde 2025 incluyen un código QR único que permite verificación instantánea. Accede al portal oficial results.linguaskill.com e introduce el código de verificación del certificado o escanea el QR con tu móvil. El sistema mostrará inmediatamente los datos del candidato, puntuaciones y fecha de emisión, garantizando autenticidad completa del documento ante cualquier institución."
    },
    {
      question: "¿Qué diferencias principales hay entre Linguaskill General y Linguaskill Business?",
      answer: "Linguaskill General evalúa inglés cotidiano para contextos académicos, viajes y situaciones generales, ideal para admisiones universitarias y empleo no corporativo. Linguaskill Business se centra en inglés profesional empresarial: reuniones, presentaciones, negociaciones y comunicación corporativa. Ambos certifican los mismos niveles MCER (A1-C2), pero el contenido difiere según el contexto de uso profesional o académico del candidato."
    }
  ];

  const levels = [
    { score: "82-99", level: "A1", description: "Básico inicial" },
    { score: "100-119", level: "A2", description: "Básico" },
    { score: "120-139", level: "B1", description: "Intermedio" },
    { score: "140-159", level: "B2", description: "Intermedio alto" },
    { score: "160-179", level: "C1", description: "Avanzado" },
    { score: "180+", level: "C1+/C2", description: "Dominio operativo" }
  ];

  return (
    <>
      <SEOHead
        title="Certificado Linguaskill: Validez, Reconocimiento Internacional y Caducidad 2025"
        description="Todo sobre el certificado Linguaskill: validez internacional sin caducidad oficial, reconocimiento por 25.000+ instituciones, niveles CEFR, qué universidades lo aceptan y cómo verificarlo."
        keywords="certificado Linguaskill, validez Linguaskill, Linguaskill caduca, reconocimiento Linguaskill, certificado Cambridge Linguaskill, Linguaskill internacional, nivel Linguaskill"
        canonical="/blog/certificado-linguaskill"
        ogType="article"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
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
              { label: 'Certificado Linguaskill' }
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
                  Certificado Linguaskill y su Validez: Todo lo que Necesitas Saber en 2025
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  El certificado con validez ilimitada de Cambridge, reconocido por más de 25.000 instituciones en todo el mundo.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-violet-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#que-es" className="text-violet-600 hover:text-violet-700 transition-colors">→ ¿Qué es el Certificado Linguaskill?</a></li>
                <li><a href="#validez" className="text-violet-600 hover:text-violet-700 transition-colors">→ Validez Oficial y Reconocimiento Internacional</a></li>
                <li><a href="#caducidad" className="text-violet-600 hover:text-violet-700 transition-colors">→ ¿Tiene Fecha de Caducidad?</a></li>
                <li><a href="#novedades" className="text-violet-600 hover:text-violet-700 transition-colors">→ Novedades del Certificado en 2025</a></li>
                <li><a href="#faq" className="text-violet-600 hover:text-violet-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </article>

          {/* FAQ Section - HIGH UP before main content */}
          <FAQSection faqs={certificadoFaqs} title="Preguntas Frecuentes sobre Certificado Linguaskill" />

          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              ¿Necesitas acreditar tu nivel de inglés para la universidad, un proceso de selección laboral o una oposición y te preguntas si el certificado Linguaskill es válido? Este examen online de Cambridge Assessment English se ha consolidado como una de las opciones más rápidas y flexibles para certificar competencias lingüísticas desde niveles A1 hasta C2 del Marco Común Europeo de Referencia (MCER). Con resultados en 3-5 días laborables y reconocimiento en más de 25.000 instituciones globales, el certificado Linguaskill <strong>no tiene fecha de caducidad oficial</strong>.
            </p>

            {/* Section 1 */}
            <section id="que-es" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Qué es el Certificado Linguaskill y Qué Niveles Certifica?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El certificado <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Linguaskill</a> es un documento oficial emitido por Cambridge Assessment English que acredita el nivel real de competencia en inglés de una persona según el MCER, evaluando desde el nivel básico A1 hasta el avanzado C2. A diferencia de otros exámenes tradicionales, Linguaskill es completamente digital, adaptativo y modular.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-8">
                <div className="bg-violet-600 text-white p-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Escala de Puntuación Linguaskill
                  </h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {levels.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-violet-600 font-bold text-lg">{item.level}</div>
                        <div className="text-gray-900 font-medium text-sm">{item.score}</div>
                        <div className="text-gray-500 text-xs">{item.description}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Existen dos modalidades principales: <strong>Linguaskill General</strong>, diseñado para situaciones académicas y empleo general, y <strong>Linguaskill Business</strong>, orientado específicamente al inglés profesional y corporativo. Ambas versiones evalúan Reading, Listening, Writing y Speaking.
              </p>

              <div className="bg-violet-50 border-l-4 border-violet-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Una característica destacada es la función <strong>"My Best Score"</strong>, implementada en 2025, que permite repetir módulos individuales para mejorar puntuaciones sin necesidad de rehacer el examen completo.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="validez" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Validez Oficial y Reconocimiento Internacional
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Reconocimiento Global
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>+25.000 organizaciones en todo el mundo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Alineación rigurosa con el MCER</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Respaldado por Universidad de Cambridge</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 text-lg mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    En España
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Reconocido oficialmente por CRUE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Válido para Erasmus+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Admisiones y graduación universitaria</span>
                    </li>
                  </ul>
                </div>

              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En el sector corporativo, multinacionales como IBM, HSBC y empresas del IBEX 35 utilizan Linguaskill tanto para procesos de selección como para evaluación interna de competencias lingüísticas de empleados. La rapidez en la obtención de resultados (3-5 días) lo convierte en opción preferente para departamentos de recursos humanos.
              </p>
            </section>

            {/* Section 3 */}
            <section id="caducidad" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Tiene Fecha de Caducidad el Certificado Linguaskill?
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 text-lg">Sin fecha de caducidad oficial</h3>
                    <p className="text-green-700">El certificado conserva su validez de forma indefinida</p>
                  </div>

                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El certificado Linguaskill <strong>no tiene fecha de caducidad oficial</strong> según Cambridge Assessment English, lo que significa que el documento conserva su validez de forma indefinida desde el momento de su emisión.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Sin embargo, es fundamental comprender que aunque el certificado no caduca formalmente, <strong>muchas instituciones y empleadores establecen políticas internas</strong> sobre la antigüedad máxima aceptable:
              </p>

              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Universidades españolas:</strong> Generalmente 2-3 años de antigüedad máxima</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Oposiciones públicas:</strong> Entre 2-5 años según convocatoria</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Empresas:</strong> Variable, algunas solicitan certificados de menos de 2 años</span>
                </li>
              </ul>

              <div className="bg-violet-50 border-l-4 border-violet-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Recomendación práctica:</strong> Verifica siempre los requisitos específicos de la institución o empresa destino antes de presentarse al examen. Si posees un certificado con varios años de antigüedad, contacta directamente para confirmar su aceptación.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="novedades" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Novedades y Mejoras del Certificado en 2025
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">📊 Módulos Completamente Separados</h3>
                  <p className="text-gray-700">Reading y Listening ahora son módulos independientes, permitiendo evaluaciones más específicas y detalladas. Puedes certificar solo las habilidades que necesitas, reduciendo costes hasta un 40%.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">🤖 IA Mejorada para Speaking y Writing</h3>
                  <p className="text-gray-700">Algoritmos de procesamiento de lenguaje natural más avanzados aumentan la precisión. El sistema combina evaluación automatizada con revisión humana para garantizar objetividad.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">📱 Certificados con Código QR</h3>
                  <p className="text-gray-700">Los certificados oficiales ahora incluyen fotografía del candidato y código QR único para verificación instantánea, eliminando riesgos de falsificación.</p>
                </div>

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
                        <ChevronUp className="w-5 h-5 text-violet-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-violet-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El certificado Linguaskill representa en 2025 una de las opciones más flexibles, rápidas y reconocidas internacionalmente para acreditar tu nivel de inglés sin fecha de caducidad oficial.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si buscas preparación especializada para alcanzar la certificación que necesitas, nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-violet-600 hover:underline font-medium">academia en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-violet-600 hover:underline font-medium">La Vaguada</Link>, ofrece <Link to="/cursos-ingles/adultos" className="text-violet-600 hover:underline font-medium">cursos específicos de inglés para adultos</Link> con metodología probada y tasas de éxito del 100% en <Link to="/examenes-cambridge" className="text-violet-600 hover:underline font-medium">exámenes Cambridge</Link>.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas certificar tu inglés?</h3>
              <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te preparamos para obtener el certificado Linguaskill con la puntuación que necesitas.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold hover:bg-violet-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/linguaskill" className="group bg-gray-50 rounded-xl p-6 hover:bg-violet-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors mb-2">
                    Linguaskill: Guía Completa 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Todo lo que necesitas saber sobre el examen Linguaskill de Cambridge.</p>
                </Link>
                <Link to="/linguaskill" className="group bg-gray-50 rounded-xl p-6 hover:bg-violet-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors mb-2">
                    Cómo Registrarse en Linguaskill
                  </h3>
                  <p className="text-gray-600 text-sm">Guía paso a paso para completar tu matrícula.</p>
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
