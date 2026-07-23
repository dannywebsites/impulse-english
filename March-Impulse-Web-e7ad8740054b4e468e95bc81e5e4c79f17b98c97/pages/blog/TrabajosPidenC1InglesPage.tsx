import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Qué Trabajos Piden C1 de Inglés? Sectores y Puestos",
    description: "El C1 de inglés es esencial en consultoría, banca, IT, docencia universitaria y multinacionales. Descubre qué puestos lo exigen y cómo mejora tu salario.",
    url: `${businessInfo.url}/blog/trabajos-piden-c1-ingles`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿El C1 de inglés es imprescindible para trabajar en una multinacional?",
      answer: "No siempre es un requisito formal, pero en la práctica resulta casi imprescindible para puestos de responsabilidad. Las multinacionales operan en inglés como lingua franca: reuniones, informes, presentaciones y comunicaciones internas se realizan en inglés. Un B2 puede ser suficiente para puestos operativos, pero para roles de gestión, dirección o proyectos internacionales, el C1 es el estándar esperado."
    }

  ,
    {
      question: "¿Cuánto más puedo ganar con un C1 certificado?",
      answer: "Según estudios de Infoempleo y Adecco, los profesionales con C1 certificado ganan de media un 15-25% más que aquellos con B2 en el mismo puesto. En sectores como consultoría, banca de inversión y tecnología, la diferencia puede ser aún mayor, llegando al 30-40% en posiciones senior. El retorno de inversión del C1 se recupera generalmente en 6-12 meses de trabajo."
    },
    {
      question: "¿El C1 Cambridge es mejor que el IELTS 7 para buscar empleo?",
      answer: "Ambos certifican un nivel equivalente, pero tienen ventajas distintas. El C1 Advanced de Cambridge no caduca, lo que lo hace más conveniente a largo plazo. El IELTS es más reconocido internacionalmente, especialmente en el mundo anglosajón y para inmigración. Para el mercado laboral español y europeo, el C1 Cambridge suele tener más reconocimiento y valor."
    },
    {
      question: "¿Puedo conseguir un trabajo que pide C1 si tengo B2 alto?",
      answer: "Es posible en algunos casos, especialmente si demuestras fluidez oral en la entrevista. Sin embargo, muchos departamentos de RRHH filtran candidatos automáticamente por certificación, por lo que sin el C1 certificado tu CV podría ser descartado antes de llegar a la entrevista. La certificación funciona como filtro objetivo en procesos con muchos candidatos."
    }
  ];

export default function TrabajosPidenC1InglesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Trabajos que requieren nivel C1 de inglés certificado" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Trabajos que Piden C1' }
                ]}
                variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Marzo 2026
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  ¿Qué Trabajos Piden C1 de Inglés? Sectores y Puestos
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  El nivel C1 certificado por Cambridge C1 Advanced es esencial en puestos directivos, técnicos, académicos, turísticos y legales que requieren comunicación fluida y precisa en entornos internacionales.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-emerald-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#sectores" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Sectores que exigen C1</a></li>
                <li><a href="#puestos" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Puestos específicos por industria</a></li>
                <li><a href="#salario" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Impacto en salario</a></li>
                <li><a href="#c1-vs-b2" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ C1 vs B2 en el mercado laboral</a></li>
                <li><a href="#cv" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo presentar tu C1 en el CV</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              En un mercado laboral cada vez más globalizado, el nivel <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">C1 de inglés certificado por Cambridge</a> se ha convertido en un requisito diferenciador en múltiples sectores profesionales. Ya no basta con incluir "inglés avanzado" en el currículum: las empresas exigen certificaciones oficiales que acrediten tu nivel de forma objetiva. Descubre qué sectores y puestos valoran especialmente el C1 y cómo puede impulsar tu carrera profesional.
            </p>

            {/* Section 1 */}
            <section id="sectores" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Sectores que Exigen Nivel C1 de Inglés
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El C1 es el nivel estándar en industrias donde la comunicación en inglés es constante y requiere precisión. Estos son los principales sectores:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Consultoría y Auditoría
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Big Four (Deloitte, PwC, EY, KPMG)</li>
                    <li>• Consultoría estratégica (McKinsey, BCG, Bain)</li>
                    <li>• Firmas de consultoría tecnológica</li>
                    <li>• C1 obligatorio desde proceso de selección</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Tecnología e IT
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Empresas tech (Google, Amazon, Microsoft)</li>
                    <li>• Startups con equipos internacionales</li>
                    <li>• Desarrollo de software con documentación en inglés</li>
                    <li>• DevOps, Data Science, Product Management</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Banca y Finanzas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Banca de inversión y corporativa</li>
                    <li>• Gestión de activos y fondos</li>
                    <li>• Análisis financiero internacional</li>
                    <li>• Compliance y regulación</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Educación y Academia
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Docencia universitaria</li>
                    <li>• Programas bilingües (primaria y secundaria)</li>
                    <li>• Investigación y publicación académica</li>
                    <li>• Oposiciones a cuerpos docentes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Según un estudio de Adecco, el 67% de las ofertas de empleo cualificado en España mencionan el inglés como requisito, y el 35% especifican explícitamente un nivel C1 o equivalente como mínimo.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="puestos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Puestos Específicos que Exigen C1 por Industria
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Más allá de los sectores, ciertos puestos requieren el C1 de forma específica, independientemente de la empresa:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Industria</th>
                      <th className="text-left p-4 font-semibold">Puesto</th>
                      <th className="text-left p-4 font-semibold">Nivel mínimo</th>
                      <th className="text-left p-4 font-semibold">Uso principal del inglés</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Consultoría</td>
                      <td className="p-4 text-gray-700">Consultor/Analista</td>
                      <td className="p-4 text-gray-700">C1</td>
                      <td className="p-4 text-gray-700 text-sm">Informes, presentaciones a clientes</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">IT</td>
                      <td className="p-4 text-gray-700">Product Manager</td>
                      <td className="p-4 text-gray-700">C1</td>
                      <td className="p-4 text-gray-700 text-sm">Coordinación equipos globales</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Finanzas</td>
                      <td className="p-4 text-gray-700">Analista financiero</td>
                      <td className="p-4 text-gray-700">C1</td>
                      <td className="p-4 text-gray-700 text-sm">Análisis de mercados internacionales</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Educación</td>
                      <td className="p-4 text-gray-700">Profesor universitario</td>
                      <td className="p-4 text-gray-700">C1-C2</td>
                      <td className="p-4 text-gray-700 text-sm">Docencia, publicaciones, congresos</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Legal</td>
                      <td className="p-4 text-gray-700">Abogado mercantil int.</td>
                      <td className="p-4 text-gray-700">C1</td>
                      <td className="p-4 text-gray-700 text-sm">Contratos, negociaciones</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Marketing</td>
                      <td className="p-4 text-gray-700">Brand Manager global</td>
                      <td className="p-4 text-gray-700">C1</td>
                      <td className="p-4 text-gray-700 text-sm">Estrategia multipaís, copy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Oposiciones y empleo público
                  </h3>
                  <p className="text-gray-700">El C1 otorga puntos adicionales (hasta 3 puntos extra) en oposiciones de educación, sanidad, justicia y administración general. En algunas comunidades autónomas, el C1 es requisito obligatorio para plazas de profesor en programas bilingües y para funcionarios con destinos internacionales.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Turismo y hostelería de alta gama
                  </h3>
                  <p className="text-gray-700">Hoteles 5 estrellas, cadenas internacionales (Marriott, Hilton, Four Seasons) y agencias de turismo premium exigen C1 para puestos de dirección, recepción senior y coordinación de eventos internacionales. La capacidad de gestionar quejas complejas y negociaciones en inglés requiere este nivel.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="salario" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Impacto del C1 en tu Salario
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El C1 de inglés tiene un impacto directo y medible en la remuneración. Los datos del mercado laboral español muestran diferencias significativas:
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Incremento salarial medio por sector con C1
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">+25-35%</div>
                    <div className="text-gray-600 text-sm">Consultoría</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">+20-30%</div>
                    <div className="text-gray-600 text-sm">Tecnología</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">+15-25%</div>
                    <div className="text-gray-600 text-sm">Banca</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">+10-20%</div>
                    <div className="text-gray-600 text-sm">Marketing</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Además del salario base, el C1 abre acceso a posiciones con componentes variables más elevados: bonus internacionales, stock options en empresas tech, y complementos por idiomas en la administración pública. En roles comerciales internacionales, el C1 puede significar la diferencia entre gestionar cuentas nacionales o internacionales, con comisiones proporcionalmente superiores.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Retorno de inversión:</strong> El coste total de preparar y obtener el C1 (academia + examen) oscila entre €1.500-3.000. Con un incremento salarial medio del 20%, esta inversión se recupera en 3-6 meses de trabajo.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="c1-vs-b2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                C1 vs B2 en el Mercado Laboral
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La diferencia entre presentar un B2 y un C1 en el mercado laboral es significativa y va más allá del nivel de inglés:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Con B2 First
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Acceso a puestos operativos y técnicos medios</li>
                    <li>• Suficiente para empresas nacionales con contacto puntual en inglés</li>
                    <li>• Competitivo hasta cierto nivel jerárquico</li>
                    <li>• Puede ser filtrado en procesos de multinacionales</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Con C1 Advanced
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Acceso a puestos directivos y de alta responsabilidad</li>
                    <li>• Imprescindible para multinacionales y consultoría</li>
                    <li>• Diferenciador claro en cualquier proceso de selección</li>
                    <li>• Abre puertas a movilidad internacional</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En la práctica, tener un <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline font-medium">certificado Cambridge</a> C1 significa que tu CV no será descartado automáticamente en el filtro inicial, que puedes negociar desde una posición más fuerte y que accedes a un pool de ofertas significativamente más amplio y mejor remunerado.
              </p>
            </section>

            {/* Section 5 */}
            <section id="cv" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Presentar tu C1 en el CV
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Tener el C1 no basta; hay que saber presentarlo para maximizar su impacto en el proceso de selección:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Formato recomendado en el CV
                  </h3>
                  <p className="text-gray-700">Incluye: "Inglés: C1 Advanced (Cambridge) - Puntuación: [tu puntuación]/210". Si obtuviste Grade A (200+), destácalo explícitamente ya que equivale a C2. Añade el número de candidato para verificación si el empleador lo solicita.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    En la carta de presentación
                  </h3>
                  <p className="text-gray-700">No te limites a mencionar el certificado. Vincula tu nivel de inglés con experiencias profesionales concretas: "Utilizo mi inglés C1 diariamente para coordinar equipos en UK y APAC" es mucho más impactante que "Tengo C1 de Cambridge".</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    En LinkedIn y portales de empleo
                  </h3>
                  <p className="text-gray-700">Añade el C1 Advanced en la sección de certificaciones con fecha de obtención. Incluye las competencias específicas en tu perfil: "Negociación en inglés", "Presentaciones en inglés", "Redacción de informes en inglés". Los reclutadores buscan estas keywords.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo:</strong> Prepárate para demostrar tu nivel en la entrevista. Muchas empresas incluyen una parte en inglés para verificar que el certificado refleja tu nivel real. Mantén tu inglés activo con <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">clases de conversación avanzada</a>.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Conclusión
              </h2>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El C1 de inglés se ha convertido en un requisito estándar en los sectores profesionales más competitivos y mejor remunerados. Desde la consultoría hasta la tecnología, pasando por la banca, la educación y el sector legal, el <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">C1 Advanced de Cambridge</a> abre puertas que el B2 simplemente no puede abrir.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  La inversión en obtener el C1 se recupera rápidamente a través de mejores salarios, acceso a puestos de mayor responsabilidad y oportunidades de movilidad internacional. En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> te preparamos para conseguir tu C1 con programas adaptados a profesionales en activo.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/trabajos-piden-c1-ingles" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/c1-advanced/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    C1 Advanced: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge C1 Advanced.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas adaptados a profesionales en activo.</p>
                </a>
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Exámenes Cambridge: Guía General
                  </h3>
                  <p className="text-gray-600 text-sm">Comparativa de todos los niveles Cambridge.</p>
                </a>
                <a href="/blog/escala-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Escala Cambridge: Todos los Niveles
                  </h3>
                  <p className="text-gray-600 text-sm">Entiende la escala completa de certificaciones.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/trabajos-piden-c1-ingles" />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - C1 Advanced oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
