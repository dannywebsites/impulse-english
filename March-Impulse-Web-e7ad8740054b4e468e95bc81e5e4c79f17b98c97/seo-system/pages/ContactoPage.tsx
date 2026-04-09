import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Train, Bus, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import LazyVideo from '../components/LazyVideo';
import Breadcrumb from '../components/Breadcrumb';
import FAQSection from '../components/FAQSection';
import SEOHead from '../components/SEOHead';

const faqs = [
  {
    question: "¿Cómo puedo saber mi nivel de inglés?",
    answer: "Ofrecemos una prueba de nivel gratuita y sin compromiso. Solo tienes que contactarnos para concertar una cita. La prueba dura unos 25 minutos y evalúa todas las destrezas comunicativas."
  },
  {
    question: "¿Cuándo empiezan los cursos?",
    answer: "Tenemos incorporación continua durante todo el año. Puedes empezar en cualquier momento, no tienes que esperar a septiembre."
  },
  {
    question: "¿Ofrecéis clases online?",
    answer: "Sí, ofrecemos modalidad presencial, online e híbrida según tus necesidades. Las clases online se realizan por videoconferencia con grupos reducidos."
  },
  {
    question: "¿Cuánto cuestan los cursos?",
    answer: "Los precios varían según el tipo de curso: Infantil desde 64€/mes, Primaria desde 71€/mes, Secundaria desde 75€/mes y Adultos desde 79€/mes. Contacta con nosotros para un presupuesto personalizado."
  },
  {
    question: "¿Dónde estáis ubicados exactamente?",
    answer: "Estamos en Av. de El Ferrol, 22, en La Vaguada (Barrio del Pilar), Madrid 28029. A solo 500 metros del metro Barrio del Pilar (Línea 9). Hay parking gratuito en la zona."
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "Nuestro horario es: Lunes y Miércoles de 10:00 a 21:30, Martes y Jueves de 15:30 a 21:30, y Viernes de 15:30 a 19:30. Fines de semana cerrado."
  }
];

export default function ContactoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Contacto"
        description="Contacta con Impulse English Academy. Av. de El Ferrol 22, La Vaguada, Madrid. Tel: 604 910 611. Prueba de nivel gratuita. Metro Barrio del Pilar."
        keywords="contacto academia inglés madrid, dirección impulse english, teléfono academia inglés la vaguada, horarios academia inglés"
        canonical="/contacto"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-accent-blue to-blue-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Contacto' }
              ]}
              variant="light"
            />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Contacto
            </h1>
            <p className="text-xl text-white/90 font-light">
              Estamos aquí para ayudarte. Contáctanos por el medio que prefieras.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Grid */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-zinc-50 rounded-xl">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">Dirección</h3>
                    <p className="text-zinc-600 font-medium">Av. de El Ferrol, 22</p>
                    <p className="text-zinc-600">La Vaguada, Barrio del Pilar</p>
                    <p className="text-zinc-600">28029 Madrid</p>
                    <a
                      href="https://maps.google.com/?q=Av.+de+El+Ferrol,+22,+28029+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue font-medium text-sm mt-2 inline-block hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>

                {/* How to get there - Metro */}
                <div className="flex items-start gap-4 p-6 bg-zinc-50 rounded-xl">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Train className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">Cómo llegar - Metro</h3>
                    <p className="text-zinc-600"><strong>500 metros</strong> desde Metro Barrio del Pilar (Línea 9)</p>
                    <p className="text-zinc-600">15 minutos andando desde Peñagrande</p>
                  </div>
                </div>

                {/* How to get there - Bus */}
                <div className="flex items-start gap-4 p-6 bg-zinc-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                    <Bus className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">Autobuses desde Peñagrande</h3>
                    <p className="text-zinc-600">Líneas 132, 134 hasta La Vaguada</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-zinc-50 rounded-xl">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">Teléfono</h3>
                    <a href="tel:+34604910611" className="text-xl font-bold text-accent-blue hover:underline">
                      +34 604 910 611
                    </a>
                    <p className="text-zinc-500 text-sm mt-1">Llamar o WhatsApp</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-zinc-50 rounded-xl">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">Email</h3>
                    <a href="mailto:info@impulse-english.es" className="text-accent-blue font-medium hover:underline">
                      info@impulse-english.es
                    </a>
                    <p className="text-zinc-500 text-sm mt-1">Respondemos en menos de 24h</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-zinc-50 rounded-xl">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-2">Horario de atención</h3>
                    <div className="space-y-1 text-zinc-600 text-sm">
                      <p><span className="font-medium">Lunes:</span> 10:00 - 21:30</p>
                      <p><span className="font-medium">Martes:</span> 15:30 - 21:30</p>
                      <p><span className="font-medium">Miércoles:</span> 10:00 - 21:30</p>
                      <p><span className="font-medium">Jueves:</span> 15:30 - 21:30</p>
                      <p><span className="font-medium">Viernes:</span> 15:30 - 19:30</p>
                      <p><span className="font-medium">Sábado - Domingo:</span> Cerrado</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20los%20cursos%20de%20inglés"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  Contactar por WhatsApp
                </a>

                {/* Google Reviews */}
                <div className="flex items-center justify-center gap-2 p-4 bg-zinc-50 rounded-xl">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-zinc-600 font-medium">145+ reseñas en Google</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <LeadForm
                title="Envíanos un mensaje"
                subtitle="Rellena el formulario y te contactamos"
                ctaText="Enviar mensaje"
                source="contacto"
                showPhone={true}
                showAge={true}
                showLevel={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-zinc-100">
        <div className="aspect-[21/9] w-full">
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
      </section>

      {/* Academy Photos Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 text-center">
            Nuestras Instalaciones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { url: "/images/academy/facilities/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Aula principal equipada" },
              { url: "/images/academy/facilities/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Tecnología educativa avanzada" },
              { url: "/images/academy/facilities/photos-of-facilities.jpg", alt: "Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Espacios de aprendizaje" },
              { url: "/images/academy/facilities/primary-classes.jpg", alt: "Clase primaria academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Clases de primaria" },
              { url: "/images/academy/facilities/stairs.jpg", alt: "Interior escaleras academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Instalaciones amplias" },
              { url: "/images/academy/logos/cambridge-logo-edited.png", alt: "Centro preparador Cambridge oficial La Vaguada Barrio del Pilar Madrid", caption: "Centro Cambridge oficial" },
              { url: "/images/academy/team/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes academia La Vaguada Barrio del Pilar", caption: "Atención personalizada" },
              { url: "/images/academy/facilities/primary-classes-students-smiling.jpg", alt: "Estudiantes felices clase inglés La Vaguada Barrio del Pilar Madrid", caption: "Ambiente positivo" },
              { url: "/images/academy/locations/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy La Vaguada Barrio del Pilar Madrid", caption: "Nuestra academia en La Vaguada" }
            ].map((photo, index) => (
              <div key={index} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-4 left-4 right-4 text-white font-medium text-sm">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Below the fold */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Cómo llegar a Impulse English Academy
            </h2>
            <p className="text-zinc-600">
              Te mostramos cómo encontrarnos fácilmente desde el metro Barrio del Pilar
            </p>
          </div>

          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Cómo llegar a Impulse English Academy desde Metro Barrio del Pilar"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes"
      />

      <Footer variant="simple" />
    </>
  );
}
