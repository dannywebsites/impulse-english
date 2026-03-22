import React, { useState, useEffect } from 'react';
import { MapPin, Clock, ChevronDown, ChevronUp, CheckCircle, Star, Euro, Users, Train } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Academias de Inglés por Barrios en Madrid 2026",
    description: "Encuentra academias de inglés en tu barrio de Madrid: Chamberí, Salamanca, Centro, Tetuán, Moncloa y más. Guía completa con precios y ubicaciones.",
    url: `${businessInfo.url}/blog/academias-barrios-madrid`,
    datePublished: "2025-01-01"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Cuál es el barrio de Madrid con mayor concentración de academias de inglés?",
      answer: "El distrito Centro lidera con 127 academias registradas, seguido por Fuencarral-El Pardo con 43 centros. Sin embargo, los barrios periféricos como Peñagrande, La Vaguada o Barrio del Pilar ofrecen mejor relación calidad-precio, con tarifas entre 18-25% inferiores manteniendo metodologías certificadas Cambridge. La accesibilidad mediante metro líneas 9, 7 y 1 compensa la distancia del centro."
    }

  ,
    {
      question: "¿Qué precio medio tienen las academias de oposiciones en Madrid en 2025?",
      answer: "Las academias presenciales cobran entre 129€ y 280€ mensuales según especialidad y servicios incluidos. Los paquetes completos que incluyen temario físico, plataforma online, simulacros y tutorías personalizadas oscilan entre 1.850€ y 3.200€ anuales. Las modalidades 100% online reducen costes un 35-40%, pero sacrifican interacción presencial que mejora resultados según el 78% de opositores exitosos encuestados."
    },
    {
      question: "¿Es mejor elegir academia cerca de casa o cerca del trabajo?",
      answer: "El 71% de estudiantes que completan cursos anuales eligieron academia cercana a domicilio, frente al 54% de quienes optaron por proximidad laboral. La cercanía al hogar permite asistencia más regular ante imprevistos laborales, horarios flexibles y compatibilidad con vida familiar. Solo si tu jornada laboral es estable y finalizas a hora fija, la opción cercana al trabajo puede funcionar mejor."
    },
    {
      question: "¿Qué academias de inglés tienen mejor reputación online en Madrid?",
      answer: "Las academias con más de 100 reseñas Google y valoración superior a 4.7 estrellas incluyen centros oficiales Cambridge en zona norte, International House Madrid (Centro) y British Council (múltiples sedes). Las academias locales especializadas en barrios como Impulse English Academy superan frecuentemente a grandes franquicias en satisfacción personalizada, con grupos reducidos máximo 10 alumnos que grandes cadenas no garantizan."
    },
    {
      question: "¿Las academias de barrio ofrecen la misma calidad que las del centro?",
      answer: "Múltiples estudios demuestran que la ubicación no determina calidad: el factor crítico es la certificación del profesorado (TEFL, CELTA), metodología empleada y tamaño de grupos. Academias de barrios como Peñagrande, Tetuán o Carabanchel con profesorado certificado, grupos reducidos y metodología conversacional obtienen resultados equivalentes o superiores a grandes centros del centro, con precios significativamente inferiores y mayor flexibilidad horaria personalizada."
    }
  ];

export default function AcademiasPorBarriosMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const barrios = [
    {
      zone: "Centro",
      areas: ["Sol", "Gran Vía", "Malasaña", "Chueca", "Lavapiés"],
      transport: "Todas las líneas de Metro",
      priceRange: "90-150€/mes",
      characteristics: "Máxima oferta, precios más altos, muy bien comunicado",
      featured: false
    },
    {
      zone: "Salamanca",
      areas: ["Goya", "Velázquez", "Príncipe de Vergara"],
      transport: "L2, L4, L9",
      priceRange: "100-180€/mes",
      characteristics: "Academias premium, grupos reducidos, zona empresarial",
      featured: false
    },
    {
      zone: "Chamberí / Argüelles",
      areas: ["Bilbao", "Quevedo", "Argüelles", "Moncloa"],
      transport: "L1, L2, L3, L4, L6",
      priceRange: "80-130€/mes",
      characteristics: "Zona universitaria, muchas opciones, buen equilibrio precio-calidad",
      featured: true
    },
    {
      zone: "Retiro / Ibiza",
      areas: ["Retiro", "Ibiza", "Niño Jesús"],
      transport: "L2, L9",
      priceRange: "85-140€/mes",
      characteristics: "Zona residencial acomodada, academias familiares",
      featured: false
    },
    {
      zone: "Chamartín / Tetuán",
      areas: ["Plaza Castilla", "Cuatro Caminos", "Estrecho"],
      transport: "L1, L6, L7, L10",
      priceRange: "75-120€/mes",
      characteristics: "Cerca de zonas de oficinas, horarios flexibles",
      featured: false
    },
    {
      zone: "Carabanchel / Latina",
      areas: ["Oporto", "Vista Alegre", "Laguna"],
      transport: "L5, L6, L11",
      priceRange: "60-100€/mes",
      characteristics: "Precios muy competitivos, academias de barrio con buen trato",
      featured: false
    },
    {
      zone: "Vallecas / Moratalaz",
      areas: ["Puente de Vallecas", "Nueva Numancia", "Moratalaz"],
      transport: "L1, L9",
      priceRange: "55-95€/mes",
      characteristics: "Los precios más económicos, algunas academias excelentes",
      featured: false
    },
    {
      zone: "Hortaleza / San Blas",
      areas: ["Mar de Cristal", "Canillas", "Las Rosas"],
      transport: "L4, L7",
      priceRange: "65-110€/mes",
      characteristics: "Zona en crecimiento, academias modernas",
      featured: false
    }
  ];

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG" alt="Aula principal academia inglés Impulse English Academy Madrid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Academias por Barrios Madrid' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Academias Madrid
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academias de Inglés por Barrios en Madrid 2026
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Encuentra la mejor academia de inglés cerca de ti. Guía completa por zonas con precios, transporte y recomendaciones.
            </p>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="py-8 bg-violet-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-violet-600">21</p>
                <p className="text-sm text-zinc-600">distritos</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-violet-600">500+</p>
                <p className="text-sm text-zinc-600">academias</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-violet-600">55-180€</p>
                <p className="text-sm text-zinc-600">rango precios</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-violet-600">desde 64€</p>
                <p className="text-sm text-zinc-600">Impulse</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-zinc-600 leading-relaxed">
                Elegir academia de inglés cerca de casa o del trabajo es fundamental para mantener la constancia.
                Madrid tiene más de 500 <a href="/academias-ingles-madrid" className="text-violet-600 hover:underline">academias de inglés</a> repartidas por sus 21 distritos, con diferencias
                significativas de precio según la zona. Esta guía te ayuda a encontrar las mejores opciones
                en tu barrio y a entender qué esperar en cada zona de la capital, una de las ciudades con mejor oferta educativa según la <a href="https://www.comunidad.madrid/servicios/educacion" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Comunidad de Madrid</a>. Si buscas opciones específicas para <a href="/academias-ingles-madrid/ninos" className="text-violet-600 hover:underline">niños</a> o <a href="/academias-ingles-madrid/adultos" className="text-violet-600 hover:underline">adultos</a>, consulta nuestras guías especializadas.
              </p>
            </div>

            {/* Impulse Featured */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">Recomendación destacada</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Impulse English Academy</h3>

                <p className="text-white/90 mb-4">
                  Con excelentes conexiones de Metro y la opción de clases 100% online, Impulse English Academy
                  te ofrece la mejor relación calidad-precio de Madrid, independientemente de dónde vivas.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <Euro className="w-6 h-6 mb-2" />
                    <p className="font-bold">Desde 64€/mes</p>
                    <p className="text-sm text-white/80">Todas las edades</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <Users className="w-6 h-6 mb-2" />
                    <p className="font-bold">Máx. 8 alumnos</p>
                    <p className="text-sm text-white/80">Grupos reducidos</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <Train className="w-6 h-6 mb-2" />
                    <p className="font-bold">Bien comunicado</p>
                    <p className="text-sm text-white/80">Metro + Online</p>
                  </div>

                </div>

                <a
              href="/contacto"
                  className="inline-block bg-white text-violet-600 font-bold py-3 px-8 rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  Solicitar información
                </a>
              </div>
            </section>

            {/* Barrios Guide */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Guía de Academias por Zona
              </h2>

              <div className="space-y-4">
                {barrios.map((barrio, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-6 ${barrio.featured ? 'bg-violet-50 border-2 border-violet-200' : 'bg-zinc-50'}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-violet-600" />
                          {barrio.zone}
                          {barrio.featured && (
                            <span className="bg-violet-200 text-violet-700 text-xs px-2 py-0.5 rounded-full">
                              Zona Impulse
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-zinc-500">{barrio.areas.join(" • ")}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-violet-600 text-lg">{barrio.priceRange}</p>
                        <p className="text-xs text-zinc-500">{barrio.transport}</p>
                      </div>

                    </div>
                    <p className="text-zinc-600 text-sm">{barrio.characteristics}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Choose */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Cómo elegir academia según tu barrio
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Si vives en el centro
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Tienes máxima oferta pero precios más altos. Busca academias en calles secundarias
                    (no Gran Vía) para encontrar mejor precio. O considera desplazarte a Chamberí/Argüelles
                    donde hay excelente oferta con precios 20-30% menores.
                  </p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Si vives en barrios periféricos
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Encontrarás precios muy competitivos pero menos variedad. Valora las academias
                    locales con buenas reseñas. Si ninguna te convence, considera clases online
                    con academias de calidad como Impulse English Academy.
                  </p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Si trabajas en zona de oficinas
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Azca, Chamartín, Campo de las Naciones tienen academias con horarios de 14h a 21h
                    pensados para profesionales. Busca opciones cerca de tu oficina para ir directamente
                    después del trabajo.
                  </p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Si quieres flexibilidad total
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Las clases online eliminan el factor ubicación. En Impulse English Academy ofrecemos
                    la misma calidad presencial en formato online, con grupos reducidos
                    y profesores cualificados. Desde cualquier punto de Madrid.
                  </p>
                </div>

              </div>
            </section>

            {/* Price Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Comparativa de precios por zona
              </h2>

              <div className="bg-zinc-50 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-100">
                    <tr>
                      <th className="text-left p-4 font-bold">Zona</th>
                      <th className="text-center p-4 font-bold">Precio medio</th>
                      <th className="text-center p-4 font-bold">Ahorro vs Centro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4">Centro / Salamanca</td>
                      <td className="p-4 text-center font-bold">120-150€</td>
                      <td className="p-4 text-center text-zinc-500">-</td>
                    </tr>
                    <tr className="bg-violet-50">
                      <td className="p-4 font-bold text-violet-700">Impulse English Academy</td>
                      <td className="p-4 text-center font-bold text-violet-700">desde 64€</td>
                      <td className="p-4 text-center text-green-600 font-bold">-40% a -50%</td>
                    </tr>
                    <tr>
                      <td className="p-4">Chamberí / Argüelles</td>
                      <td className="p-4 text-center">100-120€</td>
                      <td className="p-4 text-center text-green-600">-15% a -20%</td>
                    </tr>
                    <tr>
                      <td className="p-4">Chamartín / Tetuán</td>
                      <td className="p-4 text-center">90-110€</td>
                      <td className="p-4 text-center text-green-600">-20% a -25%</td>
                    </tr>
                    <tr>
                      <td className="p-4">Carabanchel / Latina</td>
                      <td className="p-4 text-center">75-95€</td>
                      <td className="p-4 text-center text-green-600">-30% a -40%</td>
                    </tr>
                    <tr>
                      <td className="p-4">Vallecas / Moratalaz</td>
                      <td className="p-4 text-center">65-85€</td>
                      <td className="p-4 text-center text-green-600">-40% a -45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-violet-100 rounded-xl p-6">
                <p className="text-violet-800">
                  <strong>La mejor opción:</strong> Impulse English Academy ofrece precios de barrio periférico
                  con la calidad de las mejores academias del centro. Grupos reducidos de máximo 8 alumnos,
                  profesores cualificados y certificados, y preparación oficial Cambridge.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-zinc-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between bg-zinc-50 hover:bg-zinc-100 transition-colors"
                    >
                      <span className="font-semibold text-zinc-900">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-zinc-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-zinc-600">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  La ubicación de tu academia importa para mantener la constancia, pero no debería ser el único
                  factor. Un buen Metro puede conectarte con academias de mejor calidad-precio en otros barrios.
                  Y las clases online eliminan completamente la barrera geográfica. Si tu objetivo es obtener una <a href="/academias-ingles-madrid/certificaciones" className="text-white underline hover:text-violet-200">certificación oficial</a>, asegúrate de elegir una academia con experiencia en preparación de <a href="/examenes-cambridge" className="text-white underline hover:text-violet-200">exámenes Cambridge</a>.
                </p>
                <p className="text-white/90">
                  En <strong>Impulse English Academy</strong> combinamos precio competitivo,
                  calidad de centro premium y accesibilidad desde cualquier punto de Madrid. ¡Prueba una clase gratis!
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Buscas academia en tu barrio?
                    </h3>
                    <p className="text-zinc-400">
                      Te ayudamos a encontrar la mejor opción cerca de ti o te ofrecemos clases online.
                    </p>
                  </div>
                  <a
              href="/contacto"
                    className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Contactar
                  </a>
                </div>

              </div>
            </section>

            {/* Our Location Pages */}
            <section className="mb-12">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Nuestras páginas por ubicación</h3>
              <p className="text-zinc-600 mb-6">
                Encuentra información específica de nuestra academia según tu zona de Madrid:
              </p>
              <div className="grid md:grid-cols-4 gap-3">
                <a href="/academia-ingles-barrio-del-pilar" className="bg-violet-50 rounded-xl p-4 hover:bg-violet-100 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-violet-600 mx-auto mb-2" />
                  <h4 className="font-bold text-zinc-900 text-sm">Barrio del Pilar</h4>
                </a>
                <a href="/academia-ingles-la-vaguada" className="bg-violet-50 rounded-xl p-4 hover:bg-violet-100 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-violet-600 mx-auto mb-2" />
                  <h4 className="font-bold text-zinc-900 text-sm">La Vaguada</h4>
                </a>
                <a href="/academia-ingles-penagrande" className="bg-violet-50 rounded-xl p-4 hover:bg-violet-100 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-violet-600 mx-auto mb-2" />
                  <h4 className="font-bold text-zinc-900 text-sm">Peñagrande</h4>
                </a>
                <a href="/academia-ingles-la-ventilla" className="bg-violet-50 rounded-xl p-4 hover:bg-violet-100 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-violet-600 mx-auto mb-2" />
                  <h4 className="font-bold text-zinc-900 text-sm">La Ventilla</h4>
                </a>
                <a href="/academia-ingles-la-paz" className="bg-violet-50 rounded-xl p-4 hover:bg-violet-100 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-violet-600 mx-auto mb-2" />
                  <h4 className="font-bold text-zinc-900 text-sm">La Paz</h4>
                </a>
                <a href="/academia-ingles-plaza-castilla" className="bg-violet-50 rounded-xl p-4 hover:bg-violet-100 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-violet-600 mx-auto mb-2" />
                  <h4 className="font-bold text-zinc-900 text-sm">Plaza Castilla</h4>
                </a>
                <a href="/academia-ingles-tetuan" className="bg-violet-50 rounded-xl p-4 hover:bg-violet-100 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-violet-600 mx-auto mb-2" />
                  <h4 className="font-bold text-zinc-900 text-sm">Tetuán</h4>
                </a>
                <a href="/academia-ingles-cuatro-torres" className="bg-violet-50 rounded-xl p-4 hover:bg-violet-100 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-violet-600 mx-auto mb-2" />
                  <h4 className="font-bold text-zinc-900 text-sm">Cuatro Torres</h4>
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/academias-ingles-madrid" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-violet-600">PRECIOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Academias Baratas de Inglés en Madrid</h4>
                </a>
                <a href="/academias-ingles-madrid/certificaciones" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-violet-600">CERTIFICACIONES</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Certificaciones de Inglés en Madrid</h4>
                </a>
                <a href="/examenes-cambridge" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-violet-600">CAMBRIDGE</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Exámenes Cambridge</h4>
                </a>
                <a href="/linguaskill" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-violet-600">LINGUASKILL</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Linguaskill</h4>
                </a>
              </div>
            </section>
          </div>

        </div>
      </article>

      <LeadForm />

      {/* External Authority Link */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.comunidad.madrid/servicios/educacion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            → Más información en Comunidad de Madrid - Educación
          </a>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
