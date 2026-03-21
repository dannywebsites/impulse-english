import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, FileText, Euro, MapPin, ExternalLink } from 'lucide-react';
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
  headline: "Academias de Inglés Baratas en Madrid: Guía Completa 2025",
  description: "Compara las academias de inglés más económicas de Madrid. Precios desde 45€/mes, certificaciones oficiales Cambridge y metodologías probadas.",
  url: `${businessInfo.url}/academias-ingles-madrid`,
  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600",
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

const faqs = [
  {
    question: "¿Cuánto cuesta una academia de inglés al mes?",
    answer: "El coste mensual de una academia de inglés varía entre 50€ y 300€, según modalidad, intensidad y tipo de curso. Clases particulares cuestan entre 20-45€/hora. Impulse English ofrece cursos de adultos desde 79€ al mes con profesores titulados y grupos reducidos."
  },
  {
    question: "¿Cuánto cobran las clases particulares de inglés?",
    answer: "Las clases particulares de inglés cobran entre 10€ y 45€ por hora, variando según modalidad (presencial/online), experiencia del profesor y nivel requerido. Las clases online suelen ser un 25-40% más económicas manteniendo la misma calidad."
  },
  {
    question: "¿Es caro preparar Cambridge?",
    answer: "Preparar Cambridge implica costos desde 69€ (cursos grupales básicos) hasta más de 3.000€ en cursos intensivos premium, más tasas oficiales de examen entre 66€ y 230€. Aprovechar recursos gratuitos oficiales de Cambridge y grupos reducidos mejora la relación calidad-precio."
  },
  {
    question: "¿Cuánto cuesta academia inglés Madrid?",
    answer: "El coste promedio de una academia de inglés en Madrid varía entre 50€ y 300€ al mes según zona, metodología y servicios. Cursos intensivos de 90 horas rondan los 600-630€. Impulse English Academy ofrece desde 79€/mes con profesores titulados y grupos reducidos."
  },
  {
    question: "¿Academia o profesor particular?",
    answer: "La academia ofrece aprendizaje estructurado, socialización con compañeros, grupos reducidos homogéneos y metodología probada. El profesor particular brinda atención personalizada total, flexibilidad horaria completa y adaptación al ritmo individual. Combinar ambos maximiza resultados."
  },
  {
    question: "¿Presencial o online para aprender inglés?",
    answer: "Presencial ofrece estructura, concentración, interacción directa y corrección inmediata de pronunciación. Online aporta flexibilidad horaria, accesibilidad desde cualquier lugar y generalmente menor coste. En 2025/26 ambas modalidades igualan calidad gracias a avances tecnológicos y plataformas interactivas."
  },
  {
    question: '¿Qué certificaciones de inglés son oficiales en España?',
    answer: 'Las certificaciones de inglés oficiales en España están alineadas con el MCER y reconocidas por CRUE y <a href="https://www.acles.es/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">ACLES</a>. Cambridge English (B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency), Linguaskill y IELTS son aceptadas en universidades (exigen B1-B2 para títulos de Grado), oposiciones, empleo público y Policía Nacional (A2-B1 según escala). Cambridge English cuenta con reconocimiento de más de 25.000 instituciones globales y sus certificados no caducan, facilitando acceso universitario y profesional.'
  },
  {
    question: '¿Qué certificados de inglés son válidos para oposiciones?',
    answer: 'Los certificados de inglés válidos para oposiciones en España según el MCER incluyen Cambridge English (A2 Key, B1 Preliminary, B2 First), IELTS (puntuaciones 3.5-5.5) y TOEFL iBT (42-94 puntos). Cambridge English está ampliamente reconocido por la administración pública para oposiciones, concursos de traslados, másteres de profesorado y habilitación lingüística. La Policía Nacional 2025 exige A2 (Escala Básica) o B1 (Escala Ejecutiva). Cada convocatoria establece requisitos específicos.'
  },
  {
    question: '¿Cuál es el certificado de inglés más reconocido?',
    answer: 'Los certificados de inglés más reconocidos internacionalmente son Cambridge English y IELTS. Cambridge English cuenta con la confianza de más de 25.000 universidades, empleadores y gobiernos mundialmente, incluyendo empresas como Adidas, HSBC y Microsoft. IELTS es especialmente reconocido en Reino Unido, Australia, Canadá y Estados Unidos. Ambas certificaciones se basan en el MCER, no caducan y permiten verificación online de autenticidad para instituciones académicas y empleadores.'
  },
  {
    question: '¿Cuál es la certificación de inglés más prestigiosa?',
    answer: 'La certificación de inglés más prestigiosa es Cambridge English, respaldada por más de 25.000 universidades, empleadores y gobiernos mundialmente. Forma parte de la Universidad de Cambridge y cuenta con certificación ISO 9001:2008 en gestión de calidad. Más de 6,5 millones de personas realizan anualmente estos exámenes en 130 países. Las titulaciones están alineadas con el MCER y son aceptadas por universidades en Reino Unido, Estados Unidos, Australia y Canadá, además de empresas como Adidas, HSBC y Microsoft.'
  },
  {
    question: '¿Cuál es el certificado de enseñanza de inglés más reconocido?',
    answer: 'El certificado de enseñanza de inglés más reconocido es el CELTA (Certificate in English Language Teaching to Adults) de Cambridge English, exigido en tres de cada cuatro empleos docentes de inglés mundialmente. Permite comenzar a enseñar en cuatro semanas mediante prácticas docentes y está disponible en más de 350 centros autorizados. Otras titulaciones destacadas son TKT (evaluación modular de conocimientos) y DELTA (diploma avanzado para profesores experimentados).'
  },
  {
    question: '¿Cuál es la certificación de inglés más alta?',
    answer: 'La certificación de inglés más alta es el C2 Proficiency de Cambridge English, correspondiente al nivel C2 del MCER (Marco Común Europeo de Referencia para las Lenguas), el máximo nivel de dominio lingüístico. Esta certificación es reconocida por más de 25.000 universidades, empleadores y gobiernos mundialmente, siendo recomendada para estudios de posgrado y situaciones que requieren dominio avanzado del inglés. Está aceptada en instituciones prestigiosas de Reino Unido, Estados Unidos, Australia y Canadá.'
  },
  {
    question: 'Academia de inglés Madrid',
    answer: 'Las academias de inglés en Madrid ofrecen diversas opciones para 2025. British Council proporciona inglés británico oficial, preparación exámenes, desde €519/trimestre, 4 ubicaciones. Number 16 School enfoque conversación profesores titulados rotatorios, 3 sedes, horario lunes-viernes 8:00-22:00. Seif English Academy grupos reducidos garantía satisfacción, niveles A0/A1-C1, desde €139/mes, Gran Vía 50. International House Madrid 40+ años experiencia, enfoque comunicativo presencial/online, desde €172/mes, 4 ubicaciones. American Language Academy fundada 1968, cursos intensivos TOEFL/TOEIC/GRE/GMAT, desde €245/mes. Impulse English sede en La Vaguada €79/mes,. Escuela Inglesa 20+ años, clases presenciales/online orientadas carrera profesional. Varona\'s Institute programas inmersión certificación oficial.'
  },
  {
    question: '¿Cuáles son los mejores academias de inglés en Madrid?',
    answer: 'Las mejores academias de inglés en Madrid combinan metodologías especializadas, ubicaciones estratégicas y precios variados. British Council ofrece inglés británico certificaciones oficiales becas financiación países angloparlantes, desde €519/trimestre, 3 sucursales incluyendo Glorieta Quevedo 9. Number 16 School especializa speaking profesores titulados rotatorios múltiples acentos, 3 ubicaciones, lunes-viernes 8:00-21:30. Seif English Academy 30 años experiencia grupos reducidos 8 alumnos máximo garantía satisfacción reembolso, Gran Vía 50, desde €139/mes. International House Madrid 40+ años preparación Cambridge/IELTS cursos flexibles presenciales/online, desde €172/mes, 4 sedes. Impulse English desde €79/mes con sede en La vaguada, Barrio del Pilar'
  },
  {
    question: '¿Cuál es la mejor academia de inglés de España?',
    answer: 'La mejor academia de inglés en España varía según necesidades individuales: ubicación, metodología, presupuesto, modalidad presencial/online y objetivos específicos. British Council destaca inglés británico certificaciones oficiales becas extranjero desde €519/trimestre. International House Madrid 40+ años experiencia enfoque comunicativo Cambridge/IELTS presencial/online desde €172/mes. American Language Academy fundada 1968 Primer Premio Nacional Mejor Metodología metodología práctica TOEFL/TOEIC/GRE/GMAT desde €245/mes. Number 16 School especializa speaking profesores rotatorios múltiples acentos. Impulse English horarios personalizados, metodología conversación, flexibilidad horaria, preparación exámenes oficiales Cambridge.'
  },
  {
    question: '¿Cuánto cuesta de media una academia de inglés?',
    answer: 'El coste medio mensual de una academia de inglés en Madrid oscila entre 79-245 EUR según intensidad y modalidad. Los precios varían según frecuencia clases, duración, metodología, cualificación profesorado, preparación exámenes oficiales, modalidad presencial/online. El rango mayoritario sitúa precio medio mensual entre 130-172 EUR para cursos estándar, incrementándose significativamente en programas intensivos especializados preparación certificaciones Cambridge/IELTS/TOEFL.'
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
      <SEOHead
        title="Academias de Inglés Baratas en Madrid: 7 Opciones desde 45€/Mes - Guía 2025"
        description="Compara las academias de inglés más económicas de Madrid desde 45€/mes: precios, ubicaciones, certificaciones Cambridge, profesores nativos y grupos reducidos."
        keywords="academias inglés baratas madrid, academia inglés económica madrid, cursos inglés madrid precio, inglés barato madrid"
        canonical="/academias-ingles-madrid"
        ogType="article"
      />
      <Navbar />

      <article>
        {/* Hero Section */}
        <header className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blogs-impulse' },
                  { label: 'Academias Baratas Madrid' }
                ]}
                variant="light"
              />

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Academias Madrid
                </span>
                <span className="text-white/60 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Actualizado Diciembre 2024
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                Academias Baratas Madrid: 7 Opciones desde 45€/Mes [2025]
              </h1>

              <p className="text-xl text-white/90 font-light mb-8">
                Descubre las academias de inglés más económicas en Madrid con precios desde 45€/mes, profesores cualificados y preparación oficial Cambridge.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  8 min de lectura
                </span>
                <span className="flex items-center gap-2">
                  <Euro className="w-4 h-4" />
                  Precios actualizados
                </span>
              </div>
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
                El mercado de academias de inglés en Madrid ofrece opciones desde 45€ mensuales sin comprometer la calidad educativa. En 2025, la competencia entre centros ha generado promociones que permiten acceder a profesores certificados, grupos reducidos y metodologías comunicativas a precios antes impensables. Este artículo analiza las siete academias más económicas de Madrid, compara rangos de precios entre 45€ y 250€ mensuales, y proporciona estrategias concretas para maximizar tu inversión en formación lingüística. Si buscas opciones en zonas específicas como <Link to="/academia-ingles-barrio-del-pilar" className="text-emerald-600 hover:underline">Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-emerald-600 hover:underline">La Vaguada</Link> o <Link to="/academia-ingles-tetuan" className="text-emerald-600 hover:underline">Tetuán</Link>, tenemos academias en el norte de Madrid.
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
                <strong>Academias económicas tradicionales (64-250€/mes):</strong> Representan el equilibrio óptimo entre precio y servicios completos. Impulse English Academy comienza en 64€/mes (<Link to="/ingles-la-vaguada/infantil" className="text-emerald-600 hover:underline">inglés para niños</Link>), 71€/mes (primaria) y 79€/mes (<Link to="/ingles-la-vaguada/adultos" className="text-emerald-600 hover:underline">cursos de inglés para adultos</Link>) con clases presenciales y online en nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-emerald-600 hover:underline">academia en Barrio del Pilar</Link>. That's Fun parte de 69€ mensuales con dos sesiones semanales grupales, mientras Your Language Club desde 80€ con profesores certificados. Este rango incluye material didáctico, acceso a plataformas digitales complementarias y grupos reducidos de 6-10 estudiantes.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Cursos intensivos (229-329€/mes):</strong> Centros como IH Madrid o Idiomas Seif concentran 40 horas mensuales en programas acelerados. Un alumno completa un nivel MCER completo en 8-10 semanas versus 6-8 meses en formato regular. Aunque el desembolso mensual es mayor, el coste total para alcanzar B2 resulta comparable.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                <strong>Academias premium (+300€/mes):</strong> Ofrecen <Link to="/ingles-la-vaguada/particulares" className="text-emerald-600 hover:underline">clases particulares</Link>, horarios completamente personalizados y preparación especializada para <Link to="/examenes-cambridge/linguaskill" className="text-emerald-600 hover:underline">Linguaskill</Link> o IELTS. Este segmento representa menos del 15% del mercado madrileño y raramente resulta necesario para objetivos estándar de <Link to="/examenes-cambridge" className="text-emerald-600 hover:underline">exámenes Cambridge</Link>.
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
                Madrid ofrece academias de inglés desde 45€ mensuales con profesores certificados, grupos reducidos y metodologías probadas. Comparar entre Eco Idiomas, That's Fun y Your Language Club según ubicación y horarios disponibles maximiza la relación calidad-precio. Si buscas opciones en zonas como <Link to="/academia-ingles-penagrande" className="text-emerald-600 hover:underline">Peñagrande</Link>, <Link to="/academia-ingles-plaza-castilla" className="text-emerald-600 hover:underline">Plaza Castilla</Link> o <Link to="/academia-ingles-la-ventilla" className="text-emerald-600 hover:underline">La Ventilla</Link>, disponemos de academias cercanas en el norte de Madrid.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Contactar directamente vía teléfono revela promociones no publicadas y descuentos por contratación múltiple que reducen costes reales un 10-15%. Para quienes buscan flexibilidad total combinada con interacción real, las opciones híbridas representan alternativas cada vez más competitivas en 2025. Si necesitas <Link to="/academias-ingles-madrid/certificaciones" className="text-emerald-600 hover:underline">certificaciones oficiales de inglés</Link>, asegúrate de que la academia prepare para exámenes reconocidos.
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
              <Link
                to="/examenes-cambridge/guia-completa"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Cambridge</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa de Exámenes Cambridge</h3>
                <p className="text-zinc-600 text-sm mt-2">Todo sobre certificaciones oficiales.</p>
              </Link>
              <Link
                to="/linguaskill"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Linguaskill</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa de Linguaskill</h3>
                <p className="text-zinc-600 text-sm mt-2">Certificación rápida y flexible.</p>
              </Link>
              <Link
                to="/examenes-cambridge/b2-beneficios"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">B2 First</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Beneficios del Cambridge B2</h3>
                <p className="text-zinc-600 text-sm mt-2">Por qué obtener esta certificación.</p>
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
