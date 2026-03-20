import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Train, Bus, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import LazyVideo from '../components/LazyVideo';
import Breadcrumb from '../components/Breadcrumb';
import FAQSection from '../components/FAQSection';
import { NAP } from '../utils/napData';

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
    answer: "Los precios varían según el tipo de curso y duración. Ofrecemos presupuesto personalizado según tus necesidades. Contacta con nosotros para una evaluación gratuita y cotización adaptada a tu caso específico."
  },
  {
    question: "¿Dónde estáis ubicados exactamente?",
    answer: "Estamos en Av. de El Ferrol, 22, en La Vaguada (Barrio del Pilar), Madrid 28029. A solo 500 metros del metro Barrio del Pilar (Línea 9). Hay parking gratuito en la zona."
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "Nuestro horario es: Lunes y Miércoles de 10:00 a 21:30, Martes y Jueves de 15:30 a 21:30, y Viernes de 15:30 a 19:30. Fines de semana cerrado."
  },
  // Price PAAs (9)
  {
    question: "¿Cuánto cuesta academia inglés Madrid?",
    answer: "El costo varía según el tipo de curso y academia. En Impulse ofrecemos garantía 100% aprobados Cambridge con excelente relación valor-calidad. Grupos reducidos, material incluido y seguimiento personalizado. Contacta para presupuesto personalizado."
  },
  {
    question: "¿Hay descuento por hermanos?",
    answer: "Sí. Muchas academias ofrecen 5-15% descuento por segundo/tercer hermano. Contacta con nosotros para presupuesto personalizado con descuentos aplicables a tu caso."
  },
  {
    question: "¿Cuánto cuesta el examen Cambridge?",
    answer: "Los costos de examen Cambridge varían según el nivel. En Impulse, ofrecemos preparación completa con material didáctico y simulacros incluidos. Te proporcionamos presupuesto transparente desglosado según tu nivel objetivo."
  },
  {
    question: "¿Hay que pagar matrícula aparte?",
    answer: "Depende del centro. En Impulse, ofrecemos transparencia total en costos desde la primera consulta. Te explicamos exactamente qué incluye tu curso sin sorpresas ocultas. Contacta para detalles específicos."
  },
  {
    question: "¿Se recuperan las clases si faltas?",
    answer: "Generalmente en academias rigurosas: no se recuperan clases perdidas por alumno, pero se pueden cambiar de horario según disponibilidad. Consulta la política de tu academia. En Impulse, estudiamos caso por caso."
  },
  {
    question: "¿Clases sueltas o solo cursos completos?",
    answer: "Ofrecemos opciones flexibles según tus necesidades. Un curso completo es más efectivo para progreso real, especialmente si preparas examen. Para casos urgentes, estudiamos disponibilidad. Contacta para conocer tus opciones."
  },
  {
    question: "¿Online es tan efectivo como presencial?",
    answer: "Sí, si es con grupo reducido y profesor cualificado. Online ofrece comodidad y flexibilidad de horarios. Lo importante es continuidad y participación activa. En Impulse, la calidad es igual en presencial que online."
  },
  {
    question: "¿Curso intensivo o regular?",
    answer: "Depende de tu objetivo y tiempo disponible. Cursos regulares ofrecen mejor retención del aprendizaje. Cursos intensivos son útiles si urgencia examen. En Impulse, diseñamos la opción que funcione mejor para tu caso."
  },
  {
    question: "¿Planes de pago (cuotas) disponibles?",
    answer: "Sí, ofrecemos opciones de pago flexible. Contacta con nosotros para conocer las formas de pago disponibles y las modalidades que se adapten a tu presupuesto."
  }
];

export default function ContactoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg" alt="Fachada exterior Impulse English Academy La Vaguada Madrid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Contacto' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                {NAP.name}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Contacto
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl animate-hero-fade-up animation-delay-200">
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
                    <p className="text-zinc-600 font-medium">{NAP.streetAddress}</p>
                    <p className="text-zinc-600">{NAP.neighborhood}</p>
                    <p className="text-zinc-600">{NAP.postalCode} {NAP.city}</p>
                    <a
                      href={NAP.gbpUrl}
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
                    <a href={NAP.phoneTel} className="text-xl font-bold text-accent-blue hover:underline">
                      {NAP.phone}
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
                    <a href={`mailto:${NAP.email}`} className="text-accent-blue font-medium hover:underline">
                      {NAP.email}
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
                      <p><span className="font-medium">Viernes:</span> 13:30 - 19:30</p>
                      <p><span className="font-medium">Sábado - Domingo:</span> Cerrado</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`${NAP.whatsappUrl}?text=Hola,%20me%20gustaría%20información%20sobre%20los%20cursos%20de%20inglés`}
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
                  <span className="text-zinc-600 font-medium">150+ reseñas en Google</span>
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
            title={`Ubicación de ${NAP.name}`}
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
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG", alt: "Aula principal academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Aula principal equipada" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG", alt: "Aula tecnológica academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Tecnología educativa avanzada" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG", alt: "Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Espacios de aprendizaje" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes.JPG", alt: "Clase primaria academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Clases de primaria" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Stairs.JPG", alt: "Interior escaleras academia inglés La Vaguada Barrio del Pilar Madrid", caption: "Instalaciones amplias" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png", alt: "Centro preparador Cambridge oficial La Vaguada Barrio del Pilar Madrid", caption: "Centro Cambridge oficial" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG", alt: "Profesor Daniel ayudando estudiantes academia La Vaguada Barrio del Pilar", caption: "Atención personalizada" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG", alt: "Estudiantes felices clase inglés La Vaguada Barrio del Pilar Madrid", caption: "Ambiente positivo" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg", alt: "Fachada exterior Impulse English Academy La Vaguada Barrio del Pilar Madrid", caption: "Nuestra academia en La Vaguada" }
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
              Cómo llegar a {NAP.name}
            </h2>
            <p className="text-zinc-600">
              Te mostramos cómo encontrarnos fácilmente desde el metro Barrio del Pilar
            </p>
          </div>

          <LazyVideo
            videoId="Fdso-d9_F20"
            title={`Cómo llegar a ${NAP.name} desde Metro Barrio del Pilar`}
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
