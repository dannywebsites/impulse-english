import React, { useEffect } from 'react';
import { Wifi, Users, Target, Award, Clock, CheckCircle, Phone, Globe, Video, Laptop, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const courseSchema = generateCourseSchema({
  name: "Clases de Inglés Online",
  description: "Clases de inglés online en directo con profesores nativos. Grupos reducidos, preparación Cambridge y Linguaskill, modalidad 100% online o híbrida. Misma metodología Impulse, desde cualquier lugar de España.",
  url: `${businessInfo.url}/cursos-ingles/online`,
  courseCode: "ONLINE-ALL",
  educationalLevel: "All Levels",
  timeRequired: "PT1H",
  image: "/images/academy/img-4117.png"
});

export const faqs: FAQItem[] = [
  {
    question: "¿Las clases online son en directo o grabadas?",
    answer: "Siempre en directo por videoconferencia con tu profesor. No son vídeos pregrabados. Participas, preguntas, practicas speaking y recibes correcciones en tiempo real, igual que en clase presencial."
  },
  {
    question: "¿Puedo combinar clases online y presencial?",
    answer: "Sí. Ofrecemos modalidad híbrida: puedes asistir presencialmente cuando puedas y conectarte online cuando no. El progreso es continuo independientemente del formato. Es la opción favorita de profesionales con horarios variables."
  },
  {
    question: "¿Qué plataforma usáis para las clases online?",
    answer: "Usamos plataformas de videoconferencia profesionales con pantalla compartida, pizarra digital y chat. Además, tienes acceso a materiales y recursos complementarios online."
  },
  {
    question: "¿Preparáis exámenes Cambridge y Linguaskill online?",
    answer: "Sí. Preparamos B1 Preliminary, B2 First, C1 Advanced y Linguaskill en modalidad online con la misma metodología y resultados que en presencial. Nuestro 100% de aprobados incluye alumnos online."
  },
  {
    question: "¿Las clases online son igual de efectivas?",
    answer: "Sí, siempre que el grupo sea reducido y el profesor esté cualificado. Nuestros grupos online tienen máximo 8 alumnos, los mismos profesores que las clases presenciales y la misma metodología Impulse. La diferencia es solo el medio, no la calidad."
  },
  {
    question: "¿Puedo hacer clases particulares online?",
    answer: "Sí. Las clases particulares 1:1 funcionan muy bien online. Tú eliges horario, y el profesor adapta cada sesión a tus necesidades: preparación de exámenes, entrevistas de trabajo, reuniones en inglés o conversación general."
  },
  {
    question: "¿Para quién son las clases online?",
    answer: "Para cualquier persona que no pueda asistir presencialmente: profesionales con horarios cambiantes, personas fuera de Madrid, padres que quieren que sus hijos accedan a nuestra metodología desde casa, o adultos que prefieren la comodidad de estudiar sin desplazarse."
  },
  {
    question: "¿Hay clases online para niños y adolescentes?",
    answer: "Sí. Ofrecemos clases online para primaria (6-12 años) y secundaria (13-17 años) con la misma preparación Cambridge. Los grupos son reducidos para mantener la atención y participación activa de cada alumno."
  }
];

export default function OnlinePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-violet-950/90 to-indigo-900/85"></div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-36 -right-36 w-[480px] h-[480px] rounded-full bg-violet-400/[0.06]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-indigo-400/[0.05]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/cursos-ingles/infantil' },
              { label: 'Clases Online' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Todas las edades · 100% en directo
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Clases de Inglés Online en Directo
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              La misma metodología Impulse, los mismos profesores, los mismos resultados. Desde tu casa, tu oficina o donde estés. Grupos reducidos con preparación Cambridge y Linguaskill.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-up animation-delay-300">
              <a
              href="/reservar-clase/"
                className="bg-white text-indigo-950 font-display font-semibold py-4 px-8 rounded-lg hover:bg-zinc-100 transition-all duration-300 text-center"
              >
                Prueba de nivel GRATIS
              </a>
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20interesan%20las%20clases%20de%20inglés%20online"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm text-white border border-white/25 font-display font-medium py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
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
              <Video className="w-5 h-5 text-indigo-500" />
              <span className="text-zinc-700 font-medium">Clases en directo</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" />
              <span className="text-zinc-700 font-medium">Máx. 8 alumnos</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-500" />
              <span className="text-zinc-700 font-medium">Desde cualquier lugar</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-zinc-700 font-medium">Centro Oficial Cambridge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            ¿Para quién son las clases online?
          </h2>
          <p className="text-zinc-600 text-lg mb-10">
            Las clases online son para ti si necesitas flexibilidad sin renunciar a la calidad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Necesitas una certificación",
                description: "B2 para tu máster, B1 para la universidad de tu hijo, Linguaskill para tu empresa. Preparamos todos los exámenes Cambridge online con 100% de aprobados."
              },
              {
                icon: <Laptop className="w-6 h-6" />,
                title: "Trabajas y no tienes tiempo",
                description: "Horarios de mañana y tarde adaptados a profesionales. Conéctate desde la oficina, desde casa o entre reuniones. Sin desplazamientos."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Vives fuera de Madrid",
                description: "Accede a la misma metodología Impulse desde cualquier punto de España. Mismos profesores, mismos materiales, mismos resultados."
              },
              {
                icon: <Video className="w-6 h-6" />,
                title: "Te congelas en reuniones en inglés",
                description: "Practica speaking real en grupos reducidos. Simulamos reuniones, entrevistas y presentaciones para que pierdas el miedo y ganes seguridad."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">{item.title}</h3>
                  <p className="text-zinc-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-10 text-center">
            Cómo funcionan las clases online
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Prueba de nivel gratuita",
                description: "Evaluamos tu nivel real por videoconferencia. Te recomendamos el grupo y horario que mejor encajan contigo."
              },
              {
                step: "02",
                title: "Clases en directo",
                description: "Te conectas a tu clase semanal con tu grupo reducido (máx. 8). Participas, hablas, preguntas y recibes feedback en tiempo real."
              },
              {
                step: "03",
                title: "Seguimiento y resultados",
                description: "Tu profesor mide tu progreso y ajusta el plan. Cuando estés preparado, presentas tu examen Cambridge o Linguaskill."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-10 text-center">
            Elige tu modalidad
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-2">100% Online</h3>
              <p className="text-zinc-600 text-sm">
                Todas tus clases por videoconferencia. Ideal si vives fuera de Madrid o prefieres estudiar desde casa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-indigo-500 text-center relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </span>
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-2">Híbrida</h3>
              <p className="text-zinc-600 text-sm">
                Combina presencial y online según tu semana. La opción favorita de profesionales con horarios variables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-2">Particular Online</h3>
              <p className="text-zinc-600 text-sm">
                Clases 1:1 por videoconferencia. Ideal para preparación intensiva de exámenes, entrevistas o reuniones. Contacta para más información.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-10">
            Lo que incluyen las clases online
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Clases en directo con profesores cualificados",
              "Grupos reducidos (máximo 8 alumnos)",
              "Misma metodología Impulse que las clases presenciales",
              "Preparación Cambridge (B1, B2, C1) y Linguaskill",
              "Materiales y recursos digitales incluidos",
              "Prueba de nivel gratuita online",
              "Seguimiento personalizado del progreso",
              "Opción híbrida: online + presencial",
              "Horarios de mañana y tarde",
              "Acceso a simulacros de examen"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses available online */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">
            Cursos disponibles online
          </h2>
          <p className="text-zinc-600 text-center mb-10">
            Todos nuestros cursos están disponibles en modalidad online e híbrida
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Primaria (6-12 años)", href: "/cursos-ingles/primaria" },
              { name: "Secundaria (13-17 años)", href: "/cursos-ingles/secundaria" },
              { name: "Adultos (18+ años)", href: "/cursos-ingles/adultos" },
              { name: "Clases Particulares", href: "/cursos-ingles/particulares" },
              { name: "Cambridge B1/B2/C1", href: "/examenes-cambridge" },
              { name: "Linguaskill", href: "/linguaskill" }
            ].map((course, index) => (
              <a
                key={index}
                href={course.href}
                className="bg-white p-5 rounded-xl border border-zinc-100 hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">{course.name}</h3>
                <span className="text-zinc-400 text-xs mt-2 flex items-center gap-1 group-hover:text-indigo-400">
                  Ver detalles <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Lead Form */}
      <section className="py-12 md:py-20 px-6 bg-indigo-600">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empieza con una clase de prueba gratuita
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Evaluamos tu nivel online, te ubicamos en el grupo adecuado y empiezas. Sin compromiso.
              </p>
              <ul className="space-y-4">
                {[
                  "Prueba de nivel online gratuita",
                  "Recomendación personalizada de curso",
                  "Sin permanencia ni compromisos",
                  "Empieza en cualquier momento del año"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <LeadForm
                title="Prueba una clase online sin compromiso"
                subtitle="Misma calidad que en clase presencial. Te contactamos en menos de 24 horas"
                ctaText="Solicitar clase de prueba"
                source="online-courses-page"
                showPhone={true}
                showAge={true}
                showLevel={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-10 text-center">
            Preguntas frecuentes sobre las clases online
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-zinc-50 rounded-xl border border-zinc-100">
                <summary className="cursor-pointer p-6 font-bold text-zinc-900 list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-8 px-6 bg-zinc-50 border-t border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <p className="text-zinc-500 text-sm text-center">
            <strong className="text-zinc-600">También disponible presencial:</strong>{' '}
            <a href="/academia-ingles-barrio-del-pilar/" className="text-indigo-600 hover:underline">Barrio del Pilar</a>{' | '}
            <a href="/academia-ingles-la-vaguada/" className="text-indigo-600 hover:underline">La Vaguada</a>{' | '}
            <a href="/academia-ingles-penagrande/" className="text-indigo-600 hover:underline">Peñagrande</a>{' | '}
            <a href="/academia-ingles-plaza-castilla/" className="text-indigo-600 hover:underline">Plaza Castilla</a>{' | '}
            <a href="/academia-ingles-tetuan/" className="text-indigo-600 hover:underline">Tetuán</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
