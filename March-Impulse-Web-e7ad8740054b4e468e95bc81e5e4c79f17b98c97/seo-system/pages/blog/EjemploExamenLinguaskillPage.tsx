import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, FileText, HelpCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

const tableOfContents = [
  { id: 'reading-listening', title: 'Módulo Reading and Listening: Test Adaptativo Combinado' },
  { id: 'writing', title: 'Módulo Writing: Redacción en Dos Partes' },
  { id: 'speaking', title: 'Módulo Speaking: Expresión Oral Grabada' },
  { id: 'sistema-adaptativo', title: 'Sistema Adaptativo y Niveles del Examen' },
  { id: 'faq', title: 'Preguntas Frecuentes (FAQ)' },
];

const faqs = [
  {
    question: '¿Cuánto dura el examen Linguaskill?',
    answer: 'El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular.'
  },
  {
    question: '¿Se puede suspender Linguaskill?',
    answer: 'Linguaskill no se puede suspender ni aprobar; es un examen adaptativo que certifica el nivel real de inglés del candidato, desde A1 hasta C1/C2, ajustando las preguntas según sus respuestas. Esto permite una evaluación precisa y justa basada en competencias, sin calificaciones tradicionales de aprobado o suspenso.'
  },
  {
    question: '¿Linguaskill General o Business?',
    answer: 'Linguaskill General evalúa inglés para contextos cotidianos, académicos y sociales, ideal para estudiantes y procesos migratorios. Linguaskill Business se centra en inglés profesional en entornos laborales, destacando comunicación empresarial. Ambos miden niveles A1-C2 según el MCER y ofrecen resultados rápidos y fiables.'
  },
  {
    question: '¿Cómo funciona el Speaking de Linguaskill?',
    answer: 'El módulo Speaking de Linguaskill evalúa la expresión oral en inglés en cinco partes durante 15 minutos, incluyendo entrevista, lectura en voz alta, exposiciones y diálogo basado en gráficos. Se realiza online con micrófono, respuestas grabadas y evaluación híbrida humano-tecnológica, entregando resultados en 48 horas.'
  },
  {
    question: '¿Qué puntuación es B2 en Linguaskill?',
    answer: 'La puntuación que define el nivel B2 en Linguaskill de Cambridge abarca entre 160 y 179 puntos. Este nivel "Independent User" acredita habilidades sólidas para comunicarse y comprender textos complejos, siendo fundamental para acceso académico y profesional, con certificación online, modular y adaptativa en 2026.'
  },
];

export default function EjemploExamenLinguaskillPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = generateArticleSchema({
    headline: "Ejemplo Examen Linguaskill: Estructura y Tipos de Preguntas 2025",
    description: "Ejemplos reales del examen Linguaskill: estructura de Reading, Listening, Writing y Speaking con tipos de preguntas y sistema adaptativo.",
    url: `${businessInfo.url}/linguaskill/ejemplo-examen`,
    datePublished: "2025-01-01"
  });

  return (
    <>
      <SEOHead
        title="Ejemplo Examen Linguaskill 2025: Estructura, Formato y Tipos de Preguntas"
        description="Descubre el formato completo del examen Linguaskill con ejemplos reales de cada módulo: Reading, Listening, Writing y Speaking. Sistema adaptativo, duración y tipos de preguntas detallados."
        keywords="ejemplo examen Linguaskill, formato Linguaskill, estructura Linguaskill, tipos de preguntas Linguaskill, módulos Linguaskill, sistema adaptativo Linguaskill, prueba Linguaskill"
        canonical="/linguaskill/ejemplo-examen"
        ogType="article"
      />
      <Navbar />

      <article>
        {/* Hero Section */}
        <header className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-accent-blue to-blue-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blogs-impulse' },
                  { label: 'Ejemplo Examen Linguaskill' }
                ]}
                variant="light"
              />

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Linguaskill
                </span>
                <span className="text-white/60 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Actualizado Diciembre 2024
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                Ejemplo Examen Linguaskill: Formato y Estructura del Test 2025
              </h1>

              <p className="text-xl text-white/90 font-light mb-8">
                Descubre el formato completo del examen Linguaskill con ejemplos de cada módulo: Reading, Listening, Writing y Speaking. Guía práctica actualizada.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  7 min de lectura
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Artículo spoke
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop"
              alt="Ejemplo de examen Linguaskill - formato del test"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Breadcrumb to Hub */}
        <div className="container mx-auto max-w-5xl px-6 mb-8">
          <Link
            to="/linguaskill"
            className="inline-flex items-center gap-2 text-accent-blue hover:text-blue-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ← Volver a la Guía Completa de Linguaskill
          </Link>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent-blue" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-accent-blue transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                ¿Necesitas certificar tu nivel de inglés y te preguntas cómo es exactamente el formato del examen <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Linguaskill</a>? Este test de Cambridge Assessment English se diferencia de otros certificados porque utiliza un sistema adaptativo basado en inteligencia artificial que ajusta las preguntas según tu nivel en tiempo real. En esta guía descubrirás la estructura exacta de cada módulo, ejemplos concretos de preguntas y cómo funcionan las 4 secciones del examen. Según datos oficiales de Cambridge, Linguaskill evalúa desde niveles A1 hasta C1+ en aproximadamente 120 minutos totales, divididos en módulos independientes que puedes realizar en diferentes momentos dentro de un periodo de 48 horas.
              </p>
            </section>

            {/* Section 1: Reading and Listening */}
            <section id="reading-listening" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Módulo Reading and Listening: Test Adaptativo Combinado
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>El módulo Reading and Listening de Linguaskill dura entre 60-75 minutos y contiene un número variable de preguntas (normalmente entre 40-65) que se ajustan automáticamente según tus respuestas previas.</strong> Este sistema adaptativo significa que si respondes correctamente, las siguientes preguntas serán más difíciles; si fallas, se simplifican para determinar con precisión tu nivel real de competencia.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La sección de Reading incluye tareas como rellenar huecos en textos (gap-filling), seleccionar respuestas correctas en preguntas de opción múltiple, y ordenar párrafos según coherencia lógica. Por ejemplo, podrías recibir un email empresarial con 5 espacios en blanco donde debes elegir la palabra correcta entre 4 opciones. Para niveles B1-B2, las preguntas evalúan comprensión de ideas principales; para C1-C2, se centran en cohesión textual, referencias anafóricas y progresión argumentativa.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                En Listening, escucharás cada audio dos veces antes de responder. Los formatos incluyen conversaciones telefónicas, presentaciones académicas y diálogos cotidianos. Un ejemplo típico: escuchar una conversación sobre horarios de trenes y seleccionar la hora correcta de salida entre 4 opciones. La dificultad varía desde comprensión literal (A2-B1) hasta inferencias complejas y tono del hablante (C1-C2).
              </p>

              <div className="bg-blue-50 border-l-4 border-accent-blue p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo crítico:</strong> No dediques más de 30 segundos por pregunta en las primeras 10 respuestas, ya que el algoritmo necesita este "periodo de calibración" para identificar tu nivel aproximado. Responder rápido al principio te permite tener más tiempo para las preguntas complejas posteriores.
                </p>
              </div>
            </section>

            {/* Section 2: Writing */}
            <section id="writing" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Módulo Writing: Redacción en Dos Partes
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>El módulo Writing dura exactamente 45 minutos y consta de dos tareas obligatorias con diferente ponderación: Parte 1 vale 25% de la nota final y Parte 2 representa el 75% restante.</strong> Debes escribir directamente en el ordenador, sin posibilidad de usar papel borrador, lo que requiere planificación mental antes de teclear.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                En la Parte 1 (15 minutos recomendados) debes escribir un email o mensaje corto de mínimo 50 palabras. Un ejemplo real: "Has recibido este email de tu supervisor. Responde confirmando tu asistencia a la reunión, sugiere un cambio de hora y pide la agenda del encuentro." Esta tarea evalúa tu capacidad para comunicarte de forma práctica y directa en situaciones cotidianas o laborales básicas.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La Parte 2 (30 minutos) requiere un texto más extenso de aproximadamente 180-200 palabras. En Linguaskill General escribirás una redacción opinativa o narrativa; en Linguaskill Business, un informe o propuesta empresarial. Ejemplo: "Tu empresa considera implementar trabajo remoto permanente. Escribe un informe analizando ventajas, desventajas y recomendaciones." Los examinadores de Cambridge evalúan contenido, organización, vocabulario, gramática y efecto comunicativo según rúbricas oficiales del MCER.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Ambas tareas son corregidas por evaluadores humanos certificados, no por inteligencia artificial. El tiempo es estricto: a los 45 minutos el sistema cierra automáticamente, guardando únicamente lo que hayas escrito hasta ese momento.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Error frecuente:</strong> Muchos candidatos dedican 25 minutos a la Parte 1 por inseguridad, dejando solo 20 minutos para la Parte 2, que vale el triple. Respeta la distribución 15/30 minutos estrictamente para maximizar tu puntuación global.
                </p>
              </div>
            </section>

            {/* Section 3: Speaking */}
            <section id="speaking" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Módulo Speaking: Expresión Oral Grabada
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>El módulo Speaking dura exactamente 15 minutos y se divide en 5 partes con formatos específicos, grabándose todas tus respuestas mediante micrófono y auriculares conectados al ordenador.</strong> No hablas con un examinador humano en vivo; respondes a indicaciones automatizadas que aparecen en pantalla, similar a dejar mensajes de voz.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La Parte 1 consiste en responder 8 preguntas personales con 10 segundos de preparación cada una. Ejemplo: "¿Qué hiciste el fin de semana pasado?" o "Describe tu lugar favorito para relajarte." Cada respuesta debe durar entre 10-20 segundos. En la Parte 2 lees en voz alta 8 oraciones para evaluar pronunciación, entonación y fluidez natural.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las Partes 3 y 4 son más complejas: recibes un tema y dispones de 40 segundos de preparación para hablar durante 1 minuto sin interrupciones. Ejemplo Parte 3: "Habla sobre las ventajas de vivir en una ciudad grande." Parte 4 añade elementos visuales: describes gráficos, comparas imágenes o analizas tendencias estadísticas durante 1 minuto tras 40 segundos de preparación.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La Parte 5 presenta 5 preguntas cortas sobre un mismo tema con 1 minuto total de preparación inicial. Ejemplo: "Tema: Educación online. Pregunta 1: ¿Qué ventajas tiene? Pregunta 2: ¿Qué desventajas identificas? Pregunta 3: ¿La usarías tú?" Cada respuesta debe ser concisa (20-30 segundos).
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Advertencia técnica:</strong> Verifica tu micrófono antes del examen. Si hay problemas técnicos durante la grabación, no podrás repetir secciones. Habla con volumen normal, a 15-20 cm del micrófono, evitando gritar o susurrar.
                </p>
              </div>
            </section>

            {/* Section 4: Sistema Adaptativo */}
            <section id="sistema-adaptativo" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Sistema Adaptativo y Niveles del Examen
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Linguaskill utiliza un algoritmo de inteligencia artificial que analiza cada respuesta en milisegundos para seleccionar la siguiente pregunta, evaluando niveles desde A1 hasta C1+ del Marco Común Europeo de Referencia.</strong> Este sistema significa que dos candidatos nunca realizan exactamente el mismo examen, incluso si empiezan al mismo tiempo en la misma sala.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El proceso funciona así: las primeras 10-15 preguntas de Reading and Listening son de dificultad media (nivel B1) para todos los candidatos. Si respondes correctamente, el sistema aumenta progresivamente la dificultad hacia B2, C1 y C1+. Si fallas, disminuye hacia A2-B1 para establecer tu "techo" de competencia. Cada candidato recibe entre 40-65 preguntas dependiendo de cuánto necesita el algoritmo para determinar su nivel con precisión estadística del 95%.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para niveles B1-B2, las tareas de Reading incluyen gap-filling simple, preguntas de opción múltiple sobre ideas principales y ordenamiento básico de información. En niveles C1-C2 aparecen ejercicios complejos como identificar párrafos faltantes en argumentaciones académicas, analizar cohesión mediante pronombres referenciales y distinguir entre opinión implícita y explícita del autor.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los resultados se expresan en una escala numérica de 82-180+ puntos que corresponde a niveles CEFR: 82-99 (A1), 100-119 (A2), 120-139 (B1), 140-159 (B2), 160-179 (C1), 180+ (C1 o superior). Recibes resultados de cada módulo por separado en un plazo máximo de 48 horas tras completar el examen.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Ventaja estratégica:</strong> Si sacas B2 en Reading pero B1 en Speaking, puedes repetir solo el módulo de Speaking sin volver a hacer los otros. Cambridge guardará tu mejor puntuación en cada habilidad mediante el sistema "My Best Score", válido indefinidamente sin caducidad oficial (aunque instituciones pueden establecer sus propios límites de vigencia).
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-accent-blue" />
                Preguntas Frecuentes (FAQ)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-zinc-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-zinc-50 transition-colors"
                    >
                      <span className="font-semibold text-zinc-900 pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 transition-transform flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 bg-zinc-50">
                        <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Conclusión
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El formato del examen Linguaskill se distingue por su sistema adaptativo inteligente que personaliza la evaluación según tu nivel real en tiempo real, proporcionando resultados precisos en aproximadamente 2 horas divididas en módulos flexibles. Para maximizar tu puntuación, practica específicamente con demos oficiales que repliquen la interfaz, gestiona estratégicamente el tiempo de cada sección y familiarízate con los tipos de preguntas adaptativas de Reading and Listening.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Si buscas preparación especializada con metodología probada, <Link to="/academia-ingles-barrio-del-pilar" className="text-accent-blue hover:underline font-medium">nuestra academia en Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-accent-blue hover:underline font-medium">junto a La Vaguada</Link>, ofrece <Link to="/ingles-la-vaguada/adultos" className="text-accent-blue hover:underline font-medium">cursos de inglés para adultos</Link> específicos de <Link to="/examenes-cambridge/linguaskill" className="text-accent-blue hover:underline font-medium">Linguaskill</Link> con docentes expertos y recursos actualizados que te preparan para cada detalle del formato actual del test, además de <Link to="/ingles-la-vaguada/particulares" className="text-accent-blue hover:underline font-medium">clases particulares</Link> personalizadas.
              </p>
            </section>

          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-accent-blue to-blue-900 mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Listo para preparar tu examen Linguaskill?
                </h2>
                <p className="text-xl text-white/80">
                  Reserva tu clase gratuita y descubre cómo podemos ayudarte a conseguir tu certificación.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/linguaskill"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-accent-blue text-sm font-medium">Hub Principal</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa del Examen Linguaskill 2026</h3>
                <p className="text-zinc-600 text-sm mt-2">Todo sobre estructura, ejemplos y preparación.</p>
              </Link>
              <Link
                to="/linguaskill/precios-sedes"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-accent-blue text-sm font-medium">Precios</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Linguaskill: Precios, Sedes y Servicios</h3>
                <p className="text-zinc-600 text-sm mt-2">Precios exactos y sedes disponibles en España.</p>
              </Link>
              <Link
                to="/linguaskill/precio-reservar"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-accent-blue text-sm font-medium">Reserva</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Precio Linguaskill y Cómo Reservar</h3>
                <p className="text-zinc-600 text-sm mt-2">Tarifas actualizadas y proceso de inscripción.</p>
              </Link>
            </div>
          </div>
        </section>
      </article>

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

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
