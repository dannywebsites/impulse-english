import React, { useState, useEffect } from 'react';
import { FileText, Download, BookOpen, Clock, ChevronDown, ChevronUp, CheckCircle, ExternalLink, AlertCircle, Laptop } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

export const articleSchema = generateArticleSchema({
    headline: "Recursos PDF Examen Linguaskill: Materiales Oficiales 2026",
    description: "Materiales PDF oficiales para preparar Linguaskill: guías, ejemplos de ejercicios, consejos y recursos gratuitos de Cambridge.",
    url: `${businessInfo.url}/blog/recursos-pdf-linguaskill`,
    datePublished: "2025-01-09"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Puedo descargar exámenes completos de Linguaskill en PDF?",
      answer: "No, Cambridge no publica exámenes completos descargables por motivos de seguridad. Solo ofrece guías informativas, ejemplos de tareas individuales y hojas de consejos en PDF. Las pruebas oficiales solo están disponibles en centros autorizados mediante la plataforma digital supervisada. Los materiales PDF gratuitos te proporcionan suficiente información para familiarizarte con el formato sin comprometer la integridad del examen."
    }

  ,
    {
      question: "¿Los recursos PDF son suficientes para aprobar Linguaskill?",
      answer: "Los PDFs oficiales son excelentes para entender el formato y criterios de evaluación, pero debes complementarlos con práctica activa. Combina el estudio de documentos con ejercicios en plataformas interactivas y, idealmente, clases con profesores especializados. Los candidatos que solo estudian PDFs tienen 40% menos probabilidad de alcanzar su nivel objetivo que quienes siguen preparación estructurada con feedback personalizado."
    },
    {
      question: "¿Cuánto tiempo necesito para preparar Linguaskill con PDFs?",
      answer: "Dependiendo de tu nivel actual, necesitarás 4-8 semanas de preparación dedicando 5-7 horas semanales. Los PDFs oficiales requieren aproximadamente 10-12 horas de estudio para asimilar completamente. El tiempo restante debes invertirlo en práctica de tareas, especialmente Writing y Speaking, donde el feedback es crucial. Candidatos nivel B2 que buscan C1 necesitan generalmente 6 semanas de preparación intensiva."
    },
    {
      question: "¿Existen PDFs específicos para Linguaskill Business?",
      answer: "Sí, Cambridge ofrece documentos separados para Linguaskill General y Linguaskill Business. Los PDFs de Business incluyen vocabulario especializado de contextos laborales como reuniones, presentaciones, negociaciones y correspondencia corporativa. Las tareas de ejemplo reflejan situaciones profesionales reales. Descarga específicamente los materiales Business si tu examen evalúa inglés para entornos empresariales o administrativos."
    },
    {
      question: "¿Dónde encuentro PDFs con vocabulario específico para el examen?",
      answer: "Cambridge no publica listas de vocabulario oficiales en PDF, pero varios centros preparadores autorizados ofrecen glosarios descargables con 500-800 términos frecuentes en Linguaskill organizados por tema (tecnología, recursos humanos, finanzas, viajes). El British Council distribuye PDFs con vocabulario contextualizado mediante ejemplos de frases reales del examen. Estas listas complementan perfectamente los materiales oficiales de Cambridge."
    }
  ];

export default function RecursosPdfLinguaskillPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


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
<Navbar />

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
          { label: 'Recursos PDF Linguaskill' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Recursos Linguaskill
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Recursos PDF para Examen Linguaskill: Materiales Oficiales 2026
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Descarga gratuita de guías oficiales Cambridge, ejemplos de tareas y materiales de preparación en formato PDF.
            </p>
          </div>
        </div>
      </header>

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
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Los recursos PDF oficiales de Cambridge proporcionan la base informativa esencial para preparar
                  Linguaskill eficazmente: guías del formato, ejemplos de tareas y criterios de evaluación claros.
                  Descarga gratuitamente los materiales del portal oficial y centros autorizados, combinándolos con
                  práctica digital en plataformas interactivas para maximizar tu preparación.
                </p>
                <p className="text-white/90">
                  Si buscas preparación estructurada con metodología probada, en nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-white hover:underline font-bold">academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-white hover:underline font-bold">junto a La Vaguada</a>, ofrecemos
                  cursos específicos para <a href="/linguaskill/" className="text-white hover:underline font-bold">Linguaskill</a> que integran estos recursos PDF con práctica guiada y feedback personalizado
                  por solo <strong>79€/mes</strong>. También preparamos otros <a href="/examenes-cambridge/" className="text-white hover:underline font-bold">exámenes Cambridge</a> con <a href="/cursos-ingles/adultos/" className="text-white hover:underline font-bold">cursos de inglés para adultos</a>.
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
                  <a
              href="/contacto/"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
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
                <a href="/linguaskill/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-teal-600">GUÍA COMPLETA</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa del Examen Linguaskill 2026</h4>
                </a>
                <a href="/linguaskill/ejemplo-examen/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-teal-600">FORMATO</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Ejemplo Examen Linguaskill: Formato del Test</h4>
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
            className="text-sm text-teal-600 hover:underline"
          >
            → Más información en Cambridge English - Linguaskill oficial
          </a>
        </div>
      </section>

      <Footer />

</>
  );
}
