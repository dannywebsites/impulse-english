import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, CheckCircle, Star, Download, Laptop, MessageCircle, ExternalLink, Users, GraduationCap, Target, Lightbulb, HelpCircle, Globe, FileText, Monitor, Headphones, PenTool, Smartphone, BookMarked, Brain, Timer, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

const tableOfContents = [
  { id: 'materiales-oficiales', title: 'Materiales oficiales de Cambridge para la preparación' },
  { id: 'libros-cambridge', title: 'Libros Cambridge para estudio autodidacta' },
  { id: 'plataformas-digitales', title: 'Plataformas digitales y aplicaciones de apoyo' },
  { id: 'cursos-especializados', title: 'Cursos especializados de preparación para Cambridge' },
  { id: 'planificacion-estudio', title: 'Planificación y técnicas de estudio efectivas' },
  { id: 'recursos-jovenes', title: 'Recursos específicos para jóvenes y niños' },
  { id: 'estrategias-practicas', title: 'Estrategias prácticas para maximizar tu preparación' },
  { id: 'faq', title: 'Preguntas Frecuentes' },
  { id: 'conclusion', title: 'Conclusión' },
];

const faqItems = [
  {
    question: '¿Qué libros usar para preparar B2 First?',
    answer: 'Los libros recomendados para preparar el examen Cambridge B2 First en 2025/26 incluyen First Expert Coursebook y First Masterclass para competencias B2, FCE Result y Compact First adaptados al formato actual, First Trainer Second Edition con simulacros oficiales, y Oxford Practice Grammar para gramática práctica. Combínelos con recursos digitales para optimizar la preparación.'
  },
  {
    question: '¿Cuánto tiempo se tarda en preparar el B2 First?',
    answer: 'La preparación para el examen Cambridge B2 First dura entre 3 y 9 meses según el nivel inicial y dedicación. Estudiantes con base B1 pueden alcanzar el nivel en 3-6 meses con estudio regular, mientras principiantes tardan hasta 12-18 meses. Clave: planificación estructurada y práctica constante.'
  },
  {
    question: '¿Cuál es el mejor curso para aprender inglés?',
    answer: 'El mejor curso para aprender inglés varía según necesidades: That\'s English (Ministerio Educación español, certificación internacional), Babbel (conversación práctica, clases en vivo), British Council Madrid/Impulse English(inglés británico, exámenes certificados), Udemy (155.000 cursos variados), Duolingo (lecciones diarias cortas). Libros destacados: "English Grammar in Use" (Raymond Murphy), "English for Everyone" (DK, autoaprendizaje visual), "Activate Advanced C1" (preparación exámenes oficiales). Métodos complementarios: intercambio lingüístico (Tandem, HelloTalk), inmersión extranjera, audiolibros.'
  },
  {
    question: '¿Cómo saber si un curso de inglés es bueno?',
    answer: 'Un curso de inglés bueno se identifica mediante acreditación MCER (Marco Común Europeo de Referencia), profesores experimentados cualificados, metodología interactiva práctica con situaciones reales, materiales actualizados innovadores, evaluaciones periódicas personalizadas, grupos reducidos con atención individualizada, flexibilidad horaria (acceso 24/7), certificaciones reconocidas empresarialmente, retroalimentación continua personalizada, contenido adicional complementario y ambiente participativo motivador. Debe adaptarse a niveles específicos (principiante-avanzado) y objetivos concretos (conversación, gramática, preparación exámenes oficiales).'
  },
  {
    question: '¿Cuál es el mejor método para aprender inglés rápidamente?',
    answer: 'El mejor método para aprender inglés rápidamente combina inmersión total (cambiar idioma dispositivos, películas sin subtítulos, música, lectura), práctica diaria cuatro habilidades (escuchar, hablar, leer, escribir), metodología SMART (estudio estructurado, motivación, objetivos claros, repetición, tecnología), intercambio idiomas Tandem/HelloTalk con nativos, escribir diario inglés experiencias diarias, podcasts temas interesantes trayectos, metas realistas (conversación básica tres meses, películas sin subtítulos seis meses), apps Duolingo/Babbel, audiolibros, cursos online interactivos profesores particulares, actividades gratificantes, aceptar errores oportunidad aprendizaje.'
  },
  {
    question: '¿Qué debe tener un buen curso de inglés?',
    answer: 'Un buen curso de inglés debe tener profesores experimentados, horarios flexibles, grupos reducidos para atención personalizada, metodología estructurada con evaluaciones periódicas, materiales actualizados con técnicas innovadoras, recursos didácticos variados (vídeos, audios, ejercicios interactivos), práctica con hablantes nativos, ejercicios pronunciación específicos, retroalimentación personalizada, clases apoyo gratuitas, contenido adicional complementario, ambiente interactivo participativo, certificaciones reconocidas internacionalmente, acceso online flexible, aplicaciones móviles recomendadas y enfoque comunicativo práctico que permita "vivir" el inglés diariamente.'
  },
  {
    question: '¿Cuál es la mejor plataforma para aprender inglés online?',
    answer: 'La mejor plataforma para aprender inglés online combina múltiples plataformas según necesidades individuales. Papora ofrece clases ilimitadas profesores expertos, horarios flexibles, enfoque situaciones vida diaria cubriendo vocabulario/listening/gramática/pronunciación/expresión oral. Babbel proporciona conversación práctica/pronunciación lecciones expertas, Babbel Live clases vivo profesores cualificados, cursos específicos cultura/viajes/trabajo. Udemy presenta 155.000+ cursos todos niveles, certificados aceptación institucional limitada. Duolingo gamificación gratuita lecciones cortas. Academias online ofrecen clases conversacionales gratuitas listening/speaking apoyo continuo horarios amplios. Tandem/HelloTalk intercambio hablantes nativos fluidez comprensión cultural. BBC Learning English/British Council/TED Talks recursos gratuitos complementarios. Práctica mínima recomendada 15 minutos diarios.'
  },
  {
    question: '¿Cuántas horas al día estudiar inglés?',
    answer: 'Estudiar inglés entre 20 y 60 minutos diarios con regularidad es más efectivo que largas sesiones esporádicas. Para niveles intermedios, se requieren 350-600 horas acumuladas, logrables con sesiones diarias que combinen comprensión auditiva, práctica oral, lectura y escritura, apoyadas por técnicas como la repetición espaciada.'
  },
  {
    question: '¿Se puede aprender inglés solo con series?',
    answer: 'Aprender inglés solo con series es posible para mejorar comprensión auditiva, vocabulario y expresiones, pero no basta para dominar todas las habilidades. Requiere un enfoque activo con subtítulos en inglés, repetición (shadowing) y toma de notas, además de complementar con práctica oral y gramática.'
  },
  {
    question: '¿Clases particulares o academia de inglés?',
    answer: 'La elección entre clases particulares y academias de inglés en 2025/26 depende de necesidades, presupuesto y objetivos. Las clases particulares ofrecen personalización, flexibilidad y enfoque específico, ideales para dificultades o inseguridad. Las academias aportan entorno social, metodologías estandarizadas y evaluación continua, siendo más económicas y motivadoras en grupo.'
  }
];

export default function LibrosCambridgeRecursosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = generateArticleSchema({
    headline: "Libros Cambridge 2026: Guía Completa de Recursos Oficiales",
    description: "Descubre los mejores libros Cambridge y recursos oficiales para preparar tu examen en 2026. Materiales gratuitos, cursos y plataformas digitales actualizadas.",
    url: `${businessInfo.url}/examenes-cambridge/libros-cambridge-recursos`,
    datePublished: "2025-01-03"
  });

  return (
    <>
      <SEOHead
        title="Libros Cambridge 2026: Guía Completa de Recursos Oficiales"
        description="Descubre los mejores libros Cambridge y recursos oficiales para preparar tu examen 2026. Materiales gratuitos, cursos especializados, plataformas digitales y estrategias de estudio efectivas."
        keywords="libros cambridge, recursos cambridge oficiales, materiales cambridge gratis, preparación cambridge, libros b2 first, libros c1 advanced, cambridge trainer, plataformas cambridge"
        canonical="/examenes-cambridge/libros-recursos"
        ogType="article"
      />
      <Navbar />

      {/* SEO Meta - Title: Libros Cambridge 2026: Guía Completa de Recursos Oficiales */}
      {/* Meta Description: Descubre los mejores libros Cambridge y recursos oficiales para preparar tu examen en 2026. Materiales gratuitos, cursos y plataformas digitales actualizadas. */}

      <article>
        {/* Hero Section */}
        <header className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-orange-500 to-red-600">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blogs-impulse' },
                  { label: 'Libros Cambridge' }
                ]}
                variant="light"
              />

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Recursos
                </span>
                <span className="text-white/60 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Actualizado 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                Guía Completa de Libros Cambridge y Recursos para Preparar Tu Examen en 2026
              </h1>

              <p className="text-xl text-white/90 font-light mb-8">
                Descubre los mejores libros Cambridge y recursos oficiales para preparar tu examen en 2026. Materiales gratuitos, cursos y plataformas digitales actualizadas.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  10 min de lectura
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Guía de recursos
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1600&auto=format&fit=crop"
              alt="Libros y recursos Cambridge para preparación de exámenes"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">Tabla de Contenidos</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-orange-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm">{item.title}</span>
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
                ¿Te enfrentas a un examen de Cambridge en 2026 y te preguntas qué recursos realmente funcionan? Cada año, miles de estudiantes españoles buscan la certificación Cambridge English como puerta de entrada a universidades internacionales, mejores oportunidades laborales o programas de movilidad. Sin embargo, la abundancia de materiales disponibles puede resultar abrumadora: <strong>libros Cambridge oficiales</strong>, plataformas digitales, cursos presenciales, aplicaciones móviles y recursos gratuitos compiten por tu atención y presupuesto. Elegir los recursos adecuados marca la diferencia entre aprobar con nota o repetir el examen.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Esta guía exhaustiva te proporciona todo lo que necesitas saber sobre los recursos de preparación para Cambridge en 2026. Descubrirás los materiales oficiales más actualizados, desde libros Cambridge específicos para cada nivel hasta plataformas digitales interactivas que transforman tu aprendizaje. Analizaremos recursos tanto gratuitos como de pago, estrategias de estudio probadas y herramientas especializadas para diferentes edades y objetivos. Cambridge English ha actualizado significativamente sus materiales en los últimos años, incorporando tecnología adaptativa y enfoque comunicativo que refleja situaciones reales de uso del inglés.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                ¿Por qué esta guía es definitiva? Porque combina información oficial de Cambridge English, experiencia práctica de centros certificados y las últimas actualizaciones para 2026. No encontrarás consejos genéricos, sino recomendaciones concretas con nombres de libros, precios aproximados, links a recursos gratuitos y estrategias específicas para cada habilidad evaluada: Reading, Writing, Listening, Speaking y Use of English. Ya sea que prepares el B2 First, el C1 Advanced o cualquier otro nivel desde Pre A1 hasta C2 Proficiency, aquí encontrarás tu hoja de ruta completa.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Exploraremos ocho áreas fundamentales que cubren desde materiales oficiales y libros Cambridge hasta recursos digitales, cursos especializados, técnicas de planificación, materiales para jóvenes, herramientas para profesores y estrategias prácticas que aceleran tu aprendizaje. Academias como <strong>Impulse English Academy</strong>, centro oficial de preparación Cambridge, reflejan esta tendencia hacia métodos científicos personalizados que combinan materiales tradicionales con innovación educativa. Al finalizar esta lectura, tendrás un plan claro para maximizar tu preparación y aprobar con confianza tu examen Cambridge en 2026.
              </p>
            </section>

            {/* Section 1: Materiales oficiales */}
            <section id="materiales-oficiales" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Download className="w-8 h-8 text-orange-500 flex-shrink-0" />
                1. Materiales oficiales de Cambridge para la preparación
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los materiales oficiales de Cambridge English Assessment representan la fuente más confiable para preparar cualquier examen de la familia Cambridge, desde Pre A1 Starters hasta C2 Proficiency. Estos recursos están diseñados específicamente para reflejar el formato exacto, tipos de preguntas y criterios de evaluación que encontrarás el día del examen. Cambridge English proporciona acceso gratuito a muestras de exámenes completos, hojas de trabajo descargables, listas de vocabulario específicas para cada nivel y ejercicios interactivos que cubren las cuatro habilidades principales: <strong>Reading, Writing, Listening y Speaking</strong>.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Ventaja fundamental de los materiales oficiales</h3>
                <p className="text-orange-700 mb-4">
                  La ventaja fundamental de utilizar materiales oficiales radica en su <strong>autenticidad absoluta</strong>. Cuando practicas con un Sample Paper oficial del B2 First, por ejemplo, estás trabajando con preguntas elaboradas por los mismos expertos que crean el examen real.
                </p>
                <p className="text-orange-600 text-sm">
                  Esta familiarización elimina sorpresas el día de la prueba y reduce significativamente la ansiedad del candidato. Los materiales oficiales incluyen también guías detalladas para candidatos que explican exactamente qué se evalúa en cada sección, cómo se asignan los puntos y qué esperan los examinadores en tus respuestas. Este conocimiento interno del examen vale tanto como docenas de horas de práctica sin dirección.
                </p>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cambridge English ha digitalizado progresivamente sus recursos oficiales, creando un ecosistema completo de preparación. La plataforma <strong>Test & Train</strong> ofrece más de 500 actividades interactivas diferentes que cubren todas las partes de los exámenes Cambridge desde A2 Key hasta C2 Proficiency. Cada ejercicio proporciona retroalimentación inmediata, explicaciones detalladas de respuestas correctas e incorrectas, y seguimiento automático de tu progreso. Puedes acceder a recursos gratuitos adicionales en la <a href="https://www.cambridgeenglish.org/es/learning-english/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">sección oficial de recursos para estudiantes de Cambridge English</a>. <strong>Write & Improve</strong>, otra herramienta oficial gratuita, evalúa automáticamente tus textos escritos utilizando inteligencia artificial entrenada con miles de redacciones reales de exámenes Cambridge, proporcionándote feedback instantáneo sobre gramática, vocabulario, coherencia y adecuación al nivel objetivo.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Acceso y descarga de recursos oficiales gratuitos</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La página oficial de Cambridge English (cambridgeenglish.org) centraliza todos los materiales gratuitos disponibles para estudiantes y profesores. En la sección "Exam Preparation", encontrarás recursos organizados por nivel desde Pre A1 hasta C2. Cada examen cuenta con su propia subsección que incluye: <strong>Sample Papers completos descargables en PDF</strong> (generalmente dos modelos diferentes), <strong>Audio descargable para las partes de Listening</strong>, guías del candidato que explican el formato detalladamente, y videos de exámenes Speaking reales con comentarios de examinadores oficiales. Estos videos son especialmente valiosos porque muestran candidatos de diferentes niveles siendo evaluados, permitiéndote calibrar exactamente qué constituye un rendimiento de nivel B2, C1 o C2.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Recursos gratuitos disponibles</h4>
                  <ul className="space-y-2 text-zinc-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Sample Papers completos (2 modelos por examen)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Listas de vocabulario temático (50-80 palabras por tema)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Hojas de gramática descargables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Ejercicios interactivos online sin registro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Videos de Speaking reales con comentarios</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Para el nivel B2 First</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Encontrarás más de 30 listas de vocabulario organizadas por temas como "Education", "Environment", "Technology", cada una con aproximadamente 50-80 palabras clave que aparecen frecuentemente en el examen.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Estas listas no son aleatorias: están basadas en análisis estadísticos de millones de palabras del Cambridge English Corpus, garantizando que estudias exactamente el vocabulario más relevante.
                  </p>
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los recursos oficiales también incluyen materiales específicos para áreas difíciles. El <strong>Use of English</strong>, por ejemplo, cuenta con bancos de ejercicios clasificados por tipo de tarea: transformaciones de palabras, palabras clave, textos con huecos múltiples. Cada ejercicio incluye claves de respuesta y, en muchos casos, explicaciones gramaticales detalladas. Para la sección de <strong>Writing</strong>, Cambridge proporciona modelos de respuesta comentados que muestran ejemplos de essays, articles, reviews y reports de diferentes bandas de calificación, acompañados de comentarios de examinadores explicando por qué cada texto recibió su puntuación específica. Estudiar estos modelos te permite internalizar exactamente qué calidad de escritura necesitas producir.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                La actualización constante de estos materiales es otra ventaja crítica. Cambridge revisa y actualiza sus Sample Papers cada 2-3 años para reflejar cambios en el formato de examen y mantenerse relevante con temas contemporáneos. Los materiales para 2026 incorporan temas actuales como sostenibilidad, tecnología digital, trabajo remoto y diversidad cultural, garantizando que tu preparación no solo te ayude a aprobar el examen, sino que también mejore tu capacidad de comunicarte sobre temas relevantes en el mundo actual.
              </p>
            </section>

            {/* Section 2: Libros Cambridge */}
            <section id="libros-cambridge" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <BookMarked className="w-8 h-8 text-orange-500 flex-shrink-0" />
                2. Libros Cambridge para estudio autodidacta
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los libros Cambridge oficiales representan el pilar fundamental para cualquier preparación seria de exámenes Cambridge. Cambridge University Press, en colaboración con Cambridge English Assessment, publica series específicamente diseñadas para cada nivel de examen, combinando teoría, práctica exhaustiva y estrategias específicas en formatos estructurados que facilitan el estudio autónomo. El <strong>Handbook del examen correspondiente</strong> (por ejemplo, "B2 First Handbook for Teachers") es la biblia no oficial de cada nivel: un documento gratuito de 50-100 páginas que detalla absolutamente todo sobre el examen, desde el formato hasta los criterios de corrección, disponible para descarga directa desde la web oficial de Cambridge.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Series principales de libros Cambridge</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-orange-100">
                    <h4 className="font-bold text-orange-700 mb-2"><a href="https://www.cambridge.es/en/catalogue/exams" target="_blank" rel="noopener noreferrer" className="hover:underline">Serie "Trainer"</a></h4>
                    <p className="text-orange-600 text-sm">
                      6 exámenes de práctica completos con claves detalladas, más secciones de técnicas específicas para cada parte del examen.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-100">
                    <h4 className="font-bold text-orange-700 mb-2"><a href="https://www.cambridge.es/en/catalogue/exams/courses" target="_blank" rel="noopener noreferrer" className="hover:underline">Serie "Complete"</a></h4>
                    <p className="text-orange-600 text-sm">
                      Combina preparación de examen con desarrollo de habilidades lingüísticas generales, incluyendo gramática, vocabulario y funciones comunicativas.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-100">
                    <h4 className="font-bold text-orange-700 mb-2"><a href="https://www.cambridge.es/en/catalogue/exams/courses" target="_blank" rel="noopener noreferrer" className="hover:underline">Serie "Objective"</a></h4>
                    <p className="text-orange-600 text-sm">
                      20-30 unidades cortas para sesiones de 60-90 minutos. Incluye mini-tests al final de cada sección para autoevaluación.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para el estudio autodidacta estructurado, las series <strong>Trainer y Complete</strong> son las más reconocidas. Los libros "<a href="https://www.cambridge.es/en/catalogue/exams" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Trainer</a>" (como "B2 First Trainer" o "C1 Advanced Trainer") ofrecen seis exámenes de práctica completos con claves de respuesta detalladas, además de secciones dedicadas a técnicas específicas para cada parte del examen. Cada test incluye consejos estratégicos sobre gestión del tiempo, identificación de trampas comunes y técnicas de aproximación a diferentes tipos de preguntas. La serie "Complete" (por ejemplo, "Complete First" o "Complete Advanced") combina preparación de examen con desarrollo de habilidades lingüísticas generales, incluyendo unidades temáticas que trabajan gramática, vocabulario y funciones comunicativas mientras preparan simultáneamente para el formato específico del examen.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Libros especializados por habilidad y sección</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Además de los cursos completos, Cambridge publica libros especializados que profundizan en secciones específicas del examen. <strong>"Grammar and Vocabulary for First"</strong> y <strong>"Grammar and Vocabulary for Advanced"</strong> son recursos intensivos que trabajan sistemáticamente las estructuras gramaticales y campos léxicos que aparecen con mayor frecuencia en los exámenes. Cada libro contiene aproximadamente 25 unidades temáticas con ejercicios graduados, tests de revisión cada 5 unidades, y un componente online con cientos de ejercicios adicionales. Para estudiantes que luchan específicamente con Use of English, estos libros son prácticamente imprescindibles, proporcionando la práctica masiva necesaria para dominar transformaciones de palabras, collocations y expresiones idiomáticas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Serie "Writing" específica</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Desglosa exhaustivamente las tareas de escritura del examen. Incluyen modelos de cada tipo de texto (essays, articles, reviews, reports, letters), análisis detallado de estructura, bancos de expresiones útiles organizadas por función.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Muchos incluyen rúbricas de evaluación simplificadas que te permiten autoevaluar tus propios textos.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Libros para Speaking</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    "Speaking for First" incluye transcripciones completas de exámenes Speaking reales de diferentes bandas de calificación, análisis de qué hace efectiva cada respuesta, y ejercicios de práctica.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Incluyen códigos QR o links a videos online donde puedes ver exámenes Speaking reales.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 text-white rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Precios orientativos de libros Cambridge (2026)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">25-45€</div>
                    <div className="text-zinc-400 text-sm">Por título formato físico</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">32-38€</div>
                    <div className="text-zinc-400 text-sm">Trainers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">35-42€</div>
                    <div className="text-zinc-400 text-sm">Complete + Workbook</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">80-120€</div>
                    <div className="text-zinc-400 text-sm">Kit completo 2-3 libros</div>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs mt-4">
                  Disponibles en Amazon.es, Casa del Libro, Fnac, distribuidores como Tecnolingüística, o directamente en centros Cambridge autorizados.
                </p>
              </div>
            </section>

            {/* Section 3: Plataformas digitales */}
            <section id="plataformas-digitales" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Laptop className="w-8 h-8 text-orange-500 flex-shrink-0" />
                3. Plataformas digitales y aplicaciones de apoyo
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La transformación digital de la preparación Cambridge ha creado un ecosistema de plataformas interactivas que complementan o incluso reemplazan materiales tradicionales para muchos estudiantes. Estas herramientas aprovechan <strong>tecnología adaptativa, gamificación y feedback instantáneo</strong> para acelerar el aprendizaje y mantener la motivación durante meses de preparación. Las plataformas digitales oficiales y verificadas ofrecen ventajas únicas: accesibilidad 24/7 desde cualquier dispositivo, seguimiento automático de progreso, adaptación del contenido según tus áreas débiles, y actualización constante con nuevas preguntas y materiales.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Cambridge English Testbank</h3>
                <p className="text-blue-700 mb-4">
                  Cambridge English lanzó en 2023 su plataforma oficial "Cambridge English Testbank", revolucionando la preparación digital. Esta plataforma de suscripción (aproximadamente <strong>15-25€ mensuales</strong> según el nivel) proporciona acceso ilimitado a miles de preguntas oficiales organizadas por nivel y sección de examen.
                </p>
                <ul className="space-y-2 text-blue-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Tecnología adaptativa que ajusta dificultad según tu rendimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Explicaciones detalladas para cada respuesta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Dashboards que predicen tu puntuación probable</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">Write & Improve (Gratuito)</h3>
                <p className="text-green-700 mb-4">
                  Este servicio gratuito te permite escribir textos ilimitados de cualquier tipo (essays, articles, reviews, emails) y recibir evaluación instantánea sobre gramática, vocabulario, organización y adecuación al nivel objetivo.
                </p>
                <p className="text-green-600 text-sm">
                  La IA ha sido entrenada con más de un millón de textos reales de estudiantes. Puedes reescribir y reenviar textos múltiples veces, comparando versiones y observando cómo mejoras específicas elevan tu puntuación. Para candidatos que preparan B2 First, C1 Advanced o C2 Proficiency, esta herramienta gratuita equivale a <strong>tener un tutor de writing disponible 24/7</strong>.
                </p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Aplicaciones móviles y recursos interactivos</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="border border-zinc-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-zinc-900">British Council LearnEnglish</h4>
                  </div>
                  <p className="text-zinc-600 text-sm">
                    Aplicaciones específicas para gramática, vocabulario y listening, todas con contenido graduado por nivel MCER y actividades alineadas con formatos Cambridge.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-zinc-900">Johnny Grammar Word Challenge</h4>
                  </div>
                  <p className="text-zinc-600 text-sm">
                    Gamifica la práctica de gramática y vocabulario con quizzes cronometrados, tablas de clasificación y logros desbloqueables. Perfecta para sesiones de 5-10 minutos.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-zinc-900">Quizlet</h4>
                  </div>
                  <p className="text-zinc-600 text-sm">
                    Miles de sets de flashcards creados específicamente para vocabulario Cambridge. Busca "B2 First vocabulary" o "C1 Advanced collocations" para encontrar sets de profesores y estudiantes exitosos.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-zinc-900">ELSA Speak</h4>
                  </div>
                  <p className="text-zinc-600 text-sm">
                    Usa reconocimiento de voz para analizar tu pronunciación, identificar errores específicos de fonemas y proporcionar ejercicios correctivos. Mejora claridad y fluidez significativamente.
                  </p>
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para práctica específica de <strong>Listening</strong>, "English Listening" y "Learn English Podcasts" del British Council proporcionan cientos de audios auténticos con transcripciones, preguntas de comprensión y ejercicios de vocabulario. Los audios cubren niveles desde A2 hasta C1, con acentos británicos, americanos, australianos y otros, preparándote para la diversidad de acentos que aparecen en exámenes Cambridge. La posibilidad de ajustar la velocidad de reproducción y repetir secciones específicas infinitas veces convierte estas apps en laboratorios de listening personales.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                "<a href="https://www.cambridge.es/en/catalogue/exams" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">English Vocabulary in Use</a>" de Cambridge tiene aplicaciones complementarias a sus libros físicos, proporcionando ejercicios interactivos adicionales con las mismas unidades de vocabulario temático. Estas apps son especialmente útiles porque sincronizan el progreso entre dispositivos y libro físico, permitiendo estudiar en casa con el libro y repasar en movimiento con la app. Las notificaciones programables te recuerdan practicar regularmente, combatiendo la procrastinación que sabotea muchas preparaciones autodidactas.
              </p>
            </section>

            {/* Section 4: Cursos especializados */}
            <section id="cursos-especializados" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-orange-500 flex-shrink-0" />
                4. Cursos especializados de preparación para Cambridge
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los cursos especializados Cambridge ofrecen algo que ningún libro o plataforma digital puede replicar completamente: <strong>instrucción personalizada de profesores expertos, feedback humano matizado y práctica interactiva</strong> con compañeros que simula las condiciones reales del examen Speaking. Un curso Cambridge efectivo no es simplemente una clase de inglés general; es entrenamiento específico en estrategias de examen, técnicas de gestión del tiempo y análisis profundo de criterios de evaluación que transforma estudiantes de inglés en candidatos estratégicos que maximizan su puntuación.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Estructura típica de cursos Cambridge</h3>
                <p className="text-amber-700 mb-4">
                  Los cursos Cambridge se estructuran típicamente en programas de <strong>3-9 meses</strong> con sesiones de 2-4 horas semanales, totalizando 60-120 horas de instrucción directa. Los mejores centros limitan los grupos a 8-12 estudiantes para garantizar atención personalizada y máxima práctica oral.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-amber-700 text-sm">
                  <div>
                    <div className="font-bold text-lg">40%</div>
                    <div>Práctica de examen</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">30%</div>
                    <div>Desarrollo lingüístico</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">20%</div>
                    <div>Speaking/Writing</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">10%</div>
                    <div>Estrategias y simulacros</div>
                  </div>
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los <strong>centros preparadores Cambridge autorizados</strong> poseen ventajas significativas sobre academias generales. Primero, sus profesores han completado formación especializada en metodología de preparación Cambridge y muchos son examinadores certificados que entienden íntimamente qué buscan los evaluadores. Segundo, estos centros reciben materiales exclusivos de Cambridge Assessment, incluyendo exámenes de práctica no disponibles públicamente y actualizaciones tempranas sobre cambios de formato. Tercero, suelen ofrecer Mock Exams (simulacros completos) calificados por examinadores reales, proporcionando predicciones precisas de tu puntuación probable y feedback específico sobre áreas de mejora.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Modalidades de cursos: presencial, online e híbrido</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Online sincrónicos</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Replican virtualmente la experiencia de clase tradicional usando plataformas como Zoom con funcionalidades interactivas: breakout rooms para Speaking, pizarras compartidas, grabación para revisión.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Ventaja: flexibilidad geográfica y horaria, acceso a profesores expertos independientemente de ubicación.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Presenciales</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Ventajas en práctica intensiva de Speaking donde lenguaje corporal, contacto visual y gestión del espacio juegan roles importantes. Facilita networking con compañeros de preparación.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Ideal para estudiantes con tendencia a distracción digital o dificultad con autodisciplina.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Híbridos</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Combinan 2-3 sesiones presenciales mensuales para práctica intensiva de Speaking y Writing, con plataformas digitales para trabajo independiente durante la semana.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Estudiantes en programas híbridos completan objetivos un 34% más rápido que en formatos exclusivamente presenciales.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 text-white rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Costes orientativos de cursos Cambridge (Madrid, 2026)</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">250-450€</div>
                    <div className="text-zinc-400 text-sm">Curso trimestral grupal (48 horas)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">30-60€/hora</div>
                    <div className="text-zinc-400 text-sm">Clases individuales</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">75€/mes</div>
                    <div className="text-zinc-400 text-sm">Grupos reducidos (8h/mes)</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Planificación y técnicas */}
            <section id="planificacion-estudio" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-orange-500 flex-shrink-0" />
                5. Planificación y técnicas de estudio efectivas
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La diferencia entre aprobar y suspender un examen Cambridge frecuentemente no radica en la capacidad lingüística sino en la <strong>calidad de la planificación y consistencia de la preparación</strong>. Un plan de estudio efectivo balancea las cuatro habilidades evaluadas, incluye revisión espaciada del contenido, simula condiciones reales de examen progresivamente y se adapta según tu progreso y áreas débiles identificadas. Los estudios sobre preparación Cambridge demuestran que candidatos con planes estructurados de 3-6 meses tienen tasas de aprobación <strong>40-60% superiores</strong> comparados con quienes estudian esporádicamente sin estructura clara.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Primer paso crítico: Mock Test diagnóstico</h3>
                <p className="text-orange-700 mb-4">
                  Realiza un Mock Test completo bajo condiciones cronometradas reales para identificar la brecha entre tu nivel presente y tu nivel objetivo.
                </p>
                <p className="text-orange-600 text-sm">
                  <strong>Regla general:</strong> Avanzar un subnivel MCER completo (por ejemplo, de B2.1 a B2.2) requiere aproximadamente 150-200 horas de estudio y práctica efectiva. Si tu nivel actual es B1+ y pretendes presentar B2 First en 3 meses, necesitas planificar 12-15 horas semanales de estudio comprometido.
                </p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Distribución óptima del tiempo de estudio semanal</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Una estructura modelo para <strong>10 horas semanales</strong> podría incluir:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
                <div className="bg-zinc-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-orange-500">2h</div>
                  <div className="text-zinc-600 text-sm">Reading + estrategias</div>
                </div>
                <div className="bg-zinc-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-orange-500">2h</div>
                  <div className="text-zinc-600 text-sm">Writing + revisión</div>
                </div>
                <div className="bg-zinc-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-orange-500">2h</div>
                  <div className="text-zinc-600 text-sm">Listening auténtico</div>
                </div>
                <div className="bg-zinc-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-orange-500">2h</div>
                  <div className="text-zinc-600 text-sm">Speaking (con tutor/compañero)</div>
                </div>
                <div className="bg-zinc-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-orange-500">1h</div>
                  <div className="text-zinc-600 text-sm">Gramática y vocabulario</div>
                </div>
                <div className="bg-zinc-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-orange-500">1h</div>
                  <div className="text-zinc-600 text-sm">Tests cronometrados</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Técnicas de estudio basadas en evidencia científica</h3>

              <div className="space-y-6 my-8">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-purple-800">Repetición espaciada</h4>
                  </div>
                  <p className="text-purple-700 text-sm">
                    En lugar de estudiar 50 palabras en una sesión maratoniana, distribuir esas palabras en múltiples sesiones de revisión programadas según la curva del olvido (después de 1 día, 3 días, 1 semana, 2 semanas, 1 mes) multiplica dramáticamente la retención a largo plazo. Aplicaciones como <strong>Anki</strong> o <strong>Quizlet</strong> automatizan este proceso.
                  </p>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-bold text-indigo-800">Práctica intercalada</h4>
                  </div>
                  <p className="text-indigo-700 text-sm">
                    En lugar de dedicar una sesión completa solo a Reading, mezclar diferentes tipos de tareas en cada sesión fortalece tu capacidad de cambiar mentalmente entre diferentes modos de pensamiento. Una sesión de 90 minutos podría incluir: 30 min Reading, 20 min Use of English, 25 min Listening, 15 min revisión de Writing.
                  </p>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Timer className="w-5 h-5 text-teal-600" />
                    <h4 className="font-bold text-teal-800">Autoevaluación formativa</h4>
                  </div>
                  <p className="text-teal-700 text-sm">
                    Tests de progreso cada 2-3 semanas proporcionan datos objetivos sobre tu mejora. Completar una sección bajo condiciones cronometradas, calificar tus respuestas y analizar patrones en tus errores te permite enfocar estudio adicional donde más impacta. Mantener un registro crea una visualización motivante de tu progreso.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-green-800">Inmersión lingüística diaria</h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Cambiar el idioma de tu teléfono a inglés, consumir podcasts durante desplazamientos, leer noticias en inglés, ver series con subtítulos en inglés (nunca en español) acumula cientos de horas adicionales de exposición lingüística sin requerir tiempo específico de estudio.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Recursos para jóvenes */}
            <section id="recursos-jovenes" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-orange-500 flex-shrink-0" />
                6. Recursos específicos para jóvenes y niños
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los exámenes Cambridge Young Learners (Pre A1 Starters, A1 Movers, A2 Flyers) y los formatos escolares de Key, Preliminary y First requieren <strong>recursos pedagógicamente adaptados</strong> que motiven a estudiantes jóvenes mediante elementos visuales atractivos, narrativas envolventes y actividades lúdicas. Cambridge ha desarrollado materiales especializados que enseñan inglés efectivamente mientras preparan específicamente para el formato de estos exámenes, convirtiendo la preparación en experiencia agradable en lugar de tarea tediosa.
              </p>

              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-pink-800 mb-4">Serie "Fun for..." (Young Learners)</h3>
                <p className="text-pink-700 mb-4">
                  Fun for Starters, Fun for Movers, Fun for Flyers representa el estándar de oro para preparación Young Learners autodidacta o en familia.
                </p>
                <ul className="space-y-2 text-pink-600 text-sm">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Práctica de examen con historias ilustradas y juegos de vocabulario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Canciones con códigos QR a videos animados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Pegatinas motivacionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Instrucciones claras para padres sin formación en enseñanza de inglés</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-cyan-800 mb-4">Kid's Box (2ª edición)</h3>
                <p className="text-cyan-700 mb-4">
                  El curso multi-nivel más usado internacionalmente para preparación Young Learners desde edad preescolar hasta 12 años. Los siete niveles progresivos cubren desde principiantes absolutos hasta A2/B1.
                </p>
                <p className="text-cyan-600 text-sm">
                  La metodología incluye componentes kinestésicos (TPR - Total Physical Response), rutinas predecibles que generan seguridad, y presentación cíclica de vocabulario. Materiales digitales complementarios: juegos interactivos, karaoke de canciones temáticas, videos animados.
                </p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Métodos pedagógicos para mantener motivación juvenil</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="border border-zinc-200 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Sistemas de recompensa progresiva</h4>
                  <p className="text-zinc-600 text-sm">
                    Charts de progreso visual con stickers, badges digitales tras completar milestones, celebraciones familiares al alcanzar objetivos. Gamifica externamente el aprendizaje, incrementando persistencia ante dificultades.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Sesiones cortas y variadas</h4>
                  <p className="text-zinc-600 text-sm">
                    Cinco sesiones de 20-30 minutos distribuidas en la semana superan una sesión de 2 horas. Cada sesión: warm-up con canción/juego, nuevo vocabulario, práctica mediante juego, consolidación con workbook, cierre con actividad de movimiento.
                  </p>
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed">
                Para <strong>adolescentes</strong> preparando Key for Schools, Preliminary for Schools o First for Schools, la serie <strong>"Prepare!"</strong> de Cambridge incorpora temas como redes sociales, música actual, tecnología, identidad personal y relaciones, presentados mediante textos auténticos (posts reales, artículos de revistas teen, podcasts juveniles) que resuenan con experiencias de vida de los estudiantes. Los vídeos incluyen teenagers reales hablando sobre sus vidas, no actores adultos simulando adolescentes, creando modelos lingüísticos auténticos y relacionables.
              </p>
            </section>

            {/* Section 7: Estrategias prácticas */}
            <section id="estrategias-practicas" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-orange-500 flex-shrink-0" />
                7. Estrategias prácticas para maximizar tu preparación
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Más allá de conocer qué recursos usar, el éxito en exámenes Cambridge requiere implementar <strong>estrategias específicas de preparación</strong> que optimicen retención, desarrollen automaticidad en habilidades clave y construyan confianza psicológica para rendir óptimamente bajo presión. Las estrategias basadas en evidencia científica sobre aprendizaje de lenguas y preparación de exámenes pueden aumentar tu puntuación efectiva <strong>10-20 puntos</strong> comparado con estudio sin metodología clara.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Técnica de simulación progresiva</h3>
                <ol className="space-y-3 text-orange-700 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <span>Secciones individuales sin límite de tiempo (comprensión profunda)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <span>Secciones individuales cronometradas (Reading: 60 minutos exactos)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <span>Combinaciones de dos secciones consecutivas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    <span>Mock Exams completos bajo condiciones exactas de examen real</span>
                  </li>
                </ol>
                <p className="text-orange-600 text-xs mt-4">
                  Esta progresión entrena no solo conocimiento sino también resistencia física y mental necesaria para mantener concentración durante 3-4 horas de examen.
                </p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Análisis sistemático de errores</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Después de cada práctica o test, dedica 10-15 minutos a categorizar tus errores:
              </p>
              <ul className="space-y-2 text-zinc-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                  <span>¿Error de vocabulario desconocido?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                  <span>¿Fallo en comprensión de instrucciones?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                  <span>¿Conocías la respuesta pero la leíste mal?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                  <span>¿Error de tiempo que te presionó a adivinar?</span>
                </li>
              </ul>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Mantener registro de estos patrones revela áreas sistemáticas de debilidad que requieren atención dirigida. Si el 60% de tus errores de Reading involucran preguntas sobre actitud del autor o tono del texto, sabes exactamente qué habilidad específica practicar más intensivamente.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Técnicas de gestión del tiempo durante el examen</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Reading: Regla 60/40</h4>
                  <p className="text-zinc-600 text-sm">
                    60% del tiempo leyendo textos cuidadosamente, 40% respondiendo. En B2 First Reading (60 min, 52 preguntas): ~35 min lectura activa, ~25 min responder y revisar.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">"First pass, second pass"</h4>
                  <p className="text-zinc-600 text-sm">
                    Primer repaso: solo preguntas 80%+ seguro. Segundo repaso: volver a preguntas marcadas. Previene dejar preguntas fáciles en blanco por perder tiempo en difíciles.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Writing: División estricta</h4>
                  <p className="text-zinc-600 text-sm">
                    B2 First Writing (1h 20min, 2 tareas): 40 min exactos por tarea. Cada tarea: 5 min planificación, 30 min escritura, 5 min revisión.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Preparación psicológica</h4>
                  <p className="text-zinc-600 text-sm">
                    Visualización detallada completando el examen con confianza. Ejercicios de respiración (4 seg inhalar, 7 seg retener, 8 seg exhalar) entre secciones.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-amber-800 mb-3">Semana final antes del examen</h4>
                <p className="text-amber-700 text-sm">
                  <strong>Reducir</strong> estudio intensivo y <strong>aumentar</strong> descanso. Tu cerebro consolida aprendizaje durante sueño; dormir 8 horas cada noche de la última semana es más valioso que horas adicionales de práctica. Revisión ligera de estrategias, vocabulario clave y formatos. El día antes: ejercicio ligero, comer bien, evitar alcohol, acostarte temprano.
                </p>
              </div>
            </section>

            {/* Section 8: FAQ */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-orange-500 flex-shrink-0" />
                8. Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-6">
                    <h3 className="font-bold text-zinc-900 mb-3">{item.question}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Conclusión */}
            <section id="conclusion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-orange-500 flex-shrink-0" />
                9. Conclusión
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Preparar exitosamente un examen Cambridge en 2026 requiere más que simplemente hablar inglés: exige <strong>estrategia, recursos adecuados y compromiso consistente</strong> durante meses. Esta guía exhaustiva te ha proporcionado un mapa completo del panorama de recursos disponibles, desde materiales oficiales gratuitos de Cambridge English hasta libros especializados, plataformas digitales interactivas y cursos profesionales.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Las claves fundamentales para recordar</h3>
                <ul className="space-y-3 text-orange-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Priorizar siempre materiales oficiales Cambridge para garantizar autenticidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Balancear práctica de las cuatro habilidades evaluadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Implementar técnicas de estudio basadas en evidencia como repetición espaciada y simulación progresiva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Dedicar tiempo suficiente (generalmente 3-6 meses) para preparación integral</span>
                  </li>
                </ul>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La inversión en recursos Cambridge adecuados, ya sean 60-100€ en libros oficiales o 250-500€ en curso especializado, representa una fracción del valor de la certificación que obtendrás. Un certificado Cambridge B2 First, C1 Advanced o C2 Proficiency abre puertas académicas y profesionales que justifican ampliamente esta inversión inicial. Más importante aún, el proceso de preparación no solo te ayuda a aprobar un examen, sino que desarrolla genuinamente tu capacidad de comunicarte efectivamente en inglés en situaciones reales: comprender textos complejos, expresar ideas sofisticadas por escrito, seguir conversaciones naturales y participar activamente en debates.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Tu próximo paso inmediato debería ser <strong>realizar un Mock Test diagnóstico completo</strong> bajo condiciones cronometradas para establecer tu nivel actual preciso y la brecha que necesitas cerrar. Después, diseña tu plan de preparación personalizado seleccionando recursos específicos según tu estilo de aprendizaje, presupuesto y áreas de debilidad identificadas. Centros especializados como nuestra <strong><Link to="/academia-ingles-barrio-del-pilar" className="text-orange-600 hover:underline font-medium">academia en Barrio del Pilar</Link></strong>, con metodología científica y tasa de éxito del 100% en 2024-25, pueden proporcionarte estructura y apoyo experto si prefieres preparación guiada. También ofrecemos <Link to="/ingles-la-vaguada/particulares" className="text-orange-600 hover:underline font-medium">clases particulares</Link> especializadas para <Link to="/examenes-cambridge/b2-first" className="text-orange-600 hover:underline font-medium">B2 First</Link> y otros <Link to="/examenes-cambridge" className="text-orange-600 hover:underline font-medium">exámenes Cambridge</Link>.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Cambridge English no evalúa solo conocimiento memorizado sino tu capacidad real de usar inglés funcionalmente en contextos diversos. Integra el inglés en tu vida diaria más allá del estudio formal: consume contenido en inglés que genuinamente disfrutas, encuentra comunidades online donde participes en inglés, y busca oportunidades de usar inglés prácticamente siempre que sea posible. Esta inmersión complementa tu preparación formal y transforma el inglés de asignatura académica en herramienta viva que usas naturalmente. Con los recursos correctos, planificación inteligente y dedicación sostenida, <strong>tu certificado Cambridge 2026 está completamente a tu alcance</strong>. ¡Comienza hoy mismo con tu primer paso hacia el éxito!
              </p>
            </section>

          </div>
        </div>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                  Prepárate con Impulse English Academy
                </h2>
                <p className="text-zinc-600 mb-6">
                  Centro Oficial de Preparación Cambridge con <strong>100% de aprobados</strong> en las convocatorias 2024-25. Metodología basada en repetición espaciada y práctica comunicativa intensiva.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Acceso a materiales oficiales Cambridge exclusivos
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Mock Exams calificados por examinadores certificados
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Grupos reducidos con máximo 8 estudiantes
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Test diagnóstico gratuito para determinar tu nivel
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/34604910611?text=Hola,%20me%20interesa%20información%20sobre%20recursos%20y%20preparación%20Cambridge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                  <Link
                    to="/examenes-cambridge"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Ver cursos Cambridge
                  </Link>
                </div>
              </div>
              <div>
                <LeadForm
                  title="Asesoramiento gratuito"
                  subtitle="Te ayudamos a elegir los mejores recursos"
                  ctaText="Solicitar información"
                  source="blog-libros-cambridge"
                  showPhone={true}
                  showAge={true}
                  showLevel={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/examenes-cambridge/guia-completa" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-orange-500 text-sm font-medium">Guía</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-orange-500 transition-colors">
                    Guía Completa de Exámenes Cambridge
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Todo sobre niveles, estructura y preparación</p>
                </div>
              </Link>
              <Link to="/examenes-cambridge/fechas" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-orange-500 text-sm font-medium">Calendario</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-orange-500 transition-colors">
                    Fechas Exámenes Cambridge 2026
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Calendario oficial y fechas límite de inscripción</p>
                </div>
              </Link>
              <Link to="/linguaskill" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-orange-500 text-sm font-medium">Linguaskill</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-orange-500 transition-colors">
                    Guía Completa del Examen Linguaskill
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Estructura, ejemplos y estrategias de preparación</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* External Authority Link */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.cambridgeenglish.org/es/exams-and-tests/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-600 hover:underline"
          >
            → Más información en Cambridge English - Exámenes oficiales
          </a>
          <span className="mx-2 text-zinc-300">|</span>
          <a
            href="https://www.cambridge.es/en/catalogue/exams"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-600 hover:underline"
          >
            → Catálogo de libros Cambridge
          </a>
          <span className="mx-2 text-zinc-300">|</span>
          <a
            href="https://www.youtube.com/@CambridgeEnglishSpain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-600 hover:underline"
          >
            → Canal de YouTube Cambridge English Spain
          </a>
        </div>
      </section>

      <Footer />

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
