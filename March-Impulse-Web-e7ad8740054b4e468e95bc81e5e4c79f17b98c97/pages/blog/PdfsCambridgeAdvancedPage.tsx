import React, { useState, useEffect } from 'react';
import { FileText, Download, Clock, ChevronDown, ChevronUp, CheckCircle, ExternalLink, AlertCircle, BookOpen } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "PDFs Cambridge Advanced C1: Recursos Oficiales 2026",
    description: "Recursos PDF oficiales para preparar el C1 Advanced de Cambridge: sample papers, handbook, answer keys y materiales gratuitos.",
    url: `${businessInfo.url}/blog/pdfs-cambridge-advanced`,
    datePublished: "2025-01-04",
    dateModified: "2026-06-30"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Dónde puedo descargar PDFs oficiales de Cambridge Advanced gratis legalmente?",
      answer: "Los PDFs oficiales gratuitos están disponibles en www.cambridgeenglish.org/exams-and-tests/advanced/preparation. Este sitio proporciona sample papers completos, el handbook para profesores de 116 páginas, y FAQs sobre el formato digital. Archive.org también ofrece libros de vocabulario y gramática legalmente bajo programas de préstamo digital bibliotecario con registro gratuito."
    }

  ,
    {
      question: "¿Cuántos exámenes de práctica en PDF necesito completar antes del examen real?",
      answer: "Cambridge recomienda completar mínimo cuatro exámenes completos bajo condiciones reales antes de presentarse al C1 Advanced. Estudios de preparación efectiva indican que candidatos que completan 6-8 prácticas cronometradas aumentan sus puntuaciones en 15-20 puntos comparado con quienes hacen menos de tres. Distribuye las prácticas durante tus últimos cuatro meses de preparación."
    },
    {
      question: "¿Los PDFs de vocabulario Cambridge cubren todas las palabras del examen Advanced?",
      answer: "\"English Vocabulary in Use: Advanced\" cubre aproximadamente 2.500 palabras del rango C1, representando el 75-80% del vocabulario típico del examen. Cambridge no publica listas exhaustivas oficiales, pero el Common European Framework especifica 3.000-4.000 palabras activas para nivel C1. Complementa este PDF con lectura extensiva de textos académicos auténticos (artículos científicos, literatura contemporánea)."
    },
    {
      question: "¿Existe diferencia entre PDFs para el formato digital y papel del C1 Advanced?",
      answer: "El contenido es idéntico: mismas preguntas, misma dificultad, mismo tiempo asignado. La diferencia es operativa: en digital usas teclado para Writing, ratón para seleccionar respuestas, y auriculares para Listening. Cambridge proporciona un \"Digital Exam Tutorial\" PDF específico (32 páginas) con capturas de pantalla de la interfaz y cómo usar herramientas como contador de palabras o resaltador."
    },
    {
      question: "¿Cuánto tiempo debo estudiar con estos PDFs antes de registrarme al examen?",
      answer: "Para estudiantes con nivel B2 consolidado, Cambridge recomienda 12-18 meses de preparación dedicando 6-8 horas semanales. Si tu nivel actual es B2 inicial o intermedio, necesitarás 18-24 meses. Un indicador confiable: si completas un examen de práctica y obtienes menos de 160 puntos (de 210 totales), necesitas mínimo seis meses más de estudio intensivo con estos materiales."
    },
    {
      question: "¿Es legal descargar PDFs de Cambridge Advanced gratis?",
      answer: "Sí, siempre que uses fuentes legítimas. Los sample papers, el handbook for teachers y las hojas de respuesta del sitio oficial cambridgeenglish.org son gratuitos y de descarga libre. Archive.org presta libros digitalizados de forma legal mediante su sistema de préstamo bibliotecario con registro gratuito. Lo que no es legal es descargar libros completos con copyright desde foros o webs de terceros."
    },
    {
      question: "¿Qué libro es mejor para preparar el C1 Advanced por mi cuenta?",
      answer: "Si estudias solo, el 'Cambridge English Advanced Trainer' es la opción más completa porque incluye seis exámenes con explicaciones detalladas y consejos de examen. Para reforzar la base, añade 'Cambridge Grammar and Vocabulary for Advanced'. Si partes de un B2 justo, 'Complete Advanced' aporta más explicación teórica antes de la práctica intensiva."
    },
    {
      question: "¿Hay recursos digitales gratuitos además de los PDFs?",
      answer: "Sí. 'Write & Improve' de Cambridge corrige tus redacciones automáticamente, 'Test & Train' ofrece práctica interactiva y el canal de YouTube Cambridge English Spain publica lecciones gratuitas. Combinar los PDFs con estas herramientas digitales te permite cubrir las cuatro destrezas sin coste adicional."
    }
  ];

export default function PdfsCambridgeAdvancedPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


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
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Blog', href: '/blog' },
          { label: 'PDFs Cambridge Advanced' }
          ]}
          variant="light"
          className="mb-4"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                C1 Advanced Cambridge
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              PDFs Cambridge Advanced C1: Recursos Oficiales 2026
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Descarga gratuita de sample papers, handbooks y materiales oficiales para preparar el C1 Advanced (CAE).
            </p>
          </div>
        </div>
      </header>

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

            {/* Section: Books comparison */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Comparativa: mejores libros para preparar el C1 Advanced
              </h2>
              <p className="text-zinc-600 mb-6">
                Si quieres ir más allá de los PDFs gratuitos, estos son los libros oficiales y de referencia más usados para preparar el C1 Advanced (CAE). Elige según tu punto de partida y el tiempo del que dispongas.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-zinc-200 rounded-xl overflow-hidden">
                  <thead className="bg-amber-50">
                    <tr>
                      <th className="text-left p-3 font-bold text-zinc-900">Libro</th>
                      <th className="text-left p-3 font-bold text-zinc-900">Precio</th>
                      <th className="text-left p-3 font-bold text-zinc-900">Práctica</th>
                      <th className="text-left p-3 font-bold text-zinc-900">Ideal para</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="p-3 font-medium text-zinc-900">Cambridge English Advanced Trainer</td><td className="p-3">~30€</td><td className="p-3">6 exámenes completos</td><td className="p-3">Autoestudio con muchas prácticas y explicaciones</td></tr>
                    <tr><td className="p-3 font-medium text-zinc-900">Complete Advanced</td><td className="p-3">~35€</td><td className="p-3">Curso + tests</td><td className="p-3">Partir de un B2 justo y necesitar teoría</td></tr>
                    <tr><td className="p-3 font-medium text-zinc-900">Compact Advanced</td><td className="p-3">~35€</td><td className="p-3">50-60 h + 1 test</td><td className="p-3">Preparación rápida con poco tiempo</td></tr>
                    <tr><td className="p-3 font-medium text-zinc-900">Grammar and Vocabulary for Advanced</td><td className="p-3">~28€</td><td className="p-3">Práctica por temas</td><td className="p-3">Reforzar gramática y vocabulario de nivel C1</td></tr>
                    <tr><td className="p-3 font-medium text-zinc-900">Objective Advanced</td><td className="p-3">~38€</td><td className="p-3">Unidades + 1 test</td><td className="p-3">Estudio progresivo en bloques cortos</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-zinc-600">
                Sea cual sea el libro, combínalo con simulacros cronometrados. Si dudas si el C1 es realista para tu nivel, lee <a href="/blog/es-dificil-c1-advanced/" className="text-amber-600 hover:underline font-medium">si es difícil aprobar el C1 Advanced</a>; y para presupuestar la convocatoria, consulta el <a href="/blog/precio-cambridge-c1-madrid/" className="text-amber-600 hover:underline font-medium">precio del C1 Cambridge en Madrid</a>.
              </p>
            </section>

            {/* Section: Where to download legally */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Dónde descargar PDFs del C1 Advanced legal y gratis
              </h2>
              <p className="text-zinc-600 mb-6">
                Descargar material con copyright desde foros o webs de terceros es ilegal y arriesgado. Estas fuentes son gratuitas y totalmente legales:
              </p>
              <div className="space-y-3">
                {[
                  { s: "cambridgeenglish.org", d: "Sample papers completos, handbook for teachers y answer keys oficiales, de descarga libre." },
                  { s: "Archive.org", d: "Préstamo digital legal de libros de gramática y vocabulario con registro gratuito." },
                  { s: "Test & Train y Write & Improve (Cambridge)", d: "Práctica interactiva y corrección automática de redacciones online, sin coste." },
                  { s: "Flo-Joe", d: "Ejercicios de Use of English y un banco de vocabulario gratuitos enfocados al examen." },
                  { s: "YouTube: Cambridge English Spain", d: "Lecciones y explicaciones del formato del examen en vídeo, gratis." },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3 bg-zinc-50 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-zinc-900">{r.s}</p>
                      <p className="text-sm text-zinc-600">{r.d}</p>
                    </div>
                  </div>
                ))}
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
                  En <a href="/academia-ingles-barrio-del-pilar/" className="text-amber-600 hover:underline font-medium">nuestra academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-amber-600 hover:underline font-medium">junto a La Vaguada</a>, complementamos estos recursos PDF con clases guiadas,
                  corrección personalizada de Writing y práctica de Speaking con feedback en tiempo real.
                  Ofrecemos <a href="/cursos-ingles/adultos/" className="text-amber-600 hover:underline font-medium">cursos de inglés para adultos</a> y preparación para <a href="/examenes-cambridge/" className="text-amber-600 hover:underline font-medium">exámenes Cambridge</a> desde <strong>79€/mes</strong>.
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
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Los recursos PDF oficiales de Cambridge son tu punto de partida esencial para preparar el C1 Advanced.
                  El Handbook for Teachers y los Sample Papers te dan toda la información necesaria sobre el formato
                  y criterios de evaluación. Complementa estos materiales gratuitos con práctica guiada mediante <a href="/cursos-ingles/particulares/" className="text-white hover:underline font-semibold">clases particulares</a> para maximizar
                  tus posibilidades de éxito en el <a href="/examenes-cambridge/" className="text-white hover:underline font-semibold">examen Cambridge</a>.
                </p>
                <p className="text-white/90">
                  En <a href="/academia-ingles-barrio-del-pilar/" className="text-white hover:underline font-semibold">nuestra academia</a> integramos estos recursos en nuestros cursos de
                  preparación por solo <strong>79€/mes</strong>, con profesores especializados en exámenes Cambridge.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/pdfs-cambridge-advanced" />

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/examenes-cambridge/c1-advanced/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-amber-600">C1 ADVANCED</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Examen Cambridge C1 Advanced: Guía Completa</h4>
                </a>
                <a href="/examenes-cambridge/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-amber-600">PUNTUACIÓN</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Escala Cambridge Explicada: Niveles y Grades</h4>
                </a>
              </div>
            </section>
          </div>

        </div>
      </article>

      <OneToOneCTA pathname="/blog/pdfs-cambridge-advanced" />

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

</>
  );
}
