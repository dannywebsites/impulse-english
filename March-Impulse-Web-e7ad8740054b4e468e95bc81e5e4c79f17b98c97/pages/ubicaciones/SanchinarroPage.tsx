import React, { useEffect } from 'react';
import { MapPin, Train, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';
import { GoogleMark } from '../../components/GoogleReviews';
import NearbyAreas from '../../components/NearbyAreas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const benefits = [
  { title: "La misma clase, también online", desc: "Particulares en Av. de El Ferrol u online a 29 €/hora, con los mismos dos profesores. Sin metro directo, es la opción que más se elige." },
  { title: "Centro oficial Cambridge y Linguaskill", desc: "En el aula de Av. de El Ferrol, junto al centro comercial La Vaguada. Linguaskill da el certificado en 48 horas." },
  { title: "Grupos de 7 a 10 alumnos", desc: "Máximo 10 en adultos. El metro ligero y el autobús dejan cerca del enlace con la línea 10." },
  { title: "Sin permanencia ni cuota oculta", desc: "Matrícula 45 €, libro hasta 40 €, y nada más. Ni cuota de mantenimiento ni penalización por irte." },
  { title: "5,0 sobre 183 reseñas en Google", desc: "Las 183 son de cinco estrellas, con nombre y apellidos verificables." },
  { title: "Abrimos hasta las 21:30", desc: "De lunes a jueves. Suficiente margen para llegar después del trabajo sin ir con la lengua fuera." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People · desde 64 €/mes", href: "/cursos-ingles/infantil/" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge · 83 €/mes", href: "/cursos-ingles/primaria/" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge B1/B2/C1 · desde 87 €/mes", href: "/cursos-ingles/secundaria/" },
  { name: "Adultos", method: "Todos los niveles + Cambridge + Linguaskill · 94 €/mes", href: "/cursos-ingles/adultos/" },
  { name: "Clases particulares", method: "Presencial u online · desde 29 €/hora", href: "/cursos-ingles/particulares/" }
];

// Reseñas reales de Google, verificadas contra el perfil. Asignación en
// GEO-Content-Project/review-allocation.md: ninguna se repite en el sitio.
const localReviews = [
  {
    name: "Carolina Lopez",
    role: "Reseña verificada en Google",
    text: "Lo más profesional y especial del curso de inglés"
  },
  {
    name: "Madalina Rusanu",
    role: "Alumno/a · preparación C1",
    text: "Me voy a sacar el Advanced aqui! Es mi plan ☺️"
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cómo se llega desde Sanchinarro hasta la academia?",
    answer: "No hay metro convencional en el barrio, así que hay tres vías: el metro ligero ML1 hasta Las Tablas y allí la línea 10 hacia Plaza de Castilla para enlazar con la línea 9; en coche, que es lo más directo; o clases online, que a 29 €/hora cuestan lo mismo que presencial."
  },
  {
    question: "Vivo en Sanchinarro y la academia me pilla lejos. ¿Merece la pena venir desde aquí?",
    answer: "Depende de lo que busques. Si quieres un grupo de 7 a 10 alumnos con centro oficial Cambridge y precios publicados, sí. Si lo que necesitas es proximidad pura, sé honesto contigo mismo: hay opciones más cercanas, y nuestras clases online existen justamente para eso."
  },
  {
    question: "¿Las clases online son iguales que las presenciales?",
    answer: "Mismos profesores, mismo temario y misma tarifa: 29 €/hora en particular. Preparamos B1 Preliminary, B2 First, C1 Advanced y Linguaskill también en online."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de Sanchinarro?",
    answer: "En grupo: Infantil desde 64 €/mes, Primaria 83 €/mes, Secundaria desde 87 €/mes y Adultos 94 €/mes. Particulares y online, 29 €/hora. Matrícula 45 € y libro hasta 40 €."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Sí, gratuita y de 25 minutos, y la puedes hacer online si te viene mejor. La hace JP, el director de estudios, que es quien responde el WhatsApp del 604 910 611."
  },
  {
    question: "¿Cuántos alumnos hay por clase?",
    answer: "Entre 7 y 10 alumnos, con un tope de 10 en adultos. Tenemos dos aulas, London y Manchester, y el aforo es una decisión, no una casualidad."
  },
  {
    question: "Mi empresa me pide certificar el nivel. ¿Qué opción es la rápida?",
    answer: "Linguaskill. Somos centro oficial y el certificado de Cambridge llega en 48 horas; se puede hacer presencial o desde casa con supervisión remota."
  },
  {
    question: "¿Qué horarios tenéis para quien viene desde la zona norte?",
    answer: "Lunes y miércoles desde las 10:00, martes y jueves desde las 15:30, y hasta las 21:30 de lunes a jueves. Los viernes, de 13:30 a 19:30."
  }
];

export const locationMeta = {
  locationName: "Sanchinarro",
  pageUrl: "https://impulse-english.es/academia-ingles-sanchinarro"
};

export default function SanchinarroPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, la academia de inglés que atiende a familias de Sanchinarro" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Sanchinarro' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Sanchinarro
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Clases de inglés para Sanchinarro, desde 64 €/mes
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge · presencial en Barrio del Pilar u online a 29 €/hora
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Metro ligero ML1 hasta Las Tablas, enlace con la línea 10</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 183 reseñas</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Grupos de 7 a 10 alumnos</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a href="/prueba-de-nivel-ingles/" className="bg-brand-red hover:bg-brand-red-600 text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300">
                Reservar prueba de nivel gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Sanchinarro%20y%20me%20gustaría%20información%20sobre%20los%20cursos`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capsula de respuesta */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            Damos clase a familias de Sanchinarro desde Av. de El Ferrol 22, en Barrio del Pilar, y también online a 29 €/hora con los mismos profesores. Grupos de 7 a 10 alumnos, desde 64 €/mes, matrícula de 45 € y una prueba de nivel gratuita de 25 minutos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Seamos claros con la distancia: Sanchinarro no tiene metro convencional y no estamos a la vuelta de la esquina. El metro ligero enlaza con la línea 10 en Las Tablas, en coche se llega directo, y para muchas familias la respuesta real son las clases particulares online, que cuestan lo mismo que las presenciales.
          </p>
        </div>
      </section>

      {/* Por que aqui */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Por qué desde Sanchinarro</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Lo que ofrecemos a quien vive lejos del Barrio del Pilar</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="card p-6">
                <CheckCircle className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como llegar */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cómo llegar</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cómo llegar desde Sanchinarro, con franqueza</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-8">Sanchinarro no tiene metro convencional, así que no te vamos a vender que estamos a la vuelta de la esquina: no lo estamos. Estas son las tres formas reales de hacerlo, y la tercera es la que más usa la gente de tu zona.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Metro ligero y línea 10", body: "El ML1 cruza Sanchinarro y enlaza con la línea 10 en Las Tablas. Desde ahí, hasta Plaza de Castilla y cambio a la línea 9." },
              { n: 2, title: "En coche", body: "Es lo más directo de los tres. Hay aparcamiento en superficie en la propia Av. de El Ferrol y en las calles de alrededor." },
              { n: 3, title: "Sin moverte de casa", body: "Clases particulares online a 29 €/hora, misma tarifa que presencial y mismos profesores. Para muchas familias de Sanchinarro es lo que encaja." },
            ].map((step) => (
              <div key={step.n} className="card p-6">
                <p className="t-h3 text-accent-blue mb-2">{step.n}</p>
                <h3 className="font-bold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <NearbyAreas currentHref="/academia-ingles-sanchinarro/" variant="accent" />
            </div>
            <div className="bg-zinc-100 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7084812!3d40.4743948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422909a0b6b11b%3A0xbe6ef3e2ba8bb87b!2sImpulse%20English%20Academy!5e0!3m2!1ses!2ses!4v1701964800000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Impulse English Academy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cursos</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cursos, por edad y por objetivo</h2>
            <div className="rule"></div>
          </div>
          <div className="space-y-3">
            {courses.map((c, i) => (
              <a key={i} href={c.href} className="card p-5 flex items-center justify-between gap-4 hover:shadow-panel transition-shadow">
                <div>
                  <p className="font-bold text-zinc-900">{c.name}</p>
                  <p className="text-zinc-600 text-sm">{c.method}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent-blue shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quien da la clase */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién te la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Dos profesores, y sabes cuál te toca</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, que atiende también a alumnos de Sanchinarro"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>Cuando la academia no está al lado de casa, saber quién da la clase pesa todavía más. Aquí no hay plantilla rotatoria: hay dos personas.</p>
              <p><strong className="text-zinc-900">JP</strong> es cofundador y director de estudios, con <strong className="text-zinc-900">más de 10 años</strong> enseñando inglés y 10 viviendo en Irlanda antes de eso.</p>
              <p>Hace personalmente la prueba de nivel de 25 minutos y contesta el WhatsApp del 604 910 611, también si escribes para preguntar por las clases online.</p>
              <p>Su especialidad son los exámenes Cambridge y la adquisición temprana del idioma. La otra mitad es Danny Fitzpatrick, cofundador, licenciado en Marketing por ESIC University y especializado en inglés de negocios y adultos.</p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Daniel de la Peña</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Si el inglés lo necesitas para el trabajo y no para aprobar, el caso de Daniel es el más largo y el más concreto que tenemos documentado.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">18 meses</p><p className="t-small text-zinc-600">cerca de año y medio con nosotros</p></div>
              <div><p className="t-h3 text-accent-blue">Su objetivo</p><p className="t-small text-zinc-600">trabajar en países de habla inglesa</p></div>
              <div><p className="t-h3 text-emerald-600">Hoy</p><p className="t-small text-zinc-600">profesor titulado, da inglés en primaria a jornada completa</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Vino con un objetivo laboral explícito: <em>"acceder a oportunidades laborales en el extranjero y en países de habla inglesa"</em>. Sobre si lo consiguió: <em>"es algo que conseguí… cumplió con mis expectativas"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">Lo que valora no es un método con nombre comercial, sino el <em>"trato personalizado y sobre todo profesionalidad y compromiso para con tu proceso de aprendizaje y tu situación de partida"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">El final es mejor que el objetivo con el que entró: hoy es profesor titulado y enseña inglés en primaria a jornada completa. Pasó de necesitar el idioma a vivir de él.</p>
            <a href="/testimonios/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver el vídeo y otros casos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cuánto cuesta, en euros y sin rodeos</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 mb-8">La distancia no cambia el precio: pagas lo mismo desde Sanchinarro que desde el portal de al lado. Y si eliges online, la hora cuesta exactamente igual que presencial.</p>
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
          <p className="t-small text-zinc-500 mt-6">Al margen de la cuota se pagan, una sola vez, <strong>45 € de matrícula</strong> y un <strong>libro de 40 € como máximo</strong>. Dentro entran las clases semanales, los simulacros de Cambridge, el seguimiento personalizado y los recursos online, con descuento por pago trimestral y por hermanos. El examen oficial se abona aparte, a la tarifa de Cambridge.</p>
        </div>
      </section>

      {/* Reseñas */}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">Opiniones reales, verificadas en Google</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {localReviews.map((review, idx) => (
              <div key={idx} className="card p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                  <GoogleMark className="h-4 w-4 opacity-70" />
                </div>
                <p className="text-zinc-700 mb-4 italic">"{review.text}"</p>
                <p className="text-zinc-900 font-semibold">{review.name}</p>
                <p className="text-zinc-500 text-sm">{review.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={NAP.gbpUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              Ver las 183 reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">Preguntas frecuentes sobre clases de inglés para Sanchinarro</h2>
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

      {/* CTA final */}
      <section className="section-tight px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            ¿Buscas academia de inglés desde Sanchinarro? Empieza por la prueba de nivel gratuita: 25 minutos, presencial u online.
          </p>
          <a href="/prueba-de-nivel-ingles/" className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-4 px-8 rounded-lg hover:bg-amber-400 hover:text-accent-blue-900 transition-colors">
            Pide tu prueba de nivel gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-lead px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">Reserva tu prueba de nivel</h2>
              <p className="text-zinc-600 mb-8">Presencial en Barrio del Pilar u online desde casa, a la misma tarifa. Te contamos qué encaja mejor con tu horario.</p>
              <div className="flex flex-wrap gap-4">
                <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp {NAP.phone}
                </a>
                <a href={NAP.phoneTel} className="bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
              <p className="text-zinc-500 mt-6 text-sm">{NAP.fullAddress} · Abrimos hasta las 21:30 de lunes a jueves.</p>
            </div>
            <div>
              <LeadForm
                title="Reserva tu prueba gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar ahora"
                source="sanchinarro"
                showPhone={true}
                showAge={true}
                showLevel={true}
                variant="refresh"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Downline: el hub de barrios reparte hacia cada curso */}
      <section className="section-lead px-6 surface-alt border-t border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <p className="text-zinc-500 text-sm text-center leading-relaxed">
            <strong className="text-zinc-600">Cursos disponibles:</strong>{' '}
            <a href="/cursos-ingles/" className="text-indigo-600 hover:underline">Todos los cursos</a>
            {' · '}
            <a href="/cursos-ingles/infantil/" className="text-indigo-600 hover:underline">Inglés infantil (2-5 años)</a>
            {' · '}
            <a href="/cursos-ingles/primaria/" className="text-indigo-600 hover:underline">Inglés para primaria (6-12)</a>
            {' · '}
            <a href="/cursos-ingles/secundaria/" className="text-indigo-600 hover:underline">Inglés para secundaria y EBAU</a>
            {' · '}
            <a href="/cursos-ingles/adultos/" className="text-indigo-600 hover:underline">Clases de inglés para adultos</a>
            {' · '}
            <a href="/cursos-ingles/particulares/" className="text-indigo-600 hover:underline">Clases particulares de inglés</a>
            {' · '}
            <a href="/cursos-ingles/online/" className="text-indigo-600 hover:underline">Clases de inglés online</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
