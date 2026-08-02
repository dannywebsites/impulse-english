import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Train, Bus, CheckCircle, Star, ArrowRight } from 'lucide-react';
import NearbyAreas from '../../components/NearbyAreas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const benefits = [
  { title: "Ubicación Premium en La Vaguada", desc: "Junto al Centro Comercial La Vaguada, en pleno Barrio del Pilar. Zona comercial y residencial." },
  { title: "Centro Oficial de Preparación Cambridge", desc: "Prepárate y haz el examen donde estudias." },
  { title: "100% de Aprobados Cambridge 24/25", desc: "Metodología probada. Resultados garantizados." },
  { title: "Grupos Reducidos (Máximo 7-10 Alumnos)", desc: "Atención personalizada que marca la diferencia." },
  { title: "Más de 4 Años Sirviendo a Familias de La Vaguada", desc: "180 reseñas de 5 estrellas en Google, con una media de 5,0." },
  { title: "Expertos en Principiantes Absolutos", desc: "\"¿Lo intentaste antes y no pudiste?\" Te ayudamos." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People", desc: "Música, movimiento, diversión. Plataforma online para casa.", href: "/cursos-ingles/infantil/" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge", desc: "Preparación A1 Movers, A2 Flyers, A2 Key.", href: "/cursos-ingles/primaria/" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge", desc: "B1 Preliminary, B2 First, C1 Advanced. 100% aprobados.", href: "/cursos-ingles/secundaria/" },
  { name: "Adultos", method: "Todos los niveles", desc: "Principiantes absolutos hasta C2. Cambridge y Linguaskill.", href: "/cursos-ingles/adultos/" },
  { name: "Clases Particulares", method: "Flexible", desc: "Presencial u online. Horarios adaptados a ti.", href: "/cursos-ingles/particulares/" }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Qué niveles de inglés ofrecéis en La Vaguada?",
    answer: "Ofrecemos todos los niveles desde principiante (A1) hasta avanzado (C2). Realizamos una prueba de nivel gratuita para ubicarte en el grupo adecuado. Preparamos exámenes Cambridge (Pre-A1 Starters hasta C2 Proficiency) y Linguaskill."
  },
  {
    question: "¿Hay prueba de nivel gratuita en vuestra academia cerca de La Vaguada?",
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
  { name: "Michelle Correa Sánchez", text: "Una academia con profesores muy amables y cercanos, te enseñan acorde a tus capacidades y se adaptan a las necesidades del alumno. Especial mención a Danny y JP, que hace las clases divertidas, entretenidas y aprendes mucho de ellos. La recomiendo al 100%." },
  { name: "Esther Valencia", text: "Súper recomendable!! Sus métodos me han ayudado a avanzar rápidamente de nivel y mejorar profesionalmente. Se nota su pasión por la enseñanza, el trato es personalizado y de calidad. Son un 10!!" },
  { name: "Luis Martin Gonzalez", text: "100% recomendable, merece la pena. De echo mi hijo ahora sigue con JP, para prestarse sus exámenes de titulación Gran persona JP y su método" },
  { name: "Yurisbeth Rivero Chirinos", text: "Mi hija estudia en Impulse English Academy y estoy muy contenta con los resultados, su método de enseñanza es excelente, la atención es cercana, los profesores son dedicados y  atentos. Quiero agradecer especialmente a JP, su profesor, por su enorme calidad humana. Él no solo enseña inglés, también ha acompañado a mi hija en un momento difícil de adaptación como emigrante, haciéndola sentir vista, apoyada y parte de una pequeña comunidad que se siente como familia. Gracias por todo lo que aportan, no solo en conocimiento, sino también en humanidad." }
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
          <div className="absolute inset-0 bg-accent-blue/90"></div>
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
              Clases de inglés en La Vaguada, a 1 minuto del bus
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
              href="/prueba-de-nivel-ingles/"
                className="bg-brand-red hover:bg-brand-red-600 text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
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
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bienvenido Section */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-6">
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
      <section id="about" className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
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
            <div className="overflow-hidden rounded-2xl shadow-lift">
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
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-12">
            Por Qué Elegir Nuestras Clases de Inglés en La Vaguada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-zinc-50 rounded-xl">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                <p className="text-zinc-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="t-h3 text-zinc-900 mb-4">
              Conoce nuestra academia
            </h2>
            <p className="text-zinc-600">
              Descubre por qué somos la mejor opción en La Vaguada
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés en La Vaguada"
            className="shadow-panel"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-12">
            Aprende inglés en todos los niveles: ¡Tu primera opción!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courses.map((course, i) => (
              <a
                key={i}
                href={course.href}
                className="card-interactive group p-6"
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
      <section id="method" className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12">
            El Método Impulse
          </h2>
          <div className="space-y-4">
            {methodSteps.map((step, idx) => (
              <div key={idx} className="card p-6">
                <h3 className="font-semibold text-zinc-900 mb-2">
                  {idx + 1}. {step}
                </h3>
              </div>
            ))}
          </div>

          {/* Method Sub-labels */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h4 className="font-semibold text-zinc-900">Nivel y grupos</h4>
              <p className="text-zinc-600 text-sm mt-2">Evaluación inicial gratuita para colocación correcta.</p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold text-zinc-900">Certificación oficial</h4>
              <p className="text-zinc-600 text-sm mt-2">Preparamos para Cambridge, Linguaskill y EBAU.</p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold text-zinc-900">Horarios disponibles</h4>
              <p className="text-zinc-600 text-sm mt-2">Mañana, tarde y extensivos fin de semana.</p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold text-zinc-900">Resultados Cambridge</h4>
              <p className="text-zinc-600 text-sm mt-2">100% de aprobados en exámenes Cambridge 24/25.</p>
            </div>
            <div className="card p-6 col-span-1 md:col-span-2">
              <h4 className="font-semibold text-zinc-900">Alumnos por grupo</h4>
              <p className="text-zinc-600 text-sm mt-2">Máximo 7-10 alumnos garantiza atención personalizada real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inglés para niños en La Vaguada */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Inglés para niños en La Vaguada
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de La Vaguada, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Apoyo escolar</strong> para colegios de la zona: refuerzo del inglés curricular</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Aprendizaje progresivo:</strong> metodología Great Little People para infantil, Cambridge Young Learners para primaria</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias de La Vaguada: tardes después del colegio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
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
            <div className="overflow-hidden rounded-2xl shadow-lift">
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
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lift">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos en La Vaguada Barrio del Pilar Madrid"
                title="Clases de inglés para adultos en La Vaguada Barrio del Pilar Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="t-h2 text-zinc-900 mb-6">
                Clases de inglés para adultos en La Vaguada
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de casa con clases diseñadas para profesionales y adultos de La Vaguada. Todos los niveles, desde principiante hasta C2.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Clases de conversación:</strong> practica speaking desde el primer día con profesores altamente cualificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Inglés para trabajo o viajes:</strong> enfoque práctico y comunicativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Grupos reducidos</strong> cerca de casa: máximo 7-10 alumnos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
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
      <section className="section-lead px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="t-h2 text-white mb-6">
            Preparación Cambridge y Linguaskill
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <a href="/examenes-cambridge/" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors group">
              <h3 className="font-bold text-white mb-3 group-hover:text-amber-300">Exámenes Cambridge</h3>
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
              <h3 className="font-bold text-white mb-3 group-hover:text-amber-300">Linguaskill</h3>
              <p className="text-white/80 text-sm">Certificado en 48 horas. Expertos 2025-2026.</p>
            </a>
          </div>
          <p className="text-white/90 font-medium mb-8">
            Ventaja única: Haz el examen oficial en nuestra academia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/examenes-cambridge/"
              className="bg-white text-accent-blue font-bold py-3 px-6 rounded-lg hover:bg-amber-400 hover:text-accent-blue-900 transition-colors"
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
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="t-h2 text-zinc-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-zinc-600 text-lg">
              Un espacio diseñado para el aprendizaje
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
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
      <section id="contact" className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-8">
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
              <NearbyAreas currentHref="/academia-ingles-la-vaguada/" variant="accent" />
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
      <section id="testimonials" className="section-lead px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12">
            Lo que dicen nuestros estudiantes…
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-amber-400" />
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
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Star className="w-5 h-5 fill-yellow-400 text-amber-400" />
              180 reseñas reales
            </a>
          </div>
        </div>
      </section>

      {/* Quien da la clase. Senal E-E-A-T: persona con nombre, no "nuestro equipo". */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién te la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Detrás del mostrador hay dos personas, no una marca</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, junto al Centro Comercial La Vaguada"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>Al lado de La Vaguada hay cadenas de academias con el mismo cartel en veinte ciudades. Nosotros somos un centro único, y la persona que lo dirige da clase.</p>
              <p>
                <strong className="text-zinc-900">JP</strong>, cofundador y director de estudios,
                lleva <strong className="text-zinc-900">más de 10 años</strong> enseñando inglés,
                con 10 años previos viviendo en Irlanda.
              </p>
              <p>
                Diseña los grupos, hace en persona la prueba de nivel gratuita de 25 minutos y
                contesta el WhatsApp del 604 910 611. La respuesta que recibes es suya.
              </p>
              <p>
                Es especialista en exámenes Cambridge y en adquisición temprana del idioma, y su
                nombre se repite en las 180 reseñas de Google del centro. El segundo cofundador es
                Danny Fitzpatrick, que se ocupa de adultos y de inglés de negocios.
              </p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real: resultado concreto, con nombre y desenlace verificable. */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Daniel de la Peña</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Si quieres saber hasta dónde llega esto, el caso de Daniel es el más largo que tenemos documentado: año y medio de clases y un cambio de profesión al final.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">18 meses</p><p className="t-small text-zinc-600">cerca de año y medio con nosotros</p></div>
              <div><p className="t-h3 text-accent-blue">Su objetivo</p><p className="t-small text-zinc-600">trabajar en países de habla inglesa</p></div>
              <div><p className="t-h3 text-emerald-600">Hoy</p><p className="t-small text-zinc-600">profesor titulado, da inglés en primaria a jornada completa</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Daniel vino con un objetivo profesional concreto: <em>"acceder a oportunidades laborales en el extranjero y en países de habla inglesa"</em>. Estuvo cerca de año y medio en el centro. Sobre si funcionó, sus palabras: <em>"es algo que conseguí… cumplió con mis expectativas"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">Lo que valora no es una metodología con nombre comercial, sino el <em>"trato personalizado y sobre todo profesionalidad y compromiso para con tu proceso de aprendizaje y tu situación de partida"</em>. Esa última parte, la situación de partida, es la razón por la que empezamos siempre con una prueba de nivel.</p>
            <p className="text-zinc-600 leading-relaxed mb-6">Hoy es profesor titulado y enseña inglés en primaria a jornada completa. Pasó de necesitar el idioma a vivir de él.</p>
            <a href="/testimonios/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver el vídeo y otros casos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Precios visibles en pagina, no solo en schema. */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Qué cuesta cada curso</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 mb-8">Estás a un minuto andando del centro comercial, así que probablemente puedas pasarte a preguntar. No hace falta: la tarifa completa está aquí.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="py-3 pr-4 font-display text-xs uppercase tracking-wider text-zinc-500">Curso</th>
                  <th className="py-3 pr-4 font-display text-xs uppercase tracking-wider text-zinc-500">Edad</th>
                  <th className="py-3 font-display text-xs uppercase tracking-wider text-zinc-500">Precio</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Infantil</td><td className="py-3 pr-4">2-5 años</td><td className="py-3">desde 64 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Primaria</td><td className="py-3 pr-4">6-12 años</td><td className="py-3">83 €/mes · 239 €/trimestre</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Secundaria</td><td className="py-3 pr-4">13-17 años</td><td className="py-3">desde 87 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Adultos</td><td className="py-3 pr-4">todos los niveles</td><td className="py-3">94 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Clases particulares</td><td className="py-3 pr-4">todas las edades</td><td className="py-3">29 €/hora</td></tr>
                <tr><td className="py-3 pr-4 font-medium">Clases online</td><td className="py-3 pr-4">todas las edades</td><td className="py-3">29 €/hora</td></tr>
              </tbody>
            </table>
          </div>
          <p className="t-small text-zinc-500 mt-6">
            Sumado a la cuota, y una única vez: <strong>45 € de matrícula</strong> y un
            <strong> libro de 40 € como máximo</strong>. Sin cuota de mantenimiento ni permanencia.
            En la mensualidad entran las clases semanales, los simulacros de Cambridge, el
            seguimiento personalizado y los recursos online. Hay descuento por pago trimestral y
            para familias con más de un hijo matriculado. Las tasas del examen oficial las fija
            Cambridge y van aparte.
          </p>
        </div>
      </section>

      {/* Local FAQs Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12">
            Preguntas frecuentes sobre clases de inglés en La Vaguada
          </h2>
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-zinc-900 mb-3">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Local CTA */}
      <section className="section-tight px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            Si buscas una academia de inglés cerca de La Vaguada, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
          </p>
          <a
              href="/prueba-de-nivel-ingles/"
            className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-4 px-8 rounded-lg hover:bg-amber-400 hover:text-accent-blue-900 transition-colors"
          >
            Pide tu prueba de nivel gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
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
                  className="bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp {NAP.phone}
                </a>
                <a
                  href={NAP.phoneTel}
                  className="bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
                <a
                  href={`mailto:${NAP.email}`}
                  className="btn-secondary"
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
                variant="refresh"
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
