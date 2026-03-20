import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, CheckCircle, Target, FileText, Award, MessageCircle, ChevronRight, ExternalLink } from 'lucide-react';
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
  headline: "Guía Completa del Examen Linguaskill: Ejemplos, Estructura y Preparación 2026",
  description: "Guía definitiva de Linguaskill: estructura, módulos, tipos de preguntas, ejemplos reales y estrategias de preparación. Resultados en 48 horas.",
  url: `${businessInfo.url}/linguaskill`,
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01"
});

const linguaskillFaqs = [
  {
    question: "¿Linguaskill es más fácil que Cambridge?",
    answer: "Linguaskill no es más fácil que los exámenes tradicionales de Cambridge; es un test multinivel adaptativo que ajusta la dificultad según las respuestas. Su formato digital y modular ofrece flexibilidad y rapidez, certificando niveles desde A1 hasta C1/C2, con rigor similar pero distinto enfoque y estructura."
  },
  {
    question: "¿Cuánto dura el examen Linguaskill?",
    answer: "El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular."
  },
  {
    question: "¿Se puede suspender Linguaskill?",
    answer: "Linguaskill no se puede suspender ni aprobar; es un examen adaptativo que certifica el nivel real de inglés del candidato, desde A1 hasta C1/C2, ajustando las preguntas según sus respuestas. Esto permite una evaluación precisa y justa basada en competencias, sin calificaciones tradicionales de aprobado o suspenso."
  },
  {
    question: "¿Qué universidades aceptan Linguaskill?",
    answer: "Linguaskill es aceptado por más de 80 universidades españolas, incluidas públicas y privadas en Madrid, Andalucía y Cataluña, así como universidades a distancia como UNED, UOC, UDIMA, UNIR y VIU. También lo reconocen universidades internacionales en Canadá, Italia y China, facilitando acreditaciones académicas y laborales."
  },
  {
    question: "¿Linguaskill General o Business?",
    answer: "Linguaskill General evalúa inglés para contextos cotidianos, académicos y sociales, ideal para estudiantes y procesos migratorios. Linguaskill Business se centra en inglés profesional en entornos laborales, destacando comunicación empresarial. Ambos miden niveles A1-C2 según el MCER y ofrecen resultados rápidos y fiables."
  },
  {
    question: "¿Cuánto tarda en llegar el certificado Linguaskill?",
    answer: "El certificado Linguaskill suele entregarse en formato digital aproximadamente 48 horas hábiles tras completar el examen. Resultados de reading y listening se obtienen de inmediato, mientras writing y speaking tardan hasta 48 horas. El certificado es válido internacionalmente y se envía por correo electrónico."
  },
  {
    question: "¿Linguaskill es reconocido internacionalmente?",
    answer: "Linguaskill de Cambridge es un examen multinivel, 100 % online y reconocido internacionalmente por más de 25,000 instituciones, universidades y empresas. Alineado con el MCER, certifica niveles de inglés desde A1 hasta C2, siendo válido para admisiones académicas, oposiciones y procesos laborales en 2025."
  },
  {
    question: "¿Qué puntuación es B2 en Linguaskill?",
    answer: "La puntuación que define el nivel B2 en Linguaskill de Cambridge abarca entre 140 y 159 puntos. Este nivel 'Independent User' acredita habilidades sólidas para comunicarse y comprender textos complejos, siendo fundamental para acceso académico y profesional, con certificación online, modular y adaptativa en 2026."
  },
  {
    question: "¿Cuántas veces puedo hacer Linguaskill?",
    answer: "Linguaskill puede realizarse múltiples veces sin límite, permitiendo repetir módulos individuales (Reading, Listening, Writing y Speaking) para mejorar la puntuación sin hacer el examen completo. Esta flexibilidad, junto con resultados en 48 horas, facilita certificaciones adaptadas a objetivos académicos y profesionales."
  },
  {
    question: "¿Linguaskill tiene validez para oposiciones?",
    answer: "Linguaskill es un examen multinivel online de Cambridge con certificación oficial reconocida por universidades e instituciones públicas. Su validez para oposiciones en 2025/26 crece gracias a resultados en 48 horas, evaluación precisa y aceptación creciente en procesos selectivos oficiales y laborales."
  },
  {
    question: "¿Vale la pena Linguaskill?",
    answer: "Linguaskill merece la pena como certificación fiable de Cambridge English con resultados en 48 horas, reconocida por CRUE. Ofrece evaluación adaptativa con corrección híbrida humana e IA, niveles B1-C2 del MCER, y flexibilidad para realizar el examen online desde cualquier lugar. Incluye dos versiones: inglés general y Business. Útil para admisiones universitarias, becas, oposiciones y desarrollo profesional."
  },
  {
    question: "¿Qué tan difícil es la prueba Linguaskill?",
    answer: "La dificultad de Linguaskill se ajusta adaptativamente al nivel del candidato, evaluando desde B1 hasta C2 del MCER. La prueba no tiene número fijo de preguntas; aumenta la dificultad con respuestas correctas y la reduce con errores hasta identificar el nivel preciso. Linguaskill General evalúa inglés cotidiano mientras Linguaskill Business examina contextos empresariales, personalizando la experiencia según el desempeño individual del examinado."
  },
  {
    question: "¿Es Linguaskill lo mismo que Cambridge?",
    answer: "Linguaskill es un examen desarrollado por Cambridge English, no una entidad independiente. Ambos se alinean con el MCER, pero difieren en formato: Linguaskill ofrece evaluación online bajo demanda, modular y adaptativa con IA, niveles B1-C2 (140-210 puntos), resultados rápidos y versiones General/Business. Los exámenes tradicionales Cambridge (B2 First, C1 Advanced, C2 Proficiency) requieren centros presenciales, fechas fijas y certificación estructurada detallada."
  },
  {
    question: "¿Cuánto cuesta el examen Linguaskill en Madrid?",
    answer: "El examen Linguaskill cuesta aproximadamente 90-120€ según el centro. En Impulse English Academy, ofrecemos preparación incluida + examen con presupuesto personalizado. El precio es más competitivo que Cambridge B2 First (120-150€) y permite mejoras modulares sin pagar el examen completo nuevamente."
  },
  {
    question: "¿Cómo se prepara uno para Linguaskill?",
    answer: "La preparación para Linguaskill requiere 6-12 semanas en curso intensivo con énfasis en la adaptabilidad del algoritmo, trabajo específico en Reading/Listening automatizados, Writing con corrección híbrida y Speaking con evaluadores certificados. Practicar exámenes oficiales de Cambridge (B1 Preliminary, B2 First) y simulacros Linguaskill acelera la preparación."
  },
  {
    question: "¿Se puede hacer Linguaskill desde el móvil?",
    answer: "No. Linguaskill requiere un ordenador (PC o Mac) con conexión a internet estable, cámara web y micrófono. El módulo de Speaking utiliza la cámara para verificar la identidad del candidato. No es compatible con tablets ni smartphones. El examen se realiza en un centro autorizado o en casa con supervisión online según el centro."
  },
  {
    question: "¿Cuánto tardan en llegar los resultados de Linguaskill?",
    answer: "Los resultados de Reading y Listening se obtienen de forma inmediata tras completar el examen, ya que la corrección es automática. Los módulos de Writing y Speaking tardan hasta 48 horas hábiles, ya que utilizan corrección híbrida (IA + revisión humana). El certificado digital se envía por correo electrónico."
  },
  {
    question: "¿Linguaskill sirve para acreditar idioma en la universidad española?",
    answer: "Sí. Linguaskill es aceptado por la mayoría de universidades públicas y privadas españolas para acreditar nivel de idioma (B1, B2 o C1 según la puntuación). La CRUE (Conferencia de Rectores de las Universidades Españolas) lo reconoce como certificación válida. Consulta los requisitos específicos de tu universidad."
  },
  {
    question: "¿Qué nivel máximo se puede obtener en Linguaskill?",
    answer: "Linguaskill puede certificar niveles desde A1 hasta C1 o superior en la escala del MCER. La puntuación máxima en la Cambridge English Scale llega hasta 180+ puntos, equivalente a C1 o superior. A diferencia de los exámenes Cambridge tradicionales, Linguaskill evalúa todo el rango de niveles en una sola prueba adaptativa."
  },
  {
    question: "¿Linguaskill es más fácil que un examen Cambridge tradicional?",
    answer: "No es más fácil ni más difícil: es diferente. Linguaskill es adaptativo, lo que significa que las preguntas se ajustan automáticamente a tu nivel. Si respondes bien, las preguntas aumentan en dificultad. Los exámenes Cambridge tradicionales (B2 First, C1 Advanced) tienen dificultad fija para cada nivel. Ambos certifican con el mismo rigor."
  }
];

const tableOfContents = [
  { id: 'que-es-linguaskill', title: '¿Qué es Linguaskill y por qué elegirlo en 2026?' },
  { id: 'estructura-modulos', title: 'Estructura y módulos del examen Linguaskill' },
  { id: 'sistema-adaptativo', title: 'Sistema adaptativo y algoritmos de evaluación' },
  { id: 'tipos-preguntas-ejemplos', title: 'Tipos de preguntas y ejemplos reales por módulo' },
  { id: 'general-vs-business', title: 'Linguaskill General vs. Linguaskill Business: ¿Cuál elegir?' },
  { id: 'criterios-evaluacion', title: 'Criterios de evaluación y sistema de puntuación' },
  { id: 'proceso-completo', title: 'Proceso de registro, realización y obtención de resultados' },
  { id: 'estrategias-preparacion', title: 'Estrategias de preparación y recursos oficiales' },
];

export default function LinguaskillGuiaCompletaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Linguaskill Examen Ejemplo: Guía Completa 2026"
        description="Guía definitiva del examen Linguaskill con ejemplos reales, estructura, tipos de preguntas y preparación. Resultados en 48 horas. Todo lo que necesitas saber."
        keywords="linguaskill, examen linguaskill, linguaskill cambridge, estructura linguaskill, preparación linguaskill, linguaskill general, linguaskill business, módulos linguaskill"
        canonical="/linguaskill"
        ogType="article"
      />
      <Navbar />

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
          { label: 'Guía Linguaskill' }
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
              Guía Completa del Examen Linguaskill: Ejemplos, Estructura y Preparación 2026
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Guía definitiva del examen Linguaskill con ejemplos reales, estructura, tipos de preguntas y preparación. Resultados en 48 horas. Todo lo que necesitas saber.
            </p>
          </div>
        </div>
      </header>

      <article>
        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop"
              alt="Estudiante preparando examen Linguaskill"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

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

        {/* FAQ Section - High up for SEO/AI */}
        <FAQSection faqs={linguaskillFaqs} title="Preguntas Frecuentes sobre Linguaskill" />

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                ¿Necesitas certificar tu nivel de inglés rápidamente para avanzar en tu carrera profesional o conseguir la admisión universitaria que buscas? El examen Linguaskill de Cambridge Assessment English representa la solución moderna que estabas buscando: evaluación online, resultados en 48 horas y flexibilidad total para realizar el examen desde cualquier lugar del mundo. A diferencia de las certificaciones tradicionales que requieren desplazamientos físicos y semanas de espera, Linguaskill utiliza tecnología adaptativa de última generación que personaliza cada pregunta según tu nivel real de competencia lingüística.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Esta guía completa te proporciona todo lo que necesitas para entender, preparar y superar con éxito el examen Linguaskill en 2026. Descubrirás la estructura exacta de cada módulo, ejemplos reales de los tipos de preguntas que encontrarás, las diferencias fundamentales entre Linguaskill General y Business, y estrategias específicas de preparación que maximizarán tu puntuación. Más de 4.000 organizaciones educativas y empresas internacionales reconocen esta certificación como prueba válida del dominio del inglés, desde el nivel B1 hasta el nivel C2 del Marco Común Europeo de Referencia para las Lenguas (MCER).
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Como Centro Oficial de Preparación de Cambridge, en Impulse English hemos ayudado a cientos de estudiantes a alcanzar sus objetivos con Linguaskill, manteniendo un índice de éxito del 100% en las convocatorias 2024-25. Esta guía recoge nuestra experiencia práctica combinada con información oficial actualizada de Cambridge Assessment English, proporcionándote una ventaja competitiva real. Entenderás no solo qué evalúa el examen, sino cómo el sistema adaptativo funciona en tiempo real y qué criterios específicos utilizan los examinadores humanos y los algoritmos de inteligencia artificial para calificar tus respuestas.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                En las siguientes secciones exploraremos desde los aspectos técnicos del sistema adaptativo hasta consejos prácticos para cada tipo de tarea, pasando por la comparativa detallada entre ambas versiones del examen y el proceso completo desde el registro hasta la obtención del certificado digital.
              </p>
            </section>

            {/* Section 1: ¿Qué es Linguaskill? */}
            <section id="que-es-linguaskill" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-accent-blue" />
                ¿Qué es Linguaskill y por qué elegirlo en 2026?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill es la certificación de inglés 100% online de Cambridge Assessment English diseñada específicamente para profesionales, estudiantes universitarios y organizaciones que necesitan evaluar competencias lingüísticas con rapidez, precisión y flexibilidad sin precedentes. Lanzado como evolución de los exámenes BULATS, Linguaskill certifica niveles desde B1 hasta C2 del Marco Común Europeo mediante tecnología adaptativa que personaliza cada examen según el desempeño del candidato en tiempo real. Con más de 4.000 instituciones educativas y empresas multinacionales que reconocen esta certificación en 2026, Linguaskill se ha consolidado como la opción preferida para quienes buscan acreditación internacional sin los largos tiempos de espera de exámenes tradicionales.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La principal ventaja competitiva de Linguaskill frente a otras certificaciones radica en su modelo de entrega flexible y resultados ultrarrápidos. Mientras que exámenes como IELTS o TOEFL requieren inscripción con semanas de antelación, desplazamiento a centros específicos y espera de 10-15 días laborables para recibir resultados, Linguaskill te permite realizar el examen desde tu propio domicilio con supervisión remota mediante tecnología de reconocimiento facial avanzada, recibiendo tus resultados en un máximo de 48 horas para todos los módulos. Esta velocidad resulta crucial cuando necesitas presentar certificación para solicitudes universitarias con plazos ajustados, procesos de selección laboral inmediatos o requisitos corporativos urgentes de acreditación lingüística.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-gradient-to-br from-accent-blue to-blue-700 p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">48h</div>
                  <div className="text-white/80">Resultados garantizados</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">4.000+</div>
                  <div className="text-white/80">Organizaciones lo reconocen</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80">Online disponible</div>
                </div>

              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El reconocimiento institucional de Linguaskill ha experimentado un crecimiento exponencial durante los últimos tres años. En España, la Conferencia de Rectores de Universidades Españolas (CRUE) valida oficialmente esta certificación para requisitos de graduación y acceso a programas de posgrado en todas las universidades públicas y privadas. A nivel empresarial, corporaciones multinacionales como Siemens, Telefónica, BBVA y Deloitte utilizan Linguaskill para evaluar el nivel de inglés de candidatos en procesos de selección y empleados en programas de formación continua. La validez internacional del certificado Cambridge proporciona credibilidad instantánea en más de 130 países, eliminando las dudas sobre la equivalencia de niveles que pueden surgir con certificaciones menos conocidas.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Por qué la modalidad online importa en 2026</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La transformación digital del trabajo y la educación ha modificado radicalmente las expectativas sobre cómo deben administrarse las evaluaciones profesionales. Linguaskill responde a esta nueva realidad eliminando barreras geográficas que tradicionalmente limitaban el acceso a certificaciones prestigiosas. Un candidato en una ciudad sin centro examinador Cambridge puede ahora certificar su inglés con la misma validez que quien vive en Madrid o Barcelona, simplemente con una conexión estable a internet, una webcam funcional y un micrófono de calidad básica. Los centros autorizados como Impulse English ofrecen además modalidad supervisada presencial para quienes prefieren el entorno tradicional, pero la opción remota con proctoring online mediante inteligencia artificial garantiza la misma seguridad e integridad del proceso.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                La tecnología de supervisión remota utiliza algoritmos de reconocimiento facial que verifican tu identidad antes de comenzar el examen y monitorean tu comportamiento durante toda la prueba, detectando automáticamente movimientos sospechosos, miradas fuera de pantalla prolongadas o presencia de personas adicionales en la sala. Este sistema garantiza que los certificados obtenidos online mantengan el mismo rigor y fiabilidad que las convocatorias presenciales, eliminando cualquier cuestionamiento sobre su validez por parte de instituciones receptoras. Cada sesión queda registrada digitalmente, permitiendo revisiones posteriores en caso de incidencias técnicas o reclamaciones del candidato.
              </p>
            </section>

            {/* Section 2: Estructura y módulos */}
            <section id="estructura-modulos" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-accent-blue" />
                Estructura y módulos del examen Linguaskill
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill evalúa las cuatro destrezas lingüísticas fundamentales mediante tres módulos independientes que los candidatos pueden realizar de forma completa o selectiva según sus necesidades específicas de certificación: Reading & Listening (comprensión lectora y auditiva combinadas), Writing (expresión escrita) y Speaking (expresión oral). Esta estructura modular representa una innovación significativa frente a exámenes tradicionales que obligan a presentar todas las destrezas simultáneamente, permitiendo a estudiantes y profesionales certificar únicamente las competencias requeridas por su universidad o empleador, reduciendo así tiempo de examen y costos de inscripción proporcionalmente. Puedes consultar detalles completos sobre cada módulo en la <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">página oficial de Cambridge Linguaskill</a>.
              </p>

              <div className="space-y-6 my-8">
                <div className="border border-zinc-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-accent-blue font-bold">R&L</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900">Reading & Listening</h3>
                      <p className="text-zinc-500 text-sm">60-85 minutos | Adaptativo</p>
                    </div>

                  </div>
                  <p className="text-zinc-600">
                    El módulo Reading & Listening constituye una prueba adaptativa única de duración variable entre 60 y 85 minutos que combina ejercicios de comprensión lectora y auditiva en una sola sesión continua. El sistema presenta inicialmente preguntas de dificultad media B2 y ajusta progresivamente el nivel según tus respuestas correctas o incorrectas, sin que puedas retroceder para modificar respuestas anteriores. Esta característica adaptativa significa que no todos los candidatos reciben el mismo número de preguntas: el algoritmo continúa evaluando hasta determinar tu nivel con precisión estadística suficiente, lo que puede requerir entre 35 y 42 preguntas en Reading y 20-25 preguntas en Listening dependiendo de la consistencia de tu desempeño.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">W</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900">Writing</h3>
                      <p className="text-zinc-500 text-sm">45 minutos | Duración fija</p>
                    </div>

                  </div>
                  <p className="text-zinc-600">
                    El módulo Writing tiene una duración fija de 45 minutos durante los cuales debes completar dos tareas con ponderaciones diferentes que reflejan su complejidad relativa. La primera tarea consiste en redactar un email de aproximadamente 50 palabras respondiendo a una situación comunicativa específica (solicitar información, confirmar detalles, hacer una propuesta), representando el 25% de tu puntuación total en este módulo. La segunda tarea requiere producir un texto argumentativo más extenso de mínimo 180 palabras que puede ser un ensayo (en Linguaskill General sobre temas sociales, educativos o tecnológicos) o un informe empresarial (en Linguaskill Business analizando datos, proponiendo soluciones o comparando opciones), constituyendo el 75% restante de la calificación.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">S</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900">Speaking</h3>
                      <p className="text-zinc-500 text-sm">15 minutos | Grabado</p>
                    </div>

                  </div>
                  <p className="text-zinc-600">
                    El módulo Speaking se realiza completamente mediante ordenador con grabación de tus respuestas orales para posterior evaluación por examinadores certificados de Cambridge, a diferencia de exámenes como IELTS o Trinity que utilizan entrevistadores en vivo. La prueba dura aproximadamente 15 minutos e incluye cinco secciones progresivas: entrevista personal con respuestas de 10-20 segundos, lectura en voz alta de ocho frases para evaluar pronunciación y fluidez, presentación extendida de un minuto sobre un tema dado con 40 segundos de preparación, descripción de una fotografía o gráfico durante un minuto, y finalmente dos preguntas de profundización relacionadas con el tema de tu presentación que requieren respuestas de 30-40 segundos cada una.
                  </p>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Flexibilidad modular: ventajas prácticas</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La posibilidad de realizar módulos independientes transforma radicalmente la experiencia del candidato y la utilidad práctica del examen para diferentes contextos. Imaginemos tres escenarios reales: un ingeniero que necesita certificar únicamente Speaking para un puesto internacional puede presentar solo ese módulo en 15 minutos con un costo aproximado de 55€; una estudiante universitaria que requiere B2 en Reading y Listening para graduación puede omitir Writing y Speaking completamente, invirtiendo 75 minutos y 90€; un profesional del marketing que busca demostrar capacidad de redacción empresarial en inglés puede centrarse exclusivamente en Writing durante 45 minutos por 55€. Esta flexibilidad elimina el desperdicio de tiempo y recursos en destrezas no requeridas.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Los resultados modulares independientes aparecen en tu informe oficial de Cambridge con puntuaciones separadas en la escala Cambridge English Scale (82-180 puntos) y su equivalencia MCER correspondiente. Las universidades y empresas pueden solicitar certificación de destrezas específicas según sus requisitos: muchas universidades españolas exigen únicamente comprensión lectora y auditiva para requisitos de graduación, mientras que posiciones laborales internacionales priorizan frecuentemente Speaking y Writing. El sistema "My Best Score" de Cambridge te permite además retomar módulos individuales para mejorar puntuaciones previas sin necesidad de repetir todo el examen, conservando tus mejores calificaciones de cada destreza independientemente de cuándo las obtuviste.
              </p>
            </section>

            {/* Section 3: Sistema adaptativo */}
            <section id="sistema-adaptativo" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Sistema adaptativo y algoritmos de evaluación
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El sistema adaptativo computerizado (Computer Adaptive Testing o CAT) que utiliza Linguaskill en los módulos Reading y Listening representa la tecnología de evaluación lingüística más avanzada disponible actualmente, proporcionando mediciones de competencia significativamente más precisas que exámenes tradicionales de formato fijo con el mismo número de preguntas. El algoritmo funciona mediante un banco de ítems calibrados previamente con miles de candidatos reales, donde cada pregunta tiene asignado un nivel de dificultad exacto en la escala MCER y estadísticas de discriminación que indican su capacidad para diferenciar entre candidatos de niveles contiguos.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cuando inicias el módulo Reading & Listening, el sistema presenta automáticamente una primera pregunta de nivel B2 medio como punto de partida estándar para todos los candidatos. Si respondes correctamente, el siguiente ítem aumenta aproximadamente medio nivel en dificultad; si fallas, disminuye proporcionalmente. Este proceso de ajuste continúa durante toda la prueba, con el algoritmo calculando constantemente un intervalo de confianza estadística alrededor de tu nivel estimado. La prueba finaliza cuando este intervalo se estrecha suficientemente para garantizar que tu puntuación real se encuentra dentro de un rango de ±3 puntos en la escala Cambridge con 95% de probabilidad, cumpliendo estándares psicométricos internacionales de precisión.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-amber-800 mb-2">Cómo funciona el sistema adaptativo</h4>
                <ol className="text-amber-700 space-y-2">
                  <li>1. Empiezas con una pregunta de nivel B2 medio</li>
                  <li>2. Si aciertas, la siguiente pregunta aumenta en dificultad</li>
                  <li>3. Si fallas, disminuye proporcionalmente</li>
                  <li>4. El proceso continúa hasta determinar tu nivel con precisión estadística</li>
                </ol>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La ventaja fundamental del sistema adaptativo sobre exámenes lineales tradicionales radica en la eficiencia de medición: mientras que un test fijo debe incluir preguntas de todos los niveles (desde A2 hasta C2) para poder evaluar cualquier candidato, Linguaskill concentra las preguntas exclusivamente en el rango cercano a tu nivel real, maximizando la información obtenida de cada respuesta. Un candidato de nivel B1 real no pierde tiempo respondiendo preguntas C1 imposibles ni preguntas A2 trivialmente fáciles; recibe mayoritariamente ítems B1-B2 que proporcionan la máxima discriminación para su competencia real. Esta focalización permite evaluaciones igual de precisas con 30-40 preguntas que exámenes lineales con 80-100 ítems.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Cómo experimentas el sistema adaptativo durante el examen</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Desde la perspectiva del candidato, el sistema adaptativo genera una experiencia distintiva que debes entender para mantener la confianza durante la prueba. Notarás que las preguntas no siguen un patrón lineal de dificultad creciente como en exámenes escolares tradicionales; en cambio, experimentarás fluctuaciones aparentemente aleatorias donde una pregunta difícil puede seguirse de otra más sencilla. Este comportamiento resulta completamente normal y refleja el algoritmo explorando los límites de tu competencia: las preguntas difíciles evalúan si puedes manejar el nivel superior, mientras que las más fáciles confirman tu dominio del nivel inferior.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Un error psicológico común consiste en interpretar la dificultad percibida de las preguntas como indicador de tu desempeño, generando ansiedad innecesaria. Si encuentras las preguntas muy difíciles, podría significar que el sistema te está evaluando en niveles altos (C1-C2) porque has demostrado competencia en niveles inferiores, lo cual constituye una señal positiva. Inversamente, encontrar preguntas fáciles no necesariamente indica fracaso; puede simplemente reflejar el algoritmo confirmando tu nivel después de explorar rangos superiores. La clave consiste en concentrarte exclusivamente en responder cada pregunta con tu mejor capacidad, confiando en que el sistema está diseñado para encontrar tu nivel real independientemente de las fluctuaciones de dificultad que percibas.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                El sistema adaptativo tampoco permite retroceder para revisar o cambiar respuestas anteriores, funcionando como una evaluación secuencial unidireccional donde cada respuesta es definitiva. Esta restricción resulta fundamental para la lógica adaptativa: el algoritmo selecciona cada nueva pregunta basándose en el historial completo de tus respuestas previas, por lo que modificar respuestas antiguas invalidaría la secuencia de decisiones algorítmicas posteriores. Aunque inicialmente puede resultar incómoda para candidatos acostumbrados a revisar exámenes escritos tradicionales, esta característica elimina las dudas improductivas sobre respuestas pasadas, permitiéndote concentrar toda tu energía cognitiva en la pregunta actual sin distracciones.
              </p>
            </section>

            {/* Section 4: Tipos de preguntas y ejemplos */}
            <section id="tipos-preguntas-ejemplos" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Tipos de preguntas y ejemplos reales por módulo
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo Reading evalúa comprensión lectora mediante seis formatos diferentes de tareas que aparecen en orden de complejidad creciente, adaptándose al nivel determinado progresivamente por el algoritmo. Los tipos fundamentales incluyen:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-zinc-50 rounded-lg p-4">
                  <span className="text-accent-blue font-medium">Read and Select:</span>
                  <span className="text-zinc-600"> Opción múltiple con tres alternativas donde debes elegir la respuesta correcta</span>
                </div>
                <div className="bg-zinc-50 rounded-lg p-4">
                  <span className="text-accent-blue font-medium">Gapped Text:</span>
                  <span className="text-zinc-600"> Seleccionar la palabra o frase adecuada para completar espacios en un texto</span>
                </div>
                <div className="bg-zinc-50 rounded-lg p-4">
                  <span className="text-accent-blue font-medium">Multiple Choice Extended:</span>
                  <span className="text-zinc-600"> Preguntas de comprensión sobre textos más largos con cuatro opciones de respuesta</span>
                </div>
                <div className="bg-zinc-50 rounded-lg p-4">
                  <span className="text-accent-blue font-medium">Open Cloze:</span>
                  <span className="text-zinc-600"> Rellenar espacios en blanco sin opciones dadas, escribiendo la palabra correcta</span>
                </div>
                <div className="bg-zinc-50 rounded-lg p-4">
                  <span className="text-accent-blue font-medium">Extended Reading:</span>
                  <span className="text-zinc-600"> Textos académicos o profesionales largos con múltiples preguntas de análisis</span>
                </div>
                <div className="bg-zinc-50 rounded-lg p-4">
                  <span className="text-accent-blue font-medium">Missing Sentences/Paragraphs:</span>
                  <span className="text-zinc-600"> Reordenar fragmentos de texto o identificar dónde insertan oraciones faltantes</span>
                </div>

              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-blue-800 mb-3">Ejemplo de Read and Select (B1-B2)</h4>
                <p className="text-blue-700 italic mb-3">
                  "Due to unexpected maintenance work, the office will _____ at 3 PM today."
                </p>
                <p className="text-blue-600">
                  A) close &nbsp;&nbsp; B) closes &nbsp;&nbsp; C) closing
                </p>
                <p className="text-blue-800 font-medium mt-3">Respuesta correcta: A) close</p>
                <p className="text-blue-700 text-sm mt-2">
                  La respuesta evalúa conocimiento básico de gramática modal con infinitivos después de verbos auxiliares.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-purple-800 mb-3">Ejemplo de Read and Select (C1)</h4>
                <p className="text-purple-700 italic mb-3">
                  "The committee's decision to _____ the proposal reflects their concern about long-term viability."
                </p>
                <p className="text-purple-600">
                  A) withhold &nbsp;&nbsp; B) withdraw &nbsp;&nbsp; C) withstand
                </p>
                <p className="text-purple-800 font-medium mt-3">Respuesta correcta: A) withhold</p>
                <p className="text-purple-700 text-sm mt-2">
                  Las tres opciones son gramaticalmente posibles pero solo "withhold" (retener, no aprobar) transmite el significado coherente contextualmente.
                </p>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las tareas <strong>Open Cloze</strong> representan ejercicios más desafiantes que evalúan dominio gramatical productivo sin apoyo de opciones múltiples. Un texto típico podría presentarse así: "Despite the economic challenges _____ by the pandemic, many small businesses have managed to survive by adapting _____ digital sales channels. Remote work has also become the norm, _____ employees greater flexibility in managing their schedules." Las respuestas correctas (caused/posed, to, giving/offering) requieren comprensión profunda de colocaciones verbales, regímenes preposicionales y estructuras participiales. Los candidatos de nivel B1 frecuentemente fallan este tipo al proponer palabras gramaticalmente incorrectas o semánticamente inadecuadas al contexto inmediato.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo <strong>Listening</strong> combina audio de hablantes nativos británicos, americanos, australianos y otros acentos del inglés internacional evaluando mediante cinco formatos principales: <strong>Listen and Select</strong> (escuchar un monólogo o conversación breve de 20-30 segundos y responder opción múltiple), <strong>Extended Listening</strong> (audios más largos de 2-3 minutos con múltiples preguntas), <strong>Note Completion</strong> (completar apuntes o formularios mientras escuchas información específica), <strong>Matching</strong> (relacionar información de múltiples hablantes con categorías o descripciones) y <strong>Inference Questions</strong> (comprender actitudes, opiniones o intenciones implícitas no expresadas directamente).
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Ejemplos del módulo Speaking</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo <strong>Speaking</strong> comienza con la sección de entrevista personal donde el sistema genera preguntas automáticas sobre tu vida cotidiana: "What do you enjoy doing in your free time?", "Tell me about your current job or studies", "Describe a recent trip you took". Tienes 10-15 segundos para responder cada una, suficiente para proporcionar 2-3 frases completas pero insuficiente para elaboraciones extensas. Los candidatos exitosos responden con naturalidad usando estructuras gramaticales variadas: "In my free time, I really enjoy playing tennis at my local club. I've been playing for about five years now, and it's become a great way to stay fit while socializing with friends who share the same interest."
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La sección de <strong>lectura en voz alta</strong> presenta ocho frases desconectadas que debes leer claramente con pronunciación correcta y entonación natural. Un ejemplo típico: "The organization's commitment to sustainability has earned recognition from environmental groups worldwide." Esta tarea evalúa específicamente pronunciación de fonemas difíciles (/θ/ en "commitment", /ə/ en "organization"), acento léxico correcto (comMITment no COMMitment, organiZAtion no ORganization) y ritmo apropiado del inglés con reducción de palabras funcionales. Los errores comunes incluyen lectura excesivamente lenta y robótica, pronunciación a la española de vocales y acentuación incorrecta en palabras polisílabas.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La <strong>presentación extendida</strong> proporciona un tema con 40 segundos de preparación mental (sin posibilidad de tomar notas escritas) seguidos de un minuto de exposición oral continua. Temas típicos incluyen: "Describe the advantages and disadvantages of working from home" o "Talk about how technology has changed the way people communicate". La clave para puntuar alto consiste en estructurar tu respuesta claramente con introducción ("Today I'd like to talk about..."), desarrollo con ejemplos específicos ("One major advantage is flexibility. For example, I can...") y conclusión breve ("Overall, I believe..."). Los candidatos que simplemente hablan sin estructura coherente, repiten ideas sin desarrollo o se detienen prematuramente antes del minuto completo penalizan significativamente su puntuación.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Ejemplos del módulo Writing</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La <strong>primera tarea de Writing</strong> (email de 50 palabras, 25% de la puntuación) presenta situaciones comunicativas directas. Ejemplo para Linguaskill General: "You recently attended a language course abroad. Write an email to your friend recommending the course. In your email, you should: explain why you chose this course, describe what you learned, say why you think your friend would benefit from it."
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-green-800 mb-3">Ejemplo de respuesta exitosa (Email)</h4>
                <p className="text-green-700 italic">
                  "Hi Sarah, I just finished a great Spanish course in Barcelona that I think you'd love. I chose it because of the small class sizes and focus on conversation practice. We learned practical language for everyday situations and I'm now much more confident speaking. Since you're planning to travel to South America next year, this course would give you the foundation you need. Let me know if you want more details! Best, Tom"
                </p>
                <p className="text-green-600 text-sm mt-2">81 palabras, cubre todos los puntos requeridos, tono apropiado amistoso.</p>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La <strong>segunda tarea de Writing</strong> (texto largo de 180+ palabras, 75% de la puntuación) requiere argumentación desarrollada y organización formal. Para Linguaskill General: "Some people believe that students learn better in traditional classrooms, while others think online education is more effective. Discuss both views and give your opinion." Una respuesta de nivel C1 desarrollaría: introducción con reformulación de la cuestión y presentación de estructura, párrafo explicando ventajas de educación tradicional (interacción face-to-face, disciplina estructurada, aclaración inmediata de dudas), párrafo con ventajas del aprendizaje online (flexibilidad horaria, acceso a recursos globales, ritmo personalizado), párrafo de opinión personal con justificación matizada reconociendo validez de ambos enfoques según contextos específicos, y conclusión sintetizando la perspectiva equilibrada. El uso de conectores sofisticados (whereas, furthermore, notwithstanding, consequently) y vocabulario académico preciso (pedagogical approaches, synchronous interaction, learner autonomy) diferencia niveles C1-C2 de B2.
              </p>
            </section>

            {/* Section 5: General vs Business */}
            <section id="general-vs-business" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Linguaskill General vs. Linguaskill Business: ¿Cuál elegir?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La decisión entre Linguaskill General y Linguaskill Business debe basarse exclusivamente en el contexto donde utilizarás la certificación y el tipo de inglés que necesitas demostrar dominar. Ambas versiones utilizan la misma tecnología adaptativa, idénticos algoritmos de evaluación, formatos de tareas equivalentes y escala de puntuación común (Cambridge English Scale 82-180), difiriendo únicamente en el contenido temático de los textos y las situaciones comunicativas presentadas en cada módulo. No existe diferencia objetiva de dificultad entre ambas versiones; un candidato con nivel real B2 obtendrá aproximadamente la misma puntuación independientemente de la versión elegida, aunque su familiaridad con el vocabulario específico puede afectar marginalmente el desempeño.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="border-2 border-accent-blue rounded-xl p-6">
                  <h3 className="text-xl font-bold text-accent-blue mb-4">Linguaskill General</h3>
                  <p className="text-zinc-600 mb-4">Contextos cotidianos y académicos</p>
                  <p className="text-zinc-600 text-sm mb-4">
                    Los textos de Reading abordan temas como educación, tecnología y sociedad, viajes y turismo, medio ambiente y sostenibilidad, salud y bienestar, cultura y entretenimiento, ciencia divulgativa o desarrollo personal. Los audios de Listening presentan conversaciones en universidades, tiendas, restaurantes, oficinas de información turística o situaciones domésticas. Las tareas de Writing solicitan ensayos sobre cuestiones sociales o cartas informales a amigos. El módulo Speaking incluye preguntas sobre hobbies, experiencias de viaje, planes de estudios o opiniones sobre temas generales como las redes sociales o la vida en ciudades versus pueblos.
                  </p>
                  <ul className="text-zinc-600 space-y-2 text-sm">
                    <li>• Educación, tecnología, viajes</li>
                    <li>• Medio ambiente, salud, cultura</li>
                    <li>• Ensayos sobre temas sociales</li>
                    <li>• Ideal para universitarios</li>
                  </ul>
                </div>
                <div className="border-2 border-green-500 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-600 mb-4">Linguaskill Business</h3>
                  <p className="text-zinc-600 mb-4">Contextos laborales y empresariales</p>
                  <p className="text-zinc-600 text-sm mb-4">
                    Los textos de Reading incluyen informes empresariales, análisis de mercado, correspondencia comercial entre empresas, políticas corporativas, memorandums internos o artículos sobre gestión y liderazgo. Los audios presentan conversaciones telefónicas con clientes, presentaciones de productos en reuniones, negociaciones comerciales, entrevistas de trabajo o discusiones sobre estrategia empresarial. Las tareas de Writing requieren redactar emails formales a colegas o clientes y elaborar informes empresariales analizando datos de ventas, proponiendo soluciones a problemas organizacionales o comparando opciones de inversión.
                  </p>
                  <ul className="text-zinc-600 space-y-2 text-sm">
                    <li>• Informes empresariales, análisis</li>
                    <li>• Negociaciones, reuniones</li>
                    <li>• Emails formales a clientes</li>
                    <li>• Ideal para profesionales</li>
                  </ul>
                </div>

              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La elección correcta depende fundamentalmente de tus objetivos específicos de certificación. Estudiantes universitarios que necesitan cumplir requisitos de graduación en grados no relacionados con empresa o comercio (ingeniería, medicina, ciencias, humanidades, educación) deben optar por Linguaskill General, ya que su contenido resulta más relevante y el vocabulario menos especializado facilitará la comprensión. Profesionales que trabajan en entornos corporativos internacionales, buscan posiciones en multinacionales, necesitan certificación para ascensos en empresas o cursan MBA y programas de posgrado en negocios deben presentar Linguaskill Business para demostrar dominio del registro profesional específico que utilizarán diariamente.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Vocabulario diferenciador entre versiones</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El vocabulario específico constituye la diferencia más tangible entre ambas versiones. En <strong>Linguaskill General</strong> encontrarás términos como <em>scholarship</em> (beca académica), <em>deadline</em> (fecha límite de entrega), <em>curriculum</em> (plan de estudios), <em>accommodation</em> (alojamiento), <em>sustainable</em> (sostenible), <em>renewable energy</em> (energía renovable), <em>entertainment</em> (entretenimiento), <em>exhibition</em> (exposición cultural) o <em>prescription</em> (receta médica). En <strong>Linguaskill Business</strong> predomina léxico como <em>stakeholder</em> (parte interesada), <em>turnover</em> (facturación o rotación de personal), <em>supply chain</em> (cadena de suministro), <em>market share</em> (cuota de mercado), <em>profit margin</em> (margen de beneficio), <em>subsidiary</em> (filial), <em>merger</em> (fusión empresarial), <em>quarterly report</em> (informe trimestral) o <em>cost-effective</em> (rentable económicamente).
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Sin embargo, es fundamental comprender que el vocabulario especializado representa solo un componente menor de la evaluación total. Los criterios principales siguen siendo competencia gramatical, rango de estructuras sintácticas, pronunciación y entonación en Speaking, organización textual y cohesión en Writing, y comprensión de ideas principales versus detalles específicos en Reading y Listening. Un candidato con nivel C1 real pero familiaridad limitada con terminología empresarial específica puede obtener puntuaciones ligeramente inferiores en Linguaskill Business comparado con General (diferencia típica de 5-8 puntos en la escala Cambridge), pero su nivel fundamental de inglés permanece idéntico. La preparación mediante exposición a textos y audios del dominio correspondiente durante 2-3 semanas previas elimina prácticamente esta desventaja.
              </p>
            </section>

            {/* Section 6: Criterios de evaluación */}
            <section id="criterios-evaluacion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-accent-blue" />
                Criterios de evaluación y sistema de puntuación
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El sistema de puntuación de Linguaskill combina calificación automática mediante algoritmos de inteligencia artificial para los módulos Reading, Listening y parcialmente Writing, con evaluación humana realizada por examinadores certificados de Cambridge para el módulo Speaking y las respuestas extendidas de Writing. Esta aproximación híbrida garantiza objetividad y consistencia en tareas de respuesta cerrada (opción múltiple, gap-fill) mientras mantiene la necesidad insustituible de juicio humano experto para evaluar producción lingüística creativa donde no existe una única respuesta correcta. Todos los examinadores humanos completan formación estandarizada rigurosa y calibración periódica para garantizar aplicación consistente de los criterios de evaluación Cambridge en todas las convocatorias.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para el módulo <strong>Reading & Listening</strong>, el algoritmo asigna automáticamente puntos basándose en respuestas correctas e incorrectas, con el sistema adaptativo calculando simultáneamente el nivel de competencia demostrado. No existe penalización por respuestas incorrectas, eliminando estrategias de dejar preguntas en blanco; tu mejor opción siempre consiste en proporcionar una respuesta incluso si debes adivinar.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Escala de puntuación Cambridge</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zinc-400">82-99</div>
                    <div className="text-zinc-500">No alcanza B1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">100-119</div>
                    <div className="text-zinc-400">B1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">120-139</div>
                    <div className="text-zinc-400">B2</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">140-159</div>
                    <div className="text-zinc-400">C1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">160-180</div>
                    <div className="text-zinc-400">C2</div>
                  </div>

                </div>
                <p className="text-zinc-400 text-sm mt-4">La mayoría de universidades españolas requieren mínimo 140 puntos (inicio de C1) para graduación, mientras que requisitos empresariales varían típicamente entre 120-140 (B2 consolidado).</p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Criterios del módulo Writing</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo <strong>Writing</strong> se evalúa mediante cuatro criterios independientes ponderados equitativamente:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-zinc-50 p-4 rounded-lg text-center">
                  <div className="font-bold text-zinc-900">Content</div>
                  <div className="text-zinc-500 text-sm">Contenido</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-lg text-center">
                  <div className="font-bold text-zinc-900">Organization</div>
                  <div className="text-zinc-500 text-sm">Organización</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-lg text-center">
                  <div className="font-bold text-zinc-900">Language</div>
                  <div className="text-zinc-500 text-sm">Gramática/Vocabulario</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-lg text-center">
                  <div className="font-bold text-zinc-900">Spelling</div>
                  <div className="text-zinc-500 text-sm">Ortografía/Puntuación</div>
                </div>

              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los examinadores asignan puntuaciones en cada criterio de 0-5 puntos según descriptores detallados por nivel. Para <strong>Content</strong>, evalúan si tu respuesta cubre todos los puntos requeridos en las instrucciones, desarrolla ideas con suficiente detalle y especificidad, y resulta apropiada para el propósito comunicativo (email informal versus informe formal). Un error común consiste en ignorar uno de los puntos solicitados; por ejemplo, si la tarea pide "explain, describe, and recommend", debes incluir explícitamente los tres elementos para obtener puntuación completa en contenido.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Organization</strong> evalúa la estructura lógica de tu texto: ¿Utilizas párrafos claramente diferenciados? ¿Incluyes introducción y conclusión apropiadas? ¿Empleas conectores variados (however, furthermore, in addition, consequently) para enlazar ideas? ¿La progresión de información resulta coherente y fácil de seguir? Los textos desorganizados que presentan ideas en orden aleatorio, cambian de tema abruptamente sin transiciones o consisten en un único párrafo largo penalizan severamente este criterio. La estructura recomendada para la tarea extendida incluye: introducción (reformular cuestión + presentar estructura), 2-3 párrafos de desarrollo (un punto principal por párrafo), y conclusión (sintetizar perspectiva personal).
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Criterios específicos para Speaking</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo <strong>Speaking</strong> aplica cuatro criterios fundamentales: <strong>Grammar & Vocabulary</strong> (rango y precisión gramatical y léxica), <strong>Discourse Management</strong> (organización del discurso y coherencia), <strong>Pronunciation</strong> (pronunciación, acento léxico y entonación) e <strong>Interactive Communication</strong> (capacidad de desarrollar temas con detalle apropiado).
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para <strong>Grammar & Vocabulary</strong>, los examinadores evalúan la variedad de estructuras que utilizas (presente simple, presente continuo, pasados, perfectos, condicionales, pasivas, relativas) y si las empleas correctamente. Un candidato B2 utiliza estructuras complejas ocasionalmente con algunos errores que no impiden comprensión; un candidato C1 emplea consistentemente estructuras sofisticadas con errores mínimos únicamente en construcciones muy avanzadas.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Discourse Management</strong> se refiere a tu habilidad para organizar respuestas extensas coherentemente, desarrollar ideas con suficiente elaboración, usar marcadores del discurso apropiados (first of all, in addition, for example, to sum up) y mantener fluidez sin pausas excesivas o autocorrecciones constantes. Los candidatos que responden con frases telegráficas mínimas sin desarrollo ("Yes. I like tennis. It's fun.") penalizan este criterio severamente. Respuestas efectivas desarrollan cada idea: "Yes, I really enjoy tennis because it's both physically challenging and socially engaging. I've been playing regularly at my local club for about three years now, which has helped me improve my technique significantly while also making great friends who share my passion for the sport."
              </p>

              <p className="text-zinc-600 leading-relaxed">
                <strong>Pronunciation</strong> no requiere acento británico o americano perfecto; evalúa si tu pronunciación resulta generalmente comprensible para hablantes internacionales de inglés. Los criterios incluyen: pronunciación correcta de fonemas individuales (especialmente sonidos inexistentes en español como /θ/, /ð/, /v/, /ʃ/, /dʒ/), acento léxico apropiado en palabras polisílabas (phoTOgraphy no PHOtography), ritmo adecuado con reducción de palabras funcionales ('can' pronunciado /kən/ no /kæn/ en frases afirmativas), y entonación natural que refleja el significado (ascendente en preguntas yes/no, descendente en afirmaciones). Los examinadores toleran acentos regionales pero penalizan problemas sistemáticos que dificultan comprensión o suenan claramente a español transferido.
              </p>
            </section>

            {/* Section 7: Proceso completo */}
            <section id="proceso-completo" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Proceso de registro, realización y obtención de resultados
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El proceso de registro para Linguaskill comienza identificando un centro examinador autorizado por Cambridge en tu región o seleccionando la modalidad online con supervisión remota si prefieres realizar el examen desde casa. En España, centros oficiales como Impulse English en Madrid gestionan inscripciones tanto para convocatorias presenciales en sus instalaciones como para exámenes remotos supervisados mediante tecnología de proctoring. Los precios varían según el centro y la modalidad elegida, pero típicamente oscilan entre 85-95€ para el módulo combinado Reading & Listening, 55-65€ por Writing o Speaking individual, o 170-190€ por la certificación completa de los tres módulos realizados en una misma sesión.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Durante el registro debes proporcionar información personal completa (nombre legal exactamente como aparece en tu documento de identidad, fecha de nacimiento, nacionalidad, dirección email válida) y seleccionar qué módulos deseas presentar. Si optas por la modalidad remota supervisada, recibirás instrucciones técnicas detalladas sobre requisitos de sistema.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">Requisitos técnicos para examen online</h3>
              <ul className="space-y-2 text-zinc-600 mb-8">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  Ordenador Windows 10/11 o macOS con procesador dual-core mínimo
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  4GB RAM mínimo, conexión internet 2 Mbps estable
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  Webcam 720p o superior, micrófono funcional
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  Navegador Chrome o Firefox actualizado
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  Auriculares recomendados para la sección Listening
                </li>
              </ul>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Debes realizar una prueba técnica obligatoria 24-48 horas antes de tu examen programado para verificar que tu equipo cumple todos los requisitos y solucionar cualquier problema técnico preventivamente.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El día del examen online, debes presentarte 15 minutos antes de tu hora programada para completar el proceso de verificación de identidad mediante reconocimiento facial. El sistema captura una fotografía de tu rostro mediante webcam y la compara con la imagen de tu documento de identidad oficial (DNI, NIE o pasaporte vigente), que debes sostener claramente visible frente a la cámara. Una vez verificada tu identidad, recibes un código de entrada único que introduces en la plataforma de examen para acceder a tu sesión. Durante toda la prueba, el sistema de proctoring monitorea continuamente mediante webcam y detección de comportamiento sospechoso, generando alertas automáticas si detecta personas adicionales en la habitación, uso de dispositivos no autorizados, miradas prolongadas fuera de la pantalla o abandono del área visible de la cámara.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Experiencia durante el examen</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Si realizas los tres módulos en una sesión completa, el orden estándar es: Reading & Listening combinado (60-85 minutos), breve descanso opcional de 5 minutos, Writing (45 minutos), otro descanso breve, y finalmente Speaking (15 minutos). Entre cada módulo puedes solicitar pausas para estirarte o beber agua, pero el tiempo de pausa no se añade a tu tiempo de examen. Dentro de cada módulo no existen descansos; debes completar todas las tareas consecutivamente. El sistema muestra claramente el tiempo restante en todo momento, y proporciona advertencias automáticas cuando quedan 10 y 5 minutos en módulos con límite temporal fijo (Writing).
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para el módulo Writing, escribes directamente en un procesador de texto básico integrado en la plataforma de examen que incluye contador de palabras en tiempo real pero NO incluye corrector ortográfico ni gramatical. Puedes copiar, cortar y pegar texto dentro del editor, pero no puedes acceder a ningún recurso externo. Esta ausencia deliberada de herramientas de corrección evalúa tu competencia real sin asistencia tecnológica. Los candidatos deben desarrollar hábitos de revisión manual efectivos: dejar 5 minutos finales para releer cada tarea, verificar concordancia sujeto-verbo, revisar ortografía de palabras frecuentemente problemáticas (their/there/they're, definitely no definately, separate no seperate), y confirmar que has cubierto todos los puntos requeridos en las instrucciones.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Recepción de resultados y certificado</h3>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-green-800 mb-2">Recepción de resultados</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• <strong>Reading & Listening:</strong> Resultados inmediatos al finalizar (puntuación provisional, puede ajustarse ±2 puntos en 24h)</li>
                  <li>• <strong>Writing y Speaking:</strong> Máximo 48 horas laborables mediante email</li>
                  <li>• Certificado digital oficial disponible sin caducidad en Cambridge English Results Online</li>
                </ul>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El informe oficial de resultados incluye múltiples elementos informativos: tu puntuación numérica en la escala Cambridge (82-180) para cada módulo presentado, el nivel MCER certificado correspondiente (B1, B2, C1 o C2), un gráfico visual comparativo de tu desempeño en diferentes áreas evaluadas, y retroalimentación descriptiva sobre tus fortalezas y áreas de mejora. Este nivel de detalle resulta particularmente valioso para candidatos que necesitan preparación adicional, permitiéndote identificar específicamente si tus debilidades se concentran en gramática, vocabulario, pronunciación u organización textual. Las empresas y universidades que solicitan tu certificado acceden directamente a este informe completo mediante código de verificación único proporcionado por Cambridge, garantizando autenticidad y previniendo falsificaciones.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                El certificado digital oficial se genera automáticamente y permanece accesible indefinidamente en tu cuenta Cambridge English Results Online, desde donde puedes descargarlo en formato PDF o compartir el enlace de verificación directamente con instituciones receptoras. A diferencia de certificaciones tradicionales que envían documentos físicos impresos por correo postal (con riesgo de pérdida o deterioro), Linguaskill elimina completamente el papel manteniendo disponibilidad permanente digital. Cambridge no establece fecha de caducidad oficial para sus certificados, aunque muchas universidades y empresas pueden implementar políticas internas requiriendo certificaciones de antigüedad máxima (típicamente 2 años) para garantizar que tu nivel de inglés permanece actual.
              </p>
            </section>

            {/* Section 8: Estrategias de preparación */}
            <section id="estrategias-preparacion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Estrategias de preparación y recursos oficiales
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La preparación efectiva para Linguaskill requiere un enfoque estratégico que combine familiarización con los formatos específicos del examen, desarrollo de competencia lingüística general mediante práctica integrada de las cuatro destrezas, y refinamiento de técnicas específicas para maximizar tu desempeño dentro de las restricciones temporales y estructurales de cada módulo. A diferencia de exámenes de conocimientos factuales que pueden superarse mediante memorización intensiva semanas antes, las certificaciones de lengua evalúan competencia comunicativa acumulada durante años de aprendizaje; por tanto, la preparación ideal debe comenzar meses antes de tu fecha de examen programada mediante exposición regular al inglés auténtico complementada con práctica intensiva de formatos específicos durante las 4-6 semanas finales.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cambridge Assessment English proporciona recursos oficiales gratuitos esenciales en su sitio web específico de Linguaskill, incluyendo documentación completa sobre estructura del examen, ejemplos de tareas para cada módulo con respuestas modelo comentadas, videos demostrativos del módulo Speaking mostrando candidatos reales de diferentes niveles con retroalimentación de examinadores explicando las puntuaciones asignadas, y guías PDF descargables con consejos de preparación organizados por nivel de competencia actual (B1, B2, C1). Estos materiales deben constituir tu punto de partida obligatorio antes de invertir en recursos comerciales adicionales, ya que proporcionan la información más precisa y actualizada directamente de la organización que diseña y califica el examen.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para práctica más extensa, Cambridge ofrece el <strong>Linguaskill Practice Pack</strong> mediante pago en su plataforma oficial (aproximadamente 75-85€), conteniendo tests completos de práctica con las mismas interfaces informáticas que encontrarás en el examen real, incluyendo módulos adaptativos completos de Reading & Listening, tareas de Writing con ejemplos de respuestas en diferentes niveles, y simulaciones de Speaking con retroalimentación automatizada sobre pronunciación y fluidez. La ventaja principal de estos materiales oficiales radica en su autenticidad garantizada: todas las tareas provienen del mismo banco de ítems utilizado para exámenes reales, asegurando dificultad y formato idénticos. Completar al menos dos tests oficiales completos bajo condiciones simuladas de examen real (cronometrando estrictamente, sin diccionarios ni pausas) constituye preparación mínima indispensable.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Estrategias específicas por módulo</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6">
                  <h4 className="font-bold text-accent-blue mb-3">Para Reading & Listening</h4>
                  <ul className="text-zinc-600 space-y-2 text-sm">
                    <li>• Enfócate en comprensión de ideas principales antes de preocuparte por vocabulario desconocido específico</li>
                    <li>• Desarrolla el hábito de subrayar mentalmente palabras clave (nombres propios, números, fechas, conectores lógicos)</li>
                    <li>• Elimina primero opciones claramente incorrectas antes de elegir entre las restantes</li>
                    <li>• Desconfía de opciones que repiten literalmente palabras del texto (frecuentemente son distractores)</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-700 mb-3">Para Writing</h4>
                  <ul className="text-zinc-600 space-y-2 text-sm">
                    <li>• Invierte 5 minutos iniciales en planificación antes de escribir</li>
                    <li>• Anota brevemente las ideas principales, decide estructura de párrafos</li>
                    <li>• Verifica meticulosamente que cubres los tres puntos solicitados en las instrucciones</li>
                    <li>• Desarrolla cada punto principal en un párrafo separado con 3-4 oraciones</li>
                    <li>• Deja 5 minutos finales para revisión</li>
                  </ul>
                </div>

              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-purple-700 mb-3">Para Speaking</h4>
                <p className="text-zinc-600 text-sm mb-4">
                  Supera la tentación de memorizar respuestas preparadas genéricas que suenan artificiales e impiden demostrar tu verdadera competencia interactiva. Los examinadores detectan fácilmente respuestas memorizadas y penalizan severamente porque el criterio Interactive Communication evalúa específicamente tu habilidad para generar lenguaje espontáneo apropiado al contexto específico.
                </p>
                <p className="text-zinc-600 text-sm mb-4">
                  En cambio, prepara "bancos de lenguaje" flexible: listas de vocabulario temático (educación, trabajo, tecnología, viajes), estructuras gramaticales complejas que dominas (although, if I were/if I had been, having done/having been done), y conectores sofisticados que insertarás naturalmente.
                </p>
                <p className="text-zinc-600 text-sm">
                  Durante la presentación extendida de un minuto, adopta una estructura mental simple: introducción (10 segundos presentando el tema), desarrollo con 2-3 puntos principales (40 segundos total), y conclusión breve (10 segundos). Esto garantiza organización coherente sin necesidad de notas escritas.
                </p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Preparación con Impulse English Academy</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Como Centro Oficial de Preparación de Cambridge en Madrid, Impulse English ofrece cursos especializados de preparación Linguaskill que combinan el desarrollo de competencia lingüística integral mediante el Impulse Method™ basado en principios científicos de repetición espaciada y práctica comunicativa, con familiarización específica de formatos y técnicas de examen durante las últimas 4-6 semanas de preparación. Nuestros profesores certificados CELTA con experiencia como examinadores oficiales de Cambridge proporcionan retroalimentación personalizada sobre simulaciones de Writing y Speaking, identificando precisamente las áreas donde necesitas mejora y proporcionando corrección específica de errores recurrentes que limitan tu puntuación.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Los cursos de preparación incluyen acceso completo a materiales oficiales Cambridge, tests de diagnóstico inicial para establecer tu nivel de partida y objetivos realistas de puntuación, práctica guiada de todos los tipos de tareas bajo condiciones cronometradas, sesiones de Speaking individual con feedback detallado grabado, y simulacros completos de examen con corrección y análisis de resultados. Nuestro historial del 100% de aprobados en convocatorias Cambridge 2024-25 refleja la efectividad de nuestra metodología estructurada que equilibra desarrollo de competencia real con preparación estratégica específica del examen.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                Preguntas Frecuentes sobre el Examen Linguaskill
              </h2>
              <div className="space-y-6">
                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cuánto tiempo dura el examen Linguaskill completo con los tres módulos?</h3>
                  <p className="text-zinc-600">
                    El examen completo de Linguaskill con los tres módulos requiere aproximadamente 2 horas y 30 minutos de tiempo efectivo de evaluación, distribuidos de la siguiente manera: el módulo combinado Reading & Listening es adaptativo y varía entre 60 y 85 minutos según tu nivel y la velocidad con que el algoritmo determina tu competencia precisa; el módulo Writing tiene duración fija de 45 minutos para completar las dos tareas requeridas; y el módulo Speaking dura aproximadamente 15 minutos incluyendo la sección de calentamiento inicial. A este tiempo debes añadir 15 minutos previos para verificación de identidad mediante reconocimiento facial y registro en el sistema, además de breves descansos opcionales de 5 minutos entre módulos si decides tomarlos. Por tanto, planifica bloquear aproximadamente 3 horas completas en tu agenda cuando te inscribas para los tres módulos en una sola sesión.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cuál es el costo del examen Linguaskill en España durante 2026?</h3>
                  <p className="text-zinc-600">
                    Los precios de Linguaskill en España varían ligeramente según el centro examinador autorizado que selecciones y la modalidad (presencial en centro o remoto supervisado desde casa), pero los rangos típicos en 2026 oscilan entre 85-95€ para el módulo combinado Reading & Listening, 55-65€ para Writing o Speaking presentados individualmente, y 170-190€ si te inscribes para la certificación completa de los tres módulos realizados en una misma sesión. Algunos centros ofrecen descuentos por volumen para grupos de 5 o más candidatos de la misma organización, y descuentos para estudiantes que han completado cursos de preparación en el mismo centro.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cómo es el módulo de Speaking en Linguaskill exactamente?</h3>
                  <p className="text-zinc-600">
                    El módulo de Speaking de Linguaskill se realiza completamente mediante ordenador sin examinador presente físicamente, grabándose todas tus respuestas orales mediante micrófono para evaluación posterior por examinadores certificados de Cambridge. La prueba dura aproximadamente 15 minutos y progresa a través de cinco secciones con dificultad creciente: primero una entrevista personal automatizada con 8 preguntas sobre tu vida cotidiana, trabajo y hobbies donde respondes brevemente en 10-15 segundos por pregunta; segunda, lectura en voz alta de 8 frases desconectadas para evaluar pronunciación y entonación; tercera, una presentación extendida de un minuto completo sobre un tema proporcionado con 40 segundos de preparación mental previa; cuarta, descripción de una fotografía o gráfico durante un minuto sin preparación previa; y finalmente dos preguntas de profundización relacionadas con el tema de tu presentación anterior que requieren respuestas desarrolladas de 30-40 segundos cada una.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Qué niveles de inglés evalúa el examen Linguaskill?</h3>
                  <p className="text-zinc-600">
                    Linguaskill evalúa y certifica niveles de competencia lingüística desde A1 hasta C1+ según el Marco Común Europeo de Referencia para las Lenguas (MCER). La puntuación se reporta en una escala que va de 82 a 180+ puntos, con rangos específicos correspondientes a cada nivel: 82-99 (A1), 100-119 (A2), 120-139 (B1), 140-159 (B2), 160-179 (C1), y 180+ (C1 o superior). Cada módulo recibe puntuación independiente y los resultados se entregan en un máximo de 48 horas.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Es posible hacer Linguaskill desde casa con supervisión remota?</h3>
                  <p className="text-zinc-600">
                    Sí, Linguaskill ofrece la modalidad de examen completamente online realizable desde tu propio domicilio con supervisión remota mediante tecnología avanzada de proctoring automático que garantiza la misma seguridad e integridad que las convocatorias presenciales en centros examinadores físicos. Para realizar el examen desde casa necesitas cumplir requisitos técnicos específicos: ordenador con sistema operativo Windows 10/11 o macOS reciente, procesador dual-core mínimo y 4GB de RAM, conexión estable a internet de al menos 2 Mbps de velocidad de subida y bajada, navegador Chrome o Firefox actualizado, webcam de resolución 720p o superior que capture claramente tu rostro, micrófono funcional integrado o externo, y auriculares recomendados para la sección de Listening.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cuándo salen los resultados del examen Linguaskill?</h3>
                  <p className="text-zinc-600">
                    Los resultados de Linguaskill se proporcionan en plazos diferentes según el módulo específico evaluado: para el módulo combinado Reading & Listening obtienes tu puntuación provisional inmediatamente al finalizar el examen apareciendo en pantalla tu resultado en la escala Cambridge (82-180 puntos) y el nivel MCER correspondiente, aunque esta puntuación puede ajustarse marginalmente (±2 puntos) después de revisiones de calidad técnica en las siguientes 24 horas. Para los módulos Writing y Speaking que requieren evaluación humana por examinadores certificados de Cambridge, recibes tus resultados dentro de un plazo máximo de 48 horas laborables mediante email notificación que te invita a acceder a tu informe oficial completo en la plataforma Cambridge English Results Online.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cuál es la diferencia principal entre Linguaskill y otros exámenes como IELTS?</h3>
                  <p className="text-zinc-600">
                    Las diferencias fundamentales entre Linguaskill e IELTS incluyen formato de entrega, velocidad de resultados, estructura de evaluación y propósito principal de uso. Linguaskill es un examen 100% computerizado que puede realizarse online desde casa o en centros autorizados, mientras que IELTS requiere asistencia física a centros examinadores específicos con fechas de convocatoria fijas mensuales. Linguaskill proporciona resultados en máximo 48 horas versus 13 días de IELTS, y permite selección modular de destrezas específicas mientras IELTS obliga a presentar las cuatro destrezas completas en todos los casos. La estructura de Linguaskill es adaptativa con preguntas ajustándose a tu nivel en tiempo real, mientras IELTS utiliza formatos fijos con el mismo conjunto de preguntas para todos los candidatos del mismo nivel.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Qué empresas y universidades reconocen oficialmente el certificado Linguaskill?</h3>
                  <p className="text-zinc-600">
                    Más de 4.000 organizaciones internacionales reconocen Linguaskill como certificación válida de competencia lingüística en inglés en 2026, incluyendo universidades, empresas multinacionales, instituciones gubernamentales y organizaciones profesionales en más de 50 países. En España, la Conferencia de Rectores de Universidades Españolas (CRUE) valida oficialmente Linguaskill para requisitos de graduación universitaria, acceso a programas de máster y doctorado, y acreditación de profesorado, lo que significa que todas las universidades públicas y privadas miembros de CRUE aceptan estos certificados con las equivalencias MCER establecidas. A nivel empresarial, corporaciones como Siemens, Telefónica, BBVA, Iberdrola, Deloitte, KPMG, PwC, Accenture y numerosas empresas tecnológicas multinacionales utilizan Linguaskill para evaluar competencia lingüística.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cómo prepararse efectivamente para Linguaskill en 4-6 semanas?</h3>
                  <p className="text-zinc-600">
                    La preparación efectiva para Linguaskill en 4-6 semanas debe combinar tres componentes esenciales: familiarización exhaustiva con todos los formatos de tareas mediante materiales oficiales Cambridge, práctica intensiva cronometrada bajo condiciones simuladas de examen real, y refinamiento específico de debilidades identificadas mediante retroalimentación experta. Comienza descargando toda la documentación oficial gratuita del sitio web de Linguaskill Cambridge incluyendo guías de candidato, ejemplos de tareas con respuestas modelo, y videos demostrativos del módulo Speaking. Durante las semanas 2-4, invierte diariamente 60-90 minutos en práctica estructurada: alterna días enfocándote en destrezas específicas (Lunes Reading, Martes Listening, Miércoles Writing, Jueves Speaking, Viernes simulacro completo cronometrado). Las últimas dos semanas concéntrate en simulacros completos bajo condiciones idénticas al examen real.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cuántos intentos se permiten en Linguaskill y hay período de espera entre convocatorias?</h3>
                  <p className="text-zinc-600">
                    Linguaskill no impone limitaciones en el número de intentos que puedes realizar ni establece períodos de espera obligatorios entre convocatorias, permitiéndote teóricamente presentar el examen con la frecuencia que desees y puedas inscribirte según disponibilidad de fechas en tu centro examinador. Sin embargo, Cambridge y centros examinadores recomiendan pragmáticamente no repetir el examen inmediatamente después de un resultado insatisfactorio sin período intermedio de preparación adicional enfocada, ya que tu nivel de competencia lingüística real no mejora significativamente en días o semanas; necesitas típicamente 2-3 meses de estudio estructurado y exposición intensiva al inglés para progresar un subnivel completo. La función "My Best Score" permite además combinar tus mejores puntuaciones de diferentes módulos obtenidas en intentos separados.
                  </p>
                </div>

              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Conclusión
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill representa la evolución necesaria de la certificación lingüística hacia modelos que priorizan accesibilidad, velocidad y flexibilidad sin comprometer el rigor académico y reconocimiento internacional que respalda la marca Cambridge Assessment English. La combinación de evaluación adaptativa mediante algoritmos avanzados, modalidad online con supervisión remota, resultados en máximo 48 horas y estructura modular que permite certificar únicamente las destrezas requeridas posiciona este examen como la solución óptima para profesionales y estudiantes del siglo XXI que necesitan acreditación confiable sin los largos plazos y restricciones geográficas de formatos tradicionales. Las más de 4.000 organizaciones que reconocen Linguaskill globalmente, incluyendo la totalidad de universidades españolas mediante validación CRUE, garantizan que tu certificación abrirá puertas académicas y profesionales independientemente de tu sector o destino geográfico.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Tu éxito en Linguaskill depende fundamentalmente de tres factores: comprensión profunda de la estructura específica del examen y criterios de evaluación utilizados por algoritmos y examinadores humanos, preparación estratégica mediante materiales oficiales Cambridge complementados con retroalimentación experta que identifique y corrija debilidades específicas antes de la convocatoria, y gestión inteligente del tiempo durante el examen priorizando completar todas las tareas sobre perfeccionar respuestas individuales. Los candidatos que invierten 4-6 semanas en preparación estructurada combinando desarrollo de competencia general mediante exposición auténtica al inglés con práctica intensiva de formatos específicos bajo condiciones cronometradas consistentemente superan sus objetivos de puntuación y obtienen las certificaciones B2, C1 o C2 requeridas por sus universidades o empleadores.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Si estás listo para certificar tu nivel de inglés con la rapidez y flexibilidad que mereces, contacta con Impulse English para información sobre nuestros cursos especializados de preparación Linguaskill. Como Centro Oficial de Preparación Cambridge con índice del 100% de aprobados en convocatorias 2024-25, proporcionamos la experiencia experta, materiales oficiales completos y retroalimentación personalizada que maximizarán tu puntuación y te permitirán alcanzar tus objetivos académicos y profesionales. Tu futuro internacional comienza con la certificación adecuada: comienza tu preparación hoy y demuestra tu competencia real en inglés ante el mundo.
              </p>
            </section>

          </div>


        </div>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-6xl">
            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-accent-blue to-blue-700 rounded-2xl p-8 md:p-12 mb-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Sabemos dónde estás. Sabemos dónde necesitas llegar.
              </h2>
              <p className="text-white/90 text-lg mb-4">
                El inglés que necesitas para tu carrera no es un sueño lejano. Es una meta alcanzable con el método correcto, el apoyo adecuado y la determinación de dar el paso. En Impulse English, entendemos la brecha entre tu nivel actual y el certificado que abrirá esas puertas profesionales que llevas esperando.
              </p>
              <p className="text-white/90 text-lg">
                <strong>Te llevaremos desde donde estás hasta donde necesitas estar.</strong> Te motivaremos cuando flaquees, celebraremos cada progreso contigo, y no pararemos hasta que tengas tu certificado Linguaskill en la mano. Confía en Impulse English para tu transformación.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                  Tu éxito es nuestra misión
                </h2>
                <p className="text-zinc-600 mb-6">
                  Como Centro Oficial de Preparación Cambridge con <strong>100% de aprobados</strong> en 2024-25, nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-blue-600 hover:underline font-medium">academia en Barrio del Pilar</Link> tiene la experiencia y el compromiso para llevarte al nivel que tu carrera exige. Ofrecemos <Link to="/cursos-ingles/particulares" className="text-blue-600 hover:underline font-medium">clases particulares</Link> especializadas en <Link to="/linguaskill" className="text-blue-600 hover:underline font-medium">Linguaskill</Link> y otros <Link to="/examenes-cambridge" className="text-blue-600 hover:underline font-medium">exámenes Cambridge</Link>, <Link to="/academia-ingles-la-vaguada" className="text-blue-600 hover:underline font-medium">junto a La Vaguada</Link>. No eres solo un alumno más: eres alguien con metas reales que merece resultados reales.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Diagnóstico inicial para conocer tu punto de partida exacto
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Plan personalizado adaptado a tu objetivo y plazo
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Profesores que te conocen y te acompañan en cada paso
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Simulacros reales hasta que estés listo para aprobar
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/34604910611?text=Hola,%20me%20interesa%20prepararme%20para%20Linguaskill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                  <Link
                    to="/linguaskill"
                    className="bg-accent-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Ver curso Linguaskill
                  </Link>
                </div>

              </div>
              <div>
                <LeadForm
                  title="Da el primer paso hoy"
                  subtitle="Te contactamos en menos de 24h"
                  ctaText="Quiero empezar"
                  source="blog-linguaskill-guia"
                  showPhone={true}
                  showAge={false}
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
            <p className="text-zinc-600 mb-8">Consulta la información oficial de Cambridge Assessment English para más detalles sobre Linguaskill:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/linguaskill/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">Linguaskill Oficial</h3>
                  <p className="text-zinc-500 text-sm mt-1">Información oficial del examen</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/linguaskill/information-about-the-test/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">Estructura del Test</h3>
                  <p className="text-zinc-500 text-sm mt-1">Detalles de cada módulo</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/linguaskill/preparation/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-accent-blue transition-colors">Preparación Oficial</h3>
                  <p className="text-zinc-500 text-sm mt-1">Materiales y recursos Cambridge</p>
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

          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/linguaskill/precios-fechas" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Linguaskill</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Precios, Sedes y Servicios de Linguaskill 2026
                  </h3>
                </div>
              </Link>
              <Link to="/examenes-cambridge" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Cambridge</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Guía Completa de Exámenes Cambridge 2026
                  </h3>
                </div>
              </Link>
              <Link to="/examenes-cambridge/fechas-precios" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Calendario</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Fechas Exámenes Cambridge 2026
                  </h3>
                </div>
              </Link>
              <Link to="/academias-ingles-madrid/adultos" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Cursos Adultos</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Cursos de Inglés para Adultos en Madrid
                  </h3>
                </div>
              </Link>
              <Link to="/academias-ingles-madrid/certificaciones" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Certificaciones</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Certificaciones de Inglés en Madrid
                  </h3>
                </div>
              </Link>
              <Link to="/cursos-ingles/adultos" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Nuestros Cursos</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Cursos de Inglés para Adultos - Impulse
                  </h3>
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
