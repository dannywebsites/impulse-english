import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Train, Bus, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumb from '../../components/Breadcrumb';
import SEOHead from '../../components/SEOHead';
import { generateLocationPageSchema, generateOrganizationSchema, generateFAQSchema } from '../../utils/schemaData';

const benefits = [
  { title: "A 15 Minutos de La Ventilla", desc: "15 minutos caminando o 15 minutos en metro. Excelente conexión desde La Ventilla." },
  { title: "Centro Oficial de Preparación Cambridge", desc: "Prepárate y haz el examen donde estudias. Sin sorpresas." },
  { title: "100% de Aprobados Cambridge 24/25", desc: "Todos nuestros estudiantes aprobaron sus exámenes." },
  { title: "Grupos Reducidos (Máximo 7-10 Alumnos)", desc: "Atención personalizada real. No 15-20 como otras \"reducidas\"." },
  { title: "Vecinos de La Ventilla Nos Eligen", desc: "Más de 145 reseñas de 5 estrellas en Google de familias de la zona." },
  { title: "Metodología Impulse Probada", desc: "Conversación desde día 1. Resultados medibles. Aprendizaje efectivo." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People", price: "64€/mes", href: "/ingles-la-vaguada/infantil" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge", price: "71€/mes", href: "/ingles-la-vaguada/primaria" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge B1/B2/C1", price: "Desde 75€/mes", href: "/ingles-la-vaguada/secundaria" },
  { name: "Adultos", method: "Todos niveles + Cambridge + Linguaskill", price: "79€/mes", href: "/ingles-la-vaguada/adultos" },
  { name: "Clases Particulares", method: "Presencial u online", price: "Horarios flexibles", href: "/ingles-la-vaguada/particulares" }
];

const localFaqs = [
  {
    question: "¿Qué niveles de inglés ofrecéis cerca de La Ventilla?",
    answer: "Ofrecemos todos los niveles desde principiante (A1) hasta avanzado (C2). Realizamos una prueba de nivel gratuita para ubicarte en el grupo adecuado. Preparamos exámenes Cambridge (Pre-A1 Starters hasta C2 Proficiency) y Linguaskill."
  },
  {
    question: "¿Hay clase de prueba gratuita en vuestra academia cerca de La Ventilla?",
    answer: "Sí, ofrecemos una prueba de nivel gratuita de 25 minutos donde evaluamos tu nivel actual y te recomendamos el curso más adecuado. Puedes reservarla por WhatsApp o a través de nuestra web."
  },
  {
    question: "¿Cuántos alumnos hay por grupo en las clases de inglés?",
    answer: "Nuestros grupos son reducidos: máximo 7-10 alumnos por clase. Esto garantiza atención personalizada real, no como otras academias que dicen tener grupos reducidos con 15-20 estudiantes."
  },
  {
    question: "¿Qué horarios hay disponibles para clases de inglés cerca de La Ventilla?",
    answer: "Tenemos horarios de mañana y tarde: lunes y miércoles de 10:00 a 21:30, martes y jueves de 15:30 a 21:30, y viernes de 15:30 a 19:30. Adaptamos los horarios a familias y profesionales de la zona."
  },
  {
    question: "¿Cómo llego a la academia desde La Ventilla?",
    answer: "Estamos muy bien comunicados. Desde La Ventilla puedes llegar en metro hasta Barrio del Pilar (Línea 9), que está a solo 500 metros de nuestra academia. También hay varias líneas de autobús."
  }
];


export default function LaVentillaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Academia de Inglés cerca de La Ventilla | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  return (
    <>
      <SEOHead
        title="Academia de Inglés en La Ventilla"
        description="Academia de inglés cerca de La Ventilla Madrid. Centro preparador Cambridge oficial con 100% aprobados. A 15 min de La Ventilla. Grupos reducidos máx 10 alumnos."
        keywords="academia inglés la ventilla, clases inglés la ventilla, cursos inglés la ventilla madrid, cambridge la ventilla, aprender inglés la ventilla"
        canonical="/academia-ingles-la-ventilla"
      />
      <SchemaMarkup schema={generateLocationPageSchema({
        locationName: "La Ventilla",
        pageUrl: "https://impulse-english.es/academia-ingles-la-ventilla"
      })} />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-accent-blue to-blue-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Ubicaciones', href: '/academia-ingles-barrio-del-pilar' },
                { label: 'La Ventilla' }
              ]}
              variant="light"
            />
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-red-400" />
              <span className="text-white/80 font-medium">Ubicación</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Academia de Inglés cerca de La Ventilla
            </h1>
            <p className="text-xl text-white/90 font-light mb-4">
              Centro Oficial Cambridge a 15 minutos de La Ventilla
            </p>
            <div className="flex items-center gap-2 text-white/70 mb-6">
              <Train className="w-5 h-5" />
              <span>15 minutos caminando o 15 minutos en metro (Línea 9)</span>
            </div>
            <p className="text-white/70 mb-8">
              Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">Centro Oficial Cambridge</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">100% Aprobados 24/25</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">Grupos Reducidos</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/reservar-clase"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
              >
                Reservar Prueba de Nivel Gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/34604910611?text=Hola,%20vivo%20en%20La%20Ventilla%20y%20me%20gustaría%20información%20sobre%20los%20cursos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-zinc-700 leading-relaxed">
            Nuestra academia ofrece clases de inglés cerca de La Ventilla, una zona residencial bien comunicada con Metro Ventilla y Metro Barrio del Pilar (Línea 9). Trabajamos con niños, adolescentes y adultos que buscan aprender inglés sin largos desplazamientos, con grupos reducidos y atención personalizada. Somos centro oficial de preparación Cambridge con 100% de aprobados.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Por Qué Vecinos de La Ventilla Nos Eligen
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

      {/* How to Get There */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
            Cómo Llegar desde La Ventilla
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-accent-blue" />
                <h3 className="font-bold text-zinc-900">Caminando</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde <strong>La Ventilla</strong>:
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Dirección Barrio del Pilar</li>
                <li>• Camina 500 metros hasta nuestra academia</li>
              </ul>
              <p className="text-accent-blue font-medium mt-4">Tiempo total: 15 minutos</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-8 h-8 text-green-600" />
                <h3 className="font-bold text-zinc-900">En Metro</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde <strong>Metro Ventilla (Línea 9)</strong>:
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Toma la Línea 9 dirección Mirasierra</li>
                <li>• Baja en Barrio del Pilar (1 parada - 15 minutos)</li>
                <li>• Camina 500 metros hasta nuestra academia</li>
              </ul>
              <p className="text-green-600 font-medium mt-4">Tiempo total metro: 15 minutos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Above Courses */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Conoce nuestra academia
            </h2>
            <p className="text-zinc-600">
              Descubre por qué somos la mejor opción cerca de La Ventilla
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de La Ventilla"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">
            Cursos Disponibles para Residentes de La Ventilla
          </h2>
          <p className="text-zinc-600 text-center mb-12">Descuento disponible para pago trimestral</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <Link
                key={i}
                to={course.href}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">{course.name}</h3>
                <p className="text-zinc-600 text-sm mb-3">{course.method}</p>
                <p className="text-accent-blue font-bold">{course.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inglés para niños cerca de La Ventilla */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Inglés para niños cerca de La Ventilla
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de La Ventilla, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
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
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias cerca de La Ventilla: tardes después del colegio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Grupos reducidos:</strong> máximo 7-10 niños para atención personalizada</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/ingles-la-vaguada/infantil"
                  className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Ver cursos infantil y primaria <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/facilities/primary-classes-students-smiling.jpg"
                alt="Clases de inglés para niños cerca de La Ventilla La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos cerca de La Ventilla */}
      <section className="py-12 md:py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/facilities/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos cerca de La Ventilla La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Clases de inglés para adultos cerca de La Ventilla
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de casa con clases diseñadas para profesionales y adultos cerca de La Ventilla. Todos los niveles, desde principiante hasta C2.
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
                <Link
                  to="/ingles-la-vaguada/adultos"
                  className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Ver cursos para adultos <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Exams */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Preparación Exámenes Cambridge
          </h2>
          <p className="text-white/80 mb-8">
            Preparamos todos los niveles Cambridge:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">Pre-A1 Starters</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A1 Movers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Flyers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Key</span>
            <Link to="/examenes-cambridge/b1-preliminary" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">B1 Preliminary</Link>
            <Link to="/examenes-cambridge/b2-first" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-yellow-400 hover:text-blue-900 transition-colors">B2 First</Link>
            <Link to="/examenes-cambridge/c1-advanced-guia" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">C1 Advanced</Link>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">C2 Proficiency</span>
          </div>
          <p className="text-white/90 font-medium mb-8">
            Ventaja: Haces el examen en el mismo lugar donde te preparas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/examenes-cambridge"
              className="bg-white text-accent-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
            >
              Ver todos los exámenes Cambridge
            </Link>
            <Link
              to="/linguaskill"
              className="bg-white/10 text-white border border-white/30 font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-accent-blue transition-colors"
            >
              Conocer Linguaskill
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">
            Descubre lo que dicen nuestros alumnos sobre nosotros
          </h2>
          <p className="text-zinc-600 mb-8">
            Más de 145 familias de La Ventilla confían en nosotros. Lee sus experiencias reales en Google.
          </p>
          <a
            href="https://www.google.com/maps/place/Impulse+English+Academy/@40.4743948,-3.7084812,17z/data=!4m8!3m7!1s0xd422909a0b6b11b:0xbe6ef3e2ba8bb87b!8m2!3d40.4743948!4d-3.7059063!9m1!1b1!16s%2Fg%2F11t3yr5nwq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            Ver todas las reseñas
          </a>
        </div>
      </section>

      {/* Gallery Section - Photos at Bottom */}
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
            {[
              { url: "/images/academy/locations/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/facilities/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/facilities/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/facilities/stairs.jpg", alt: "Interior academia dos plantas cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/facilities/infantil-classes.jpg", alt: "Clases inglés infantil cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/facilities/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/team/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/facilities/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/facilities/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/team/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/facilities/photos-of-facilities.jpg", alt: "Instalaciones academia inglés cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/logos/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge cerca La Ventilla La Vaguada Madrid" }
            ].map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-12 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="p-6 bg-white rounded-xl border border-zinc-200">
            <p className="text-zinc-900 font-medium mb-4">
              <strong>Servimos también zonas cercanas:</strong>
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Link to="/academia-ingles-barrio-del-pilar" className="text-accent-blue hover:underline text-sm">Barrio del Pilar</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/academia-ingles-la-vaguada" className="text-accent-blue hover:underline text-sm">La Vaguada</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/academia-ingles-penagrande" className="text-accent-blue hover:underline text-sm">Peñagrande</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/academia-ingles-la-paz" className="text-accent-blue hover:underline text-sm">La Paz</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/academia-ingles-plaza-castilla" className="text-accent-blue hover:underline text-sm">Plaza Castilla</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/academia-ingles-tetuan" className="text-accent-blue hover:underline text-sm">Tetuán</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/academia-ingles-cuatro-torres" className="text-accent-blue hover:underline text-sm">Cuatro Torres</Link>
            </div>
            <Link to="/academias-ingles-madrid/por-barrios" className="text-accent-blue hover:underline text-sm font-medium inline-flex items-center gap-1">
              Ver todas las ubicaciones en Madrid <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local FAQs Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de La Ventilla
          </h2>
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <div key={index} className="bg-zinc-50 rounded-xl p-6">
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
            Si buscas una academia de inglés cerca de La Ventilla, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
          </p>
          <Link
            to="/reservar-clase"
            className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
          >
            Reserva tu prueba gratuita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Vives en La Ventilla?
          </h2>
          <p className="text-zinc-400 mb-8">
            Estamos a solo 15 minutos. Ven a conocernos y prueba una clase gratis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/reservar-clase"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Reservar Clase de Prueba
            </Link>
            <Link
              to="/contacto"
              className="bg-white hover:bg-zinc-100 text-zinc-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />

      <SchemaMarkup schema={generateOrganizationSchema()} />
      <SchemaMarkup schema={generateFAQSchema(localFaqs)} />
    </>
  );
}
