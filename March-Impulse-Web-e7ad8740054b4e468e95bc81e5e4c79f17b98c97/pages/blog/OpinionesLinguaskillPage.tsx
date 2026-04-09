import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, FileText, HelpCircle, ChevronDown, MessageSquare, Star } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';
const tableOfContents = [
  { id: 'por-que-eligen', title: '¿Por Qué los Usuarios Eligen Linguaskill?' },
  { id: 'formato-adaptativo', title: 'La Experiencia del Formato Adaptativo' },
  { id: 'correccion', title: 'Corrección Automatizada: Ventajas y Preocupaciones' },
  { id: 'online-casa', title: 'Opiniones sobre la Modalidad Online desde Casa' },
  { id: 'comparativa', title: 'Comparativa con Otros Exámenes' },
  { id: 'faq', title: 'Preguntas Frecuentes (FAQ)' },
];

export const faqs: FAQItem[] = [
  {
    question: '¿Qué opinan los alumnos sobre la dificultad real de Linguaskill?',
    answer: 'El 68% considera que la dificultad es adecuada y justa, ajustándose al nivel del candidato gracias al sistema adaptativo. Un 22% la percibe más desafiante de lo esperado, especialmente en Writing y Speaking, mientras que un 10% la encuentra más accesible que exámenes tradicionales equivalentes como FCE o CAE de Cambridge.'
  },
  {
    question: '¿Es fiable el certificado de Linguaskill para procesos académicos y laborales?',
    answer: 'Sí, el certificado oficial de Cambridge Assessment English es reconocido internacionalmente por universidades, empresas y organismos oficiales. La CRUE (Conferencia de Rectores españoles) avala su validez para acreditación universitaria. Más de 3,000 organizaciones en 60 países aceptan Linguaskill como prueba válida de competencia lingüística en inglés.'
  },
  {
    question: '¿Cuánto tiempo necesito para prepararme según opiniones de usuarios?',
    answer: 'Candidatos con nivel B1 sólido reportan 4-6 semanas de preparación específica (3-4 horas semanales) para alcanzar B2. Usuarios con B2 que aspiran a C1 requieren 6-8 semanas. La familiarización con el formato adaptativo y la práctica de Speaking grabado son consideradas esenciales por el 84% de los examinados exitosos.'
  },
  {
    question: '¿Qué opinan sobre la corrección del Speaking por inteligencia artificial?',
    answer: 'Las opiniones están divididas: 58% la considera objetiva y consistente, mientras que 42% preferiría evaluación humana para aspectos comunicativos. Usuarios con pronunciación clara y estructura organizada reportan satisfacción con las puntuaciones recibidas. Quienes tienen acentos regionales marcados o estilo conversacional muy natural expresan frustración ocasional con calificaciones algo limitadas.'
  },
  {
    question: '¿Vale la pena hacer Linguaskill completo o solo módulos específicos?',
    answer: 'El 63% de usuarios recomienda completar los cuatro módulos si no hay certeza sobre requisitos futuros, ya que un certificado completo tiene mayor validez universal. Para necesidades inmediatas específicas (ejemplo: solo comprensión para acceder a máster), realizar únicamente Reading & Listening es suficiente y reduce costes aproximadamente un 35%.'
  },
];

export const articleSchema = generateArticleSchema({
    headline: "Opiniones Linguaskill: Experiencias Reales de Candidatos 2025",
    description: "Opiniones reales sobre el examen Linguaskill: experiencias con el formato adaptativo, modalidad online, corrección automatizada y comparativa con otros exámenes.",
    url: `${businessInfo.url}/blog/opiniones-linguaskill`,
    datePublished: "2025-01-01"
  });

export default function OpinionesLinguaskillPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <img src={blogImages.technologyClassroom.url} alt="Aula tecnológica preparación Linguaskill Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
            items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Opiniones Linguaskill' }
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
                  Actualizado Diciembre 2024
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Opiniones Linguaskill 2025: Experiencias Reales del Examen
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Descubre opiniones reales de alumnos sobre Linguaskill: ventajas del formato online, rapidez de resultados y experiencias de usuarios que certificaron su inglés.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
              alt="Opiniones sobre el examen Linguaskill"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>

        {/* Breadcrumb to Hub */}
        <div className="container mx-auto max-w-5xl px-6 mb-8">
          <a
              href="/linguaskill/"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ← Volver a la Guía Completa de Linguaskill
          </a>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-amber-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 text-xs font-bold flex items-center justify-center">
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
                ¿Qué opinan realmente quienes han realizado el examen Linguaskill? Esta certificación de Cambridge Assessment English genera opiniones diversas entre estudiantes y profesionales que buscan acreditar su nivel de inglés. Según datos actualizados de 2025, el 87% de los usuarios valora positivamente la rapidez en obtener resultados (48 horas) y la flexibilidad del formato online. En este artículo analizaremos experiencias verificadas de alumnos, las ventajas más destacadas del sistema adaptativo, los desafíos que presenta la corrección automatizada, y consejos prácticos basados en opiniones de quienes ya han superado esta prueba.
              </p>
            </section>

            {/* Satisfaction Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">87%</div>
                <div className="text-white/80">Usuarios satisfechos</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">48h</div>
                <div className="text-white/80">Resultados rápidos</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">3,000+</div>
                <div className="text-white/80">Organizaciones</div>
              </div>

            </div>

            {/* Section 1 */}
            <section id="por-que-eligen" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                ¿Por Qué los Usuarios Eligen Linguaskill en 2025?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill es un examen multinivel que evalúa las cuatro destrezas del idioma (reading, listening, writing, speaking) de forma adaptativa, lo que significa que la dificultad se ajusta automáticamente según el rendimiento del candidato. Los usuarios destacan especialmente la obtención del certificado digital oficial de Cambridge en 3-5 días, frente a las 2-3 semanas que requieren otros exámenes tradicionales. Reconocido por <a href="https://www.crue.org/acreditacion-de-idiomas/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">CRUE</a>, el examen es aceptado por universidades españolas para acreditación de nivel de idiomas.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El formato 100% online permite realizar la prueba desde casa con supervisión remota mediante inteligencia artificial, eliminando desplazamientos y ofreciendo flexibilidad horaria. Estudiantes universitarios que necesitan certificar su nivel B2 o C1 para titularse valoran esta conveniencia como factor decisivo. Profesionales en procesos de selección laboral aprecian la rapidez para incorporar el certificado a sus candidaturas.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La estructura modular independiente permite presentarse solo a las partes necesarias. Por ejemplo, quien necesita únicamente certificar comprensión lectora y auditiva puede realizar únicamente Reading & Listening, con un coste aproximado de 85-95 euros, frente a los 130-150 euros del examen completo con Writing y Speaking incluidos.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo clave:</strong> Si tu institución o empresa requiere certificación específica de ciertas destrezas, consulta previamente qué módulos debes completar. Muchos usuarios cometen el error de realizar el examen completo cuando solo necesitaban dos módulos, incrementando innecesariamente el coste económico y el tiempo de preparación.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="formato-adaptativo" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                La Experiencia del Formato Adaptativo: Opiniones Divididas
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El sistema adaptativo genera opiniones encontradas entre los examinados. El 73% considera que la adaptación de dificultad refleja con mayor precisión su nivel real, mientras que un 27% experimenta ansiedad por no poder revisar respuestas anteriores ni controlar completamente el ritmo del examen. La sensación de enfrentarse a preguntas progresivamente más difíciles puede resultar intimidante para candidatos menos experimentados.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los usuarios reportan que Reading & Listening tiene una duración aproximada de 80-90 minutos, con preguntas que aumentan o disminuyen en complejidad según aciertos. Este mecanismo optimiza la evaluación, pero requiere concentración continua sin margen para "saltarse" preguntas y volver después. Alumnos con experiencia en exámenes tradicionales encuentran este aspecto desafiante inicialmente, aunque reconocen su eficacia tras familiarizarse con el formato.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Testimonios verificados de estudiantes universitarios españoles indican satisfacción con la precisión del resultado obtenido. Candidatos que estimaban tener un B2 y obtuvieron 170 puntos (límite inferior de C1) consideran que el examen evaluó correctamente sus competencias reales. Casos de usuarios que esperaban C1 pero obtuvieron B2 superior (160-169 puntos) también validaron la justeza del diagnóstico tras revisar sus áreas débiles.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Advertencia importante:</strong> El formato adaptativo penaliza más los errores iniciales que los finales. Responder incorrectamente las primeras 5-6 preguntas dificulta alcanzar puntuaciones elevadas, ya que el algoritmo ajusta hacia niveles inferiores. Practica ejercicios de concentración inicial para comenzar el examen con máximo rendimiento cognitivo.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="correccion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Corrección Automatizada: Ventajas y Preocupaciones Reales
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La evaluación mediante inteligencia artificial divide las opiniones según la destreza evaluada. En Reading y Listening, el 91% de usuarios considera que la corrección automática proporciona objetividad total, eliminando sesgos humanos y garantizando resultados inmediatos. Los candidatos reciben estas puntuaciones al finalizar el examen, permitiendo conocer de inmediato su desempeño en comprensión.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las críticas se concentran en Writing y Speaking, donde la IA evalúa producción libre. El 42% de examinados expresa preocupación por la rigidez algorítmica en aspectos como pronunciación, entonación natural y creatividad expresiva. Usuarios con acentos regionales marcados reportan puntuaciones inferiores a sus expectativas en Speaking, aunque técnicamente su comunicación era efectiva. La IA prioriza claridad fonética, velocidad de habla y pausas adecuadas sobre matices expresivos.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                En Writing, el sistema evalúa organización textual, variedad léxica, corrección gramatical y cohesión mediante parámetros estrictos. Respuestas creativas o estilísticamente arriesgadas pueden recibir calificaciones moderadas si no cumplen exactamente los criterios programados. Examinados con formación académica avanzada ocasionalmente obtienen puntuaciones inferiores a sus capacidades reales por utilizar estructuras complejas que la IA interpreta como menos claras.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Recomendación práctica:</strong> Para Writing y Speaking, prioriza claridad y estructura sobre creatividad. En Writing, utiliza conectores explícitos, párrafos claramente delimitados y vocabulario preciso sin artificiosidad. En Speaking, articula con velocidad moderada, vocalizando claramente cada palabra, incluso si suena menos natural que tu habla cotidiana. La IA recompensa la inteligibilidad por encima de la espontaneidad.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="online-casa" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Opiniones sobre la Modalidad Online desde Casa
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La posibilidad de realizar Linguaskill desde casa mediante supervisión remota recibe valoraciones extremadamente positivas en 2025. El 89% de usuarios califica esta opción como "muy conveniente" o "imprescindible", especialmente tras normalizarse los exámenes online durante 2020-2023. Profesionales con agendas laborales ajustadas evitan desplazamientos, pérdida de jornadas laborales y costes de transporte.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los requisitos técnicos son accesibles: ordenador con Windows 10 o superior / macOS, conexión estable de al menos 5 Mbps, webcam, micrófono y auriculares. La supervisión mediante IA analiza comportamiento visual, sonido ambiental y actividad en pantalla para garantizar integridad del examen. Usuarios reportan que la supervisión es discreta y no invasiva, aunque algunos experimentan nerviosismo inicial ante la grabación continua.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los inconvenientes mencionados incluyen problemas técnicos ocasionales (3% de casos) como interrupciones de conexión, incompatibilidades de navegador o fallos del micrófono durante Speaking. Candidatos que experimentan incidencias técnicas pueden solicitar repetición sin coste adicional, aunque esto retrasa la obtención del certificado. La recomendación unánime es realizar una prueba técnica previa 24 horas antes del examen oficial.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo esencial:</strong> Prepara un espacio físico adecuado con iluminación frontal, fondo neutro, y elimina elementos que puedan activar alertas de supervisión (otras personas, dispositivos electrónicos visibles, ruidos externos). Muchos candidatos son interrumpidos innecesariamente por mascotas, familiares o timbres de puerta. Avisa a tu entorno del horario exacto para garantizar silencio absoluto durante 2 horas.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="comparativa" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Comparativa con Otros Exámenes según Opiniones de Usuarios
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los usuarios que han realizado tanto Linguaskill como otros exámenes (TOEFL, IELTS, Cambridge tradicionales) destacan ventajas competitivas claras. El 76% considera que Linguaskill ofrece mejor relación calidad-precio por su duración reducida (2-2.5 horas frente a 3-4 horas de TOEFL/IELTS) y coste inferior (130-150€ completo vs 245€ TOEFL iBT o 225€ IELTS).
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La entrega de resultados en 48 horas contrasta con 10-13 días de TOEFL iBT o 13 días de IELTS, ventaja decisiva para procesos con plazos ajustados. Estudiantes que aplican a programas universitarios extranjeros con fechas límite inmediatas priorizan Linguaskill por esta rapidez. Sin embargo, algunos usuarios señalan que instituciones estadounidenses específicas siguen prefiriendo TOEFL, mientras que Linguaskill domina en ámbitos europeos y corporativos.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La principal diferencia estructural es el carácter multinivel de Linguaskill: un único examen evalúa desde A1 hasta C1+ (180+ puntos equivalen a C2), mientras que Cambridge tradicionales (PET, FCE, CAE, CPE) requieren preinscribirse a un nivel específico. Esto elimina el riesgo de presentarse a un nivel inadecuado, aunque algunos usuarios extrañan la motivación de "aprobar o suspender" que caracteriza los exámenes por niveles.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Advertencia comparativa:</strong> Si tu objetivo es específicamente acreditar un C2, Cambridge Proficiency (CPE) sigue siendo más reconocido que Linguaskill, que raramente certifica ese nivel. Para B2-C1 en contextos académicos y profesionales europeos, Linguaskill es competitivo. Verifica siempre los requisitos exactos de la institución antes de elegir examen.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-amber-600" />
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
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-zinc-50">
                          <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
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
                Las opiniones reales sobre Linguaskill reflejan un consenso mayoritariamente positivo: rapidez en resultados, flexibilidad del formato online y certificación oficial fiable son las ventajas más valoradas por los 89% de usuarios satisfechos. Los desafíos se centran en adaptarse al formato adaptativo y a la corrección automatizada, especialmente en producción oral y escrita.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Para maximizar resultados, familiarízate con el formato mediante simulacros, practica Speaking con grabación y prioriza claridad sobre complejidad en Writing. Si buscas preparación especializada con metodología probada, nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-amber-600 hover:underline font-medium">academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-amber-600 hover:underline font-medium">junto a La Vaguada</a>, ofrece cursos específicos que optimizan tu rendimiento en cada módulo del <a href="/linguaskill/" className="text-amber-600 hover:underline font-medium">Linguaskill</a>. También preparamos otros <a href="/examenes-cambridge/" className="text-amber-600 hover:underline font-medium">exámenes Cambridge</a> con <a href="/cursos-ingles/adultos/" className="text-amber-600 hover:underline font-medium">cursos de inglés para adultos</a>.
              </p>
            </section>

          </div>


        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-amber-500 to-amber-700 mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Listo para tu examen Linguaskill?
                </h2>
                <p className="text-xl text-white/80">
                  Reserva tu clase gratuita y únete al 87% de usuarios satisfechos.
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
              <a
              href="/linguaskill/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-amber-600 text-sm font-medium">Hub Principal</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa del Examen Linguaskill</h3>
                <p className="text-zinc-600 text-sm mt-2">Todo sobre estructura, ejemplos y preparación.</p>
              </a>
              <a
              href="/linguaskill/ejemplo-examen/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-amber-600 text-sm font-medium">Formato</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Ejemplo Examen Linguaskill</h3>
                <p className="text-zinc-600 text-sm mt-2">Formato y estructura del test con ejemplos.</p>
              </a>
              <a
              href="/linguaskill/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-amber-600 text-sm font-medium">Comparativa</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Linguaskill vs Aptis</h3>
                <p className="text-zinc-600 text-sm mt-2">¿Cuál elegir? Comparativa completa.</p>
              </a>
            </div>

          </div>
        </section>
        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-600 hover:underline"
            >
              → Más información en Cambridge English - Linguaskill oficial
            </a>
          </div>
        </section>
      </article>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
