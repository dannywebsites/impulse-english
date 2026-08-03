import React, { useEffect } from 'react';
import { MapPin, Train, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';
import NearbyAreas from '../../components/NearbyAreas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const benefits = [
  { title: "Dos paradas y ya estás", desc: "Metro Valdezarza, línea 7: Antonio Machado, Peñagrande, y unos 8 minutos andando. Sin cambiar de línea ni salir a la calle a mitad." },
  { title: "Cruzas de distrito, no de ciudad", desc: "Valdezarza es Moncloa-Aravaca y nosotros Fuencarral-El Pardo, pero la línea 7 los cose en un trayecto corto." },
  { title: "Centro oficial Cambridge y Linguaskill", desc: "Te preparas y te examinas en la misma dirección. Linguaskill entrega el certificado en 48 horas." },
  { title: "Grupos de 7 a 10 alumnos", desc: "Con diez como tope en adultos, hablas todas las semanas. En un grupo de veinte, no." },
  { title: "Clases particulares a 29 €/hora", desc: "Presenciales u online, con horario flexible. La vía habitual para quien estudia o trabaja a turnos." },
  { title: "5,0 sobre 180 reseñas en Google", desc: "Todas de cinco estrellas. Compruébalo antes de reservar nada." }
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
    name: "Gloria Arroyo",
    role: "Reseña verificada en Google",
    text: "Nos gusta mucho esta Academia, grandes profesionales."
  },
  {
    name: "Luis Jimenez",
    role: "Reseña verificada en Google",
    text: "Son muy profesionales y te hacen fácil el aprendizaje"
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cuánto se tarda desde Valdezarza hasta la academia?",
    answer: "Son dos paradas en la línea 7, sin transbordos: desde el metro de Valdezarza pasas por Antonio Machado y te bajas en Peñagrande. Desde ahí, unos 8 minutos andando hasta Av. de El Ferrol, 22."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de Valdezarza?",
    answer: "Infantil desde 64 €/mes, Primaria 83 €/mes, Secundaria desde 87 €/mes y Adultos 94 €/mes. Las clases particulares son 29 €/hora, presenciales u online. La matrícula son 45 € y el libro un máximo de 40 €."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Es gratuita y dura 25 minutos. La hace JP, el director de estudios, que también es quien contesta el WhatsApp: escribes al 604 910 611 y hablas con él directamente. Sales con tu nivel MCER y el grupo recomendado."
  },
  {
    question: "Estudio cerca y tengo horario cambiante. ¿Hay opciones flexibles?",
    answer: "Sí. Abrimos hasta las 21:30 de lunes a jueves y tenemos grupos de mañana y de tarde. Si tu horario cambia cada semana, lo más flexible son las clases particulares a 29 €/hora, presenciales u online."
  },
  {
    question: "¿Cuántos alumnos hay por clase?",
    answer: "Entre 7 y 10, con un máximo de 10 en adultos. Tenemos dos aulas, London y Manchester, y ese aforo es deliberado: en un grupo de 10 hablas en todas las clases."
  },
  {
    question: "¿Preparáis Linguaskill además de Cambridge?",
    answer: "Sí, somos centro oficial de las dos. Linguaskill es la vía rápida cuando una empresa o una oposición te pide acreditar el nivel: el certificado llega en 48 horas."
  },
  {
    question: "¿Sois centro oficial de Cambridge o solo preparáis el examen?",
    answer: "Centro preparador oficial. Te preparas y te examinas en el mismo sitio, sin cruzar Madrid el día del examen. Llevamos 100 alumnos aprobados, con un 100% de aprobados en B2 First en 2024/25 y 2025/26 (alumnos presentados)."
  },
  {
    question: "¿Hay clases para adultos que empiezan de cero?",
    answer: "Sí, trabajamos desde A1 hasta C2. La prueba de nivel existe justamente para no meter a nadie en un grupo que le quede grande o pequeño."
  }
];

export const locationMeta = {
  locationName: "Valdezarza",
  pageUrl: "https://impulse-english.es/academia-ingles-valdezarza"
};

export default function ValdezarzaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, a dos paradas de Valdezarza por la línea 7" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Valdezarza' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Valdezarza
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de inglés a 2 paradas de Valdezarza
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge en Barrio del Pilar, desde 64 €/mes
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Línea 7 · 2 paradas · Antonio Machado y Peñagrande</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 180 reseñas</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Grupos de 7 a 10 alumnos</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a href="/prueba-de-nivel-ingles/" className="bg-brand-red hover:bg-brand-red-600 text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300">
                Reservar prueba de nivel gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Valdezarza%20y%20me%20gustaría%20información%20sobre%20los%20cursos`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300">
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
            ¿Academia de inglés cerca de Valdezarza? Son dos paradas en la línea 7, sin transbordos, y unos 8 minutos a pie desde Peñagrande hasta Av. de El Ferrol 22. Grupos de 7 a 10 alumnos, desde 64 €/mes, matrícula de 45 € y prueba de nivel gratuita de 25 minutos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Valdezarza pertenece a Moncloa-Aravaca y nosotros a Fuencarral-El Pardo, pero la misma línea de metro une los dos barrios en un trayecto corto. Somos centro preparador oficial de Cambridge y centro oficial de Linguaskill: te preparas y te examinas en el mismo sitio, sin cruzar la ciudad el día del examen.
          </p>
        </div>
      </section>

      {/* Por que aqui */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Por qué cruzar a Fuencarral</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Seis motivos para hacer dos paradas de metro</h2>
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
            <h2 className="t-h2 text-zinc-900 mb-5">De Valdezarza a Av. de El Ferrol</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-8">Valdezarza tiene metro propio en la línea 7, la misma que pasa por Peñagrande. Son dos paradas en la misma dirección, sin transbordos y sin dar rodeos por el centro.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Metro Valdezarza", body: "Línea 7, sentido Pitis. La estación está en el propio barrio, así que el trayecto empieza cerca de casa." },
              { n: 2, title: "Dos paradas", body: "Antonio Machado primero y Peñagrande después. Es todo seguido, sin cambiar de andén." },
              { n: 3, title: "Unos 8 minutos a pie", body: "Desde Peñagrande hasta el número 22 de la Av. de El Ferrol, ya en Barrio del Pilar." },
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
              <NearbyAreas currentHref="/academia-ingles-valdezarza/" variant="accent" />
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
            <h2 className="t-h2 text-zinc-900 mb-5">Cursos y niveles, de infantil a C2</h2>
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
            <h2 className="t-h2 text-zinc-900 mb-5">Quién está delante de la clase</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, a dos paradas de Valdezarza en la línea 7"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>Dos paradas es poco viaje, pero sigue siendo un viaje. Conviene saber a quién vas a encontrarte al final.</p>
              <p><strong className="text-zinc-900">JP</strong>, cofundador y director de estudios. <strong className="text-zinc-900">Más de 10 años</strong> dando clase de inglés y otros 10 viviendo en Irlanda antes de instalarse en Madrid.</p>
              <p>Dirige la parte académica, hace él mismo las pruebas de nivel de 25 minutos y contesta el WhatsApp del 604 910 611. Lo que leas cuando escribas lo ha escrito él.</p>
              <p>Está especializado en exámenes Cambridge y en adquisición temprana del idioma, y aparece nombrado en buena parte de las 180 reseñas de Google. Con él está Danny Fitzpatrick, cofundador, que lleva adultos e inglés de negocios.</p>
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
            <h2 className="t-h2 text-zinc-900 mb-5">Sergio</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Sergio no vino a por un título. Vino porque llevaba años entendiendo inglés y sin atreverse a hablarlo, y eso le estaba costando algo muy concreto.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">30 años</p><p className="t-small text-zinc-600">cuando decidió ponerse</p></div>
              <div><p className="t-h3 text-accent-blue">4 entrevistas</p><p className="t-small text-zinc-600">en sus primeros meses en Dublín</p></div>
              <div><p className="t-h3 text-emerald-600">Dos años después</p><p className="t-small text-zinc-600">analista de pólizas en una empresa irlandesa</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Su punto de partida es el de mucha gente que ha pasado por el sistema educativo español: <em>"como todos los españoles, el inglés siempre ha sido una gran parte de nuestra educación. Sin embargo, siempre he tenido una gran carencia de confianza para hablar en inglés"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">Y tenía una consecuencia medible: <em>"la barrera del idioma siempre me había impedido dar este paso"</em>. Sobre lo que cambió: <em>"tanto Dani como JP han sido un gran apoyo para mí, guiándome y asesorándome en cada momento. Gracias a ellos, he podido ganar la confianza que realmente necesitaba"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">Hoy vive en Dublín y trabaja como analista de pólizas. Su frase final: <em>"ha sido una de las mejores decisiones de mi vida y realmente ha cambiado mi vida"</em>.</p>
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
            <h2 className="t-h2 text-zinc-900 mb-5">Precios publicados, sin pedir presupuesto</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 mb-8">Ninguna de estas cifras cambia por venir de Valdezarza, ni por venir en metro en lugar de andando. Están publicadas para que puedas compararlas con cualquier otra academia de la zona.</p>
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
          <p className="t-small text-zinc-500 mt-6">Aparte de la cuota hay dos pagos, y los dos son únicos: <strong>matrícula 45 €</strong> y <strong>libro, 40 € como tope</strong>. Sin cuota de mantenimiento y sin permanencia. La mensualidad cubre las clases semanales, los simulacros de Cambridge, el seguimiento personalizado y los recursos online, con descuento por trimestre y por hermanos matriculados. Las tasas del examen las fija Cambridge.</p>
        </div>
      </section>

      {/* Reseñas */}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">Lo que dicen los alumnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {localReviews.map((review, idx) => (
              <div key={idx} className="card p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
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
              Ver las 180 reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">Preguntas frecuentes sobre clases de inglés cerca de Valdezarza</h2>
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
            Si buscas academia de inglés cerca de Valdezarza, son dos paradas de metro. Empieza por la prueba de nivel gratuita.
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
              <p className="text-zinc-600 mb-8">Dos paradas en la línea 7 y unos 8 minutos a pie. Te decimos tu nivel real y en qué grupo encajas.</p>
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
                source="valdezarza"
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
    </>
  );
}
