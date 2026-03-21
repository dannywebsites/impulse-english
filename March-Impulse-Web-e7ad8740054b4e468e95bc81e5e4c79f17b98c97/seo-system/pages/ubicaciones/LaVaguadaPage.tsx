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
  { title: "Ubicación Premium en La Vaguada", desc: "A 8-10 minutos del Centro Comercial. Zona comercial y residencial." },
  { title: "Centro Oficial de Preparación Cambridge", desc: "Prepárate y haz el examen donde estudias." },
  { title: "100% de Aprobados Cambridge 24/25", desc: "Metodología probada. Resultados garantizados." },
  { title: "Grupos Reducidos (Máximo 7-10 Alumnos)", desc: "Atención personalizada que marca la diferencia." },
  { title: "Más de 4 Años Sirviendo a Familias de La Vaguada", desc: "145+ reseñas de 5 estrellas en Google." },
  { title: "Expertos en Principiantes Absolutos", desc: "\"¿Lo intentaste antes y no pudiste?\" Te ayudamos." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People", price: "64€/mes", desc: "Música, movimiento, diversión. Plataforma online para casa.", href: "/ingles-la-vaguada/infantil" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge", price: "71€/mes", desc: "Preparación A1 Movers, A2 Flyers, A2 Key.", href: "/ingles-la-vaguada/primaria" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge", price: "Desde 75€/mes", desc: "B1 Preliminary, B2 First, C1 Advanced. 100% aprobados.", href: "/ingles-la-vaguada/secundaria" },
  { name: "Adultos", method: "Todos los niveles", price: "79€/mes", desc: "Principiantes absolutos hasta C2. Cambridge y Linguaskill.", href: "/ingles-la-vaguada/adultos" },
  { name: "Clases Particulares", method: "Flexible", price: "Consultar", desc: "Presencial u online. Horarios adaptados a ti.", href: "/ingles-la-vaguada/particulares" }
];

const localFaqs = [
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
    answer: "Tenemos horarios de mañana y tarde: lunes y miércoles de 10:00 a 21:30, martes y jueves de 15:30 a 21:30, y viernes de 15:30 a 19:30. Adaptamos los horarios a familias y profesionales de la zona."
  },
  {
    question: "¿Cómo llego a la academia desde el Centro Comercial La Vaguada?",
    answer: "Estamos a solo 8-10 minutos caminando del Centro Comercial La Vaguada. Nuestra dirección es Avenida de El Ferrol, 22. También estamos a 500 metros de Metro Barrio del Pilar (Línea 9)."
  }
];

export default function LaVaguadaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Academia de Inglés en La Vaguada"
        description="Academia de inglés junto a La Vaguada, Barrio del Pilar. Centro preparador Cambridge oficial. Linguaskill. 100% aprobados."
        keywords="academia inglés la vaguada, clases inglés cerca vaguada, cambridge madrid norte, cursos inglés barrio pilar"
        canonical="/academia-ingles-la-vaguada"
      />
      <SchemaMarkup schema={generateLocationPageSchema({
        locationName: "La Vaguada",
        pageUrl: "https://impulse-english.es/academia-ingles-la-vaguada"
      })} />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-accent-blue to-blue-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Ubicaciones', href: '/academia-ingles-barrio-del-pilar' },
                { label: 'La Vaguada' }
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
              Academia de Inglés en La Vaguada
            </h1>
            <p className="text-xl text-white/90 font-light mb-4">
              Centro Oficial Cambridge
            </p>
            <div className="flex items-center gap-2 text-white/70 mb-6">
              <MapPin className="w-5 h-5" />
              <span>A 8-10 minutos caminando del Centro Comercial La Vaguada</span>
            </div>
            <p className="text-white/70 mb-8">
              Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">Centro Oficial Cambridge</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">100% Aprobados 24/25</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">Desde 64€/mes</span>
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
                href="https://wa.me/34604910611?text=Hola,%20vivo%20cerca%20de%20La%20Vaguada%20y%20me%20gustaría%20información%20sobre%20los%20cursos"
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
            Nuestra academia ofrece clases de inglés cerca de La Vaguada, una zona comercial y residencial muy bien comunicada con el Centro Comercial La Vaguada y Metro Barrio del Pilar (Línea 9). Trabajamos con niños, adolescentes y adultos que buscan aprender inglés sin largos desplazamientos, con grupos reducidos y atención personalizada. Somos centro oficial de preparación Cambridge con 100% de aprobados.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            La Academia de Inglés de Referencia en La Vaguada
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

      {/* Video Section - Above Courses */}
      <section className="py-16 md:py-20 px-6 bg-white">
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
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Cursos para Todas las Edades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <Link
                key={i}
                to={course.href}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-zinc-900 mb-1 group-hover:text-accent-blue transition-colors">{course.name}</h3>
                <p className="text-accent-blue font-medium text-sm mb-2">{course.method}</p>
                <p className="text-zinc-600 text-sm mb-3">{course.desc}</p>
                <p className="text-accent-blue font-bold">{course.price}</p>
              </Link>
            ))}
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
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG"
                alt="Clases de inglés para niños en La Vaguada Barrio del Pilar Madrid"
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
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG"
                alt="Clases de inglés para adultos en La Vaguada Barrio del Pilar Madrid"
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

      {/* Cambridge & Linguaskill */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Preparación Cambridge y Linguaskill
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Link to="/examenes-cambridge" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors group">
              <h3 className="font-bold text-white mb-3 group-hover:text-yellow-300">Exámenes Cambridge</h3>
              <p className="text-white/80 text-sm">Pre-A1 hasta C2 Proficiency</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs text-white/60">B1 Preliminary</span>
                <span className="text-xs text-white/60">•</span>
                <span className="text-xs text-white/60">B2 First</span>
                <span className="text-xs text-white/60">•</span>
                <span className="text-xs text-white/60">C1 Advanced</span>
              </div>
            </Link>
            <Link to="/examenes-cambridge/linguaskill" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors group">
              <h3 className="font-bold text-white mb-3 group-hover:text-yellow-300">Linguaskill</h3>
              <p className="text-white/80 text-sm">Certificado en 48 horas. Expertos 2024-2025.</p>
            </Link>
          </div>
          <p className="text-white/90 font-medium mb-8">
            Ventaja única: Haz el examen oficial en nuestra academia.
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

      {/* How to Get There */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                Cómo Llegar a Nuestra Academia en La Vaguada
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Desde Centro Comercial La Vaguada</p>
                    <p className="text-zinc-600">8-10 minutos caminando</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Train className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Metro Barrio del Pilar (Línea 9)</p>
                    <p className="text-zinc-600">500 metros caminando</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Train className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Metro Peñagrande (Línea 7)</p>
                    <p className="text-zinc-600">12-15 minutos caminando</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Bus className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Autobuses</p>
                    <p className="text-zinc-600">42, 132, 137, 147</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-accent-blue/5 rounded-xl border border-accent-blue/10">
                <p className="text-accent-blue font-medium text-sm mb-3">
                  <strong>Servimos también zonas cercanas:</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/academia-ingles-barrio-del-pilar" className="text-accent-blue hover:underline text-sm">Barrio del Pilar</Link>
                  <span className="text-accent-blue/50">•</span>
                  <Link to="/academia-ingles-penagrande" className="text-accent-blue hover:underline text-sm">Peñagrande</Link>
                  <span className="text-accent-blue/50">•</span>
                  <Link to="/academia-ingles-la-ventilla" className="text-accent-blue hover:underline text-sm">La Ventilla</Link>
                  <span className="text-accent-blue/50">•</span>
                  <Link to="/academia-ingles-la-paz" className="text-accent-blue hover:underline text-sm">La Paz</Link>
                  <span className="text-accent-blue/50">•</span>
                  <Link to="/academia-ingles-plaza-castilla" className="text-accent-blue hover:underline text-sm">Plaza Castilla</Link>
                  <span className="text-accent-blue/50">•</span>
                  <Link to="/academia-ingles-tetuan" className="text-accent-blue hover:underline text-sm">Tetuán</Link>
                  <span className="text-accent-blue/50">•</span>
                  <Link to="/academia-ingles-cuatro-torres" className="text-accent-blue hover:underline text-sm">Cuatro Torres</Link>
                </div>
                <div className="mt-4 pt-4 border-t border-accent-blue/10">
                  <Link to="/academias-ingles-madrid/por-barrios" className="text-accent-blue hover:underline text-sm font-medium inline-flex items-center gap-1">
                    Ver todas las ubicaciones en Madrid <ArrowRight className="w-4 h-4" />
                  </Link>
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
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">
            Descubre lo que dicen nuestros alumnos sobre nosotros
          </h2>
          <p className="text-zinc-600 mb-8">
            Más de 145 familias de La Vaguada confían en nosotros. Lee sus experiencias reales en Google.
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
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg", alt: "Fachada exterior Impulse English Academy La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG", alt: "Aula principal academia inglés La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG", alt: "Aula tecnológica academia inglés La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Stairs.JPG", alt: "Interior academia dos plantas La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG", alt: "Clases inglés infantil La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG", alt: "Estudiantes primaria felices La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG", alt: "Profesor Daniel ayudando estudiantes La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+student+happy.JPG", alt: "Estudiante secundaria feliz La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG", alt: "Clases particulares adultos La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg", alt: "Estudiantes certificados Cambridge La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG", alt: "Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png", alt: "Centro Preparador Cambridge La Vaguada Barrio del Pilar Madrid" }
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

      {/* Local FAQs Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés en La Vaguada
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
            Si buscas una academia de inglés cerca de La Vaguada, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
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

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Empieza Hoy en La Vaguada
              </h2>
              <p className="text-zinc-600 mb-8">
                Prueba de nivel gratuita. Sin compromiso. Respuesta en 24h.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/34604910611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp +34 604 910 611
                </a>
                <a
                  href="tel:+34604910611"
                  className="bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </div>
              <p className="text-zinc-500 mt-6 text-sm">
                Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid
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
      <SchemaMarkup schema={generateOrganizationSchema()} />
      <SchemaMarkup schema={generateFAQSchema(localFaqs)} />
    </>
  );
}
