import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, FileText, HelpCircle, ChevronDown, Award, Target } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

const c1AdvancedFaqs = [
  {
    question: "¿Cuánto tiempo se tarda en pasar de B2 a C1?",
    answer: "Pasar del nivel B2 al C1 en inglés requiere entre 200 y 300 horas de estudio guiado y práctica intensiva. El progreso depende de la frecuencia, método de aprendizaje y motivación. La certificación Cambridge C1 Advanced valida este nivel avanzado, esencial para contextos académicos y profesionales."
  },
  {
    question: "¿Es muy difícil el C1 Advanced?",
    answer: "El Cambridge C1 Advanced es un examen exigente que certifica un nivel alto de inglés (C1 MCER), evaluando reading, writing, listening y speaking con énfasis en comunicación efectiva. Su dificultad radica en la duración, variedad de tareas y dominio avanzado de vocabulario y gramática."
  },
  {
    question: "¿Qué trabajos piden C1 de inglés?",
    answer: "El nivel C1 de inglés, certificado por el Cambridge C1 Advanced, es esencial en puestos directivos, técnicos, académicos, turísticos y legales que requieren comunicación fluida y precisa en entornos internacionales. Es valorado para negociación, presentaciones, docencia, atención al cliente y trámites migratorios en 2025/26."
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
    question: "¿Qué diferencia hay entre B2 y C1?",
    answer: "La diferencia principal entre B2 y C1 radica en el dominio y profundidad del inglés: B2 permite comunicarse con fluidez en temas cotidianos y laborales, mientras C1 implica un uso avanzado, flexible y matizado, adecuado para contextos académicos y profesionales exigentes, con comprensión de expresiones idiomáticas y textos complejos."
  },
  {
    question: "¿Puedo hacer C1 sin haber hecho B2?",
    answer: "No es obligatorio haber superado el nivel B2 para presentarse al examen Cambridge C1 Advanced. Este certificado evalúa directamente competencias de nivel C1, aunque tener un nivel B2 sólido facilita la preparación y aumenta las probabilidades de éxito en la prueba avanzada."
  },
  {
    question: "¿Qué porcentaje aprueba el C1 Advanced?",
    answer: "El porcentaje de aprobación del Cambridge C1 Advanced es aproximadamente del 75%, donde el 64% obtiene grado B o C (nivel C1) y un 13% alcanza grado A (nivel C2). Cerca del 20% no logra el nivel C1 y alrededor del 5% reprueba el examen directamente."
  },
  {
    question: "¿Merece la pena el C1 en España?",
    answer: "El certificado Cambridge C1 Advanced es muy valorado en España en 2025/26 por certificar un nivel alto de inglés, reconocido en universidades, empresas multinacionales y para trámites oficiales. Facilita el acceso a estudios superiores, mejora la empleabilidad y aporta un valor estable sin caducidad."
  },
  {
    question: "¿C1 Advanced o C1 IELTS?",
    answer: "El Cambridge C1 Advanced certifica un nivel C1 CEFR con enfoque académico y profesional, evaluando lectura, escritura, comprensión y expresión oral en un formato modular. IELTS es más general, usado para migración y admisión universitaria. C1 Advanced ofrece reconocimiento sólido en Europa y no caduca."
  },
  {
    question: "¿Para qué sirve el nivel C2 de inglés?",
    answer: "El nivel C2 de inglés, el más alto del MCER, sirve para acceder a estudios de posgrado y doctorado, puestos de alta dirección internacional y demostrar dominio excepcional comparable a hablantes nativos altamente competentes. Permite comprender prácticamente todo lo leído o escuchado, negociar eficazmente, captar matices culturales y expresiones coloquiales, y escribir con soltura sobre cualquier tema. Universidades como Oxford y Columbia lo reconocen globalmente."
  },
  {
    question: "¿Cómo puedo saber si tengo un nivel C1 en inglés?",
    answer: "Para saber si posees nivel C1 en inglés, evalúa tu capacidad de comprender textos extensos con significados implícitos, expresarte con fluidez espontánea sin buscar palabras y producir textos estructurados sobre temas complejos. Realiza tests de nivel online, practica con materiales específicos C1 o certifícate mediante exámenes oficiales como C1 Advanced de Cambridge. El C1 representa el quinto nivel MCER como usuario competente."
  },
  {
    question: "¿Cuál es la diferencia entre C1 y C2?",
    answer: "La diferencia entre C1 y C2 radica en el grado de dominio: C1 (Advanced) representa un nivel avanzado con fluidez en contextos académicos y profesionales, puntuaciones 180-210 en Cambridge, permitiendo participar eficazmente en reuniones especializadas. C2 (Proficiency), el nivel máximo MCER con puntuaciones 200-230, implica dominio excepcional casi nativo, comprensión sin esfuerzo de prácticamente todo, expresión espontánea distinguiendo matices sutiles en situaciones complejas."
  },
  {
    question: "¿Qué es más alto, C1 o C2 oposiciones?",
    answer: "En el contexto de oposiciones españolas, C1 es más alto que C2. El Grupo C1 exige Bachillerato o FP de Grado Medio, accediendo a puestos administrativos de mayor responsabilidad como Agentes de Hacienda o Administrativos del Estado. El Grupo C2 requiere solo ESO, correspondiendo a puestos operativos y de apoyo como Auxiliares Administrativos. C1 presenta temarios más extensos y complejos que C2."
  },
  {
    question: "¿C1 de inglés a qué equivale?",
    answer: "El C1 de inglés equivale al nivel Avanzado del MCER, con puntuaciones Cambridge entre 180-199: Grade C (180-192) y Grade B (193-199). Permite participar eficazmente en reuniones profesionales, leer textos académicos rápidamente, escribir textos coherentes y mantener conversaciones fluidas con expresiones abstractas. Más de 9000 organizaciones mundiales reconocen este certificado. Puntuaciones 200-210 equivalen a C2. Universidades exigen mínimo 180 general y 175 por destreza."
  },
  {
    question: "¿Qué diferencia hay entre B1 y C1?",
    answer: "La diferencia entre B1 y C1 radica en el nivel de dominio: B1 (Intermedio, puntuación 140 Cambridge) permite desenvolverse en situaciones cotidianas, describir experiencias y mantener conversaciones informales sobre temas familiares. C1 (Avanzado, puntuación 180 Cambridge) implica dominio eficaz para participar en reuniones especializadas, afrontar cursos académicos, redactar trabajos detallados, usar expresiones abstractas con fluidez y negociar asuntos complejos en contextos profesionales y universitarios."
  },
];

const tableOfContents = [
  { id: 'que-es', title: '¿Qué es el Examen Cambridge C1 Advanced?' },
  { id: 'estructura', title: 'Estructura y Partes del Examen' },
  { id: 'puntuacion', title: 'Sistema de Puntuación y Calificaciones' },
  { id: 'preparacion', title: 'Estrategias de Preparación Efectivas' },
  { id: 'faq', title: 'Preguntas Frecuentes (FAQ)' },
];

export const faqs: FAQItem[] = [
  {
    question: '¿Cuánto cuesta el examen Cambridge C1 Advanced en España?',
    answer: 'El precio del examen C1 Advanced varía entre 210-240€ según el centro examinador oficial en España. Algunos centros autorizados ofrecen descuentos para estudiantes matriculados o inscripciones grupales. El precio incluye certificado digital y físico con envío estándar a domicilio tras publicación de resultados oficiales.'
  },
  {
    question: '¿Cuánto tiempo debo estudiar para aprobar el C1 Advanced?',
    answer: 'Candidatos con nivel B2 sólido necesitan aproximadamente 200-300 horas de preparación enfocada para alcanzar competencias C1. Esto equivale a 6-9 meses estudiando 8-10 horas semanales con materiales oficiales. Estudiantes con nivel B1 requieren 12-18 meses de preparación intensiva antes de presentarse al examen.'
  },
  {
    question: '¿Puedo repetir el examen C1 Advanced si no apruebo?',
    answer: 'Sí, puedes presentarte al examen C1 Advanced tantas veces como desees sin restricciones. Cambridge no limita intentos ni penaliza presentaciones múltiples. Muchos centros recomiendan esperar 3-4 meses entre intentos para reforzar áreas débiles identificadas en Statement of Results anterior.'
  },
  {
    question: '¿El certificado C1 Advanced es aceptado en Estados Unidos?',
    answer: 'Más de 2.000 instituciones estadounidenses aceptan el C1 Advanced para admisión universitaria, incluyendo universidades Ivy League como Yale y Columbia. Algunas universidades requieren puntuación mínima específica (generalmente 180-185 puntos) para programas competitivos. Consulta requisitos específicos de cada institución antes de inscribirte.'
  },
  {
    question: '¿Qué diferencia hay entre C1 Advanced y IELTS Academic?',
    answer: 'El C1 Advanced certifica permanentemente nivel C1, mientras IELTS proporciona puntuación válida 2 años que corresponde aproximadamente a 7.0-8.0 banda para nivel C1. C1 Advanced evalúa mediante tareas integradas y Speaking con pareja, mientras IELTS usa tareas independientes y Speaking individual con examinador exclusivamente.'
  },
  {
    question: '¿Cuál es la parte más difícil del C1 Advanced?',
    answer: 'La mayoría de candidatos consideran Use of English y Writing Part 2 las secciones más exigentes. Use of English requiere dominio avanzado de colocaciones, phrasal verbs y transformaciones gramaticales complejas. Writing Part 2 pide redactar textos de 220-260 palabras (propuesta, informe o carta) con registro apropiado y estructura clara.'
  },
  {
    question: '¿El C1 Advanced sirve para universidades en Reino Unido?',
    answer: 'Sí. Según Cambridge Assessment English, el C1 Advanced es aceptado por la gran mayoría de universidades británicas para admisión a grados y posgrados. Cada universidad fija su puntuación mínima requerida, generalmente entre 180 y 193 puntos en la Cambridge English Scale. Consulta siempre los requisitos específicos de cada programa.'
  },
  {
    question: '¿Puedo pasar de B2 a C1 en 6 meses?',
    answer: 'Es posible con dedicación intensiva. Cambridge estima entre 200 y 300 horas de estudio guiado para pasar de B2 a C1. En 6 meses, eso implica dedicar al menos 10-12 horas semanales entre clases y estudio autónomo. El ritmo depende del nivel B2 de partida, la constancia y la práctica activa de las cuatro destrezas.'
  },
  {
    question: '¿Qué nota necesito para conseguir C1 en el Advanced?',
    answer: 'Necesitas un mínimo de 180 puntos en la Cambridge English Scale para obtener la calificación Grade C (nivel C1). Con 193 puntos o más obtienes Grade B, y con 200+ puntos recibes Grade A, que equivale a nivel C2. Si obtienes entre 160 y 179, recibes un certificado de nivel B2 en lugar de C1.'
  },
  {
    question: '¿Qué empresas en España piden C1 de inglés?',
    answer: 'El nivel C1 es habitual en consultoras, Big Four (Deloitte, PwC, EY, KPMG), empresas tecnológicas internacionales, banca de inversión e instituciones europeas. También se valora en puestos directivos de multinacionales y en sectores como turismo de alto nivel, traducción y docencia universitaria. El C1 diferencia en procesos de selección competitivos.'
  },
];

export const articleSchema = generateArticleSchema({
    headline: "Examen Cambridge C1 Advanced: Guía Completa 2025",
    description: "Guía completa del C1 Advanced: estructura del examen, sistema de puntuación, estrategias de preparación y requisitos para aprobar.",
    url: `${businessInfo.url}/examenes-cambridge/c1-advanced`,
    datePublished: "2025-01-01"
  });

export default function ExamenCambridgeC1Page() {
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
            <img src="/images/academy/facilities/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
            items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Examen Cambridge C1' }
            ]}
            variant="light"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                  Cambridge C1
                </span>
                <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actualizado Diciembre 2024
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Examen Cambridge C1 Advanced: Guía Completa 2025
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Descubre todo sobre el examen Cambridge C1 Advanced: estructura, puntuación, beneficios y preparación. Guía actualizada 2025 para aprobar el C1.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop"
              alt="Examen Cambridge C1 Advanced"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>

        {/* FAQ Section - High up on the page */}
        <FAQSection
          faqs={c1AdvancedFaqs}
          title="Preguntas Frecuentes sobre el C1 Advanced"
        />

        {/* Breadcrumb to Hub */}
        <div className="container mx-auto max-w-5xl px-6 mb-8">
          <a
              href="/examenes-cambridge/"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ← Volver a la Guía Completa de Exámenes Cambridge
          </a>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-indigo-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">
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
                El examen Cambridge C1 Advanced (antes CAE) es la segunda certificación más avanzada de Cambridge English, diseñada para acreditar un dominio profesional y académico del inglés. Más de 9.000 organizaciones en 130 países reconocen este certificado como prueba de competencia lingüística avanzada. Esta guía completa detalla la estructura, puntuación, beneficios y estrategias de preparación para el C1 Advanced en 2025, con datos actualizados sobre las últimas modificaciones del examen y requisitos de centros oficiales.
              </p>
            </section>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">9,000+</div>
                <div className="text-white/80">Organizaciones</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">75%</div>
                <div className="text-white/80">Tasa de aprobación</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-white/80">Validez permanente</div>
              </div>

            </div>

            {/* Section 1 */}
            <section id="que-es" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-indigo-600" />
                ¿Qué es el Examen Cambridge C1 Advanced?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El <a href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Cambridge C1 Advanced</a> certifica un nivel C1 del Marco Común Europeo de Referencia (MCER), demostrando capacidad para comunicarse con fluidez en entornos profesionales y académicos exigentes. A diferencia del IELTS que expira tras 2 años, este certificado no caduca jamás, proporcionando validez permanente de tus habilidades lingüísticas.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Este examen se posiciona entre el B2 First (intermedio-alto) y el C2 Proficiency (maestría completa), siendo ideal para profesionales que buscan ascensos internacionales o estudiantes que solicitan admisión en universidades prestigiosas. Las universidades de Oxford, Sydney y Toronto aceptan específicamente el C1 Advanced como prueba suficiente de dominio del inglés para programas de posgrado.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El examen evalúa capacidades reales como participar en reuniones profesionales complejas, redactar informes empresariales detallados, comprender textos académicos densos y mantener conversaciones sofisticadas sobre temas abstractos. Según Cambridge Assessment, el 75% de candidatos aprueban el examen, con un 13% obteniendo calificación A (nivel C2) y 62% obteniendo calificaciones B-C (nivel C1).
              </p>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Dato clave:</strong> El C1 Advanced es reconocido por más de 9.000 instituciones educativas, empresas y gobiernos en todo el mundo. Es especialmente valorado en contextos académicos y profesionales donde se requiere un dominio avanzado del inglés.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="estructura" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Estructura y Partes del Examen
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El C1 Advanced consta de cuatro papers que evalúan las destrezas lingüísticas de forma integral. Cada paper tiene un peso específico en la puntuación final, siendo todos igualmente importantes para la calificación global.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-zinc-50 p-6 rounded-xl">
                  <h3 className="font-bold text-zinc-900 mb-3">Reading and Use of English</h3>
                  <p className="text-zinc-600 text-sm mb-2"><strong>Duración:</strong> 90 minutos</p>
                  <p className="text-zinc-600 text-sm mb-2"><strong>Partes:</strong> 8 partes, 56 preguntas</p>
                  <p className="text-zinc-600 text-sm">Evalúa comprensión lectora, vocabulario y gramática a través de textos auténticos de revistas, periódicos y libros.</p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-xl">
                  <h3 className="font-bold text-zinc-900 mb-3">Writing</h3>
                  <p className="text-zinc-600 text-sm mb-2"><strong>Duración:</strong> 90 minutos</p>
                  <p className="text-zinc-600 text-sm mb-2"><strong>Partes:</strong> 2 tareas</p>
                  <p className="text-zinc-600 text-sm">Escribir un ensayo obligatorio y elegir entre carta, propuesta, informe o reseña. Cada texto de 220-260 palabras.</p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-xl">
                  <h3 className="font-bold text-zinc-900 mb-3">Listening</h3>
                  <p className="text-zinc-600 text-sm mb-2"><strong>Duración:</strong> 40 minutos</p>
                  <p className="text-zinc-600 text-sm mb-2"><strong>Partes:</strong> 4 partes, 30 preguntas</p>
                  <p className="text-zinc-600 text-sm">Comprensión de conferencias, entrevistas, conversaciones y monólogos con diferentes acentos del inglés.</p>
                </div>
                <div className="bg-zinc-50 p-6 rounded-xl">
                  <h3 className="font-bold text-zinc-900 mb-3">Speaking</h3>
                  <p className="text-zinc-600 text-sm mb-2"><strong>Duración:</strong> 15 minutos</p>
                  <p className="text-zinc-600 text-sm mb-2"><strong>Partes:</strong> 4 partes</p>
                  <p className="text-zinc-600 text-sm">Entrevista, turno largo, tarea colaborativa y discusión. Se realiza en parejas con otro candidato.</p>
                </div>

              </div>
            </section>

            {/* Section 3 */}
            <section id="puntuacion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Sistema de Puntuación y Calificaciones
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El C1 Advanced utiliza la Cambridge English Scale, una escala numérica que va de 142 a 210 puntos. Los resultados se presentan tanto en puntuación numérica como en calificación por letra (A, B, C) o por nivel MCER alcanzado.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-indigo-600 text-white">
                    <tr>
                      <th className="p-4 text-left">Puntuación</th>
                      <th className="p-4 text-left">Calificación</th>
                      <th className="p-4 text-left">Nivel MCER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-100">
                      <td className="p-4">200-210</td>
                      <td className="p-4 font-semibold text-green-600">Grade A</td>
                      <td className="p-4">C2</td>
                    </tr>
                    <tr className="border-b border-zinc-100 bg-zinc-50">
                      <td className="p-4">193-199</td>
                      <td className="p-4 font-semibold text-blue-600">Grade B</td>
                      <td className="p-4">C1</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="p-4">180-192</td>
                      <td className="p-4 font-semibold text-indigo-600">Grade C</td>
                      <td className="p-4">C1</td>
                    </tr>
                    <tr className="bg-zinc-50">
                      <td className="p-4">160-179</td>
                      <td className="p-4 font-semibold text-amber-600">Level B2</td>
                      <td className="p-4">B2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Ventaja:</strong> Si obtienes 200+ puntos en el C1 Advanced, recibes certificación de nivel C2, el máximo nivel del MCER. Esto significa que con un solo examen puedes demostrar maestría completa del inglés sin necesidad de presentarte al C2 Proficiency.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="preparacion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Estrategias de Preparación Efectivas
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La preparación efectiva para el C1 Advanced requiere un enfoque sistemático que combine mejora de competencias lingüísticas generales con familiarización específica del formato de examen. Candidatos exitosos dedican entre 200-300 horas de preparación estructurada.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Reading and Use of English:</strong> Practica con textos auténticos de medios de calidad como The Guardian, The Economist o BBC. Enfócate en identificar estructuras gramaticales complejas, colocaciones y phrasal verbs avanzados. Realiza ejercicios de word formation y open cloze regularmente.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Writing:</strong> Escribe regularmente ensayos, propuestas e informes siguiendo los criterios de evaluación de Cambridge (contenido, logro comunicativo, organización y lenguaje). Solicita feedback de profesores certificados o utiliza plataformas como Write & Improve.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Listening:</strong> Exponte a diferentes acentos del inglés (británico, americano, australiano) mediante podcasts académicos, TED Talks y documentales. Practica la toma de notas y la identificación de información específica.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Speaking:</strong> Practica regularmente con compañeros o profesores, enfocándote en estructurar respuestas, usar conectores discursivos y desarrollar ideas con profundidad. Graba tus respuestas para identificar áreas de mejora.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo clave:</strong> Realiza al menos 3-4 simulacros completos del examen en condiciones reales (cronometrados, sin interrupciones) antes de la fecha oficial. Esto te ayudará a gestionar el tiempo y reducir la ansiedad el día del examen.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-indigo-600" />
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
                El Cambridge C1 Advanced es una certificación de alto valor que demuestra dominio avanzado del inglés en contextos profesionales y académicos. Con reconocimiento global, validez permanente y una estructura de examen que evalúa competencias reales, representa una inversión sólida para tu futuro. Para más información sobre todos los <a href="/examenes-cambridge/" className="text-indigo-600 hover:underline font-medium">exámenes Cambridge</a> disponibles, consulta nuestra guía completa.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Si buscas preparación estructurada con metodología probada, <a href="/academia-ingles-barrio-del-pilar/" className="text-indigo-600 hover:underline font-medium">nuestra academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-indigo-600 hover:underline font-medium">junto a La Vaguada</a>, ofrece <a href="/cursos-ingles/adultos/" className="text-indigo-600 hover:underline font-medium">cursos de inglés para adultos</a> y <a href="/cursos-ingles/particulares/" className="text-indigo-600 hover:underline font-medium">clases particulares</a> específicos de preparación C1 Advanced con profesores certificados y tasas de éxito excepcionales. Reserva tu clase gratuita para comenzar tu camino hacia la certificación avanzada.
              </p>
            </section>

          </div>


        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-900 mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Listo para obtener tu Cambridge C1?
                </h2>
                <p className="text-xl text-white/80">
                  Reserva tu clase gratuita y prepárate con expertos certificados.
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
              href="/examenes-cambridge/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-indigo-600 text-sm font-medium">Hub Principal</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa de Exámenes Cambridge</h3>
                <p className="text-zinc-600 text-sm mt-2">Todo lo que necesitas saber sobre certificaciones.</p>
              </a>
              <a
              href="/examenes-cambridge/b2-first/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-indigo-600 text-sm font-medium">B2 First</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Cambridge B2: Beneficios del Examen</h3>
                <p className="text-zinc-600 text-sm mt-2">Ventajas del nivel intermedio-alto.</p>
              </a>
              <a
              href="/examenes-cambridge/fechas-precios/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-indigo-600 text-sm font-medium">Fechas</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Fechas Exámenes Cambridge 2026</h3>
                <p className="text-zinc-600 text-sm mt-2">Calendario oficial y plazos de inscripción.</p>
              </a>
            </div>

          </div>
        </section>
      </article>

      {/* External Authority Link */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:underline"
          >
            → Más información en Cambridge English - C1 Advanced oficial
          </a>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
