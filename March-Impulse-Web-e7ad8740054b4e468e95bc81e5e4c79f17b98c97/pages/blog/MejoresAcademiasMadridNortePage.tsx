import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, ChevronDown, Award, Star, ArrowRight, MapPin, CheckCircle, MessageCircle, Users, Globe } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { NAP } from '../../utils/napData';

export const articleSchema = generateArticleSchema({
  headline: "Las 8 Mejores Academias de Inglés en Madrid Norte (2026)",
  description: "Guía actualizada de las mejores academias de inglés en Madrid Norte 2026. Comparativa de precios, metodologías, opiniones y ubicaciones en Barrio del Pilar, Montecarmelo, Las Tablas y Mirasierra.",
  url: `${businessInfo.url}/blog/mejores-academias-madrid-norte`,
  image: "/images/academy/classroom-facilities-main-classroom.jpg",
  datePublished: "2026-03-24"
});

export const faqs: FAQItem[] = [
  {
    question: "¿Cuál es la mejor academia de inglés en Madrid Norte?",
    answer: "Impulse English Academy es la academia mejor valorada de Madrid Norte. Es Centro Oficial de Preparación Cambridge con un 100% de aprobados en B2 First en 2024/2025, grupos reducidos de máximo 10 alumnos y una valoración de 5 estrellas en Google con más de 150 reseñas."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés en Madrid Norte?",
    answer: "Los precios en Madrid Norte varían según el tipo de academia. Las clases particulares oscilan entre 64-79€/mes en academias como Impulse. Las Escuelas Oficiales de Idiomas (EOI) cuestan unos 188€/año. Las cadenas premium como Wall Street English pueden costar entre 100-200€/mes."
  },
  {
    question: "¿Hay academias de inglés para niños en Madrid Norte?",
    answer: "Sí. Impulse English Academy ofrece el método Great Little People para niños desde 2 años, además de cursos de primaria y secundaria. Kids&Us La Vaguada está especializada exclusivamente en niños con su metodología Natural English."
  },
  {
    question: "¿Qué certificaciones se pueden preparar en Madrid Norte?",
    answer: "En Madrid Norte se pueden preparar certificaciones Cambridge desde Pre-A1 Starters hasta C2 Proficiency, además de Linguaskill e IELTS. Impulse English Academy es centro oficial de preparación Cambridge y centro oficial Linguaskill."
  },
  {
    question: "¿Hay academias con horarios de mañana en zona norte?",
    answer: "Sí. Impulse English Academy ofrece clases en horario de mañana, además de tarde y noche, para adaptarse a las necesidades de profesionales, estudiantes universitarios y otros perfiles con horarios diversos."
  },
  {
    question: "¿Qué barrios cubre Madrid Norte?",
    answer: "Madrid Norte incluye barrios como Barrio del Pilar, Mirasierra, Montecarmelo, Las Tablas, Fuencarral, Tetuán, Plaza Castilla, Peñagrande, La Ventilla, La Vaguada y Cuatro Torres, entre otros."
  }
];

const tableOfContents = [
  { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes' },
  { id: 'criterios', title: 'Criterios de Evaluación' },
  { id: 'academias', title: 'Las 8 Mejores Academias' },
  { id: 'precios', title: 'Comparativa de Precios' },
  { id: 'impulse', title: 'Por Qué Impulse English Academy' },
  { id: 'conclusion', title: 'Conclusión' },
];

const criterios = [
  { icon: Users, title: 'Profesores cualificados', desc: 'Certificaciones TEFL/CELTA y experiencia real' },
  { icon: Users, title: 'Grupos reducidos', desc: 'Máximo 10-12 alumnos por clase' },
  { icon: Star, title: 'Metodología comunicativa moderna', desc: 'Enfoque práctico y conversacional' },
  { icon: Award, title: 'Certificaciones oficiales', desc: 'Cambridge, Linguaskill, IELTS' },
  { icon: Clock, title: 'Flexibilidad horaria', desc: 'Mañana, tarde y noche' },
  { icon: Globe, title: 'Relación calidad-precio', desc: 'Resultados proporcionales a la inversión' },
  { icon: CheckCircle, title: 'Opiniones verificadas', desc: 'Experiencias reales en Google' },
];

const academies = [
  {
    rank: 1,
    name: "Impulse English Academy",
    address: "Av. de El Ferrol, 22, 28029 Madrid",
    neighborhood: "Barrio del Pilar / La Vaguada",
    rating: "5.0",
    reviewCount: "150+",
    price: "64-79€/mes",
    highlights: ["Centro Oficial Cambridge", "100% aprobados B2 First 24/25", "Grupos máx. 10 alumnos", "Great Little People (desde 2 años)", "Linguaskill oficial"],
    website: "/",
    isInternal: true,
    description: "La academia mejor valorada de Madrid Norte. Centro oficial de preparación Cambridge con un 100% de aprobados en B2 First en 2024/2025. Grupos reducidos de máximo 10 alumnos, profesores altamente cualificados y metodología comunicativa. Ofrecen clases para todas las edades desde 2 años (método Great Little People) hasta adultos. También centro oficial Linguaskill."
  },
  {
    rank: 2,
    name: "Kids&Us La Vaguada",
    address: "Plaza de Arteijo, 9, Local 7, 28029 Madrid",
    neighborhood: "Barrio del Pilar",
    rating: "4.7",
    reviewCount: "",
    price: "Consultar",
    highlights: ["Metodología Natural English", "Grupos reducidos", "Especialistas en niños"],
    website: "https://www.kidsandus.es",
    isInternal: false,
    description: "Academia especializada exclusivamente en niños y adolescentes con su metodología propia 'Natural English', basada en el proceso de adquisición de la lengua materna. Grupos reducidos y enfoque personalizado por etapas de desarrollo. No ofrecen clases para adultos ni preparación Cambridge."
  },
  {
    rank: 3,
    name: "Hello English Academy La Vaguada",
    address: "Av. de la Española, 2, 28029 Madrid",
    neighborhood: "La Vaguada",
    rating: "—",
    reviewCount: "",
    price: "Accesible",
    highlights: ["Profesores nativos", "Clase de prueba gratuita", "Niños y adultos"],
    website: "https://helloacademy.es",
    isInternal: false,
    description: "Academia de inglés con profesores nativos para niños y adultos. Ofrecen clases presenciales en grupos reducidos y clases online. Su presencia digital es limitada y no cuentan con certificación Cambridge oficial."
  },
  {
    rank: 4,
    name: "Cambridge English",
    address: "—",
    neighborhood: "Referencia global",
    rating: "—",
    reviewCount: "",
    price: "—",
    highlights: ["Organismo oficial de certificación", "Estándar mundial", "No es academia local"],
    website: "https://www.cambridgeenglish.org",
    isInternal: false,
    description: "Cambridge English es el organismo oficial que certifica los exámenes de inglés Cambridge (B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency). No es una academia local sino la referencia global en certificación de inglés. Los centros preparadores autorizados, como Impulse English Academy, preparan a los alumnos para estos exámenes."
  },
  {
    rank: 5,
    name: "Cambridge House La Vaguada",
    address: "Santiago de Compostela, 62, 28029 Madrid",
    neighborhood: "La Vaguada / Barrio del Pilar",
    rating: "—",
    reviewCount: "",
    price: "Consultar",
    highlights: ["Desde 1987", "Método Comunicativo Integral", "95% aprobados Cambridge 2023", "6 centros en Madrid"],
    website: "https://www.cambridge-house.com",
    isInternal: false,
    description: "Cadena de academias de inglés con más de 35 años de experiencia en Madrid y un centro en La Vaguada (Santiago de Compostela, 62). Ofrecen cursos para adultos y niños, preparación Cambridge, clases intensivas y particulares. Su método comunicativo integral combina las cuatro destrezas. Reportan un 95% de aprobados en exámenes Cambridge en 2023, aunque con grupos más grandes que las academias independientes."
  },
  {
    rank: 6,
    name: "EOI Madrid-Valdezarza",
    address: "C/ Fermín Caballero, 92, 28035 Madrid",
    neighborhood: "Valdezarza / Mirasierra",
    rating: "—",
    reviewCount: "",
    price: "188-250€/año",
    highlights: ["Precio público", "Niveles A1-C2", "Presencial y a distancia"],
    website: "",
    isInternal: false,
    description: "Escuela Oficial de Idiomas con precios públicos muy económicos (188-250€ por curso completo). Ofrece inglés, francés, alemán, italiano y chino. Sin embargo, tiene lista de espera habitual, grupos grandes, no ofrece profesores nativos ni preparación Cambridge específica, y no atiende a niños pequeños."
  },
  {
    rank: 7,
    name: "Wall Street English Madrid",
    address: "C/ Cea Bermúdez, 29, Chamberí, Madrid",
    neighborhood: "Chamberí (fuera de Madrid Norte)",
    rating: "—",
    reviewCount: "",
    price: "100-200€/mes",
    highlights: ["Cadena premium", "Horario flexible", "Coach personal"],
    website: "https://www.wallstreetenglish.es",
    isInternal: false,
    description: "Cadena internacional premium con inmersión 100% en inglés y coach personal. Sin embargo, no está ubicada en Madrid Norte (su centro más cercano está en Chamberí). Precio elevado y sin especialización en niños ni programas de primera infancia."
  },
  {
    rank: 8,
    name: "International House Madrid",
    address: "C/ Zurbano, 8, Chamberí, 28010 Madrid",
    neighborhood: "Chamberí (fuera de Madrid Norte)",
    rating: "—",
    reviewCount: "",
    price: "400-1500€",
    highlights: ["Referencia en la ciudad", "Amplia oferta", "Profesores cualificados"],
    website: "https://www.ihes.com",
    isInternal: false,
    description: "Centro de referencia en Madrid con larga trayectoria. Amplia oferta de cursos y profesores muy cualificados. Sin embargo, no tiene presencia en Madrid Norte, sus precios son significativamente más altos (400-1.500€ según programa) y no está especializada en niños pequeños."
  }
];

function getRankColor(rank: number) {
  if (rank === 1) return 'bg-gradient-to-br from-amber-400 to-amber-500 text-white';
  if (rank === 2) return 'bg-gradient-to-br from-zinc-300 to-zinc-400 text-white';
  if (rank === 3) return 'bg-gradient-to-br from-amber-600 to-amber-700 text-white';
  return 'bg-zinc-200 text-zinc-600';
}

function renderStars(rating: string) {
  if (rating === '—') return null;
  const numRating = parseFloat(rating);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= numRating ? 'text-amber-400 fill-amber-400' : 'text-zinc-300'}`}
        />
      ))}
      <span className="text-sm font-bold text-zinc-700 ml-1">{rating}</span>
      {academies.find(a => a.rating === rating)?.reviewCount && (
        <span className="text-xs text-zinc-500 ml-1">({academies.find(a => a.rating === rating)?.reviewCount} reseñas)</span>
      )}
    </div>
  );
}

export default function MejoresAcademiasMadridNortePage() {
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
            <img src="/images/academy/classroom-facilities-main-classroom.jpg" alt="Aula de academia de inglés en Madrid Norte - Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Mejores Academias Madrid Norte' }
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
                Las 8 Mejores Academias de Inglés en Madrid Norte (2026)
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                ¿Vives en Barrio del Pilar, Mirasierra, Montecarmelo o Las Tablas? Hemos analizado las mejores opciones para aprender inglés en la zona norte de Madrid: precios, metodologías, certificaciones y opiniones reales.
              </p>
              <div className="flex items-center gap-4 mt-6 animate-hero-fade-up animation-delay-200">
                <span className="text-white/50 text-sm font-display flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  12 min lectura
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="/images/academy/classroom-facilities-main-classroom.jpg"
              alt="Mejores academias de inglés en Madrid Norte - comparativa 2026"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
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
          <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Academias en Madrid Norte" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                Madrid Norte es una de las zonas con mayor demanda de academias de inglés de la capital. Barrios como Barrio del Pilar, Mirasierra, Montecarmelo, Las Tablas y Fuencarral concentran a miles de familias y profesionales que buscan opciones de calidad para aprender inglés cerca de casa. Hemos analizado las mejores opciones disponibles en 2026, evaluando metodología, profesorado, certificaciones, precios y opiniones de alumnos reales. Ya busques preparación para <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline">exámenes Cambridge</a>, <a href="/linguaskill/" className="text-emerald-600 hover:underline">Linguaskill</a>, o clases para tus hijos, esta guía te ayudará a elegir.
              </p>
            </section>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">7</div>
                <div className="text-white/80">Academias analizadas</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">64-200€</div>
                <div className="text-white/80">Rango de precios/mes</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">7</div>
                <div className="text-white/80">Criterios de evaluación</div>
              </div>
            </div>

            {/* Criterios de Evaluación */}
            <section id="criterios" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Criterios de Evaluación: ¿Qué Hace Buena a una Academia?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Antes de comparar academias, es fundamental entender qué factores determinan la calidad de la enseñanza. No todas las academias son iguales, y el precio más alto no siempre garantiza mejores resultados. Estos son los siete criterios que hemos utilizado:
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
                  <strong>Dato clave:</strong> Según estudios del sector, las academias con grupos de máximo 10 alumnos consiguen tasas de aprobados un 35% superiores en exámenes oficiales Cambridge frente a centros con grupos de 20+ alumnos. La atención personalizada marca la diferencia.
                </p>
              </div>
            </section>

            {/* Academy Rankings */}
            <section id="academias" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Las 8 Mejores Academias de Inglés en Madrid Norte
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-8">
                Tras analizar decenas de opciones en la zona norte de Madrid, estas son las 7 academias que destacan por calidad, resultados y opiniones de alumnos. Incluimos tanto academias locales como referencias importantes del sector para que tengas una visión completa.
              </p>

              <div className="space-y-6">
                {academies.map((academy) => (
                  <div key={academy.rank} className={`bg-white border ${academy.rank === 1 ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-zinc-200'} rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow`}>
                    <div className="flex items-start gap-4">
                      {/* Rank Badge */}
                      <div className={`w-12 h-12 rounded-xl ${getRankColor(academy.rank)} flex items-center justify-center flex-shrink-0 font-bold text-lg`}>
                        {academy.rank}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Academy Name */}
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                          {academy.name}
                          {academy.rank === 1 && (
                            <span className="ml-3 inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">
                              <Award className="w-3.5 h-3.5" />
                              Mejor Valorada
                            </span>
                          )}
                        </h3>

                        {/* Address */}
                        <div className="flex items-center gap-2 text-zinc-500 text-sm mb-3">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span>{academy.address} — <em>{academy.neighborhood}</em></span>
                        </div>

                        {/* Rating */}
                        {academy.rating !== '—' && (
                          <div className="flex items-center gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= parseFloat(academy.rating) ? 'text-amber-400 fill-amber-400' : 'text-zinc-300'}`}
                              />
                            ))}
                            <span className="text-sm font-bold text-zinc-700 ml-1">{academy.rating}</span>
                            {academy.reviewCount && (
                              <span className="text-xs text-zinc-500 ml-1">({academy.reviewCount} reseñas)</span>
                            )}
                          </div>
                        )}

                        {/* Price Badge */}
                        <div className="mb-4">
                          <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${academy.rank === 1 ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-100 text-zinc-600'}`}>
                            {academy.price}
                          </span>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {academy.highlights.map((highlight, i) => (
                            <span key={i} className={`text-xs font-medium px-2.5 py-1 rounded-full ${academy.rank === 1 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-zinc-50 text-zinc-600 border border-zinc-200'}`}>
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-zinc-600 leading-relaxed text-sm">
                          {academy.description}
                        </p>

                        {/* Links */}
                        <div className="mt-3">
                          {academy.isInternal ? (
                            <a href="/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                              Visitar Impulse English <ArrowRight className="w-4 h-4" />
                            </a>
                          ) : academy.website ? (
                            <span className="mt-4 pt-3 border-t border-zinc-100 block">
                              <a
                                href={academy.website}
                                target="_blank"
                                rel="nofollow noopener"
                                className="text-zinc-300 text-[10px] tracking-wide hover:text-zinc-400 transition-colors"
                              >
                                {academy.website.replace('https://www.', '').replace('https://', '')}
                              </a>
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Price Comparison Table */}
            <section id="precios" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Comparativa de Precios: Academias de Inglés en Madrid Norte
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Esta tabla resume los precios y características principales de cada academia para facilitar tu comparación:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-zinc-50">
                      <th className="text-left px-4 py-3 text-sm font-bold text-zinc-900 border-b border-zinc-200">Academia</th>
                      <th className="text-left px-4 py-3 text-sm font-bold text-zinc-900 border-b border-zinc-200">Precio mensual</th>
                      <th className="text-left px-4 py-3 text-sm font-bold text-zinc-900 border-b border-zinc-200">Ubicación</th>
                      <th className="text-center px-4 py-3 text-sm font-bold text-zinc-900 border-b border-zinc-200">Cambridge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {academies.map((academy) => (
                      <tr key={academy.rank} className={`${academy.rank === 1 ? 'bg-emerald-50' : ''} hover:bg-zinc-50 transition-colors`}>
                        <td className="px-4 py-3 text-sm border-b border-zinc-100">
                          <div className="flex items-center gap-2">
                            <span className={`w-6 h-6 rounded-full ${getRankColor(academy.rank)} flex items-center justify-center text-xs font-bold`}>
                              {academy.rank}
                            </span>
                            <span className={`font-medium ${academy.rank === 1 ? 'text-emerald-700' : 'text-zinc-900'}`}>
                              {academy.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-600 border-b border-zinc-100">{academy.price}</td>
                        <td className="px-4 py-3 text-sm text-zinc-600 border-b border-zinc-100">{academy.neighborhood}</td>
                        <td className="px-4 py-3 text-sm text-center border-b border-zinc-100">
                          {academy.highlights.some(h => h.toLowerCase().includes('cambridge')) ? (
                            <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : academy.name === 'Cambridge English' ? (
                            <span className="text-xs text-zinc-500">Organismo</span>
                          ) : (
                            <span className="text-zinc-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo:</strong> No te dejes guiar solo por el precio mensual. Calcula el coste por hora de clase y compara el tamaño de los grupos. Una academia de 79€/mes con 8 horas y 10 alumnos es más rentable que una de 60€/mes con 4 horas y 20 alumnos. Consulta nuestra <a href="/precios/" className="text-emerald-600 hover:underline">página de precios</a> para más detalles.
                </p>
              </div>
            </section>

            {/* Why Impulse */}
            <section id="impulse" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Por Qué Impulse English Academy Es la Mejor Opción en Madrid Norte
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
                  <p className="text-zinc-600 text-sm">B2 First 2024/2025</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center">
                  <Users className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-zinc-900 mb-1">Máx. 10 Alumnos</h3>
                  <p className="text-zinc-600 text-sm">Grupos reducidos garantizados</p>
                </div>
              </div>

              {/* Academy Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <img
                  src="/images/academy/academy-exterior.jpg"
                  alt="Exterior de Impulse English Academy en Barrio del Pilar, Madrid Norte"
                  className="w-full h-56 object-cover rounded-xl shadow-md"
                />
                <img
                  src="/images/academy/classroom-facilities-main-classroom.jpg"
                  alt="Aula de clases de Impulse English Academy en Madrid Norte"
                  className="w-full h-56 object-cover rounded-xl shadow-md"
                />
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
                    <span className="text-zinc-600"><strong>Ubicación privilegiada</strong> en La Vaguada, Barrio del Pilar, accesible en metro y autobús desde todo Madrid Norte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600"><strong>Desde 64€/mes</strong> con cursos para <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">adultos</a>, <a href="/cursos-ingles/infantil/" className="text-emerald-600 hover:underline">niños</a>, <a href="/cursos-ingles/primaria/" className="text-emerald-600 hover:underline">primaria</a> y <a href="/cursos-ingles/secundaria/" className="text-emerald-600 hover:underline">secundaria</a></span>
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

              {/* Location Links */}
              <p className="text-zinc-600 leading-relaxed mb-4">
                Si vives o trabajas en zonas cercanas, Impulse English Academy está a pocos minutos. Nuestra ubicación es accesible desde todo el norte de Madrid:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <a href="/academia-ingles-barrio-del-pilar/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">Barrio del Pilar</a>
                <a href="/academia-ingles-la-vaguada/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">La Vaguada</a>
                <a href="/academia-ingles-mirasierra/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">Mirasierra</a>
                <a href="/academia-ingles-montecarmelo/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">Montecarmelo</a>
                <a href="/academia-ingles-las-tablas/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">Las Tablas</a>
                <a href="/academia-ingles-tetuan/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">Tetuán</a>
                <a href="/academia-ingles-plaza-castilla/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">Plaza Castilla</a>
                <a href="/academia-ingles-penagrande/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">Peñagrande</a>
                <a href="/academia-ingles-la-ventilla/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">La Ventilla</a>
                <a href="/academia-ingles-cuatro-torres/" className="text-emerald-600 hover:underline text-sm bg-emerald-50 px-3 py-1 rounded-full">Cuatro Torres</a>
              </div>

              <p className="text-zinc-600 leading-relaxed">
                Consulta nuestra <a href="/precios/" className="text-emerald-600 hover:underline">página de precios</a> y descubre todos nuestros <a href="/cursos-ingles/" className="text-emerald-600 hover:underline">cursos de inglés</a> disponibles.
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Conclusión: La Mejor Academia de Inglés en Madrid Norte
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Madrid Norte cuenta con opciones variadas para aprender inglés, desde academias especializadas en niños hasta centros de referencia internacional. Sin embargo, si buscas una combinación de resultados verificables, grupos reducidos, precio competitivo y ubicación en la zona norte, Impulse English Academy destaca como la opción más completa.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Con un 100% de aprobados en Cambridge B2 First, centro oficial de preparación Cambridge, grupos de máximo 10 alumnos y cursos desde los 2 años hasta adultos, Impulse ofrece todo lo que necesitas en un solo centro. Su ubicación en Barrio del Pilar, junto a La Vaguada, es accesible desde Mirasierra, Montecarmelo, Las Tablas, Fuencarral y todo el norte de Madrid.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                No te conformes con promesas: pide datos concretos de tasas de aprobados, solicita una clase de prueba y habla con alumnos actuales. En Impulse English Academy ofrecemos una prueba de nivel gratuita y sin compromiso para que compruebes por ti mismo nuestra metodología y el ambiente de nuestras clases.
              </p>
            </section>

          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-accent-blue to-[#0a3560] mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Vision Statement */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-10 mb-10 border border-white/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  No buscas solo una academia. Buscas resultados reales.
                </h2>
                <p className="text-white/90 text-lg mb-4">
                  Has investigado, has comparado precios y metodologías en Madrid Norte, y ahora necesitas certezas. Necesitas saber que tu inversión en inglés va a dar resultados concretos: aprobar ese examen, conseguir esa certificación, acceder a esas oportunidades profesionales.
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
                <LeadForm source="mejores-academias-madrid-norte" />
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
                href="/blog/mejores-academias-madrid/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Academias</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Mejores Academias de Inglés en Madrid 2026</h3>
                <p className="text-zinc-600 text-sm mt-2">Guía comparativa completa de toda la ciudad.</p>
              </a>
              <a
                href="/blog/cambridge-b2-beneficios/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Cambridge</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Beneficios del Cambridge B2 First</h3>
                <p className="text-zinc-600 text-sm mt-2">Descubre por qué esta certificación impulsa tu carrera.</p>
              </a>
              <a
                href="/blog/cursos-ingles-adultos-madrid/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-emerald-600 text-sm font-medium">Cursos</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Cursos de Inglés para Adultos en Madrid</h3>
                <p className="text-zinc-600 text-sm mt-2">Opciones para profesionales y universitarios.</p>
              </a>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
}
