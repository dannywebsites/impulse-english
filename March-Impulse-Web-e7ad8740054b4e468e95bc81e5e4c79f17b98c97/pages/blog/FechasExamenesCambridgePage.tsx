import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, CheckCircle, AlertCircle, Bell, MessageCircle, MapPin, Monitor, FileText, Target, HelpCircle, Globe, Users, Building } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
const tableOfContents = [
  { id: 'que-son-fechas', title: '¿Qué son las fechas de exámenes Cambridge y por qué son importantes?' },
  { id: 'calendario-completo-2026', title: 'Calendario completo 2026: fechas por nivel (B1, B2, C1, C2)' },
  { id: 'digital-vs-papel', title: 'Exámenes digitales vs. papel: diferencias y disponibilidad 2026' },
  { id: 'elegir-convocatoria', title: 'Cómo elegir la convocatoria ideal según tu perfil' },
  { id: 'plazos-inscripcion', title: 'Plazos de inscripción: fechas límite y proceso de matrícula' },
  { id: 'centros-autorizados', title: 'Centros autorizados: variaciones regionales y disponibilidad' },
  { id: 'resultados-certificacion', title: 'Resultados y certificación: tiempos de espera por formato' },
  { id: 'estrategias-preparacion', title: 'Estrategias de preparación según el calendario de convocatorias' },
];

const newFaqItems = [
  {
    question: '¿Cuánto tardan en llegar los Certificados de Cambridge?',
    answer: 'Los certificados de Cambridge tardan 3-4 semanas (formato digital) o 7-10 semanas (papel) en llegar al centro examinador, que posteriormente los envía al candidato. B2 Business Vantage requiere 5-6 semanas (digital) o 7-9 semanas (papel). El Informe de Calificación online está disponible en 5-10 días laborables (digital) o 4-6 semanas (papel), accesible mediante registro en el servicio online de calificaciones.'
  },
  {
    question: '¿Cuánto cuesta el examen de Cambridge?',
    answer: 'El precio del examen de Cambridge oscila entre 69,50€ y 242€ según el nivel. Young Learners (Pre A1-A2 Flyers): 69,50-72€. Educación general: A2 Key (110€), B1 Preliminary (117,50€), B2 First (218€), C1 Advanced (233€), C2 Proficiency (242€). El University Project ofrece descuentos de 6,50-9,50€ para estudiantes universitarios. Linguaskill cuesta 130€ (120€ con descuento). TKT docente: 75€ por módulo. Los precios varían según el centro autorizado.'
  },
  {
    question: '¿Cuánto dura un certificado B2?',
    answer: 'Un certificado B2 de Cambridge no tiene fecha de caducidad oficial establecida. Sin embargo, instituciones educativas y empresas suelen establecer periodos de aceptación propios, siendo común 2-3 años desde la emisión. Por ejemplo, la Universidad Complutense de Madrid acepta certificados B2 con antigüedad máxima de 3 años. El certificado acredita competencia lingüística del nivel B2 del MCER de forma permanente.'
  },
  {
    question: '¿Qué certificado de inglés es válido por vida?',
    answer: 'Los certificados de Cambridge English son válidos de por vida sin fecha de caducidad. Son reconocidos por más de 25.000 universidades, empleadores y gobiernos internacionalmente, incluyendo instituciones en Reino Unido, Estados Unidos, Australia, Canadá y empresas como Adidas, HSBC y Microsoft. Las instituciones receptoras pueden establecer requisitos específicos sobre antigüedad del certificado. La autenticidad se verifica mediante servicio en línea.'
  }
];

export const faqItems = [
  {
    question: '¿Cuándo se publican oficialmente las fechas de exámenes Cambridge para 2026?',
    answer: 'Cambridge Assessment English publica el calendario oficial global entre octubre y noviembre de 2025 en formato PDF descargable desde su web oficial. Este documento incluye todas las convocatorias por nivel y formato (digital/papel) para el año completo 2026. Sin embargo, cada centro autorizado decide qué fechas específicas ofrecerá según su capacidad operativa y demanda local, publicando su calendario particular entre noviembre 2025 y enero 2026. Los candidatos deben consultar tanto el calendario oficial general como el calendario específico de su centro preferido para confirmar disponibilidad real. Las fechas pueden sufrir modificaciones excepcionales por circunstancias extraordinarias, pero históricamente Cambridge mantiene más del 98% de estabilidad en convocatorias planificadas.'
  },
  {
    question: '¿Con cuánta antelación debo inscribirme para asegurar plaza en mi convocatoria preferida?',
    answer: 'Para exámenes en papel, la inscripción debe realizarse idealmente 6-8 semanas antes de la fecha del examen para garantizar plaza en centros con alta demanda, aunque el plazo mínimo oficial cierra 4 semanas antes. Las convocatorias de mayo-junio y noviembre-diciembre se saturan rápidamente en ciudades grandes (Madrid, Barcelona, Valencia, Sevilla), especialmente para B2 First y C1 Advanced. Para exámenes digitales, la flexibilidad permite inscripciones con 3-4 semanas de antelación en centros grandes, aunque convocatorias populares como marzo y junio también pueden agotarse con anticipación. Los candidatos que requieren adaptaciones especiales (dislexia, discapacidad) deben inscribirse con 8-10 semanas de antelación para completar trámites de documentación médica. La recomendación práctica es no demorar la inscripción más allá de identificar tu fecha objetivo; las tasas de examen no varían por anticipación y asegurar plaza elimina estrés innecesario.'
  },
  {
    question: '¿Puedo cambiar de fecha o nivel después de inscribirme?',
    answer: 'Las políticas de cambio varían según el centro autorizado, pero generalmente permiten una modificación única de fecha (transferencia a otra convocatoria del mismo nivel) solicitada al menos 4 semanas antes de la fecha original, con penalización administrativa de 30-50€. El cambio de nivel (por ejemplo, de B2 a C1) se considera cancelación completa que requiere nueva inscripción pagando la tasa correspondiente al nuevo nivel, perdiendo la tasa original salvo que la solicitud se realice con 5-6 semanas de antelación para obtener reembolso parcial del 50-70%. Los centros no permiten cambios de formato (digital a papel o viceversa) una vez confirmada la inscripción, ya que implican logística diferente. Cambridge recomienda confirmar nivel y fecha cuidadosamente antes de inscribirse, utilizando placement tests gratuitos disponibles en centros preparadores para evitar errores costosos. Las modificaciones de última hora (menos de 3 semanas antes del examen) no se autorizan bajo ninguna circunstancia salvo causas de fuerza mayor documentadas oficialmente.'
  },
  {
    question: '¿Qué diferencia hay entre las fechas "for Schools" y estándar?',
    answer: 'Las versiones "for Schools" de exámenes Cambridge (disponibles para A2 Key, B1 Preliminary y B2 First) presentan exactamente el mismo nivel de dificultad, formato de prueba y validez de certificado que las versiones estándar, con una única diferencia: los temas y contextos de los textos y tareas se adaptan a intereses y experiencias de adolescentes de 12-17 años (contextos escolares, amistades, hobbies juveniles, viajes escolares) versus contextos adultos en versiones estándar (empleo, gestiones administrativas, noticias internacionales, vida profesional). Las fechas "for Schools" se concentran en periodos académicos (marzo-abril, mayo-junio, noviembre-diciembre) para facilitar participación de institutos y colegios que preparan grupos completos de estudiantes. Estudiantes de secundaria pueden presentarse a cualquiera de las dos versiones; muchos prefieren "for Schools" por familiaridad temática, aunque ambas certificaciones son equivalentes ante instituciones académicas, empleadores y organismos oficiales.'
  },
  {
    question: '¿Los exámenes digitales son más fáciles o difíciles que los de papel?',
    answer: 'Los exámenes Cambridge digitales y en papel evalúan exactamente las mismas competencias lingüísticas con idénticos criterios de corrección, contenidos y niveles de dificultad. Cambridge garantiza equiparación rigurosa mediante procesos de estandarización que verifican que ambos formatos generen distribuciones estadísticas idénticas de puntuaciones. Las diferencias percibidas por candidatos responden a preferencias personales y familiaridad tecnológica, no a dificultad objetiva. Algunos candidatos encuentran ventajas en formato digital: contador de palabras automático en Writing elimina preocupación por extensión mínima/máxima, reproducción audio individual en Listening permite control de volumen personal sin interferencias de otros candidatos, y navegación entre preguntas de Reading resulta más intuitiva con funciones de marcado y resaltado. Otros candidatos prefieren papel por la posibilidad de subrayar textos físicamente, escribir notas marginales y mayor comodidad con escritura manual versus teclado. La clave es elegir el formato con el que te sientas más cómodo y practicar simulacros específicamente en ese formato durante la preparación.'
  },
  {
    question: '¿Cuánto tiempo tengo para recibir mis resultados según el formato elegido?',
    answer: 'Los exámenes digitales publican resultados preliminares online entre 7 y 10 días después de la fecha del examen, con certificado digital en PDF disponible simultáneamente. El Statement of Results físico oficial llega por correo postal entre 3 y 4 semanas después del examen. Los exámenes en papel requieren 4-6 semanas para publicación online de resultados (convocatorias de junio y diciembre tienden hacia 6 semanas por alto volumen de candidatos globales), y el certificado físico llega por correo postal adicionales 1-2 semanas después, totalizando 5-8 semanas desde la fecha de examen hasta recepción del documento oficial. Cambridge no ofrece opciones de entrega acelerada o consulta telefónica de resultados; todos los candidatos acceden simultáneamente en la fecha de publicación oficial. Candidatos con deadlines académicos o laborales deben planificar presentándose en convocatorias con suficiente margen temporal (mínimo 10 semanas antes del deadline para formato papel, 5 semanas para formato digital) considerando posibles retrasos postales.'
  },
  {
    question: '¿Puedo presentarme a dos niveles diferentes en el mismo año?',
    answer: 'Sí, Cambridge permite presentarse a múltiples exámenes y niveles diferentes durante el mismo año sin limitaciones ni penalizaciones. Esta práctica es común en dos escenarios: primero, candidatos que se presentan inicialmente a un nivel (por ejemplo B2 First) y desean intentar el nivel superior (C1 Advanced) meses después si sus resultados iniciales son satisfactorios o su preparación continúa progresando; segundo, candidatos indecisos sobre su nivel real que prefieren presentarse simultáneamente a dos niveles consecutivos en fechas cercanas (por ejemplo, B2 en mayo y C1 en junio) para maximizar probabilidades de obtener al menos una certificación. Sin embargo, esta estrategia implica costes significativos (pago de tasas independientes para cada examen, 204€ + 221€ en el ejemplo) y riesgo de preparación dispersa sin focalización adecuada. La recomendación de centros preparadores es identificar nivel objetivo mediante placement test preciso y concentrar esfuerzos en una única convocatoria con preparación específica de 5-8 meses.'
  },
  {
    question: '¿Las fechas de Speaking son siempre el mismo día que las pruebas escritas?',
    answer: 'No necesariamente. Cambridge permite a los centros autorizados programar la prueba oral (Speaking) en fecha diferente a las secciones escritas (Reading, Writing, Listening), típicamente hasta 7 días antes o después de la fecha oficial del examen. Esta flexibilidad responde a limitaciones logísticas de los centros: el Speaking requiere examinadores especializados certificados y salas individuales para cada pareja de candidatos, recursos que muchos centros no pueden concentrar en un único día cuando hay 50-100 candidatos en la misma convocatoria. Los candidatos reciben confirmación del día y horario específico de su Speaking al completar la inscripción o mediante comunicación posterior del centro entre 2-3 semanas antes del examen. Es imperativo mantener disponibilidad durante el periodo completo (7 días antes hasta 7 días después de la fecha oficial) para evitar incompatibilidades. La duración del Speaking es 14 minutos para B2/C1/C2 y 11 minutos para A2/B1, realizándose en parejas de candidatos del mismo nivel frente a un examinador certificado.'
  },
  {
    question: '¿Qué sucede si no puedo asistir el día del examen por enfermedad o emergencia?',
    answer: 'Las ausencias injustificadas resultan en pérdida total de la tasa de inscripción sin posibilidad de reembolso o transferencia a otra convocatoria. Cambridge solo contempla ausencias por causas de fuerza mayor documentadas oficialmente: enfermedad con certificado médico detallando incapacidad específica para presentarse (certificados genéricos de "reposo" sin especificidad no se aceptan), fallecimiento de familiar directo de primer grado (padre, madre, hijo, cónyuge), citación judicial ineludible, o catástrofe natural/emergencia oficial (nevadas extremas, pandemias declaradas oficialmente). La documentación debe presentarse al centro autorizado dentro de las 48 horas posteriores a la fecha del examen perdido. Si se acepta la justificación, el centro ofrece transferencia gratuita a la siguiente convocatoria disponible del mismo nivel y formato, pero nunca reembolso monetario. Los candidatos con enfermedades crónicas o situaciones personales complejas deben valorar cuidadosamente su capacidad real de asistencia antes de inscribirse.'
  },
  {
    question: '¿Dónde puedo consultar las fechas exactas para mi ciudad en 2026?',
    answer: 'Las fechas exactas por ciudad y centro específico se consultan en tres fuentes complementarias. Primero, el calendario oficial global de Cambridge Assessment English en PDF descargable desde www.cambridgeenglish.org/exams-and-tests/exam-dates (sección "Examination Dates 2026"), que lista todas las convocatorias internacionales por nivel sin especificar centros concretos. Segundo, las webs oficiales de centros autorizados en tu región: centros como Impulse English Academy (Madrid), Exams Sevilla, Exams Granada, British Council (múltiples ciudades), y cámaras de comercio publican sus calendarios específicos entre noviembre-diciembre del año anterior, incluyendo fechas ofrecidas, formatos disponibles (digital/papel) y plazos de inscripción particulares. Tercero, contacto directo con el centro autorizado más cercano mediante teléfono, email o visita presencial para confirmar disponibilidad actualizada en tiempo real, especialmente importante para convocatorias con alta demanda donde las plazas se agotan progresivamente.'
  }
];

export const articleSchema = generateArticleSchema({
    headline: "Fechas Exámenes Cambridge 2026: Calendario Completo y Convocatorias",
    description: "Descubre todas las fechas de exámenes Cambridge 2026 por nivel (B1, B2, C1, C2), formato digital y papel, plazos de inscripción y cómo elegir tu convocatoria ideal.",
    url: `${businessInfo.url}/examenes-cambridge/fechas`,
    datePublished: "2025-01-01"
  });

export default function FechasExamenesCambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      <article>
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
            { label: 'Fechas Cambridge 2026' }
            ]}
            variant="light"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                  Calendario
                </span>
                <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actualizado 2026
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Fechas Exámenes Cambridge 2026: Guía Completa y Calendario Oficial
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Descubre todas las fechas de exámenes Cambridge 2026 por nivel (B1, B2, C1, C2), formato digital y papel, plazos de inscripción y cómo elegir tu convocatoria ideal.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1600&auto=format&fit=crop"
              alt="Calendario de exámenes Cambridge 2026"
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
                  className="flex items-center gap-3 text-zinc-600 hover:text-purple-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold flex items-center justify-center">
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
          title="Preguntas Frecuentes sobre Certificados Cambridge"
          className="mb-12"
        />

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                Planificar con antelación las <strong>fechas de los exámenes Cambridge 2026</strong> puede marcar la diferencia entre obtener tu certificación oficial de inglés con éxito o enfrentarte a problemas de plazas agotadas, preparación insuficiente o incompatibilidad de horarios. Los <a href="https://www.cambridgeenglish.org/es/exams-and-tests/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">exámenes Cambridge English</a> (B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency) representan el estándar internacional más reconocido para acreditar el dominio del inglés en ámbitos académicos, profesionales y migratorios. Sin embargo, la multiplicidad de convocatorias, formatos (digital y papel), centros autorizados y plazos de inscripción puede generar confusión entre candidatos y familias.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Esta guía exhaustiva te proporciona toda la información esencial sobre las fechas de exámenes Cambridge 2026: desde el calendario oficial completo por nivel y formato hasta estrategias prácticas para seleccionar la convocatoria más adecuada según tus necesidades. A lo largo del artículo, desglosaremos las fechas específicas de cada examen (B1, B2, C1, C2), analizaremos las diferencias entre modalidades digitales y presenciales, explicaremos los plazos de inscripción críticos y compartiremos consejos basados en la experiencia de centros preparadores con tasas de aprobación del 100% como <strong>Impulse English Academy</strong> en Madrid.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Los exámenes Cambridge 2026 mantienen el formato estructurado de Cambridge Assessment English, con convocatorias distribuidas estratégicamente durante todo el año para ofrecer flexibilidad a estudiantes, profesionales y centros educativos. Conocer las fechas exactas te permitirá diseñar un plan de preparación realista, coordinar tus compromisos académicos o laborales y maximizar tus posibilidades de éxito en la certificación. Además, entender las particularidades de cada centro autorizado y las variaciones regionales te ayudará a tomar decisiones informadas sobre dónde y cuándo presentarte.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                A continuación, exploraremos ocho aspectos fundamentales: qué son exactamente las fechas de exámenes Cambridge, el calendario detallado 2026 por niveles, las diferencias entre formatos digitales y papel, cómo elegir tu convocatoria ideal, los plazos de inscripción cruciales, las variaciones por centros y regiones, el proceso de resultados y certificación, y estrategias de preparación adaptadas al calendario oficial.
              </p>
            </section>

            {/* Section 1: ¿Qué son las fechas de exámenes Cambridge? */}
            <section id="que-son-fechas" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-purple-600 flex-shrink-0" />
                1. ¿Qué son las fechas de exámenes Cambridge y por qué son importantes?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las fechas de exámenes Cambridge 2026 son los días oficiales establecidos por Cambridge Assessment English en los que candidatos de todo el mundo pueden presentarse a las pruebas de certificación de inglés en niveles A2 Key, B1 Preliminary, B2 First, C1 Advanced y C2 Proficiency. Estas fechas están coordinadas internacionalmente para garantizar la estandarización y validez global de los certificados, aunque cada centro autorizado gestiona su propio calendario de convocatorias dentro del marco oficial. A diferencia de exámenes adaptativos como Linguaskill, las fechas Cambridge son fijas y requieren planificación anticipada, lo que las convierte en hitos críticos para estudiantes universitarios, profesionales en búsqueda de empleo internacional y personas que necesitan acreditar su nivel de inglés para procesos migratorios.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-purple-800 mb-4">¿Por qué es importante conocer las fechas con antelación?</h3>
                <ul className="space-y-3 text-purple-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Plazas limitadas:</strong> Las plazas en centros autorizados son limitadas, especialmente en convocatorias populares como mayo-junio y noviembre-diciembre. Los candidatos que consultan el calendario tarde pueden encontrarse sin disponibilidad en su ciudad.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Tiempo de preparación:</strong> La preparación efectiva requiere entre 3 y 9 meses según el nivel actual del candidato, por lo que fijar una fecha objetivo permite diseñar un plan de estudio realista y sostenible.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Plazos académicos y laborales:</strong> Muchos procesos tienen plazos específicos: solicitudes universitarias, convocatorias de becas, ofertas de empleo internacional que exigen certificación actualizada.</span>
                  </li>
                </ul>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cambridge Assessment English publica el calendario oficial global en formato PDF descargable cada año, típicamente entre octubre y noviembre del año anterior. Este documento (Examination Dates 2026) incluye todas las fechas por nivel y formato (digital/papel), pero no especifica centros concretos. Cada centro autorizado selecciona qué convocatorias ofrecerá según su capacidad operativa, demanda local y recursos técnicos. Por ejemplo, un centro en Madrid capital puede ofrecer 12 convocatorias anuales de B2 First en formato digital, mientras que un centro en una ciudad mediana quizá organice solo 4-6 sesiones presenciales en papel. Esta variabilidad hace indispensable consultar directamente con el centro de tu preferencia, no solo el calendario general.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Además, las fechas Cambridge 2026 determinan indirectamente otros aspectos logísticos: los periodos de inscripción (que cierran entre 14 y 42 días antes según el centro), las fechas de entrega de resultados (variables según formato), y la programación de la prueba oral (Speaking), que puede realizarse hasta una semana antes o después de las pruebas escritas. Esta flexibilidad en el Speaking obliga a los candidatos a mantener disponibilidad durante varios días, no solo en la fecha oficial del examen.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Diferencias entre calendario global y calendarios locales</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Aunque Cambridge establece un marco temporal global, la implementación real varía significativamente por país y región. En España, los centros autorizados pueden organizar sesiones adicionales no incluidas en el calendario oficial internacional si existe suficiente demanda local. Por ejemplo, algunos centros en Andalucía, Madrid o Cataluña programan convocatorias extraordinarias en enero o julio para estudiantes con necesidades específicas. Estas sesiones "extra-oficiales" mantienen los mismos estándares de calidad y validez que las convocatorias globales, pero requieren coordinación previa con Cambridge y suelen tener plazas más limitadas.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Los candidatos deben también considerar las diferencias entre exámenes "for Schools" (orientados a estudiantes de secundaria) y versiones estándar. Aunque el nivel de dificultad y validez del certificado son idénticos, las fechas de las versiones "for Schools" suelen concentrarse en periodos específicos del calendario escolar (marzo-abril, mayo-junio, noviembre-diciembre) para facilitar la participación de institutos y colegios. Si eres estudiante adulto o profesional, las fechas de versiones estándar te ofrecerán mayor flexibilidad y disponibilidad durante todo el año.
              </p>
            </section>

            {/* Section 2: Calendario completo 2026 */}
            <section id="calendario-completo-2026" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-purple-600 flex-shrink-0" />
                2. Calendario completo 2026: fechas por nivel (B1, B2, C1, C2)
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El calendario oficial de exámenes Cambridge 2026 distribuye las convocatorias de forma estratégica para equilibrar la demanda global y garantizar disponibilidad continua. Según el documento Examination Dates 2026 publicado por Cambridge Assessment English, los niveles B2 First, C1 Advanced y C2 Proficiency cuentan con entre 8 y 12 convocatorias anuales cada uno, combinando formatos digitales (Computer-Based Test, CBT) y papel (Paper-Based Test, PBT). El nivel B1 Preliminary ofrece aproximadamente 10 convocatorias anuales, mientras que A2 Key tiene disponibilidad mensual en la mayoría de centros debido a su alta demanda en contextos escolares.
              </p>

              {/* B2 First Dates */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">B2 First</span>
                  <span className="text-blue-600 text-sm font-medium">El examen más popular (350.000+ candidatos anuales)</span>
                </div>
                <p className="text-blue-700 mb-4">
                  Fechas clave 2026:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">24 enero</p>
                    <p className="text-blue-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">7 marzo</p>
                    <p className="text-blue-600 text-xs">Papel y Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">18 abril</p>
                    <p className="text-blue-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">9 mayo</p>
                    <p className="text-blue-600 text-xs">Papel</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">6 junio</p>
                    <p className="text-blue-600 text-xs">Papel y Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">29 agosto</p>
                    <p className="text-blue-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">3 octubre</p>
                    <p className="text-blue-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">7 noviembre</p>
                    <p className="text-blue-600 text-xs">Papel y Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-100">
                    <p className="font-bold text-blue-800">5 diciembre</p>
                    <p className="text-blue-600 text-xs">Digital</p>
                  </div>

                </div>
                <p className="text-blue-600 text-sm mt-4">
                  Las convocatorias de mayo-junio concentran aproximadamente el 40% de los candidatos anuales porque coinciden con el final del curso académico.
                </p>
              </div>

              {/* C1 Advanced Dates */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">C1 Advanced</span>
                  <span className="text-green-600 text-sm font-medium">Requisito para máster y postgrados internacionales</span>
                </div>
                <p className="text-green-700 mb-4">
                  Fechas clave 2026:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">30 enero</p>
                    <p className="text-green-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">14 marzo</p>
                    <p className="text-green-600 text-xs">Papel y Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">25 abril</p>
                    <p className="text-green-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">16 mayo</p>
                    <p className="text-green-600 text-xs">Papel</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">13 junio</p>
                    <p className="text-green-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">5 septiembre</p>
                    <p className="text-green-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">10 octubre</p>
                    <p className="text-green-600 text-xs">Papel</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">14 noviembre</p>
                    <p className="text-green-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="font-bold text-green-800">12 diciembre</p>
                    <p className="text-green-600 text-xs">Papel y Digital</p>
                  </div>

                </div>
                <p className="text-green-600 text-sm mt-4">
                  Las convocatorias de marzo y junio son las más demandadas por estudiantes universitarios que buscan cumplir requisitos de grado o máster.
                </p>
              </div>

              {/* C2 Proficiency Dates */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">C2 Proficiency</span>
                  <span className="text-purple-600 text-sm font-medium">Nivel más avanzado (~15.000 candidatos anuales en España)</span>
                </div>
                <p className="text-purple-700 mb-4">
                  Fechas 2026 (más espaciadas):
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-purple-100">
                    <p className="font-bold text-purple-800">21 marzo</p>
                    <p className="text-purple-600 text-xs">Papel y Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-100">
                    <p className="font-bold text-purple-800">23 mayo</p>
                    <p className="text-purple-600 text-xs">Papel</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-100">
                    <p className="font-bold text-purple-800">20 junio</p>
                    <p className="text-purple-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-100">
                    <p className="font-bold text-purple-800">7 noviembre</p>
                    <p className="text-purple-600 text-xs">Digital</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-100">
                    <p className="font-bold text-purple-800">6 diciembre</p>
                    <p className="text-purple-600 text-xs">Papel</p>
                  </div>

                </div>
                <p className="text-purple-600 text-sm mt-4">
                  Muchos centros pequeños no organizan convocatorias C2 por falta de demanda local, obligando a candidatos a desplazarse a capitales provinciales.
                </p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Fechas específicas B1 Preliminary y A2 Key</h3>

              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">B1 Preliminary</span>
                  <span className="text-cyan-600 text-sm font-medium">Popular en contextos escolares</span>
                </div>
                <p className="text-cyan-700 mb-4">
                  Convocatorias más frecuentes: 17 enero (digital), 28 febrero (digital), 14 marzo (papel), 28 marzo (digital), 2 mayo (digital), 16 mayo (papel), 6 junio (digital), 26 septiembre (digital), 17 octubre (digital), 21 noviembre (papel) y 12 diciembre (digital).
                </p>
                <p className="text-cyan-600 text-sm">
                  Las versiones "for Schools" tienen fechas adicionales en abril, mayo y junio para coordinarse con calendarios escolares.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">A2 Key</span>
                  <span className="text-amber-600 text-sm font-medium">Primaria y primeros años de secundaria</span>
                </div>
                <p className="text-amber-700">
                  Disponibilidad prácticamente mensual en formato digital en centros grandes, con fechas clave en papel en marzo, mayo, junio, noviembre y diciembre 2026. La alta frecuencia responde a la demanda constante de colegios bilingües y programas de idiomas infantiles que incorporan la certificación Cambridge como parte de su curriculum oficial.
                </p>
              </div>
            </section>

            {/* Section 3: Digital vs Papel */}
            <section id="digital-vs-papel" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Monitor className="w-8 h-8 text-purple-600 flex-shrink-0" />
                3. Exámenes digitales vs. papel: diferencias y disponibilidad 2026
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La distinción entre exámenes Cambridge digitales (Computer-Based Test, CBT) y en papel (Paper-Based Test, PBT) ha ganado relevancia desde 2019, cuando Cambridge intensificó la digitalización de sus convocatorias. En 2026, aproximadamente el <strong>65% de las sesiones globales</strong> se ofrecen en formato digital, mientras que el papel mantiene presencia por preferencias regionales y requisitos técnicos de ciertos centros. Ambos formatos evalúan exactamente las mismas competencias lingüísticas (Reading, Writing, Listening, Speaking) con idénticos criterios de calificación, contenidos y validez del certificado resultante. Sin embargo, presentan diferencias prácticas significativas que afectan la experiencia del candidato y los tiempos de obtención del certificado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-zinc-900 text-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-lg">Exámenes Digitales (CBT)</h4>
                  </div>
                  <ul className="space-y-3 text-zinc-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Resultados en 7-10 días (vs. 4-6 semanas papel)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Mayor flexibilidad de fechas (semanales en centros grandes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Contador de palabras automático en Writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Audio individual con auriculares</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Funciones de resaltado y marcado en Reading</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Inscripción hasta 14-21 días antes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-zinc-700" />
                    <h4 className="font-bold text-lg text-zinc-900">Exámenes en Papel (PBT)</h4>
                  </div>
                  <ul className="space-y-3 text-zinc-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
                      <span>Formato tradicional con cuadernillos impresos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
                      <span>Posibilidad de subrayar textos físicamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
                      <span>Redacción manuscrita en Writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
                      <span>Preferible para candidatos con dificultades tecnológicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
                      <span>Fechas fijas concentradas en marzo, mayo-junio, oct-nov</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
                      <span>Inscripción cierra 4-6 semanas antes</span>
                    </li>
                  </ul>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Consideraciones técnicas y de accesibilidad</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Cambridge ofrece adaptaciones específicas para candidatos con necesidades especiales (dislexia, discapacidad visual, auditiva o motora) en ambos formatos. Las adaptaciones digitales incluyen software lector de pantalla, magnificación de texto, tiempo extra automático y teclados adaptados. Las adaptaciones en papel abarcan transcripción de respuestas por asistente, cuadernillos en braille o letra ampliada, y extensión de tiempo (generalmente 25% adicional). Solicitar adaptaciones requiere documentación médica oficial y debe tramitarse con al menos 8 semanas de antelación.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                La sección <strong>Speaking</strong> es idéntica en ambos formatos: siempre presencial, cara a cara con examinador certificado, duración de 14 minutos (B2/C1/C2) o 11 minutos (B1), realizada en parejas de candidatos. Esta prueba puede programarse en fecha diferente a las secciones escritas (hasta 7 días antes o después), decisión que toma cada centro según su capacidad operativa. Los candidatos deben confirmar su horario específico de Speaking al inscribirse, ya que la falta de asistencia implica calificación de cero en esa sección sin posibilidad de recuperación.
              </p>
            </section>

            {/* Section 4: Cómo elegir convocatoria */}
            <section id="elegir-convocatoria" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-purple-600 flex-shrink-0" />
                4. Cómo elegir la convocatoria ideal según tu perfil
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Seleccionar la fecha óptima de examen Cambridge 2026 requiere evaluar múltiples variables personales, académicas y logísticas más allá de la simple disponibilidad de plazas. La decisión correcta puede incrementar tus posibilidades de aprobación entre <strong>15% y 25%</strong>, según estudios internos de Cambridge sobre correlación entre tiempo de preparación y resultados. El primer criterio es tu nivel actual de inglés versus el nivel objetivo del examen. Cambridge recomienda un mínimo de 200 horas de estudio estructurado para avanzar un nivel completo del MCER, lo que equivale a 6-8 meses de clases semanales o 3-4 meses de preparación intensiva.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-amber-800 mb-3">Tres criterios fundamentales para elegir fecha</h4>
                <ol className="space-y-4 text-amber-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Nivel actual vs. objetivo:</strong> Realiza un placement test oficial o simulacro completo bajo condiciones de examen. Un estudiante con nota media de 8-9 en inglés de bachillerato puede poseer un nivel B1+ real, insuficiente para aprobar B2 First sin preparación adicional.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Compatibilidad con calendario:</strong> Estudiantes universitarios deben evitar convocatorias que coincidan con exámenes finales (enero-febrero, mayo-junio). Profesionales obtienen mejores resultados en septiembre-octubre o marzo-abril.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Estrategia ante resultados insuficientes:</strong> Si necesitas el certificado para un proceso con fecha límite estricta, preséntate en una convocatoria que permita al menos una segunda oportunidad antes del deadline.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Estrategias por perfil de candidato</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-pink-600" />
                    <h4 className="font-bold text-pink-800">Estudiantes de secundaria (15-18 años)</h4>
                  </div>
                  <p className="text-pink-700 text-sm">
                    Las convocatorias de <strong>noviembre-diciembre</strong> resultan óptimas porque permiten completar el curso escolar sin presión adicional. La preparación puede iniciarse en septiembre y extenderse 10-12 semanas con clases semanales de 2-3 horas.
                  </p>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-bold text-indigo-800">Estudiantes universitarios (18-25 años)</h4>
                  </div>
                  <p className="text-indigo-700 text-sm">
                    Las fechas de <strong>marzo-abril o septiembre-octubre</strong> minimizan conflictos con exámenes universitarios. La preparación puede coordinarse con periodo vacacional previo (Navidad para marzo, verano para septiembre).
                  </p>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <h4 className="font-bold text-teal-800">Profesionales (25-45 años)</h4>
                  </div>
                  <p className="text-teal-700 text-sm">
                    Las convocatorias digitales con <strong>fechas flexibles</strong> (disponibles mensualmente en centros grandes) permiten ajustar según ciclos laborales. Preparación: 6-9 meses con clases semanales de 90-120 minutos.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 5: Plazos de inscripción */}
            <section id="plazos-inscripcion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Bell className="w-8 h-8 text-purple-600 flex-shrink-0" />
                5. Plazos de inscripción: fechas límite y proceso de matrícula
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los plazos de inscripción Cambridge 2026 representan uno de los aspectos más críticos y menos comprendidos del proceso de certificación. A diferencia de sistemas de registro continuo como Linguaskill, los exámenes Cambridge tienen fechas de cierre estrictas que varían según el centro autorizado, el formato (digital/papel) y el nivel específico. El desconocimiento de estos plazos genera cada año miles de casos de candidatos que pierden convocatorias deseadas, viéndose obligados a esperar meses adicionales o aceptar centros menos convenientes con plazas residuales.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-4">Exámenes en papel</h4>
                  <p className="text-zinc-600 text-sm mb-4">
                    El plazo estándar de inscripción cierra entre <strong>4 y 6 semanas antes</strong> de la fecha oficial del examen. Este periodo refleja los requisitos logísticos de pedido, envío físico y distribución de materiales desde Cambridge a los centros autorizados.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Ejemplo: Para B2 First en papel el 7 de marzo 2026, la inscripción típicamente cierra entre el 3 y el 17 de febrero.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-4">Exámenes digitales</h4>
                  <p className="text-zinc-600 text-sm mb-4">
                    Mayor flexibilidad con cierres entre <strong>14 y 21 días antes</strong> del examen. En ciudades como Madrid, Barcelona o Valencia, algunos centros especializados aceptan inscripciones hasta 10 días antes para candidatos con documentación completa y pago inmediato.
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Cambridge requiere que cada centro reporte el listado final de candidatos con al menos 7 días de antelación.
                  </p>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Proceso de inscripción</h3>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
                <ol className="space-y-4 text-purple-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Registro:</strong> Online o presencial en el centro elegido, proporcionando datos personales completos (nombre exacto según documento oficial de identidad), fotografía reciente tipo carnet, y elección de formato (digital/papel) si ambos están disponibles.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Pago de tasas 2026:</strong> B1 Preliminary 186-196€, B2 First 204-214€, C1 Advanced 221-231€, C2 Proficiency 236-246€.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Confirmación:</strong> Recepción de documentación y asignación de número de candidato por email entre 7 y 14 días después de completar la inscripción.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Políticas de cancelación y cambios de fecha</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Las políticas de modificación o cancelación varían drásticamente entre centros. La mayoría aplica estas condiciones: cancelación con reembolso del 100% si se solicita al menos 5-6 semanas antes del examen; cancelación con reembolso del 50-70% entre 4-5 semanas antes; sin reembolso si la cancelación ocurre con menos de 3 semanas de antelación. El cambio de fecha suele permitirse una única vez con penalización de 30-50€ si se solicita al menos 4 semanas antes. Las ausencias injustificadas el día del examen resultan en pérdida total de la tasa sin posibilidad de recuperación o transferencia.
              </p>
            </section>

            {/* Section 6: Centros autorizados */}
            <section id="centros-autorizados" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-purple-600 flex-shrink-0" />
                6. Centros autorizados: variaciones regionales y disponibilidad
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La red de centros autorizados Cambridge en España comprende más de <strong>180 instituciones</strong> distribuidas desigualmente por comunidades autónomas, generando diferencias significativas en disponibilidad de fechas, formatos ofrecidos y experiencia de examen. Madrid y Cataluña concentran aproximadamente el 40% de los centros nacionales, ofreciendo convocatorias mensuales en todos los niveles y formatos. Comunidades como Extremadura, La Rioja o Cantabria cuentan con 3-6 centros cada una, limitando las opciones de candidatos locales. Esta distribución asimétrica obliga a muchos candidatos a desplazarse entre 50 y 200 kilómetros para acceder a fechas específicas o formatos deseados.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Tipologías de centros autorizados</h4>
                <div className="space-y-4">
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h5 className="font-bold text-purple-400 mb-2">Centros preparadores privados</h5>
                    <p className="text-zinc-300 text-sm">
                      Academias especializadas que ofrecen exámenes a alumnos propios o externos. Calendarios amplios con todas las convocatorias disponibles, mayor flexibilidad en fechas de Speaking. Ejemplos: Impulse English Academy (Madrid), British Council, academias regionales especializadas.
                    </p>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h5 className="font-bold text-green-400 mb-2">Centros educativos públicos y concertados</h5>
                    <p className="text-zinc-300 text-sm">
                      Universidades, escuelas oficiales de idiomas, institutos. Organizan convocatorias principalmente para sus estudiantes regulares, aceptando externos solo si hay plazas residuales. Calendarios concentrados en mayo-junio y noviembre-diciembre.
                    </p>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h5 className="font-bold text-amber-400 mb-2">Centros empresariales y cámaras de comercio</h5>
                    <p className="text-zinc-300 text-sm">
                      Enfocados en exámenes Business English y Linguaskill, ofreciendo fechas Cambridge generales de forma esporádica según demanda corporativa.
                    </p>
                  </div>

                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Criterios para elegir centro autorizado</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-zinc-900">Proximidad geográfica</h5>
                    <p className="text-zinc-600 text-sm">Minimizar desplazamientos largos el día del examen reduce estrés y riesgo de retrasos.</p>
                  </div>

                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-zinc-900">Reputación y experiencia</h5>
                    <p className="text-zinc-600 text-sm">Centros con 10+ años organizando exámenes ofrecen procesos más fluidos y personal experimentado.</p>
                  </div>

                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                  <Monitor className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-zinc-900">Infraestructura técnica</h5>
                    <p className="text-zinc-600 text-sm">Para exámenes digitales, verificar ordenadores modernos, software actualizado y auriculares de calidad.</p>
                  </div>

                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                  <Globe className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-zinc-900">Tasas de aprobación</h5>
                    <p className="text-zinc-600 text-sm">Centros con tasas superiores al 85-90% demuestran metodología efectiva de preparación.</p>
                  </div>

                </div>
              </div>
            </section>

            {/* Section 7: Resultados y certificación */}
            <section id="resultados-certificacion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-purple-600 flex-shrink-0" />
                7. Resultados y certificación: tiempos de espera por formato
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El proceso de publicación de resultados y emisión de certificados Cambridge 2026 presenta diferencias temporales significativas entre formatos digitales y papel, impactando directamente en candidatos con plazos académicos o laborales ajustados. Comprender estos tiempos permite planificar adecuadamente y evitar situaciones donde se necesita el certificado pero aún no se ha recibido.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-4">Exámenes digitales</h4>
                  <ul className="space-y-3 text-green-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>7-10 días:</strong> Resultados preliminares online + certificado PDF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>3-4 semanas:</strong> Certificado físico oficial por correo postal</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="font-bold text-orange-800 mb-4">Exámenes en papel</h4>
                  <ul className="space-y-3 text-orange-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span><strong>4-6 semanas:</strong> Publicación online de resultados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span><strong>5-8 semanas:</strong> Total hasta recepción del certificado físico</span>
                    </li>
                  </ul>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Validez y reconocimiento del certificado</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Los certificados Cambridge English <strong>no tienen fecha de caducidad oficial</strong>; son válidos de por vida según Cambridge Assessment English. Sin embargo, muchas instituciones académicas y empleadores aplican políticas propias de validez temporal, típicamente 2 años desde la fecha del examen. Esta práctica responde al reconocimiento de que las competencias lingüísticas pueden deteriorarse sin uso continuado. Candidatos deben verificar los requisitos específicos de la institución o empleador al que aplicarán.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                El certificado incluye desglose detallado de puntuación por destreza (Reading, Writing, Listening, Speaking) en escala Cambridge de 100-230 puntos, más nivel MCER alcanzado. Por ejemplo, un candidato de B2 First puede obtener puntuación total de 173 puntos, equivalente a B2 aprobado; pero si alcanza 180+ puntos, recibe certificación de nivel C1 aunque se presentó a examen B2. Esta característica permite "escalar" nivel sin necesidad de repetir examen superior.
              </p>
            </section>

            {/* Section 8: Estrategias de preparación */}
            <section id="estrategias-preparacion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-600 flex-shrink-0" />
                8. Estrategias de preparación según el calendario de convocatorias
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Diseñar un plan de preparación efectivo para exámenes Cambridge 2026 requiere sincronizar tu nivel actual, objetivos de certificación y fecha de examen elegida en un cronograma realista que equilibre intensidad de estudio, sostenibilidad a largo plazo y vida personal/profesional. Estudios internos de Cambridge demuestran que candidatos con preparación estructurada de <strong>150-250 horas</strong> obtienen tasas de aprobación del 85-92%, mientras que candidatos con menos de 100 horas descienden a tasas del 45-60%, independientemente de su nivel previo de inglés.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Plan de preparación: B1 → B2 First (6-8 meses)</h3>
                <div className="space-y-4 text-purple-700">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">Meses 1-4</span>
                    <p className="text-sm">Reforzar bases gramaticales y ampliar vocabulario pasivo a 3,500-4,000 palabras. Clases estructuradas 2-3h/semana + trabajo autónomo 4-5h/semana (lectura, podcasts, series en versión original).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">Meses 4-6</span>
                    <p className="text-sm">Práctica de formato específico Cambridge: simulacros parciales semanales, redacción de ensayos con corrección profesional, práctica oral estructurada.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">Meses 7-8</span>
                    <p className="text-sm">Simulacros completos bajo condiciones reales de examen, identificación de debilidades residuales y práctica intensiva de áreas problemáticas.</p>
                  </div>

                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">Plan de preparación: B2 → C1 Advanced (5-7 meses)</h3>
                <p className="text-green-700 text-sm mb-4">
                  La diferencia crítica entre B2 y C1 radica en sofisticación lingüística (estructuras gramaticales complejas, vocabulario académico de 5,000-6,000 palabras, cohesión textual avanzada) más que en competencia comunicativa básica.
                </p>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Lectura de textos académicos complejos (artículos científicos, ensayos filosóficos, literatura clásica)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Redacción de textos argumentativos extensos (250-300 palabras) con conectores avanzados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Práctica oral con debate de temas abstractos utilizando lenguaje preciso y matizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Simulacros desde el mes 3 de preparación (no relegarse al final)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Recursos de preparación recomendados</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Los materiales de preparación oficial Cambridge (serie Complete, Objective, Ready for) proporcionan la base más fiable, diseñados específicamente para el formato de examen. Complementar con Cambridge English Practice Testbooks (colecciones de exámenes completos auténticos de convocatorias pasadas) resulta esencial para los últimos 2-3 meses. Recursos digitales gratuitos incluyen Cambridge English YouTube channel, Cambridge English Activities for Learners y Test Your English (test rápido de nivel gratuito).
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Para preparación guiada profesional, los centros especializados como <strong>Impulse English Academy</strong> ofrecen metodologías propietarias diseñadas específicamente para optimizar tasas de aprobación mediante técnicas de repetición espaciada, práctica comunicativa intensiva y desarrollo progresivo de competencias. La elección entre preparación autodidacta, clases grupales o tutorías individuales debe basarse en tu perfil de aprendizaje, nivel de autonomía y complejidad del nivel objetivo.
              </p>
            </section>

            {/* Section 9: FAQ */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-purple-600 flex-shrink-0" />
                9. Preguntas Frecuentes sobre Fechas Exámenes Cambridge 2026
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
                <Globe className="w-8 h-8 text-purple-600 flex-shrink-0" />
                10. Conclusión
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Dominar el calendario de fechas de exámenes Cambridge 2026 constituye el primer paso estratégico hacia la certificación exitosa de tu nivel de inglés. Como hemos analizado exhaustivamente en esta guía, las convocatorias Cambridge no se reducen a simples fechas en un calendario: representan un ecosistema complejo de opciones, plazos, formatos y consideraciones logísticas que exigen planificación informada y decisiones conscientes. Los candidatos que abordan este proceso con anticipación, investigando el calendario oficial por niveles, evaluando las diferencias entre formatos digitales y papel, comparando centros autorizados regionales y sincronizando plazos de inscripción con sus cronogramas personales, multiplican significativamente sus probabilidades de obtener la certificación deseada en el primer intento.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las fechas específicas 2026 para B2 First, C1 Advanced, C2 Proficiency y otros niveles ofrecen flexibilidad suficiente para acomodar prácticamente cualquier perfil de candidato: estudiantes de secundaria que prefieren convocatorias post-escolares de noviembre-diciembre, universitarios que buscan fechas compatibles con exámenes académicos en marzo-abril o septiembre-octubre, profesionales con disponibilidad limitada que aprovechan la frecuencia mensual de exámenes digitales en centros grandes. La clave radica en identificar tu perfil, evaluar tu nivel real mediante placement tests confiables y construir un plan de preparación realista de 5-9 meses que culmine en la convocatoria óptima para tus circunstancias específicas.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La distinción entre formatos digitales (resultados en 7-10 días, mayor flexibilidad de fechas) y papel (resultados en 4-6 semanas, fechas fijas tradicionales) no debe subestimarse: puede determinar si recibes tu certificación a tiempo para solicitudes universitarias urgentes, ofertas laborales con deadline estricto o procesos migratorios. Tampoco deben ignorarse las variaciones regionales significativas entre comunidades autónomas y ciudades: la concentración de centros autorizados en Madrid, Barcelona y Valencia versus disponibilidad limitada en provincias medianas obliga a muchos candidatos a valorar desplazamientos estratégicos para acceder a fechas o formatos específicos.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-purple-800 mb-3">Tu próximo paso</h4>
                <p className="text-purple-700 text-sm">
                  Para candidatos en Madrid que buscan no solo conocer las fechas 2026 sino prepararse con garantías de éxito, nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-purple-600 hover:underline font-bold">academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-purple-600 hover:underline font-bold">junto a La Vaguada</a>, ofrece combinación única: conocimiento profundo del calendario oficial, preparación estructurada mediante metodologías probadas (The Impulse Method™ con tasas de aprobación del 100% en 2024-25), placement tests gratuitos para identificar tu nivel real y tiempo necesario, y flexibilidad de horarios con <a href="/cursos-ingles/adultos/" className="text-purple-600 hover:underline font-bold">cursos de inglés para adultos</a> y <a href="/cursos-ingles/secundaria/" className="text-purple-600 hover:underline font-bold">cursos de secundaria</a> (clases presenciales y online) que facilitan compaginar preparación con estudios o trabajo. Preparamos todos los <a href="/examenes-cambridge/" className="text-purple-600 hover:underline font-bold">exámenes Cambridge</a> incluyendo <a href="/linguaskill/" className="text-purple-600 hover:underline font-bold">Linguaskill</a>.
                </p>
              </div>

              <p className="text-zinc-600 leading-relaxed">
                El año 2026 presenta oportunidades renovadas para miles de candidatos en España que aspiran a validar oficialmente su dominio del inglés mediante el estándar internacional más reconocido. Ya sea que busques B2 First para acceder a universidad europea, C1 Advanced para master internacional, o C2 Proficiency para carrera académica en inglés, las fechas están publicadas, los centros preparados y los recursos disponibles. Tu responsabilidad es actuar con anticipación: consulta el calendario oficial, contacta centros autorizados en tu región, realiza un placement test para evaluar tu punto de partida real, elige tu fecha objetivo con margen suficiente para preparación adecuada y comienza el proceso con la confianza de quien planifica estratégicamente.
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
                  Centro Oficial de Preparación Cambridge con <strong>100% de aprobados</strong> en las convocatorias 2024-25. Conocemos el calendario oficial, los plazos y las mejores estrategias para cada convocatoria.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Placement test gratuito para determinar tu nivel real
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Asesoramiento personalizado sobre fechas y convocatorias
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Preparación intensiva adaptada a tu calendario
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Simulacros de examen bajo condiciones reales
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/34604910611?text=Hola,%20me%20interesa%20información%20sobre%20fechas%20de%20exámenes%20Cambridge%202026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                  <a
              href="/examenes-cambridge/"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Ver cursos Cambridge
                  </a>
                </div>

              </div>
              <div>
                <LeadForm
                  title="Reserva tu plaza Cambridge 2026"
                  subtitle="Te asesoramos sobre la mejor convocatoria"
                  ctaText="Solicitar información"
                  source="blog-fechas-cambridge"
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
              <a href="/examenes-cambridge/" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-purple-600 text-sm font-medium">Guía</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-purple-600 transition-colors">
                    Guía Completa de Exámenes Cambridge
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Todo sobre niveles, estructura y preparación</p>
                </div>
              </a>
              <a href="/examenes-cambridge/" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-purple-600 text-sm font-medium">Recursos</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-purple-600 transition-colors">
                    Libros Cambridge y Recursos 2026
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Los mejores materiales para preparar tu examen</p>
                </div>
              </a>
              <a href="/linguaskill/" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-purple-600 text-sm font-medium">Linguaskill</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-purple-600 transition-colors">
                    Guía Completa del Examen Linguaskill
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Estructura, ejemplos y estrategias de preparación</p>
                </div>
              </a>
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
            className="text-sm text-purple-600 hover:underline"
          >
            → Más información en Cambridge English - Exámenes oficiales
          </a>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
