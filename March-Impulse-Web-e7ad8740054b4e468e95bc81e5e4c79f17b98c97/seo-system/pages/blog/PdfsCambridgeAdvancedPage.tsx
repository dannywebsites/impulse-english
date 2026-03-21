import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Clock, ChevronDown, ChevronUp, CheckCircle, ExternalLink, AlertCircle, BookOpen } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export default function PdfsCambridgeAdvancedPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'PDFs Cambridge Advanced C1: Recursos Oficiales 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "PDFs Cambridge Advanced C1: Recursos Oficiales 2026",
    description: "Recursos PDF oficiales para preparar el C1 Advanced de Cambridge: sample papers, handbook, answer keys y materiales gratuitos.",
    url: `${businessInfo.url}/examenes-cambridge/pdfs-cambridge-advanced`,
    datePublished: "2025-01-04"
  });

  const faqs = [
    {
      question: "¿Cuánto tiempo se tarda en pasar de B2 a C1?",
      answer: "Pasar del nivel B2 al C1 en inglés requiere entre 200 y 300 horas de estudio guiado y práctica intensiva. El progreso depende de la frecuencia, método de aprendizaje y motivación. La certificación Cambridge C1 Advanced valida este nivel avanzado, esencial para contextos académicos y profesionales."
    },
    {
      question: "¿Es muy difícil el C1 Advanced?",
      answer: "El Cambridge C1 Advanced es un examen exigente que certifica un nivel alto de inglés (C1 MCER), evaluando reading, writing, listening y speaking con énfasis en comunicación efectiva. Su dificultad radica en la duración, variedad de tareas y dominio avanzado de vocabulario y gramática."
    },
    {
      question: "¿Cuántas horas de estudio para C1?",
      answer: "La preparación para el Cambridge C1 Advanced requiere unas 200 horas de estudio guiado. Este tiempo incluye práctica intensiva en comprensión lectora, gramática, vocabulario, escritura, escucha y expresión oral, distribuidas en cuatro secciones evaluadas en un examen de aproximadamente 4 horas."
    },
    {
      question: "¿El C1 caduca?",
      answer: "El certificado Cambridge C1 Advanced no caduca oficialmente y es válido de por vida. No obstante, muchas universidades y empleadores requieren que la certificación tenga menos de 2-3 años para considerarla vigente, garantizando así la actualización del nivel de inglés del candidato."
    },
    {
      question: "¿Qué porcentaje aprueba el C1 Advanced?",
      answer: "El porcentaje de aprobación del Cambridge C1 Advanced es aproximadamente del 75%, donde el 64% obtiene grado B o C (nivel C1) y un 13% alcanza grado A (nivel C2). Cerca del 20% no logra el nivel C1 y alrededor del 5% reprueba el examen directamente."
    },
    {
      question: "¿Merece la pena el C1 en España?",
      answer: "El certificado Cambridge C1 Advanced es muy valorado en España en 2025/26 por certificar un nivel alto de inglés, reconocido en universidades, empresas multinacionales y para trámites oficiales. Facilita el acceso a estudios superiores, mejora la empleabilidad y aporta un valor estable sin caducidad."
    }
  ];

  const officialPdfs = [
    {
      name: "C1 Advanced Handbook for Teachers",
      pages: "~50 páginas",
      content: "Formato completo del examen, criterios de evaluación, respuestas modelo de Writing",
      free: true
    },
    {
      name: "C1 Advanced Sample Paper",
      pages: "Examen completo",
      content: "Reading, Writing, Listening con audio, Speaking. Incluye answer key",
      free: true
    },
    {
      name: "Information for Candidates",
      pages: "~10 páginas",
      content: "Resumen del formato, qué esperar el día del examen, consejos generales",
      free: true
    },
    {
      name: "Answer Sheet Templates",
      pages: "4 páginas",
      content: "Hojas de respuesta oficiales para practicar el formato real",
      free: true
    }
  ];

  const paidResources = [
    {
      name: "Cambridge English Advanced Trainer",
      price: "~30€",
      content: "6 exámenes de práctica completos con explicaciones detalladas",
      link: "https://www.cambridge.es/en/catalogue/exams"
    },
    {
      name: "Compact Advanced",
      price: "~35€",
      content: "Curso intensivo de 50-60 horas con práctica específica por habilidad",
      link: "https://www.cambridge.es/en/catalogue/exams"
    },
    {
      name: "Advanced Result",
      price: "~40€",
      content: "Libro de texto completo con online practice y tests adicionales"
    }
  ];

  return (
    <>
      <SEOHead
        title="PDFs Cambridge Advanced C1: Recursos Oficiales Gratuitos 2026"
        description="Descarga gratuita de PDFs oficiales para preparar el C1 Advanced Cambridge: sample papers, handbook for teachers, answer keys y materiales de práctica."
        keywords="pdfs cambridge advanced, c1 advanced sample papers, handbook cambridge c1, descargar examen c1, materiales gratuitos c1"
        canonical="/examenes-cambridge/pdfs-advanced"
        ogType="article"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blogs-impulse' },
                { label: 'PDFs Cambridge Advanced' }
              ]}
              variant="light"
              className="mb-4"
            />
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                C1 Advanced Cambridge
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              PDFs Cambridge Advanced C1: Recursos Oficiales 2026
            </h1>
            <p className="text-xl text-white/90 font-light mb-6">
              Descarga gratuita de sample papers, handbooks y materiales oficiales para preparar el C1 Advanced (CAE).
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Recursos actualizados
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Download Section */}
      <section className="py-8 bg-amber-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-amber-600" />
                Descargas Gratuitas Oficiales
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {officialPdfs.map((pdf, index) => (
                  <div key={index} className="bg-zinc-50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-zinc-900">{pdf.name}</h4>
                        <p className="text-xs text-amber-600">{pdf.pages}</p>
                        <p className="text-sm text-zinc-500 mt-1">{pdf.content}</p>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Gratis
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-500 mt-4 text-center">
                Disponibles en cambridgeenglish.org → Exams → C1 Advanced → Preparation
              </p>
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
                Preparar el C1 Advanced (CAE) requiere familiarizarse con el formato exacto del examen y practicar
                con materiales de calidad. <a href="https://www.cambridgeenglish.org/es/learning-english/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Cambridge ofrece varios recursos PDF oficiales gratuitos</a> que deberías
                descargar antes de empezar tu preparación. Esta guía te muestra exactamente qué materiales existen,
                dónde encontrarlos y cómo usarlos eficazmente.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Handbook for Teachers: Tu recurso principal
              </h2>
              <p className="text-zinc-600 mb-6">
                El "C1 Advanced Handbook for Teachers" es el documento más completo y valioso para entender el examen.
                Aunque está dirigido a profesores, cualquier candidato debería leerlo para comprender exactamente
                qué se evalúa y cómo.
              </p>

              <div className="bg-amber-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-zinc-900 mb-4">El Handbook incluye:</h3>
                <ul className="space-y-2">
                  {[
                    "Descripción detallada de cada parte del examen",
                    "Tiempo asignado y número de preguntas por sección",
                    "Criterios de evaluación de Writing y Speaking",
                    "Respuestas modelo de Writing con comentarios del examinador",
                    "Escalas de puntuación y cómo se calcula la nota final",
                    "Ejemplos de lo que se espera en cada nivel de banda"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-amber-500 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">
                  <strong>Consejo clave:</strong> Lee especialmente las secciones de Writing Assessment Scales y
                  Speaking Assessment Scales. Entender exactamente qué buscan los examinadores te ayudará a enfocar
                  tu práctica de forma más efectiva.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Sample Papers: Practica con el formato real
              </h2>
              <p className="text-zinc-600 mb-6">
                Los sample papers son exámenes de muestra oficiales que replican exactamente el formato y dificultad
                del examen real. Cambridge ofrece un set completo gratuito que incluye todas las secciones.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    Reading & Use of English
                  </h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    8 partes, 56 preguntas, 90 minutos. Incluye todas las tipologías de ejercicios con answer key.
                  </p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-600" />
                    Writing
                  </h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    2 tareas, 90 minutos. Essay obligatorio + elección entre report, review, proposal o letter.
                  </p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <Download className="w-5 h-5 text-amber-600" />
                    Listening + Audio
                  </h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    4 partes, 30 preguntas, ~40 minutos. Audio descargable en MP3 + transcripts.
                  </p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-amber-600" />
                    Speaking
                  </h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    4 partes, 15 minutos. Material visual para Parts 2 y 3 + descripción de tareas.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800">
                  <strong>Cómo usarlos:</strong> Haz el primer sample paper en condiciones de examen real (cronometrado,
                  sin diccionario, en un lugar tranquilo). Usa los siguientes para practicar secciones específicas
                  donde necesites mejorar.
                </p>
              </div>
            </section>

            {/* Section 3 - Paid Resources */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Recursos de pago recomendados
              </h2>
              <p className="text-zinc-600 mb-6">
                Si los recursos gratuitos te resultan insuficientes, estos materiales oficiales de Cambridge ofrecen
                práctica adicional de alta calidad.
              </p>

              <div className="space-y-4 mb-6">
                {paidResources.map((resource, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-zinc-900">
                        {resource.link ? (
                          <a href={resource.link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 hover:underline">
                            {resource.name}
                          </a>
                        ) : resource.name}
                      </h4>
                      <p className="text-sm text-zinc-500">{resource.content}</p>
                    </div>
                    <span className="bg-amber-100 text-amber-700 font-bold px-3 py-1 rounded-full">
                      {resource.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-800 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 mt-0.5" />
                  <span>
                    <strong>Evita:</strong> PDFs pirateados de exámenes completos. Además de ser ilegales, pueden
                    contener errores o estar desactualizados. Invierte en material oficial o usa los recursos gratuitos.
                  </span>
                </p>
              </div>
            </section>

            {/* Section 4 - Study Plan */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Cómo organizar tu estudio con estos recursos
              </h2>

              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white mb-6">
                <h3 className="text-xl font-bold mb-4">Plan de estudio sugerido (12 semanas)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-bold">Semanas 1-4</p>
                    <p className="text-sm text-white/90">Lee el Handbook. Haz el sample paper completo. Identifica debilidades.</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-bold">Semanas 5-8</p>
                    <p className="text-sm text-white/90">Trabaja secciones específicas. Practica Writing con modelo del Handbook.</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-bold">Semanas 9-12</p>
                    <p className="text-sm text-white/90">Simulacros completos cronometrados. Revisión final de errores frecuentes.</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-100 rounded-xl p-6">
                <p className="text-zinc-700">
                  En <Link to="/academia-ingles-barrio-del-pilar" className="text-amber-600 hover:underline font-medium">nuestra academia en Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-amber-600 hover:underline font-medium">junto a La Vaguada</Link>, complementamos estos recursos PDF con clases guiadas,
                  corrección personalizada de Writing y práctica de Speaking con feedback en tiempo real.
                  Ofrecemos <Link to="/ingles-la-vaguada/adultos" className="text-amber-600 hover:underline font-medium">cursos de inglés para adultos</Link> y preparación para <Link to="/examenes-cambridge" className="text-amber-600 hover:underline font-medium">exámenes Cambridge</Link> desde <strong>79€/mes</strong>.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas Frecuentes sobre PDFs del C1 Advanced
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
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Los recursos PDF oficiales de Cambridge son tu punto de partida esencial para preparar el C1 Advanced.
                  El Handbook for Teachers y los Sample Papers te dan toda la información necesaria sobre el formato
                  y criterios de evaluación. Complementa estos materiales gratuitos con práctica guiada mediante <Link to="/ingles-la-vaguada/particulares" className="text-white hover:underline font-semibold">clases particulares</Link> para maximizar
                  tus posibilidades de éxito en el <Link to="/examenes-cambridge" className="text-white hover:underline font-semibold">examen Cambridge</Link>.
                </p>
                <p className="text-white/90">
                  En <Link to="/academia-ingles-barrio-del-pilar" className="text-white hover:underline font-semibold">nuestra academia</Link> integramos estos recursos en nuestros cursos de
                  preparación por solo <strong>79€/mes</strong>, con profesores especializados en exámenes Cambridge.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Preparando el C1 Advanced?
                    </h3>
                    <p className="text-zinc-400">
                      Te ayudamos a sacar el máximo partido a los recursos oficiales con preparación guiada.
                    </p>
                  </div>
                  <Link
                    to="/contacto"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
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
                <Link to="/examenes-cambridge/c1-advanced-guia" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-amber-600">C1 ADVANCED</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Examen Cambridge C1 Advanced: Guía Completa</h4>
                </Link>
                <Link to="/examenes-cambridge/escala" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-amber-600">PUNTUACIÓN</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Escala Cambridge Explicada: Niveles y Grades</h4>
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
            href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-amber-600 hover:underline"
          >
            → Más información en Cambridge English - C1 Advanced oficial
          </a>
          <span className="mx-2 text-zinc-300">|</span>
          <a
            href="https://www.cambridge.es/en/catalogue/exams"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-amber-600 hover:underline"
          >
            → Catálogo de libros Cambridge
          </a>
          <span className="mx-2 text-zinc-300">|</span>
          <a
            href="https://www.youtube.com/@CambridgeEnglishSpain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-amber-600 hover:underline"
          >
            → Lecciones en YouTube - Cambridge English Spain
          </a>
        </div>
      </section>

      <Footer />

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
