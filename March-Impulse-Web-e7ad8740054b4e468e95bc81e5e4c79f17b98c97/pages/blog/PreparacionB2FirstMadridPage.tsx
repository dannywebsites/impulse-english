import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Award, BookOpen, FileText, HelpCircle, ChevronDown, CheckCircle, Star, MapPin, Users, Target, Zap, GraduationCap, DollarSign, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

const preparacionB2Faqs = [
  {
    question: "¿Cuánto cuesta preparar el B2 First en Impulse?",
    answer: "Desde 75€/mes para adolescentes y 79€/mes para adultos. Incluye clases, simulacros mensuales y feedback personalizado. No incluye libro oficial (35-45€) ni tasa de examen (160-180€)."
  },
  {
    question: "¿Cuánto tiempo necesito para preparar el B2 First?",
    answer: "Desde nivel B1 consolidado, entre 6-9 meses. Desde B1 bajo/medio, 9-12 meses. Te hacemos una prueba de nivel gratuita para determinar tu timeline exacto."
  },
  {
    question: "¿Puedo hacer el examen B2 First en vuestra academia?",
    answer: "Sí, somos Centro Oficial de Preparación Cambridge. Te preparas y haces el examen en el mismo lugar, sin estrés adicional."
  },
  {
    question: "¿Qué incluyen las clases de preparación B2 First?",
    answer: "2 horas semanales en grupos reducidos (máximo 10), simulacros mensuales completos, feedback detallado en writing y speaking, material didáctico y técnicas de examen."
  },
  {
    question: "¿Qué tasa de aprobados tenéis?",
    answer: "100% de aprobados en 2024-2025. Nuestra metodología incluye simulacros mensuales en condiciones reales y feedback personalizado continuo."
  }
];

const whyChooseUs = [
  {
    icon: <Award className="w-8 h-8 text-red-600" />,
    title: "100% de Aprobados B2 First 2024-2025",
    description: "Todos nuestros estudiantes aprobaron. Metodología probada."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-600" />,
    title: "Centro Oficial de Preparación Cambridge",
    description: "Prepárate y haz el examen oficial en el mismo lugar. Sin estrés."
  },
  {
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "Grupos Reducidos (Máximo 10 Alumnos)",
    description: "Atención personalizada. Mucho tiempo de speaking practice."
  },
  {
    icon: <Target className="w-8 h-8 text-red-600" />,
    title: "Simulacros Mensuales Completos",
    description: "Practicas el examen completo cada mes. Condiciones reales."
  },
  {
    icon: <FileText className="w-8 h-8 text-red-600" />,
    title: "Feedback Detallado Personalizado",
    description: "Correcciones específicas en writing y speaking. Sabes qué mejorar."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-red-600" />,
    title: "Profesores Especializados en Cambridge",
    description: "Todos certificados (TEFL/CELTA). Expertos en B2 First."
  }
];

const preparationSteps = [
  { step: 1, title: "Evaluación Inicial", description: "Prueba de nivel gratuita" },
  { step: 2, title: "Plan Personalizado", description: "Timeline realista (6-12 meses desde B1)" },
  { step: 3, title: "Clases Semanales (2h/semana)", description: "Grupos reducidos" },
  { step: 4, title: "Simulacros Mensuales", description: "Examen completo cada mes" },
  { step: 5, title: "Material Cambridge Oficial", description: "Libros y recursos actualizados" },
  { step: 6, title: "Técnicas de Examen", description: "Estrategias específicas para cada parte" },
  { step: 7, title: "Writing Workshops", description: "Práctica intensiva de redacción" },
  { step: 8, title: "Speaking Practice Intensivo", description: "70% del tiempo hablas TÚ" }
];

const examParts = [
  { name: "Reading & Use of English", duration: "1h 15min", weight: "40% nota" },
  { name: "Writing", duration: "1h 20min", weight: "20% nota" },
  { name: "Listening", duration: "40min", weight: "20% nota" },
  { name: "Speaking", duration: "14min", weight: "20% nota" }
];

const testimonials = [
  {
    quote: "Después de suspender dos veces en otra academia, vine a Impulse y aprobé B2 a la primera con Grade B.",
    name: "Alejandro M.",
    detail: "17 años"
  },
  {
    quote: "Mi hija aprobó B2 First con distinción (Grade A). Muy contentos.",
    name: "Carmen L.",
    detail: "Madre de Alumna"
  },
  {
    quote: "Gracias JP por tu ayuda. Recomiendo enormemente esta academia para B2 First.",
    name: "Víctor RC",
    detail: "Estudiante"
  }
];

const tableOfContents = [
  { id: 'por-que-impulse', title: 'Por Qué Elegirnos' },
  { id: 'que-es-b2-first', title: '¿Qué es el B2 First?' },
  { id: 'formato-examen', title: 'Formato del Examen' },
  { id: 'como-preparamos', title: 'Cómo Te Preparamos' },
  { id: 'precios', title: 'Precios y Plazos' },
  { id: 'testimonios', title: 'Testimonios' },
  { id: 'faq', title: 'Preguntas Frecuentes' },
];

export default function PreparacionB2FirstMadridPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = generateArticleSchema({
    headline: "Preparación B2 First Madrid | 100% Aprobados 2024-2025",
    description: "Preparación B2 First en Madrid, Centro Oficial Cambridge. 100% aprobados 2024-2025. Grupos reducidos, simulacros mensuales. La Vaguada, Barrio del Pilar. Desde 75€/mes.",
    url: `${businessInfo.url}/preparacion-b2-first-madrid`,
    datePublished: "2025-01-15"
  });

  return (
    <>
      <SEOHead
        title="Preparación B2 First | 100% Aprobados 2024-2025"
        description="Preparación B2 First en Madrid, Centro Oficial Cambridge. 100% aprobados 2024-2025. Grupos reducidos, simulacros mensuales. La Vaguada, Barrio del Pilar. Desde 75€/mes."
        keywords="preparación b2 first madrid, academia b2 first madrid, curso b2 first cambridge madrid, preparar fce madrid"
        canonical="/preparacion-b2-first-madrid"
        ogType="article"
      />
      <Navbar />

      <article>
        {/* Hero Section */}
        <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Preparación B2 First Madrid - Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
            items={[
            { label: 'Exámenes Cambridge', href: '/examenes-cambridge' },
            { label: 'Preparación B2 First Madrid' }
            ]}
            variant="light"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                  B2 First
                </span>
                <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actualizado Enero 2025
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Preparación B2 First en Madrid - 100% Aprobados 2024-2025
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Centro Oficial Cambridge en Madrid. Todos nuestros estudiantes aprobaron B2 First en 2024-2025. No es suerte. Es metodología.
              </p>
            </div>
          </div>
        </header>

        {/* Cambridge Logo Badge */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-6">
              <img
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png"
                alt="Cambridge Official Preparation Centre"
                className="h-16 md:h-20 object-contain"
                loading="eager"
              />
              <div>
                <p className="text-lg font-bold text-zinc-900">Centro Oficial de Preparación Cambridge</p>
                <p className="text-zinc-600">Prepárate y examínate en el mismo centro. 100% aprobados 2024-2025.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb to Hub */}
        <div className="container mx-auto max-w-5xl px-6 mb-8">
          <Link
            to="/examenes-cambridge"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ← Volver a Exámenes Cambridge
          </Link>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-600" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-red-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="prose prose-lg max-w-none">

            {/* Stats Banner */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/80">Aprobados 2024-2025</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">10</div>
                <div className="text-white/80">Máx. alumnos/grupo</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">75€</div>
                <div className="text-white/80">Desde /mes</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-white/80">Validez del título</div>
              </div>
            </div>

            {/* Section: Why Choose Us */}
            <section id="por-que-impulse" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-red-600" />
                ¿Por Qué Preparar el B2 First en Impulse?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="mb-4">{reason.icon}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{reason.title}</h3>
                    <p className="text-zinc-600">{reason.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: What is B2 First */}
            <section id="que-es-b2-first" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-red-600" />
                ¿Qué es el B2 First?
              </h2>

              <p className="text-xl text-zinc-600 leading-relaxed mb-6">
                El certificado que piden las universidades españolas. <strong>B2 First</strong> (anteriormente FCE) es el certificado Cambridge más demandado en España. Es requisito para:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-zinc-700 font-medium">Graduación universitaria</span>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-zinc-700 font-medium">Programas Erasmus+</span>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-zinc-700 font-medium">CV profesional</span>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-zinc-700 font-medium">Acceso laboral internacional</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-zinc-700 font-medium">
                  <strong>Válido de por vida.</strong> Reconocido en 25.000+ instituciones mundialmente.
                </p>
              </div>
            </section>

            {/* Section: Exam Format */}
            <section id="formato-examen" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-red-600" />
                Formato del Examen B2 First
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="px-6 py-4 text-left font-bold">Parte</th>
                      <th className="px-6 py-4 text-left font-bold">Duración</th>
                      <th className="px-6 py-4 text-left font-bold">Peso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examParts.map((part, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-zinc-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-zinc-900">{part.name}</td>
                        <td className="px-6 py-4 text-zinc-600">{part.duration}</td>
                        <td className="px-6 py-4 text-zinc-600">{part.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-zinc-500 mb-1">Para aprobar</p>
                  <p className="text-xl font-bold text-zinc-900">Mínimo 160/180 puntos</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-zinc-500 mb-1">Grade C</p>
                  <p className="text-xl font-bold text-green-700">160-172 puntos</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-zinc-500 mb-1">Grade A (acredita C1)</p>
                  <p className="text-xl font-bold text-blue-700">180-190 puntos</p>
                </div>
              </div>
            </section>

            {/* Section: How We Prepare You */}
            <section id="como-preparamos" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <Zap className="w-8 h-8 text-red-600" />
                Cómo Te Preparamos (8 Pasos)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {preparationSteps.map((item) => (
                  <div key={item.step} className="flex items-start gap-4 bg-white border border-zinc-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <span className="w-10 h-10 rounded-full bg-red-600 text-white text-lg font-bold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-zinc-900">{item.title}</h3>
                      <p className="text-zinc-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Pricing & Timeline */}
            <section id="precios" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-red-600" />
                Precios y Plazos
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pricing */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Precios</h3>
                  <div className="space-y-4">
                    <div className="bg-white border-2 border-red-200 rounded-xl p-5">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-zinc-900">Adolescentes (16-17)</p>
                          <p className="text-zinc-500 text-sm">2 horas semanales</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-red-600">Desde 75€</p>
                          <p className="text-zinc-500 text-sm">/mes</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-red-200 rounded-xl p-5">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-zinc-900">Adultos (18+)</p>
                          <p className="text-zinc-500 text-sm">2 horas semanales</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-red-600">79€</p>
                          <p className="text-zinc-500 text-sm">/mes</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 italic">Descuento trimestral disponible. Consulta condiciones.</p>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <Timer className="w-5 h-5 text-red-600" />
                    ¿Cuánto Tiempo Necesito?
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-xl p-5">
                      <p className="font-bold text-zinc-900">Desde B1 consolidado</p>
                      <p className="text-2xl font-bold text-green-700">6-9 meses</p>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-5">
                      <p className="font-bold text-zinc-900">Desde B1 bajo/medio</p>
                      <p className="text-2xl font-bold text-yellow-700">9-12 meses</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-5">
                      <p className="font-bold text-zinc-900">Desde A2</p>
                      <p className="text-2xl font-bold text-orange-700">12-18 meses</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Testimonials */}
            <section id="testimonios" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-red-600" />
                Lo Que Dicen Nuestros Alumnos
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white border border-zinc-200 rounded-xl p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-zinc-600 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-zinc-900">{testimonial.name}</p>
                      <p className="text-zinc-500 text-sm">{testimonial.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}
            <section className="mb-16">
              <div className="bg-zinc-50 rounded-xl p-6 md:p-8 flex items-start gap-4">
                <MapPin className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Nuestra Ubicación</h3>
                  <p className="text-zinc-600 text-lg">Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid</p>
                  <p className="text-zinc-500 mt-2">Junto a Centro Comercial La Vaguada. Fácil acceso en metro (Barrio del Pilar, L7).</p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={preparacionB2Faqs} title="Preguntas Frecuentes sobre Preparación B2 First" />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-red-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Listo para aprobar el B2 First?
                </h2>
                <p className="text-xl text-white/80">
                  Reserva tu prueba de nivel gratuita y empieza tu preparación con expertos Cambridge.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/examenes-cambridge/b2-first"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-red-600 text-sm font-medium">Cambridge B2</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Beneficios del B2 First</h3>
                <p className="text-zinc-600 text-sm mt-2">Descubre por qué el B2 First es el certificado más demandado.</p>
              </Link>
              <Link
                to="/examenes-cambridge"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-red-600 text-sm font-medium">Hub Principal</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa Exámenes Cambridge</h3>
                <p className="text-zinc-600 text-sm mt-2">Todo lo que necesitas saber sobre certificaciones.</p>
              </Link>
              <Link
                to="/examenes-cambridge/fechas-precios"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-red-600 text-sm font-medium">Fechas</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Fechas Exámenes Cambridge 2026</h3>
                <p className="text-zinc-600 text-sm mt-2">Calendario oficial y plazos de inscripción.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/first/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red-600 hover:underline"
            >
              → Más información en Cambridge English - B2 First oficial
            </a>
          </div>
        </section>
      </article>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
