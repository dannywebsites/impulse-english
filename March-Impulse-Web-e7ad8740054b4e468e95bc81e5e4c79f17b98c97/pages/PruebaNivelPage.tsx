import React, { useState, useEffect } from 'react';
import {
  CheckCircle, Phone, Clock, Award, Loader2, Send, Target,
  ClipboardList, CalendarClock, UserCheck, MapPin, ArrowRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import type { FAQItem } from '../utils/schemaData';

/* FAQ questions are mined from the queries this site already earns impressions
   for ("qué nivel de inglés tengo", "cuánto tardo en sacarme el B2") plus the
   objections the reception team fields daily. Answers stay under ~300 chars and
   never open with a bare "sí/no", so Google can lift them whole. */
export const faqs: FAQItem[] = [
  {
    question: "¿Qué nivel de inglés tengo?",
    answer: "Es exactamente lo que resuelve la prueba de nivel. En 25 minutos evaluamos speaking, listening, reading, writing y gramática, y te decimos tu nivel MCER exacto: A1, A2, B1, B2, C1 o C2. No un 'nivel medio' aproximado, sino el nivel real desde el que hay que trabajar."
  },
  {
    question: "¿Cuánto dura la prueba de nivel?",
    answer: "25 minutos en total: entre 15 y 20 de evaluación y el resto para comentar los resultados contigo. Es presencial en nuestra academia de La Vaguada, en Barrio del Pilar, y se hace con cita previa."
  },
  {
    question: "¿La prueba de nivel es realmente gratuita?",
    answer: "Completamente gratuita y sin ningún tipo de compromiso. No pedimos datos bancarios ni hay que matricularse después. Si al terminar decides que no somos tu academia, te llevas igualmente tu nivel MCER y tu plan de estudios."
  },
  {
    question: "¿Tengo que matricularme después de la prueba?",
    answer: "En absoluto. La prueba de nivel existe para que tomes una decisión con información, no para venderte un curso. Muchas familias la hacen para saber por dónde van antes de decidir nada."
  },
  {
    question: "¿Quién hace la prueba de nivel?",
    answer: "La hace JP, nuestro Director de Estudios y cofundador: más de diez años enseñando inglés, diez años viviendo en Irlanda y especialista en exámenes Cambridge. No la hace un comercial: la hace quien dirige el día a día académico del centro."
  },
  {
    question: "¿Sirve también para niños?",
    answer: "A partir de primaria, sí. Evaluamos al alumno y explicamos los resultados a la familia. Para infantil (2-5 años) no hacemos prueba de nivel: ofrecemos una clase de prueba gratuita de una hora, que a esas edades dice mucho más."
  },
  {
    question: "¿Qué me llevo de la prueba de nivel?",
    answer: "Tu nivel MCER exacto, un diagnóstico de en qué destrezas estás fuerte y en cuáles hay que apretar, un plan de estudios personalizado y una previsión realista de plazos para llegar a tu objetivo, sea el B2 First, el C1 Advanced o hablar sin bloquearte."
  },
  {
    question: "¿Cuánto tardaré en sacarme el B2 First?",
    answer: "Depende del punto de partida, y por eso la previsión se hace después de la prueba, no antes. Con un B1 consolidado y clases regulares, un curso académico suele ser un plazo realista. La prueba de nivel convierte esa estimación en una fecha concreta."
  },
];

const deliverables = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Tu nivel MCER exacto",
    body: "A1, A2, B1, B2, C1 o C2. Sin eufemismos ni 'nivel intermedio'.",
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Dónde estás fuerte y dónde no",
    body: "Speaking, listening, reading, writing y gramática, destreza por destreza.",
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: "Un plan de estudios personalizado",
    body: "Qué tienes que trabajar, en qué orden y con qué grupo o formato.",
  },
  {
    icon: <CalendarClock className="w-5 h-5" />,
    title: "Plazos reales, con fechas",
    body: "Cuánto vas a tardar en llegar a tu objetivo. Una fecha, no un 'depende'.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Con nuestro Director de Estudios",
    body: "La hace JP en persona, no un comercial ni un profesor de paso.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Sin ningún tipo de compromiso",
    body: "Gratuita. Sin datos bancarios. Sin obligación de matricularte.",
  },
];

const steps = [
  { n: "1", title: "Reservas tu cita", body: "Rellenas el formulario y te llamamos en menos de 24 horas para encontrar un hueco que te venga bien." },
  { n: "2", title: "Vienes a La Vaguada", body: "25 minutos en la academia, en Barrio del Pilar. No hace falta preparar nada ni traer nada." },
  { n: "3", title: "Te evaluamos de verdad", body: "Las cinco destrezas, incluida una conversación cara a cara. No es un test tipo test de diez preguntas." },
  { n: "4", title: "Te explicamos el plan", body: "Tu nivel, tus carencias y tu plan de estudios personalizado, con los plazos que necesitas para llegar." },
];

const audiences = [
  { title: "Primaria", body: "Saber si va al ritmo del colegio o si ya conviene empezar con Cambridge Young Learners." },
  { title: "Secundaria", body: "Situar el nivel real de cara a la EBAU y decidir si el B1, el B2 o el C1 es el objetivo de este curso." },
  { title: "Adultos", body: "Saber de qué nivel partes de verdad, no del que pusiste en el CV hace ocho años." },
  { title: "Clases one-to-one", body: "El punto de partida obligatorio: sin diagnóstico, una clase particular es cara e imprecisa." },
  { title: "Cambridge", body: "Saber si estás listo para presentarte al B2 First o al C1 Advanced, antes de pagar la tasa." },
  { title: "Linguaskill y oficiales", body: "Comprobar si ya llegas al nivel que te piden en el trabajo, la universidad o la oposición." },
];

export default function PruebaNivelPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        ...formData,
        // NOTE: kept as 'reservar-clase' on purpose. GoHighLevel workflows key off
        // this value; renaming it here without renaming it in GHL first would
        // silently drop these leads out of their automation.
        source: 'reservar-clase',
        timestamp: new Date().toISOString()
      };

      await fetch('https://services.leadconnectorhq.com/hooks/OAJYwGK3D8G66kUMQsht/webhook-trigger/0fe57216-4cdc-42af-b2d6-d401e9015573', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Push lead event to GTM dataLayer (GTM → Google Ads conversion)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        form_type: 'enrollment',
        course_name: formData.level || 'General',
        location_preference: 'Barrio del Pilar',
      });

      // Send the same event straight to GA4. GA4 runs via the standalone
      // gtag (not through GTM), so the dataLayer push above never reaches it.
      // send_to is REQUIRED: GTM claims destination G-KNMS5YW69T on this page,
      // and gtag events without an explicit send_to are silently dropped.
      window.gtag?.('event', 'generate_lead', {
        send_to: 'G-KNMS5YW69T',
        form_type: 'enrollment',
        course_name: formData.level || 'General',
        source: 'reservar-clase',
      });

      setStatus('success');
      setPrivacyAccepted(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-green-50 pt-24 pb-16 px-6 flex items-center justify-center">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              ¡Solicitud recibida!
            </h1>
            <p className="text-lg text-green-700 mb-8">
              Hemos recibido tu solicitud. Te llamamos en menos de 24 horas para darte cita para tu prueba de nivel gratuita.
            </p>

            <div className="card p-6 mb-8">
              <h3 className="font-bold text-zinc-900 mb-4">Próximos pasos:</h3>
              <ol className="text-left space-y-3 text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  Te llamamos para darte cita
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  Haces tu prueba de nivel de 25 minutos en La Vaguada
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  Te llevas tu nivel MCER y tu plan de estudios, sin compromiso
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="btn-secondary">
                Volver al inicio
              </a>
              <a href="tel:+34604910611" className="btn-outline">
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white">
        {/* ---------------------------------------------------------------
            Hero. H1 carries the head term ("prueba de nivel de inglés") and
            the two things that actually drive the click: gratis, 25 minutos.
        --------------------------------------------------------------- */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/primary-students-mobile.webp" type="image/webp" />
              <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/primary-students-mobile.jpg" type="image/jpeg" />
              <img src="/images/academy/primary-classes-students-smiling.jpg" alt="Alumnos de Impulse English Academy en La Vaguada, Madrid" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            </picture>
            <div className="absolute inset-0 bg-accent-blue/85"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>

          <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
            <Breadcrumb
              items={[{ label: 'Prueba de nivel' }]}
              variant="light"
              className="justify-center"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center justify-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="eyebrow-light">
                  Gratis · 25 minutos · Sin compromiso
                </span>
                <div className="w-8 h-px bg-white/40"></div>
              </div>
              <h1 className="t-display text-white mb-6 animate-hero-fade-up animation-delay-100">
                Prueba de nivel de inglés
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mx-auto mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="t-lede text-white/85 font-light max-w-2xl mx-auto animate-hero-fade-up animation-delay-200">
                Descubre tu nivel real y llévate un plan de estudios personalizado,
                hecho contigo por nuestro Director de Estudios. En 25 minutos.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center animate-hero-fade-up animation-delay-200">
                <a href="#reservar" className="btn-primary btn-lg">
                  Pide tu prueba de nivel
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:+34604910611" className="btn-on-dark btn-lg">
                  <Phone className="w-5 h-5" />
                  604 910 611
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Snippet paragraph — answers the query plainly in under 300 chars,
            which is the featured-snippet shot for "prueba de nivel de inglés".
        --------------------------------------------------------------- */}
        <section className="section px-6 bg-white">
          <div className="container-narrow text-center">
            <h2 className="t-h2 text-zinc-900 mb-6">
              ¿Qué es la prueba de nivel de Impulse?
            </h2>
            <p className="t-lede text-zinc-600 measure mx-auto">
              Una evaluación gratuita de 25 minutos, presencial en nuestra academia de
              La Vaguada, en la que medimos tus cinco destrezas en inglés, te decimos tu
              nivel MCER exacto y te entregamos un plan de estudios personalizado. Sin
              coste y sin ningún tipo de compromiso.
            </p>
            <p className="t-body text-zinc-500 measure mx-auto mt-5">
              Y no, no es una clase de prueba. Una clase de prueba te enseña cómo damos clase.
              Una prueba de nivel te dice dónde estás tú.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            The six deliverables. Concreteness is what separates this from
            every "clase gratis" offer in Madrid.
        --------------------------------------------------------------- */}
        <section className="section px-6 surface-alt">
          <div className="container-page">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow mb-4">Qué te llevas</span>
              <h2 className="t-h2 text-zinc-900 mb-5">
                25 minutos, cuatro respuestas y un plan
              </h2>
              <div className="rule"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item) => (
                <div key={item.title} className="card-interactive p-7">
                  <div className="w-11 h-11 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="t-h3 text-zinc-900 mb-2">{item.title}</h3>
                  <p className="t-small text-zinc-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            JP. The single biggest differentiator on this page: the person who
            runs the academy does the assessment himself.
        --------------------------------------------------------------- */}
        <section className="section px-6 bg-white">
          <div className="container-page">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-12">
              <div className="order-2 lg:order-1 lg:col-span-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
                  <img
                    src="/images/academy/jp-with-students.jpg"
                    alt="JP, Director de Estudios de Impulse English Academy, con alumnos"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-6">
                <span className="eyebrow mb-4">Quién te la hace</span>
                <h2 className="t-h2 text-zinc-900 mb-5">
                  La hace JP, nuestro Director de Estudios
                </h2>
                <div className="rule mb-6"></div>

                <div className="space-y-4 t-body text-zinc-600">
                  <p>
                    En casi todas las academias, quien te recibe es un comercial. Aquí te
                    recibe JP: Director de Estudios y cofundador, más de diez años enseñando
                    inglés, diez años viviendo en Irlanda y especialista en exámenes Cambridge
                    y en adquisición temprana del idioma.
                  </p>
                  <p>
                    Es quien dirige el día a día académico del centro y quien diseña los planes
                    de estudio de todos nuestros alumnos. Bajo su dirección académica, el 100%
                    de nuestros alumnos presentados a exámenes Cambridge aprobó en el curso
                    2024/25.
                  </p>
                  <p className="font-medium text-zinc-800">
                    Esos 25 minutos son con él. Es la razón por la que esta prueba de nivel
                    vale lo que vale.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "+10 años enseñando inglés",
                    "10 años viviendo en Irlanda",
                    "Experto en Cambridge",
                  ].map((item) => (
                    <div key={item} className="card-quiet p-4 t-small font-medium text-zinc-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Why it matters. This is the persuasion section: it reframes 25
            minutes as removing the risk of years wasted at the wrong level.
        --------------------------------------------------------------- */}
        <section className="section-lead px-6 surface-deep">
          <div className="container-narrow text-center">
            <span className="eyebrow-light mb-5">Por qué es imprescindible</span>
            <h2 className="t-h2 text-white mb-7">
              Casi nadie fracasa con el inglés por falta de esfuerzo
            </h2>
            <div className="space-y-5 t-lede text-white/80 measure mx-auto">
              <p>
                Fracasa por estudiar el nivel equivocado. Años en una academia sin avanzar
                porque el grupo iba por debajo. Un examen suspendido por presentarse un año
                antes de tiempo. Clases particulares carísimas trabajando lo que ya se sabía.
              </p>
              <p>
                Nada de eso se arregla con más esfuerzo. Se arregla sabiendo desde dónde
                partes y qué te falta exactamente.
              </p>
              <p className="text-white font-medium">
                25 minutos al principio te ahorran dos años estudiando lo que no toca.
                Por eso no cobramos por ella, y por eso no deberías empezar sin hacerla.
              </p>
            </div>
            <div className="mt-10">
              <a href="#reservar" className="btn-primary btn-lg">
                Pide tu prueba de nivel gratis
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        <section className="section px-6 bg-white">
          <div className="container-page">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow mb-4">Cómo funciona</span>
              <h2 className="t-h2 text-zinc-900 mb-5">De la solicitud al plan, en cuatro pasos</h2>
              <div className="rule"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.n} className="card p-7">
                  <span className="inline-flex w-9 h-9 rounded-full bg-brand-red text-white items-center justify-center font-display font-bold mb-5">
                    {step.n}
                  </span>
                  <h3 className="t-h3 text-zinc-900 mb-2">{step.title}</h3>
                  <p className="t-small text-zinc-600">{step.body}</p>
                </div>
              ))}
            </div>

            <p className="t-small text-zinc-500 mt-8 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-blue flex-shrink-0" />
              Presencial en nuestra academia de La Vaguada, Barrio del Pilar (Madrid), con cita previa.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        <section className="section px-6 surface-alt">
          <div className="container-page">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow mb-4">Para quién</span>
              <h2 className="t-h2 text-zinc-900 mb-5">Sirve para todos los casos, y para cada uno responde algo distinto</h2>
              <div className="rule"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((a) => (
                <div key={a.title} className="card p-7">
                  <h3 className="t-h3 text-zinc-900 mb-2">{a.title}</h3>
                  <p className="t-small text-zinc-600">{a.body}</p>
                </div>
              ))}
            </div>

            {/* Infantil is deliberately a different product: a 2-5 year old
                cannot sit a 25-minute assessment, so the hour-long trial class
                stays exactly as it was. */}
            <div className="card-quiet mt-8 p-7">
              <h3 className="t-h3 text-zinc-900 mb-2">¿Y para infantil (2-5 años)?</h3>
              <p className="t-small text-zinc-600">
                A esas edades una prueba de nivel no dice nada útil. Para infantil mantenemos
                la <a href="/cursos-ingles/infantil/" className="link-inline">clase de prueba gratuita de una hora</a>,
                de lunes a viernes a las 17:30: tu hijo juega en inglés con el grupo y tú ves
                cómo responde. Es la mejor evaluación posible a esa edad.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Form.
        --------------------------------------------------------------- */}
        <section id="reservar" className="section-lead px-6 bg-white scroll-mt-24">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="sticky top-24">
                  <span className="eyebrow mb-4">Sin compromiso</span>
                  <h2 className="t-h2 text-zinc-900 mb-5">
                    Pide tu prueba de nivel
                  </h2>
                  <div className="rule mb-7"></div>

                  <div className="space-y-4">
                    {[
                      { icon: <Clock className="w-5 h-5" />, text: "25 minutos, presencial en La Vaguada" },
                      { icon: <Target className="w-5 h-5" />, text: "Tu nivel MCER exacto" },
                      { icon: <UserCheck className="w-5 h-5" />, text: "Plan de estudios personalizado" },
                      { icon: <CheckCircle className="w-5 h-5" />, text: "Gratis y sin compromiso" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-zinc-100">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-emerald-600">
                          {item.icon}
                        </div>
                        <span className="text-zinc-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-accent-blue/5 rounded-xl border border-accent-blue/10">
                    <h3 className="font-bold text-accent-blue mb-2">¿Prefieres llamarnos?</h3>
                    <p className="text-zinc-600 text-sm mb-4">
                      Te damos cita por teléfono en un minuto.
                    </p>
                    <a
                      href="tel:+34604910611"
                      className="flex items-center gap-2 text-accent-blue font-bold"
                    >
                      <Phone className="w-5 h-5" />
                      604 910 611
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      100% de aprobados Cambridge 2024/25
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      Centro Cambridge oficial
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="card p-6 md:p-10">
                  <h2 className="t-h3 text-zinc-900 mb-2">
                    Reserva tu prueba de nivel gratuita
                  </h2>
                  <p className="text-zinc-500 mb-8">
                    Te llamamos en menos de 24 horas para darte cita. Todos los campos marcados con * son obligatorios.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="+34 600 000 000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        ¿Para quién es la prueba de nivel? *
                      </label>
                      <select
                        required
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      >
                        <option value="">Seleccionar</option>
                        <option value="infantil">Infantil (2-5 años)</option>
                        <option value="primaria">Primaria</option>
                        <option value="secundaria">Secundaria</option>
                        <option value="adulto">Adulto</option>
                        <option value="one-to-one">One to One</option>
                        <option value="no-se">No lo sé todavía</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        className="mt-1 w-4 h-4 border-zinc-300 rounded text-accent-blue focus:ring-accent-blue"
                        id="privacy-reservar"
                      />
                      <label htmlFor="privacy-reservar" className="text-sm text-zinc-600">
                        He leído la Política de Privacidad y acepto ser contactado/a por teléfono o WhatsApp. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-brand-red hover:bg-brand-red-600 text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-cta hover:shadow-cta-lift disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando solicitud...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Pide tu prueba de nivel gratuita
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-sm text-brand-red">
                        No hemos podido enviar tu solicitud. Inténtalo de nuevo o llámanos al 604 910 611.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            FAQ. Rendered here and wired to FAQ schema from the .astro file.
        --------------------------------------------------------------- */}
        <section className="section px-6 surface-alt">
          <div className="container-narrow">
            <div className="mb-12 text-center">
              <span className="eyebrow mb-4">Preguntas frecuentes</span>
              <h2 className="t-h2 text-zinc-900 mb-5">Dudas sobre la prueba de nivel</h2>
              <div className="rule mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="card p-6 group">
                  <summary className="t-h3 text-zinc-900 cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-accent-blue transition-transform group-open:rotate-45 flex-shrink-0 text-2xl leading-none">+</span>
                  </summary>
                  <p className="t-body text-zinc-600 mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#reservar" className="btn-primary btn-lg">
                Pide tu prueba de nivel
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
