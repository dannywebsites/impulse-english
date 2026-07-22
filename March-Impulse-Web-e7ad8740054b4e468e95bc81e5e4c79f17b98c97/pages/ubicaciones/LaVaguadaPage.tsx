import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Train, Bus, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';

const benefits = [
  { title: "Ubicación Premium en La Vaguada", desc: "Junto al Centro Comercial La Vaguada, en pleno Barrio del Pilar. Zona comercial y residencial." },
  { title: "Centro Oficial de Preparación Cambridge", desc: "Prepárate y haz el examen donde estudias." },
  { title: "100% de Aprobados Cambridge 24/25", desc: "Metodología probada. Resultados garantizados." },
  { title: "Grupos Reducidos (Máximo 7-10 Alumnos)", desc: "Atención personalizada que marca la diferencia." },
  { title: "Más de 4 Años Sirviendo a Familias de La Vaguada", desc: "174+ reseñas de 5 estrellas en Google." },
  { title: "Expertos en Principiantes Absolutos", desc: "\"¿Lo intentaste antes y no pudiste?\" Te ayudamos." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People", desc: "Música, movimiento, diversión. Plataforma online para casa.", href: "/cursos-ingles/infantil" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge", desc: "Preparación A1 Movers, A2 Flyers, A2 Key.", href: "/cursos-ingles/primaria" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge", desc: "B1 Preliminary, B2 First, C1 Advanced. 100% aprobados.", href: "/cursos-ingles/secundaria" },
  { name: "Adultos", method: "Todos los niveles", desc: "Principiantes absolutos hasta C2. Cambridge y Linguaskill.", href: "/cursos-ingles/adultos" },
  { name: "Clases Particulares", method: "Flexible", desc: "Presencial u online. Horarios adaptados a ti.", href: "/cursos-ingles/particulares" }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Qué niveles de inglés ofrecéis en La Vaguada?",
    answer: "Ofrecemos todos los niveles desde principiante (A1) hasta avanzado (C2). Realizamos una prueba de nivel gratuita para ubicarte en el grupo adecuado. Preparamos exámenes Cambridge (Pre-A1 Starters hasta C2 Proficiency) y Linguaskill."
  },
  {
    question: "¿Hay clase de prueba gratuita en vuestra academia cerca de La Vaguada?",
    answer: "Sí, ofrecemos una prueba de nivel gratuita de 25 minutos donde evaluamos tu nivel actual y te recomendamos el curso más adecuado. Puedes reservarla por WhatsApp o a través de nuestra web."
  },
  {
    question: "¿Cuántos alumnos hay por grupo en las clases de inglés?",
    answer: "Nuestros grupos son reducidos: máximo 7-10 alumnos por clase. Esto garantiza atención personalizada real, no como otras academias que dicen tener grupos reducidos con 15-20 estudiantes."
  },
  {
    question: "¿Qué horarios hay disponibles para clases de inglés cerca de La Vaguada?",
    answer: "Tenemos horarios de mañana y tarde: lunes y miércoles de 10:00 a 21:30, martes y jueves de 15:30 a 21:30, y viernes de 13:30 a 19:30. Adaptamos los horarios a familias y profesionales de la zona."
  },
  {
    question: "¿Cómo llego a la academia desde el Centro Comercial La Vaguada?",
    answer: "Estamos junto al Centro Comercial La Vaguada, en pleno Barrio del Pilar. Nuestra dirección es Avenida de El Ferrol, 22. Metro Barrio del Pilar (Línea 9) está a 3 minutos andando."
  },
  {
    question: "¿Mejor academia para adultos Madrid norte?",
    answer: "Impulse English Academy ofrece cursos adultos con horarios flexibles (mañana/tarde), grupos máximo 8-10, preparación Cambridge y Linguaskill, profesores certificados, 100% aprobados. Ubicación La Vaguada con acceso Metro Barrio del Pilar. Ideal profesionales y estudiantes del norte de Madrid."
  },
  {
    question: "¿Inglés para adolescentes en La Vaguada?",
    answer: "Ofrecemos secundaria (13-17 años) con preparación EBAU y Cambridge B1/B2/C1. Grupos por nivel, simulacros mensuales, ambiente seguro para practicar speaking. Ubicación La Vaguada accesible desde toda la zona norte. Prueba de nivel gratuita."
  },
  {
    question: "¿Academia inglés La Vaguada con parking?",
    answer: "Sí, ubicamos en Avenida de El Ferrol, 22 (La Vaguada). Hay parking gratuito en la calle y estacionamiento pagado en Centro Comercial La Vaguada. Muy accesible en coche desde toda zona norte de Madrid (Peñagrande, La Paz, Tetuán, Plaza Castilla)."
  },
  {
    question: "¿Hay academias de inglés cerca del Centro Comercial La Vaguada?",
    answer: "Sí, hay opciones cerca de La Vaguada. Al buscar academia, fíjate en si es centro oficial de exámenes Cambridge o Linguaskill, el tamaño de los grupos, la experiencia de los profesores y las reseñas de Google. Impulse English Academy está junto al centro comercial, en Av. de El Ferrol, 22."
  },
  {
    question: "¿Cuánto cuesta una academia de inglés en zona norte de Madrid?",
    answer: "Los precios de academias de inglés en zona norte de Madrid varían según el formato (grupo, particular, intensivo) y las horas semanales. Es importante comparar qué incluye cada precio: material, pruebas de nivel, seguimiento personalizado y acceso a plataformas online. Solicita presupuesto detallado antes de decidir."
  }
];

const testimonials = [
  { name: "Pati", text: "La mejor forma de aprender inglés!!! Una organización excelente y muy recomendable!!" },
  { name: "Antonio Castillo", text: "Recomiendo Impulse English porque llevo 4 años trabajando con ellos y ofrecen un sistema de aprendizaje muy efectivo." },
  { name: "María Marcos", text: "Recomendaría Impulse academy a tod@s mis amigos. El equipo es excepcional y muy profesional." },
  { name: "Chus Zuazo", text: "Tengo una niña de 12 años y vino encantada de las clases de inglés intensivas. ¡Volveremos el año que viene!" }
];

const galleryImages = [
  { url: "/images/academy/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/stairs.jpg", alt: "Interior academia dos plantas La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/infantil-classes.jpg", alt: "Clases inglés infantil La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/photos-of-facilities.jpg", alt: "Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge La Vaguada Barrio del Pilar Madrid" },
  { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Equipo de profesores nativos Impulse English Academy Madrid" },
  { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Alumnos aprendiendo inglés en academia de inglés Madrid" },
  { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clase de inglés de adultos en La Vaguada Madrid" },
  { url: "/images/academy/infantil-classes.jpg", alt: "Clase de inglés infantil en La Vaguada Madrid" },
  { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante en clase de inglés en La Vaguada Madrid" },
  { url: "/images/academy/stairs.jpg", alt: "Instalaciones interiores Impulse English Academy La Vaguada" },
  { url: "/images/academy/outside-academy.jpg", alt: "Academia inglés La Vaguada Barrio del Pilar exterior" },
  { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula moderna con tecnología Impulse English La Vaguada" },
  { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor nativo Daniel enseñando en La Vaguada" },
  { url: "/images/academy/jp-with-students.jpg", alt: "Alumnos con profesor certificado Cambridge en La Vaguada" },
  { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Cambridge ES278 Impulse English La Vaguada" },
  { url: "/images/academy/photos-of-facilities.jpg", alt: "Facilidades academia inglés La Vaguada Barrio del Pilar" }
];

const methodSteps = [
  "Enseñanza personalizada basada en el nivel de cada alumno.",
  "Identificación de tus metas y la motivación para la consecución de aquellos logros.",
  "Impulsar el esfuerzo y el compromiso para alcanzar el máximo potencial.",
  "Creación de un ambiente de confianza, donde cometer errores forma parte del aprendizaje.",
  "Spaced repetition method para aprender vocabulario nuevo.",
  "Clases enfocadas en una comunicación constante.",
  "Desarrollo de los 5 pasos fundamentales, en el orden adecuado: leer, escuchar, gramática, hablar y escribir.",
  "Evaluación continua del progreso del alumno a través de diversas pruebas y test.",
  "Informes personalizados del progreso de cada alumno mes a mes."
];

export const locationMeta = {locationName: "La Vaguada", pageUrl: "https://impulse-english.es/academia-ingles-la-vaguada"};

export default function LaVaguadaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
{/* Exact Schema from Brief */}
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Academia de inglés Impulse English La Vaguada Barrio del Pilar Madrid" title="Academia de inglés Impulse English La Vaguada Barrio del Pilar Madrid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'La Vaguada' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                La Vaguada
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Clases de Inglés en La Vaguada
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro Oficial Cambridge
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <MapPin className="w-4 h-4" />
              <span>Junto al Centro Comercial La Vaguada, en pleno Barrio del Pilar</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro Oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">100% Aprobados 24/25</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Grupos Reducidos</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a
              href="/reservar-clase/"
                className="bg-brand-red hover:bg-[#d4444e] text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                Reservar Prueba de Nivel Gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20cerca%20de%20La%20Vaguada%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bienvenido Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Clases de Inglés en La Vaguada para Todas las Edades
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            Nuestras clases de inglés en La Vaguada son presenciales y online, para todas las edades. Trabajamos con grupos reducidos, contamos con certificado oficial como Centro Cambridge ES278, y estamos especializados en preparación de exámenes Cambridge. Ofrecemos prueba de nivel gratuita y una estrategia educativa idónea adaptada a cada alumno. A diferencia de otras opciones cercanas como Kids&Us La Vaguada, centrada solo en niños y adolescentes, en Impulse atendemos tanto a niños como a adultos, somos centro oficial de preparación Cambridge con 100% de aprobados y contamos con profesores nativos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            Trabajamos con niños desde infantil, adolescentes de primaria y secundaria, y adultos que buscan aprender inglés sin largos desplazamientos. Estamos junto al centro comercial La Vaguada, en pleno Barrio del Pilar (28029 Madrid), con acceso a Metro Barrio del Pilar (Línea 9) a 3 minutos andando, Metro Herrera Oria y Metro Peñagrande (Línea 7), y a los buses 147, 42 y 83 (parada Ginzo de Limia - Ferrol, a 1 minuto andando). También nos localizan desde Peñagrande, La Ventilla, La Paz, Plaza Castilla y Tetuán.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Nuestra academia se encuentra junto al Centro Comercial La Vaguada y al Parque de la Vaguada, en pleno código postal 28029. Familias del Colegio Ntra. Sra. Santa María y de las inmediaciones del Hospital La Paz eligen Impulse por su cercanía y resultados. Las estaciones de Metro Barrio del Pilar y Herrera Oria facilitan el acceso desde cualquier punto del norte de Madrid.
          </p>
        </div>
      </section>

      {/* Un equipo apasionado section */}
      <section id="about" className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Un equipo apasionado por formarte
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-6">
                Profesores nativos capacitados que utilizan estrategias y un método propio contrastado para reducir el tiempo de aprendizaje, potenciar la memorización y los automatismos, convirtiendo el aprendizaje del inglés en toda una aventura.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-8">
                Nuestro equipo está formado por profesores certificados con experiencia internacional. Utilizamos una estrategia educativa idónea que ha demostrado su efectividad en cientos de alumnos durante más de 4 años sirviendo a familias y profesionales de La Vaguada.
              </p>
              <div className="space-y-4">
                <p className="text-zinc-700">
                  <strong>Referencias y Certificaciones:</strong>
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.cambridgeenglish.org/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline font-medium">
                    Cambridge English
                  </a>
                  <span className="text-zinc-400">•</span>
                  <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline font-medium">
                    Linguaskill
                  </a>
                  <span className="text-zinc-400">•</span>
                  <a href="https://www.greatlittlepeople.com/en" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline font-medium">
                    Great Little People
                  </a>
                  <span className="text-zinc-400">•</span>
                  <a href="https://www.esic.edu/idiomas" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline font-medium">
                    Centro Cambridge ES278
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/primary-classes-students-smiling.jpg"
                alt="Equipo de profesores nativos Impulse English Academy Madrid"
                title="Equipo de profesores nativos Impulse English Academy Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Por Qué Elegir Nuestras Clases de Inglés en La Vaguada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-zinc-50 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                <p className="text-zinc-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Conoce nuestra academia
            </h2>
            <p className="text-zinc-600">
              Descubre por qué somos la mejor opción en La Vaguada
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés en La Vaguada"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Aprende inglés en todos los niveles: ¡Tu primera opción!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courses.map((course, i) => (
              <a
                key={i}
                href={course.href}
                className="bg-zinc-50 p-6 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-zinc-900 mb-1 group-hover:text-accent-blue transition-colors">{course.name}</h3>
                <p className="text-accent-blue font-medium text-sm mb-2">{course.method}</p>
                <p className="text-zinc-600 text-sm mb-3">{course.desc}</p>
              </a>
            ))}
          </div>

          {/* Detailed Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-accent-blue/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Inglés general</h4>
              <p className="text-zinc-700 text-sm mb-4">Todos los niveles A1-C2 con profesor cualificado y grupos reducidos.</p>
            </div>
            <div className="bg-accent-blue/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Preparación examen MOVERS</h4>
              <p className="text-zinc-700 text-sm mb-4">Certificación oficial Cambridge para primaria.</p>
            </div>
            <div className="bg-accent-blue/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Extensivos los viernes y los sábados</h4>
              <p className="text-zinc-700 text-sm mb-4">Clases intensivas con enfoque comunicativo.</p>
            </div>
            <div className="bg-accent-blue/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Preparación examen KET</h4>
              <p className="text-zinc-700 text-sm mb-4">A2 Key: Nivel intermedio bajo.</p>
            </div>
            <div className="bg-accent-blue/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Preparación examen FLYERS</h4>
              <p className="text-zinc-700 text-sm mb-4">A2 Flyers: Nivel intermedio para primaria.</p>
            </div>
            <div className="bg-accent-blue/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Cambridge Extensivo</h4>
              <p className="text-zinc-700 text-sm mb-4">B1, B2, C1: Preparación a tu ritmo.</p>
            </div>
            <div className="bg-accent-blue/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Preparación examen First Certificate, Advanced y Proficiency</h4>
              <p className="text-zinc-700 text-sm mb-4">B2 First, C1 Advanced, C2 Proficiency: Máximo nivel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Método Impulse Section */}
      <section id="method" className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            El Método Impulse
          </h2>
          <div className="space-y-4">
            {methodSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-zinc-900 mb-2">
                  {idx + 1}. {step}
                </h3>
              </div>
            ))}
          </div>

          {/* Method Sub-labels */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-zinc-900">Nivel y grupos</h4>
              <p className="text-zinc-600 text-sm mt-2">Evaluación inicial gratuita para colocación correcta.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-zinc-900">Certificación oficial</h4>
              <p className="text-zinc-600 text-sm mt-2">Preparamos para Cambridge, Linguaskill y EBAU.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-zinc-900">Horarios disponibles</h4>
              <p className="text-zinc-600 text-sm mt-2">Mañana, tarde y extensivos fin de semana.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-zinc-900">Resultados Cambridge</h4>
              <p className="text-zinc-600 text-sm mt-2">100% de aprobados en exámenes Cambridge 24/25.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm col-span-1 md:col-span-2">
              <h4 className="font-semibold text-zinc-900">Alumnos por grupo</h4>
              <p className="text-zinc-600 text-sm mt-2">Máximo 7-10 alumnos garantiza atención personalizada real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inglés para niños en La Vaguada */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Inglés para niños en La Vaguada
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de La Vaguada, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Apoyo escolar</strong> para colegios de la zona: refuerzo del inglés curricular</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Aprendizaje progresivo:</strong> metodología Great Little People para infantil, Cambridge Young Learners para primaria</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias de La Vaguada: tardes después del colegio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Grupos reducidos:</strong> máximo 7-10 niños para atención personalizada</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
              href="/cursos-ingles/infantil/"
                  className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Ver cursos infantil y primaria <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/primary-classes-students-smiling.jpg"
                alt="Alumnos aprendiendo inglés en academia de inglés Madrid"
                title="Alumnos aprendiendo inglés en academia de inglés Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos en La Vaguada */}
      <section className="py-12 md:py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos en La Vaguada Barrio del Pilar Madrid"
                title="Clases de inglés para adultos en La Vaguada Barrio del Pilar Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Clases de inglés para adultos en La Vaguada
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de casa con clases diseñadas para profesionales y adultos de La Vaguada. Todos los niveles, desde principiante hasta C2.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Clases de conversación:</strong> practica speaking desde el primer día con profesores altamente cualificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Inglés para trabajo o viajes:</strong> enfoque práctico y comunicativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Grupos reducidos</strong> cerca de casa: máximo 7-10 alumnos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Preparación Cambridge y Linguaskill:</strong> certificaciones oficiales reconocidas</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
              href="/cursos-ingles/adultos/"
                  className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Ver cursos para adultos <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge & Linguaskill */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Preparación Cambridge y Linguaskill
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <a href="/examenes-cambridge/" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors group">
              <h3 className="font-bold text-white mb-3 group-hover:text-yellow-300">Exámenes Cambridge</h3>
              <p className="text-white/80 text-sm">Pre-A1 hasta C2 Proficiency</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs text-white/60">B1 Preliminary</span>
                <span className="text-xs text-white/60">•</span>
                <span className="text-xs text-white/60">B2 First</span>
                <span className="text-xs text-white/60">•</span>
                <span className="text-xs text-white/60">C1 Advanced</span>
              </div>
            </a>
            <a href="/linguaskill/" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors group">
              <h3 className="font-bold text-white mb-3 group-hover:text-yellow-300">Linguaskill</h3>
              <p className="text-white/80 text-sm">Certificado en 48 horas. Expertos 2024-2025.</p>
            </a>
          </div>
          <p className="text-white/90 font-medium mb-8">
            Ventaja única: Haz el examen oficial en nuestra academia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/examenes-cambridge/"
              className="bg-white text-accent-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
            >
              Ver todos los exámenes Cambridge
            </a>
            <a
              href="/linguaskill/"
              className="bg-white/10 text-white border border-white/30 font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-accent-blue transition-colors"
            >
              Conocer Linguaskill
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-zinc-600 text-lg">
              Un espacio diseñado para el aprendizaje
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img.url}
                  alt={img.alt}
                  title={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / How to Get There */}
      <section id="contact" className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                Dónde encontrarnos
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <MapPin className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Junto al Centro Comercial La Vaguada</p>
                    <p className="text-zinc-600">En pleno Barrio del Pilar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Train className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Metro Barrio del Pilar (Línea 9)</p>
                    <p className="text-zinc-600">A 3 minutos andando</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Train className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Metro Peñagrande (Línea 7)</p>
                    <p className="text-zinc-600">12-15 minutos caminando</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Bus className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Autobuses</p>
                    <p className="text-zinc-600">Líneas 147, 42 y 83 (parada Ginzo de Limia - Ferrol, a 1 minuto andando)</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-accent-blue/5 rounded-xl border border-accent-blue/10">
                <p className="text-accent-blue font-medium text-sm mb-3">
                  <strong>Servimos también zonas cercanas:</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="/academia-ingles-barrio-del-pilar/" className="text-accent-blue hover:underline text-sm">Barrio del Pilar</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-penagrande/" className="text-accent-blue hover:underline text-sm">Peñagrande</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-la-ventilla/" className="text-accent-blue hover:underline text-sm">La Ventilla</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-la-paz/" className="text-accent-blue hover:underline text-sm">La Paz</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-plaza-castilla/" className="text-accent-blue hover:underline text-sm">Plaza Castilla</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-tetuan/" className="text-accent-blue hover:underline text-sm">Tetuán</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-cuatro-torres/" className="text-accent-blue hover:underline text-sm">Cuatro Torres</a>
                </div>
                <div className="mt-4 pt-4 border-t border-accent-blue/10">
                  <a href="/academias-ingles-madrid/por-barrios/" className="text-accent-blue hover:underline text-sm font-medium inline-flex items-center gap-1">
                    Ver todas las ubicaciones en Madrid <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-zinc-100 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7084812!3d40.4743948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422909a0b6b11b%3A0xbe6ef3e2ba8bb87b!2sImpulse%20English%20Academy!5e0!3m2!1ses!2ses!4v1701964800000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Impulse English Academy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
            Lo que dicen nuestros estudiantes…
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-zinc-900 font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-zinc-600 mb-6">
              Más de 150 familias de La Vaguada confían en nosotros. Lee sus experiencias reales en Google.
            </p>
            <a
              href={NAP.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              174+ reseñas reales
            </a>
          </div>
        </div>
      </section>

      {/* Local FAQs Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés en La Vaguada
          </h2>
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-zinc-900 mb-3">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Local CTA */}
      <section className="py-12 md:py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            Si buscas una academia de inglés cerca de La Vaguada, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
          </p>
          <a
              href="/reservar-clase/"
            className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
          >
            Reserva tu prueba gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Contacta con nosotros
              </h2>
              <p className="text-zinc-600 mb-8">
                Prueba de nivel gratuita. Sin compromiso. Respuesta en 24h.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={NAP.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp {NAP.phone}
                </a>
                <a
                  href={NAP.phoneTel}
                  className="bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
                <a
                  href={`mailto:${NAP.email}`}
                  className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  Email
                </a>
              </div>
              <p className="text-zinc-500 mt-6 text-sm">
                {NAP.fullAddress}
              </p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="la-vaguada"
                showPhone={true}
                showAge={true}
                showLevel={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
