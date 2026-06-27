import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, FileText, Globe, BookOpen, Laptop, MapPin, GraduationCap, CheckCircle, ExternalLink } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
const tableOfContents = [
  { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes' },
  { id: 'donde-aprender', title: 'Dónde Aprender Inglés: Guía Completa' },
  { id: 'mejores-cursos', title: 'Mejores Cursos de Inglés Online' },
  { id: 'plataformas', title: 'Plataformas para Aprender Inglés' },
  { id: 'paises', title: 'Mejores Países para Estudiar Inglés' },
  { id: 'espana', title: 'Aprender Inglés en España' },
];

export const faqs: FAQItem[] = [
  {
    question: "¿Cuánto tiempo se tarda en aprender inglés?",
    answer: "Aprender inglés desde cero hasta nivel B1/B2 requiere entre 600 y 750 horas de estudio guiado, equivalentes a 1-3 años según constancia, método y dedicación. La combinación de estudio diario estructurado, inmersión activa y práctica comunicativa acelera significativamente el progreso."
  },
  {
    question: "¿Por qué no puedo hablar inglés si lo entiendo?",
    answer: "Entender inglés pero no hablarlo se debe a que la comprensión es pasiva y requiere menos esfuerzo neurológico que la producción oral activa. El miedo al error, la falta de práctica speaking regular y la ansiedad social generan bloqueo comunicativo."
  },
  {
    question: "¿Es posible aprender inglés a los 40?",
    answer: "Aprender inglés a los 40 es totalmente posible aprovechando la madurez cognitiva, motivación clara y experiencia previa de aprendizaje. Métodos efectivos incluyen inmersión total, cursos personalizados, práctica activa con nativos y uso de tecnología adaptada al ritmo individual."
  },
  {
    question: "¿Por qué me da vergüenza hablar inglés?",
    answer: "La vergüenza al hablar inglés surge del miedo a equivocarse, al juicio social y de experiencias negativas previas. Superarla aumenta exponencialmente la confianza y el progreso. Practicar en ambientes seguros, con apoyo emocional y aceptando errores como parte natural del aprendizaje facilita avanzar."
  },
  {
    question: "¿Cómo perder el miedo a hablar inglés?",
    answer: "Técnicas efectivas para perder el miedo incluyen practicar en ambientes seguros sin juicio, aceptar errores como aprendizaje, prepararse para situaciones específicas, hablar en voz alta a solas, usar apps de intercambio y mantener constancia en un entorno positivo con feedback constructivo."
  },
  {
    question: "¿Cuántas horas al día estudiar inglés?",
    answer: "Estudiar entre 20 y 60 minutos diarios de forma consistente es más efectivo que largas sesiones esporádicas. Para alcanzar niveles intermedios (B1-B2) se requieren 350-600 horas acumuladas. La regularidad supera a la intensidad para la retención a largo plazo."
  },
  {
    question: "¿Se puede aprender inglés solo con series?",
    answer: "Ver series mejora la comprensión auditiva y el vocabulario coloquial, pero no basta para dominar todas las habilidades comunicativas. Requiere ver con subtítulos en inglés, repetir escenas, anotar expresiones nuevas y complementar con práctica oral activa y estudio de gramática."
  },
  {
    question: "¿Cuántas clases de inglés a la semana?",
    answer: "El número ideal es de 2 a 5 sesiones semanales de 45 a 90 minutos, equilibrando eficiencia, retención y sostenibilidad. Esto debe combinarse con inmersión diaria (series, podcasts, lectura) y estudio autónomo para maximizar resultados."
  },
  {
    question: "¿Por qué no avanzo en inglés?",
    answer: "El estancamiento ocurre por métodos pasivos (solo leer/escuchar), excesiva traducción mental al español, zona de confort y falta de objetivos claros medibles. Avanzar requiere inmersión activa, comunicación real con hablantes nativos y feedback inmediato sobre errores."
  },
  {
    question: "¿Es tarde para aprender inglés a los 50?",
    answer: "Nunca es tarde para aprender inglés a los 50 o más; con métodos adaptados al aprendizaje adulto, dedicación constante y motivación clara, se puede alcanzar fluidez comunicativa. La práctica diaria, inmersión y clases personalizadas son clave para el éxito."
  },
  {
    question: '¿Dónde se recomienda aprender inglés?',
    answer: 'Se recomienda aprender inglés mediante cursos online como Papora (clases ilimitadas, profesores expertos, certificados por niveles), academias presenciales como British Council Madrid, plataformas gratuitas como BBC Learning English, aplicaciones móviles (Duolingo, Babbel), intercambios lingüísticos (Tandem, HelloTalk) e inmersión en países anglófonos. La combinación de métodos digitales y presenciales maximiza resultados según necesidades individuales.'
  },
  {
    question: '¿Cuál es el mejor destino para aprender inglés?',
    answer: 'El mejor destino para aprender inglés combina inmersión lingüística con oportunidades educativas en países anglófonos como Reino Unido (cuna del inglés), Estados Unidos, Canadá, Australia, Irlanda, Nueva Zelanda y Malta. La inmersión obliga al uso del idioma en situaciones cotidianas, acelera el aprendizaje y permite interacciones sociales que mejoran la retención. Se recomienda combinar estancias con clases estructuradas, alojamiento con familias locales e interacción constante con nativos.'
  },
  {
    question: '¿Dónde es mejor para aprender inglés?',
    answer: 'El mejor lugar para aprender inglés combina inmersión en países anglófonos, academias con metodología probada, cursos online e instituciones como British Council Madrid e Impulse English. Las clases presenciales ofrecen interacción directa, mientras los cursos en línea aportan flexibilidad. La inmersión en extranjero acelera el aprendizaje mediante uso cotidiano del idioma en contextos reales.'
  },
  {
    question: '¿Dónde se aprende mejor inglés?',
    answer: 'El inglés se aprende mejor mediante inmersión lingüística en países anglófonos, plataformas online como Papora, instituciones como British Council Madrid e Impulse English, intercambios en Tandem/HelloTalk, aplicaciones (Duolingo, Babbel) y recursos gratuitos (BBC Learning English, Cambridge). La combinación de clases presenciales, cursos online flexibles y práctica con nativos maximiza resultados según objetivos individuales.'
  },
  {
    question: '¿Cuál es el mejor país del mundo para aprender inglés?',
    answer: 'El mejor país para aprender inglés combina inmersión lingüística total con calidad educativa: Reino Unido (cuna del inglés británico), Estados Unidos (mayor número de hablantes nativos), Canadá (bilingüismo y multiculturalidad), Irlanda (acentos claros), Australia y Nueva Zelanda (entornos seguros) destacan. Malta ofrece costes asequibles. La inmersión en situaciones cotidianas acelera el aprendizaje y el intercambio cultural enriquece la experiencia, combinando estancias con clases estructuradas para maximizar resultados.'
  },
  {
    question: '¿Dónde es mejor aprender inglés?',
    answer: 'El mejor lugar para aprender inglés combina inmersión en países angloparlantes, plataformas online como Papora, British Council Madrid, Impulse English (enfoque británico, preparación de exámenes), cursos intensivos con grupos homogéneos, clases particulares personalizadas e intercambios lingüísticos. La inmersión acelera el aprendizaje mediante uso cotidiano del idioma en situaciones reales.'
  },
  {
    question: '¿Cuál es el mejor estado para aprender inglés?',
    answer: 'El mejor estado para aprender inglés se encuentra mediante inmersión lingüística en entornos anglófonos combinada con métodos educativos efectivos. California (San Francisco, Los Ángeles), Nueva York, Illinois (Chicago), Massachusetts (Boston), Washington (Seattle) y Florida (Miami) destacan por sus programas ESL, oferta educativa universitaria, diversidad cultural y oportunidades de práctica cotidiana. La clave reside en clases presenciales, cursos online flexibles, intercambios con nativos y aplicaciones móviles como Duolingo o Babbel.'
  },
  {
    question: '¿Cuál es el país anglófono más barato para estudiar?',
    answer: 'El país anglófono más barato para estudiar es Malta, destacando por sus reducidos costos de vida y matrícula comparados con Reino Unido, Irlanda o Estados Unidos. Filipinas emerge como alternativa económica en Asia, mientras que Sudáfrica ofrece precios competitivos en el continente africano. Malta combina inmersión lingüística total (inglés oficial), clima mediterráneo, programas ESL asequibles y accesibilidad dentro de Europa, maximizando el retorno de inversión educativa para estudiantes internacionales.'
  },
  {
    question: '¿Dónde hay mejor nivel de inglés en España?',
    answer: 'La Comunidad de Madrid presenta el mejor nivel de inglés en España mediante programas como "English Impact Madrid", evaluación bilingüe y amplia oferta educativa con academias reconocidas (Papora, British Council, International House, Impulse English). Nueve comunidades autónomas colaboran con Cambridge English: Aragón, Asturias, Canarias, Cantabria, Castilla-La Mancha, Castilla y León, Cataluña, Madrid y Valencia. Empresarialmente, comprensión lectora domina 12 sectores, expresión oral 8 sectores, exigiendo niveles avanzados en Banca, Finanzas y Derecho.'
  },
  {
    question: '¿Dónde conviene aprender inglés?',
    answer: 'Aprender inglés conviene en academias presenciales como British Council Madrid (8 centros, certificaciones oficiales), Number 16 School (profesores titulados rotativos), International House Madrid (método tradicional consolidado) e Impulse English (preparación exámenes oficiales). Plataformas online como Papora ofrecen clases ilimitadas, horarios flexibles, metodología situacional real y certificación por niveles. Intercambios lingüísticos con nativos y cursos multimedia interactivos complementan el aprendizaje presencial o remoto eficazmente.'
  },
  {
    question: '¿Cuál es el mejor curso para aprender inglés?',
    answer: 'El mejor curso para aprender inglés varía según necesidades: That\'s English (Ministerio Educación español, certificación internacional), Babbel (conversación práctica, clases en vivo), British Council Madrid/Impulse English (inglés británico, exámenes certificados), Udemy (155.000 cursos variados), Duolingo (lecciones diarias cortas). Libros destacados: "English Grammar in Use" (Raymond Murphy), "English for Everyone" (DK, autoaprendizaje visual), "Activate Advanced C1" (preparación exámenes oficiales). Métodos complementarios: intercambio lingüístico (Tandem, HelloTalk), inmersión extranjera, audiolibros.'
  },
  {
    question: '¿Cuál es el mejor curso para aprender inglés en línea?',
    answer: 'Los mejores cursos para aprender inglés en línea incluyen Babbel (conversación práctica, clases en vivo con profesores cualificados), Duolingo (gamificado, 5 minutos diarios gratuitos), Udemy (155.000 cursos variados), That\'s English (Ministerio Educación español, certificación internacional). Recursos complementarios: BBC Learning English, British Council, TED Talks, YouTube (English Addict, Learn English with Emma), apps Memrise, Anki, Quizlet. Libros destacados: "English Grammar in Use" (Raymond Murphy), "English for Everyone" (DK). Flexibilidad horaria 24/7.'
  },
  {
    question: '¿Cuál es el mejor curso online para aprender inglés?',
    answer: 'El mejor curso online para aprender inglés varía según necesidades: Babbel (conversación práctica, clases en vivo), Udemy (155.000 cursos, 70 millones estudiantes), That\'s English (Ministerio Educación español, certificación internacional), Duolingo (gamificado, 5 minutos diarios gratuitos). Recursos complementarios: BBC Learning English, British Council, TED Talks, YouTube (English Addict, Learn English with Emma), apps Memrise, Anki, Quizlet. Flexibilidad horaria total permite estudiar gramática, conversación o programas certificados estructurados.'
  },
  {
    question: '¿Cuál es el mejor curso para aprender inglés online?',
    answer: 'El mejor curso para aprender inglés online incluye Papora (clases ilimitadas profesores expertos, situaciones reales, horarios personalizados), Babbel (conversación práctica, Babbel Live en vivo, app todos niveles), academias online como Impulse English, That\'s English (Ministerio Educación España, certificación internacional reconocida), Udemy (155.000 cursos, 70 millones estudiantes), Duolingo (gamificado gratuito, 5 minutos diarios). Recursos complementarios: BBC Learning English, British Council, TED Talks, YouTube (English Addict, Learn English Emma), apps Anki, Quizlet.'
  },
  {
    question: '¿Cuál es el mejor programa online para aprender inglés?',
    answer: 'El mejor programa online para aprender inglés incluye That\'s English (Ministerio Educación España, certificación internacional, tutorías personalizadas), Babbel Live (clases vivo profesores cualificados, conversación pronunciación), Duolingo (gratuito gamificado, 5 minutos diarios), Udemy (155.000 cursos, 70 millones estudiantes), academias online como Impulse English (grupos reducidos, seguimiento personalizado, clases conversacionales gratuitas). Recursos complementarios: BBC Learning English, British Council, TED Talks, YouTube (English Addict, Learn English Emma), apps Memrise, Anki, Quizlet, intercambio idiomas (Tandem, HelloTalk). Flexibilidad horaria total adaptada ritmo vida.'
  },
  {
    question: '¿Cuál es el curso más recomendado para aprender inglés?',
    answer: 'El curso más recomendado para aprender inglés incluye British Council Madrid o Impulse English (niveles A1-C1 certificados, profesores expertos, inglés británico), Babbel (conversación práctica, Babbel Live clases vivo), That\'s English (Ministerio Educación España, certificación internacional), Udemy (155.000 cursos variados), libros autoaprendizaje "English Grammar in Use", "English for Everyone" DK (30+ horas audio, preparación TOEFL/IELTS/TOEIC), "Aprende Inglés desde Cero" Richard Vaughan (principiantes estructura gradual), academias online flexibles A1-C1, precios asequibles, certificados CV, profesores expertos cualificados.'
  },
  {
    question: '¿Cuál es el mejor curso de inglés online?',
    answer: 'El mejor curso de inglés online incluye Babbel (conversación práctica, Babbel Live clases vivo profesores cualificados, app todos niveles), That\'s English (Ministerio Educación España, certificación internacional reconocida, tutorías personalizadas), Udemy (155.000 cursos, 70 millones estudiantes), Duolingo (gamificado gratuito, 5 minutos diarios), academias online (enseñanza personalizada, clases conversacionales gratuitas, horarios flexibles). Recursos complementarios: BBC Learning English, British Council, TED Talks, YouTube (English Addict, Learn English Emma), apps Anki, Quizlet. Flexibilidad horaria completa según conveniencia personal.'
  },
  {
    question: '¿Cuál es la mejor plataforma para dar clases de inglés?',
    answer: 'La mejor plataforma para dar clases de inglés varía según preferencias: Babbel Live ofrece clases online en vivo con profesores cualificados para enseñanza personalizada directa; Udemy permite crear/vender cursos pregrabados asíncronos con flexibilidad horaria estudiantes acceso cualquier momento/lugar; That\'s English, programa Ministerio Educación Formación Profesional España, proporciona tutorías/sesiones práctica retroalimentación personalizada estructura educativa oficial; academias online generales emplean profesores guiando estudiantes plataformas horarios amplios adaptables diferentes estilos vida. Se recomienda investigar condiciones cada plataforma para profesores, métodos pago, requisitos, herramientas enseñanza disponibles.'
  },
  {
    question: '¿Cuál es la mejor plataforma para aprender inglés en línea?',
    answer: 'La mejor plataforma para aprender inglés en línea varía según necesidades, presupuesto y objetivos específicos. Babbel destaca por conversación práctica/pronunciación, Babbel Live clases vivo, situaciones cotidianas comprensión auditiva, cursos específicos cultura/viajes/trabajo. Duolingo ofrece gamificación gratuita, lecciones cortas 5 minutos diarios, ritmo propio. Udemy proporciona 155.000+ cursos, 70 millones estudiantes, diversidad niveles/duración, certificados limitaciones aceptación institucional. DK English for Everyone curso autoaprendizaje visual estructurado cuatro niveles, gramática/vocabulario/comprensión oral/escrita/pronunciación, 30+ horas audio gratuito, preparación TOEFL/MECR/IELTS/TOEIC. Academias online con grupos reducidos homogéneos, seguimiento individualizado tutores, corrección ejercicios semanal, horarios amplios adaptados.'
  },
  {
    question: '¿Cuál es la mejor plataforma para aprender inglés online?',
    answer: 'La mejor plataforma para aprender inglés en línea varía según necesidades, presupuesto y objetivos específicos. Babbel destaca por conversación práctica/pronunciación, Babbel Live clases vivo, situaciones cotidianas comprensión auditiva, cursos específicos cultura/viajes/trabajo. Duolingo ofrece gamificación gratuita, lecciones cortas 5 minutos diarios, ritmo propio. Udemy proporciona 155.000+ cursos, 70 millones estudiantes, diversidad niveles/duración, certificados limitaciones aceptación institucional. DK English for Everyone curso autoaprendizaje visual estructurado cuatro niveles, gramática/vocabulario/comprensión oral/escrita/pronunciación, 30+ horas audio gratuito, preparación TOEFL/MECR/IELTS/TOEIC. Academias online con grupos reducidos homogéneos, seguimiento individualizado tutores, corrección ejercicios semanal, horarios amplios adaptados.'
  },
  {
    question: '¿Cuál es la mejor plataforma para dar clases en línea?',
    answer: 'La mejor plataforma para dar clases en línea requiere evaluar interactividad (modelo vivo versus autodirigido), tipo contenido (vídeos/lecturas/ejercicios interactivos), certificaciones reconocidas, presupuesto disponible, soporte técnico/pedagógico, flexibilidad horarios/ritmos aprendizaje. Babbel Live proporciona clases vivo profesores cualificados conversación práctica/pronunciación niveles cultura/viajes/trabajo contratación conjunta/separada. Udemy alberga 155.000+ cursos flexibilidad horaria acceso cualquier momento/lugar, calidad variable instructor, certificados aceptación limitada institucional, interacción instructores reducida. That\'s English Ministerio Educación Formación Profesional España adultos recursos didácticos variados lecturas/ejercicios/audios/vídeos tutorías retroalimentación personalizada certificaciones reconocidas internacionalmente. Cambridge English ofrece 12 consejos enseñar online efectivamente curso gratuito MOOC "Teaching English Online" habilidades/herramientas/recursos enseñanza digital.'
  },
  {
    question: '¿Cuál es el mejor sitio para aprender inglés online?',
    answer: 'El mejor sitio para aprender inglés online combina múltiples plataformas según necesidades individuales. Papora ofrece clases ilimitadas profesores expertos, horarios flexibles, enfoque situaciones vida diaria cubriendo vocabulario/listening/gramática/pronunciación/expresión oral. Babbel proporciona conversación práctica/pronunciación lecciones expertas, Babbel Live clases vivo profesores cualificados, cursos específicos cultura/viajes/trabajo. Udemy presenta 155.000+ cursos todos niveles, certificados aceptación institucional limitada. Duolingo gamificación gratuita lecciones cortas. Academias online ofrecen clases conversacionales gratuitas listening/speaking apoyo continuo horarios amplios. Tandem/HelloTalk intercambio hablantes nativos fluidez comprensión cultural. BBC Learning English/British Council/TED Talks recursos gratuitos complementarios. Práctica mínima recomendada 15 minutos diarios.'
  }
];

const cursosOnline = [
  { name: 'Babbel', price: 'Desde 6,99€/mes', features: ['Clases en vivo', 'App móvil', 'Conversación práctica'] },
  { name: 'Duolingo', price: 'Gratis / Premium', features: ['Gamificado', '5 min/día', 'Todos los niveles'] },
  { name: 'That\'s English', price: 'Oficial', features: ['Ministerio Educación', 'Certificación', 'Tutorías'] },
  { name: 'Udemy', price: 'Desde 9,99€', features: ['155.000 cursos', 'Certificados', 'Ritmo propio'] },
  { name: 'Impulse English', price: 'Desde 79€/mes', features: ['Grupos reducidos', 'Cambridge', 'Seguimiento'] },
];

const paises = [
  { name: 'Reino Unido', pros: 'Cuna del inglés, cultura rica', cons: 'Coste alto', ideal: 'Inglés británico' },
  { name: 'Irlanda', pros: 'Acentos claros, amigable', cons: 'Clima lluvioso', ideal: 'Europeos' },
  { name: 'Malta', pros: 'Más barato, clima', cons: 'Inglés segundo idioma', ideal: 'Presupuesto limitado' },
  { name: 'Canadá', pros: 'Multicultural, seguro', cons: 'Distancia', ideal: 'Inmersión total' },
  { name: 'Estados Unidos', pros: 'Mayor variedad', cons: 'Visado complejo', ideal: 'Inglés americano' },
];

export const articleSchema = generateArticleSchema({
    headline: "Aprende Inglés: Guía Completa 2025",
    description: "Guía definitiva para aprender inglés: mejores cursos online, plataformas, países para estudiar y opciones en España. Métodos efectivos y recursos.",
    url: `${businessInfo.url}/blog/aprende-ingles-guia`,
    datePublished: "2025-01-01"
  });

export default function AprendeInglesGuiaPage() {
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
            <img src="/images/academy/jp-with-students.jpg" alt="Estudiantes con profesor Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
            items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Cómo Aprender Inglés' }
            ]}
            variant="light"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                  Guía Completa
                </span>
                <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actualizado Diciembre 2024
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Dónde y Cómo Aprender Inglés: Guía Definitiva 2025
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Descubre los mejores cursos online, plataformas, países y métodos para aprender inglés. Comparativa completa con precios, ventajas y recomendaciones personalizadas.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
              alt="Aprender inglés - estudiantes internacionales"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              Tabla de Contenidos
            </h2>
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
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* FAQ Section - HIGH UP */}
        <div id="preguntas-frecuentes" className="scroll-mt-24">
          <FAQSection
            faqs={faqs}
            title="Preguntas Frecuentes sobre Aprender Inglés"
          />
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6 py-12">
          <div className="prose prose-lg max-w-none">

            {/* Section: Dónde Aprender */}
            <section id="donde-aprender" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-purple-600" />
                Dónde Aprender Inglés: Guía Completa
              </h2>

              <p className="text-zinc-600 mb-6">
                Elegir dónde aprender inglés depende de tus objetivos, presupuesto y estilo de aprendizaje.
                Las opciones incluyen academias presenciales, cursos online, inmersión en el extranjero y
                métodos autodidactas. Todos estos enfoques se alinean con el <a href="https://www.coe.int/es/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Marco Común Europeo de Referencia para las Lenguas (MCER)</a>, que establece estándares internacionales para evaluar competencias lingüísticas.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-zinc-900 mb-4">Factores clave para elegir:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Objetivo:</strong> Certificación oficial, conversación, trabajo, viajes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Presupuesto:</strong> Desde gratis (apps) hasta cursos premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Tiempo disponible:</strong> 5 minutos/día vs clases intensivas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Modalidad:</strong> Presencial, online o híbrido</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section: Mejores Cursos Online */}
            <section id="mejores-cursos" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Laptop className="w-8 h-8 text-purple-600" />
                Mejores Cursos de Inglés Online 2025
              </h2>

              <div className="grid gap-4 mb-8">
                {cursosOnline.map((curso) => (
                  <div key={curso.name} className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-zinc-900 text-xl">{curso.name}</h3>
                        <p className="text-purple-600 font-medium">{curso.price}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {curso.features.map((feature) => (
                          <span key={feature} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2">Nuestra Recomendación</h3>
                <p className="text-white/90">
                  Para certificación oficial Cambridge, combina nuestros <a href="/cursos-ingles/adultos/" className="text-white hover:underline font-bold">cursos de inglés para adultos</a> en nuestra <a href="/academia-ingles-la-vaguada/" className="text-white hover:underline font-bold">academia junto a La Vaguada</a> (preparación estructurada)
                  con práctica diaria en apps como Duolingo o Babbel. Esta combinación maximiza resultados
                  en el menor tiempo posible.
                </p>
              </div>
            </section>

            {/* Section: Plataformas */}
            <section id="plataformas" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-600" />
                Plataformas para Aprender Inglés
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4">Plataformas Gratuitas</h3>
                  <ul className="space-y-3 text-zinc-600">
                    <li>• <strong>Duolingo:</strong> Gamificación, ideal principiantes</li>
                    <li>• <strong>BBC Learning English:</strong> Contenido de calidad</li>
                    <li>• <strong>YouTube:</strong> Miles de canales educativos</li>
                    <li>• <strong>Tandem/HelloTalk:</strong> Intercambio con nativos</li>
                  </ul>
                </div>
                <div className="bg-white border border-zinc-200 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4">Plataformas Premium</h3>
                  <ul className="space-y-3 text-zinc-600">
                    <li>• <strong>Babbel:</strong> Conversación y pronunciación</li>
                    <li>• <strong>Udemy:</strong> Cursos especializados</li>
                    <li>• <strong>That's English:</strong> Certificación oficial</li>
                    <li>• <strong>Academias online:</strong> Seguimiento personalizado</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Section: Mejores Países */}
            <section id="paises" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-purple-600" />
                Mejores Países para Estudiar Inglés
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-zinc-900">País</th>
                      <th className="px-4 py-3 text-left font-bold text-zinc-900">Ventajas</th>
                      <th className="px-4 py-3 text-left font-bold text-zinc-900">Consideraciones</th>
                      <th className="px-4 py-3 text-left font-bold text-zinc-900">Ideal para</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {paises.map((pais) => (
                      <tr key={pais.name} className="hover:bg-zinc-50">
                        <td className="px-4 py-3 font-medium text-zinc-900">{pais.name}</td>
                        <td className="px-4 py-3 text-zinc-600">{pais.pros}</td>
                        <td className="px-4 py-3 text-zinc-600">{pais.cons}</td>
                        <td className="px-4 py-3 text-purple-600 font-medium">{pais.ideal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section: España */}
            <section id="espana" className="scroll-mt-24 mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-purple-600" />
                Aprender Inglés en España
              </h2>

              <p className="text-zinc-600 mb-6">
                España ofrece excelentes opciones para aprender inglés sin salir del país. Madrid lidera
                el nivel de inglés nacional con programas bilingües y una amplia oferta de academias
                reconocidas internacionalmente.
              </p>

              <div className="bg-zinc-50 rounded-xl p-6">
                <h3 className="font-bold text-zinc-900 mb-4">Mejores opciones en Madrid:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-2">Academias presenciales</h4>
                    <ul className="text-zinc-600 space-y-1">
                      <li>• British Council (desde 519€/trimestre)</li>
                      <li>• International House (desde 172€/mes)</li>
                      <li>• <a href="/academia-ingles-barrio-del-pilar/" className="text-purple-600 hover:underline font-medium">Academia en Barrio del Pilar</a> (desde 79€/mes)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-2">Certificaciones recomendadas</h4>
                    <ul className="text-zinc-600 space-y-1">
                      <li>• <a href="/examenes-cambridge/" className="text-purple-600 hover:underline font-medium">Exámenes Cambridge</a> (B1-C2)</li>
                      <li>• <a href="/linguaskill/" className="text-purple-600 hover:underline font-medium">Linguaskill</a> (resultados 48h)</li>
                      <li>• IELTS (reconocimiento global)</li>
                    </ul>
                  </div>

                </div>
              </div>
            </section>

          </div>


        </div>

        {/* External Resources Section */}
        <section className="py-12 px-6 bg-purple-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Recursos Oficiales de Cambridge</h2>
            <p className="text-zinc-600 mb-8">Consulta la información oficial de Cambridge Assessment English:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.cambridgeenglish.org/learning-english/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-purple-600 transition-colors">Learning English</h3>
                  <p className="text-zinc-500 text-sm mt-1">Recursos gratuitos para aprender</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-purple-600 transition-colors">Exámenes Cambridge</h3>
                  <p className="text-zinc-500 text-sm mt-1">Certificaciones oficiales</p>
                </div>
              </a>
              <a
                href="https://writeandimprove.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-purple-600 transition-colors">Write & Improve</h3>
                  <p className="text-zinc-500 text-sm mt-1">Practica escritura gratis</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/test-your-english/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-purple-600 transition-colors">Test Your English</h3>
                  <p className="text-zinc-500 text-sm mt-1">Prueba de nivel gratuita</p>
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Artículos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/academias-ingles-madrid/" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-zinc-900 mb-2">Academias de Inglés Madrid</h3>
                <p className="text-zinc-600 text-sm">Comparativa completa de academias en Madrid con precios actualizados.</p>
              </a>
              <a href="/examenes-cambridge/" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-zinc-900 mb-2">Exámenes Cambridge</h3>
                <p className="text-zinc-600 text-sm">Guía completa de certificaciones Cambridge: B1, B2, C1 y C2.</p>
              </a>
              <a href="/metodologia/" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-zinc-900 mb-2">Metodología de Aprendizaje</h3>
                <p className="text-zinc-600 text-sm">Los métodos más efectivos para aprender inglés rápidamente.</p>
              </a>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto max-w-4xl">
            {/* Vision Statement */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-10 mb-10 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                Tu inglés puede cambiar tu vida. Nosotros podemos cambiarlo contigo.
              </h2>
              <p className="text-white/90 text-lg mb-4 text-center">
                Sabemos que has intentado aprender inglés antes. Quizás con apps, con métodos online, con academias que no funcionaron. Entendemos esa frustración. Pero también sabemos que con el método correcto, el apoyo adecuado y profesores que realmente se comprometen contigo, todo cambia.
              </p>
              <p className="text-white/90 text-lg text-center">
                <strong>En Impulse English cerramos la brecha entre donde estás y donde necesitas estar.</strong> Te llevaremos al nivel que abrirá puertas en tu carrera, te motivaremos cuando quieras rendirte, y celebraremos cada logro contigo. Tu transformación empieza con una decisión: dar el primer paso.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Abrimos puertas contigo
              </h2>
              <p className="text-white/90 text-lg mb-8">
                100% de aprobados Cambridge. Metodología probada. Profesores que se comprometen con tu éxito.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors"
              >
                Empieza tu transformación
              </a>
            </div>

          </div>
        </section>

        {/* Lead Form */}
        <section className="py-16 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-2">Da el primer paso hoy</h2>
              <p className="text-zinc-600">Te contactamos en menos de 24h para tu prueba de nivel gratuita</p>
            </div>
            <LeadForm />
          </div>
        </section>
      </article>

      {/* External Authority Link */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.coe.int/es/web/common-european-framework-reference-languages"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-600 hover:underline"
          >
            → Más información en Consejo de Europa - Marco Común Europeo (MCER)
          </a>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
