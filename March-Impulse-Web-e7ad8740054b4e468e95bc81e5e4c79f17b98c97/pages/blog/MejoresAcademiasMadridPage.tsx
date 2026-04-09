import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, FileText, Euro, MapPin, ExternalLink, CheckCircle, Star, Users, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import Breadcrumb from '../../components/Breadcrumb';
import { blogImages } from '@/utils/images';

export const articleSchema = generateArticleSchema({
  headline: "Mejores Academias de Inglés en Madrid 2026: Guía Comparativa",
  description: "Guía comparativa de las mejores academias de inglés en Madrid 2026. Precios, metodologías, ubicaciones y opiniones. Encuentra la academia perfecta para ti.",
  url: `${businessInfo.url}/blog/mejores-academias-madrid`,
  image: "/images/academy/facilities/classroom-facilities-main-classroom.jpg",
  datePublished: "2026-01-15",
  dateModified: "2026-03-01"
});

const tableOfContents = [
  { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes' },
  { id: 'criterios', title: 'Criterios de Evaluación' },
  { id: 'tipos', title: 'Tipos de Academias en Madrid' },
  { id: 'objetivos', title: 'Qué Buscar Según tu Objetivo' },
  { id: 'precios', title: 'Rangos de Precios en Madrid' },
  { id: 'impulse', title: 'Por Qué Impulse English Academy' },
];

export const faqs: FAQItem[] = [
  {
    question: "¿Cuánto cuesta una academia de inglés en Madrid?",
    answer: "Los precios varían entre 45€/mes en academias económicas hasta 200€/mes para clases particulares premium. La media está en 70-100€/mes para grupos reducidos con profesores cualificados."
  },
  {
    question: "¿Cómo saber si una academia es buena?",
    answer: "Busca centros con profesores certificados (TEFL/CELTA), grupos reducidos, metodología comunicativa y resultados verificables como tasas de aprobados en exámenes oficiales."
  },
  {
    question: "¿Merece la pena una academia online o presencial?",
    answer: "Depende de tu estilo de aprendizaje. Las presenciales ofrecen mayor interacción y disciplina. Las online proporcionan flexibilidad. Muchas academias combinan ambas modalidades."
  },
  {
    question: "¿Qué certificación de inglés es mejor para mi currículum?",
    answer: "Cambridge (B2 First, C1 Advanced) es la más valorada por su validez ilimitada. Linguaskill es ideal para trámites universitarios rápidos. IELTS se prefiere para emigración."
  },
  {
    question: "¿Cuánto tiempo se tarda en subir un nivel de inglés?",
    answer: "Generalmente 6-9 meses de estudio regular (2-3 horas/semana). Cursos intensivos pueden reducir esto a 3-4 meses con mayor dedicación."
  }
];

const criterios = [
  { icon: Users, title: 'Profesores nativos/bilingües cualificados', desc: 'Certificaciones TEFL/CELTA obligatorias' },
  { icon: Users, title: 'Grupos reducidos', desc: 'Máximo 10-12 alumnos por clase' },
  { icon: Star, title: 'Metodología comunicativa moderna', desc: 'Enfoque práctico y conversacional' },
  { icon: Award, title: 'Preparación certificaciones oficiales', desc: 'Cambridge, Linguaskill y más' },
  { icon: Clock, title: 'Flexibilidad de horarios', desc: 'Adaptación a tu disponibilidad' },
  { icon: Euro, title: 'Relación calidad-precio', desc: 'Resultados proporcionales a la inversión' },
  { icon: CheckCircle, title: 'Opiniones verificadas de alumnos', desc: 'Experiencias reales y contrastables' },
];

export default function MejoresAcademiasMadridPage() {
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
            <img src={blogImages.mainClassroom.url} alt="Aula de academia de inglés en Madrid - Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
            items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Mejores Academias Madrid' }
            ]}
            variant="light"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                  Guía Comparativa
                </span>
                <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actualizado Marzo 2026
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Mejores Academias de Inglés en Madrid 2026: Guía Comparativa
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Madrid cuenta con cientos de academias de inglés, pero no todas ofrecen la misma calidad. Descubre cuáles destacan en metodología, profesorado, certificaciones y precios.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src={blogImages.mainClassroom.url}
              alt="Mejores academias de inglés en Madrid - comparativa 2026"
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
                Madrid cuenta con cientos de academias de inglés, pero no todas ofrecen la misma calidad. Hemos analizado factores como metodología, profesorado, certificaciones, precios y opiniones de alumnos para ayudarte a encontrar la mejor academia según tus necesidades. Ya sea que busques preparación para <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline">exámenes Cambridge</a>, <a href="/linguaskill/" className="text-emerald-600 hover:underline">Linguaskill</a>, o simplemente mejorar tu nivel de conversación, esta guía comparativa te ayudará a tomar la decisión correcta en 2026.
              </p>
            </section>

            {/* Price Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-white/80">Academias en Madrid</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">45-200€</div>
                <div className="text-white/80">Rango de precios/mes</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">7</div>
                <div className="text-white/80">Criterios de evaluación</div>
              </div>
            </div>

            {/* Section 1 - Criterios de Evaluación */}
            <section id="criterios" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué Hace Buena a una Academia de Inglés? Criterios de Evaluación
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Antes de comparar academias, es fundamental entender qué factores determinan la calidad de la enseñanza. No todas las academias son iguales, y el precio más alto no siempre garantiza mejores resultados. Estos son los siete criterios que hemos utilizado para evaluar las academias de inglés en Madrid:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {criterios.map((criterio, index) => (
                  <div key={index} className="bg-zinc-50 p-5 rounded-xl flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <criterio.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-zinc-900">{criterio.title}</h3>
                      <p className="text-zinc-600 text-sm mt-1">{criterio.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Dato clave:</strong> Según estudios del sector, las academias con grupos de máximo 10-12 alumnos consiguen tasas de aprobados un 35% superiores en exámenes oficiales Cambridge frente a centros con grupos de 20+ alumnos. La atención personalizada marca la diferencia en el aprendizaje de idiomas.
                </p>
              </div>
            </section>

            {/* Section 2 - Tipos de Academias */}
            <section id="tipos" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Tipos de Academias de Inglés en Madrid
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El panorama de academias de inglés en Madrid es diverso. Conocer los diferentes tipos te ayudará a elegir la opción más adecuada para tus necesidades y presupuesto.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold text-zinc-900 text-lg">Centros Oficiales Cambridge</h3>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Preparan y examinan con la máxima garantía. Son centros autorizados por Cambridge Assessment English para la preparación y/o administración de exámenes oficiales. Ofrecen la mayor fiabilidad en resultados y certificaciones reconocidas internacionalmente.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold text-zinc-900 text-lg">Academias Franquiciadas</h3>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Presencia nacional con metodología estandarizada. Cadenas como Opening, What's Up o Number 16 ofrecen un modelo probado y consistente en todas sus sedes. La calidad es predecible, aunque puede faltar el trato personalizado de centros independientes.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                      <Star className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold text-zinc-900 text-lg">Academias Independientes</h3>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Trato personalizado y grupos más reducidos. Las academias independientes suelen conocer a cada alumno por su nombre, adaptan los programas a necesidades específicas y crean un ambiente familiar que favorece el aprendizaje. Suelen tener mayor flexibilidad para personalizar el enfoque.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold text-zinc-900 text-lg">Plataformas Online</h3>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Flexibilidad total y precios competitivos. Desde plataformas automatizadas hasta clases en vivo con profesores altamente cualificados. Ideales para quienes necesitan horarios adaptables o residen lejos de centros presenciales. Los precios son generalmente más bajos al no tener costes de instalaciones.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 - Qué buscar según objetivo */}
            <section id="objetivos" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué Buscar Según tu Objetivo?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                No existe una "mejor academia" universal. La mejor opción depende de tus objetivos específicos. Aquí te orientamos según lo que necesitas conseguir:
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Para Certificación Cambridge
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Busca centros preparadores oficiales con alta tasa de aprobados. Los centros Cambridge Preparation Centre tienen acceso a materiales exclusivos y conocen a fondo el formato del examen. Pregunta siempre por su porcentaje de aprobados: los mejores centros superan el 90%. Considera opciones como <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline">B2 First</a> o <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline">B1 Preliminary</a> según tu nivel actual.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Para Conversación
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Prioriza academias con clases 100% en inglés y grupos reducidos. La práctica oral requiere tiempo de habla por alumno: en un grupo de 6, cada estudiante habla el doble que en uno de 12. Busca academias que utilicen metodología comunicativa donde la gramática se aprende en contexto, no mediante explicaciones teóricas.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-600" />
                    Para Niños
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Metodologías especializadas como Great Little People marcan la diferencia en edades tempranas. Las mejores academias para <a href="/cursos-ingles/infantil/" className="text-emerald-600 hover:underline">inglés infantil</a> y <a href="/cursos-ingles/primaria/" className="text-emerald-600 hover:underline">primaria</a> utilizan aprendizaje basado en juegos, canciones y actividades interactivas. Busca centros con profesores especializados en enseñanza infantil, no solo hablantes nativos.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    Para Profesionales
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Programas Business English con horarios flexibles son esenciales. Los profesionales necesitan academias que ofrezcan clases en horarios de mañana temprana, mediodía o noche. Busca centros con programas específicos para entornos corporativos, presentaciones, negociaciones y vocabulario sectorial. Las <a href="/cursos-ingles/particulares/" className="text-emerald-600 hover:underline">clases particulares</a> pueden ser la opción más eficiente si tu agenda es impredecible.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 - Rangos de Precios */}
            <section id="precios" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Euro className="w-8 h-8 text-emerald-600" />
                Rangos de Precios de Academias de Inglés en Madrid
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los precios de las academias de inglés en Madrid varían enormemente según la modalidad, el tamaño del grupo y los servicios incluidos. Esta es la realidad del mercado en 2026:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2">Academias Económicas</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">45-70€/mes</div>
                  <p className="text-zinc-600 text-sm">Grupos de 12-15 alumnos, materiales básicos incluidos. Profesores cualificados pero grupos más amplios. Ideal para presupuestos ajustados.</p>
                </div>

                <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2">Gama Media</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">70-120€/mes</div>
                  <p className="text-zinc-600 text-sm">Grupos reducidos de 8-12 alumnos, profesores certificados TEFL/CELTA, materiales completos y seguimiento personalizado. La mejor relación calidad-precio.</p>
                </div>

                <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2">Premium / Particulares</h3>
                  <div className="text-3xl font-bold text-amber-600 mb-2">120-200€/mes</div>
                  <p className="text-zinc-600 text-sm">Clases individuales o mini-grupos de 3-4 alumnos, horarios totalmente flexibles, programas 100% personalizados y atención exclusiva.</p>
                </div>

                <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2">Online</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">30-80€/mes</div>
                  <p className="text-zinc-600 text-sm">Desde plataformas automatizadas hasta clases en vivo. Flexibilidad horaria total, sin desplazamientos. Precios más competitivos al eliminar costes de instalaciones.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo:</strong> No te dejes guiar solo por el precio mensual. Calcula el coste por hora de clase y compara el tamaño de los grupos. Una academia de 120€/mes con 8 horas y 6 alumnos puede ser más rentable que una de 60€/mes con 4 horas y 15 alumnos. Consulta también nuestra guía de <a href="/academias-ingles-madrid/" className="text-emerald-600 hover:underline">academias de inglés baratas en Madrid</a> para más opciones económicas.
                </p>
              </div>
            </section>

            {/* Section 5 - Why Impulse */}
            <section id="impulse" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Impulse English Academy: Resultados que Hablan por Sí Solos
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                En un mercado con tantas opciones, los resultados verificables son lo que diferencia a las mejores academias. Impulse English Academy, ubicada en la zona de <a href="/academia-ingles-la-vaguada/" className="text-emerald-600 hover:underline">La Vaguada</a> y <a href="/academia-ingles-barrio-del-pilar/" className="text-emerald-600 hover:underline">Barrio del Pilar</a>, destaca por varios factores objetivos:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center">
                  <Award className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-zinc-900 mb-1">Centro Oficial Cambridge</h3>
                  <p className="text-zinc-600 text-sm">Cambridge Preparation Centre autorizado</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-zinc-900 mb-1">100% Aprobados</h3>
                  <p className="text-zinc-600 text-sm">B2 First 2024-2025</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center">
                  <Users className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-zinc-900 mb-1">Máx. 10 Alumnos</h3>
                  <p className="text-zinc-600 text-sm">Grupos reducidos garantizados</p>
                </div>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl my-8">
                <h3 className="font-bold text-zinc-900 text-lg mb-4">¿Por qué nos eligen nuestros alumnos?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600"><strong>Profesores certificados TEFL/CELTA</strong> con experiencia real en enseñanza comunicativa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600"><strong>Ubicación privilegiada</strong> en La Vaguada, Barrio del Pilar, accesible en metro y autobús</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600"><strong>Desde 75€/mes</strong> con cursos para <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">adultos</a>, <a href="/cursos-ingles/infantil/" className="text-emerald-600 hover:underline">niños</a>, <a href="/cursos-ingles/primaria/" className="text-emerald-600 hover:underline">primaria</a> y <a href="/cursos-ingles/secundaria/" className="text-emerald-600 hover:underline">secundaria</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600"><strong>Preparación especializada</strong> para <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline">exámenes Cambridge</a> y <a href="/linguaskill/" className="text-emerald-600 hover:underline">Linguaskill</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600"><strong>Seguimiento personalizado</strong> del progreso de cada alumno con informes regulares</span>
                  </li>
                </ul>
              </div>

              <p className="text-zinc-600 leading-relaxed">
                Si vives o trabajas en zonas cercanas como <a href="/academia-ingles-tetuan/" className="text-emerald-600 hover:underline">Tetuán</a>, <a href="/academia-ingles-plaza-castilla/" className="text-emerald-600 hover:underline">Plaza Castilla</a>, <a href="/academia-ingles-penagrande/" className="text-emerald-600 hover:underline">Peñagrande</a>, <a href="/academia-ingles-la-ventilla/" className="text-emerald-600 hover:underline">La Ventilla</a> o <a href="/academia-ingles-cuatro-torres/" className="text-emerald-600 hover:underline">Cuatro Torres</a>, Impulse English Academy está a pocos minutos. Nuestra ubicación en <a href="/academia-ingles-la-paz/" className="text-emerald-600 hover:underline">La Paz</a>, junto a La Vaguada, es accesible desde todo el norte de Madrid.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Conclusión: Cómo Elegir la Mejor Academia para Ti
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Elegir la mejor academia de inglés en Madrid requiere definir primero tus objetivos: ¿necesitas una certificación oficial, mejorar tu conversación o preparar a tus hijos? Una vez claro el objetivo, evalúa las academias según los siete criterios que hemos analizado, prestando especial atención al tamaño de los grupos, las cualificaciones del profesorado y los resultados verificables.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                No te conformes con promesas: pide datos concretos de tasas de aprobados, solicita una clase de prueba y habla con alumnos actuales. Las mejores academias no temen la transparencia, porque sus resultados hablan por ellos.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                En Impulse English Academy ofrecemos una prueba de nivel gratuita y sin compromiso para que compruebes por ti mismo nuestra metodología y el ambiente de nuestras clases. Con 100% de aprobados en Cambridge B2 First, estamos seguros de que los resultados te convencerán.
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
                  Has investigado, has comparado precios y metodologías, y ahora necesitas certezas. Necesitas saber que tu inversión en inglés va a dar resultados concretos: aprobar ese examen, conseguir esa certificación, acceder a esas oportunidades profesionales.
                </p>
                <p className="text-white/90 text-lg">
                  <strong>En Impulse English Academy no vendemos clases: vendemos transformación.</strong> Con 100% de aprobados en Cambridge B2 First, grupos de máximo 10 alumnos y profesores certificados TEFL/CELTA, los resultados están garantizados. Ven a comprobarlo.
                </p>
              </div>

              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Prueba de nivel gratuita y sin compromiso
                </h2>
                <p className="text-xl text-white/80">
                  Descubre tu nivel actual y recibe un plan personalizado para alcanzar tus objetivos.
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
              href="/academias-ingles-madrid/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Academias</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Academias de Inglés Baratas en Madrid</h3>
                <p className="text-zinc-600 text-sm mt-2">Opciones económicas desde 45€/mes.</p>
              </a>
              <a
              href="/examenes-cambridge/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Cambridge</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa de Exámenes Cambridge</h3>
                <p className="text-zinc-600 text-sm mt-2">Todo sobre certificaciones oficiales.</p>
              </a>
              <a
              href="/academias-ingles-madrid/por-barrios/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Ubicaciones</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Academias por Barrios de Madrid</h3>
                <p className="text-zinc-600 text-sm mt-2">Encuentra tu academia más cercana.</p>
              </a>
            </div>
          </div>
        </section>
      </article>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
