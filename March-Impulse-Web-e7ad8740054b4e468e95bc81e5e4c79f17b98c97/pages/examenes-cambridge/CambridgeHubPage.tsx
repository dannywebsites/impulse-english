import React, { useEffect } from 'react';
import { Award, CheckCircle, ArrowRight, Trophy, Users, FileText, Target, HelpCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { generateArticleSchema, generateCourseSchema, businessInfo } from '../../utils/schemaData';
import { s3CambridgeImages, s3SecondaryImages } from '../../src/data/images';

// Article Schema for SEO
export const articleSchema = generateArticleSchema({
  headline: "Exámenes Cambridge: Guía Completa de Certificaciones de Inglés 2025",
  description: "Todo sobre los exámenes Cambridge: niveles A2 Key, B1 Preliminary, B2 First, C1 Advanced y Linguaskill. Comparativa, precios, validez y preparación.",
  url: `${businessInfo.url}/examenes-cambridge`,
  datePublished: "2025-01-01"
});

// Comparison data for AI citation - Based on Knowledge Base: blog-03 lines 199-201
const examComparison = [
  { exam: "A2 Key", cefr: "A2", duration: "2h", parts: 3, validity: "De por vida", price: "110-130€", recognition: "Básico" },
  { exam: "B1 Preliminary", cefr: "B1", duration: "2h 20min", parts: 4, validity: "De por vida", price: "130-150€", recognition: "Intermedio" },
  { exam: "B2 First", cefr: "B2", duration: "3h 30min", parts: 4, validity: "De por vida", price: "180-210€", recognition: "Universitario/Laboral" },
  { exam: "C1 Advanced", cefr: "C1", duration: "4h", parts: 4, validity: "De por vida", price: "195-225€", recognition: "Alto/Profesional" },
  { exam: "Linguaskill", cefr: "B1-C2", duration: "~2h 30min", parts: 3, validity: "Sin caducidad*", price: "~150€", recognition: "Empresarial/Universitario" }
];

// FAQs for schema markup - Based on CSV PAAs for SEO optimization
const cambridgeFAQs = [
  {
    question: "¿Cuánto cuesta el examen de Cambridge?",
    answer: "El precio del examen de Cambridge oscila entre 69,50€ y 242€ según el nivel: Pre A1 Starters a A2 Flyers (69,50€-80€), A2 Key y B1 Preliminary (130€-145€), B2 First (205€-220€), C1 Advanced (220€-242€) y C2 Proficiency (230€-245€). El formato digital no tiene coste adicional. Algunos centros ofrecen descuentos de hasta el 15% en inscripciones anticipadas."
  },
  {
    question: "¿Cuánto tardan en llegar los Certificados de Cambridge?",
    answer: "El certificado original de Cambridge tarda entre 6 y 12 semanas en llegar tras la publicación de resultados, que se emiten en 2-6 semanas según formato digital o papel. El Statement of Results (documento provisional online) está disponible inmediatamente tras la corrección. Los retrasos pueden deberse a procesos de verificación o alta demanda, aunque el documento provisional tiene validez oficial."
  },
  {
    question: "¿Cuánto dura un certificado B2?",
    answer: "Un certificado B2 de Cambridge no tiene fecha de caducidad oficial establecida, siendo válido de por vida. Sin embargo, universidades y empresas pueden exigir exámenes recientes (2-3 años) para verificar competencia actual. Para procesos académicos, laborales o de inmigración, verifica los requisitos específicos de la institución receptora."
  },
  {
    question: "¿Qué certificado de inglés es válido por vida?",
    answer: "Los certificados de Cambridge English son válidos de por vida sin fecha de caducidad oficial. Los niveles más populares son el Cambridge B2 First y el C1 Advanced, aunque B1 Preliminary, A2 Key y C2 Proficiency tampoco caducan. Las instituciones pueden exigir exámenes recientes, recomendando verificar sus requisitos específicos."
  },
  {
    question: "¿Cuánto tiempo se tarda en preparar el B2 First?",
    answer: "La preparación para el examen Cambridge B2 First dura entre 3 y 9 meses según el nivel inicial y dedicación. Estudiantes con base B1 pueden alcanzar el nivel en 3-6 meses con estudio regular, mientras principiantes tardan hasta 12-18 meses. Clave: planificación estructurada y práctica constante."
  },
  {
    question: "¿Cuánto tiempo se tarda en pasar de B2 a C1?",
    answer: "Pasar del nivel B2 al C1 en inglés requiere entre 200 y 300 horas de estudio guiado y práctica intensiva. El progreso depende de la frecuencia, método de aprendizaje y motivación. La certificación Cambridge C1 Advanced valida este nivel avanzado, esencial para contextos académicos y profesionales."
  },
  {
    question: "¿Es muy difícil el C1 Advanced?",
    answer: "El Cambridge C1 Advanced es un examen exigente que certifica un nivel alto de inglés (C1 MCER), evaluando reading, writing, listening y speaking con énfasis en comunicación efectiva. Su dificultad radica en la duración, variedad de tareas y dominio avanzado de vocabulario y gramática."
  },
  {
    question: "¿Qué porcentaje aprueba el C1 Advanced?",
    answer: "El porcentaje de aprobación del Cambridge C1 Advanced es aproximadamente del 75%, donde el 64% obtiene grado B o C (nivel C1) y un 13% alcanza grado A (nivel C2). Cerca del 20% no logra el nivel C1 y alrededor del 5% reprueba el examen directamente."
  }
];

// Authentic S3 images for hub page
const pageImages = {
  hero: s3CambridgeImages.laraC1Cert.url,
  classroom: s3SecondaryImages.luciaStudent.url,
  certificate: s3CambridgeImages.laraC1Cert.url,
};

const examLevels = [
  {
    level: "A2 Key",
    cefr: "A2",
    description: "Primer paso en tu camino hacia el dominio del inglés. Demuestra que puedes comunicarte en situaciones cotidianas.",
    href: "/examenes-cambridge",
    color: "from-green-500 to-green-600"
  },
  {
    level: "B1 Preliminary",
    cefr: "B1",
    description: "Certifica que puedes comunicarte en inglés en situaciones prácticas y cotidianas.",
    href: "/examenes-cambridge/b1-preliminary",
    color: "from-blue-500 to-blue-600"
  },
  {
    level: "B2 First",
    cefr: "B2",
    description: "El certificado más demandado. Demuestra que puedes trabajar y estudiar en inglés.",
    href: "/examenes-cambridge/b2-first",
    color: "from-purple-500 to-purple-600",
    popular: true
  },
  {
    level: "C1 Advanced",
    cefr: "C1",
    description: "Nivel avanzado reconocido por universidades y empresas de todo el mundo.",
    href: "/examenes-cambridge/c1-advanced",
    color: "from-orange-500 to-orange-600"
  },
  {
    level: "Linguaskill",
    cefr: "Multinivel",
    description: "Examen online adaptativo con resultados en 48h. Ideal para empresas y universidades.",
    href: "/linguaskill",
    color: "from-red-500 to-red-600"
  }
];

const stats = [
  { number: "100%", label: "Tasa de aprobados" },
  { number: "100%", label: "Alumnos satisfechos" }
];

export const courseSchema = generateCourseSchema({
        name: "Preparación Oficial de Exámenes Cambridge en Madrid",
        description: "Cursos de preparación para exámenes Cambridge en Madrid: B1 Preliminary (PET), B2 First (FCE) y C1 Advanced (CAE). Centro oficial Cambridge con 100% de aprobados. Clases para hispanohablantes con metodología probada, grupos reducidos y material incluido.",
        url: `${businessInfo.url}/examenes-cambridge`,
        courseCode: "CAM-HUB",
        educationalLevel: "B1, B2 y C1 — Todos los niveles Cambridge",
        timeRequired: "P9M"
      });

export default function CambridgeHubPage() {
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
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/lara-c1-cert-mobile.webp" type="image/webp" />
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/lara-c1-cert-mobile.jpg" type="image/jpeg" />
            <img
              src={pageImages.hero}
              alt="Cambridge English exam preparation"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-36 -right-36 w-[500px] h-[500px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Exámenes Cambridge' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <Award className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Centro preparador oficial
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Exámenes Cambridge
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              100% tasa de aprobados. Prepárate con expertos y certifica tu nivel de inglés con el certificado más reconocido del mundo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-hero-fade-up animation-delay-300">
              {stats.map((stat, index) => (
                <div key={index} className="border border-white/15 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">{stat.number}</div>
                  <div className="font-display text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Cambridge */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              ¿Por qué elegir Cambridge?
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Los certificados Cambridge son reconocidos por más de 25.000 instituciones en todo el mundo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Trophy className="w-8 h-8" />, title: "Reconocimiento global", description: "Aceptado por universidades y empresas de todo el mundo" },
              { icon: <FileText className="w-8 h-8" />, title: "Validez permanente", description: "Tu certificado no caduca nunca" },
              { icon: <Target className="w-8 h-8" />, title: "Evaluación completa", description: "Mide las 4 destrezas: Reading, Writing, Listening, Speaking" },
              { icon: <Users className="w-8 h-8" />, title: "Estándar de calidad", description: "Referencia mundial en certificación de idiomas" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Levels */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Elige tu nivel
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Ofrecemos preparación para todos los niveles del <a href="https://www.coe.int/es/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Marco Común Europeo</a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examLevels.map((exam, index) => (
              <a
                key={index}
                href={exam.href}
                className={`relative bg-white rounded-xl shadow-sm border border-zinc-100 p-6 hover:shadow-xl transition-all duration-300 group reveal-on-scroll opacity-0 translate-y-8 ${exam.popular ? 'ring-2 ring-accent-blue' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {exam.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                )}

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {exam.cefr}
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">
                  {exam.level}
                </h3>

                <p className="text-zinc-500 text-sm mb-4">
                  {exam.description}
                </p>

                <div className="flex items-center text-accent-blue font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Ver detalles
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 100% Pass Rate */}
      <section className="py-12 md:py-20 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              100% Tasa de Aprobados
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Todos nuestros alumnos que se presentan al examen oficial aprueban.
              Nuestro método de preparación intensiva garantiza que solo te presentas cuando estás listo.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {["B1 Preliminary", "B2 First", "C1 Advanced", "Linguaskill"].map((exam, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">{exam}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 px-6 bg-white border-b border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-zinc-900 mb-4 text-lg">¿Dónde preparar tu examen Cambridge?</h3>
            <p className="text-zinc-700 text-sm mb-4">
              Nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-accent-blue hover:underline font-medium">academia en Barrio del Pilar</a>, junto a <a href="/academia-ingles-la-vaguada/" className="text-accent-blue hover:underline font-medium">La Vaguada</a>, es centro preparador oficial Cambridge. Bien comunicada desde <a href="/academia-ingles-plaza-castilla/" className="text-accent-blue hover:underline font-medium">Plaza Castilla</a>, <a href="/academia-ingles-tetuan/" className="text-accent-blue hover:underline font-medium">Tetuán</a> y <a href="/academia-ingles-cuatro-torres/" className="text-accent-blue hover:underline font-medium">Cuatro Torres</a>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/cursos-ingles/adultos/" className="text-accent-blue hover:underline text-sm">Cursos adultos</a>
              <span className="text-zinc-400">•</span>
              <a href="/cursos-ingles/secundaria/" className="text-accent-blue hover:underline text-sm">Cursos secundaria</a>
              <span className="text-zinc-400">•</span>
              <a href="/cursos-ingles/particulares/" className="text-accent-blue hover:underline text-sm">Clases particulares</a>
              <span className="text-zinc-400">•</span>
              <a href="/academias-ingles-madrid/por-barrios/" className="text-accent-blue hover:underline text-sm">Ver todas las ubicaciones</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nuestra academia
            </h2>
            <p className="text-zinc-600 text-lg">
              Un ambiente diseñado para el éxito
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <img
                src={pageImages.classroom}
                alt="Estudiante de Impulse English Academy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
              <img
                src={pageImages.certificate}
                alt="Certificado Cambridge C1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Below the fold for performance */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Prepara tu examen Cambridge con nosotros
            </h2>
            <p className="text-zinc-600">
              Descubre nuestro método de preparación con 100% de aprobados
            </p>
          </div>
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
            <LazyVideo
              videoId="Fdso-d9_F20"
              title="Preparación exámenes Cambridge"
              className="shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table - Optimized for AI Citation */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Comparativa de Exámenes Cambridge 2025
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Tabla comparativa con precios, duración y reconocimiento de cada certificación Cambridge
            </p>
          </div>

          {/* Definition Box - AI Quotable */}
          <div className="bg-blue-50 border-l-4 border-accent-blue p-6 rounded-r-xl mb-8">
            <h3 className="font-bold text-zinc-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-accent-blue" />
              ¿Qué son los exámenes Cambridge?
            </h3>
            <p className="text-zinc-700">
              <strong>Los exámenes Cambridge</strong> son certificaciones oficiales de inglés desarrolladas por <a href="https://www.cambridgeenglish.org/es/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Cambridge Assessment English</a> (Universidad de Cambridge). Evalúan las 4 destrezas lingüísticas: Reading, Writing, Listening y Speaking. Están alineados con el <a href="https://www.coe.int/es/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">MCER (Marco Común Europeo de Referencia)</a> y son reconocidos por más de 25.000 instituciones en 130+ países. Los certificados <strong>no caducan</strong> (validez de por vida).
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-accent-blue to-blue-700 text-white">
                  <th className="text-left p-4 font-semibold">Examen</th>
                  <th className="text-left p-4 font-semibold">Nivel MCER</th>
                  <th className="text-left p-4 font-semibold">Duración</th>
                  <th className="text-left p-4 font-semibold">Partes</th>
                  <th className="text-left p-4 font-semibold">Precio 2025</th>
                  <th className="text-left p-4 font-semibold">Validez</th>
                  <th className="text-left p-4 font-semibold">Reconocimiento</th>
                </tr>
              </thead>
              <tbody>
                {examComparison.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                    <td className="p-4 font-bold text-zinc-900">{row.exam}</td>
                    <td className="p-4 text-zinc-700">{row.cefr}</td>
                    <td className="p-4 text-zinc-700">{row.duration}</td>
                    <td className="p-4 text-zinc-700">{row.parts}</td>
                    <td className="p-4 text-zinc-700 font-medium">{row.price}</td>
                    <td className="p-4 text-green-600 font-medium">{row.validity}</td>
                    <td className="p-4 text-zinc-700">{row.recognition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Stats - AI Quotable */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-zinc-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-accent-blue mb-2">25.000+</div>
              <p className="text-zinc-600 text-sm">Instituciones reconocen Cambridge en todo el mundo</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">De por vida</div>
              <p className="text-zinc-600 text-sm">Validez de los certificados Cambridge (no caducan)</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4 destrezas</div>
              <p className="text-zinc-600 text-sm">Reading, Writing, Listening y Speaking evaluadas</p>
            </div>
          </div>

          {/* External Authority Links */}
          <div className="mt-12 bg-zinc-50 p-6 rounded-xl">
            <h3 className="font-bold text-zinc-900 mb-4">Recursos oficiales y referencias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <a
                href="https://www.cambridgeenglish.org/es/exams-and-tests/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-blue hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                Cambridge English - Exámenes oficiales
              </a>
              <a
                href="https://www.coe.int/es/web/common-european-framework-reference-languages"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-blue hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                Consejo de Europa - Marco Común Europeo (MCER)
              </a>
              <a
                href="https://www.crue.org/acreditacion-de-idiomas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-blue hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                CRUE - Acreditación de idiomas en universidades españolas
              </a>
              <a
                href="https://educagob.educacionfpydeportes.gob.es/ensenanzas/idiomas/informacion-general/evaluacion-certificacion.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-blue hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                Ministerio de Educación - Acreditación de niveles de idiomas
              </a>
              <a
                href="https://www.britishcouncil.es/examenes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-blue hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                British Council España - Información sobre exámenes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <FAQSection
        faqs={cambridgeFAQs}
        title="Preguntas frecuentes sobre exámenes Cambridge"
      />

      {/* Lead Form */}
      <section id="formulario" className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="Prepárate para Cambridge"
            subtitle="Solicita información sobre nuestros cursos de preparación"
            ctaText="Solicitar prueba de nivel"
            source="cambridge-hub"
            showPhone={true}
            showLevel={true}
          />
        </div>
      </section>

      {/* BOOKING-CTA */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Reserva tu clase de prueba gratuita</h2>
          <p className="text-white/90 mb-8">Sin compromiso. Conoce nuestra metodología y a nuestros profesores antes de decidir.</p>
          <a href="/reservar-clase/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-colors">Clase de prueba gratuita</a>
        </div>
      </section>
      <Footer />

      {/* Schema Markup */}
</>
  );
}
