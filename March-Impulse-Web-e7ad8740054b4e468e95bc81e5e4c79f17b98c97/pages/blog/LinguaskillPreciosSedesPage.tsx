import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, CheckCircle, Euro, MapPin, FileText, Award, MessageCircle, ChevronRight, Building2, Globe, Users } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

const preciosFaqs = [
  {
    question: "¿Cuánto dura el examen Linguaskill?",
    answer: "El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular."
  },
  {
    question: "¿Se puede suspender Linguaskill?",
    answer: "Linguaskill no se puede suspender ni aprobar; es un examen adaptativo que certifica el nivel real de inglés del candidato, desde A1 hasta C1/C2, ajustando las preguntas según sus respuestas. Esto permite una evaluación precisa y justa basada en competencias, sin calificaciones tradicionales de aprobado o suspenso."
  },
  {
    question: "¿Linguaskill es reconocido internacionalmente?",
    answer: "Linguaskill de Cambridge es un examen multinivel, 100 % online y reconocido internacionalmente por más de 25,000 instituciones, universidades y empresas. Alineado con el MCER, certifica niveles de inglés desde A1 hasta C2, siendo válido para admisiones académicas, oposiciones y procesos laborales en 2025."
  },
  {
    question: "¿Cuántas veces puedo hacer Linguaskill?",
    answer: "Linguaskill puede realizarse múltiples veces sin límite, permitiendo repetir módulos individuales (Reading, Listening, Writing y Speaking) para mejorar la puntuación sin hacer el examen completo. Esta flexibilidad, junto con resultados en 48 horas, facilita certificaciones adaptadas a objetivos académicos y profesionales."
  },
  {
    question: "¿Linguaskill General o Business?",
    answer: "Linguaskill General evalúa inglés para contextos cotidianos, académicos y sociales, ideal para estudiantes y procesos migratorios. Linguaskill Business se centra en inglés profesional en entornos laborales, destacando comunicación empresarial. Ambos miden niveles A1-C2 según el MCER y ofrecen resultados rápidos y fiables."
  },
  {
    question: "¿Qué puntuación es B2 en Linguaskill?",
    answer: "La puntuación que define el nivel B2 en Linguaskill de Cambridge abarca entre 140 y 159 puntos. Este nivel 'Independent User' acredita habilidades sólidas para comunicarse y comprender textos complejos, siendo fundamental para acceso académico y profesional, con certificación online, modular y adaptativa en 2026."
  }
];

const tableOfContents = [
  { id: 'que-es-linguaskill', title: '¿Qué es Linguaskill y por qué es la certificación más demandada en 2026?' },
  { id: 'estructura-modalidades', title: 'Estructura y modalidades del examen: General vs Business' },
  { id: 'precios-completos', title: 'Precios completos de Linguaskill en España: módulos y paquetes' },
  { id: 'sedes-autorizadas', title: 'Sedes autorizadas y modalidades de realización del examen' },
  { id: 'certificacion-validez', title: 'Cómo funciona la certificación y validez internacional' },
  { id: 'servicios-preparacion', title: 'Servicios y materiales oficiales de preparación disponibles' },
  { id: 'proceso-inscripcion', title: 'Proceso de inscripción, requisitos técnicos y plazos' },
  { id: 'comparativa-recomendaciones', title: 'Comparativa con otros certificados Cambridge y recomendaciones' },
];

export const articleSchema = generateArticleSchema({
    headline: "Linguaskill Precios y Sedes 2026: Guía Completa",
    description: "Precios actualizados de Linguaskill en España, sedes oficiales y modalidades disponibles. Tarifas para estudiantes y público general.",
    url: `${businessInfo.url}/linguaskill/linguaskill-precios-sedes`,
    datePublished: "2025-01-11"
  });

export default function LinguaskillPreciosSedesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/facilities/technology-based-classroom-photo.jpg" alt="Aula tecnológica preparación Linguaskill Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Linguaskill Precios y Sedes' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Linguaskill
              </span>
              <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Actualizado 2026
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Linguaskill 2026: Guía Completa de Precios, Sedes y Servicios para Certificar tu Inglés
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Descubre los precios exactos, sedes disponibles y servicios de Linguaskill en 2026. Guía definitiva con toda la información para certificar tu inglés.
            </p>
          </div>
        </div>
      </header>

      <article>
        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
              alt="Precios y sedes Linguaskill"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-green-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* FAQ Section - HIGH UP before main content */}
        <FAQSection faqs={preciosFaqs} title="Preguntas Frecuentes sobre Precios de Linguaskill" />

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                ¿Necesitas certificar tu nivel de inglés para la universidad, un ascenso profesional o estudiar en el extranjero pero no sabes cuánto cuesta Linguaskill ni dónde realizarlo? En 2026, esta certificación de Cambridge English se ha consolidado como la opción más flexible y tecnológicamente avanzada del mercado, pero la variedad de precios, modalidades y sedes puede resultar confusa para quien busca información clara y completa.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Esta guía definitiva reúne toda la información actualizada sobre precios, sedes físicas y online, modalidades de examen, servicios de preparación y opciones de certificación que ofrece Linguaskill en España y otros países de habla hispana. Linguaskill evalúa tus competencias en inglés mediante tecnología adaptativa e inteligencia artificial, proporcionando resultados precisos alineados con el Marco Común Europeo de Referencia para las Lenguas (CEFR) en un tiempo récord de 48 horas.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                A lo largo de este artículo descubrirás no solo cuánto cuesta cada módulo del examen y las diferentes tarifas según tu situación académica o profesional, sino también cómo elegir entre Linguaskill General y Business, qué incluye cada certificado, dónde encontrar sedes autorizadas y cómo prepararte eficazmente para maximizar tu puntuación. Centros como Impulse English Academy en Madrid ofrecen preparación especializada con tasas de aprobación del 100% en exámenes Cambridge durante 2024-2026.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Tanto si eres estudiante universitario buscando cumplir requisitos de graduación, profesional que necesita acreditar competencias lingüísticas o empresa que requiere evaluar el nivel de sus empleados, aquí encontrarás las respuestas detalladas que necesitas para tomar una decisión informada sobre tu certificación Linguaskill. Exploraremos las diferencias de precio entre comunidades autónomas, las ventajas de la modalidad online versus presencial, los materiales oficiales de preparación disponibles y las mejores prácticas para obtener la puntuación que necesitas en tu primer intento.
              </p>
            </section>

            {/* Section 1: ¿Qué es Linguaskill? */}
            <section id="que-es-linguaskill" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-green-600" />
                ¿Qué es Linguaskill y por qué es la certificación más demandada en 2026?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Linguaskill</a> es el examen de inglés online desarrollado por Cambridge English que utiliza inteligencia artificial y tecnología adaptativa para evaluar las competencias lingüísticas de candidatos desde el nivel A1 hasta C2 del CEFR. A diferencia de los exámenes tradicionales con fechas fijas y formatos rígidos, Linguaskill ofrece flexibilidad total: puedes elegir qué habilidades evaluar (comprensión lectora, auditiva, expresión escrita u oral), realizar el examen desde casa o en un centro autorizado, y recibir tus resultados certificados en un plazo de 48 horas. Esta combinación de rapidez, precisión y flexibilidad ha convertido a Linguaskill en la certificación preferida por más de 5.000 instituciones educativas y empresas en todo el mundo durante 2024-2026.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La verdadera innovación de Linguaskill radica en su sistema adaptativo: el algoritmo ajusta la dificultad de las preguntas en tiempo real según tus respuestas, proporcionando una evaluación más precisa de tu nivel real en menos tiempo que los exámenes tradicionales. Mientras un examen Cambridge clásico puede durar entre 3 y 4 horas, Linguaskill completo se realiza en aproximadamente 1 hora y 45 minutos. La Conferencia de Rectores de Universidades Españolas (CRUE) reconoce oficialmente Linguaskill como certificación válida para acreditar niveles de inglés en programas de grado, posgrado y movilidad internacional, lo que explica su creciente adopción en el ámbito académico español.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El sistema de evaluación híbrido combina corrección automatizada mediante inteligencia artificial para las secciones de Reading & Listening y Writing, con evaluadores humanos certificados que revisan las respuestas de expresión oral. Esta doble capa de validación garantiza resultados objetivos y consistentes. Según datos oficiales de Cambridge English, la fiabilidad de Linguaskill alcanza un coeficiente de 0.95 en la escala de consistencia interna, comparable a los exámenes presenciales tradicionales pero con una eficiencia temporal muy superior.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">5.000+</div>
                  <div className="text-white/80">Instituciones lo reconocen</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">72%</div>
                  <div className="text-white/80">Universidades españolas lo aceptan</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">45%</div>
                  <div className="text-white/80">Candidatos eligen módulos individuales</div>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">¿Para quién está diseñado Linguaskill y en qué contextos se utiliza?</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill atiende tres perfiles principales de usuarios: estudiantes universitarios que necesitan certificar nivel B1 o B2 para graduarse, profesionales que buscan acreditar competencias para promociones o cambios de empleo, y empresas que requieren evaluar el nivel de inglés de candidatos o empleados actuales. En el contexto académico español, el 72% de las universidades públicas aceptan Linguaskill como certificación válida para requisitos de idiomas según datos de 2024. En el ámbito corporativo, empresas multinacionales como Telefónica, BBVA o Inditex utilizan Linguaskill Business para procesos de selección y desarrollo profesional.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La modularidad del examen permite adaptarse a necesidades específicas: si solo necesitas certificar comprensión lectora y auditiva para requisitos universitarios, puedes realizar únicamente el módulo Reading & Listening por 60-70 euros en lugar del examen completo. Esta flexibilidad resulta especialmente valiosa para estudiantes con presupuestos limitados o profesionales que ya dominan ciertas habilidades y solo necesitan demostrar competencia en áreas específicas. Los centros autorizados reportan que el 45% de los candidatos eligen módulos individuales en lugar del paquete completo.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Linguaskill también se ha convertido en herramienta diagnóstica para academias de idiomas y departamentos de recursos humanos que necesitan evaluar niveles de forma rápida y fiable antes de diseñar programas de formación personalizados. A diferencia de las pruebas de nivel internas, Linguaskill proporciona certificación oficial reconocida internacionalmente, lo que añade valor tanto para el candidato como para la organización evaluadora.
              </p>
            </section>

            {/* Section 2: Estructura y modalidades */}
            <section id="estructura-modalidades" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-green-600" />
                Estructura y modalidades del examen: General vs Business
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill ofrece dos versiones diferenciadas según el contexto de uso: Linguaskill General evalúa inglés cotidiano y académico, mientras Linguaskill Business se centra en inglés profesional y corporativo. Ambas versiones comparten la misma estructura modular de tres partes: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15 minutos), pero difieren significativamente en el tipo de contenidos, vocabulario y situaciones que presentan. La elección entre una u otra versión depende exclusivamente del propósito de tu certificación: si buscas acreditar nivel para universidad o contextos generales, elige General; si necesitas demostrar competencias para entornos empresariales, opta por Business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="border-2 border-green-500 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-600 mb-4">Linguaskill General</h3>
                  <p className="text-zinc-600 mb-4">Para contextos académicos y cotidianos</p>
                  <p className="text-zinc-600 text-sm mb-4">
                    Los textos de Reading abordan temas como educación, viajes, tecnología, vida cotidiana y planes futuros. Las tareas de Writing pueden pedir describir experiencias personales o expresar opiniones sobre temas de actualidad. El Speaking incluye preguntas sobre hobbies, experiencias de viaje o preferencias personales.
                  </p>
                  <ul className="text-zinc-600 space-y-2 text-sm">
                    <li>• Educación, viajes, tecnología</li>
                    <li>• Experiencias personales</li>
                    <li>• Temas de actualidad</li>
                    <li>• Ideal para universitarios</li>
                  </ul>
                </div>
                <div className="border-2 border-blue-500 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Linguaskill Business</h3>
                  <p className="text-zinc-600 mb-4">Para contextos profesionales y corporativos</p>
                  <p className="text-zinc-600 text-sm mb-4">
                    Los textos incluyen emails profesionales, informes, presentaciones y correspondencia empresarial. Las tareas de Writing solicitan propuestas comerciales, responder comunicaciones profesionales o analizar datos empresariales. El Speaking incluye preguntas sobre experiencia laboral y situaciones de trabajo.
                  </p>
                  <ul className="text-zinc-600 space-y-2 text-sm">
                    <li>• Informes empresariales</li>
                    <li>• Correspondencia comercial</li>
                    <li>• Negociaciones y presentaciones</li>
                    <li>• Ideal para profesionales</li>
                  </ul>
                </div>

              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La sección de Speaking sigue un formato idéntico en ambas versiones: responder preguntas sobre ti mismo, describir situaciones presentadas visualmente, y participar en simulaciones de conversaciones. Sin embargo, los temas y vocabulario varían: General te pedirá hablar sobre hobbies, experiencias de viaje o preferencias personales, mientras Business incluirá preguntas sobre experiencia laboral, habilidades profesionales o situaciones de trabajo. Ambas versiones utilizan el mismo sistema de puntuación Cambridge Scale (82-180 puntos) y se alinean con los mismos niveles CEFR, por lo que no existe diferencia de dificultad objetiva, solo de contexto.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Formato adaptativo y duración exacta de cada módulo</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo Reading & Listening combina 6-7 ejercicios de comprensión lectora y 6-7 de comprensión auditiva en una única sesión continua de 60-85 minutos. La duración varía porque el sistema adaptativo añade o reduce preguntas según tu nivel de respuestas: si aciertas consistentemente, recibirás preguntas más difíciles para confirmar un nivel alto; si fallas varias seguidas, el algoritmo ajustará a la baja la dificultad para identificar con precisión tu nivel real. Este proceso dinámico significa que dos candidatos nunca realizan exactamente el mismo examen, lo que aumenta la seguridad y reduce posibilidades de fraude.
              </p>

              <div className="space-y-6 my-8">
                <div className="border border-zinc-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">R&L</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Reading & Listening</h4>
                      <p className="text-zinc-500 text-sm">60-85 minutos | Adaptativo</p>
                    </div>

                  </div>
                  <p className="text-zinc-600 text-sm">
                    6-7 ejercicios de comprensión lectora y 6-7 de comprensión auditiva. Duración variable según tu rendimiento.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">W</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Writing</h4>
                      <p className="text-zinc-500 text-sm">45 minutos | Duración fija</p>
                    </div>

                  </div>
                  <p className="text-zinc-600 text-sm">
                    Dos tareas: email de 50 palabras (8 min) y texto argumentativo de 180+ palabras (37 min). La IA evalúa gramática, vocabulario, coherencia y organización.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">S</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Speaking</h4>
                      <p className="text-zinc-500 text-sm">15 minutos | Grabado</p>
                    </div>

                  </div>
                  <p className="text-zinc-600 text-sm">
                    5 partes: entrevista personal, lectura en voz alta, descripción de imagen, respuesta a pregunta sobre un tema, y expresión de opinión. Todo grabado para evaluación posterior.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 3: Precios completos */}
            <section id="precios-completos" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Euro className="w-8 h-8 text-green-600" />
                Precios completos de Linguaskill en España: módulos y paquetes
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El precio estándar de Linguaskill en España para 2026 varía según el centro examinador y la modalidad elegida, oscilando entre 120-150 euros para el examen completo de tres módulos. Sin embargo, existe una estructura de precios diferenciada que permite ahorros significativos: estudiantes de universidades públicas españolas pueden acceder a tarifas reducidas de 120 euros bajo el programa "University Project" (UP), mientras que candidatos independientes o de instituciones privadas pagan generalmente 130-135 euros por el paquete completo en centros autorizados de Madrid, Barcelona o Valencia. Los módulos individuales pueden contratarse por separado: Reading & Listening cuesta aproximadamente 60-70 euros, Writing entre 55-65 euros, y Speaking entre 60-70 euros según el centro.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4 text-xl">Precios orientativos Linguaskill 2026</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">120-150€</div>
                    <div className="text-zinc-300">Examen completo (3 módulos)</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">60-70€</div>
                    <div className="text-zinc-300">Reading & Listening</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">55-65€</div>
                    <div className="text-zinc-300">Writing</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-amber-400">60-70€</div>
                    <div className="text-zinc-300">Speaking</div>
                  </div>

                </div>
                <p className="text-zinc-400 text-sm mt-4">*Precios orientativos. Consulta con tu centro examinador para tarifas exactas.</p>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La diferencia de precios entre comunidades autónomas responde a políticas comerciales de los centros autorizados, que establecen tarifas dentro de rangos permitidos por Cambridge English. En ciudades con mayor competencia entre centros examinadores como Madrid (donde operan más de 15 sedes autorizadas), los precios tienden a ser más competitivos. Por ejemplo, algunos centros ofrecen el paquete completo por 125 euros durante promociones específicas, mientras que en provincias con un único centro autorizado el precio estándar alcanza los 145 euros. Esta variación no afecta la validez del certificado: todos los centros autorizados emiten certificaciones oficiales idénticas reconocidas internacionalmente.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-amber-800 mb-2">Importante: política de repetición</h4>
                <p className="text-amber-700">
                  El precio incluye únicamente UNA oportunidad de examen por módulo. Si necesitas repetir cualquier sección para mejorar tu puntuación, deberás pagar nuevamente el precio completo de ese módulo. Cambridge no ofrece descuentos por repetición, aunque algunos centros aplican tarifas reducidas del 10-15% para candidatos que repiten dentro de los 6 meses posteriores al primer intento.
                </p>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Comparativa de precios: Linguaskill vs otros certificados Cambridge</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cuando comparamos el coste de Linguaskill con otros exámenes Cambridge, la diferencia resulta significativa: un examen B2 First cuesta 215 euros en España (2026), mientras que C1 Advanced alcanza los 235 euros y C2 Proficiency los 250 euros. Linguaskill por 130 euros evalúa todos los niveles desde A1 hasta C2 en una única prueba adaptativa, proporcionando un informe detallado de tu nivel real en cada habilidad. Esta diferencia de precio de 85-120 euros explica por qué muchas universidades españolas han adoptado Linguaskill como requisito de graduación en lugar de exigir certificados específicos de nivel que resultan más costosos para los estudiantes.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="py-3 px-4 font-bold text-zinc-900">Examen</th>
                      <th className="py-3 px-4 font-bold text-zinc-900">Precio 2026</th>
                      <th className="py-3 px-4 font-bold text-zinc-900">Niveles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-100 bg-green-50">
                      <td className="py-3 px-4 font-medium">Linguaskill</td>
                      <td className="py-3 px-4 text-green-600 font-bold">120-150€</td>
                      <td className="py-3 px-4">A1 a C2 (adaptativo)</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-3 px-4">B2 First</td>
                      <td className="py-3 px-4">215€</td>
                      <td className="py-3 px-4">Solo B2</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-3 px-4">C1 Advanced</td>
                      <td className="py-3 px-4">235€</td>
                      <td className="py-3 px-4">Solo C1</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">C2 Proficiency</td>
                      <td className="py-3 px-4">250€</td>
                      <td className="py-3 px-4">Solo C2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La relación coste-beneficio mejora aún más si solo necesitas certificar habilidades específicas. Por ejemplo, numerosas universidades españolas aceptan únicamente el módulo Reading & Listening (60-70 euros) como prueba de nivel B2 para graduación, representando un ahorro de 145-155 euros respecto a un B2 First completo. Esta modularidad convierte a Linguaskill en la opción más económica cuando tus requisitos son flexibles. Sin embargo, es importante verificar exactamente qué acepta tu institución: algunas exigen el examen completo de cuatro habilidades, mientras otras permiten combinaciones específicas de dos o tres módulos.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Los costes adicionales potenciales incluyen materiales de preparación: el libro oficial Linguaskill Trainer cuesta 29.95 euros en versión impresa o 24.95 euros en formato digital, los cursos online oficiales de Cambridge rondan los 49-79 euros dependiendo de la duración, y las clases presenciales de preparación en academias especializadas varían entre 150-400 euros según la intensidad y duración del programa. Sumar estos costes al precio del examen es crucial para presupuestar correctamente: una preparación completa incluyendo materiales y curso puede alcanzar los 250-350 euros totales, cifra comparable al precio de un examen tradicional pero con la ventaja de flexibilidad y rapidez en resultados.
              </p>
            </section>

            {/* Section 4: Sedes autorizadas */}
            <section id="sedes-autorizadas" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-green-600" />
                Sedes autorizadas y modalidades de realización del examen
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill puede realizarse en dos modalidades principales: presencial en centros autorizados con supervisión humana, u online desde cualquier ubicación con monitorización mediante inteligencia artificial y supervisión remota. La modalidad presencial está disponible en más de 50 sedes autorizadas distribuidas por toda España, incluyendo centros en todas las capitales de provincia y principales ciudades universitarias. Estas sedes son academias de idiomas, universidades o centros de formación que han obtenido la autorización oficial de Cambridge English tras cumplir estrictos requisitos técnicos y de seguridad. En Madrid, por ejemplo, Impulse English Academy (Av. de El Ferrol, 22) es centro autorizado que ofrece tanto preparación como realización del examen en sus instalaciones.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-green-800 mb-4">Distribución de sedes en España</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-green-700">Andalucía</p>
                    <p className="text-green-600">Sevilla, Málaga, Granada, Córdoba, Cádiz, Almería, Jaén, Huelva</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Cataluña</p>
                    <p className="text-green-600">Barcelona, Tarragona, Girona, Lleida</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Comunidad Valenciana</p>
                    <p className="text-green-600">Valencia, Alicante, Castellón</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Galicia</p>
                    <p className="text-green-600">A Coruña, Vigo, Santiago, Pontevedra</p>
                  </div>

                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La modalidad online supervisada se ha expandido significativamente desde 2023, permitiendo realizar el examen completo desde casa, oficina o cualquier ubicación con conexión estable a internet. Esta opción requiere un ordenador con cámara web, micrófono funcional, navegador actualizado (Chrome recomendado), y velocidad mínima de conexión de 2 Mbps. Durante el examen, un sistema de inteligencia artificial monitoriza continuamente tu imagen y audio para detectar comportamientos irregulares, mientras supervisores humanos revisan grabaciones posteriormente para verificar la integridad del proceso. Esta modalidad online mantiene exactamente los mismos precios que la presencial (120-135 euros) y emite certificados idénticos con validez internacional equivalente.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Proceso de reserva de fecha y selección de sede</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para reservar tu examen Linguaskill presencial, debes contactar directamente con el centro autorizado de tu elección (listado completo disponible en la web oficial de Cambridge English España), verificar disponibilidad de fechas en su calendario específico, y completar el proceso de inscripción según sus procedimientos particulares. Cada centro gestiona independientemente sus inscripciones, plazos y métodos de pago, lo que significa que los procesos varían ligeramente: algunos permiten inscripción online con pago por transferencia o tarjeta, mientras otros requieren presencia física para formalizar la matrícula. El plazo mínimo de inscripción suele ser 7-10 días antes de la fecha del examen para garantizar procesamiento administrativo adecuado.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La flexibilidad de Linguaskill permite programar fechas con apenas una semana de antelación en la mayoría de centros, contrastando fuertemente con exámenes tradicionales Cambridge que requieren inscripción con 6-8 semanas de anticipación. Esta rapidez resulta especialmente valiosa para estudiantes que descubren requisitos de certificación cercanos a plazos de graduación, o profesionales con oportunidades laborales urgentes. Algunos centros ofrecen incluso convocatorias diarias bajo demanda si reúnen grupos mínimos de 3-5 candidatos, aunque esto depende de la capacidad y políticas específicas de cada sede.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                La selección de modalidad online se realiza a través de plataformas específicas de centros autorizados que ofrecen este servicio (no todos los centros presenciales disponen de opción online). El proceso incluye una prueba técnica previa obligatoria de 10-15 minutos para verificar compatibilidad de tu equipo, conexión estable y correcto funcionamiento de cámara y micrófono. Esta prueba debe completarse con al menos 48 horas de antelación a tu fecha programada. Si tu equipo no cumple requisitos mínimos durante la prueba técnica, deberás resolverlo o cambiar a modalidad presencial sin posibilidad de reembolso del precio pagado, por lo que verificar especificaciones técnicas antes de inscribirte resulta crucial.
              </p>
            </section>

            {/* Section 5: Certificación y validez */}
            <section id="certificacion-validez" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-green-600" />
                Cómo funciona la certificación y validez internacional
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El certificado Linguaskill es un documento digital oficial emitido por Cambridge English que presenta tu puntuación detallada en cada módulo realizado, tu nivel CEFR correspondiente (de A1 a C2, o "Below A1" si no alcanzas nivel básico), y una descripción de tus capacidades lingüísticas en cada área evaluada. A diferencia de certificados tradicionales que indican "aprobado" o "suspenso" en un nivel específico, Linguaskill proporciona diagnóstico completo de tu nivel real: puedes obtener B2 en Reading & Listening, B1 en Writing y C1 en Speaking en un mismo examen, reflejando con precisión tus fortalezas y áreas de mejora. Esta granularidad informativa resulta especialmente valiosa para instituciones que requieren niveles mínimos en habilidades específicas en lugar de un nivel global uniforme.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Escala de puntuación Cambridge English Scale</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">82-99</div>
                    <div className="text-zinc-400">A1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">100-119</div>
                    <div className="text-zinc-400">A2</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">120-139</div>
                    <div className="text-zinc-400">B1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-lime-400">140-159</div>
                    <div className="text-zinc-400">B2</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">160-179</div>
                    <div className="text-zinc-400">C1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">180+</div>
                    <div className="text-zinc-400">C1+</div>
                  </div>

                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los certificados Linguaskill tienen validez oficial ilimitada técnicamente, aunque la convención internacional establece que las certificaciones de idiomas reflejan competencias en un momento específico y muchas instituciones requieren certificados con antigüedad máxima de 2 años. Cambridge English no establece fecha de caducidad en los certificados Linguaskill, pero universidades, empresas y programas de movilidad internacional suelen aplicar sus propias políticas de vigencia. Consultar requisitos específicos de la institución destinataria resulta esencial antes de presentarte al examen: si tu universidad acepta certificados con hasta 3 años de antigüedad, podrías utilizar un Linguaskill antiguo, pero si un programa Erasmus exige máximo 1 año, necesitarás certificación reciente.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Reconocimiento oficial y aceptación institucional en España</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La Conferencia de Rectores de Universidades Españolas (CRUE) reconoce oficialmente Linguaskill desde 2019, lo que significa que las 50 universidades públicas españolas pueden aceptarlo como acreditación válida para requisitos de idiomas en programas de grado, posgrado y doctorado. Según datos de 2024, el 72% de estas instituciones ya incluyen Linguaskill en sus listados de certificaciones aceptadas, con especial prevalencia en universidades politécnicas y de ciencias sociales. Sin embargo, los requisitos específicos varían: algunas universidades aceptan cualquier puntuación B2 (140+ puntos), mientras otras exigen mínimos diferenciados por habilidad (por ejemplo, "mínimo B2 en Reading & Listening y mínimo B1 en Writing y Speaking").
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                En el ámbito corporativo español, empresas del IBEX 35 como Telefónica, Santander, BBVA, Inditex o Iberdrola utilizan Linguaskill Business como herramienta de evaluación en procesos de selección y programas de desarrollo profesional. La versión Business proporciona información precisa sobre capacidades comunicativas en contextos profesionales específicos, permitiendo decisiones de contratación o promoción basadas en datos objetivos alineados con estándares internacionales. Aproximadamente el 35% de ofertas laborales que requieren nivel de inglés en España durante 2024 mencionaron explícitamente Linguaskill como certificación aceptada, según análisis de portales de empleo.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                La validez internacional de Linguaskill se extiende a más de 40 países donde instituciones educativas, gobiernos y empresas reconocen las certificaciones Cambridge English. Países como Reino Unido, Canadá, Australia, Nueva Zelanda e Irlanda aceptan Linguaskill para procesos de inmigración cualificada, aunque normalmente requieren puntuaciones específicas: por ejemplo, el sistema de inmigración canadiense acepta Linguaskill con equivalencias específicas a sus niveles CLB (Canadian Language Benchmarks), generalmente requiriendo mínimo B2 en todas las habilidades para categorías de trabajadores cualificados. Verificar requisitos concretos del programa o país de destino resulta imprescindible antes de presentarte al examen.
              </p>
            </section>

            {/* Section 6: Servicios de preparación */}
            <section id="servicios-preparacion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-green-600" />
                Servicios y materiales oficiales de preparación disponibles
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cambridge English ofrece recursos oficiales de preparación para Linguaskill que incluyen materiales gratuitos básicos y productos de pago avanzados. Los recursos gratuitos disponibles en la plataforma oficial incluyen: guías informativas sobre estructura del examen, ejemplos de cada tipo de tarea, criterios de evaluación detallados para módulos productivos (Writing y Speaking), y un test de práctica online simulado de 30 minutos que reproduce el formato adaptativo real. Estos materiales gratuitos proporcionan familiarización básica suficiente para candidatos con nivel de inglés sólido que simplemente necesitan conocer el formato, pero resultan insuficientes para preparación completa si tu nivel actual dista del objetivo deseado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-zinc-50 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-4">Materiales oficiales Cambridge</h4>
                  <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Linguaskill Trainer</strong> - 29.95€ (impreso) / 24.95€ (digital)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>6 tests completos de práctica con respuestas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>60+ horas de práctica estructurada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Audio con diferentes acentos del inglés</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-50 rounded-xl p-6">
                  <h4 className="font-bold text-zinc-900 mb-4">Cursos online Cambridge</h4>
                  <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Linguaskill Preparation Course</strong> - 79€</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>20 horas de contenido interactivo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Ejercicios autocorregibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>2 simulacros completos con feedback</span>
                    </li>
                  </ul>
                </div>

              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Preparación presencial en academias especializadas</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las academias de idiomas autorizadas como centros examinadores Linguaskill suelen ofrecer cursos presenciales de preparación específica que complementan los materiales oficiales con metodología pedagógica estructurada, práctica conversacional supervisada y feedback personalizado por profesores titulados o certificados. Estos cursos varían en formato: intensivos de 2-3 semanas con 10-15 horas semanales (200-350 euros), extensivos de 2-3 meses con 2-4 horas semanales (250-450 euros), o clases individuales personalizadas con flexibilidad horaria (paquetes de 10 horas desde 250 euros). La ventaja principal de preparación presencial radica en la corrección directa del Speaking por profesores expertos, la única habilidad donde el feedback humano resulta insustituible para mejora efectiva.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Centros como Impulse English Academy en Madrid combinan preparación general de inglés con enfoque específico en Linguaskill durante las últimas 4-6 semanas antes del examen. Su metodología incluye simulacros completos en condiciones reales, análisis de errores recurrentes, técnicas de gestión del tiempo por módulo, y estrategias específicas para maximizar puntuación en el formato adaptativo (por ejemplo, concentrarse en precisión en las primeras preguntas para "anclar" el examen en nivel alto). Los datos de estas academias muestran que candidatos que completan 20+ horas de preparación estructurada obtienen puntuaciones medias 15-20 puntos superiores comparados con quienes se presentan sin preparación específica.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                La preparación online mediante plataformas no oficiales (Preply, iTalki, profesores particulares por videoconferencia) ofrece alternativa más económica (15-30 euros/hora) y flexible, aunque la calidad varía significativamente según la experiencia del profesor con el formato específico de Linguaskill. Al seleccionar tutor online, resulta crucial verificar que conoce detalladamente la estructura del examen, los criterios de evaluación de Cambridge, y las particularidades del sistema adaptativo. Muchos profesores generalistas de inglés nunca han trabajado específicamente con Linguaskill, lo que limita la efectividad de su preparación comparada con especialistas certificados por Cambridge.
              </p>
            </section>

            {/* Section 7: Proceso de inscripción */}
            <section id="proceso-inscripcion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-green-600" />
                Proceso de inscripción, requisitos técnicos y plazos
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El proceso de inscripción para Linguaskill comienza seleccionando el centro autorizado donde realizarás el examen, ya sea buscando en el listado oficial de Cambridge English España o contactando directamente academias de tu localidad que anuncien servicios de examinación Linguaskill. Una vez identificado el centro, debes solicitar información sobre fechas disponibles, modalidades ofrecidas (presencial/online/híbrida), precios exactos, y procedimiento específico de matrícula que ese centro utiliza. La mayoría de centros requieren completar formulario de inscripción (digital o papel) proporcionando datos personales, documento de identidad, fecha de examen deseada, y módulos que pretendes realizar (un módulo, dos, o los tres completos).
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El pago debe realizarse en el momento de formalizar la inscripción o dentro del plazo establecido por el centro (normalmente 2-5 días tras la reserva) mediante transferencia bancaria, tarjeta de crédito/débito, o efectivo presencial según las opciones que ofrezca la sede. El plazo mínimo entre inscripción y realización del examen varía entre 7-14 días en la mayoría de centros, aunque algunos ofrecen convocatorias urgentes con 3-5 días de antelación bajo demanda si hay disponibilidad. Este plazo mínimo permite al centro procesar tu documentación, verificar identidad, y registrarte en el sistema Cambridge English para generar tu acceso personalizado al examen. Inscripciones tardías (menos de 7 días) pueden incurrir en recargos de 10-20 euros adicionales en algunos centros.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Requisitos técnicos para modalidad online</h3>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                <h4 className="font-bold text-blue-800 mb-4">Requisitos técnicos mínimos</h4>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    Ordenador Windows 10+ o MacOS 10.14+ (tablets NO permitidos)
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    Navegador Chrome actualizado
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    Cámara web mínimo 720p
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    Micrófono funcional (auriculares con micro recomendados)
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    Conexión internet estable mínimo 2 Mbps (subida y bajada)
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    Espacio privado, silencioso, bien iluminado
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Políticas de cancelación, reprogramación y ausencias</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las políticas de cancelación y reprogramación varían significativamente entre centros autorizados, no existiendo política unificada de Cambridge English al respecto. La mayoría de centros aplican estas condiciones generales: cancelación con más de 14 días de antelación permite reembolso del 80-100% del precio pagado (algunos centros retienen 10-20 euros por gastos administrativos), cancelación entre 7-14 días antes genera reembolso del 50% o crédito para futura convocatoria, y cancelaciones con menos de 7 días o ausencias sin notificación no permiten reembolso ni reprogramación. Estas políticas deben consultarse específicamente al inscribirte, ya que algunos centros aplican condiciones más flexibles o restrictivas.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                La reprogramación por causa justificada (enfermedad, emergencia familiar, accidente) normalmente requiere documentación oficial acreditativa (certificado médico, documento judicial, etc.) presentada dentro de las 48 horas posteriores a la fecha originalmente programada. En estos casos excepcionales, la mayoría de centros permiten cambio de fecha sin coste adicional o con recargo administrativo mínimo de 10-15 euros. Sin documentación válida, la reprogramación se trata como cancelación tardía con las penalizaciones correspondientes. Resulta fundamental comunicar cualquier contratiempo al centro inmediatamente, no días después, para maximizar opciones de solución favorable.
              </p>
            </section>

            {/* Section 8: Comparativa y recomendaciones */}
            <section id="comparativa-recomendaciones" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-green-600" />
                Comparativa con otros certificados Cambridge y recomendaciones finales
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill se posiciona dentro del portafolio Cambridge English como alternativa moderna y ágil a los exámenes tradicionales (KET, PET, First, Advanced, Proficiency), ofreciendo ventajas competitivas claras en rapidez, coste y flexibilidad, pero también presentando limitaciones en reconocimiento universal y prestigio percibido. Los exámenes tradicionales Cambridge mantienen vigencia de décadas, reconocimiento prácticamente universal en todos los países y contextos, y mayor prestigio reputacional especialmente en niveles altos (C1 Advanced y C2 Proficiency). Sin embargo, Linguaskill supera ampliamente a los tradicionales en rapidez de resultados (48 horas vs 4-6 semanas), flexibilidad de fechas (convocatorias semanales vs 3-4 convocatorias anuales), precio (130 euros vs 215-250 euros), y evaluación multinivel que permite identificar nivel real sin necesidad de pre-seleccionar el examen correspondiente.
              </p>

              <div className="bg-zinc-50 rounded-xl p-6 my-8">
                <h4 className="font-bold text-zinc-900 mb-4">¿Cuándo elegir Linguaskill?</h4>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Tu universidad española acepta explícitamente Linguaskill para graduación
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Tu empresa lo utiliza para evaluación interna o procesos de selección
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Necesitas certificación rápida para proceso con plazos ajustados
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Prefieres la flexibilidad de módulos individuales
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Tu presupuesto es limitado y buscas la mejor relación calidad-precio
                  </li>
                </ul>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La elección entre Linguaskill y un certificado tradicional Cambridge depende fundamentalmente del propósito de tu certificación y los requisitos específicos de la institución destinataria. Si tu universidad española acepta explícitamente Linguaskill para graduación, si tu empresa lo utiliza para evaluación interna, o si necesitas certificación rápida para proceso con plazos ajustados, Linguaskill representa la opción óptima por su relación coste-beneficio-rapidez. Por el contrario, si aspiras a programas de posgrado en universidades anglosajonas prestigiosas (Oxbridge, Ivy League), si solicitas visados de residencia permanente en países exigentes (Australia, Nueva Zelanda), o si trabajas en sectores tradicionales que valoran certificaciones "clásicas", invertir en B2 First, C1 Advanced o C2 Proficiency puede proporcionar mayor garantía de aceptación y mejor percepción de tu competencia lingüística.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4 mt-8">Estrategia recomendada: combinar preparación específica con nivel general sólido</h3>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La estrategia más efectiva para maximizar tu puntuación Linguaskill sin invertir recursos excesivos consiste en alcanzar primero nivel general de inglés sólido (B2 consolidado o C1 inicial mediante clases regulares, consumo de contenido en inglés, práctica conversacional), y luego añadir 15-25 horas de preparación específica para familiarizarte con formato, timing, tipos de tareas y criterios de evaluación durante el mes previo al examen. Presentarte a Linguaskill sin nivel general suficiente, esperando que la preparación específica compense carencias lingüísticas fundamentales, conduce inevitablemente a puntuaciones bajas y frustración: ninguna estrategia de examen sustituye conocimientos reales de vocabulario, gramática y capacidad comunicativa.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para candidatos con nivel intermedio (B1 consolidado, B2 inicial) que necesitan certificar B2 para universidad, un plan realista incluye: 3-6 meses de clases regulares o estudio autodidacta para elevar nivel general (2-4 horas semanales), seguido de 20-30 horas de preparación específica Linguaskill (material oficial + simulacros + corrección Speaking/Writing por profesor), culminando con el examen cuando los tests de práctica indiquen puntuaciones consistentes en rango 140-155 puntos. Precipitar el examen cuando tu nivel real es B1 pensando que "con suerte" alcanzarás B2 resulta en pérdida de 130 euros y necesidad de repetir, duplicando el coste total y retrasando tus objetivos.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                La inversión total recomendada para certificación B2 mediante <a href="/linguaskill/" className="text-green-600 hover:underline font-medium">Linguaskill</a>, partiendo de nivel B1, ronda 400-600 euros incluyendo: preparación general (150-300 euros en <a href="/cursos-ingles/adultos/" className="text-green-600 hover:underline font-medium">cursos de inglés para adultos</a> o materiales durante 3-6 meses), materiales específicos Linguaskill (30-80 euros), preparación específica intensiva opcional con <a href="/cursos-ingles/particulares/" className="text-green-600 hover:underline font-medium">clases particulares</a> (100-200 euros), y precio del examen (130 euros). Comparado con inversión necesaria para <a href="/examenes-cambridge/b2-first/" className="text-green-600 hover:underline font-medium">B2 First</a> tradicional (curso preparación 300-500 euros + examen 215 euros = 515-715 euros totales), Linguaskill ofrece ahorro marginal pero sobre todo ventajas de flexibilidad temporal y rapidez de resultados. La decisión final debe considerar no solo precio sino también requisitos específicos de tu contexto, plazos disponibles, y preferencias personales sobre formato presencial tradicional versus digital adaptativo.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                Preguntas Frecuentes sobre Linguaskill
              </h2>
              <div className="space-y-6">
                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cuánto tiempo tardan en entregarme los resultados de Linguaskill y cómo los recibo?</h3>
                  <p className="text-zinc-600">
                    Los resultados oficiales de Linguaskill se entregan en un plazo de 48 horas laborables tras completar el examen, aunque en la práctica muchos candidatos los reciben en 24-36 horas. Recibes notificación por email cuando tus resultados están disponibles, y puedes descargar tu certificado digital en formato PDF desde la plataforma del centro examinador utilizando tus credenciales de acceso. Este certificado PDF tiene plena validez oficial y puede presentarse directamente a universidades, empresas o cualquier institución que requiera acreditación. Algunos centros también ofrecen certificado impreso en papel oficial Cambridge por un coste adicional de 10-15 euros si lo solicitas expresamente, aunque la versión digital resulta suficiente para prácticamente todos los propósitos y tiene exactamente la misma validez legal y reconocimiento internacional.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Puedo realizar solo algunos módulos de Linguaskill en lugar del examen completo y sigue siendo válido?</h3>
                  <p className="text-zinc-600">
                    Sí, Linguaskill permite seleccionar exactamente qué módulos deseas realizar: puedes presentarte únicamente a Reading & Listening (70 euros aprox), solo Writing (60 euros aprox), solo Speaking (65 euros aprox), o cualquier combinación de dos módulos, además de la opción completa de tres módulos. La validez de tu certificado depende de los requisitos específicos de la institución destinataria: muchas universidades españolas aceptan únicamente Reading & Listening para acreditar nivel B2 de graduación, mientras otras requieren las cuatro habilidades completas. Debes verificar exactamente qué solicita tu universidad, empresa o programa antes de inscribirte. El certificado que recibes refleja exclusivamente los módulos realizados con sus puntuaciones correspondientes, indicando claramente que es una evaluación parcial si no completaste las cuatro habilidades.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Linguaskill General y Linguaskill Business tienen el mismo precio o existen diferencias de coste?</h3>
                  <p className="text-zinc-600">
                    Linguaskill General y Linguaskill Business tienen exactamente el mismo precio en todos los centros autorizados de España: 120-135 euros por el examen completo dependiendo del centro específico y tu condición de estudiante universitario público (descuento UP). La diferencia entre ambas versiones es exclusivamente el contenido y contexto de las tareas (inglés cotidiano/académico en General, inglés corporativo/profesional en Business), pero el formato, duración, sistema de evaluación, validez del certificado y estructura de precios son idénticos. Algunos centros ofrecen únicamente una de las dos versiones, típicamente General en academias orientadas a estudiantes universitarios, y Business en centros que trabajan con clientes corporativos.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Qué puntuación necesito obtener en Linguaskill para certificar nivel B2 o C1 según el CEFR?</h3>
                  <p className="text-zinc-600">
                    Para certificar nivel B2 en Linguaskill necesitas obtener puntuación entre 140 y 159 puntos en cada habilidad que desees acreditar como B2. El nivel C1 corresponde a puntuaciones entre 160 y 179 puntos, mientras que C1+ se alcanza con puntuaciones de 180 o superiores. Es crucial entender que obtienes puntuación separada por cada módulo: puedes lograr B2 en Reading & Listening (148 puntos), B1 en Writing (135 puntos) y C1 en Speaking (165 puntos) en el mismo examen. Si tu universidad requiere "nivel B2", debes verificar si aceptan B2 en algunos módulos con otros más bajos, o si exigen B2 mínimo en todas las habilidades evaluadas.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Cuántas veces puedo repetir Linguaskill si no obtengo la puntuación que necesito?</h3>
                  <p className="text-zinc-600">
                    Puedes repetir Linguaskill tantas veces como necesites sin limitación de intentos, ya que Cambridge English no impone restricciones en este aspecto. Sin embargo, cada intento requiere pagar nuevamente el precio completo del examen o de los módulos específicos que desees repetir. Si obtuviste 155 puntos (B1) en Reading & Listening pero necesitas B2, puedes volver a presentarte únicamente a ese módulo pagando 60-70 euros, manteniendo las puntuaciones obtenidas en Writing y Speaking si realizaste el examen completo previamente. Cambridge no establece período mínimo obligatorio entre intentos, por lo que técnicamente podrías repetir semanalmente, aunque esto resulta contraproducente: tu nivel real de inglés no mejora significativamente en días o pocas semanas. La recomendación profesional es esperar al menos 2-3 meses entre intentos, utilizando ese tiempo para mejorar áreas débiles.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿El certificado Linguaskill caduca o tiene validez indefinida como otros certificados Cambridge?</h3>
                  <p className="text-zinc-600">
                    Los certificados Linguaskill no tienen fecha de caducidad oficial establecida por Cambridge English, al igual que otros certificados Cambridge (First, Advanced, Proficiency). Sin embargo, la convención internacional ampliamente aceptada es que las certificaciones de idiomas reflejan tu nivel en el momento de realizar el examen, y que las competencias lingüísticas pueden deteriorarse sin uso continuado. Por esta razón, la mayoría de universidades, programas de movilidad internacional y procesos de inmigración requieren certificados con antigüedad máxima de 2 años desde la fecha de emisión. Algunas instituciones académicas españolas aceptan certificados con hasta 3 años de antigüedad para requisitos de graduación, mientras que visados de trabajo cualificado en Australia o Canadá exigen certificaciones de máximo 2 años.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Necesito un nivel mínimo de inglés para presentarme a Linguaskill o cualquiera puede hacer el examen?</h3>
                  <p className="text-zinc-600">
                    No existe ningún requisito de nivel mínimo para presentarte a Linguaskill: el examen evalúa desde nivel A1 inicial hasta C2 avanzado mediante su sistema adaptativo, por lo que candidatos de cualquier nivel pueden realizarlo y obtendrán una puntuación precisa de su competencia real. Sin embargo, presentarte con nivel muy básico (A1 o A2) para certificar cuando tu objetivo institucional requiere B2 resulta en pérdida de dinero sin beneficio, ya que simplemente obtendrás certificado confirmando tu nivel bajo actual. La recomendación práctica es presentarte a Linguaskill únicamente cuando tests de práctica oficiales indiquen que tu nivel está a 10-20 puntos de tu objetivo mínimo necesario.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Qué diferencias hay entre realizar Linguaskill presencial en un centro o hacerlo online desde casa?</h3>
                  <p className="text-zinc-600">
                    Las diferencias principales entre modalidad presencial y online de Linguaskill son logísticas y de supervisión, no de contenido o validez del certificado. En modalidad presencial acudes al centro autorizado en la fecha programada, utilizas sus ordenadores y equipamiento, y un supervisor humano te identifica, explica procedimientos y monitorea la sala durante todo el examen garantizando condiciones controladas. En modalidad online realizas el examen desde tu ubicación preferida usando tu propio equipo, completando identificación mediante verificación facial automatizada y carga de documento identidad digital, con supervisión mediante inteligencia artificial. Ambas modalidades cuestan exactamente lo mismo, emiten certificados idénticos con validez internacional equivalente, y presentan mismo nivel de seguridad anti-fraude.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Puedo usar diccionario, apuntes o ayudas externas durante el examen Linguaskill?</h3>
                  <p className="text-zinc-600">
                    No, Linguaskill prohíbe absolutamente cualquier material de apoyo durante el examen: no puedes usar diccionarios físicos o digitales, apuntes, libros de gramática, traductores online, ni cualquier otro recurso externo. El examen evalúa tu competencia real en inglés sin ayudas, por lo que intentar utilizar materiales prohibidos constituye fraude grave que resulta en cancelación inmediata de tu examen sin reembolso y posible prohibición permanente de realizar exámenes Cambridge. La supervisión mediante cámara web detecta movimientos sospechosos como mirar pantallas secundarias, consultar dispositivos móviles, o leer documentos. Puedes usar papel en blanco y bolígrafo exclusivamente para notas rápidas de organización de ideas en Writing y Speaking, pero estos borradores no se evalúan.
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-3">¿Qué pasa si tengo problemas técnicos durante el examen online, pierdo la conexión o falla mi ordenador?</h3>
                  <p className="text-zinc-600">
                    Si experimentas problemas técnicos durante el examen Linguaskill online (pérdida de conexión a internet, fallo del ordenador, cierre inesperado del navegador), el sistema guarda automáticamente tu progreso hasta el último segundo antes del incidente. Al reconectar y reingresar al examen usando tus credenciales, continúas exactamente desde donde quedaste sin perder tiempo ni respuestas previas. Sin embargo, el tiempo del examen no se detiene durante la desconexión: si pierdes 10 minutos resolviendo el problema técnico, esos 10 minutos se descuentan de tu tiempo total disponible. Por esta razón resulta crítico verificar la estabilidad de tu conexión, cerrar todas las aplicaciones innecesarias, y asegurar que tu equipo está completamente cargado o conectado a alimentación eléctrica antes de iniciar.
                  </p>
                </div>

              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Conclusión: Elige Linguaskill si Priorizas Rapidez, Flexibilidad y Coste Optimizado
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill se ha consolidado en 2026 como la certificación de inglés más ágil y accesible del portafolio Cambridge English, ofreciendo evaluación precisa alineada con estándares CEFR internacionales a un precio 40-45% inferior a exámenes tradicionales, con resultados en 48 horas en lugar de 4-6 semanas, y flexibilidad modular que permite certificar exactamente las habilidades que necesitas. Con precios que oscilan entre 60-70 euros por módulo individual o 120-135 euros por el examen completo de cuatro habilidades, tarifas reducidas para estudiantes universitarios públicos, y disponibilidad en más de 50 sedes españolas además de modalidad online supervisada, Linguaskill elimina las barreras tradicionales que dificultaban la certificación lingüística para estudiantes, profesionales y empresas.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-6">
                La clave del éxito con Linguaskill radica en presentarte con nivel general de inglés adecuado (preferiblemente practicando 10-20 puntos por encima de tu objetivo mínimo), familiarizarte específicamente con el formato adaptativo mediante materiales oficiales y simulacros, y verificar exactamente qué módulos y puntuaciones requiere tu institución destinataria antes de inscribirte. Invertir 20-30 horas en preparación específica después de alcanzar nivel general sólido maximiza probabilidades de certificar en primer intento, evitando costes adicionales de repetición y retrasos en tus objetivos académicos o profesionales.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Si tu universidad española acepta Linguaskill para graduación, si tu empresa lo utiliza para evaluación interna, o si necesitas certificación rápida para proceso con deadline ajustado, esta es sin duda tu mejor opción. Para quienes buscan preparación experta que garantice resultados óptimos, academias especializadas como Impulse English Academy en Madrid combinan formación general de calidad con entrenamiento específico en el formato Linguaskill, respaldado por su tasa de aprobación del 100% en exámenes Cambridge. Toma acción ahora: identifica tus requisitos exactos, evalúa tu nivel actual mediante el test de práctica oficial gratuito, y planifica tu preparación para certificar el nivel de inglés que impulse tu futuro académico y profesional.
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
                  Como Centro Oficial de Preparación Cambridge en Madrid, ofrecemos cursos especializados de preparación Linguaskill con <strong>100% de aprobados</strong> en 2024-25.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Centro examinador autorizado
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Preparación + examen en el mismo centro
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Simulacros completos con feedback personalizado
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/34604910611?text=Hola,%20me%20interesa%20información%20sobre%20Linguaskill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                  <a
              href="/linguaskill/"
                    className="bg-accent-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Ver curso Linguaskill
                  </a>
                </div>

              </div>
              <div>
                <LeadForm
                  title="Solicita información"
                  subtitle="Te contactamos en menos de 24h"
                  ctaText="Enviar consulta"
                  source="blog-linguaskill-precios"
                  showPhone={true}
                  showAge={false}
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
              <a href="/linguaskill/" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-green-600 text-sm font-medium">Linguaskill</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-green-600 transition-colors">
                    Guía Completa del Examen Linguaskill 2026
                  </h3>
                </div>
              </a>
              <a href="/examenes-cambridge/" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-accent-blue text-sm font-medium">Cambridge</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-accent-blue transition-colors">
                    Guía Completa de Exámenes Cambridge 2026
                  </h3>
                </div>
              </a>
              <a href="/examenes-cambridge/fechas-precios/" className="group">
                <div className="bg-zinc-50 rounded-xl p-6 hover:bg-zinc-100 transition-colors">
                  <span className="text-purple-600 text-sm font-medium">Calendario</span>
                  <h3 className="font-bold text-zinc-900 mt-2 group-hover:text-purple-600 transition-colors">
                    Fechas Exámenes Cambridge 2026
                  </h3>
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
            href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-600 hover:underline"
          >
            → Más información en Cambridge English - Linguaskill oficial
          </a>
        </div>
      </section>

      <Footer />

</>
  );
}
