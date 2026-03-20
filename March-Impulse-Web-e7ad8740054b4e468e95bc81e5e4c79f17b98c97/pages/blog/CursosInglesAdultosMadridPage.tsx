import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, Users, CheckCircle, ArrowRight, BookOpen, Building } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import Breadcrumb from '../../components/Breadcrumb';

export const articleSchema = generateArticleSchema({
  headline: "Cursos de Inglés para Adultos en Madrid: Guía Completa 2025",
  description: "Guía completa de cursos de inglés para adultos en Madrid. Compara EOI, academias privadas y clases particulares. Precios, horarios y certificaciones.",
  url: `${businessInfo.url}/academias-ingles-madrid/adultos`,
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01"
});

export const faqs = [
    {
      question: "¿Cuánto cuesta un curso de inglés para adultos en Madrid en 2025?",
      answer: "Los precios varían según modalidad: cursos grupales regulares cuestan 60-120€/mes (8 horas mensuales), intensivos 300-600€/mes (40-60 horas), y clases particulares 25-45€/hora. Los paquetes anuales con descuento promedian 750-1.200€ completos incluyendo materiales y plataforma digital. Las opciones online son 20-30% más económicas."
    }

  ,
    {
      question: "¿Cuánto tiempo necesito para alcanzar nivel B2 desde cero?",
      answer: "Con curso regular (4 horas semanales) y práctica diaria de 30 minutos, un adulto motivado alcanza B2 en 18-24 meses. Los programas intensivos (15+ horas semanales) reducen este tiempo a 12-15 meses. Factores como edad, idiomas previos y dedicación personal varían estos plazos ±30%. Lo crítico es consistencia semanal ininterrumpida."
    },
    {
      question: "¿Son efectivas las clases online para adultos?",
      answer: "Sí, siempre que incluyan sesiones en vivo con profesor cualificado y grupos pequeños (máximo 10 personas). Los estudios muestran que adultos disciplinados obtienen resultados equivalentes a presencial en 92% de casos. La clave es compromiso con asistencia y práctica diaria. El formato híbrido (presencial + online) ofrece mejores resultados globales."
    },
    {
      question: "¿Necesito certificación oficial o basta con aprender inglés funcional?",
      answer: "Depende de tu objetivo: para uso personal, turismo o consumo de contenido, el inglés funcional sin certificar es suficiente. Para CV profesional, promociones internas o requisitos empresariales, certificaciones Cambridge o IELTS son imprescindibles porque validan tu nivel objetivamente ante empleadores globales. El 83% de ofertas cualificadas en Madrid especifican certificación requerida."
    },
    {
      question: "¿Puedo combinar preparación de examen con mejora de conversación?",
      answer: "Absolutamente. Los mejores programas integran ambos: preparan técnicamente para el examen mientras desarrollan fluidez conversacional real mediante debates y role-plays. Dedica 70% del tiempo a preparación específica del examen y 30% a conversación libre. Esta combinación previene el problema común de \"aprobar el examen pero no saber hablar fluidamente\"."
    }
  ];

export default function CursosInglesAdultosMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const academyTypes = [
    {
      type: "Escuelas Oficiales de Idiomas (EOI)",
      price: "100-200€/año",
      pros: ["Precio muy económico", "Profesorado funcionario cualificado", "Certificación oficial propia"],
      cons: ["Grupos grandes (25-30 alumnos)", "Admisión por sorteo", "Horarios limitados"]
    },
    {
      type: "Impulse English Academy",
      price: "Desde 79€/mes",
      pros: ["Grupos reducidos (7-10 alumnos)", "Centro oficial Cambridge", "100% aprobados 24/25", "Presencial y online"],
      cons: ["Solo zona norte Madrid"]
    },
    {
      type: "Academias privadas especializadas",
      price: "100-250€/mes",
      pros: ["Grupos reducidos (6-12 alumnos)", "Flexibilidad horaria", "Metodologías innovadoras"],
      cons: ["Mayor coste mensual", "Calidad variable según academia", "Sin certificación propia"]
    },
    {
      type: "Clases particulares",
      price: "20-50€/hora",
      pros: ["Atención 100% personalizada", "Máxima flexibilidad", "Ritmo adaptado"],
      cons: ["Coste elevado", "Sin interacción grupal", "Depende del profesor"]
    }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG" alt="Aula principal academia inglés Impulse English Academy Madrid" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
              items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Cursos Adultos Madrid' }
              ]}
              variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Actualizado: Diciembre 2025
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  Cursos de Inglés para Adultos en Madrid: Guía Completa 2025
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Todo lo que necesitas saber para elegir el curso de inglés ideal según tu nivel, horario y presupuesto.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#opciones" className="text-slate-600 hover:text-slate-800 transition-colors">→ Tipos de Cursos Disponibles</a></li>
                <li><a href="#comparativa" className="text-slate-600 hover:text-slate-800 transition-colors">→ Comparativa de Opciones</a></li>
                <li><a href="#elegir" className="text-slate-600 hover:text-slate-800 transition-colors">→ Cómo Elegir el Curso Ideal</a></li>
                <li><a href="#metodologias" className="text-slate-600 hover:text-slate-800 transition-colors">→ Metodologías de Enseñanza</a></li>
                <li><a href="#faq" className="text-slate-600 hover:text-slate-800 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Madrid ofrece cientos de opciones para estudiar inglés siendo adulto, desde las económicas Escuelas Oficiales de Idiomas hasta academias privadas especializadas y <a href="/cursos-ingles/particulares" className="text-slate-700 hover:underline font-medium">clases particulares</a> personalizadas. Esta guía te ayuda a navegar entre todas las alternativas para encontrar el curso que mejor se adapte a tus necesidades profesionales, disponibilidad horaria y presupuesto. Ya seas un profesional que necesita inglés para su carrera o alguien que quiere retomar el idioma después de años, aquí encontrarás la información que necesitas. Si buscas academias en zonas específicas como <a href="/academia-ingles-tetuan" className="text-slate-700 hover:underline font-medium">Tetuán</a>, <a href="/academia-ingles-plaza-castilla" className="text-slate-700 hover:underline font-medium">Plaza Castilla</a> o <a href="/academia-ingles-la-vaguada" className="text-slate-700 hover:underline font-medium">junto a La Vaguada</a>, disponemos de sedes en el norte de Madrid.
            </p>

            {/* Section 1 */}
            <section id="opciones" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tipos de Cursos de Inglés para Adultos en Madrid
              </h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Escuelas Oficiales de Idiomas (EOI)</h3>
                      <p className="text-blue-600 font-medium">100-200€/año</p>
                    </div>

                  </div>
                  <p className="text-gray-700 mb-4">
                    Las EOI son centros públicos dependientes de la Comunidad de Madrid que ofrecen enseñanza de idiomas a precios muy reducidos. Madrid cuenta con 32 escuelas oficiales repartidas por toda la comunidad autónoma. Los cursos siguen el calendario escolar (septiembre-junio) con unas 120 horas anuales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Precio muy económico</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Profesorado funcionario</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Grupos grandes</span>
                  </div>

                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Academias Privadas Especializadas</h3>
                      <p className="text-purple-600 font-medium">100-250€/mes</p>
                    </div>

                  </div>
                  <p className="text-gray-700 mb-4">
                    Las academias privadas ofrecen mayor flexibilidad y atención personalizada. En Madrid hay cientos de opciones, desde grandes franquicias hasta academias locales especializadas. Suelen ofrecer grupos reducidos de 6-12 alumnos, horarios flexibles incluyendo tardes-noches y fines de semana, y metodologías comunicativas modernas. Muchas son centros preparadores oficiales para <a href="/examenes-cambridge" className="text-slate-600 hover:underline">exámenes Cambridge</a> y <a href="/linguaskill" className="text-slate-600 hover:underline">Linguaskill</a>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Grupos reducidos</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Flexibilidad horaria</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Mayor inversión</span>
                  </div>

                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Clases Particulares</h3>
                      <p className="text-emerald-600 font-medium">20-50€/hora</p>
                    </div>

                  </div>
                  <p className="text-gray-700 mb-4">
                    Las clases particulares ofrecen la máxima personalización, adaptando completamente el contenido, ritmo y horario a tus necesidades específicas. Ideales para objetivos muy concretos como preparación de entrevistas de trabajo, presentaciones en inglés, o necesidades profesionales específicas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">100% personalizado</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Máxima flexibilidad</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Coste por hora elevado</span>
                  </div>

                </div>

                {/* Impulse English Academy Featured */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Impulse English Academy - Barrio del Pilar</h3>
                      <p className="text-blue-700 font-medium">Curso Adultos: 79€/mes</p>
                    </div>

                  </div>
                  <p className="text-gray-700 mb-4">
                    Centro oficial de preparación Cambridge en el norte de Madrid. Ubicados <a href="/academia-ingles-la-vaguada" className="text-blue-700 hover:underline">junto a La Vaguada</a> en <a href="/academia-ingles-barrio-del-pilar" className="text-blue-700 hover:underline">Barrio del Pilar</a>. Cursos presenciales y online con total flexibilidad. Profesores cualificados y certificados con metodología comunicativa. 100% de aprobados en exámenes Cambridge 2024/25. Grupos reducidos de máximo 7-10 alumnos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Centro oficial Cambridge</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">100% aprobados</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Presencial + Online</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Grupos 7-10 alumnos</span>
                  </div>
                  <a href="/cursos-ingles/adultos" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800">
                    Ver cursos para adultos <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </section>

            {/* Section 2 - Comparison Table */}
            <section id="comparativa" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comparativa de Opciones
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                      <th className="text-left p-4 font-semibold">Tipo</th>
                      <th className="text-left p-4 font-semibold">Precio</th>
                      <th className="text-left p-4 font-semibold">Grupo</th>
                      <th className="text-left p-4 font-semibold">Flexibilidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">EOI</td>
                      <td className="p-4 text-gray-700">100-200€/año</td>
                      <td className="p-4 text-gray-700">25-30 alumnos</td>
                      <td className="p-4 text-gray-700">Baja</td>
                    </tr>
                    <tr className="bg-blue-50 border-l-4 border-blue-500">
                      <td className="p-4 font-medium text-blue-900">Impulse English Academy</td>
                      <td className="p-4 text-blue-700 font-semibold">Desde 79€/mes</td>
                      <td className="p-4 text-blue-700">7-10 alumnos</td>
                      <td className="p-4 text-blue-700">Alta (presencial + online)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Academia privada</td>
                      <td className="p-4 text-gray-700">100-250€/mes</td>
                      <td className="p-4 text-gray-700">6-12 alumnos</td>
                      <td className="p-4 text-gray-700">Alta</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Particular</td>
                      <td className="p-4 text-gray-700">20-50€/hora</td>
                      <td className="p-4 text-gray-700">Individual</td>
                      <td className="p-4 text-gray-700">Máxima</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="elegir" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Elegir el Curso Ideal para Ti
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    Define tu objetivo principal
                  </h3>
                  <p className="text-gray-700">¿Necesitas certificación oficial para tu trabajo o universidad? ¿Quieres mejorar la conversación para viajes? ¿Preparas una entrevista en inglés? El objetivo determina el tipo de curso más adecuado.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    Evalúa tu disponibilidad real
                  </h3>
                  <p className="text-gray-700">Sé honesto con las horas semanales que puedes dedicar. Un curso de 4 horas semanales más 2-3 horas de práctica personal es sostenible a largo plazo. Mejor consistencia que intensidad insostenible.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    Considera la ubicación o modalidad
                  </h3>
                  <p className="text-gray-700">¿Prefieres presencial cerca de casa/trabajo, online para máxima flexibilidad, o híbrido? La logística de desplazamiento puede determinar si mantendrás la constancia a largo plazo.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    Prueba antes de comprometerte
                  </h3>
                  <p className="text-gray-700">Muchas academias ofrecen clases de prueba gratuitas. Aprovéchalas para evaluar la metodología, el ambiente y si te sientes cómodo con el estilo de enseñanza antes de pagar mensualidades.</p>
                </div>

              </div>
            </section>

            {/* Section 4 */}
            <section id="metodologias" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Metodologías de Enseñanza Populares
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Método Comunicativo</h3>
                  <p className="text-gray-700 text-sm">Prioriza la comunicación real desde el primer día. Menos gramática teórica, más práctica oral en situaciones cotidianas. Ideal para quienes necesitan soltura conversacional rápida.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Inmersión Total</h3>
                  <p className="text-gray-700 text-sm">Clases 100% en inglés desde el primer momento. Profesores nativos que no hablan español. Efectivo pero puede resultar frustrante para niveles muy básicos.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Blended Learning</h3>
                  <p className="text-gray-700 text-sm">Combina clases presenciales u online en directo con plataformas de práctica autónoma. Permite flexibilidad mientras mantiene el contacto humano con profesores.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Business English</h3>
                  <p className="text-gray-700 text-sm">Enfocado en inglés profesional: reuniones, presentaciones, emails, negociaciones. Ideal para profesionales que necesitan inglés específico para su sector laboral.</p>
                </div>

              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Conclusión
              </h2>

              <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Madrid ofrece opciones de <a href="/cursos-ingles/adultos" className="text-slate-700 hover:underline font-medium">cursos de inglés para adultos</a> para todos los perfiles: desde las económicas EOI para quienes tienen horarios flexibles y presupuesto ajustado, hasta academias privadas especializadas para profesionales que necesitan flexibilidad y atención personalizada. Si tu objetivo es obtener una certificación oficial de inglés, asegúrate de elegir una academia con experiencia en preparación de <a href="/examenes-cambridge" className="text-slate-700 hover:underline font-medium">exámenes Cambridge</a>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Para adultos en el norte de Madrid (<a href="/academia-ingles-barrio-del-pilar" className="text-slate-700 hover:underline font-medium">Barrio del Pilar</a>, <a href="/academia-ingles-penagrande" className="text-slate-700 hover:underline font-medium">Peñagrande</a>, <a href="/academia-ingles-la-ventilla" className="text-slate-700 hover:underline font-medium">La Ventilla</a>), <strong>Impulse English Academy</strong> en <a href="/academia-ingles-la-vaguada" className="text-slate-700 hover:underline font-medium">La Vaguada</a> ofrece grupos reducidos de 7-10 alumnos, horarios adaptados a profesionales, modalidad presencial y online con total flexibilidad, y profesores cualificados y certificados. Centro oficial de preparación Cambridge con 100% de aprobados en 2024/25.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Buscas cursos de inglés para adultos?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy ofrecemos cursos específicos para adultos con grupos reducidos y horarios flexibles.
              </p>
              <a
              href="/cursos-ingles/adultos"
                className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
              >
                Ver cursos para adultos
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/academias-ingles-madrid" className="group bg-gray-50 rounded-xl p-6 hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-slate-700 transition-colors mb-2">
                    Academias de Inglés Baratas en Madrid
                  </h3>
                  <p className="text-gray-600 text-sm">Las mejores opciones económicas para estudiar inglés en Madrid.</p>
                </a>
                <a href="/examenes-cambridge" className="group bg-gray-50 rounded-xl p-6 hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-slate-700 transition-colors mb-2">
                    Guía de Exámenes Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre las certificaciones oficiales de inglés.</p>
                </a>
                <a href="/linguaskill" className="group bg-gray-50 rounded-xl p-6 hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-slate-700 transition-colors mb-2">
                    Guía de Linguaskill
                  </h3>
                  <p className="text-gray-600 text-sm">Certificación rápida y flexible con resultados en 48 horas.</p>
                </a>
                <a href="/examenes-cambridge/b2-first" className="group bg-gray-50 rounded-xl p-6 hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-slate-700 transition-colors mb-2">
                    Preparación B2 First
                  </h3>
                  <p className="text-gray-600 text-sm">El certificado más demandado para el mundo laboral.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <LeadForm />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.coe.int/es/web/common-european-framework-reference-languages"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:underline"
            >
              → Más información en el Consejo de Europa - Marco Común Europeo de Referencia (MCER)
            </a>
          </div>
        </section>

        <Footer />

        {/* Schema.org Structured Data */}
</div>
    </>
  );
}
