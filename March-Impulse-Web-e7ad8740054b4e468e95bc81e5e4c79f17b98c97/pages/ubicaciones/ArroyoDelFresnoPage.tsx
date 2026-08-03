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
  { title: "Tres paradas en la línea 7", desc: "Desde el metro de Arroyofresno hasta Peñagrande: Lacoma, Avenida de la Ilustración y ya estás. Sin cambiar de línea, más unos 8 min a pie." },
  { title: "Un barrio nuevo, una academia con recorrido", desc: "Abrimos en 2022 en el Barrio del Pilar y seguimos en el mismo portal. No somos una franquicia que rota de local." },
  { title: "Centro oficial Cambridge y Linguaskill", desc: "Preparas y te examinas en la misma dirección, sin cruzar Madrid en la mañana del examen." },
  { title: "Grupos de 7 a 10 alumnos", desc: "Diez como techo en adultos. En un grupo así hablas cada semana, no cada mes." },
  { title: "5,0 sobre 180 reseñas en Google", desc: "Todas de cinco estrellas, y puedes leerlas antes de escribirnos." },
  { title: "Precios en la web, no por teléfono", desc: "Desde 64 €/mes en grupo, 29 €/hora en particular, matrícula 45 € y libro hasta 40 €." }
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
    name: "Marta Sancho",
    role: "Madre/padre de alumno",
    text: "Mi hijo va contentísimo! Grandes profesionales y buenas personas!"
  },
  {
    name: "Cosme González",
    role: "Reseña verificada en Google",
    text: "Grandes profesores, magnífico ambiente y ganas de agradar."
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cómo llego desde Arroyo del Fresno a la academia?",
    answer: "En la línea 7, sin transbordos: desde el metro de Arroyofresno son tres paradas hasta Peñagrande (Lacoma, Avenida de la Ilustración y Peñagrande) y unos 8 minutos andando hasta Av. de El Ferrol, 22. En coche se baja directo por la Avenida de la Ilustración."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de Arroyo del Fresno?",
    answer: "Infantil desde 64 €/mes, Primaria 83 €/mes, Secundaria desde 87 €/mes y Adultos 94 €/mes. Las particulares son 29 €/hora, presenciales u online. Matrícula 45 € y libro hasta 40 €, ambos una sola vez. No hay más costes."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Es gratuita y dura 25 minutos. La hace JP, el director de estudios, que es además quien contesta el WhatsApp: escribes al 604 910 611 y hablas con él. Sales sabiendo tu nivel MCER y el grupo que te corresponde."
  },
  {
    question: "Mi hijo va a un colegio de la zona. ¿Le da tiempo a llegar?",
    answer: "Sí. Abrimos hasta las 21:30 de lunes a jueves, así que hay grupos que empiezan bastante después de la salida del colegio. Muchas familias del entorno encadenan la recogida con la clase."
  },
  {
    question: "¿Cuántos alumnos hay por clase?",
    answer: "Entre 7 y 10, con un máximo de 10 en los grupos de adultos. Tenemos dos aulas, London y Manchester, y ese aforo es deliberado: en un grupo de 10 hablas en todas las clases."
  },
  {
    question: "¿Dais clases para niños pequeños?",
    answer: "Sí, desde los 2 años con el método Great Little People, y de 6 a 12 con Cambridge Young Learners. Es la parte en la que JP está especializado: adquisición temprana del idioma."
  },
  {
    question: "¿Sois centro oficial de Cambridge o solo preparáis el examen?",
    answer: "Somos centro preparador oficial de Cambridge y centro oficial de Linguaskill: preparas y te examinas en el mismo sitio. Llevamos 100 alumnos aprobados, con un 100% de aprobados en B2 First en 2024/25 y 2025/26 (alumnos presentados)."
  },
  {
    question: "¿Y si prefiero clases online?",
    answer: "Las damos a 29 €/hora, la misma tarifa que la presencial, con los mismos profesores. Es la opción que eligen quienes tienen la agenda cambiante o no quieren depender del metro en invierno."
  }
];

export const locationMeta = {
  locationName: "Arroyo del Fresno",
  pageUrl: "https://impulse-english.es/academia-ingles-arroyo-del-fresno"
};

export default function ArroyoDelFresnoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, a tres paradas de Arroyo del Fresno" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Arroyo del Fresno' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Arroyo del Fresno
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de inglés a 3 paradas de Arroyo del Fresno
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge en Barrio del Pilar, desde 64 €/mes
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Línea 7 desde Arroyofresno · 3 paradas · sin transbordos</span>
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
              <a href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Arroyo%20del%20Fresno%20y%20me%20gustaría%20información%20sobre%20los%20cursos`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300">
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
            ¿Buscas academia de inglés cerca de Arroyo del Fresno? Estamos en Av. de El Ferrol 22, a tres paradas de metro por la línea 7 desde Arroyofresno y unos 8 minutos andando desde Peñagrande. Grupos de 7 a 10 alumnos, desde 64 €/mes, matrícula de 45 € y prueba de nivel gratuita de 25 minutos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Arroyo del Fresno es de los desarrollos más recientes de Fuencarral-El Pardo, y todavía tiene poca oferta de academias dentro del propio barrio. La línea 7 resuelve eso sin transbordos. Somos centro preparador oficial de Cambridge y centro oficial de Linguaskill, así que se estudia y se examina en la misma dirección.
          </p>
        </div>
      </section>

      {/* Por que aqui */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Por qué bajar hasta aquí</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Seis razones concretas, ninguna de ellas un eslogan</h2>
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
            <h2 className="t-h2 text-zinc-900 mb-5">De Arroyofresno a la puerta, paso a paso</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-8">Arroyo del Fresno está en el extremo noroeste de Fuencarral-El Pardo y su metro es de los más nuevos de la red. La línea 7 lo conecta con Peñagrande en línea recta, y desde ahí el resto se hace andando.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Metro Arroyofresno", body: "Coge la línea 7 en dirección Hospital del Henares. Es la misma línea todo el trayecto." },
              { n: 2, title: "Tres paradas", body: "Lacoma, Avenida de la Ilustración y Peñagrande. No hay que cambiar de andén en ningún momento." },
              { n: 3, title: "Unos 8 minutos a pie", body: "Desde la salida de Peñagrande hasta Av. de El Ferrol, 22. En coche, la Avenida de la Ilustración baja directa." },
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
              <NearbyAreas currentHref="/academia-ingles-arroyo-del-fresno/" variant="accent" />
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
            <h2 className="t-h2 text-zinc-900 mb-5">Qué puedes estudiar, y con qué método cada edad</h2>
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
            <h2 className="t-h2 text-zinc-900 mb-5">El profesor no es un nombre en una web</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, a tres paradas de Arroyo del Fresno"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>En un barrio de casas bajas y familias jóvenes, la pregunta suele ser la misma: ¿quién va a estar de verdad con mi hijo cada semana?</p>
              <p>Se llama <strong className="text-zinc-900">JP</strong>, es cofundador y director de estudios, y lleva <strong className="text-zinc-900">más de 10 años</strong> dando clase de inglés, con una década previa viviendo en Irlanda.</p>
              <p>Él organiza los grupos, él hace la prueba de nivel gratuita de 25 minutos y él responde el WhatsApp del 604 910 611. No hay intermediario.</p>
              <p>Trabaja preparación Cambridge y adquisición temprana del idioma, que es lo que importa cuando el alumno tiene cuatro años. Su nombre se repite en las 180 reseñas del perfil. El otro cofundador, Danny Fitzpatrick, lleva adultos y negocios.</p>
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
            <h2 className="t-h2 text-zinc-900 mb-5">Josmary</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Si vuelves al inglés después de años, el problema no suele ser la gramática: es no saber por dónde retomarlo. Eso es exactamente lo que le pasaba a Josmary.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">Septiembre</p><p className="t-small text-zinc-600">cuando entró en el grupo</p></div>
              <div><p className="t-h3 text-accent-blue">Nivel B1</p><p className="t-small text-zinc-600">clases de noche con JP</p></div>
              <div><p className="t-h3 text-emerald-600">Un plan claro</p><p className="t-small text-zinc-600">y la confianza para hablar</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Ella lo resume mejor que nosotros: <em>"yo hablaba el inglés, lo entendía y escribía un poco, pero tenía muchísimos vacíos de gramática, de vocabulario y de no saber en qué punto estaba"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">De las clases se queda con la <em>"creatividad infinita"</em> de su profesor y con algo que rara vez aparece en un folleto: <em>"la confianza de equivocarnos"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">Y con el tiempo le cambió hasta el objetivo: <em>"la meta a la que quería llegar inicialmente ha perdido importancia y le he dado más importancia al proceso y al camino"</em>.</p>
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
            <h2 className="t-h2 text-zinc-900 mb-5">El precio, antes de que tengas que preguntarlo</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 mb-8">Vivir en un barrio nuevo no encarece nada: la tarifa es idéntica para Arroyo del Fresno y para quien cruza la calle. La publicamos entera para que puedas compararla sin llamar a nadie.</p>
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
          <p className="t-small text-zinc-500 mt-6">Fuera de la cuota hay dos pagos únicos: <strong>matrícula, 45 €</strong>, y <strong>libro, 40 € como máximo</strong>. La mensualidad incluye las clases semanales, los simulacros de Cambridge, el seguimiento y los recursos online, y baja si pagas por trimestre o si matriculas a más de un hijo. Las tasas del examen oficial las fija Cambridge.</p>
        </div>
      </section>

      {/* Reseñas */}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">Lo que cuentan quienes ya vienen</h2>
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
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">Preguntas frecuentes sobre clases de inglés cerca de Arroyo del Fresno</h2>
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
            Si buscas academia de inglés cerca de Arroyo del Fresno, empieza por la prueba de nivel: son 25 minutos y no cuesta nada.
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
              <p className="text-zinc-600 mb-8">Tres paradas de metro desde Arroyofresno, sin transbordos. Te decimos tu nivel y el grupo que te toca.</p>
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
                source="arroyo-del-fresno"
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
