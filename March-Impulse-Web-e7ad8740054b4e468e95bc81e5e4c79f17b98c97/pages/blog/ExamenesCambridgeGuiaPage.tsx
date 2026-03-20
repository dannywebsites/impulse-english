import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, CheckCircle, Award, GraduationCap, Briefcase, MessageCircle, ChevronRight, Users, FileText, Target, Lightbulb, Globe, Headphones, Mic, PenTool, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import Breadcrumb from '../../components/Breadcrumb';

const articleSchema = generateArticleSchema({
  headline: "Guía Completa de Exámenes Cambridge 2026: Niveles, Estructura y Preparación",
  description: "Guía definitiva de exámenes Cambridge: B1 Preliminary, B2 First, C1 Advanced y C2 Proficiency. Estructura, preparación, fechas y consejos de expertos.",
  url: `${businessInfo.url}/blog/examenes-cambridge-guia`,
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01"
});

const tableOfContents = [
  { id: 'sistema-niveles', title: 'Sistema de Niveles Cambridge: Del A1 al C2 según el MCER' },
  { id: 'qualifications-generales', title: 'Cambridge English Qualifications: Exámenes Generales por Nivel' },
  { id: 'examenes-especializados', title: 'Exámenes Especializados: Young Learners, Business y Enseñanza' },
  { id: 'estructura-b2-first', title: 'Estructura Detallada del B2 First: El Examen Más Solicitado' },
  { id: 'reading-use-english', title: 'Reading y Use of English: Estrategias por Componente' },
  { id: 'writing-listening-speaking', title: 'Writing, Listening y Speaking: Domina las Cuatro Habilidades' },
  { id: 'preparacion-efectiva', title: 'Preparación Efectiva: Metodologías y Cronogramas Realistas' },
  { id: 'recursos-oficiales', title: 'Recursos Oficiales Cambridge y Herramientas Complementarias' },
  { id: 'faq', title: 'Preguntas Frecuentes sobre Exámenes Cambridge' },
  { id: 'conclusion', title: 'Conclusión y Próximos Pasos' },
];

const newFaqItems = [
  {
    question: "¿Para qué sirve el A2 de Cambridge?",
    answer: "El A2 Key de Cambridge acredita un nivel básico de inglés suficiente para comunicarse en situaciones cotidianas sencillas, viajes, contextos sociales simples y requisitos básicos de empleo. Es el primer paso oficial hacia certificaciones superiores y no caduca."
  },
  {
    question: "¿Es fácil el A2 Key?",
    answer: "El A2 Key es accesible para estudiantes con conocimientos básicos de inglés (Elementary). Evalúa comprensión lectora, auditiva, expresión escrita y oral en contextos simples y predecibles. La preparación típica requiere 2-3 meses de estudio regular."
  },
  {
    question: "¿A2 Key para niños o adultos?",
    answer: "El A2 Key está disponible en dos versiones: A2 Key for Schools (con temas adaptados a intereses juveniles de 11-14 años) y A2 Key estándar (contextos adultos). Ambos certifican exactamente el mismo nivel A2 del MCER con idéntica validez."
  },
  {
    question: "¿Cuánto cuesta el A2 Cambridge?",
    answer: "El precio del examen A2 Key de Cambridge en 2025/26 varía entre 110€ y 130€ según el centro examinador autorizado. La versión for Schools tiene el mismo coste. Estudiantes de universidades públicas pueden acceder a descuentos University Project."
  },
  {
    question: "¿Qué edad mínima para A2 Key?",
    answer: "No existe edad mínima oficial establecida para presentarse al A2 Key. Sin embargo, Cambridge recomienda A2 Key for Schools para estudiantes de 11-14 años y la versión estándar para mayores de 15 años, adaptando el contenido temático a cada grupo de edad."
  },
  {
    question: "¿B1 vs B2 qué nivel necesito?",
    answer: "El B1 (Preliminary) es intermedio básico, suficiente para viajes, comunicación cotidiana y requisitos universitarios mínimos. El B2 (First) es intermedio alto, ideal para conversaciones fluidas, estudios superiores y ámbitos laborales exigentes, ofreciendo mayor precisión y reconocimiento."
  },
  {
    question: '¿Qué nivel de inglés se necesita para pasar el TOEFL?',
    answer: 'El TOEFL iBT utiliza una escala de 0 a 120 puntos sin nivel mínimo fijo para aprobar. Las puntuaciones correlacionan con el MCER: B1 requiere 42-71 puntos, B2 necesita 72-94 puntos. Cada institución establece requisitos específicos según sus programas académicos o profesionales, pudiendo exigir niveles superiores como C1 o C2. Las universidades solicitan puntuaciones mínimas globales y por sección adaptadas a sus estándares particulares de admisión.'
  },
  {
    question: '¿Qué nivel de inglés se considera un 6.5 en el IELTS?',
    answer: 'Un 6.5 en IELTS corresponde al nivel B2 (intermedio superior) del MCER y clasifica al examinando como "usuario competente". Este nivel implica dominio efectivo del inglés con algunas imprecisiones ocasionales. Los candidatos comprenden textos complejos sobre temas abstractos o técnicos, se expresan con fluidez y espontaneidad suficiente para comunicarse cómodamente con hablantes nativos, y producen textos claros y detallados explicando ventajas y desventajas de planteamientos complejos.'
  },
  {
    question: '¿A qué nivel del IELTS equivale el nivel 5 de inglés?',
    answer: 'El nivel 5 en IELTS (Band 5) equivale al nivel B1 del MCER y se clasifica como "Usuario Modesto". Este nivel indica dominio parcial del inglés con capacidad para comprender el significado general en la mayoría de situaciones, aunque con numerosos errores. Las puntuaciones IELTS entre 4.5 y 5.5 corresponden al B1 del MCER. El examen evalúa cuatro destrezas: Listening, Reading, Writing y Speaking, con escala de 1 a 9 puntos.'
  }
];

const faqItems = [
  {
    question: '¿Cuánto cuestan los exámenes Cambridge y varía el precio según el nivel?',
    answer: 'Los exámenes Cambridge tienen precios que varían según el nivel específico, el centro examinador y la ubicación geográfica. En España durante 2026, el A2 Key cuesta aproximadamente 110-130€, el B1 Preliminary entre 130-150€, el B2 First entre 180-210€, el C1 Advanced entre 195-225€, y el C2 Proficiency entre 210-240€. Los exámenes "for Schools" mantienen precios idénticos a las versiones estándar. Los centros autorizados establecen tarifas individualmente dentro de rangos recomendados por Cambridge, por lo que conviene comparar entre centros cercanos. Estos precios incluyen certificación oficial con validez permanente, pero no cubren materiales de preparación ni cursos previos.'
  },
  {
    question: '¿Cuánto tiempo tarda en llegar el certificado oficial después del examen?',
    answer: 'Los resultados preliminares del examen se publican online aproximadamente 2-3 semanas después de la fecha de examen para modalidad por computadora, y 4-6 semanas para exámenes en papel. Estos resultados incluyen tu puntuación en la Cambridge English Scale y desglose por habilidad, pero no constituyen el certificado oficial. El certificado físico impreso (con sello Cambridge Assessment English y código de verificación QR) se envía por correo postal al centro examinador aproximadamente 6-8 semanas después del examen, quien te contactará para recogerlo personalmente. Alternativamente, puedes solicitar certificado digital descargable (formato PDF verificable) disponible 4 semanas post-examen mediante tu cuenta en Cambridge English portal, útil para aplicaciones universitarias con deadlines inminentes.'
  },
  {
    question: '¿Los exámenes Cambridge caducan o mantienen validez permanente?',
    answer: 'Los certificados Cambridge English (A2 Key, B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency) tienen validez permanente sin fecha de caducidad, diferenciándose fundamentalmente de exámenes como TOEFL o IELTS que pierden validez después de 2 años. Esta durabilidad refleja que Cambridge certifica nivel de competencia alcanzado, no estado temporal de habilidad. Sin embargo, algunas instituciones específicas (particularmente universidades norteamericanas y programas de inmigración) pueden imponer políticas internas exigiendo certificación lingüística no mayor a 2-3 años, independientemente de si el certificado mismo caduca formalmente. Verifica siempre requisitos específicos de la institución destinataria. Para reconocimiento laboral en Europa y contextos académicos españoles, la validez permanente es universalmente aceptada.'
  },
  {
    question: '¿Puedo presentar el examen por computadora en lugar de papel?',
    answer: 'Desde 2024, todos los Cambridge English Qualifications desde A2 Key hasta C2 Proficiency están disponibles en modalidad "Computer-Based", además de la tradicional "Paper-Based". La versión por computadora mantiene exactamente el mismo contenido, dificultad y formato de preguntas que la versión en papel, cambiando únicamente el medio de presentación. Ventajas de la modalidad digital: disponibilidad de fechas más frecuente (algunos centros ofrecen fechas semanales vs. papel típicamente 2-3 veces/año), resultados publicados 2 semanas más rápido, y mayor comodidad para typing en componente writing (muchos candidatos redactan más fluidamente digitando que escribiendo a mano). El componente Speaking permanece idéntico en ambas modalidades: presencial con examinadores. Disponibilidad de modalidad digital varía por centro; verifica con tu centro autorizado local qué opciones ofrecen.'
  },
  {
    question: '¿Necesito aprobar las cuatro habilidades por separado o se promedian?',
    answer: 'Los exámenes Cambridge utilizan un sistema de puntuación global integrando las cuatro habilidades, no requiriendo aprobación individual de cada componente. Tu puntuación final en la Cambridge English Scale se calcula promediando ponderadamente: Reading and Use of English representa 40%, Writing 20%, Listening 20%, y Speaking 20%. Para aprobar B2 First necesitas puntuación global de 160+ (sobre máximo 190). Esto significa que rendimiento excepcionalmente fuerte en una habilidad puede compensar debilidad relativa en otra. Por ejemplo, si obtienes 180 en Reading/Use of English y 180 en Listening (desempeño C1), puedes aprobar B2 First incluso con 150 en Writing y 150 en Speaking (rendimiento B1), ya que el promedio ponderado superará 160. Sin embargo, diferencias extremas entre habilidades resultan estadísticamente improbables; Cambridge diseña exámenes para que candidatos consistentes en nivel demuestren competencia balanceada.'
  },
  {
    question: '¿Qué diferencia hay entre B2 First y B2 First for Schools?',
    answer: 'B2 First y B2 First for Schools evalúan exactamente el mismo nivel de competencia lingüística (B2 del MCER) mediante estructura idéntica: mismo número de preguntas, misma duración, mismos criterios de evaluación y puntuación equivalente. La única diferencia está en los contextos y temas utilizados en los materiales. B2 First estándar emplea contextos de interés para adultos: artículos sobre carrera profesional, finanzas personales, política internacional, o problemáticas sociales contemporáneas. B2 First for Schools utiliza temas más relevantes para adolescentes escolares: actividades extracurriculares, relaciones entre compañeros, elección de carrera universitaria, o hobbies juveniles. Ambos certificados son intercambiables y reconocidos idénticamente por universidades y empleadores; el título oficial simplemente dice "B2 First" sin distinguir versión. Estudiantes universitarios o adultos deberían elegir versión estándar por familiaridad temática, mientras adolescentes de 14-18 años típicamente prefieren versión for Schools.'
  },
  {
    question: '¿Cuándo debo inscribirme y hay fecha límite para el examen?',
    answer: 'La inscripción para exámenes Cambridge debe realizarse directamente a través de un centro examinador autorizado, nunca directamente con Cambridge Assessment English. Los centros establecen fechas límite de inscripción típicamente 4-6 semanas antes de la fecha del examen, aunque algunos aceptan inscripciones tardías con recargo adicional hasta 2 semanas previas si quedan plazas disponibles. Recomendación: inscribirse mínimo 2 meses antes de la fecha deseada para asegurar plaza y permitir preparación estructurada conociendo deadline concreto. Los centros publican calendarios anuales con fechas disponibles (típicamente 3-6 fechas/año para papel, más frecuente para computadora) en sus sitios web. Durante inscripción deberás proporcionar identificación oficial (DNI/pasaporte; el nombre debe coincidir exactamente con el que aparecerá en certificado), fotografía reciente tipo carnet, y pago completo (efectivo, tarjeta o transferencia según centro). Algunos centros ofrecen descuentos para grupos de 10+ estudiantes inscribiéndose simultáneamente.'
  },
  {
    question: '¿Qué pasa si no apruebo el examen? ¿Puedo repetirlo inmediatamente?',
    answer: 'Si tu puntuación global no alcanza el umbral de aprobación (160 para B2 First, por ejemplo), no existe restricción temporal para volver a presentar el examen; puedes inscribirte inmediatamente para la siguiente fecha disponible pagando nuevamente la tarifa completa. Sin embargo, Cambridge emitirá certificado oficial del nivel demostrado: si obtuviste 140-159 en B2 First (por debajo del umbral B2 pero suficiente para B1), recibirás certificado acreditando nivel B1, evitando que el esfuerzo quede sin reconocimiento formal. Antes de repetir, analiza detalladamente tu Statement of Results (desglose de puntuación por habilidad) para identificar áreas requiriendo mejora focalizada. Estudiantes que repiten sin preparación adicional dirigida típicamente obtienen puntuaciones similares. Recomendación mínima: 6-8 semanas de estudio intensivo específicamente en componentes con puntuación más baja antes de segunda presentación. Consideración financiera: algunos estudiantes prefieren invertir el costo de repetición (180-210€) en curso de preparación profesional aumentando probabilidad de aprobación.'
  },
  {
    question: '¿Los examinadores penalizan errores ortográficos en Writing y Use of English?',
    answer: 'En componente Use of English (Parts 2, 3, 4), las respuestas deben estar ortográficamente correctas al 100%; un error de spelling resulta en puntuación cero para esa pregunta específica, incluso si la respuesta demuestra comprensión gramatical adecuada. Por ejemplo, en Part 3 (Word Formation), si la respuesta correcta es "independence" pero escribes "independance", no recibes punto. Esta rigurosidad refleja que Use of English evalúa precisión controlada, no comunicación espontánea. En contraste, componente Writing evalúa ortografía como subcategoría del criterio "Language", donde errores ocasionales de spelling son tolerados si no impiden comprensión. La rúbrica Cambridge especifica: errores de spelling "frecuentes" reducen puntuación en Language, pero errores "ocasionales" en palabras menos comunes no penalizan significativamente. Estrategia: prioriza vocabulario que dominas ortográficamente en Writing; en Use of English, verifica spelling meticulosamente de palabras derivadas (recuerda cambios como "beauty → beautiful" pero "decide → decision").'
  },
  {
    question: '¿Necesito nivel específico previo para presentar un examen Cambridge?',
    answer: 'No existen requisitos previos formales para inscribirse en ningún nivel de examen Cambridge; técnicamente podrías presentar C2 Proficiency sin haber tomado niveles inferiores. Sin embargo, esto es extremadamente inaconsejable por dos razones prácticas: probabilidad mínima de aprobación (menos del 5% de candidatos sin preparación estructurada aprueban niveles no correspondientes a su competencia actual) y costo financiero significativo (180-240€) sin retorno. Cambridge proporciona test online gratuito "Test Your English" (25 preguntas en 15-20 minutos) que estima tu nivel MCER actual, recomendando el examen apropiado. Alternativamente, centros de preparación ofrecen evaluaciones diagnósticas sin costo identificando nivel real. Regla general: si test diagnóstico indica B1, prepara B1 Preliminary; si indica B1+/B2-, prepara B2 First con 10-12 semanas de estudio intensivo. Presentarse a nivel superior esperando "estirarte" típicamente resulta en certificación del nivel inferior después de experiencia evaluativa frustrante.'
  }
];

export default function ExamenesCambridgeGuiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Exámenes Cambridge 2026: Guía Completa de Niveles y Preparación"
        description="Descubre todo sobre los exámenes Cambridge: niveles del A1 al C2, estructura detallada, preparación efectiva y recursos oficiales. Guía actualizada 2026 con estrategias probadas y consejos de expertos."
        keywords="exámenes cambridge, niveles cambridge, b2 first, c1 advanced, preparación cambridge, estructura exámenes cambridge, recursos cambridge oficiales, certificación inglés cambridge"
        canonical="/blog/examenes-cambridge-guia"
        ogType="article"
      />
      <Navbar />

      <article>
        {/* Hero Section */}
        <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
            items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Guía Cambridge' }
            ]}
            variant="light"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                  Exámenes Cambridge
                </span>
                <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actualizado 2026
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Guía Completa de Exámenes Cambridge: Todo lo que Necesitas Saber en 2026
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Descubre todo sobre los exámenes Cambridge: niveles, estructura, preparación y recursos oficiales. Guía actualizada 2026 con estrategias probadas.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
              alt="Estudiantes preparando exámenes Cambridge"
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
                  className="flex items-center gap-3 text-zinc-600 hover:text-accent-blue transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm">{item.title}</span>
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* FAQ Section - HIGH UP on page */}
        <FAQSection
          faqs={newFaqItems}
          title="Preguntas Frecuentes: Comparación con Otros Exámenes"
          className="mb-12"
        />

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                ¿Buscas certificar tu nivel de inglés con un título reconocido internacionalmente? Los <strong>exámenes Cambridge</strong> representan el estándar global más respetado para la evaluación del dominio del inglés. Más de 5,5 millones de personas en 130 países presentan anualmente estas certificaciones, que son aceptadas por más de 25.000 universidades, gobiernos y empresas multinacionales. A diferencia de otras certificaciones que caducan después de dos años, los títulos Cambridge mantienen validez permanente, convirtiéndolos en una inversión educativa que te acompañará durante toda tu carrera profesional.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Esta guía exhaustiva te proporcionará todo lo necesario para entender el ecosistema completo de exámenes Cambridge English. Desde los niveles básicos para escolares hasta las certificaciones avanzadas requeridas por programas de posgrado, cada examen está diseñado con objetivos específicos alineados al Marco Común Europeo de Referencia (MCER). Descubrirás la estructura detallada de cada prueba, los componentes evaluados, y estrategias concretas para maximizar tu puntuación en cada sección.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                El contenido está organizado para responder las preguntas más frecuentes: qué examen corresponde a tu nivel actual, cómo se estructura cada certificación, cuánto tiempo necesitas para prepararte efectivamente, qué recursos oficiales y complementarios existen, y cómo inscribirte en un centro autorizado. También exploraremos metodologías de preparación basadas en evidencia científica, incluyendo técnicas de repetición espaciada y aprendizaje activo que han demostrado aumentar significativamente las tasas de aprobación.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Tanto si eres estudiante universitario que necesita acreditar inglés para movilidad internacional, profesional buscando mejorar tu competitividad laboral, o académico que requiere certificación docente, encontrarás información práctica y actualizada para 2026. Si estás considerando prepararte con apoyo profesional, academias especializadas como <strong>Impulse English</strong> en Madrid ofrecen programas estructurados con tasas de aprobación del 100%, aunque este artículo te proporcionará también recursos para preparación autodidacta efectiva.
              </p>
            </section>

            {/* Section 1: Sistema de Niveles Cambridge */}
            <section id="sistema-niveles" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-accent-blue flex-shrink-0" />
                1. Sistema de Niveles Cambridge: Del A1 al C2 según el MCER
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los exámenes Cambridge English están estructurados según el <a href="https://www.coe.int/es/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline"><strong>Marco Común Europeo de Referencia para las Lenguas (MCER)</strong></a>, el sistema internacional que define seis niveles de competencia lingüística: A1, A2, B1, B2, C1 y C2. Este marco estandarizado permite que tu certificación sea reconocida y comprendida de forma consistente en cualquier país europeo y en la mayoría de instituciones educativas globales. Cambridge Assessment English no solo se alinea con el MCER, sino que participó activamente en su desarrollo, garantizando que cada examen evalúe con precisión las competencias descritas en cada nivel.
              </p>

              <div className="bg-gradient-to-r from-accent-blue/5 to-blue-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">Descripción de cada nivel MCER</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-zinc-200">
                    <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">A1</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Acceso</h4>
                      <p className="text-zinc-600 text-sm">Capacidad para comunicarse en situaciones muy básicas con frases simples sobre necesidades inmediatas.</p>
                    </div>

                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-zinc-200">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">A2</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Plataforma</h4>
                      <p className="text-zinc-600 text-sm">Puedes entender expresiones cotidianas frecuentes y comunicarte en tareas simples sobre información personal y familiar.</p>
                    </div>

                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-zinc-200">
                    <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">B1</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Intermedio</h4>
                      <p className="text-zinc-600 text-sm">Comprendes los puntos principales en situaciones de trabajo, estudio y ocio, y puedes producir textos sencillos sobre temas familiares.</p>
                    </div>

                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-zinc-200">
                    <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">B2</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Intermedio Alto</h4>
                      <p className="text-zinc-600 text-sm">Entiendes ideas principales de textos complejos, interactúas con fluidez espontánea con hablantes nativos, y produces textos claros sobre temas diversos expresando opiniones justificadas.</p>
                    </div>

                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-zinc-200">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">C1</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Dominio Operativo Eficaz</h4>
                      <p className="text-zinc-600 text-sm">Comprensión de textos extensos y complejos, expresión fluida sin esfuerzo aparente, y capacidad de usar el idioma con flexibilidad en contextos sociales, académicos y profesionales.</p>
                    </div>

                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-zinc-200">
                    <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">C2</span>
                    <div>
                      <h4 className="font-bold text-zinc-900">Maestría</h4>
                      <p className="text-zinc-600 text-sm">Prácticamente el mismo nivel que un hablante nativo educado, con capacidad para comprender prácticamente todo lo escuchado o leído, resumir información de diversas fuentes, y expresarse con precisión matizada incluso en situaciones complejas.</p>
                    </div>

                  </div>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Correspondencia entre Exámenes Cambridge y Niveles MCER</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Cada nivel MCER corresponde a uno o más exámenes Cambridge específicos. Para A1, existe el A1 Movers dentro de la serie Young Learners. El A2 se certifica mediante <strong>A2 Key (KET)</strong>, disponible tanto en versión estándar como "for Schools" para adolescentes. El B1 corresponde al <strong>B1 Preliminary (PET)</strong>, igualmente con versión escolar. El B2, el nivel más solicitado para acceso universitario en España, se acredita mediante el <strong>B2 First (FCE)</strong>, que también tiene modalidad "for Schools". El <strong>C1 Advanced (CAE)</strong> certifica el nivel C1, requerido para programas de máster en muchas universidades británicas. Finalmente, el <strong>C2 Proficiency (CPE)</strong> es el nivel más alto, solicitado para doctorados y cátedras académicas.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Esta progresión estructurada permite a los estudiantes planificar su trayectoria de certificación a largo plazo. Un estudiante de secundaria puede comenzar con el A2 Key for Schools, avanzar al B1 Preliminary for Schools antes de finalizar el bachillerato, obtener el B2 First durante los primeros años universitarios, y culminar con el C1 Advanced para estudios de posgrado. Esta escalabilidad elimina la necesidad de "empezar de cero" con cada certificación, ya que cada examen construye sobre las competencias del nivel anterior.
              </p>
            </section>

            {/* Section 2: Cambridge English Qualifications */}
            <section id="qualifications-generales" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-accent-blue flex-shrink-0" />
                2. Cambridge English Qualifications: Exámenes Generales por Nivel
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los Cambridge English Qualifications representan la línea principal de certificaciones para estudiantes y profesionales que buscan acreditar inglés general (no especializado en negocios o enseñanza). Esta serie de seis exámenes —desde A2 Key hasta C2 Proficiency— comparte una estructura metodológica común pero aumenta progresivamente en complejidad lingüística, profundidad temática y exigencia de precisión. Cada examen evalúa las cuatro habilidades fundamentales: <strong>Reading</strong> (comprensión lectora), <strong>Writing</strong> (expresión escrita), <strong>Listening</strong> (comprensión auditiva) y <strong>Speaking</strong> (expresión oral), aunque la distribución de tiempo y peso porcentual varía según el nivel.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-3">A2 Key (KET)</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Duración aproximada de <strong>2 horas</strong>. Diseñado para estudiantes que pueden comunicarse en situaciones cotidianas básicas. Evalúa capacidad para entender frases y expresiones de uso frecuente, realizar intercambios comunicativos simples, y describir aspectos del entorno inmediato.
                  </p>
                  <p className="text-blue-600 text-xs">
                    La versión "for Schools" utiliza contextos más relevantes para adolescentes (colegio, hobbies, familia) pero mantiene el mismo nivel de dificultad y validez que la versión estándar.
                  </p>
                </div>

                <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                  <h4 className="font-bold text-cyan-800 mb-3">B1 Preliminary (PET)</h4>
                  <p className="text-cyan-700 text-sm mb-3">
                    Dura aproximadamente <strong>2 horas y 20 minutos</strong>, evaluando capacidad para comunicarse en situaciones prácticas de viaje, trabajo y estudio. Los candidatos deben demostrar comprensión de textos directos sobre temas cotidianos, capacidad para escribir mensajes y cartas personales, y mantener conversaciones sobre experiencias, eventos y planes.
                  </p>
                  <p className="text-cyan-600 text-xs">
                    Particularmente valorado para intercambios en el extranjero o programas de formación profesional.
                  </p>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">B2 First, C1 Advanced y C2 Proficiency: Niveles Avanzados</h3>

              <div className="space-y-6 my-8">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">B2 First (FCE)</span>
                    <span className="text-teal-600 text-sm font-medium">El más popular</span>
                  </div>
                  <p className="text-teal-700 text-sm mb-3">
                    El examen Cambridge más popular, con aproximadamente <strong>3 horas y 30 minutos de duración</strong> divididas entre cuatro pruebas. Este nivel certifica capacidad para trabajar o estudiar en entorno angloparlante, entender programas de televisión sobre temas actuales, y mantener conversaciones sostenidas sobre temas diversos. Es el requisito mínimo para acceso a programas de grado en universidades españolas y muchas europeas.
                  </p>
                  <p className="text-teal-600 text-xs">
                    La preparación típica requiere 8-12 semanas para estudiantes que ya poseen un nivel intermedio sólido (aproximadamente B1+ en prueba diagnóstica).
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">C1 Advanced (CAE)</span>
                    <span className="text-green-600 text-sm font-medium">Para máster y posgrado</span>
                  </div>
                  <p className="text-green-700 text-sm mb-3">
                    Duración similar al First pero mayor complejidad, es requerido para admisión a programas de máster en Reino Unido, Australia y universidades europeas de alto prestigio. Los textos y audio son significativamente más complejos, incluyendo artículos académicos, extractos literarios y debates profesionales. Las tareas de writing requieren registro formal y capacidad argumentativa sofisticada.
                  </p>
                  <p className="text-green-600 text-xs">
                    Aproximadamente el 60% de candidatos al C1 Advanced ya poseen el B2 First, utilizándolo como paso intermedio en su progresión.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">C2 Proficiency (CPE)</span>
                    <span className="text-yellow-600 text-sm font-medium">Nivel máximo</span>
                  </div>
                  <p className="text-yellow-700 text-sm mb-3">
                    La certificación más alta, equivalente a dominio prácticamente nativo. Con <strong>4 horas de examen</strong>, evalúa capacidad para participar en contextos académicos avanzados, negociaciones profesionales de alto nivel, y producción de textos con sutileza retórica. Solo el 2-3% de estudiantes no nativos alcanza este nivel.
                  </p>
                  <p className="text-yellow-600 text-xs">
                    Requerido para cátedras universitarias, interpretación simultánea, y roles de liderazgo en organizaciones internacionales donde el inglés es lengua de trabajo exclusiva.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 3: Exámenes Especializados */}
            <section id="examenes-especializados" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-accent-blue flex-shrink-0" />
                3. Exámenes Especializados: Young Learners, Business y Enseñanza
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Además de los Cambridge English Qualifications generales, Cambridge Assessment English ofrece tres líneas especializadas diseñadas para poblaciones específicas con necesidades evaluativas particulares: niños de 6-12 años (Young Learners), profesionales del ámbito empresarial (Business English), y docentes de inglés (Teaching Knowledge Test). Estas certificaciones mantienen los estándares de rigor Cambridge pero adaptan contenidos, contextos y formatos de evaluación a las características y objetivos de cada grupo demográfico.
              </p>

              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-pink-800 mb-4">Cambridge English Young Learners (YLE)</h3>
                <p className="text-pink-700 mb-4">
                  Comprenden tres niveles progresivos: <strong>Pre A1 Starters</strong>, <strong>A1 Movers</strong> y <strong>A2 Flyers</strong>. Diseñados para estudiantes de primaria (6-12 años), estos exámenes utilizan ilustraciones coloridas, historias y actividades lúdicas para evaluar comprensión y expresión en contextos adecuados a la edad.
                </p>
                <div className="bg-white rounded-lg p-4 border border-pink-100">
                  <p className="text-pink-600 text-sm">
                    A diferencia de los exámenes para adultos, YLE <strong>no tiene aprobado/suspenso</strong>; cada niño recibe un certificado con "escudos" (máximo 5 por habilidad) que indican el nivel alcanzado. Esta aproximación pedagógica minimiza la ansiedad evaluativa y celebra los logros incrementales. Los exámenes YLE se administran exclusivamente en papel, con el speaking realizado mediante conversación individual con un examinador capacitado en educación infantil.
                  </p>
                </div>

              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Business English Certificates (BEC)</h3>
                <p className="text-indigo-700 mb-4">
                  Se ofrece en tres niveles: <strong>B1 Business Preliminary</strong>, <strong>B2 Business Vantage</strong> y <strong>C1 Business Higher</strong>. Estas certificaciones evalúan inglés en contextos empresariales auténticos: reuniones de equipo, presentaciones corporativas, redacción de informes, correspondencia comercial y negociaciones.
                </p>
                <p className="text-indigo-600 text-sm">
                  Los materiales incluyen gráficos financieros, extractos de manuales corporativos, y grabaciones de audio de conferencias telefónicas y videoconferencias. BEC es particularmente valorado por empresas multinacionales, departamentos de recursos humanos, y profesionales en sectores como finanzas, marketing internacional, logística y consultoría estratégica. La duración varía entre 2 horas y 30 minutos (B1) y 3 horas y 20 minutos (C1).
                </p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Teaching Knowledge Test (TKT) y Otras Certificaciones Docentes</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El <strong>Teaching Knowledge Test (TKT)</strong> es una certificación modular específica para profesores de inglés como lengua extranjera, evaluando conocimiento pedagógico independientemente del nivel de inglés personal del docente. Consta de tres módulos principales:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-zinc-100 rounded-lg p-4">
                  <h4 className="font-bold text-zinc-900 mb-2">Module 1</h4>
                  <p className="text-zinc-600 text-sm">Language and Background to Language Learning and Teaching</p>
                </div>
                <div className="bg-zinc-100 rounded-lg p-4">
                  <h4 className="font-bold text-zinc-900 mb-2">Module 2</h4>
                  <p className="text-zinc-600 text-sm">Planning Lessons and Use of Resources</p>
                </div>
                <div className="bg-zinc-100 rounded-lg p-4">
                  <h4 className="font-bold text-zinc-900 mb-2">Module 3</h4>
                  <p className="text-zinc-600 text-sm">Managing the Teaching and Learning Process</p>
                </div>

              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cada módulo dura 80 minutos y contiene 80 preguntas de opción múltiple sobre conceptos pedagógicos, planificación curricular, gestión de aula y evaluación formativa. TKT no requiere nivel de inglés específico para presentarse, aunque se recomienda B1 como mínimo para comprender las preguntas con claridad.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Adicionalmente, Cambridge ofrece módulos TKT especializados: <strong>TKT Young Learners</strong> (enseñanza a niños de 6-12 años), <strong>TKT CLIL</strong> (Content and Language Integrated Learning, para docentes que enseñan asignaturas curriculares en inglés), y <strong>TKT Practical</strong> (evaluación de habilidades docentes mediante grabaciones de clase reales). Estas certificaciones son reconocidas por ministerios de educación europeos, colegios internacionales, y programas de formación docente continua. No caducan y pueden complementarse con certificaciones de nivel de idioma (como C1 Advanced) para acreditar tanto competencia lingüística como pedagógica.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-amber-800 mb-2">Otros exámenes Cambridge</h4>
                <p className="text-amber-700 text-sm">
                  Para contextos académicos universitarios, Cambridge también administra el <strong>IELTS</strong> (International English Language Testing System) y <strong>Linguaskill</strong>, aunque estos son técnicamente distintos de los Cambridge English Qualifications. IELTS es requerido para inmigración a países angloparlantes y admisión universitaria, con validez de 2 años. Linguaskill es un test adaptativo por computadora que proporciona resultados en 48 horas, utilizado principalmente por universidades y empresas para evaluación rápida de grandes grupos.
                </p>
              </div>
            </section>

            {/* Section 4: Estructura Detallada del B2 First */}
            <section id="estructura-b2-first" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-accent-blue flex-shrink-0" />
                4. Estructura Detallada del B2 First: El Examen Más Solicitado
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El <strong>B2 First</strong> (anteriormente conocido como First Certificate in English o FCE) es la certificación Cambridge más demandada globalmente, con aproximadamente 350.000 candidatos anuales. Representa el punto crítico donde los estudiantes demuestran capacidad funcional para trabajar o estudiar en inglés sin necesitar supervisión constante o adaptaciones curriculares significativas. El examen consta de cuatro pruebas principales con una duración total de <strong>3 horas y 29 minutos</strong>, diseñadas para evaluar competencia comunicativa integral en contextos realistas que un usuario B2 encontraría en vida académica, profesional y social.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Estructura del B2 First</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-accent-blue">1h 15min</div>
                    <div className="text-zinc-400 text-sm">Reading & Use of English</div>
                    <div className="text-zinc-500 text-xs mt-1">40% de la puntuación</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">1h 20min</div>
                    <div className="text-zinc-400 text-sm">Writing</div>
                    <div className="text-zinc-500 text-xs mt-1">20% de la puntuación</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">40 min</div>
                    <div className="text-zinc-400 text-sm">Listening</div>
                    <div className="text-zinc-500 text-xs mt-1">20% de la puntuación</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">14 min</div>
                    <div className="text-zinc-400 text-sm">Speaking (en parejas)</div>
                    <div className="text-zinc-500 text-xs mt-1">20% de la puntuación</div>
                  </div>

                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Reading and Use of English</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                La primera prueba, Reading and Use of English, dura <strong>1 hora y 15 minutos</strong>, representando el 40% de la puntuación total del examen. Contiene 7 partes con 52 preguntas que evalúan simultáneamente comprensión lectora y dominio de estructuras gramaticales, vocabulario académico, colocaciones y expresiones idiomáticas. Esta integración de lectura y gramática refleja la filosofía Cambridge de que el conocimiento lingüístico formal solo es relevante cuando se aplica a comprensión de textos auténticos. Los textos provienen de fuentes reales: artículos periodísticos, fragmentos literarios contemporáneos, blogs especializados, y documentos informativos sobre ciencia, cultura, tecnología y sociedad.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Writing</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                La segunda prueba es Writing, con duración de <strong>1 hora y 20 minutos</strong>, constituyendo el 20% de la puntuación final. Los candidatos deben completar dos tareas obligatorias de aproximadamente 140-190 palabras cada una. La <strong>Tarea 1</strong> siempre es un ensayo argumentativo donde debes discutir dos puntos proporcionados en el prompt, añadir un tercero propio, y concluir con tu opinión justificada. La <strong>Tarea 2</strong> ofrece elección entre cuatro opciones: artículo periodístico, email/carta formal, reseña (de libro, película, restaurante, producto), o informe empresarial. Cada tipo de texto tiene convenciones de registro, estructura y propósito comunicativo específicas que deben respetarse para obtener puntuación completa.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Listening, Speaking y Sistema de Puntuación</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                El componente <strong>Listening</strong> dura aproximadamente 40 minutos (incluyendo 5 minutos para transferir respuestas) y representa el 20% de la nota. Contiene 4 partes con 30 preguntas basadas en monólogos, conversaciones informales, extractos de programas de radio, entrevistas y discusiones. Los audios se reproducen dos veces, simulando condiciones realistas donde a menudo puedes pedir repetición o clarificación. Los acentos incluyen británico, americano, australiano y ocasionalmente sudafricano o canadiense, reflejando la diversidad del inglés global. Las tareas incluyen opción múltiple, completar frases, y asociación de ideas con hablantes.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Speaking</strong> es la prueba final, con duración de 14 minutos para parejas de candidatos (ocasionalmente tríos si el número es impar), constituyendo el 20% restante de la puntuación. Consta de 4 partes: entrevista personal (2 minutos), turno largo individual (1 minuto cada candidato), tarea colaborativa (3 minutos), y discusión temática (4 minutos). Los examinadores evalúan cuatro criterios: gramática y vocabulario, pronunciación, discurso interactivo (capacidad de mantener conversación fluida), y gestión del discurso (organización coherente de ideas). Se realiza presencialmente con dos examinadores: uno interlocutor y otro asesor silencioso que toma notas.
              </p>

              <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 my-8">
                <h4 className="font-bold text-accent-blue mb-3">Sistema de Puntuación Cambridge English Scale</h4>
                <p className="text-zinc-600 text-sm mb-4">
                  El sistema de puntuación Cambridge para B2 First utiliza la Cambridge English Scale, donde:
                </p>
                <ul className="space-y-2 text-zinc-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>160-179:</strong> Aprobado en nivel B2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>180-190:</strong> B2 con "Grade A" (equivalente a entrada al C1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong>140-159:</strong> Certifica B1 aunque no se apruebe formalmente el B2</span>
                  </li>
                </ul>
                <p className="text-zinc-500 text-xs mt-4">
                  Esta estructura permite que incluso candidatos que no alcanzan el umbral B2 reciban certificación oficial del nivel inmediatamente inferior, evitando que el esfuerzo de preparación y pago quede sin reconocimiento formal. Los resultados se publican aproximadamente 4 semanas después del examen en papel, o 2 semanas si fue por computadora.
                </p>
              </div>
            </section>

            {/* Section 5: Reading y Use of English */}
            <section id="reading-use-english" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-accent-blue flex-shrink-0" />
                5. Reading y Use of English: Estrategias por Componente
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El componente Reading and Use of English del B2 First es frecuentemente considerado el más desafiante por candidatos hispanohablantes debido a la densidad vocabular académica y la precisión gramatical requerida. Las 7 partes están estratégicamente secuenciadas desde tareas gramaticales controladas (Parts 1-4) hasta comprensión lectora intensiva y extensiva (Parts 5-7), con dificultad creciente que permite a candidatos "entrar en calor" con ejercicios estructurados antes de enfrentar textos complejos. Cada parte evalúa competencias lingüísticas específicas que reflejan habilidades reales necesarias para funcionamiento académico o profesional en nivel B2.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-zinc-50 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Part 1: Multiple-choice cloze</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Presenta un texto de aproximadamente 150 palabras con 8 espacios en blanco. Para cada espacio, debes elegir entre 4 opciones que son todas gramaticalmente posibles, pero solo una es correcta según colocaciones, expresiones fijas, o registro apropiado. Esta parte evalúa vocabulario receptivo y conocimiento de phrasal verbs, preposiciones dependientes, y expresiones idiomáticas.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-zinc-200">
                    <p className="text-zinc-500 text-xs"><strong>Estrategia clave:</strong> Lee el texto completo primero para captar el tema general antes de intentar completar espacios individuales. Muchos errores ocurren por responder basándose únicamente en la frase inmediata sin considerar coherencia temática global.</p>
                  </div>

                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Part 2: Open cloze</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Contiene otro texto de aproximadamente 150 palabras con 8 espacios, pero esta vez sin opciones múltiples: debes proporcionar la palabra faltante (siempre gramatical, nunca léxica). Típicamente faltan artículos (a, an, the), pronombres (which, who, where), preposiciones (in, at, on, for), conjunciones (although, despite, whereas), o verbos auxiliares (have, been, will). Esta parte evalúa dominio de gramática funcional aplicada.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-zinc-200">
                    <p className="text-zinc-500 text-xs"><strong>Estrategia:</strong> Identifica la categoría gramatical requerida (¿necesitas un conector lógico?, ¿un pronombre relativo?, ¿un artículo?) antes de decidir la palabra específica. Las respuestas son siempre palabras de alta frecuencia.</p>
                  </div>

                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Part 3: Word formation</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Presenta un texto con 8 líneas numeradas, cada una conteniendo una palabra base en mayúsculas a la derecha. Debes formar la palabra gramaticalmente apropiada que complete correctamente la línea, mediante prefijación, sufijación, o cambio de categoría gramatical. Por ejemplo, si la palabra base es PREDICT y la oración requiere un sustantivo, la respuesta sería "prediction". Esta parte evalúa comprensión de morfología derivacional inglesa.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-zinc-200">
                    <p className="text-zinc-500 text-xs"><strong>Estrategia clave:</strong> Identifica primero la categoría gramatical requerida (¿sustantivo?, ¿adjetivo?, ¿verbo?, ¿adverbio?), luego considera si necesitas forma negativa (mediante prefijos un-, in-, dis-, im-) o plural/singular según concordancia.</p>
                  </div>

                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Part 4: Key word transformation</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Contiene 6 oraciones, cada una seguida de una palabra clave y una oración incompleta que debes completar con 2-5 palabras (incluyendo la palabra clave), de modo que signifique lo mismo que la oración original. Esta parte evalúa capacidad de parafrasear mediante estructuras gramaticales alternativas. Por ejemplo: "I last saw John three years ago" con palabra clave SEEN se transforma en "I haven't SEEN John for three years".
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-zinc-200">
                    <p className="text-zinc-500 text-xs"><strong>Estrategia:</strong> Identifica la estructura gramatical específica que se está evaluando (¿voz pasiva?, ¿reported speech?, ¿conditional?, ¿comparative?), luego aplica la transformación sistemáticamente sin alterar el significado. Esta parte requiere preparación específica memorizando patrones de transformación comunes.</p>
                  </div>

                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Part 5: Multiple-choice questions</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Presenta un texto extenso (aproximadamente 550-650 palabras) seguido de 6 preguntas de opción múltiple. Las preguntas evalúan comprensión detallada, inferencia, propósito del autor, actitud, y significado de vocabulario en contexto.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-zinc-200">
                    <p className="text-zinc-500 text-xs"><strong>Estrategia:</strong> Lee primero las preguntas (no las opciones) para saber qué información buscar, luego lee el texto completo comprendiendo la idea global, finalmente relee secciones específicas para responder cada pregunta. Las respuestas incorrectas frecuentemente son "trampas" que usan palabras del texto pero distorsionan el significado.</p>
                  </div>

                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Parts 6 y 7: Comprensión textual avanzada</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Evalúan comprensión textual mediante matching de párrafos con afirmaciones (Part 6) y ordenamiento lógico de párrafos extraídos de un texto (Part 7). Ambas requieren comprensión de cohesión textual, referentes anafóricos (this, these, such), y marcadores de discurso (however, moreover, consequently).
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-zinc-200">
                    <p className="text-zinc-500 text-xs"><strong>Estrategia común:</strong> Identifica palabras clave en cada párrafo/afirmación, busca sinónimos y paráfrasis en el texto, y verifica que la asociación tenga sentido lógico dentro del argumento global del autor.</p>
                  </div>

                </div>
              </div>
            </section>

            {/* Section 6: Writing, Listening y Speaking */}
            <section id="writing-listening-speaking" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <PenTool className="w-8 h-8 text-accent-blue flex-shrink-0" />
                6. Writing, Listening y Speaking: Domina las Cuatro Habilidades
              </h2>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Componente Writing</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                El componente Writing del B2 First requiere no solo corrección gramatical sino capacidad de producir textos coherentes, bien organizados, apropiados al registro comunicativo solicitado, y que cumplan completamente el propósito comunicativo indicado en el prompt. Cambridge evalúa cuatro criterios con peso equitativo: <strong>Content</strong> (cumplimiento completo de la tarea), <strong>Communicative Achievement</strong> (registro y formato apropiados), <strong>Organisation</strong> (estructura lógica con conectores), y <strong>Language</strong> (precisión gramatical y riqueza léxica). Un error común entre candidatos hispanohablantes es priorizar gramática perfecta mientras descuidan estructura organizativa o registro formal requerido.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-green-800 mb-3">Tarea 1: Essay (obligatoria)</h4>
                <p className="text-green-700 text-sm mb-4">
                  Siempre proporciona un enunciado sobre un tema contemporáneo seguido de dos puntos de vista contradictorios. Debes discutir ambos puntos, agregar un tercer punto propio, y concluir con tu opinión personal justificada.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <p className="text-green-600 text-xs font-medium mb-2">Estructura recomendada:</p>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• Introducción contextualizando el tema (2-3 oraciones)</li>
                    <li>• Párrafo discutiendo el primer punto con ejemplo (40-50 palabras)</li>
                    <li>• Párrafo sobre el segundo punto con evidencia (40-50 palabras)</li>
                    <li>• Párrafo presentando tu tercer punto con justificación (40-50 palabras)</li>
                    <li>• Conclusión resumiendo tu postura (2-3 oraciones)</li>
                  </ul>
                  <p className="text-green-500 text-xs mt-3">
                    <strong>Vocabulario esencial:</strong> conectores argumentativos (furthermore, nevertheless, conversely, consequently) y expresiones de opinión matizada (it could be argued that, while it is true that, from my perspective).
                  </p>
                </div>

              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-blue-800 mb-3">Tarea 2: Opciones disponibles</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 className="font-bold text-blue-700 text-sm mb-2">Article periodístico</h5>
                    <p className="text-blue-600 text-xs">Título llamativo, introducción que enganche al lector, tono semi-informal con posible uso de preguntas retóricas.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 className="font-bold text-blue-700 text-sm mb-2">Email/Letter formal</h5>
                    <p className="text-blue-600 text-xs">Saludo y despedida apropiados, organización en párrafos según propósitos comunicativos, registro formal sin contracciones.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 className="font-bold text-blue-700 text-sm mb-2">Review</h5>
                    <p className="text-blue-600 text-xs">Descripción del objeto evaluado, aspectos positivos y negativos equilibrados, recomendación clara al lector potencial.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 className="font-bold text-blue-700 text-sm mb-2">Report empresarial</h5>
                    <p className="text-blue-600 text-xs">Título, subtítulos para secciones, lenguaje objetivo impersonal, y recomendaciones finales basadas en hallazgos.</p>
                  </div>

                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Estrategias Específicas para Listening</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                El componente Listening del B2 First desafía especialmente a estudiantes cuya práctica auditiva se limita a materiales didácticos con pronunciación artificialmente clara. Los audios Cambridge incluyen características del habla natural: contracciones, elisiones, asimilaciones fonéticas, solapamientos en conversaciones, y variedades dialectales.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-purple-800">Part 1</h4>
                  </div>
                  <p className="text-purple-700 text-sm mb-3">
                    8 extractos cortos independientes (30-40 segundos cada uno) donde debes responder una pregunta de opción múltiple.
                  </p>
                  <p className="text-purple-600 text-xs">
                    <strong>Estrategia:</strong> Lee las tres opciones antes de escuchar para anticipar información clave. La respuesta correcta frecuentemente se expresa con sinónimos, no con las mismas palabras de las opciones.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-purple-800">Part 2</h4>
                  </div>
                  <p className="text-purple-700 text-sm mb-3">
                    Monólogo de aproximadamente 3-4 minutos donde debes completar 10 frases con información específica (1-2 palabras o un número).
                  </p>
                  <p className="text-purple-600 text-xs">
                    <strong>Estrategia:</strong> Predice qué tipo de información falta (¿nombre?, ¿lugar?, ¿fecha?, ¿cantidad?) para saber qué escuchar. Las respuestas son siempre palabras pronunciadas literalmente en el audio.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-purple-800">Part 3</h4>
                  </div>
                  <p className="text-purple-700 text-sm mb-3">
                    5 monólogos cortos de personas diferentes opinando sobre el mismo tema, debiendo asociar cada hablante con una actitud u opinión de una lista.
                  </p>
                  <p className="text-purple-600 text-xs">
                    <strong>Estrategia:</strong> Concéntrate en identificar la idea principal de cada hablante, no detalles secundarios; las opciones correctas frecuentemente usan lenguaje evaluativo (frustrated, optimistic, skeptical).
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-purple-800">Part 4</h4>
                  </div>
                  <p className="text-purple-700 text-sm mb-3">
                    Entrevista o conversación de aproximadamente 3-4 minutos con 7 preguntas de opción múltiple. Es la parte más desafiante.
                  </p>
                  <p className="text-purple-600 text-xs">
                    <strong>Estrategia:</strong> Identifica quién dice qué (especialmente cuando pregunta y opciones se refieren a "the woman" o "the man"), y desconfía de opciones que citan palabras textuales pero distorsionan el significado.
                  </p>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Estrategias para Speaking</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                El componente Speaking evalúa capacidad comunicativa interactiva, no discurso monológico memorizado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Mic className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-orange-800">Part 1: Interview</h4>
                  </div>
                  <p className="text-orange-700 text-sm mb-3">
                    Los examinadores buscan respuestas naturales y espontáneas sobre ti mismo, no discursos ensayados.
                  </p>
                  <p className="text-orange-600 text-xs">
                    <strong>Estrategia:</strong> Expande respuestas más allá de 1-2 oraciones pero sin monopolizar conversación.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Mic className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-orange-800">Part 2: Long turn</h4>
                  </div>
                  <p className="text-orange-700 text-sm mb-3">
                    Recibes dos fotografías y debes compararlas durante 1 minuto respondiendo una pregunta específica.
                  </p>
                  <p className="text-orange-600 text-xs">
                    <strong>Estrategia:</strong> Dedica 10 segundos a describir ambas fotos, 40 segundos comparando similitudes/diferencias, y 10 segundos respondiendo directamente la pregunta. Usa lenguaje especulativo (perhaps, it seems like, they might be).
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Mic className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-orange-800">Part 3: Collaborative task</h4>
                  </div>
                  <p className="text-orange-700 text-sm mb-3">
                    Negociar con tu compañero durante 2 minutos para completar una tarea (elegir, priorizar, decidir) usando material visual proporcionado.
                  </p>
                  <p className="text-orange-600 text-xs">
                    <strong>Estrategia:</strong> Involucra activamente a tu compañero mediante preguntas (What do you think about...? Do you agree that...?), construye sobre sus ideas, y evita dominar o permanecer pasivo.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Mic className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-orange-800">Part 4: Discussion</h4>
                  </div>
                  <p className="text-orange-700 text-sm mb-3">
                    Conversación de 4 minutos sobre temas relacionados con Part 3, evaluando capacidad de expresar opiniones abstractas, justificar posturas, y responder preguntas hipotéticas.
                  </p>
                  <p className="text-orange-600 text-xs">
                    <strong>Los mejores candidatos</strong> demuestran flexibilidad modificando opiniones cuando el compañero presenta argumentos convincentes.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 7: Preparación Efectiva */}
            <section id="preparacion-efectiva" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-accent-blue flex-shrink-0" />
                7. Preparación Efectiva: Metodologías y Cronogramas Realistas
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La preparación efectiva para exámenes Cambridge requiere aproximadamente <strong>8-12 semanas</strong> para candidatos que inician con un nivel sólido inmediatamente inferior (por ejemplo, B1+ certificado preparando B2 First). Este cronograma asume dedicación de 10-15 horas semanales distribuidas en sesiones diarias de estudio, no maratones de fin de semana. La neurociencia del aprendizaje demuestra que la exposición espaciada (distribuida en el tiempo) genera retención significativamente superior a la práctica masiva concentrada. Un estudiante que practica 2 horas diarias durante 10 semanas superará consistentemente a quien estudia 8 horas diarias durante 2 semanas, incluso aunque ambos inviertan 140 horas totales.
              </p>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Metodología de Repetición Espaciada (SRS)</h3>
                <p className="text-indigo-700 mb-4">
                  La metodología de repetición espaciada (Spaced Repetition System o SRS) es particularmente efectiva para adquisición de vocabulario académico, que constituye aproximadamente el <strong>35% de la dificultad del B2 First</strong> según análisis de patrones de error.
                </p>
                <p className="text-indigo-600 text-sm mb-4">
                  El principio básico: revisar material justo antes de que esté a punto de olvidarse, maximizando el esfuerzo cognitivo de recuperación que fortalece conexiones neuronales. Plataformas digitales como <strong>Anki</strong> o <strong>Quizlet</strong> permiten implementar SRS automáticamente, presentando tarjetas de vocabulario con intervalos crecientes (1 día, 3 días, 1 semana, 2 semanas, 1 mes).
                </p>
                <p className="text-indigo-500 text-xs">
                  Para el B2 First, prioriza vocabulario de listas oficiales Cambridge organizadas temáticamente: educación, medio ambiente, tecnología, salud, entretenimiento, viajes.
                </p>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El <strong>aprendizaje activo</strong>, especialmente la técnica de "enseñar para aprender", acelera dramáticamente la consolidación conceptual. Después de estudiar un punto gramatical complejo (por ejemplo, reported speech o modal verbs en contexto académico), explícalo en voz alta como si enseñaras a otra persona, incluyendo ejemplos propios. Esta verbalización activa áreas cerebrales de producción lingüística complementarias a las utilizadas en comprensión pasiva. Alternativamente, escribe resúmenes de reglas gramaticales con tus propias palabras en lugar de memorizar explicaciones textuales de libros de texto.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Cronograma Semanal Estructurado para Preparación B2 First</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Un cronograma efectivo balancea práctica de las cuatro habilidades proporcionalmente a su peso en el examen:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-accent-blue text-white">
                      <th className="text-left p-4 font-bold">Día</th>
                      <th className="text-left p-4 font-bold">Duración</th>
                      <th className="text-left p-4 font-bold">Actividad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-200">
                      <td className="p-4 font-medium text-zinc-900">Lunes</td>
                      <td className="p-4 text-zinc-600">90 min</td>
                      <td className="p-4 text-zinc-600">Reading and Use of English (completar Parts 1-4, analizar errores)</td>
                    </tr>
                    <tr className="border-b border-zinc-200 bg-zinc-50">
                      <td className="p-4 font-medium text-zinc-900">Martes</td>
                      <td className="p-4 text-zinc-600">60 min</td>
                      <td className="p-4 text-zinc-600">Writing (redactar una Task 2 completa con tiempo limitado, revisar con checklist)</td>
                    </tr>
                    <tr className="border-b border-zinc-200">
                      <td className="p-4 font-medium text-zinc-900">Miércoles</td>
                      <td className="p-4 text-zinc-600">60 min</td>
                      <td className="p-4 text-zinc-600">Listening (completar las 4 Parts, revisar transcripciones)</td>
                    </tr>
                    <tr className="border-b border-zinc-200 bg-zinc-50">
                      <td className="p-4 font-medium text-zinc-900">Jueves</td>
                      <td className="p-4 text-zinc-600">60 min</td>
                      <td className="p-4 text-zinc-600">Speaking (práctica con compañero o grabándote, evaluar fluidez y precisión)</td>
                    </tr>
                    <tr className="border-b border-zinc-200">
                      <td className="p-4 font-medium text-zinc-900">Viernes</td>
                      <td className="p-4 text-zinc-600">45 min</td>
                      <td className="p-4 text-zinc-600">Revisión de vocabulario mediante SRS y lectura extensiva</td>
                    </tr>
                    <tr className="border-b border-zinc-200 bg-zinc-50">
                      <td className="p-4 font-medium text-zinc-900">Sábado</td>
                      <td className="p-4 text-zinc-600">3h 30min</td>
                      <td className="p-4 text-zinc-600">Simulacro de examen completo bajo condiciones reales</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-zinc-900">Domingo</td>
                      <td className="p-4 text-zinc-600">60 min</td>
                      <td className="p-4 text-zinc-600">Análisis exhaustivo del simulacro, identificar patrones de error</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-amber-800 mb-2">Últimas 2 semanas pre-examen</h4>
                <p className="text-amber-700 text-sm">
                  Durante las últimas 2 semanas pre-examen, incrementa la proporción de práctica completa bajo tiempo límite reduciendo el estudio fragmentado de habilidades aisladas. El cerebro necesita practicar transiciones entre modalidades comunicativas (pasar de leer intensivamente 75 minutos a redactar creativamente 80 minutos) para automatizar esta flexibilidad cognitiva. Candidatos que practican exclusivamente secciones aisladas frecuentemente experimentan fatiga mental inesperada durante el examen real debido a la duración sostenida sin pausas significativas.
                </p>
              </div>
            </section>

            {/* Section 8: Recursos Oficiales */}
            <section id="recursos-oficiales" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-accent-blue flex-shrink-0" />
                8. Recursos Oficiales Cambridge y Herramientas Complementarias
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cambridge Assessment English proporciona un ecosistema completo de recursos auténticos para preparación, garantizando que materiales de práctica repliquen exactamente el formato, dificultad y criterios de evaluación del examen real.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3"><a href="https://www.cambridge.es/en/catalogue/exams" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue hover:underline">Cambridge English Trainer Series</a></h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    El recurso fundamental es la serie "<a href="https://www.cambridge.es/en/catalogue/exams" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Cambridge English [Nivel] for Schools Trainer</a>", que contiene 6 exámenes completos con audio descargable, clave de respuestas exhaustiva, transcripciones de listening, y guías de puntuación para writing y speaking. Estos libros permiten preparación autodidacta estructurada.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    La versión "with answers" incluye explicaciones detalladas de por qué cada respuesta correcta es correcta y por qué las incorrectas son incorrectas, facilitando aprendizaje de patrones.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Test & Train (Plataforma Digital)</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Disponible mediante compra en sitio web Cambridge, ofrece más de 500 preguntas interactivas de práctica para cada nivel con retroalimentación inmediata. El sistema rastrea tu progreso longitudinalmente, identifica áreas débiles mediante algoritmos adaptativos, y recomienda recursos específicos para remediar gaps.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    La inversión (aproximadamente 25-35€ según nivel) se justifica por personalización y análisis de patrones imposibles con materiales estáticos.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-3">Write & Improve (Gratuito)</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Una herramienta gratuita desarrollada por Cambridge que utiliza inteligencia artificial para evaluar automáticamente tus redacciones de writing. Subes tu texto, y en menos de 30 segundos recibes puntuación estimada (A1 a C2), identificación de errores específicos codificados por colores, y sugerencias de vocabulario más sofisticado.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    <strong>Recomendación:</strong> Redacta primero sin consultar, obtén retroalimentación, revisa basándote en sugerencias, y reenvía para comparar puntuaciones. Este ciclo iterativo replica el proceso de revisión que escritores competentes ejecutan naturalmente.
                  </p>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Recursos Complementarios Gratuitos de Alta Calidad</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="border border-zinc-200 rounded-xl p-6 hover:border-accent-blue transition-colors">
                  <h4 className="font-bold text-zinc-900 mb-2">BBC Learning English</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Lecciones diarias gratuitas sobre gramática, vocabulario y pronunciación. Las series "6 Minute English" y "News Review" son particularmente útiles para B2 First.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    <strong>Estrategia:</strong> Escucha primero sin transcripción, luego lee identificando vocabulario desconocido, finalmente escucha mientras lees.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6 hover:border-accent-blue transition-colors">
                  <h4 className="font-bold text-zinc-900 mb-2">Elllo.org</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Más de 3.000 lecciones de audio auténticas con hablantes de inglés de 50+ países, incluyendo ejercicios de comprensión y vocabulario.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    La diversidad de acentos supera incluso los audios oficiales Cambridge, preparándote para la variabilidad fonética real.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6 hover:border-accent-blue transition-colors">
                  <h4 className="font-bold text-zinc-900 mb-2">Flo-joe.co.uk</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Sitio especializado en exámenes Cambridge con ejercicios gratuitos categorizados por parte del examen. El "phrasal verb organiser" es particularmente valioso.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Agrupa phrasal verbs por partícula (all verbs with UP, with DOWN, etc.) facilitando reconocimiento de patrones semánticos.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6 hover:border-accent-blue transition-colors">
                  <h4 className="font-bold text-zinc-900 mb-2">Perfect-English-Grammar.com</h4>
                  <p className="text-zinc-600 text-sm mb-3">
                    Explicaciones exhaustivas de estructuras gramaticales complejas con cientos de ejercicios auto-corregibles, organizados por nivel MCER.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    La sección "B2 Grammar" lista: narrative tenses, future forms, passive voice, relative clauses, conditionals, reported speech, causative structures.
                  </p>
                </div>

              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-teal-800 mb-3">Práctica de Speaking</h4>
                <p className="text-teal-700 text-sm mb-3">
                  Plataformas como <strong>iTalki</strong> o <strong>Preply</strong> conectan estudiantes con tutores nativos para sesiones individuales de conversación (10-25€/hora según nacionalidad del tutor). Aunque tienen costo, 4-6 sesiones enfocadas específicamente en simulacros de B2 First speaking con un tutor familiarizado con el formato Cambridge proporcionan retroalimentación personalizada imposible de obtener mediante auto-estudio.
                </p>
                <p className="text-teal-600 text-xs">
                  Alternativamente, encuentra un "study buddy" también preparando Cambridge en foros como r/EnglishLearning de Reddit o grupos de Facebook dedicados a certificaciones, organizando videollamadas semanales para practicar Part 3 y Part 4 mutuamente.
                </p>
              </div>
            </section>

            {/* Section 9: FAQ */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-accent-blue flex-shrink-0" />
                9. Preguntas Frecuentes sobre Exámenes Cambridge
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

            {/* Section 10: Conclusión */}
            <section id="conclusion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-accent-blue flex-shrink-0" />
                10. Conclusión y Próximos Pasos
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los exámenes Cambridge representan la inversión más sólida en certificación de inglés disponible actualmente, combinando reconocimiento global universal, validez permanente sin caducidad, y evaluación integral de competencia comunicativa real. A diferencia de certificaciones que miden conocimiento declarativo mediante preguntas de gramática aisladas, Cambridge evalúa tu capacidad para usar inglés efectivamente en contextos académicos, profesionales y sociales auténticos. Esta aproximación comunicativa asegura que tu certificación refleje habilidades transferibles inmediatamente aplicables, no simplemente memorización de reglas descontextualizadas.
              </p>

              <div className="bg-gradient-to-r from-accent-blue/10 to-blue-100 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">Los tres elementos fundamentales para preparación exitosa</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-accent-blue text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <span className="text-zinc-600"><strong>Diagnóstico preciso</strong> de nivel actual mediante test estandarizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent-blue text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <span className="text-zinc-600"><strong>Cronograma estructurado</strong> de 8-12 semanas con práctica balanceada de las cuatro habilidades proporcionalmente a su peso en el examen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent-blue text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <span className="text-zinc-600"><strong>Exposición a materiales auténticos Cambridge</strong> garantizando familiaridad con formato específico y criterios de evaluación</span>
                  </li>
                </ul>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La preparación autodidacta mediante recursos oficiales digitales (Test & Train, Write & Improve) y complementarios gratuitos (BBC Learning English, Elllo.org) es absolutamente viable para candidatos disciplinados con base lingüística sólida en el nivel inmediatamente inferior al objetivo.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para estudiantes que valoran estructura externa, retroalimentación personalizada y práctica de speaking con compañeros, programas de preparación especializados proporcionan valor significativo. Academias como nuestra <strong><Link to="/academia-ingles-barrio-del-pilar" className="text-accent-blue hover:underline font-medium">academia en Barrio del Pilar</Link></strong> en Madrid, con metodología basada en repetición espaciada y tasa de aprobación del 100%, ofrecen entornos optimizados para maximizar probabilidad de éxito. También disponemos de <Link to="/cursos-ingles/particulares" className="text-accent-blue hover:underline font-medium">clases particulares</Link> personalizadas para <Link to="/examenes-cambridge/b2-first" className="text-accent-blue hover:underline font-medium">B2 First</Link>, <Link to="/examenes-cambridge/b1-preliminary" className="text-accent-blue hover:underline font-medium">B1 Preliminary</Link> y otros <Link to="/examenes-cambridge" className="text-accent-blue hover:underline font-medium">exámenes Cambridge</Link>, cerca de <Link to="/academia-ingles-la-vaguada" className="text-accent-blue hover:underline font-medium">La Vaguada</Link>.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-green-800 mb-3">Tu próximo paso concreto</h4>
                <ol className="space-y-2 text-green-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span>Completa el test diagnóstico gratuito "Test Your English" en cambridgeenglish.org identificando tu nivel MCER actual con precisión.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span>Basándote en resultado, selecciona el examen objetivo apropiado (si test indica B1, tu objetivo debería ser B1 Preliminary o potencialmente B2 First con preparación extendida).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span>Consulta centros examinadores autorizados en tu área para verificar fechas disponibles y precios específicos, eligiendo fecha mínimo 10-12 semanas futuras permitiendo preparación estructurada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">4.</span>
                    <span>Adquiere mínimo un libro oficial Cambridge Trainer con exámenes completos para tu nivel, y comienza cronograma sistemático combinando práctica de habilidades individuales con simulacros completos semanales.</span>
                  </li>
                </ol>
                <p className="text-green-600 text-xs mt-4">
                  El éxito en Cambridge no depende de talento lingüístico innato sino de preparación metodológica, exposición consistente y práctica deliberada enfocada en patrones evaluativos específicos del examen objetivo.
                </p>
              </div>
            </section>

          </div>


        </div>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-6xl">
            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-accent-blue to-blue-700 rounded-2xl p-8 md:p-12 mb-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                El certificado Cambridge que necesitas está más cerca de lo que crees
              </h2>
              <p className="text-white/90 text-lg mb-4">
                Entendemos perfectamente dónde estás ahora: quizás llevas años queriendo ese B2 o C1, pero nunca encontraste el momento, el método adecuado, o el apoyo que necesitabas. Sabemos que hay una brecha entre tu nivel actual y el certificado que abrirá puertas en tu carrera, en tu universidad, en tu vida.
              </p>
              <p className="text-white/90 text-lg">
                <strong>Nuestra misión es cerrar esa brecha contigo.</strong> Te llevaremos desde donde estás hasta donde necesitas llegar. Te motivaremos en los momentos difíciles, te ayudaremos a mantener el compromiso, y celebraremos contigo cuando tengas ese certificado en tus manos. Confía en Impulse English para tu transformación.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                  Abrimos puertas contigo
                </h2>
                <p className="text-zinc-600 mb-6">
                  Con <strong>100% de aprobados</strong> en 2024-25, no prometemos resultados: los garantizamos con trabajo, dedicación y el método correcto. Tenemos la experiencia de llevar a cientos de estudiantes exactamente donde querían estar. Ahora es tu turno.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Evaluación inicial gratuita: sabemos exactamente dónde empiezas
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Hoja de ruta personalizada hacia tu certificado objetivo
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Profesores que te conocen y se comprometen con tu éxito
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Haz el examen donde te preparas: sin sorpresas el día D
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/34604910611?text=Hola,%20me%20interesa%20prepararme%20para%20un%20examen%20Cambridge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                  <Link
                    to="/examenes-cambridge"
                    className="bg-accent-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Ver cursos Cambridge
                  </Link>
                </div>

              </div>
              <div>
                <LeadForm
                  title="Empieza tu transformación"
                  subtitle="Te contactamos en menos de 24h"
                  ctaText="Quiero mi certificado"
                  source="blog-cambridge-guia"
                  showPhone={true}
                  showAge={true}
                  showLevel={true}
                />
              </div>

            </div>
          </div>
        </section>

        {/* External Resources Section */}
        <section className="py-12 px-6 bg-accent-blue/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Recursos Oficiales de Cambridge</h2>
            <p className="text-zinc-600 mb-8">Consulta la información oficial de Cambridge Assessment English para más detalles:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">Exámenes Cambridge</h3>
                  <p className="text-zinc-500 text-sm mt-1">Todos los exámenes disponibles</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/b2-first/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">B2 First (FCE)</h3>
                  <p className="text-zinc-500 text-sm mt-1">Información oficial del B2</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/c1-advanced/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">C1 Advanced (CAE)</h3>
                  <p className="text-zinc-500 text-sm mt-1">Información oficial del C1</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/test-your-english/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">Test Your English</h3>
                  <p className="text-zinc-500 text-sm mt-1">Prueba de nivel gratuita</p>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <a
                href="https://www.cambridge.es/en/catalogue/exams"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">Catálogo de Libros Cambridge</h3>
                  <p className="text-zinc-500 text-sm mt-1">Trainer, Complete, Objective y más</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/@CambridgeEnglishSpain"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">Cambridge English Spain - YouTube</h3>
                  <p className="text-zinc-500 text-sm mt-1">Lecciones de inglés oficiales</p>
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/examenes-cambridge/fechas-precios" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Calendario</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Fechas Exámenes Cambridge 2026
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Calendario oficial y fechas límite de inscripción</p>
                </div>
              </Link>
              <Link to="/examenes-cambridge" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Recursos</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Libros Cambridge y Recursos 2026
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Los mejores materiales para preparar tu examen</p>
                </div>
              </Link>
              <Link to="/linguaskill" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Linguaskill</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Guía Completa del Examen Linguaskill
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Estructura, ejemplos y estrategias de preparación</p>
                </div>
              </Link>
              <Link to="/academias-ingles-madrid" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Academias Madrid</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Academias de Inglés en Madrid
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Las mejores opciones económicas para estudiar inglés</p>
                </div>
              </Link>
              <Link to="/examenes-cambridge/b2-first" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">B2 First</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Preparación B2 First (FCE)
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">El certificado más demandado para el mundo laboral</p>
                </div>
              </Link>
              <Link to="/academias-ingles-madrid/certificaciones" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Certificaciones</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Certificaciones de Inglés en Madrid
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Guía completa de certificaciones oficiales</p>
                </div>
              </Link>
            </div>

          </div>
        </section>
      </article>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
