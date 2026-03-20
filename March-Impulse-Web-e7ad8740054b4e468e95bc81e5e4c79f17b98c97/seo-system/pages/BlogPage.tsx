import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Star, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

// Direct S3 image URLs for reliability
const articleImageUrls: Record<string, { url: string; alt: string }> = {
  classroom: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG",
    alt: "Aula principal academia inglés La Vaguada Madrid"
  },
  infantil: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG",
    alt: "Clases inglés infantil La Vaguada Madrid"
  },
  certificate: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg",
    alt: "Estudiantes con certificados Cambridge La Vaguada Madrid"
  },
  adults: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG",
    alt: "Clases inglés adultos La Vaguada Madrid"
  },
  students: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG",
    alt: "Estudiantes primaria felices La Vaguada Madrid"
  },
  teenagers: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+student+happy.JPG",
    alt: "Estudiante secundaria La Vaguada Madrid"
  },
  reception: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG",
    alt: "Instalaciones academia inglés La Vaguada Madrid"
  },
  cambridge: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG",
    alt: "Certificado Cambridge oficial La Vaguada Madrid"
  },
  linguaskillLogo: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/linguaskill-logo-blanco.png",
    alt: "Logo Linguaskill centro oficial La Vaguada Madrid"
  },
  cambridgeLogo: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png",
    alt: "Logo Cambridge centro preparador oficial La Vaguada Madrid"
  },
  technology: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG",
    alt: "Aula tecnológica preparación Linguaskill La Vaguada Madrid"
  }
};

// Featured Hub Articles - Guías completas
const hubArticles = [
  {
    id: 'linguaskill-guia-completa',
    title: "Guía Completa del Examen Linguaskill 2026",
    excerpt: "Todo sobre estructura, ejemplos reales, sistema adaptativo y estrategias de preparación para certificar tu inglés con resultados en 48 horas.",
    category: "Linguaskill",
    readTime: "25 min",
    imageKey: "technology",
    href: "/linguaskill",
    featured: true,
  },
  {
    id: 'linguaskill-precios-sedes',
    title: "Linguaskill: Precios, Sedes y Servicios 2026",
    excerpt: "Precios exactos, sedes disponibles en España, modalidades presencial y online, y servicios de preparación para tu certificación.",
    category: "Linguaskill",
    readTime: "20 min",
    imageKey: "reception",
    href: "/linguaskill/precios-sedes",
    featured: false,
  },
  {
    id: 'examenes-cambridge-guia',
    title: "Guía Completa de Exámenes Cambridge 2026",
    excerpt: "Desde Young Learners hasta C2 Proficiency: qué examen necesitas, cómo prepararte y qué puertas te abrirá cada certificación.",
    category: "Exámenes Cambridge",
    readTime: "30 min",
    imageKey: "cambridgeLogo",
    href: "/examenes-cambridge/guia-completa",
    featured: true,
  },
  {
    id: 'fechas-examenes-cambridge',
    title: "Fechas Exámenes Cambridge 2026: Calendario Oficial",
    excerpt: "Calendario completo de convocatorias, plazos de inscripción y consejos para elegir la mejor fecha según tu preparación.",
    category: "Calendario",
    readTime: "15 min",
    imageKey: "cambridge",
    href: "/examenes-cambridge/fechas",
    featured: false,
  },
  {
    id: 'libros-cambridge-recursos',
    title: "Libros Cambridge y Recursos: Guía 2026",
    excerpt: "Los mejores libros oficiales, apps gratuitas y materiales complementarios para preparar tu examen Cambridge con éxito.",
    category: "Recursos",
    readTime: "18 min",
    imageKey: "students",
    href: "/examenes-cambridge/libros-recursos",
    featured: false,
  },
];

// Spoke Articles - Related to Hubs
const spokeArticles = [
  // Linguaskill Spokes
  {
    id: 'ejemplo-linguaskill',
    title: "Ejemplo Examen Linguaskill: Formato del Test",
    excerpt: "Formato completo del examen con ejemplos de cada módulo: Reading, Listening, Writing y Speaking.",
    category: "Linguaskill",
    readTime: "7 min",
    href: "/linguaskill/ejemplo-examen",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'precio-linguaskill',
    title: "Precio Linguaskill y Cómo Reservar 2025",
    excerpt: "Tarifas actualizadas (130€), descuentos universitarios y proceso de inscripción paso a paso.",
    category: "Linguaskill",
    readTime: "6 min",
    href: "/linguaskill/precio-reservar",
    hub: "linguaskill-precios-sedes",
  },
  {
    id: 'linguaskill-online',
    title: "Linguaskill Online desde Casa",
    excerpt: "Requisitos técnicos, supervisión remota y cómo hacer el examen desde tu hogar.",
    category: "Linguaskill",
    readTime: "7 min",
    href: "/linguaskill/online-desde-casa",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'centros-linguaskill',
    title: "Centros Linguaskill Madrid, Valencia, Zaragoza",
    excerpt: "Centros autorizados, precios por ciudad y cómo reservar tu plaza.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/linguaskill/centros",
    hub: "linguaskill-precios-sedes",
  },
  {
    id: 'opiniones-linguaskill',
    title: "Opiniones Linguaskill: Experiencias Reales",
    excerpt: "Qué opinan los usuarios sobre el formato, la corrección y la modalidad online.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/linguaskill/opiniones",
    hub: "linguaskill-guia-completa",
  },
  // Cambridge Spokes
  {
    id: 'cambridge-b2-beneficios',
    title: "Cambridge B2: 7 Beneficios del Examen First",
    excerpt: "Reconocimiento internacional, validez ilimitada y ventajas profesionales del B2 First.",
    category: "Exámenes Cambridge",
    readTime: "7 min",
    href: "/examenes-cambridge/b2-beneficios",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'cambridge-c1-advanced',
    title: "Examen Cambridge C1 Advanced: Guía Completa",
    excerpt: "Estructura, puntuación, calificaciones y estrategias de preparación para el C1.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/examenes-cambridge/c1-advanced-guia",
    hub: "examenes-cambridge-guia",
  },
  // Linguaskill Spokes - Additional
  {
    id: 'linguaskill-vs-aptis',
    title: "Linguaskill vs Aptis: Comparativa Completa 2026",
    excerpt: "Análisis detallado de ambos exámenes: formato, precio, validez y cuál te conviene más según tus necesidades.",
    category: "Linguaskill",
    readTime: "12 min",
    href: "/linguaskill/vs-aptis",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'registro-linguaskill',
    title: "Cómo Registrarse para el Examen Linguaskill",
    excerpt: "Guía paso a paso para registrarte al examen Linguaskill: requisitos, proceso de inscripción y documentación necesaria.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/linguaskill/registro",
    hub: "linguaskill-precios-sedes",
  },
  {
    id: 'certificado-linguaskill',
    title: "Certificado Linguaskill: Validez y Reconocimiento",
    excerpt: "Todo sobre el certificado Linguaskill: validez internacional, reconocimiento oficial y dónde es aceptado.",
    category: "Linguaskill",
    readTime: "10 min",
    href: "/linguaskill/certificado-validez",
    hub: "linguaskill-guia-completa",
  },
  // Cambridge Spokes - Additional
  {
    id: 'cambridge-b1-guia',
    title: "Examen Cambridge B1 Preliminary: Guía Completa",
    excerpt: "Todo sobre el B1 Preliminary: estructura, partes del examen, puntuación y estrategias de preparación.",
    category: "Exámenes Cambridge",
    readTime: "15 min",
    href: "/examenes-cambridge/b1-guia",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'centros-cambridge-madrid',
    title: "Centros Cambridge en Madrid y Barcelona 2026",
    excerpt: "Lista completa de centros autorizados Cambridge en Madrid y Barcelona: ubicaciones, horarios y contacto.",
    category: "Exámenes Cambridge",
    readTime: "10 min",
    href: "/examenes-cambridge/centros-madrid",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'precio-cambridge-c1',
    title: "Precio Cambridge C1 Advanced en Madrid 2026",
    excerpt: "Precios actualizados del C1 Advanced en Madrid: tasas de examen, fechas disponibles y proceso de registro.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/examenes-cambridge/precio-c1",
    hub: "fechas-examenes-cambridge",
  },
  {
    id: 'registro-cambridge',
    title: "Cómo Registrarse a los Exámenes Cambridge",
    excerpt: "Guía completa de registro para exámenes Cambridge: pasos, documentación y plazos de inscripción.",
    category: "Exámenes Cambridge",
    readTime: "9 min",
    href: "/examenes-cambridge/registro",
    hub: "fechas-examenes-cambridge",
  },
  // Linguaskill Spokes - More
  {
    id: 'recursos-pdf-linguaskill',
    title: "Recursos PDF Examen Linguaskill: Materiales Oficiales",
    excerpt: "Descarga gratuita de guías oficiales Cambridge, ejemplos de tareas y materiales de preparación en formato PDF.",
    category: "Linguaskill",
    readTime: "12 min",
    href: "/linguaskill/recursos-pdf",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'precio-linguaskill-online',
    title: "Precio del Test Linguaskill Online 2026",
    excerpt: "Costes detallados del examen Linguaskill online: precio por módulo, descuentos y comparativa internacional.",
    category: "Linguaskill",
    readTime: "10 min",
    href: "/linguaskill/precio-online",
    hub: "linguaskill-precios-sedes",
  },
  {
    id: 'curso-intensivo-linguaskill',
    title: "Curso Intensivo Linguaskill Online",
    excerpt: "Prepárate para el examen Linguaskill en pocas semanas con cursos intensivos online efectivos.",
    category: "Linguaskill",
    readTime: "10 min",
    href: "/linguaskill/curso-intensivo",
    hub: "linguaskill-guia-completa",
  },
  // Cambridge Spokes - More
  {
    id: 'escala-cambridge',
    title: "Escala Cambridge Explicada: Niveles y Grades",
    excerpt: "Entiende cómo funciona la Cambridge English Scale, qué significan los Grades A, B y C, y su relación con CEFR.",
    category: "Exámenes Cambridge",
    readTime: "10 min",
    href: "/examenes-cambridge/escala",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'ejercicios-b2-cambridge',
    title: "Ejercicios B2 Cambridge: Guía Práctica First",
    excerpt: "Tipos de ejercicios, estrategias por sección y recursos gratuitos para practicar el B2 First Certificate.",
    category: "Exámenes Cambridge",
    readTime: "15 min",
    href: "/examenes-cambridge/ejercicios-b2",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'pdfs-cambridge-advanced',
    title: "PDFs Cambridge Advanced C1: Recursos Oficiales",
    excerpt: "Descarga gratuita de sample papers, handbooks y materiales oficiales para preparar el C1 Advanced (CAE).",
    category: "Exámenes Cambridge",
    readTime: "12 min",
    href: "/examenes-cambridge/pdfs-advanced",
    hub: "libros-cambridge-recursos",
  },
  {
    id: 'examen-cae-cambridge',
    title: "Examen CAE Cambridge C1 Advanced: Guía Completa",
    excerpt: "Todo sobre el Certificate in Advanced English: estructura, puntuación, preparación y consejos para aprobar.",
    category: "Exámenes Cambridge",
    readTime: "15 min",
    href: "/examenes-cambridge/cae",
    hub: "examenes-cambridge-guia",
  },
  // Madrid Academias
  {
    id: 'academias-baratas',
    title: "Academias Baratas Madrid: desde 45€/mes",
    excerpt: "Las 7 academias más económicas de Madrid con profesores cualificados y preparación Cambridge.",
    category: "Academias Madrid",
    readTime: "8 min",
    href: "/academias-ingles-madrid",
    hub: null,
  },
  {
    id: 'cursos-ingles-adultos',
    title: "Cursos de Inglés para Adultos en Madrid 2026",
    excerpt: "Las mejores opciones de cursos de inglés para adultos en Madrid: horarios flexibles, metodologías y precios.",
    category: "Academias Madrid",
    readTime: "12 min",
    href: "/academias-ingles-madrid/adultos",
    hub: null,
  },
  {
    id: 'certificaciones-ingles-madrid',
    title: "Certificaciones de Inglés en Madrid: Academias Oficiales",
    excerpt: "Comparativa de certificaciones Cambridge, Linguaskill, IELTS y TOEFL. Dónde prepararte en Madrid.",
    category: "Academias Madrid",
    readTime: "12 min",
    href: "/academias-ingles-madrid/certificaciones",
    hub: null,
  },
  {
    id: 'academias-por-barrios',
    title: "Academias de Inglés por Barrios en Madrid 2026",
    excerpt: "Encuentra la mejor academia de inglés cerca de ti. Guía por zonas con precios y transporte.",
    category: "Academias Madrid",
    readTime: "12 min",
    href: "/academias-ingles-madrid/por-barrios",
    hub: null,
  },
  {
    id: 'cursos-ingles-ninos',
    title: "Cursos de Inglés para Niños en Madrid 2026",
    excerpt: "Guía completa de metodologías, edades y academias para que tus hijos aprendan inglés.",
    category: "Academias Madrid",
    readTime: "15 min",
    href: "/academias-ingles-madrid/ninos",
    hub: null,
  },
];

// Additional linked articles (replaced unlinked ones)
const additionalArticles = [
  {
    id: 'aprende-ingles-guia',
    title: "Cómo Aprender Inglés de Forma Efectiva: Guía Completa",
    excerpt: "Estrategias probadas, recursos y metodologías para dominar el inglés según tu nivel y objetivos.",
    category: "Consejos",
    readTime: "15 min",
    href: "/aprende-ingles",
    image: "classroom" // Will use facilityImages.classroom
  },
  {
    id: 'infantil-great-little-people',
    title: "Inglés para Niños: Método Great Little People",
    excerpt: "Descubre cómo nuestro método exclusivo para niños de 2-5 años hace que aprender inglés sea una aventura divertida.",
    category: "Metodología",
    readTime: "8 min",
    href: "/ingles-la-vaguada/infantil",
    image: "infantil" // Will use infantilImages.greatLittlePeople
  },
  {
    id: 'preparar-cambridge',
    title: "Cómo Preparar tu Examen Cambridge con Éxito",
    excerpt: "Consejos prácticos y recursos para superar tu examen Cambridge: B1, B2, C1 y C2.",
    category: "Exámenes Cambridge",
    readTime: "10 min",
    href: "/examenes-cambridge",
    image: "certificate" // Will use certificationImages.studentC1
  },
  {
    id: 'clases-adultos',
    title: "Inglés para Adultos: Nunca es Tarde para Aprender",
    excerpt: "Cursos adaptados a profesionales y adultos. Horarios flexibles y metodología práctica para resultados rápidos.",
    category: "Academias Madrid",
    readTime: "7 min",
    href: "/ingles-la-vaguada/adultos",
    image: "adults" // Will use facilityImages.interiorBarrioPilar
  }
];

const categories = ["Todos", "Exámenes Cambridge", "Linguaskill", "Academias Madrid", "Consejos", "Metodología", "Recursos", "Calendario"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredHubArticles = selectedCategory === "Todos"
    ? hubArticles
    : hubArticles.filter(article => article.category === selectedCategory);

  const filteredSpokeArticles = selectedCategory === "Todos"
    ? spokeArticles
    : spokeArticles.filter(article => article.category === selectedCategory);

  const filteredAdditionalArticles = selectedCategory === "Todos"
    ? additionalArticles
    : additionalArticles.filter(article => article.category === selectedCategory);

  // Get featured articles for hero section
  const featuredArticles = hubArticles.filter(a => a.featured);

  return (
    <>
      <SEOHead
        title="Blog - Artículos sobre Inglés, Cambridge y Linguaskill"
        description="Blog de Impulse English Academy. Guías sobre exámenes Cambridge, Linguaskill, consejos para aprender inglés y recursos educativos. Academia Madrid."
        keywords="blog inglés, artículos cambridge, guía linguaskill, aprender inglés tips, recursos inglés madrid"
        canonical="/blogs-impulse"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-accent-blue to-blue-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-white/80" />
              <span className="text-white/80 font-medium">Nuestro Blog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Blog de Impulse
            </h1>
            <p className="text-xl text-white/90 font-light">
              Guías completas, consejos y recursos para mejorar tu inglés y preparar tus exámenes Cambridge.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Hub Articles */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-5 h-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-zinc-900">Guías destacadas</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                to={article.href}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  {articleImageUrls[article.imageKey] ? (
                    <img
                      src={articleImageUrls[article.imageKey].url}
                      alt={articleImageUrls[article.imageKey].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-accent-blue/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent-blue text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                  <span className="text-white/60 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime} de lectura
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent-blue text-white'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Articles Grid */}
      {filteredHubArticles.length > 0 && (
        <section className="py-12 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Guías completas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHubArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.href}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="aspect-video overflow-hidden">
                    {articleImageUrls[article.imageKey] ? (
                      <img
                        src={articleImageUrls[article.imageKey].url}
                        alt={articleImageUrls[article.imageKey].alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent-blue/20" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full">
                        Guía completa
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zinc-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock className="w-4 h-4" />
                      {article.readTime} de lectura
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Spoke Articles Grid */}
      {filteredSpokeArticles.length > 0 && (
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-accent-blue" />
              <h2 className="text-xl font-bold text-zinc-900">Artículos relacionados</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredSpokeArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.href}
                  className="bg-zinc-50 rounded-lg overflow-hidden hover:bg-zinc-100 transition-colors group border border-zinc-100"
                >
                  <div className="p-5">
                    <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 mt-2 mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Articles Grid */}
      {filteredAdditionalArticles.length > 0 && (
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Más artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAdditionalArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.href}
                  className="bg-zinc-50 rounded-xl overflow-hidden hover:bg-zinc-100 transition-colors group"
                >
                  <div className="aspect-video overflow-hidden">
                    {articleImageUrls[article.image] ? (
                      <img
                        src={articleImageUrls[article.image].url}
                        alt={articleImageUrls[article.image].alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent-blue/20" />
                    )}
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 mt-2 mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredHubArticles.length === 0 && filteredSpokeArticles.length === 0 && filteredAdditionalArticles.length === 0 && (
        <section className="py-16 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-zinc-500 text-lg">No hay artículos en esta categoría todavía.</p>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recibe nuestros mejores consejos
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestra newsletter y recibe tips de inglés, noticias sobre exámenes Cambridge y ofertas exclusivas.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-3 px-8 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Contactar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
