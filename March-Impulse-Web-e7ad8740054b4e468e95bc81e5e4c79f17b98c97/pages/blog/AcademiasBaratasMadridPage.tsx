import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, FileText, Euro, MapPin, ExternalLink } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import Breadcrumb from '../../components/Breadcrumb';

export const articleSchema = generateArticleSchema({
  headline: "Academias de Inglés Baratas en Madrid: Guía Completa 2025",
  description: "Compara las academias de inglés más económicas de Madrid. Precios desde 45€/mes, certificaciones oficiales Cambridge y metodologías probadas.",
  url: `${businessInfo.url}/academias-ingles-madrid`,
  image: "/images/academy/classroom-facilities-main-classroom.jpg",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01"
});

const tableOfContents = [
  { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes' },
  { id: 'por-que', title: '¿Por Qué Elegir una Academia Barata?' },
  { id: 'precios', title: 'Rangos de Precios: Baratas vs Premium' },
  { id: 'academias', title: 'Las 7 Academias Más Baratas de Madrid' },
  { id: 'modalidades', title: 'Modalidades: Presencial, Online e Híbrido' },
];

export const faqs: FAQItem[] = [
  {
    question: "¿Cuál es la academia de inglés más económica de Madrid?",
    answer: "Papora ofrece el precio más bajo con 8,30€ mensuales mediante plataforma digital con lecciones interactivas automatizadas. Para clases con profesores reales, Eco Idiomas comienza en 45€ al mes con sesiones presenciales grupales en Chamartín, incluyendo material y acceso digital complementario."
  },
  {
    question: "¿Las academias baratas incluyen matrícula y materiales?",
    answer: "La mayoría cobra matrícula única de 30-60€ aunque Cambridge House y That's Fun la eliminan con promociones especiales. Los materiales generalmente se incluyen en formato digital; libros físicos cuestan 25-40€ adicionales si el alumno prefiere formato papel para estudio tradicional."
  },
  {
    question: "¿Puedo probar clases antes de contratar?",
    answer: "Your Language Club, The Bridge y Cambridge House ofrecen clase de prueba gratuita sin compromiso. Eco Idiomas permite asistir a primera sesión por 15€ descontables del primer mes. Esta práctica se ha generalizado en 2025 como estrategia para captar alumnos indecisos entre múltiples opciones."
  },
  {
    question: "¿Existen descuentos por contratar varios meses?",
    answer: "Idiomas Seif aplica 10% de descuento contratando 2 meses y 15% con 3 meses adelantados. That's Fun ofrece cuarto mes gratuito pagando trimestre completo. Los descuentos por recomendación aportan 10-15€ adicionales de reducción cuando amigos o familiares se inscriben mencionando tu nombre."
  },
  {
    question: "¿Las academias baratas preparan para exámenes oficiales Cambridge?",
    answer: "Your Language Club especializa en Cambridge con 94% de aprobados en First Certificate y Advanced. Cambridge House incluye preparación específica en cursos intensivos sin coste adicional. Eco Idiomas y That's Fun ofrecen módulos opcionales de preparación Cambridge por 20-30€ extra mensuales agregados al curso regular."
  }
];

const academias = [
  { name: 'Papora', price: '8,30€/mes', type: 'Online', description: 'Plataforma digital con lecciones interactivas' },
  { name: 'Eco Idiomas', price: '45€/mes', type: 'Presencial', description: 'Grupos de 8 alumnos en Chamartín' },
  { name: 'Impulse English Academy', price: '64€/mes', type: 'Presencial/Online', description: 'Infantil desde 64€, Primaria 71€, Adultos 79€. La Vaguada, Barrio del Pilar. 100% aprobados Cambridge', featured: true },
  { name: 'That\'s Fun', price: '69€/mes', type: 'Presencial', description: 'Metodología comunicativa en Carabanchel' },
  { name: 'Your Language Club', price: '80€/mes', type: 'Presencial', description: '94% éxito en Cambridge, Salamanca' },
  { name: 'Cambridge House Atocha', price: '95€/mes', type: 'Presencial', description: 'Grupos max 9 alumnos, pizarras digitales' },
  { name: 'Idiomas Seif', price: '229€/mes', type: 'Intensivo', description: '40 horas/mes, 30 años experiencia' },
];

export default function AcademiasBaratasMadridPage() {
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
            <img src="/images/academy/classroom-facilities-main-classroom.jpg" alt="Aula principal academia inglés Impulse English Academy Madrid" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
            items={[
            { label: 'Academias Baratas Madrid' }
            ]}
            variant="light"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                  Academias Madrid
                </span>
                <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actualizado Diciembre 2024
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Academias Baratas Madrid: 7 Opciones desde 45€/Mes [2025]
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Descubre las academias de inglés más económicas en Madrid con precios desde 45€/mes, profesores cualificados y preparación oficial Cambridge.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt="Academias de inglés baratas en Madrid"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-emerald-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* FAQ Section - Placed high up for SEO */}
        <div id="preguntas-frecuentes" className="scroll-mt-24">
          <FAQSection faqs={faqs} title="Preguntas Frecuentes" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                El mercado de academias de inglés en Madrid ofrece opciones desde 45€ mensuales sin comprometer la calidad educativa. En 2025, la competencia entre centros ha generado promociones que permiten acceder a profesores certificados, grupos reducidos y metodologías comunicativas a precios antes impensables. Este artículo analiza las siete academias más económicas de Madrid, compara rangos de precios entre 45€ y 250€ mensuales, y proporciona estrategias concretas para maximizar tu inversión en formación lingüística. Si buscas opciones en zonas específicas como <a href="/academia-ingles-barrio-del-pilar/" className="text-emerald-600 hover:underline">Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-emerald-600 hover:underline">La Vaguada</a> o <a href="/academia-ingles-tetuan/" className="text-emerald-600 hover:underline">Tetuán</a>, tenemos academias en el norte de Madrid.
              </p>
            </section>

            {/* Price Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">45€</div>
                <div className="text-white/80">Precio mínimo/mes</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-white/80">Academias en Madrid</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">78%</div>
                <div className="text-white/80">Profesores certificados</div>
              </div>

            </div>

            {/* Section 1 */}
            <section id="por-que" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                ¿Por Qué Elegir una Academia Barata de Inglés en Madrid?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las academias económicas en Madrid demuestran que precio bajo no significa calidad inferior: el 78% de centros con tarifas bajo 100€ mensuales emplea profesores certificados TEFL o CELTA. La demanda laboral de inglés ha aumentado un 34% desde 2023 en la Comunidad de Madrid, convirtiendo la formación lingüística en inversión prioritaria para profesionales y estudiantes con presupuestos ajustados.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La competencia entre más de 200 academias madrileñas ha democratizado el acceso a educación de calidad. Centros como Eco Idiomas y That's Fun ofrecen profesores cualificados desde 69€ mensuales, mientras plataformas como Papora proporcionan acceso flexible desde 8,30€ al mes. Esta diversificación permite encontrar soluciones adaptadas a cualquier restricción económica sin sacrificar resultados medibles.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Las promociones por contratación anticipada generan ahorros del 10-15% según datos de Idiomas Seif. Contratar tres meses adelantados reduce el coste mensual de 229€ a 195€ en cursos intensivos. Esta estrategia resulta especialmente efectiva entre septiembre y enero, cuando academias lanzan campañas para llenar grupos tras el periodo estival.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Dato clave:</strong> El formato online ha revolucionado la accesibilidad económica. Academias presenciales tradicionales ahora ofrecen alternativas virtuales un 30-40% más económicas manteniendo profesores reales e interacción en vivo, eliminando costes de instalaciones físicas que históricamente encarecían las tarifas.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="precios" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Rangos de Precios: Academias Baratas vs Premium en Madrid
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Segmento ultra-económico (8-65€/mes):</strong> Incluye plataformas digitales como Papora a 8,30€ mensuales y The Bridge desde 65€. Estas opciones priorizan flexibilidad horaria total y aprendizaje autogestionado con apoyo docente limitado. Resultan ideales para estudiantes disciplinados que complementan con práctica autónoma.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Academias económicas tradicionales (64-250€/mes):</strong> Representan el equilibrio óptimo entre precio y servicios completos. Impulse English Academy comienza en 64€/mes (<a href="/cursos-ingles/infantil/" className="text-emerald-600 hover:underline">inglés para niños</a>), 71€/mes (primaria) y 79€/mes (<a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">cursos de inglés para adultos</a>) con clases presenciales y online en nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-emerald-600 hover:underline">academia en Barrio del Pilar</a>. That's Fun parte de 69€ mensuales con dos sesiones semanales grupales, mientras Your Language Club desde 80€ con profesores certificados. Este rango incluye material didáctico, acceso a plataformas digitales complementarias y grupos reducidos de 6-10 estudiantes.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Cursos intensivos (229-329€/mes):</strong> Centros como IH Madrid o Idiomas Seif concentran 40 horas mensuales en programas acelerados. Un alumno completa un nivel MCER completo en 8-10 semanas versus 6-8 meses en formato regular. Aunque el desembolso mensual es mayor, el coste total para alcanzar B2 resulta comparable.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                <strong>Academias premium (+300€/mes):</strong> Ofrecen <a href="/cursos-ingles/particulares/" className="text-emerald-600 hover:underline">clases particulares</a>, horarios completamente personalizados y preparación especializada para <a href="/linguaskill/" className="text-emerald-600 hover:underline">Linguaskill</a> o IELTS. Este segmento representa menos del 15% del mercado madrileño y raramente resulta necesario para objetivos estándar de <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline">exámenes Cambridge</a>.
              </p>
            </section>

            {/* Section 3 - Academia List */}
            <section id="academias" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-emerald-600" />
                Las 7 Academias Más Baratas de Madrid: Comparativa 2025
              </h2>

              <div className="grid grid-cols-1 gap-4 my-8">
                {academias.map((academia: any, index) => (
                  <div key={index} className={`p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between ${academia.featured ? 'bg-emerald-50 border-2 border-emerald-400' : 'bg-zinc-50'}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center ${academia.featured ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                          {index + 1}
                        </span>
                        <h3 className="font-bold text-zinc-900 text-lg">{academia.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${academia.featured ? 'bg-emerald-200 text-emerald-800' : 'bg-zinc-200'}`}>{academia.type}</span>
                        {academia.featured && <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded font-bold">DESTACADO</span>}
                      </div>
                      <p className="text-zinc-600 text-sm ml-11">{academia.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 ml-11 md:ml-0">
                      <span className={`text-2xl font-bold ${academia.featured ? 'text-emerald-700' : 'text-emerald-600'}`}>{academia.price}</span>
                    </div>

                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="modalidades" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Modalidades de Aprendizaje: Presencial, Online e Híbrido
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Clases presenciales:</strong> Mantienen ventajas insustituibles para aprendizaje inicial: corrección fonética inmediata, dinámica grupal espontánea y compromiso horario estructurado. Las academias baratas madrileñas cobran 10-25€ por hora presencial en grupos de 6-10 personas, permitiendo interacción real con compañeros de nivel similar.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Online en directo:</strong> Ha madurado significativamente desde 2020, con plataformas como Zoom o Teams permitiendo grupos reducidos de 4-6 alumnos. Academias como Open English cobran 70-90€ mensuales por sesiones diarias de 30 minutos con profesores en vivo. Esta modalidad elimina desplazamientos y ahorra 5-8 horas mensuales de transporte.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Cursos híbridos:</strong> Combinan sesiones presenciales semanales (generalmente sábados) con práctica online diaria autogestionada. Cambridge House estructura programas donde alumnos asisten presencialmente para conversación intensiva y completan ejercicios gramaticales online durante la semana.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo:</strong> La flexibilidad horaria 24/7 del formato online beneficia especialmente a profesionales con turnos irregulares o responsabilidades familiares. Your Language Club reporta que el 42% de sus alumnos online conecta entre 22:00-23:30, franja imposible en formatos presenciales tradicionales.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Conclusión: Encuentra tu Academia Económica Ideal
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Madrid ofrece academias de inglés desde 45€ mensuales con profesores certificados, grupos reducidos y metodologías probadas. Comparar entre Eco Idiomas, That's Fun y Your Language Club según ubicación y horarios disponibles maximiza la relación calidad-precio. Si buscas opciones en zonas como <a href="/academia-ingles-penagrande/" className="text-emerald-600 hover:underline">Peñagrande</a>, <a href="/academia-ingles-plaza-castilla/" className="text-emerald-600 hover:underline">Plaza Castilla</a> o <a href="/academia-ingles-la-ventilla/" className="text-emerald-600 hover:underline">La Ventilla</a>, disponemos de academias cercanas en el norte de Madrid.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Contactar directamente vía teléfono revela promociones no publicadas y descuentos por contratación múltiple que reducen costes reales un 10-15%. Para quienes buscan flexibilidad total combinada con interacción real, las opciones híbridas representan alternativas cada vez más competitivas en 2025. Si necesitas <a href="/academias-ingles-madrid/certificaciones/" className="text-emerald-600 hover:underline">certificaciones oficiales de inglés</a>, asegúrate de que la academia prepare para exámenes reconocidos.
              </p>
            </section>

          </div>


        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Vision Statement */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-10 mb-10 border border-white/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  No buscas solo una academia. Buscas resultados reales.
                </h2>
                <p className="text-white/90 text-lg mb-4">
                  Entendemos tu situación: necesitas inglés para tu carrera, para esa promoción, para ese proyecto internacional, para esas oportunidades que se te escapan por no tener el nivel adecuado. Has comparado precios, has leído reseñas, pero lo que realmente necesitas es saber que vas a conseguir tu objetivo.
                </p>
                <p className="text-white/90 text-lg">
                  <strong>En Impulse English no vendemos clases: vendemos transformación.</strong> Sabemos dónde estás ahora y sabemos exactamente dónde necesitas llegar. Te llevaremos allí. Te motivaremos, te mantendremos comprometido, y abriremos esas puertas contigo. Con 100% de aprobados en Cambridge, los resultados hablan por nosotros.
                </p>
              </div>

              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Da el paso que cambiará tu carrera
                </h2>
                <p className="text-xl text-white/80">
                  Prueba de nivel gratuita. Sin compromiso. Solo el primer paso hacia tu transformación.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <LeadForm />
              </div>

            </div>
          </div>
        </section>

        {/* External Resources Section */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Recursos Oficiales de Cambridge</h2>
            <p className="text-zinc-600 mb-8">Consulta la información oficial de Cambridge Assessment English:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">Exámenes Cambridge</h3>
                  <p className="text-zinc-500 text-sm mt-1">Todos los exámenes disponibles</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/find-a-centre/find-an-exam-centre/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">Centros Examinadores</h3>
                  <p className="text-zinc-500 text-sm mt-1">Busca centros oficiales</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/learning-english/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">Learning English</h3>
                  <p className="text-zinc-500 text-sm mt-1">Recursos gratuitos</p>
                </div>
              </a>
              <a
                href="https://www.cambridgeenglish.org/test-your-english/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3 group"
              >
                <ExternalLink className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">Test Your English</h3>
                  <p className="text-zinc-500 text-sm mt-1">Prueba de nivel gratuita</p>
                </div>
              </a>
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
                <span className="text-emerald-600 text-sm font-medium">Cambridge</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa de Exámenes Cambridge</h3>
                <p className="text-zinc-600 text-sm mt-2">Todo sobre certificaciones oficiales.</p>
              </a>
              <a
              href="/linguaskill/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Linguaskill</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa de Linguaskill</h3>
                <p className="text-zinc-600 text-sm mt-2">Certificación rápida y flexible.</p>
              </a>
              <a
              href="/examenes-cambridge/b2-first/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">B2 First</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Beneficios del Cambridge B2</h3>
                <p className="text-zinc-600 text-sm mt-2">Por qué obtener esta certificación.</p>
              </a>
            </div>

          </div>
        </section>
      </article>

      {/* BOOKING-CTA */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Reserva tu clase de prueba gratuita</h2>
          <p className="text-white/90 mb-8">Sin compromiso. Conoce nuestra metodología y a nuestros profesores antes de decidir.</p>
          <a href="/reservar-clase/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-colors">Clase de prueba gratuita</a>
        </div>
      </section>
      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
