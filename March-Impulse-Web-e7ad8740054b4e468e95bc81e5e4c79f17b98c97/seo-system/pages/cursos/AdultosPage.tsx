import React, { useEffect } from 'react';
import { Briefcase, BookOpen, Users, Target, Globe, Award, Clock, CheckCircle, Phone, Calendar, Coffee, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import SEOHead from '../../components/SEOHead';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import { facilityImages } from '../../../utils/images';

const courseSchema = generateCourseSchema({
  name: "Curso de Inglés para Adultos",
  description: "Inglés para adultos en La Vaguada / Barrio del Pilar. Grupos máx. 8, horarios mañana y tarde, preparación Cambridge y centro oficial Linguaskill. Prueba de nivel gratis.",
  url: `${businessInfo.url}/ingles-la-vaguada/adultos`,
  courseCode: "ADULT-CAM",
  educationalLevel: "Adult Education",
  timeRequired: "PT2H",
  price: "79",
  image: "/images/academy/logos/img-4117.png"
});


const faqs = [
  {
    question: "¿Qué nivel de inglés piden en las empresas?",
    answer: "Depende del sector, pero B2 es el nivel más habitual para entornos profesionales y C1 se valora para roles internacionales o de liderazgo. Lo importante es que puedas comunicarte con seguridad. Te orientamos para elegir preparación Cambridge o Linguaskill según tu objetivo laboral."
  },
  {
    question: "¿B2 es suficiente para trabajar?",
    answer: "Para muchos puestos sí, especialmente si tu trabajo no es 100% en inglés. Si necesitas reuniones frecuentes, negociación o documentación compleja, C1 te dará más soltura. Tras la prueba de nivel, definimos el objetivo realista y el camino más eficiente para alcanzarlo."
  },
  {
    question: "¿Cuánto se tarda en preparar el B2?",
    answer: "Depende del punto de partida y la constancia. No es lo mismo B1 bajo que B1 alto. Tras evaluarte, te damos una estimación realista y una estrategia: base + práctica guiada + simulacros. La clave es trabajar habilidades del examen sin descuidar el inglés real."
  },
  {
    question: "¿Qué es mejor: Cambridge o Linguaskill?",
    answer: "Cambridge es una certificación muy conocida y estable. Linguaskill es ideal si necesitas un resultado rápido para un requisito específico. Te ayudamos a decidir según tu empresa/universidad, plazos y el tipo de certificación que te conviene para tu caso."
  },
  {
    question: "¿Hay grupos por la mañana?",
    answer: "Sí. Ofrecemos horarios de mañana y de tarde para adaptarnos a trabajo, turnos y disponibilidad. Te ubicamos según tu nivel real para que aproveches la clase desde el primer día. Si necesitas máxima flexibilidad, también puedes combinar con clases particulares."
  },
  {
    question: "¿Soy principiante total, me vale el curso?",
    answer: "Sí. Empezar desde A1 es totalmente viable si el grupo es correcto y el método es práctico. Trabajamos vocabulario funcional, comprensión y estructuras esenciales para que puedas comunicarte cuanto antes. La prioridad es que ganes confianza y avances sin bloquearte."
  },
  {
    question: "¿Trabajáis conversación o solo gramática?",
    answer: "Trabajamos conversación real, pero con estructura. Hablar sin base frustra; gramática sin uso aburre. Por eso combinamos comprensión, vocabulario y práctica guiada con correcciones útiles. El objetivo es que hables mejor, no que \"estudies\" sin aplicarlo."
  },
  {
    question: "¿Puedo probar antes de apuntarme?",
    answer: "Sí. Puedes hacer una prueba de nivel gratuita para ver tu punto de partida y conocer el enfoque de la academia. Sin compromiso."
  }
];

const scheduleOptions = [
  {
    icon: <Sun className="w-6 h-6" />,
    time: "Mañanas",
    slots: ["10:00 - 11:00", "11:00 - 12:00"],
    description: "Ideal para horarios flexibles"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    time: "Tardes",
    slots: ["19:30 - 20:30", "20:30 - 21:30"],
    description: "Después del trabajo"
  }
];

export default function AdultosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Clases de Inglés para Adultos | Cambridge y Linguaskill | La Vaguada – Barrio del Pilar"
        description="Inglés para adultos en La Vaguada / Barrio del Pilar. Grupos máx. 8, horarios mañana y tarde, preparación Cambridge y centro oficial Linguaskill. Prueba de nivel gratis."
        keywords="cursos inglés adultos la vaguada, clases inglés adultos barrio del pilar, inglés para adultos madrid, cambridge adultos"
        canonical="/ingles-la-vaguada/adultos"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-teal-600 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            image={facilityImages.classroom}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/80 to-emerald-700/80"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 mb-6">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/ingles-la-vaguada/infantil' },
              { label: 'Adultos (18+ años)' }
            ]}
            variant="light"
          />
        </div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                18+ años
              </span>
              <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full">
                Máx. 8 alumnos
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Inglés para Adultos | Cambridge y Linguaskill
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              Si eres adulto y necesitas avanzar de verdad, aquí lo hacemos simple: grupos reducidos, enfoque práctico y objetivos claros. En Impulse English Academy (La Vaguada / Barrio del Pilar, Madrid norte) trabajamos desde A1 hasta C1/C2 según tu meta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/reservar-clase"
                className="bg-white text-teal-600 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-teal-900 transition-colors text-center"
              >
                Prueba de nivel GRATIS
              </Link>
              <a
                href="tel:+34604910611"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-teal-600 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white py-6 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-500" />
              <span className="text-zinc-700 font-medium">Máx. 8 alumnos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-500" />
              <span className="text-zinc-700 font-medium">Horarios mañana y tarde</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-500" />
              <span className="text-zinc-700 font-medium">Enfoque práctico: trabajo, viajes y vida real</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-zinc-700 font-medium">Centro Oficial Cambridge y Linguaskill</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Nunca es tarde
            </h2>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                Sabemos que tienes poco tiempo y quieres resultados. Por eso priorizamos conversación guiada, comprensión real, vocabulario útil y progreso medible.
              </p>
            </div>

            {/* Location and Certification Links */}
            <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-zinc-700 text-sm mb-3">
                <strong>¿Dónde estamos?</strong> Nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-teal-600 hover:underline font-medium">academia en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-teal-600 hover:underline font-medium">La Vaguada</Link>. Bien comunicada desde <Link to="/academia-ingles-plaza-castilla" className="text-teal-600 hover:underline font-medium">Plaza Castilla</Link> y <Link to="/academia-ingles-tetuan" className="text-teal-600 hover:underline font-medium">Tetuán</Link>.
              </p>
              <p className="text-zinc-600 text-sm">
                Prepara tus <Link to="/examenes-cambridge" className="text-teal-600 hover:underline font-medium">exámenes Cambridge</Link> o certifica rápido con <Link to="/linguaskill" className="text-teal-600 hover:underline font-medium">Linguaskill</Link>. Si prefieres atención individual, consulta nuestras <Link to="/ingles-la-vaguada/particulares" className="text-teal-600 hover:underline font-medium">clases particulares</Link>.
              </p>
            </div>

            {/* Schedule Options */}
            <div className="mt-8 space-y-4">
              <h3 className="font-bold text-zinc-900 text-lg">Horarios disponibles</h3>
              {scheduleOptions.map((option, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-zinc-900">{option.time}</div>
                    <div className="text-sm text-zinc-500">{option.description}</div>
                  </div>
                  <div className="text-right">
                    {option.slots.map((slot, i) => (
                      <div key={i} className="text-sm text-teal-600 font-medium">{slot}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Todos los niveles",
                description: "Desde A1 (principiante) hasta C1 Advanced. Te ubicamos según tu nivel real."
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Enfoque práctico",
                description: "Inglés que puedes usar en el trabajo, viajes o situaciones reales. Nada de teoría inútil."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Preparación Cambridge y Linguaskill",
                description: "B1 Preliminary, B2 First, C1 Advanced. También Linguaskill para certificar rápido."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Grupos muy reducidos",
                description: "Máximo 8 personas. Así todos hablan y participan activamente."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Objetivos claros",
                description: "Evaluación inicial y seguimiento del progreso. Sabrás exactamente dónde estás."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Conversación real",
                description: "Debates, role-plays, situaciones cotidianas. El objetivo es que hables con confianza."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">{feature.title}</h3>
                  <p className="text-zinc-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Above Levels */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Inglés para adultos que funciona
            </h2>
            <p className="text-zinc-600">
              Descubre nuestra metodología práctica y efectiva para adultos
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Cursos de inglés para adultos - Cambridge y Linguaskill"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-teal-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Certifica tu nivel de inglés
          </h2>
          <p className="text-white/80 mb-8">
            Preparamos Cambridge y Linguaskill para adultos que necesitan certificar su nivel
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Exámenes Cambridge</h3>
              <p className="text-white/70 text-sm mb-4">B1 Preliminary, B2 First, C1 Advanced</p>
              <Link
                to="/examenes-cambridge"
                className="inline-block bg-white text-teal-600 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-teal-900 transition-colors text-sm"
              >
                Ver exámenes Cambridge
              </Link>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Linguaskill</h3>
              <p className="text-white/70 text-sm mb-4">Certificado en 48h. Ideal para requisitos laborales</p>
              <Link
                to="/linguaskill"
                className="inline-block bg-white text-teal-600 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-teal-900 transition-colors text-sm"
              >
                Conocer Linguaskill
              </Link>
            </div>
          </div>
          <p className="text-white/90 font-medium">
            100% de aprobados en exámenes Cambridge 2024/2025
          </p>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Niveles disponibles
            </h2>
            <p className="text-zinc-500 text-lg">
              Desde principiante absoluto hasta nivel avanzado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl border border-teal-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Niveles</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>A1-A2:</strong> Principiante e inicial</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>B1:</strong> Intermedio (PET)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>B2:</strong> Intermedio-alto (First)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>C1:</strong> Avanzado (Advanced)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">¿Qué incluye?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">2 horas semanales en grupo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Material didáctico incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Acceso a plataforma online</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Seguimiento personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Simulacros Cambridge si preparas examen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-green-100 text-green-800 font-bold px-6 py-3 rounded-full mb-6">
              Prueba de nivel gratuita
            </div>
            <p className="text-zinc-600 mb-6">
              Te evaluamos sin compromiso y te ubicamos en el grupo adecuado para tu nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservar-clase"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Solicitar prueba de nivel
              </Link>
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20inglés%20para%20adultos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Photos above FAQs */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nuestros alumnos adultos
            </h2>
            <p className="text-zinc-600 text-lg">Certificaciones Cambridge y Linguaskill con 100% de aprobados</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Regular landscape photos */}
            {[
              { url: "/images/academy/facilities/adult-one-to-one-classes.jpg", alt: "Clases inglés adultos one-to-one La Vaguada Barrio del Pilar Madrid" },
              { url: "/images/academy/team/jp-with-students.jpg", alt: "Profesor JP con estudiantes adultos certificados Cambridge La Vaguada" },
            ].map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}

            {/* Lara C1 Certificate - Portrait image spanning 2 rows */}
            <div className="row-span-2 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/students/lara-c1-cert.jpeg"
                alt="Lara con certificado Cambridge C1 Advanced La Vaguada Madrid"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* More landscape photos */}
            {[
              { url: "/images/academy/facilities/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg", alt: "Certificado oficial Cambridge English academia La Vaguada Madrid" },
              { url: "/images/academy/logos/cambridge-search.jpeg", alt: "Centro Cambridge verificado Impulse English Academy Madrid" },
              { url: "/images/academy/facilities/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés La Vaguada Barrio del Pilar" },
              { url: "/images/academy/facilities/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés La Vaguada Madrid" },
              { url: "/images/academy/locations/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy La Vaguada Madrid" },
            ].map((img, idx) => (
              <div key={`landscape-${idx}`} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Cambridge and Linguaskill Logos */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <div className="bg-zinc-100 rounded-xl p-6 flex items-center justify-center">
              <img
                src="/images/academy/logos/cambridge-logo-edited.png"
                alt="Centro Preparador Oficial Cambridge English La Vaguada Madrid"
                className="h-16 md:h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-teal-600 rounded-xl p-6 flex items-center justify-center">
              <img
                src="/images/academy/logos/linguaskill-logo-blanco.png"
                alt="Centro oficial Linguaskill La Vaguada Madrid"
                className="h-16 md:h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - With Schema Markup */}
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre inglés para adultos"
      />

      {/* Lead Form */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="¿Quieres más información?"
            subtitle="Déjanos tus datos y te contactamos para resolver todas tus dudas"
            ctaText="Solicitar información"
            source="curso-adultos"
            showPhone={true}
            showAge={false}
            showLevel={true}
          />
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={courseSchema} />
    </>
  );
}
