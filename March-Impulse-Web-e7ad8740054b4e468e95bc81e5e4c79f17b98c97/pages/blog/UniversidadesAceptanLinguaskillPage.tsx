import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Qué Universidades Aceptan Linguaskill? Lista Completa 2026",
    description: "Más de 80 universidades españolas aceptan Linguaskill, incluidas UNED, UOC y universidades públicas de Madrid, Andalucía y Cataluña. Lista completa.",
    url: `${businessInfo.url}/blog/universidades-aceptan-linguaskill`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Todas las universidades públicas españolas aceptan Linguaskill?",
      answer: "La gran mayoría sí, gracias al acuerdo de la CRUE (Conferencia de Rectores de las Universidades Españolas) que reconoce Linguaskill como certificación válida. Sin embargo, cada universidad establece sus propios requisitos específicos. Es recomendable verificar directamente con el servicio de idiomas de tu universidad antes de inscribirte al examen."
    }

  ,
    {
      question: "¿Qué nivel de Linguaskill necesito para la universidad?",
      answer: "Depende del programa y la universidad. Para acreditar el B1 necesario para la graduación en la mayoría de grados, necesitas una puntuación de 140-159 en Linguaskill. Para programas de máster o doctorado que exigen B2, necesitas 160-179. Algunos programas internacionales pueden pedir C1 (180+). Consulta los requisitos específicos de tu programa."
    },
    {
      question: "¿Linguaskill sirve para acreditar el B1 de graduación?",
      answer: "Sí. La mayoría de universidades españolas aceptan Linguaskill para acreditar el nivel B1 obligatorio para la obtención del título de grado. Es una de las opciones más populares entre estudiantes universitarios por su rapidez (resultados en 48 horas) y por poder realizarlo desde casa."
    },
    {
      question: "¿Caduca el certificado Linguaskill para la universidad?",
      answer: "Linguaskill no tiene fecha de caducidad oficial en el certificado. Sin embargo, algunas universidades pueden establecer un periodo de validez máximo (generalmente 2-3 años) para aceptarlo como acreditación de nivel. Consulta la normativa específica de tu universidad al respecto."
    },
    {
      question: "¿Puedo usar Linguaskill para Erasmus u otros programas de movilidad?",
      answer: "Sí, muchas universidades aceptan Linguaskill para acreditar el nivel de idioma requerido en programas de movilidad como Erasmus+. Generalmente se exige un B2 (puntuación 160-179 en Linguaskill). Sin embargo, la universidad de destino también debe aceptar esta certificación, por lo que es importante verificarlo con ambas instituciones."
    }
  ];

export default function UniversidadesAceptanLinguaskillPage() {
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
              <img src="/images/academy/facilities/technology-based-classroom-photo.jpg" alt="Universidades que aceptan Linguaskill en España lista completa" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Universidades Aceptan Linguaskill' }
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
                  ¿Qué Universidades Aceptan Linguaskill? Lista Completa 2026
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Linguaskill es aceptado por más de 80 universidades españolas, incluidas públicas y privadas en Madrid, Andalucía y Cataluña, así como universidades a distancia como UNED, UOC, UDIMA, UNIR y VIU.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-amber-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#crue" className="text-amber-600 hover:text-amber-700 transition-colors">→ Reconocimiento de la CRUE</a></li>
                <li><a href="#publicas" className="text-amber-600 hover:text-amber-700 transition-colors">→ Universidades Públicas que Aceptan Linguaskill</a></li>
                <li><a href="#privadas" className="text-amber-600 hover:text-amber-700 transition-colors">→ Universidades Privadas y a Distancia</a></li>
                <li><a href="#internacionales" className="text-amber-600 hover:text-amber-700 transition-colors">→ Universidades Internacionales</a></li>
                <li><a href="#niveles" className="text-amber-600 hover:text-amber-700 transition-colors">→ Requisitos de Nivel por Programa</a></li>
                <li><a href="#faq" className="text-amber-600 hover:text-amber-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si necesitas acreditar tu nivel de inglés para la universidad, <a href="/linguaskill/" className="text-amber-600 hover:underline font-medium">Linguaskill de Cambridge</a> es una de las opciones más populares entre estudiantes universitarios en España. Su formato 100% online, resultados en 48 horas y reconocimiento por parte de la CRUE lo convierten en la certificación preferida para acreditar el B1 de graduación, programas de movilidad Erasmus+ y acceso a másteres. En esta guía actualizada encontrarás la <strong>lista completa de universidades que aceptan Linguaskill en 2026</strong>.
            </p>

            {/* Section 1 */}
            <section id="crue" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Reconocimiento de la CRUE
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La <strong>CRUE (Conferencia de Rectores de las Universidades Españolas)</strong> incluye Linguaskill en su tabla de equivalencias de certificaciones de idiomas reconocidas. Este reconocimiento oficial significa que la inmensa mayoría de universidades públicas y privadas españolas aceptan Linguaskill para:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Acreditación académica
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• B1 obligatorio para graduación (Real Decreto)</li>
                    <li>• Requisito de idioma para másteres oficiales</li>
                    <li>• Acreditación para programas de doctorado</li>
                    <li>• Convalidación de créditos de idiomas</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Movilidad y acceso
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Programas Erasmus+ y movilidad internacional</li>
                    <li>• Becas con requisito de idioma</li>
                    <li>• Acceso a grupos bilingües o en inglés</li>
                    <li>• Prácticas internacionales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Tabla de equivalencias CRUE:</strong> Linguaskill con puntuación 120-139 = A2, 140-159 = B1, 160-179 = B2, 180+ = C1. Esta tabla es la referencia que utilizan las universidades para validar tu nivel acreditado con Linguaskill.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="publicas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Universidades Públicas que Aceptan Linguaskill
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                A continuación, presentamos una selección de las principales universidades públicas españolas que reconocen <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/who-accepts-linguaskill/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Linguaskill de Cambridge</a> como certificación válida, organizadas por comunidad autónoma:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Comunidad de Madrid
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                    <ul className="space-y-1">
                      <li>• Universidad Complutense de Madrid (UCM)</li>
                      <li>• Universidad Autónoma de Madrid (UAM)</li>
                      <li>• Universidad Carlos III de Madrid (UC3M)</li>
                      <li>• Universidad Rey Juan Carlos (URJC)</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Universidad Politécnica de Madrid (UPM)</li>
                      <li>• Universidad de Alcalá (UAH)</li>
                      <li>• UNED (a distancia, sede central Madrid)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Cataluña
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                    <ul className="space-y-1">
                      <li>• Universitat de Barcelona (UB)</li>
                      <li>• Universitat Autònoma de Barcelona (UAB)</li>
                      <li>• Universitat Politècnica de Catalunya (UPC)</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Universitat Pompeu Fabra (UPF)</li>
                      <li>• Universitat de Girona (UdG)</li>
                      <li>• Universitat Oberta de Catalunya (UOC)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Andalucía
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                    <ul className="space-y-1">
                      <li>• Universidad de Sevilla (US)</li>
                      <li>• Universidad de Granada (UGR)</li>
                      <li>• Universidad de Málaga (UMA)</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Universidad de Córdoba (UCO)</li>
                      <li>• Universidad Pablo de Olavide (UPO)</li>
                      <li>• Universidad de Cádiz (UCA)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Otras comunidades autónomas
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                    <ul className="space-y-1">
                      <li>• Universitat de València (UV)</li>
                      <li>• Universidad de Zaragoza (UNIZAR)</li>
                      <li>• Universidad de Salamanca (USAL)</li>
                      <li>• Universidad de Valladolid (UVa)</li>
                      <li>• Universidad de Murcia (UM)</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Universidad del País Vasco (UPV/EHU)</li>
                      <li>• Universidad de Santiago de Compostela (USC)</li>
                      <li>• Universidad de Oviedo (UNIOVI)</li>
                      <li>• Universidad de Cantabria (UC)</li>
                      <li>• Universidad de Extremadura (UEX)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Nota importante:</strong> Esta lista no es exhaustiva. Prácticamente todas las universidades públicas españolas adheridas a la CRUE aceptan Linguaskill. Te recomendamos confirmar siempre con el servicio de idiomas de tu universidad específica antes de inscribirte.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="privadas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Universidades Privadas y a Distancia
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las universidades privadas y a distancia también reconocen ampliamente Linguaskill. Estas instituciones suelen valorar especialmente su formato 100% online, que se alinea con su modelo educativo flexible:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    Universidades a Distancia
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>UNED</strong> - Universidad Nacional de Educación a Distancia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>UOC</strong> - Universitat Oberta de Catalunya</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>UNIR</strong> - Universidad Internacional de La Rioja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>UDIMA</strong> - Universidad a Distancia de Madrid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>VIU</strong> - Universidad Internacional de Valencia</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    Universidades Privadas Presenciales
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>IE University</strong> - Segovia/Madrid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Universidad Europea</strong> - Madrid/Valencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Universidad San Pablo CEU</strong> - Madrid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Universidad de Navarra</strong> - Pamplona</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Universidad Pontificia Comillas</strong> - Madrid</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Las universidades a distancia como la UNED, UOC y UNIR representan una proporción creciente de la demanda de Linguaskill, ya que sus estudiantes valoran poder certificar su inglés sin desplazamientos, en línea con su modelo educativo online. La combinación de Linguaskill desde casa con estudios a distancia permite completar todos los requisitos académicos sin necesidad de presencialidad.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Para estudiantes de la UNED:</strong> La UNED acepta Linguaskill tanto para acreditar el B1 de grado como para acceso a másteres oficiales. Los resultados se entregan en su plataforma de gestión académica junto con el certificado oficial de Cambridge.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="internacionales" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Universidades Internacionales
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El reconocimiento de Linguaskill no se limita a España. Cambridge Assessment informa que más de <strong>3.000 organizaciones en más de 60 países</strong> aceptan Linguaskill, incluyendo numerosas universidades internacionales:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-600" />
                    Reino Unido e Irlanda
                  </h3>
                  <p className="text-gray-700">Múltiples universidades británicas aceptan Linguaskill para admisión de estudiantes internacionales, especialmente en programas de posgrado y MBA. Universidades como Bath, Leeds y Sheffield figuran entre las que lo reconocen. Para visados, sin embargo, puede ser necesario un examen SELT aprobado por UKVI.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-600" />
                    Europa continental
                  </h3>
                  <p className="text-gray-700">Universidades en Francia, Alemania, Italia, Portugal y otros países europeos reconocen Linguaskill para programas de intercambio y admisión directa. En Francia, Linguaskill es especialmente popular en Grandes Écoles y universidades con programas en inglés.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-600" />
                    Asia y Latinoamérica
                  </h3>
                  <p className="text-gray-700">Linguaskill tiene presencia creciente en universidades de China, Japón, Corea del Sur, India, Brasil, México y Colombia. Muchas instituciones lo utilizan tanto para admisión como para evaluación interna de estudiantes. En China, más de 200 universidades lo reconocen oficialmente.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Verificación oficial:</strong> Cambridge mantiene un buscador actualizado de instituciones que aceptan Linguaskill en su <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/who-accepts-linguaskill/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">web oficial</a>. Recomendamos siempre verificar directamente con la universidad de destino.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="niveles" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Requisitos de Nivel por Programa
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cada programa universitario establece requisitos de nivel específicos. A continuación, presentamos una guía general de las puntuaciones Linguaskill necesarias según el tipo de programa:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-amber-500 to-amber-700 text-white">
                      <th className="text-left p-4 font-semibold">Programa</th>
                      <th className="text-left p-4 font-semibold">Nivel MCER</th>
                      <th className="text-left p-4 font-semibold">Puntuación Linguaskill</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Graduación (B1 obligatorio)</td>
                      <td className="p-4 text-gray-700">B1</td>
                      <td className="p-4 text-gray-700">140-159</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Máster oficial</td>
                      <td className="p-4 text-gray-700">B2</td>
                      <td className="p-4 text-gray-700">160-179</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Erasmus+ / Movilidad</td>
                      <td className="p-4 text-gray-700">B2</td>
                      <td className="p-4 text-gray-700">160-179</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Doctorado internacional</td>
                      <td className="p-4 text-gray-700">B2-C1</td>
                      <td className="p-4 text-gray-700">160-199</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Grado bilingüe / en inglés</td>
                      <td className="p-4 text-gray-700">C1</td>
                      <td className="p-4 text-gray-700">180+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Es fundamental recordar que estas puntuaciones son orientativas. Cada universidad y programa puede establecer umbrales ligeramente diferentes. Algunos másteres exigen módulos específicos de Linguaskill (por ejemplo, Writing obligatorio además de Reading & Listening) para garantizar que el candidato domina todas las destrezas necesarias.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Estrategia recomendada:</strong> Si necesitas acreditar un B2 y tu nivel está justo en el límite, prepárate a conciencia con materiales oficiales y simulacros. Obtener una puntuación holgada (por ejemplo, 165-170 en lugar de 160 justo) te da mayor seguridad y credibilidad ante la institución.
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
                        <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Linguaskill es aceptado por la gran mayoría de universidades españolas e internacionales</strong> gracias al respaldo de Cambridge Assessment y la CRUE. Con más de 80 universidades públicas y privadas en España, además de miles de instituciones internacionales, es una de las certificaciones de inglés con mayor aceptación en el ámbito académico.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/linguaskill/" className="text-amber-600 hover:underline font-medium">Impulse English Academy</a> te preparamos específicamente para alcanzar la puntuación que necesitas en Linguaskill. Consulta nuestro <a href="/blog/certificado-linguaskill/" className="text-amber-600 hover:underline font-medium">artículo sobre el certificado Linguaskill</a> para entender exactamente qué recibirás, y revisa los <a href="/linguaskill/precios-fechas/" className="text-amber-600 hover:underline font-medium">precios y fechas disponibles</a> para planificar tu examen. Visita nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-amber-600 hover:underline font-medium">academia en Barrio del Pilar</a> o contacta con nosotros online.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas Linguaskill para la universidad?</h3>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                Te preparamos para alcanzar la puntuación exacta que necesitas con cursos específicos y simulacros reales.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/linguaskill/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Linguaskill: Toda la Información
                  </h3>
                  <p className="text-gray-600 text-sm">Guía completa del examen Linguaskill de Cambridge.</p>
                </a>
                <a href="/blog/certificado-linguaskill/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Certificado Linguaskill
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el certificado oficial y su validez.</p>
                </a>
                <a href="/linguaskill/precios-fechas/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Precios y Fechas Linguaskill
                  </h3>
                  <p className="text-gray-600 text-sm">Consulta las próximas convocatorias y precios actualizados.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/who-accepts-linguaskill/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Consulta qué instituciones aceptan Linguaskill en Cambridge English oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
