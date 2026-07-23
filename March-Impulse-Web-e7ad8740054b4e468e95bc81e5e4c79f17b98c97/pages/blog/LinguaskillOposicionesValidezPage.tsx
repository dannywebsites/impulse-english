import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Linguaskill Tiene Validez para Oposiciones? Guía Oficial",
    description: "Linguaskill es aceptado en oposiciones públicas en España con reconocimiento creciente. Descubre qué convocatorias lo aceptan y requisitos de nivel.",
    url: `${businessInfo.url}/blog/linguaskill-oposiciones-validez`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Linguaskill sirve para oposiciones de educación?",
      answer: "Sí, en la mayoría de comunidades autónomas Linguaskill es aceptado para acreditar el nivel de idiomas en oposiciones de educación (maestros y profesores de secundaria). Generalmente se exige B2 para docentes de primaria y B2-C1 para secundaria. Sin embargo, cada convocatoria autonómica establece sus propias certificaciones aceptadas, por lo que debes verificar las bases específicas."
    }

  ,
    {
      question: "¿Qué nivel de Linguaskill necesito para oposiciones?",
      answer: "Depende del cuerpo y la convocatoria. Para la mayoría de oposiciones de grupo A1 y A2 se exige B2 (puntuación Linguaskill 160-179). Para algunas oposiciones que requieren C1, necesitas una puntuación de 180 o superior. Para grupos C1 y C2, el requisito suele ser B1 (140-159). Verifica siempre las bases de la convocatoria específica."
    },
    {
      question: "¿Cuánto tarda Cambridge en emitir el certificado Linguaskill?",
      answer: "Los resultados de Linguaskill están disponibles en un máximo de 48 horas tras la realización del examen. El certificado oficial descargable se genera automáticamente y puede imprimirse inmediatamente. Esta rapidez es una gran ventaja frente a otros exámenes que tardan semanas en emitir resultados, especialmente cuando tienes un plazo de presentación cercano."
    },
    {
      question: "¿El certificado Linguaskill tiene fecha de caducidad para oposiciones?",
      answer: "El certificado Linguaskill de Cambridge no tiene fecha de caducidad oficial. Sin embargo, algunas convocatorias de oposiciones pueden establecer una antigüedad máxima para las certificaciones presentadas (generalmente 2-4 años). Revisa siempre las bases de la convocatoria para verificar si existe esta limitación temporal."
    },
    {
      question: "¿Puedo presentar Linguaskill en oposiciones del Estado (AGE)?",
      answer: "Sí, Linguaskill es generalmente aceptado en oposiciones de la Administración General del Estado como certificación de nivel de idiomas. Las convocatorias estatales suelen aceptar las certificaciones reconocidas por ACLES y la tabla de equivalencias de la CRUE, donde Linguaskill está incluido. Verifica las bases específicas de cada proceso selectivo."
    }
  ];

export default function LinguaskillOposicionesValidezPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/technology-based-classroom-photo.jpg" alt="Linguaskill validez oposiciones España función pública" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Linguaskill Oposiciones Validez' }
                ]}
                variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Actualizado: Marzo 2026
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  ¿Linguaskill Tiene Validez para Oposiciones? Guía Oficial
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Linguaskill es un examen multinivel online de Cambridge con certificación oficial reconocida. Su validez para oposiciones en 2025/26 crece gracias a resultados en 48 horas.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-amber-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#validez" className="text-amber-600 hover:text-amber-700 transition-colors">→ Validez Oficial de Linguaskill para Oposiciones</a></li>
                <li><a href="#convocatorias" className="text-amber-600 hover:text-amber-700 transition-colors">→ Convocatorias que Aceptan Linguaskill</a></li>
                <li><a href="#niveles" className="text-amber-600 hover:text-amber-700 transition-colors">→ Niveles Requeridos por Tipo de Oposición</a></li>
                <li><a href="#ventajas" className="text-amber-600 hover:text-amber-700 transition-colors">→ Ventajas de Linguaskill para Opositores</a></li>
                <li><a href="#presentar" className="text-amber-600 hover:text-amber-700 transition-colors">→ Cómo Presentar el Certificado</a></li>
                <li><a href="#faq" className="text-amber-600 hover:text-amber-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si estás preparando oposiciones y necesitas acreditar tu nivel de inglés, <a href="/linguaskill/" className="text-amber-600 hover:underline font-medium">Linguaskill de Cambridge</a> es una de las opciones más eficientes del mercado. Con resultados en <strong>48 horas</strong>, formato 100% online y respaldo oficial de Cambridge Assessment English, cada vez más opositores eligen Linguaskill para certificar su nivel de idiomas. En esta guía analizamos su validez actual para oposiciones públicas en España, qué convocatorias lo aceptan y cómo aprovecharlo al máximo en tu proceso selectivo.
            </p>

            {/* Section 1 */}
            <section id="validez" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Validez Oficial de Linguaskill para Oposiciones
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La validez de <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Linguaskill</a> para oposiciones públicas en España se sustenta en varios pilares oficiales:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Respaldo institucional
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Emitido por Cambridge Assessment English</li>
                    <li>• Reconocido por la CRUE y tabla de equivalencias</li>
                    <li>• Alineado con el MCER (Marco Común Europeo)</li>
                    <li>• Certificado verificable online con código único</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Marco regulatorio
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Incluido en las tablas de ACLES</li>
                    <li>• Reconocido por múltiples CC.AA.</li>
                    <li>• Aceptado en convocatorias estatales (AGE)</li>
                    <li>• Compatible con normativa de función pública</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Es importante entender que en España, cada convocatoria de oposiciones establece en sus bases qué certificaciones de idiomas acepta. Aunque Linguaskill goza de reconocimiento generalizado, la aceptación final depende de las bases específicas de cada proceso selectivo. Las administraciones suelen aceptar certificaciones emitidas por entidades incluidas en la tabla de la CRUE o reconocidas por ACLES.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Recomendación clave:</strong> Antes de inscribirte en Linguaskill con el objetivo de presentarlo en oposiciones, lee detenidamente las bases de la convocatoria específica para confirmar que aceptan certificaciones de Cambridge Assessment English y, en particular, Linguaskill. Las bases suelen publicarse en el BOE o en los boletines oficiales autonómicos.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="convocatorias" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Convocatorias que Aceptan Linguaskill
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Linguaskill es aceptado en un número creciente de convocatorias de oposiciones en España. A continuación, los principales ámbitos donde se reconoce:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Oposiciones de Educación
                  </h3>
                  <p className="text-gray-700 mb-3">Las oposiciones docentes son uno de los ámbitos con mayor demanda de acreditación de idiomas:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Maestros de Educación Primaria:</strong> B2 requerido para habilitación lingüística</li>
                    <li>• <strong>Profesores de Secundaria:</strong> B2-C1 según comunidad autónoma</li>
                    <li>• <strong>Profesores de Escuela Oficial de Idiomas:</strong> C1-C2 según especialidad</li>
                    <li>• <strong>Interinos y bolsas de trabajo docente:</strong> B2 mínimo para méritos lingüísticos</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Administración General del Estado (AGE)
                  </h3>
                  <p className="text-gray-700 mb-3">Las oposiciones estatales suelen aceptar Linguaskill para acreditar idiomas:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Cuerpo Superior de Administradores Civiles:</strong> Valoración de idiomas como mérito</li>
                    <li>• <strong>Técnicos de la Administración:</strong> B2 como mérito o requisito</li>
                    <li>• <strong>Cuerpo de Gestión:</strong> Idiomas como mérito valorable</li>
                    <li>• <strong>Funcionarios de Organismos Internacionales:</strong> C1 generalmente requerido</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Administración Autonómica y Local
                  </h3>
                  <p className="text-gray-700 mb-3">Las comunidades autónomas tienen sus propias políticas de reconocimiento:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Comunidad de Madrid:</strong> Acepta certificaciones de Cambridge</li>
                    <li>• <strong>Andalucía:</strong> Reconocimiento de certificaciones ACLES</li>
                    <li>• <strong>Cataluña:</strong> Aceptación de certificaciones CRUE</li>
                    <li>• <strong>Comunidad Valenciana, País Vasco, Galicia:</strong> Reconocimiento variable según convocatoria</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Fuerzas y Cuerpos de Seguridad
                  </h3>
                  <p className="text-gray-700">Policía Nacional, Guardia Civil y policías autonómicas valoran cada vez más la acreditación de idiomas. Linguaskill puede servir como mérito en estas convocatorias. Para acceso a unidades especializadas con componente internacional (Europol, Interpol, misiones internacionales), un nivel B2-C1 acreditado puede marcar la diferencia.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Tendencia al alza:</strong> En las últimas convocatorias de 2024/2025, se ha observado un incremento significativo en el número de procesos selectivos que incluyen Linguaskill entre las certificaciones aceptadas. La tendencia para 2026 es de mayor aceptación aún.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="niveles" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Niveles Requeridos por Tipo de Oposición
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los requisitos de nivel de inglés varían según el cuerpo, escala y grupo de la oposición. Esta tabla resume las equivalencias más comunes entre grupos de oposiciones y niveles Linguaskill:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-amber-500 to-amber-700 text-white">
                      <th className="text-left p-4 font-semibold">Tipo de Oposición</th>
                      <th className="text-left p-4 font-semibold">Nivel MCER</th>
                      <th className="text-left p-4 font-semibold">Puntuación Linguaskill</th>
                      <th className="text-left p-4 font-semibold">Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Grupo C1/C2</td>
                      <td className="p-4 text-gray-700">B1</td>
                      <td className="p-4 text-gray-700">140-159</td>
                      <td className="p-4 text-gray-700 text-sm">Mérito</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Grupo A2 (Gestión)</td>
                      <td className="p-4 text-gray-700">B2</td>
                      <td className="p-4 text-gray-700">160-179</td>
                      <td className="p-4 text-gray-700 text-sm">Mérito/Requisito</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Grupo A1 (Superior)</td>
                      <td className="p-4 text-gray-700">B2-C1</td>
                      <td className="p-4 text-gray-700">160-199</td>
                      <td className="p-4 text-gray-700 text-sm">Requisito frecuente</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Docentes (Primaria)</td>
                      <td className="p-4 text-gray-700">B2</td>
                      <td className="p-4 text-gray-700">160-179</td>
                      <td className="p-4 text-gray-700 text-sm">Habilitación lingüística</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Docentes (Secundaria)</td>
                      <td className="p-4 text-gray-700">B2-C1</td>
                      <td className="p-4 text-gray-700">160-199</td>
                      <td className="p-4 text-gray-700 text-sm">Habilitación/Mérito</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Carrera diplomática</td>
                      <td className="p-4 text-gray-700">C1</td>
                      <td className="p-4 text-gray-700">180+</td>
                      <td className="p-4 text-gray-700 text-sm">Requisito</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo para opositores:</strong> Si tienes dudas sobre el nivel requerido, apunta al nivel inmediatamente superior. Obtener un B2 cuando solo necesitas B1 te da margen de seguridad y puede sumar puntos adicionales como mérito. Linguaskill certifica tu nivel real, así que prepárate para obtener la mejor puntuación posible.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="ventajas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ventajas de Linguaskill para Opositores
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Linguaskill ofrece ventajas específicas que lo convierten en la certificación ideal para opositores que necesitan acreditar su nivel de inglés de forma rápida y eficiente:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-600" />
                    Ventajas prácticas
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Resultados en 48 horas:</strong> Ideal para plazos de entrega ajustados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Fechas frecuentes:</strong> Puedes elegir entre múltiples fechas mensuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Desde casa:</strong> Sin desplazamientos que interrumpan tu estudio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Precio accesible:</strong> Más económico que Cambridge tradicional</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-600" />
                    Ventajas estratégicas
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Sin suspenso:</strong> Certifica tu nivel real sin riesgo de perder la inversión</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Repetible:</strong> Puedes repetirlo para mejorar tu puntuación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Sello Cambridge:</strong> Máximo prestigio en certificación de idiomas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Verificable online:</strong> Las administraciones pueden verificar su autenticidad</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Para un opositor, el tiempo es el recurso más valioso. Linguaskill permite obtener la certificación de idiomas en cuestión de días, no meses, lo que significa que puedes planificar tu estrategia de méritos con mayor flexibilidad. Si una convocatoria se publica con un plazo de presentación corto, Linguaskill te permite reaccionar rápidamente.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Escenario común:</strong> Un opositor descubre que una convocatoria valora el B2 de inglés con 2 puntos adicionales en la fase de méritos. Con Linguaskill, puede inscribirse, realizar el examen y tener el certificado listo en menos de una semana, a tiempo para el plazo de presentación.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="presentar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Presentar el Certificado en Oposiciones
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Una vez obtenido tu certificado Linguaskill, el proceso para presentarlo en las oposiciones requiere atención a algunos detalles importantes:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    1. Obtén el certificado oficial
                  </h3>
                  <p className="text-gray-700">Tras realizar el examen, recibirás un informe de resultados online en 48 horas. Este documento incluye tu puntuación, nivel MCER certificado y un código QR de verificación. Descarga el PDF oficial y guárdalo. Este es el documento que presentarás como acreditación de nivel.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    2. Verifica las bases de la convocatoria
                  </h3>
                  <p className="text-gray-700">Lee atentamente el apartado de "Acreditación de idiomas" o "Méritos" de las bases. Busca si mencionan específicamente "Cambridge", "Linguaskill", "certificaciones ACLES", "tabla CRUE" o "Marco Común Europeo de Referencia". Si la convocatoria lista certificaciones específicas aceptadas, confirma que Linguaskill está entre ellas.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    3. Presenta la documentación
                  </h3>
                  <p className="text-gray-700">Generalmente necesitarás presentar: copia del certificado oficial Linguaskill (PDF descargado), copia compulsada si la convocatoria lo requiere, y en algunos casos, el número de verificación online para que la administración pueda comprobar la autenticidad. Respeta siempre el formato de presentación que indiquen las bases.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    4. Conserva el comprobante de inscripción
                  </h3>
                  <p className="text-gray-700">Guarda el recibo de inscripción y pago del examen, así como cualquier comunicación con el centro examinador. Estos documentos pueden servir como respaldo adicional ante la administración convocante si surgiera cualquier duda sobre la validez o autenticidad de tu certificación.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Ante la duda, consulta:</strong> Si no estás seguro de que la convocatoria acepte Linguaskill, contacta con el órgano convocante (ministerio, consejería o ayuntamiento) antes de inscribirte al examen. Es preferible invertir 5 minutos en una llamada que descubrir después que necesitabas otra certificación.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Linguaskill es una opción cada vez más válida y popular para acreditar idiomas en oposiciones públicas en España.</strong> Su rapidez de resultados, formato flexible, precio accesible y el respaldo de Cambridge lo convierten en una herramienta estratégica para opositores que necesitan certificar su nivel de inglés de forma eficiente. La tendencia en 2025/26 es de mayor aceptación por parte de las administraciones públicas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/linguaskill/" className="text-amber-600 hover:underline font-medium">Impulse English Academy</a> te preparamos específicamente para Linguaskill con simulacros reales y estrategias probadas. Consulta nuestra información sobre el <a href="/blog/certificado-linguaskill/" className="text-amber-600 hover:underline font-medium">certificado Linguaskill</a> y los <a href="/linguaskill/precios-fechas/" className="text-amber-600 hover:underline font-medium">precios y fechas disponibles</a> para planificar tu certificación. No dejes que la acreditación de idiomas sea un obstáculo en tu camino hacia la plaza.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/linguaskill-oposiciones-validez" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/linguaskill/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Linguaskill: Toda la Información
                  </h3>
                  <p className="text-gray-600 text-sm">Guía completa del examen Linguaskill de Cambridge.</p>
                </a>
                <a href="/blog/certificado-linguaskill/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Certificado Linguaskill
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el certificado oficial y su validez.</p>
                </a>
                <a href="/linguaskill/precios-fechas/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Precios y Fechas Linguaskill
                  </h3>
                  <p className="text-gray-600 text-sm">Consulta las próximas convocatorias y precios actualizados.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/linguaskill-oposiciones-validez" />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Linguaskill oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
