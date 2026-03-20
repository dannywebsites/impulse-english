import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, FileText, HelpCircle, ChevronDown, MapPin, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

const centrosFaqs = [
  {
    question: "¿Qué universidades aceptan Linguaskill?",
    answer: "Linguaskill es aceptado por más de 80 universidades españolas, incluidas públicas y privadas en Madrid, Andalucía y Cataluña, así como universidades a distancia como UNED, UOC, UDIMA, UNIR y VIU. También lo reconocen universidades internacionales en Canadá, Italia y China, facilitando acreditaciones académicas y laborales."
  }
];

const tableOfContents = [
  { id: 'que-es', title: 'Qué es Linguaskill y Por Qué Elegirlo' },
  { id: 'madrid', title: 'Centros Autorizados en Madrid' },
  { id: 'valencia', title: 'Centros Linguaskill en Valencia' },
  { id: 'zaragoza', title: 'Linguaskill en Zaragoza' },
  { id: 'faq', title: 'Preguntas Frecuentes (FAQ)' },
];

const faqs = [
  {
    question: '¿Cuánto cuesta el examen Linguaskill en Madrid, Valencia y Zaragoza?',
    answer: 'El precio del examen completo (4 módulos) oscila entre 130€ en Zaragoza y 145€ en Valencia, siendo Madrid el punto intermedio con 135€. Los centros permiten contratar módulos individuales desde 45€, ideal si solo necesitas certificar Reading & Listening para requisitos universitarios básicos. Algunos centros ofrecen descuentos del 10-15% para estudiantes con tarjeta universitaria válida.'
  },
  {
    question: '¿Qué documentación necesito para examinarme en un centro Linguaskill?',
    answer: 'Debes presentar DNI, NIE o pasaporte original en vigor el día del examen; no se aceptan documentos digitales ni fotocopias. El número de identificación aparecerá en tu certificado oficial y en el sistema de verificación online de Cambridge. Si tienes necesidades especiales de acceso (tiempo extra, software lector de pantalla), debes comunicarlo al centro al menos 15 días antes con justificación médica oficial.'
  },
  {
    question: '¿Puedo hacer el examen Linguaskill online desde casa en estas ciudades?',
    answer: 'Sí, todos los centros de Madrid, Valencia y Zaragoza ofrecen la modalidad online supervisada desde casa mediante software de proctoring remoto con vigilancia humana y monitorización por IA. Necesitas ordenador con webcam, micrófono, conexión estable de mínimo 10 Mbps y espacio privado sin interrupciones. El precio es el mismo que la modalidad presencial y los resultados tienen idéntica validez oficial.'
  },
  {
    question: '¿Cuánto tardan en entregar los resultados del examen Linguaskill?',
    answer: 'Los centros garantizan resultados en 48 horas laborables desde la realización del examen, entregados por email en formato PDF descargable. El certificado oficial físico tarda 5-7 días laborables adicionales si lo solicitas, aunque el digital tiene plena validez para todos los trámites académicos y profesionales en España. Puedes compartir resultados directamente con universidades mediante el portal de verificación de Cambridge.'
  },
  {
    question: '¿Los centros Linguaskill preparan para el examen o solo lo administran?',
    answer: 'La mayoría de centros ofrecen cursos de preparación específicos opcionales, pero no son obligatorios para realizar el examen. En Madrid, centros como ULIC Centre incluyen paquetes combinados de preparación + examen desde 245€. Los centros proporcionan gratuitamente materiales de familiarización con el formato y acceso a pruebas demo oficiales de Cambridge al confirmar la reserva del examen oficial.'
  },
];

export default function CentrosLinguaskillPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = generateArticleSchema({
    headline: "Centros Linguaskill en España: Dónde Realizar el Examen 2025",
    description: "Guía completa de centros autorizados Linguaskill en Madrid, Valencia, Zaragoza y otras ciudades españolas donde realizar el examen oficial.",
    url: `${businessInfo.url}/blog/centros-linguaskill`,
    datePublished: "2025-01-01"
  });

  return (
    <>
      <SEOHead
        title="Centros Linguaskill Madrid, Valencia, Zaragoza 2025 - Sedes Oficiales"
        description="Guía completa de centros autorizados Linguaskill en Madrid, Valencia y Zaragoza. Encuentra sedes oficiales, precios, modalidades presenciales y online para realizar el examen Cambridge."
        keywords="centros Linguaskill Madrid, sedes Linguaskill España, Linguaskill Valencia, Linguaskill Zaragoza, dónde hacer Linguaskill, centros examen Linguaskill, centros autorizados Linguaskill"
        canonical="/blog/centros-linguaskill"
        ogType="article"
      />
      <Navbar />

      <article>
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
            { label: 'Centros Linguaskill' }
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
                Centros Linguaskill Madrid, Valencia, Zaragoza | Guía 2025
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Descubre los centros autorizados Linguaskill en Madrid, Valencia y Zaragoza. Reserva tu examen oficial Cambridge con resultados en 48 horas. Guía actualizada 2025.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop"
              alt="Centros de examen Linguaskill en España"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>

        {/* Breadcrumb to Hub */}
        <div className="container mx-auto max-w-5xl px-6 mb-8">
          <Link
            to="/linguaskill/precios-fechas"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ← Volver a Linguaskill: Precios, Sedes y Servicios
          </Link>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-600" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-teal-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* FAQ Section - HIGH UP before main content */}
        <FAQSection faqs={centrosFaqs} title="Preguntas Frecuentes sobre Centros Linguaskill" />

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                ¿Necesitas certificar tu nivel de inglés rápidamente para la universidad, tu carrera profesional o un proceso de selección? Los centros de examen Linguaskill en Madrid, Valencia y Zaragoza ofrecen la solución más flexible y ágil del mercado. Según datos oficiales de Cambridge Assessment English, España cuenta con más de 25 centros autorizados que entregan resultados certificados en solo 48 horas, un plazo imposible de alcanzar con certificaciones tradicionales. Este artículo detalla qué centros están disponibles en estas tres ciudades, cómo funcionan y qué ventajas específicas ofrece cada uno para que elijas la opción más conveniente según tu ubicación y necesidades.
              </p>
            </section>

            {/* Section 1 */}
            <section id="que-es" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Qué es Linguaskill y Por Qué Elegirlo en 2025
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Linguaskill</a> es el examen de inglés computerizado de Cambridge Assessment English que evalúa niveles del A1 hasta C1+ del Marco Común Europeo de Referencia mediante tecnología adaptativa basada en inteligencia artificial. El sistema ajusta la dificultad de las preguntas en tiempo real según las respuestas del candidato, lo que permite obtener una medición precisa del nivel real en aproximadamente 90 minutos totales.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La prueba se divide en módulos independientes: Reading & Listening (combinados, 60-85 minutos), Writing (45 minutos) y Speaking (15 minutos). Esta estructura modular permite a universidades y empresas solicitar solo las destrezas que necesitan evaluar, reduciendo costes y tiempo. En 2025, más del 80% de las universidades españolas aceptan Linguaskill para acreditar requisitos de graduación, Erasmus y programas de máster, según la Conferencia de Rectores de las Universidades Españolas (CRUE).
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                A diferencia del IELTS o TOEFL, que tienen fechas fijas mensuales, Linguaskill permite agendar el examen cualquier día del año con solo 48 horas de antelación en la mayoría de centros. Los resultados se entregan digitalmente en un plazo de 48 horas, incluyendo un informe detallado por destrezas que facilita identificar áreas de mejora. El certificado no caduca y puede verificarse online permanentemente.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                La tecnología de reconocimiento de voz y análisis automático de escritura garantiza evaluaciones objetivas sin sesgos humanos. Esto ha convertido a Linguaskill en el test preferido para procesos de selección empresarial donde se requiere comparabilidad precisa entre candidatos.
              </p>
            </section>

            {/* Section 2: Madrid */}
            <section id="madrid" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-teal-600" />
                Centros Autorizados Linguaskill en Madrid
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Madrid concentra la mayor oferta de centros Linguaskill de España con 8 instituciones oficialmente autorizadas por Cambridge Assessment English. Los centros más destacados incluyen International House Madrid (C/ Zurbarán 8), que ofrece exámenes presenciales de lunes a sábado con franjas de 9:00 a 19:00 horas y precios desde 135€ para el examen completo de 4 módulos. IH Madrid permite reservar online con confirmación inmediata y dispone de salas equipadas con auriculares profesionales y conexión dedicada.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                ULIC Centre (C/ Orense 8) combina preparación intensiva con el examen oficial, ofreciendo paquetes desde 245€ que incluyen 10 horas de clase específica Linguaskill más el test. Este centro destaca por su especialización en candidatos que necesitan nivel B2 para oposiciones del sector público. EC Madrid, ubicado en Paseo de la Castellana, ofrece la modalidad online supervisada desde casa, ideal para profesionales con movilidad reducida o residentes fuera del centro urbano.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los centros madrileños procesan más de 3.000 exámenes anuales y garantizan fechas disponibles incluso en periodos de alta demanda como mayo-junio (graduaciones universitarias). La mayoría acepta pagos fraccionados para grupos de 5 o más candidatos, una ventaja para departamentos de recursos humanos que certifican equipos completos.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Una particularidad de Madrid es la disponibilidad de Linguaskill Business en todos los centros principales, la versión orientada a contextos corporativos con vocabulario específico de negocios, finanzas y management. Esta modalidad resulta especialmente valiosa para profesionales del sector financiero y comercial que buscan certificación para promociones internas.
              </p>
            </section>

            {/* Section 3: Valencia */}
            <section id="valencia" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-teal-600" />
                Centros Linguaskill en Valencia
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Valencia cuenta con 4 centros oficiales distribuidos estratégicamente entre el centro histórico y la zona universitaria. Lenguas Vivas Exams (Av. del Puerto 146) lidera la oferta valenciana con disponibilidad diaria de exámenes y resultados garantizados en 48 horas laborables. Sus instalaciones incluyen 12 puestos informáticos individualizados y personal bilingüe para resolver dudas administrativas, con un precio estándar de 145€ por examen completo.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Exams Levante (C/ Colón 32) se especializa en grupos universitarios y mantiene convenios con la Universidad de Valencia y la Universidad Politécnica para agilizar tramitaciones académicas. Ofrece descuentos del 15% para grupos de estudiantes de 10 o más personas, reduciendo el coste a 123€ por candidato. Este centro permite reservar el examen directamente desde el portal universitario, simplificando la gestión para coordinadores de movilidad internacional.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La ventaja diferencial de los centros valencianos es su integración con el ecosistema académico local. La mayoría de los resultados Linguaskill tramitados en Valencia se cargan automáticamente en las bases de datos universitarias en 72 horas, eliminando trámites burocráticos adicionales. Esto resulta especialmente útil para estudiantes que necesitan certificar nivel B1 para matricularse en asignaturas de segundo curso.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Todos los centros valencianos ofrecen simulacros gratuitos de 30 minutos dos veces al mes, permitiendo a los candidatos familiarizarse con la interfaz y el tipo de preguntas antes del examen oficial. Esta práctica ha demostrado reducir la ansiedad previa y mejorar los resultados en un promedio de 10 puntos sobre 180.
              </p>
            </section>

            {/* Section 4: Zaragoza */}
            <section id="zaragoza" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-teal-600" />
                Linguaskill en Zaragoza
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Zaragoza dispone de 3 centros autorizados que cubren tanto la capital como la provincia. Linguaskill Aragon (C/ San Vicente de Paúl 3) es el centro de referencia con capacidad para 20 exámenes simultáneos y flexibilidad horaria que incluye sábados por la mañana. Sus tarifas parten de 130€ para el examen completo, la más competitiva de las tres ciudades analizadas, y ofrecen paquetes corporativos para empresas que certifican plantillas completas con descuentos progresivos.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                B-EST Examinations Centre (Av. Cesaraugusto 92) destaca por su especialización en Linguaskill para procesos de oposición y acceso a cuerpos docentes. Mantiene actualizado un calendario específico con fechas recomendadas según convocatorias oficiales de la Comunidad Autónoma de Aragón, facilitando la planificación a opositores que deben presentar certificación en plazos concretos.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Una característica única de los centros zaragozanos es su colaboración con ESIC Zaragoza y la Universidad de Zaragoza (UNIZAR), que aceptan Linguaskill no solo para requisitos de graduación sino también como mérito puntuable en procesos de admisión a programas de máster. Esta doble utilidad maximiza el retorno de inversión del examen.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Los centros aragoneses han implementado en 2025 la posibilidad de reservar el examen mediante WhatsApp Business, reduciendo el tiempo de gestión a menos de 5 minutos. El sistema permite seleccionar fecha, hora y módulos deseados directamente desde el móvil, con confirmación automática y recordatorios 48 y 24 horas antes del examen.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-teal-600" />
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
                    {openFaq === index && (
                      <div className="px-6 pb-6 bg-zinc-50">
                        <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Conclusión: Elige tu Centro según Ubicación y Necesidades
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los centros Linguaskill en Madrid, Valencia y Zaragoza ofrecen flexibilidad, rapidez de resultados y reconocimiento oficial para todas tus necesidades de certificación en inglés. Madrid destaca por su amplitud de horarios y especialización en Linguaskill Business, Valencia por su integración universitaria y Zaragoza por sus tarifas competitivas y agilidad administrativa. Todos garantizan certificación Cambridge válida permanentemente con entrega en 48 horas.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Si buscas preparación intensiva antes del examen, nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-teal-600 hover:underline font-medium">academia en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-teal-600 hover:underline font-medium">La Vaguada</Link>, ofrece <Link to="/cursos-ingles/adultos" className="text-teal-600 hover:underline font-medium">cursos específicos para adultos</Link> que combinan metodología probada con simulacros del formato oficial <Link to="/linguaskill" className="text-teal-600 hover:underline font-medium">Linguaskill</Link>. También preparamos otros <Link to="/examenes-cambridge" className="text-teal-600 hover:underline font-medium">exámenes Cambridge</Link> como <Link to="/examenes-cambridge/b2-first" className="text-teal-600 hover:underline font-medium">B2 First</Link>.
              </p>
            </section>

          </div>


        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-800 mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Listo para certificar tu inglés?
                </h2>
                <p className="text-xl text-white/80">
                  Reserva tu clase gratuita y prepárate con expertos en Linguaskill.
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
              <Link
                to="/linguaskill/precios-fechas"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-teal-600 text-sm font-medium">Hub Principal</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Linguaskill: Precios, Sedes y Servicios</h3>
                <p className="text-zinc-600 text-sm mt-2">Guía completa de precios y sedes en España.</p>
              </Link>
              <Link
                to="/linguaskill/precios-fechas"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-teal-600 text-sm font-medium">Precios</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Precio Linguaskill y Reserva</h3>
                <p className="text-zinc-600 text-sm mt-2">Tarifas actualizadas y proceso de inscripción.</p>
              </Link>
              <Link
                to="/linguaskill"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-teal-600 text-sm font-medium">Online</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Linguaskill Online desde Casa</h3>
                <p className="text-zinc-600 text-sm mt-2">Cómo hacer el examen desde tu hogar.</p>
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
