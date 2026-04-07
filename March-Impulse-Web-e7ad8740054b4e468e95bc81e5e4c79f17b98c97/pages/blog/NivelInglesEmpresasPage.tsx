import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Qué Nivel de Inglés Piden las Empresas en España?",
    description: "El 85% de ofertas cualificadas piden inglés. B2 es el mínimo para multinacionales, C1 para directivos. Descubre requisitos por sector y puesto.",
    url: `${businessInfo.url}/blog/nivel-ingles-empresas`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿B1 es suficiente para trabajar en empresas?",
      answer: "Para puestos administrativos básicos o sectores donde el inglés no es la lengua vehicular, un B1 puede ser aceptable. Sin embargo, la mayoría de multinacionales y empresas con proyección internacional exigen un mínimo de B2. Un B1 limita significativamente tus opciones en sectores como tecnología, consultoría o banca. Nuestra recomendación es alcanzar al menos B2 para ser competitivo en el mercado laboral actual."
    }

  ,
    {
      question: "¿Las empresas verifican el nivel de inglés en las entrevistas?",
      answer: "Sí, el 72% de las empresas grandes incluyen alguna prueba de inglés durante el proceso de selección. Las formas más comunes son: entrevista parcial o completa en inglés, test escrito online previo a la entrevista presencial, o solicitud de certificado oficial (Cambridge, IELTS, Linguaskill). Algunas empresas tecnológicas realizan toda la entrevista técnica en inglés sin previo aviso."
    },
    {
      question: "¿Cambridge o IELTS para el CV?",
      answer: "Depende de tu objetivo. Cambridge (B2 First, C1 Advanced) no caduca y es el más reconocido en Europa y España. IELTS es preferido para trabajar en Reino Unido, Australia o Canadá, pero caduca a los 2 años. Para el mercado laboral español, los certificados Cambridge son la opción más rentable a largo plazo. Linguaskill de Cambridge también gana popularidad por su rapidez de resultados."
    },
    {
      question: "¿Necesito inglés para trabajar en remoto con empresas extranjeras?",
      answer: "Absolutamente. El trabajo remoto internacional requiere un nivel mínimo de B2, y en la práctica C1 es lo más demandado. La comunicación asíncrona (emails, documentación, Slack) exige excelente comprensión escrita, y las videollamadas requieren fluidez oral. Empresas de EE.UU. y norte de Europa esperan nivel C1 funcional para posiciones remotas."
    },
    {
      question: "¿Cómo puedo mejorar rápido mi inglés para una entrevista?",
      answer: "Con un plan intensivo de 4-8 semanas puedes mejorar significativamente. Prioriza: 1) Practicar respuestas a preguntas frecuentes de entrevista en inglés, 2) Ampliar vocabulario específico de tu sector, 3) Simular entrevistas con un profesor titulado, 4) Escuchar podcasts profesionales diariamente. En Impulse ofrecemos preparación intensiva personalizada para entrevistas laborales."
    }
  ];

export default function NivelInglesEmpresasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const sectorRequirements = [
    { sector: "Tecnología / IT", nivel: "B2 - C1", detalle: "Documentación técnica, reuniones internacionales, código y commits en inglés" },
    { sector: "Consultoría", nivel: "C1", detalle: "Presentaciones a clientes internacionales, informes ejecutivos, negociación" },
    { sector: "Banca / Finanzas", nivel: "B2 - C1", detalle: "Reporting financiero, compliance internacional, comunicación con sede" },
    { sector: "Turismo / Hostelería", nivel: "B1 - B2", detalle: "Atención al cliente, reservas, gestión de reclamaciones en inglés" },
    { sector: "Marketing / Publicidad", nivel: "B2 - C1", detalle: "Campañas globales, copywriting, análisis de mercados internacionales" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG" alt="Clases de inglés profesional para empresas en Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Nivel Inglés Empresas' }
                ]}
                variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Actualizado: Marzo 2026
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  ¿Qué Nivel de Inglés Piden las Empresas en España?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  El 85% de las ofertas cualificadas exigen inglés. Descubre qué nivel necesitas según tu sector y cómo certificarte para destacar en el mercado laboral.
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
                <li><a href="#panorama" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Panorama del Inglés Empresarial en España</a></li>
                <li><a href="#requisitos-sector" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Requisitos por Sector</a></li>
                <li><a href="#nivel-puesto" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Nivel Mínimo por Tipo de Puesto</a></li>
                <li><a href="#verificacion" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo las Empresas Verifican tu Nivel</a></li>
                <li><a href="#certificar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo Certificar tu Inglés</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              En el mercado laboral español actual, el inglés ha dejado de ser un diferencial para convertirse en un <strong>requisito básico</strong>. Según datos de Infojobs y LinkedIn, el <strong>85% de las ofertas de empleo cualificadas</strong> incluyen el inglés como competencia necesaria. Para puestos en multinacionales, el nivel B2 es el mínimo aceptable, mientras que posiciones directivas y de alta responsabilidad exigen C1 o superior. Esta guía analiza en detalle qué nivel pide cada sector, cómo verifican las empresas tu competencia real y cuál es la mejor forma de certificarte.
            </p>

            {/* Section 1 - Panorama */}
            <section id="panorama" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Panorama del Inglés Empresarial en España
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                España se sitúa en el puesto 35 del ranking mundial de competencia en inglés según el índice EF EPI 2025, con un nivel clasificado como "moderado". Esta realidad contrasta con la creciente demanda del mercado laboral, donde cada vez más empresas operan en entornos internacionales.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">85%</div>
                  <p className="text-gray-700 text-sm">de ofertas cualificadas exigen inglés</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">+30%</div>
                  <p className="text-gray-700 text-sm">de salario con nivel B2+ certificado</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">72%</div>
                  <p className="text-gray-700 text-sm">de empresas grandes verifican el nivel</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La brecha entre la demanda empresarial y el nivel real de los candidatos españoles crea una <strong>oportunidad clara</strong>: quienes certifiquen su nivel de inglés con títulos reconocidos como Cambridge o Linguaskill tienen una ventaja competitiva significativa. Madrid, Barcelona, Valencia y Bilbao concentran las ofertas con mayor exigencia de idiomas.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Según el Servicio Público de Empleo, los profesionales con nivel B2 certificado tardan de media un <strong>40% menos en encontrar empleo</strong> que aquellos sin certificación, especialmente en sectores como tecnología, consultoría y servicios financieros.
                </p>
              </div>
            </section>

            {/* Section 2 - Requisitos por Sector */}
            <section id="requisitos-sector" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Requisitos de Inglés por Sector
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todos los sectores demandan el mismo nivel. A continuación, desglosamos los requisitos reales que encontrarás en las principales industrias del mercado español:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Sector</th>
                      <th className="text-left p-4 font-semibold">Nivel</th>
                      <th className="text-left p-4 font-semibold">Uso Principal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sectorRequirements.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.sector}</td>
                        <td className="p-4 text-gray-700">{item.nivel}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.detalle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Tecnología e IT
                  </h3>
                  <p className="text-gray-700 text-sm">El sector tech es el más exigente. El 95% de la documentación técnica está en inglés, las reuniones de equipo en empresas internacionales se realizan en inglés, y las entrevistas técnicas (coding interviews) frecuentemente se conducen íntegramente en este idioma. Nivel recomendado: B2 alto o C1.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Consultoría y Banca
                  </h3>
                  <p className="text-gray-700 text-sm">Las Big Four (Deloitte, PwC, EY, KPMG) y la banca de inversión exigen C1 como mínimo para posiciones de consultor. La comunicación con clientes internacionales, presentaciones ejecutivas y reporting financiero requieren dominio avanzado del idioma.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Nivel por Puesto */}
            <section id="nivel-puesto" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Nivel Mínimo de Inglés por Tipo de Puesto
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Más allá del sector, el nivel exigido varía según la responsabilidad del puesto. A mayor seniority, mayor exigencia lingüística:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Dirección y C-Level (C1 - C2)
                  </h3>
                  <p className="text-gray-700">CEOs, directores y VP de multinacionales necesitan comunicarse con fluidez total en inglés. Negociaciones comerciales, presentaciones ante inversores y liderazgo de equipos multiculturales requieren un dominio casi nativo. El 90% de estos puestos exigen C1 certificado como mínimo.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Mandos Intermedios (B2 - C1)
                  </h3>
                  <p className="text-gray-700">Project managers, team leads y coordinadores necesitan gestionar proyectos internacionales, participar en reuniones con stakeholders extranjeros y redactar informes en inglés. B2 First es el estándar mínimo, aunque C1 es cada vez más frecuente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Perfiles Junior y Técnicos (B1 - B2)
                  </h3>
                  <p className="text-gray-700">Para posiciones de entrada, un B1 sólido puede ser aceptable en sectores menos internacionalizados. Sin embargo, el B2 es lo que realmente te diferencia y abre puertas a <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">promoción interna y mejores oportunidades</a>.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> Según LinkedIn Talent Insights, los profesionales con certificación C1 en su perfil reciben un <strong>65% más de contactos</strong> de recruiters que aquellos con B2, y un 120% más que quienes solo mencionan "inglés alto" sin certificar.
                </p>
              </div>
            </section>

            {/* Section 4 - Verificación */}
            <section id="verificacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo las Empresas Verifican tu Nivel de Inglés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Decir "inglés avanzado" en el CV ya no es suficiente. Las empresas han desarrollado múltiples mecanismos para comprobar tu nivel real durante el proceso de selección:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Entrevista en inglés
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Switch inesperado al inglés durante la entrevista</li>
                    <li>• Ronda completa con entrevistador nativo</li>
                    <li>• Presentación de caso práctico en inglés</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Tests y certificados
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Test online previo (Linguaskill, EF SET)</li>
                    <li>• Solicitud de certificado Cambridge o IELTS</li>
                    <li>• Prueba escrita durante el assessment center</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Las startups y empresas tech suelen optar por entrevistas directamente en inglés, mientras que las grandes corporaciones y consultoras prefieren <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline font-medium">certificaciones oficiales Cambridge</a> como garantía objetiva del nivel. Muchas empresas están adoptando <a href="/linguaskill/" className="text-emerald-600 hover:underline font-medium">Linguaskill de Cambridge</a> como herramienta interna de evaluación por su rapidez y fiabilidad.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Cuidado:</strong> El 35% de los candidatos sobrevalora su nivel de inglés en el CV. Ser descubierto en una entrevista no solo te descarta para ese puesto, sino que puede afectar tu reputación con esa empresa y el recruiter a largo plazo.
                </p>
              </div>
            </section>

            {/* Section 5 - Certificar */}
            <section id="certificar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Certificar tu Inglés para el Mercado Laboral
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La certificación es la forma más efectiva de demostrar tu nivel de inglés de manera objetiva y verificable. Estas son las opciones más valoradas por las empresas españolas:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Cambridge English (B2 First / C1 Advanced)
                  </h3>
                  <p className="text-gray-700">La certificación más reconocida en España y Europa. <strong>No caduca</strong>, lo que la convierte en inversión permanente. El B2 First es el estándar para profesionales, mientras que el C1 Advanced es el más valorado para puestos de responsabilidad. Más de 25,000 organizaciones mundiales lo aceptan.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Linguaskill (Cambridge)
                  </h3>
                  <p className="text-gray-700">Test online con resultados en 48 horas. Ideal para procesos de selección rápidos. Cada vez más empresas lo aceptan como alternativa ágil a los exámenes tradicionales. Disponible en modalidades General y Business.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    IELTS
                  </h3>
                  <p className="text-gray-700">Preferido para trabajar en países anglosajones (UK, Australia, Canadá). Caduca a los 2 años, por lo que es menos rentable a largo plazo que Cambridge. Excelente para procesos de inmigración o estudios en el extranjero.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> ofrecemos preparación especializada para todas estas certificaciones. Nuestros profesores altamente cualificados te ayudan a alcanzar el nivel que necesitas con un enfoque práctico orientado al mundo profesional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si no tienes claro qué nivel necesitas, te ofrecemos una <strong>evaluación gratuita</strong> para determinar tu punto de partida y diseñar un plan personalizado para alcanzar tus objetivos laborales.
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
                  El inglés ya no es opcional en el mercado laboral español. Con el <strong>85% de ofertas cualificadas</strong> exigiendo algún nivel, y empresas verificando activamente tu competencia, certificar tu nivel es una inversión directa en tu empleabilidad. El B2 es el mínimo competitivo para la mayoría de sectores, mientras que el C1 te posiciona para roles de mayor responsabilidad y mejor remunerados.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> te preparamos con programas adaptados a tu sector profesional. Consulta también nuestra guía sobre <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline font-medium">exámenes Cambridge</a> para elegir la certificación más adecuada a tus objetivos, o visita nuestra página de <a href="/blog/ingles-entrevistas-trabajo/" className="text-emerald-600 hover:underline font-medium">inglés para entrevistas de trabajo</a> si tienes un proceso de selección próximo.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas certificar tu inglés para el trabajo?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Te ayudamos a alcanzar el nivel que tu sector exige con preparación personalizada y profesores altamente cualificados especializados en inglés profesional.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Solicitar evaluación gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas adaptados a profesionales con horarios flexibles.</p>
                </a>
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Guía de Exámenes Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Comparativa completa de todas las certificaciones Cambridge.</p>
                </a>
                <a href="/blog/ingles-entrevistas-trabajo/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Inglés para Entrevistas de Trabajo
                  </h3>
                  <p className="text-gray-600 text-sm">Frases clave, preguntas frecuentes y técnicas de preparación.</p>
                </a>
                <a href="/blog/trabajos-piden-c1-ingles/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Trabajos que Piden C1 de Inglés
                  </h3>
                  <p className="text-gray-600 text-sm">Sectores y puestos donde el C1 es imprescindible.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <LeadForm />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Certificaciones oficiales
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}