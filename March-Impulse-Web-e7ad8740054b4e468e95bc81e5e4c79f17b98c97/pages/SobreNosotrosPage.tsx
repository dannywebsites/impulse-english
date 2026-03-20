import React, { useEffect } from 'react';
import { Award, Users, Target, Heart, CheckCircle, Home, UserCheck, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import FAQSection from '../components/FAQSection';
import LazyVideo from '../components/LazyVideo';
import OptimizedImage from '../components/OptimizedImage';
import Breadcrumb from '../components/Breadcrumb';
import { facilityImages, certificationImages, studentImages } from '../src/data/images';

const certifications = [
  "Centro preparador oficial Cambridge",
  "Centro autorizado Linguaskill",
  "Partner de Great Little People (metodología infantil)",
  "Partner school de ESIC Idiomas (Cambridge Exam Centre ES278)",
  "150+ reseñas de 5 estrellas en Google",
  "100% de aprobados Cambridge 2024/2025"
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg"
            alt="Profesor con estudiantes - Impulse English Academy About Us"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Sobre Nosotros' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Más que una academia, una familia
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Sobre Nosotros
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl animate-hero-fade-up animation-delay-200">
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
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg", alt: "Fachada exterior Impulse English Academy La Vaguada Barrio del Pilar Madrid", caption: "Nuestra academia en La Vaguada" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG", alt: "Aula principal academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Aula principal equipada" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG", alt: "Aula tecnológica academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Tecnología educativa avanzada" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG", alt: "Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Espacios de aprendizaje" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Stairs.JPG", alt: "Escaleras interior academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Instalaciones amplias" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes.JPG", alt: "Clase primaria academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Clases de primaria" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG", alt: "Profesor Daniel ayudando estudiantes La Vaguada Barrio del Pilar Madrid", caption: "Atención personalizada" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG", alt: "Estudiantes felices clase inglés La Vaguada Barrio del Pilar Madrid", caption: "Ambiente positivo" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Toilet+facilities.JPG", alt: "Aseos instalaciones academia La Vaguada Barrio del Pilar Madrid", caption: "Instalaciones completas" }
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
                  src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg"
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
              <a
              href="/reservar-clase"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Reservar Clase de Prueba
              </a>
              <a
              href="/contacto"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg border border-white/30 transition-colors"
              >
                Contactar
              </a>
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
