import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, BookOpen, Clock, ChevronDown, ChevronUp, CheckCircle, ExternalLink, AlertCircle, Laptop } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export default function RecursosPdfLinguaskillPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Recursos PDF Examen Linguaskill: Materiales Oficiales 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Recursos PDF Examen Linguaskill: Materiales Oficiales 2026",
    description: "Materiales PDF oficiales para preparar Linguaskill: guías, ejemplos de ejercicios, consejos y recursos gratuitos de Cambridge.",
    url: `${businessInfo.url}/linguaskill/recursos-pdf-linguaskill`,
    datePublished: "2025-01-09"
  });

  const faqs = [
    {
      question: "¿Linguaskill es más fácil que Cambridge?",
      answer: "Linguaskill no es más fácil que los exámenes tradicionales de Cambridge; es un test multinivel adaptativo que ajusta la dificultad según las respuestas. Su formato digital y modular ofrece flexibilidad y rapidez, certificando niveles desde A1 hasta C1/C2, con rigor similar pero distinto enfoque y estructura."
    },
    {
      question: "¿Cuánto dura el examen Linguaskill?",
      answer: "El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular."
    },
    {
      question: "¿Cómo funciona el Speaking de Linguaskill?",
      answer: "El módulo Speaking de Linguaskill evalúa la expresión oral en inglés en cinco partes durante 15 minutos, incluyendo entrevista, lectura en voz alta, exposiciones y diálogo basado en gráficos. Se realiza online con micrófono, respuestas grabadas y evaluación híbrida humano-tecnológica, entregando resultados en 48 horas."
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
      question: "¿Linguaskill desde casa es fiable?",
      answer: "Linguaskill desde casa es fiable gracias a su formato 100 % online, supervisión remota y tecnología adaptativa que ajusta la dificultad en tiempo real. Utiliza inteligencia artificial para evaluar Speaking y Writing con precisión, ofrece resultados en 48 horas y cuenta con reconocimiento oficial internacional."
    }
  ];

  const officialResources = [
    { name: "Guía Rápida Linguaskill", pages: "12 páginas", description: "Formato completo, tipos de tareas y escalas de puntuación MCER" },
    { name: "Consejos Reading & Listening", pages: "8 páginas", description: "Ejemplos de tareas con respuestas y explicaciones" },
    { name: "Consejos Writing", pages: "6 páginas", description: "Modelos de respuesta comentados por examinadores" },
    { name: "Consejos Speaking", pages: "5 páginas", description: "Transcripciones de respuestas modelo con diferentes niveles" },
    { name: "Especificaciones de Evaluación", pages: "40-50 páginas", description: "Metodología de puntuación y criterios técnicos" }
  ];

  const digitalTools = [
    { name: "Write & Improve", type: "Gratuito", description: "Práctica de Writing con corrección automática instantánea" },
    { name: "Speak & Improve", type: "Gratuito", description: "Evaluación de pronunciación y fluidez oral con IA" },
    { name: "Linguaskill Trainer", type: "€35-45", description: "15-20 horas de contenido con tests adaptativos completos" }
  ];

  return (
    <>
      <SEOHead
        title="Recursos PDF Linguaskill 2026: Materiales Oficiales Gratuitos"
        description="Materiales PDF oficiales Cambridge para preparar Linguaskill: guías descargables, ejemplos de ejercicios, consejos por módulo y recursos gratuitos actualizados 2026."
        keywords="recursos pdf linguaskill, materiales linguaskill gratis, guía linguaskill pdf, ejemplos linguaskill, preparación linguaskill pdf, cambridge linguaskill recursos"
        canonical="/linguaskill/recursos-pdf"
        ogType="article"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blogs-impulse' },
                { label: 'Recursos PDF Linguaskill' }
              ]}
              variant="light"
            />
            <div className="flex items-center gap-2 mb-4 mt-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Recursos Linguaskill
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Recursos PDF para Examen Linguaskill: Materiales Oficiales 2026
            </h1>
            <p className="text-xl text-white/90 font-light mb-6">
              Descarga gratuita de guías oficiales Cambridge, ejemplos de tareas y materiales de preparación en formato PDF.
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Actualizado 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-teal-50 border-b border-teal-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">Contenido del artículo</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Documentos PDF oficiales de Cambridge",
                "Dónde descargar materiales gratuitos",
                "PDFs de preparación por módulo",
                "Herramientas digitales complementarias",
                "Preguntas frecuentes"
              ].map((item, index) => (
                <a key={index} href={`#section-${index + 1}`} className="text-teal-700 hover:text-teal-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center text-xs font-bold">{index + 1}</span>
                  {item}
                </a>
              ))}
            </nav>
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
                ¿Buscas materiales en PDF para preparar tu examen Linguaskill pero no sabes qué recursos oficiales existen?
                Aunque <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Cambridge Linguaskill</a> no ofrece exámenes completos descargables, sí proporciona documentos PDF con guías, consejos
                y ejemplos de tareas que resultan esenciales para tu preparación. Este artículo detalla exactamente qué materiales
                en PDF puedes obtener, dónde descargarlos gratuitamente y cómo utilizarlos eficazmente.
              </p>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué documentos PDF oficiales ofrece Cambridge para Linguaskill?
              </h2>
              <p className="text-zinc-600 mb-6">
                Cambridge English proporciona tres tipos principales de documentos PDF para preparar Linguaskill:
                hojas informativas del examen, guías de consejos por módulo y especificaciones técnicas de evaluación.
                La guía rápida oficial contiene 12 páginas con el formato completo del test, tipos de tareas y escalas
                de puntuación según el MCER.
              </p>

              <div className="bg-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-teal-600" />
                  Documentos Oficiales Disponibles
                </h3>
                <div className="space-y-3">
                  {officialResources.map((resource, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                      <FileText className="w-5 h-5 text-teal-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-zinc-900">{resource.name}</p>
                        <p className="text-sm text-teal-600">{resource.pages}</p>
                        <p className="text-sm text-zinc-500">{resource.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-zinc-600 mb-6">
                Los documentos oficiales incluyen descripciones detalladas de cada módulo del examen: Reading & Listening
                (60-85 minutos), Writing (45 minutos) y Speaking (15 minutos). Cada hoja de consejos explica la estructura
                específica de las tareas, criterios de evaluación y ejemplos de respuestas.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                <p className="text-amber-800">
                  <strong>Consejo práctico:</strong> Descarga primero la guía rápida oficial para entender el formato general
                  antes de profundizar en documentos específicos por módulo. Esto te ahorrará tiempo y te permitirá identificar
                  qué áreas necesitas reforzar.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Dónde descargar gratuitamente materiales PDF para preparar Linguaskill
              </h2>
              <p className="text-zinc-600 mb-6">
                El portal oficial de Cambridge English (cambridgeenglish.org) es la fuente principal para descargar recursos
                PDF gratuitos. En la sección "Linguaskill Practice Materials" encontrarás hojas descargables para candidatos,
                disponibles en más de 15 idiomas.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-teal-600" />
                    Fuentes Oficiales
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Portal Cambridge English
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Support Linguaskill oficial
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Centros autorizados regionales
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      British Council
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    Evitar Siempre
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      PDFs de "exámenes completos"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      Sitios no oficiales
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      Material sin fecha de actualización
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      Documentos pirateados
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <p className="text-red-800">
                  <strong>Advertencia importante:</strong> Evita descargar PDFs de sitios no oficiales que prometen
                  "exámenes completos" de Linguaskill. Cambridge no libera tests completos en PDF por razones de seguridad
                  del examen.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Qué contienen los PDFs de preparación por módulo
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">Reading & Listening</h3>
                  <p className="text-zinc-600 mb-3">
                    Los PDFs incluyen 6-8 ejemplos de tareas reales con respuestas correctas y explicaciones.
                    Encontrarás ejercicios de completar espacios en blanco, comprensión lectora extendida y escucha
                    de diálogos laborales. Cada ejemplo especifica el nivel MCER que evalúa (B1, B2, C1 o C2).
                  </p>
                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">Writing</h3>
                  <p className="text-zinc-600 mb-3">
                    El PDF proporciona 4-5 modelos de respuesta comentados para cada tipo de tarea: correo electrónico
                    (nivel B1-B2) y carta formal o ensayo argumentativo (nivel C1-C2). Incluyen anotaciones del examinador
                    señalando fortalezas y debilidades de cada texto.
                  </p>
                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">Speaking</h3>
                  <p className="text-zinc-600 mb-3">
                    Los materiales PDF contienen transcripciones de 3-4 respuestas modelo con diferentes niveles de desempeño.
                    Incluyen las instrucciones exactas que aparecen en pantalla, preguntas tipo y criterios de pronunciación,
                    fluidez, rango gramatical y coherencia.
                  </p>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mt-6">
                <p className="text-teal-800">
                  <strong>Consejo de estudio:</strong> Imprime los ejemplos de Writing y Speaking para analizarlos con
                  marcadores de colores. Identifica estructuras útiles, conectores y vocabulario específico que puedas
                  adaptar a tus propias respuestas.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Herramientas digitales que complementan los recursos PDF
              </h2>
              <p className="text-zinc-600 mb-6">
                Aunque los PDFs proporcionan información estática, Cambridge ofrece plataformas interactivas gratuitas
                que funcionan junto con el material descargable.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {digitalTools.map((tool, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-5 border border-teal-100">
                    <Laptop className="w-8 h-8 text-teal-600 mb-3" />
                    <h4 className="font-bold text-zinc-900">{tool.name}</h4>
                    <span className="text-xs font-medium text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">
                      {tool.type}
                    </span>
                    <p className="text-sm text-zinc-600 mt-2">{tool.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-100 rounded-xl p-6">
                <p className="text-zinc-700">
                  <strong>Estrategia eficaz:</strong> Alterna el estudio de PDFs con práctica en plataformas digitales.
                  Por ejemplo, estudia los criterios de evaluación en PDF por la mañana, luego practica Writing en
                  Write & Improve por la tarde para aplicar inmediatamente lo aprendido.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="section-5" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas frecuentes sobre recursos PDF de Linguaskill
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
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Los recursos PDF oficiales de Cambridge proporcionan la base informativa esencial para preparar
                  Linguaskill eficazmente: guías del formato, ejemplos de tareas y criterios de evaluación claros.
                  Descarga gratuitamente los materiales del portal oficial y centros autorizados, combinándolos con
                  práctica digital en plataformas interactivas para maximizar tu preparación.
                </p>
                <p className="text-white/90">
                  Si buscas preparación estructurada con metodología probada, en nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-white hover:underline font-bold">academia en Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-white hover:underline font-bold">junto a La Vaguada</Link>, ofrecemos
                  cursos específicos para <Link to="/examenes-cambridge/linguaskill" className="text-white hover:underline font-bold">Linguaskill</Link> que integran estos recursos PDF con práctica guiada y feedback personalizado
                  por solo <strong>79€/mes</strong>. También preparamos otros <Link to="/examenes-cambridge" className="text-white hover:underline font-bold">exámenes Cambridge</Link> con <Link to="/ingles-la-vaguada/adultos" className="text-white hover:underline font-bold">cursos de inglés para adultos</Link>.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Necesitas preparación guiada para Linguaskill?
                    </h3>
                    <p className="text-zinc-400">
                      En Impulse English Academy te preparamos con materiales oficiales y práctica personalizada.
                    </p>
                  </div>
                  <Link
                    to="/contacto"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
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
                <Link to="/linguaskill" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-teal-600">GUÍA COMPLETA</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa del Examen Linguaskill 2026</h4>
                </Link>
                <Link to="/linguaskill/ejemplo-examen" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-teal-600">FORMATO</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Ejemplo Examen Linguaskill: Formato del Test</h4>
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
            className="text-sm text-teal-600 hover:underline"
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
