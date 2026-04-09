import React, { useEffect } from 'react';
import { Award, Users, Target, Heart, CheckCircle, Home, UserCheck, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import FAQSection from '../components/FAQSection';
import LazyVideo from '../components/LazyVideo';
import OptimizedImage from '../components/OptimizedImage';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import { facilityImages, certificationImages, studentImages } from '../../utils/images';

const certifications = [
  "Centro preparador oficial Cambridge",
  "Centro autorizado Linguaskill",
  "Partner de Great Little People (metodología infantil)",
  "Partner school de ESIC Idiomas (Cambridge Exam Centre ES278)"
];

const faqs = [
  {
    question: "¿Qué significa ser Centro Preparador Oficial?",
    answer: "Ser Centro Preparador Oficial significa estar registrado por Cambridge English para preparar y presentar candidatos a sus exámenes. Los más de 52.000 centros mundiales acceden a logotipos oficiales, certificados categorizados por número de candidatos, materiales promocionales, masterclasses gratuitas, recursos didácticos, formación docente personalizada y pueden organizar exámenes propios (mínimo 10 candidatos por nivel) o participar en sesiones abiertas regionales."
  },
  {
    question: "¿Academia o profesor particular?",
    answer: "La elección entre academia y profesor particular en 2025/26 depende del perfil y objetivos del alumno. La academia ofrece aprendizaje estructurado, socialización y grupos reducidos, ideal para interacción grupal. El profesor particular brinda atención personalizada, flexibilidad horaria y adaptación al ritmo individual, siendo óptimo para refuerzos específicos o ambientes sin distracciones."
  },
  {
    question: "¿Presencial o online para aprender inglés?",
    answer: "La elección entre clases presenciales y online para aprender inglés en 2025/26 depende de estilo de vida y objetivos. Presencial ofrece estructura, concentración e interacción directa; online aporta flexibilidad, accesibilidad y menor coste. Ambas modalidades igualan calidad gracias a avances tecnológicos, pero exigen compromiso y organización para ser efectivas."
  },
  {
    question: "¿Grupo o individual clases inglés?",
    answer: "Las clases individuales de inglés ofrecen aprendizaje personalizado y hasta 3 veces más rápido gracias a la atención y corrección inmediatas. Las clases grupales fomentan la interacción social, colaboración y motivación, con ritmo uniforme y menor coste. Combinar ambas modalidades optimiza resultados según perfil y objetivos."
  }
];

export default function SobreNosotrosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sobre Nosotros | Impulse English Academy La Vaguada – Barrio del Pilar';
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
      <SEOHead
        title="Sobre Nosotros"
        description="Conoce Impulse English Academy. Centro preparador Cambridge oficial en La Vaguada, Madrid. Más de 10 años enseñando inglés. 100% aprobados."
        keywords="sobre nosotros academia inglés, quienes somos impulse english, historia academia inglés madrid, equipo profesores inglés"
        canonical="/sobre-nosotros"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-accent-blue to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            image={facilityImages.exterior}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/90 to-accent-blue/70"></div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Sobre Nosotros' }
              ]}
              variant="light"
            />
          </div>
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              Más que una academia, una familia
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Una empresa familiar que comenzó con un sueño: ayudar a las personas a dominar el inglés en su día a día.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - Close to top but below fold */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Conoce Nuestra Historia
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Descubre quiénes somos y por qué hacemos lo que hacemos
            </p>
          </div>

          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
            <LazyVideo
              videoId="Fdso-d9_F20"
              title="Impulse English Academy - Nuestra historia y misión"
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story - Rewritten */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
                Nuestra Historia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Más Que Una Academia, Una Familia
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Impulse English Academy nació de un sueño compartido: <strong className="text-zinc-900">ayudar a las personas a dominar el inglés en su día a día</strong>, no solo aprenderlo, sino vivirlo y utilizarlo con confianza.
                </p>
                <p>
                  Somos una empresa familiar que comenzó este viaje con la convicción de que el aprendizaje de idiomas va mucho más allá de memorizar gramática o vocabulario—se trata de crear conexiones reales y comunicación auténtica.
                </p>
                <p>
                  Desde nuestros inicios, hemos construido algo especial en La Vaguada, Madrid: una comunidad de personas unidas por el deseo común de mejorar su inglés y expandir sus horizontes. <strong className="text-zinc-900">No somos una academia más en el barrio—somos tu familia de inglés.</strong>
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  image={studentImages.primarySecondary}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
              Lo Que Nos Hace Diferentes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
              Cercanía y Comunidad
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Somos Familia",
                description: "Más que una academia, somos una comunidad de personas. Y esto no es solo un eslogan—es nuestra forma de trabajar cada día. Lo que verdaderamente nos diferencia es nuestro enfoque en estar siempre cerca de nuestra comunidad."
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Servicio Personalizado",
                description: "Ofrecemos un servicio personalizado tanto a los pequeños como a sus padres. Mantenemos contacto constante contigo porque creemos que el aprendizaje del inglés no involucra solo al alumno, sino a todas las personas que forman parte de su entorno."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Involucración Total",
                description: "Cuando vienes con nosotros, no eres simplemente un número de matrícula. Te conviertes en parte de nuestra academia, parte de nuestro crecimiento, y nosotros te invitamos a formar parte de esta gran comunidad."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-50 p-8 rounded-2xl reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-12 md:py-20 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <Eye className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <span className="text-white/60 font-bold tracking-widest text-xs uppercase mb-4 block">
              Nuestra Visión
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Inglés Para la Vida Real
            </h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              <p>
                Desde que fundamos Impulse English Academy, nuestra visión ha sido clara: <strong className="text-white">queremos que hables inglés, que lo utilices, que sea una herramienta real en tu vida diaria.</strong>
              </p>
              <p>
                No creemos en el inglés de libro de texto que nunca se usa. Creemos en el inglés que te permite comunicarte con confianza, viajar sin barreras, avanzar profesionalmente, y conectar con el mundo.
              </p>
              <p className="text-xl text-white font-medium">
                Esta es nuestra misión. Esta es nuestra promesa. Y esta es tu invitación a formar parte de nuestra familia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-zinc-600 text-lg">
              Un espacio en el corazón de La Vaguada diseñado para el aprendizaje efectivo
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {[
              { url: "/images/academy/locations/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy La Vaguada Barrio del Pilar Madrid", caption: "Nuestra academia en La Vaguada" },
              { url: "/images/academy/facilities/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Aula principal equipada" },
              { url: "/images/academy/facilities/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Tecnología educativa avanzada" },
              { url: "/images/academy/facilities/photos-of-facilities.jpg", alt: "Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Espacios de aprendizaje" },
              { url: "/images/academy/facilities/stairs.jpg", alt: "Escaleras interior academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Instalaciones amplias" },
              { url: "/images/academy/facilities/primary-classes.jpg", alt: "Clase primaria academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Clases de primaria" },
              { url: "/images/academy/team/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes La Vaguada Barrio del Pilar Madrid", caption: "Atención personalizada" },
              { url: "/images/academy/facilities/primary-classes-students-smiling.jpg", alt: "Estudiantes felices clase inglés La Vaguada Barrio del Pilar Madrid", caption: "Ambiente positivo" },
              { url: "/images/academy/facilities/toilet-facilities.jpg", alt: "Aseos instalaciones academia La Vaguada Barrio del Pilar Madrid", caption: "Instalaciones completas" }
            ].map((image, index) => (
              <div key={index} className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-zinc-100">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-zinc-600 mt-3 text-sm">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Certificaciones y Reconocimientos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* JP with Students and Certificates Image */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/academy/team/jp-with-students.jpg"
                  alt="JP con estudiantes y certificados Cambridge - Impulse English Academy"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-zinc-600 mt-3 text-sm">Nuestros estudiantes con sus certificados Cambridge</p>
            </div>

            {/* Certifications List */}
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-zinc-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - For SEO */}
      <FAQSection faqs={faqs} title="Preguntas Frecuentes" />

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Únete a Nuestra Comunidad
            </h2>
            <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Te invitamos a conocernos, a formar parte de esta comunidad especial que hemos construido en el corazón de La Vaguada, Madrid. Aquí encontrarás más que clases de inglés—encontrarás un espacio donde los errores se celebran, donde el aprendizaje es colaborativo, y donde cada persona importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservar-clase"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Reservar Clase de Prueba
              </Link>
              <Link
                to="/contacto"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg border border-white/30 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="¿Listo para mejorar tu inglés?"
            subtitle="Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos"
            ctaText="Solicitar información"
            source="sobre-nosotros"
            showPhone={true}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
