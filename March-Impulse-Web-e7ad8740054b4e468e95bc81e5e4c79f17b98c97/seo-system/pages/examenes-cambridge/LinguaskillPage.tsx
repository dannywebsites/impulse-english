import React, { useEffect } from 'react';
import { Monitor, Clock, Building, GraduationCap, Zap, Globe, CheckCircle, ArrowRight, AlertCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import { s3CambridgeImages, s3SecondaryImages } from '../../src/data/images';

// Article Schema for AI citation
const articleSchema = generateArticleSchema({
  headline: "Linguaskill: Guía Completa del Examen Online de Cambridge 2025",
  description: "Todo sobre Linguaskill: el examen adaptativo online de Cambridge con resultados en 48 horas. Diferencias con otros exámenes, precios, módulos y preparación.",
  url: `${businessInfo.url}/examenes-cambridge/linguaskill`,
  datePublished: "2025-01-01"
});

// Comparison data for AI citation - Linguaskill modules
const moduleComparison = [
  { modulo: "Reading & Listening", duracion: "60-85 min", partes: "Adaptativo", formato: "Online", habilidades: "Comprensión lectora y auditiva", precio: "~85€" },
  { modulo: "Writing", duracion: "45 min", partes: "2 tareas", formato: "Online", habilidades: "Expresión escrita", precio: "~45€" },
  { modulo: "Speaking", duracion: "15 min", partes: "5 partes", formato: "Grabado", habilidades: "Expresión oral", precio: "~45€" },
  { modulo: "Completo (3 módulos)", duracion: "~2h 30min", partes: "Todos", formato: "Online", habilidades: "Las 4 destrezas", precio: "~150€" }
];

// Linguaskill vs otros exámenes - Based on Knowledge Base: linguaskill.md lines 224-234
const examComparison = [
  { caracteristica: "Formato", linguaskill: "Online adaptativo", cambridge: "Presencial en papel", aptis: "Ordenador en centro" },
  { caracteristica: "Resultados", linguaskill: "48 horas", cambridge: "6-8 semanas", aptis: "3-5 días" },
  { caracteristica: "Validez", linguaskill: "Sin caducidad*", cambridge: "De por vida", aptis: "2 años" },
  { caracteristica: "Duración examen", linguaskill: "~2 horas", cambridge: "3.5-4 horas", aptis: "~3 horas" },
  { caracteristica: "Nivel evaluado", linguaskill: "B1-C2", cambridge: "Nivel específico", aptis: "A1-C" },
  { caracteristica: "Precio aprox.", linguaskill: "~150€", cambridge: "160-200€", aptis: "~85€" },
  { caracteristica: "Reconocimiento", linguaskill: "60+ países, CRUE España", cambridge: "25.000+ instituciones", aptis: "Principalmente España" }
];

// FAQs for AI citation - Based on CSV PAAs for SEO optimization
const linguaskillFAQs = [
  {
    question: "¿Cuánto dura el examen Linguaskill?",
    answer: "El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular."
  },
  {
    question: "¿Se puede suspender Linguaskill?",
    answer: "Linguaskill no se puede suspender ni aprobar; es un examen adaptativo que certifica el nivel real de inglés del candidato, desde A1 hasta C1/C2, ajustando las preguntas según sus respuestas. Esto permite una evaluación precisa y justa basada en competencias, sin calificaciones tradicionales de aprobado o suspenso."
  },
  {
    question: "¿Linguaskill desde casa es fiable?",
    answer: "Linguaskill desde casa es fiable gracias a su formato 100 % online, supervisión remota y tecnología adaptativa que ajusta la dificultad en tiempo real. Utiliza inteligencia artificial para evaluar Speaking y Writing con precisión, ofrece resultados en 48 horas y cuenta con reconocimiento oficial internacional."
  },
  {
    question: "¿Qué países aceptan Linguaskill?",
    answer: "Linguaskill está reconocido por más de 60 países en todo el mundo. Instituciones destacadas incluyen McMaster University, BCIT, INP Grenoble, Nanyang Technological University, Glion Institute, International House London y RMIT Vietnam. El examen se utiliza para admisiones universitarias, graduación, certificación lingüística y evaluación de personal en entornos académicos y corporativos."
  },
  {
    question: "¿El examen Linguaskill caduca?",
    answer: "Los certificados de Linguaskill no tienen fecha de caducidad establecida. Los resultados permanecen disponibles indefinidamente en el portal Cambridge English (Metrica). Sin embargo, instituciones y empresas receptoras pueden determinar la antigüedad máxima aceptable del examen para procesos de admisión o contratación. Se recomienda consultar con la organización correspondiente sobre el plazo de aceptación específico de los resultados."
  },
  {
    question: "¿Es Linguaskill un título oficial?",
    answer: "Linguaskill es un título oficial reconocido por la Conferencia de Rectores de las Universidades Españolas (CRUE). El certificado acredita competencias comunicativas alineadas con el MCER, evaluando niveles B1 a C2. Existen dos versiones: Linguaskill (inglés cotidiano) y Linguaskill Business (inglés empresarial). Es válido para graduación universitaria, becas, posgrados y oposiciones. Los certificados carecen de fecha de caducidad establecida."
  },
  {
    question: "¿Qué reconocimiento tiene el examen Linguaskill en España?",
    answer: "El reconocimiento de Linguaskill en España incluye CRUE, ACLES y Consejerías de Educación de Andalucía, Aragón, Cataluña, Extremadura, La Rioja, Madrid, Navarra y País Vasco para habilitación docente. Entidades como Fundación La Caixa, ICEX, AENA, Correos, Policía Nacional y RENFE lo aceptan en convocatorias. Universidades como UNED, UOC, UDIMA, UNIR y múltiples andaluzas lo reconocen para acreditación lingüística."
  },
  {
    question: "¿Linguaskill General o Business?",
    answer: "Linguaskill General evalúa inglés para contextos cotidianos, académicos y sociales, ideal para estudiantes y procesos migratorios. Linguaskill Business se centra en inglés profesional en entornos laborales, destacando comunicación empresarial. Ambos miden niveles A1-C2 según el MCER y ofrecen resultados rápidos y fiables."
  }
];

const examParts = [
  {
    name: "Reading & Listening",
    duration: "60-85 min",
    description: "Módulo combinado que evalúa comprensión lectora y auditiva con preguntas adaptativas.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    name: "Writing",
    duration: "45 min",
    description: "2 tareas: un email corto y un texto más largo (informe, propuesta o email formal).",
    icon: <Globe className="w-6 h-6" />
  },
  {
    name: "Speaking",
    duration: "15 min",
    description: "5 partes grabadas por ordenador: lectura en voz alta, respuestas cortas, turno largo y opinión.",
    icon: <Zap className="w-6 h-6" />
  }
];

const whoIsItFor = [
  "Profesionales que necesitan certificar su nivel rápidamente",
  "Candidatos a procesos de selección con requisito de inglés",
  "Estudiantes universitarios para acceso a masters",
  "Empresas que necesitan evaluar empleados",
  "Personas que necesitan un certificado urgente",
  "Organizaciones que requieren evaluaciones masivas"
];

const whatYouGet = [
  "Preparación específica para el formato online",
  "Práctica con simuladores oficiales Linguaskill",
  "Entrenamiento para Speaking grabado (sin examinador)",
  "Técnicas para el test adaptativo",
  "Curso intensivo de 4-8 semanas",
  "Flexibilidad: módulos por separado o completo",
  "Resultados en escala Cambridge (alineados con MCER)",
  "Posibilidad de repetir solo el módulo no superado"
];

const galleryImages = [
  { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg", alt: "Estudiantes con certificados Cambridge en Impulse English Academy" },
  { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-18.JPEG", alt: "Clase de inglés en Impulse English Academy La Vaguada Madrid" },
];

export default function LinguaskillPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title="Linguaskill | Centro Oficial Cambridge"
        description="Centro oficial Linguaskill en Madrid. Resultados en 48 horas. Preparación y examen. Academia Barrio del Pilar, junto a La Vaguada."
        keywords="linguaskill madrid, examen linguaskill, centro linguaskill oficial, linguaskill precio, linguaskill online"
        canonical="/examenes-cambridge/linguaskill"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-red-600 to-red-800 overflow-hidden">
        <div className="relative container mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Exámenes Cambridge', href: '/examenes-cambridge' },
                { label: 'Linguaskill' }
              ]}
              variant="light"
            />
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white/20 text-white text-lg font-bold px-4 py-2 rounded-lg">
                B1-C2
              </span>
              <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                Resultados en 48h
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Linguaskill
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              Examen online adaptativo con resultados en 48 horas
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formulario"
                className="bg-white text-zinc-900 font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 hover:bg-zinc-100"
              >
                Solicitar prueba de nivel
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+34604910611"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition-all text-center"
              >
                Llamar: +34 604 910 611
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Box - AI Quotable */}
      <section className="py-12 md:py-16 px-6 bg-white border-b border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-3">¿Qué es Linguaskill?</h2>
                <p className="text-zinc-700 leading-relaxed">
                  <strong>Linguaskill</strong> es el examen de inglés <strong>online adaptativo</strong> de <strong><a href="https://www.cambridgeenglish.org/es/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Cambridge Assessment English</a></strong>. El examen se adapta a tu nivel en tiempo real: las preguntas se vuelven más fáciles o difíciles según tus respuestas. Evalúa niveles <strong>B1 a C2</strong> del <a href="https://www.coe.int/es/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">MCER</a>. Resultados en <strong>48 horas</strong>. Reconocido por <strong>60+ países</strong> y por <strong><a href="https://www.crue.org/acreditacion-de-idiomas/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">CRUE en España</a></strong>. Los certificados <strong>no tienen fecha de caducidad</strong> establecida.
                </p>
                <p className="text-zinc-600 text-sm mt-3">
                  <a href="https://www.cambridgeenglish.org/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Más información en Cambridge English →</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats - AI Quotable - Based on Knowledge Base: linguaskill.md */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl text-center border border-zinc-100">
              <div className="text-3xl font-bold text-red-600 mb-1">48h</div>
              <div className="text-zinc-600 text-sm">Resultados</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border border-zinc-100">
              <div className="text-3xl font-bold text-red-600 mb-1">B1-C2</div>
              <div className="text-zinc-600 text-sm">Niveles evaluados</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border border-zinc-100">
              <div className="text-3xl font-bold text-red-600 mb-1">60+</div>
              <div className="text-zinc-600 text-sm">Países reconocen</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border border-zinc-100">
              <div className="text-3xl font-bold text-red-600 mb-1">~150€</div>
              <div className="text-zinc-600 text-sm">Precio completo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Comparison Table - AI Quotable */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Módulos de Linguaskill
            </h2>
            <p className="text-zinc-600 text-lg">
              Puedes realizar todos los módulos juntos o por separado según tus necesidades
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Módulo</th>
                  <th className="px-4 py-3 text-left font-semibold">Duración</th>
                  <th className="px-4 py-3 text-left font-semibold">Formato</th>
                  <th className="px-4 py-3 text-left font-semibold">Habilidades</th>
                  <th className="px-4 py-3 text-left font-semibold">Precio aprox.</th>
                </tr>
              </thead>
              <tbody>
                {moduleComparison.map((row, index) => (
                  <tr key={index} className={`border-b border-zinc-100 ${index === moduleComparison.length - 1 ? 'bg-red-50 font-medium' : 'hover:bg-zinc-50'}`}>
                    <td className="px-4 py-3 font-medium text-zinc-900">{row.modulo}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.duracion}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.formato}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.habilidades}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Linguaskill vs Others Comparison */}
      <section className="py-12 md:py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Linguaskill vs Cambridge vs APTIS
            </h2>
            <p className="text-zinc-600 text-lg">
              Comparativa de los principales exámenes de inglés en España
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-zinc-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Característica</th>
                  <th className="px-4 py-3 text-left font-semibold bg-red-600">Linguaskill</th>
                  <th className="px-4 py-3 text-left font-semibold">Cambridge</th>
                  <th className="px-4 py-3 text-left font-semibold">APTIS</th>
                </tr>
              </thead>
              <tbody>
                {examComparison.map((row, index) => (
                  <tr key={index} className="border-b border-zinc-100 hover:bg-zinc-50">
                    <td className="px-4 py-3 font-medium text-zinc-900">{row.caracteristica}</td>
                    <td className="px-4 py-3 text-red-600 font-medium bg-red-50">{row.linguaskill}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.cambridge}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.aptis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recommendation Box - Based on Knowledge Base: linguaskill.md lines 235-243 */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">¿Cuál elegir?</h3>
                <ul className="text-zinc-700 text-sm space-y-1">
                  <li>• <strong>Linguaskill</strong>: Necesitas certificado rápido (graduación, becas, trabajo). Prefieres examen online. Tu institución acepta Linguaskill.</li>
                  <li>• <strong>Cambridge tradicional</strong>: Quieres el certificado más reconocido mundialmente. No tienes prisa (puedes esperar 6-8 semanas). Prefieres examen presencial tradicional.</li>
                  <li>• <strong>APTIS</strong>: Económico y rápido, pero con menor reconocimiento internacional.</li>
                </ul>
                <p className="text-zinc-500 text-xs mt-3">*Los certificados Linguaskill no tienen fecha de caducidad establecida, aunque algunas instituciones pueden requerir antigüedad máxima.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-8 px-6 bg-white border-b border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="font-bold text-zinc-900 mb-4 text-lg">¿Dónde preparar Linguaskill en Madrid?</h3>
            <p className="text-zinc-700 text-sm mb-4">
              Nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-red-600 hover:underline font-medium">academia en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-red-600 hover:underline font-medium">La Vaguada</Link>, es centro oficial Linguaskill. Preparamos candidatos de <Link to="/academia-ingles-plaza-castilla" className="text-red-600 hover:underline font-medium">Plaza Castilla</Link>, <Link to="/academia-ingles-tetuan" className="text-red-600 hover:underline font-medium">Tetuán</Link> y <Link to="/academia-ingles-cuatro-torres" className="text-red-600 hover:underline font-medium">Cuatro Torres</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/ingles-la-vaguada/adultos" className="text-red-600 hover:underline text-sm">Cursos adultos</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/ingles-la-vaguada/particulares" className="text-red-600 hover:underline text-sm">Clases particulares</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/examenes-cambridge" className="text-red-600 hover:underline text-sm">Otros exámenes Cambridge</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/academias-ingles-madrid/por-barrios" className="text-red-600 hover:underline text-sm">Todas las ubicaciones</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the exam */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-blue mb-6">
                Sobre el examen
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Linguaskill es el examen online de Cambridge diseñado para el mundo actual. Es un test adaptativo que ajusta la dificultad según tus respuestas, proporcionando una evaluación precisa de tu nivel en menos tiempo. Con resultados disponibles en 48 horas, es la opción preferida por empresas y universidades que necesitan evaluar el nivel de inglés de forma rápida y fiable.
              </p>

              <div className="bg-zinc-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent-blue" />
                  <span className="text-lg font-bold text-zinc-900">
                    Duración total: ~2h 30min
                  </span>
                </div>
                <p className="text-zinc-600 text-sm">
                  El examen consta de 3 módulos que pueden realizarse juntos o por separado.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">¿Para quién es?</h3>
              <div className="space-y-3">
                {whoIsItFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Structure */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Estructura del examen
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Conoce cada parte del examen y cómo te preparamos para ella
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examParts.map((part, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                    {part.icon}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-bold text-zinc-900">{part.name}</h3>
                  </div>
                  <span className="text-sm text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full mb-3">
                    {part.duration}
                  </span>
                  <p className="text-zinc-600 text-sm">{part.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Nuestra preparación
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-12">
              Linguaskill tiene un formato único que requiere preparación específica. El test adaptativo significa que las preguntas se vuelven más difíciles o más fáciles según tus respuestas, buscando tu nivel exacto. El Speaking se graba por ordenador, lo que puede resultar extraño al principio. Nuestro curso te familiariza con estas particularidades y te entrena para maximizar tu puntuación en cada módulo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouGet.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Ambiente de aprendizaje
            </h2>
            <p className="text-zinc-600 text-lg">
              Instalaciones diseñadas para tu éxito
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`aspect-[4/3] rounded-xl overflow-hidden shadow-lg reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ${index > 0 ? 'delay-100' : ''}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Cómo preparamos Linguaskill
            </h2>
            <p className="text-zinc-600">
              Conoce nuestro método de preparación específico para este examen
            </p>
          </div>
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
            <LazyVideo
              videoId="Fdso-d9_F20"
              title="Preparación Linguaskill"
              className="shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Related Content Links */}
      <section className="py-12 px-6 bg-zinc-50 border-t border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
            Artículos relacionados sobre Linguaskill
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/linguaskill" className="bg-white p-4 rounded-lg border border-zinc-200 hover:border-red-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-zinc-900 mb-1">Guía completa de Linguaskill</h3>
              <p className="text-zinc-600 text-sm">Todo lo que necesitas saber sobre el examen</p>
            </Link>
            <Link to="/linguaskill/vs-aptis" className="bg-white p-4 rounded-lg border border-zinc-200 hover:border-red-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-zinc-900 mb-1">Linguaskill vs APTIS</h3>
              <p className="text-zinc-600 text-sm">Comparativa detallada de ambos exámenes</p>
            </Link>
            <Link to="/linguaskill/precio-reservar" className="bg-white p-4 rounded-lg border border-zinc-200 hover:border-red-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-zinc-900 mb-1">Precios y cómo reservar</h3>
              <p className="text-zinc-600 text-sm">Información actualizada de precios 2025</p>
            </Link>
            <Link to="/linguaskill/ejemplo-examen" className="bg-white p-4 rounded-lg border border-zinc-200 hover:border-red-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-zinc-900 mb-1">Ejemplos de examen</h3>
              <p className="text-zinc-600 text-sm">Muestras reales de las pruebas</p>
            </Link>
          </div>

          {/* External Authority Links */}
          <div className="mt-8 bg-white p-6 rounded-xl border border-zinc-200">
            <h3 className="font-bold text-zinc-900 mb-4">Recursos oficiales y referencias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <a
                href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                Cambridge English - Linguaskill oficial
              </a>
              <a
                href="https://www.crue.org/acreditacion-de-idiomas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                CRUE - Reconocimiento universitario en España
              </a>
              <a
                href="https://www.coe.int/es/web/common-european-framework-reference-languages"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                Consejo de Europa - Marco Común Europeo (MCER)
              </a>
              <a
                href="https://www.cambridgeenglish.org/es/test-your-english/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                Cambridge - Test de nivel gratuito
              </a>
              <a
                href="https://www.acles.es/216-tablas-de-certificados-reconocidos-por-acles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                ACLES - Tablas de certificados reconocidos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <FAQSection
        faqs={linguaskillFAQs}
        title="Preguntas frecuentes sobre Linguaskill"
      />

      {/* Lead Form */}
      <section id="formulario" className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="Prepárate para Linguaskill"
            subtitle="Solicita información y te hacemos una prueba de nivel gratuita"
            ctaText="Solicitar prueba de nivel"
            source="cambridge-linguaskill"
            showPhone={true}
            showLevel={true}
          />
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
