import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, FileText, HelpCircle, ChevronDown, CreditCard, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

const tableOfContents = [
  { id: 'que-incluye', title: '¿Qué Incluye el Precio del Examen Linguaskill?' },
  { id: 'descuentos', title: 'Descuentos y Tarifas Especiales para Estudiantes' },
  { id: 'como-reservar', title: 'Cómo Reservar tu Examen Paso a Paso' },
  { id: 'modalidades', title: 'Modalidades de Examen y Requisitos' },
  { id: 'faq', title: 'Preguntas Frecuentes (FAQ)' },
];

const faqs = [
  {
    question: '¿Se puede suspender Linguaskill?',
    answer: 'Linguaskill no se puede suspender ni aprobar; es un examen adaptativo que certifica el nivel real de inglés del candidato, desde A1 hasta C1/C2, ajustando las preguntas según sus respuestas. Esto permite una evaluación precisa y justa basada en competencias, sin calificaciones tradicionales de aprobado o suspenso.'
  },
  {
    question: '¿Qué puntuación es B2 en Linguaskill?',
    answer: 'La puntuación que define el nivel B2 en Linguaskill de Cambridge abarca entre 160 y 179 puntos. Este nivel \'Independent User\' acredita habilidades sólidas para comunicarse y comprender textos complejos, siendo fundamental para acceso académico y profesional, con certificación online, modular y adaptativa en 2026.'
  },
  {
    question: '¿Cuánto dura el examen Linguaskill?',
    answer: 'El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular.'
  },
  {
    question: '¿Cuánto tarda en llegar el certificado Linguaskill?',
    answer: 'El certificado Linguaskill suele entregarse en formato digital aproximadamente 48 horas hábiles tras completar el examen. Resultados de reading y listening se obtienen de inmediato, mientras writing y speaking tardan hasta 48 horas. El certificado es válido internacionalmente y se envía por correo electrónico.'
  },
  {
    question: '¿Cuántas veces puedo hacer Linguaskill?',
    answer: 'Linguaskill puede realizarse múltiples veces sin límite, permitiendo repetir módulos individuales (Reading, Listening, Writing y Speaking) para mejorar la puntuación sin hacer el examen completo. Esta flexibilidad, junto con resultados en 48 horas, facilita certificaciones adaptadas a objetivos académicos y profesionales.'
  },
];

export default function PrecioLinguaskillReservarPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = generateArticleSchema({
    headline: "Precio Linguaskill 2025: Tarifas y Reserva del Examen",
    description: "Descubre el precio del examen Linguaskill en 2025 (130€), descuentos universitarios (120€) y cómo reservar tu plaza paso a paso en centros oficiales.",
    url: `${businessInfo.url}/linguaskill/precio-reservar`,
    datePublished: "2024-12-01"
  });

  return (
    <>
      <SEOHead
        title="Precio Linguaskill 2025: Tarifas, Descuentos y Cómo Reservar tu Examen"
        description="Descubre el precio del examen Linguaskill en 2025 (130€), tarifas universitarias (120€), descuentos y cómo reservar paso a paso. Guía completa actualizada con toda la información."
        keywords="precio Linguaskill, Linguaskill precio 2025, cuánto cuesta Linguaskill, tarifa Linguaskill, descuento universitario Linguaskill, reservar Linguaskill, inscripción Linguaskill"
        canonical="/linguaskill/precio-reservar"
        ogType="article"
      />
      <Navbar />

      <article>
        {/* Hero Section */}
        <header className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-green-600 to-green-800">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blogs-impulse' },
                  { label: 'Precio Linguaskill' }
                ]}
                variant="light"
              />

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Linguaskill
                </span>
                <span className="text-white/60 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Actualizado Diciembre 2024
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                Precio Linguaskill 2025: Tarifas y Reserva del Examen
              </h1>

              <p className="text-xl text-white/90 font-light mb-8">
                Descubre el precio del examen Linguaskill en 2025 (130€), descuentos universitarios (120€) y cómo reservar tu plaza paso a paso en centros oficiales.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  6 min de lectura
                </span>
                <span className="flex items-center gap-2">
                  <Euro className="w-4 h-4" />
                  Precios actualizados
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
              alt="Precio examen Linguaskill - Tarifas y reserva"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Breadcrumb to Hub */}
        <div className="container mx-auto max-w-5xl px-6 mb-8">
          <Link
            to="/linguaskill/precios-sedes"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ← Volver a Linguaskill: Precios, Sedes y Servicios
          </Link>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-green-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-bold flex items-center justify-center">
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

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-xl text-zinc-600 leading-relaxed">
                El precio del examen Linguaskill es una pregunta frecuente entre estudiantes y profesionales que necesitan certificar su nivel de inglés rápidamente. En 2025, el coste estándar del examen completo es de <strong>130 euros</strong>, con tarifas reducidas de 120 euros para estudiantes de universidades públicas bajo el Proyecto Universitario. Este artículo responde específicamente cuánto cuesta Linguaskill, qué incluye ese precio y cómo reservar tu examen de forma eficaz. A diferencia de otros certificados tradicionales, Linguaskill ofrece resultados en menos de una semana y flexibilidad de fechas, factores que justifican su inversión.
              </p>
            </section>

            {/* Price Highlight Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-xl text-white">
                <div className="text-4xl font-bold mb-2">130€</div>
                <div className="text-white/80">Precio estándar examen completo</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl text-white">
                <div className="text-4xl font-bold mb-2">120€</div>
                <div className="text-white/80">Tarifa universitaria (Proyecto Uni)</div>
              </div>
            </div>

            {/* Section 1: Qué incluye */}
            <section id="que-incluye" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué Incluye el Precio del Examen Linguaskill?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>El precio de 130 euros del examen Linguaskill incluye las cuatro destrezas evaluadas: Reading & Listening (combinadas en un módulo adaptativo), Writing y Speaking, con supervisión por inteligencia artificial durante toda la prueba.</strong> Este coste cubre tanto la versión Linguaskill General como Linguaskill Business, permitiéndote elegir según tus necesidades sin variación de precio. Consulta la <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">información oficial de Cambridge Linguaskill</a> para conocer más detalles sobre las modalidades disponibles.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El examen utiliza tecnología adaptativa que ajusta la dificultad de las preguntas según tus respuestas, proporcionando una evaluación precisa de tu nivel desde A1 hasta C1+ según el Marco Común Europeo de Referencia (MCER). La supervisión mediante IA registra tu actividad durante el examen para garantizar la integridad del proceso, ya sea que lo realices en un centro oficial o de forma remota con supervisión humana adicional.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El precio incluye tu informe de resultados oficial, que recibirás aproximadamente <strong>entre 3 y 5 días</strong> después de completar el examen, accesible desde el portal oficial de Cambridge English. Este informe detalla tu puntuación en cada destreza y tu nivel MCER global, aunque Linguaskill no emite un certificado físico tradicional como otros exámenes de Cambridge.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo práctico:</strong> Verifica si tu institución acepta el informe de resultados de Linguaskill antes de inscribirte, ya que algunas organizaciones requieren certificados físicos específicos. La mayoría de universidades españolas reconocen Linguaskill oficialmente a través de CRUE.
                </p>
              </div>
            </section>

            {/* Section 2: Descuentos */}
            <section id="descuentos" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Descuentos y Tarifas Especiales para Estudiantes Universitarios
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Los estudiantes de universidades públicas pueden acceder al examen Linguaskill por 120 euros mediante el Proyecto Universitario, un ahorro del 7,7% respecto al precio estándar de 130 euros.</strong> Este descuento aplica a ambas versiones del examen y requiere verificación de tu condición de estudiante durante el proceso de inscripción.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para acceder a esta tarifa reducida, debes registrarte a través de un centro Linguaskill asociado a tu universidad o que participe en el programa universitario. Necesitarás presentar tu carnet universitario vigente o un certificado de matriculación actual durante el registro. El descuento no es acumulable con otras promociones y solo aplica para estudiantes de instituciones públicas, no privadas.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Algunas universidades españolas tienen convenios específicos con centros de examen que ofrecen fechas exclusivas para sus estudiantes con esta tarifa especial. Por ejemplo, <strong>varias facultades organizan convocatorias grupales donde hasta 15 estudiantes pueden examinarse simultáneamente</strong>, facilitando la logística y reduciendo costes administrativos que a veces se trasladan como descuentos adicionales.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Advertencia importante:</strong> Verifica la fecha de caducidad de tu carnet universitario antes de inscribirte. Si caduca antes de tu fecha de examen, es posible que tengas que pagar la diferencia o presentar documentación actualizada para mantener el descuento.
                </p>
              </div>
            </section>

            {/* Section 3: Cómo reservar */}
            <section id="como-reservar" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Cómo Reservar tu Examen Linguaskill Paso a Paso
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Para reservar el examen Linguaskill debes contactar con un centro oficial autorizado, completar el formulario de inscripción con tus datos personales y número de pasaporte o DNI, pagar la tarifa correspondiente y recibir tu Confirmación de Entrada (CoE) por correo electrónico.</strong> Este proceso suele completarse en 24-48 horas una vez realizado el pago.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El primer paso es localizar un centro Linguaskill autorizado en tu zona o que ofrezca la modalidad de examen remoto supervisado. Puedes consultar el listado oficial en la web de Cambridge Assessment English o contactar directamente con academias certificadas. Al registrarte, deberás proporcionar datos personales exactos que coincidan con tu documento de identidad, ya que cualquier discrepancia puede causar problemas el día del examen.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Una vez seleccionada la fecha (muchos centros ofrecen opciones semanales o quincenales), realizas el pago mediante transferencia bancaria, tarjeta de crédito o métodos que especifique el centro. <strong>El plazo recomendado para reservar es de al menos 2 semanas antes de tu fecha deseada</strong>, aunque algunos centros permiten inscripciones con 3-5 días de antelación si hay disponibilidad.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Tras confirmar tu plaza, recibirás un correo electrónico con tu CoE que incluye: fecha exacta y hora del examen, ubicación (física o instrucciones para acceso remoto), normas específicas del centro y recordatorio de documentación requerida. Es fundamental leer completamente este documento antes del día del examen.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo esencial:</strong> Guarda tu CoE en formato digital y físico. Algunos centros solicitan presentar este documento el día del examen como comprobante de inscripción, además de tu identificación oficial con fotografía.
                </p>
              </div>
            </section>

            {/* Section 4: Modalidades */}
            <section id="modalidades" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Modalidades de Examen y Requisitos para el Día de la Prueba
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Linguaskill ofrece dos modalidades principales: examen presencial en centro autorizado con supervisión in situ, o examen remoto desde tu ubicación con supervisión humana a distancia, ambas complementadas con monitorización mediante inteligencia artificial durante toda la prueba.</strong> La elección de modalidad no afecta al precio estándar de 130 euros ni a la validez del resultado.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La modalidad presencial requiere que acudas al centro de examen en la fecha y hora asignadas. Debes llegar al menos <strong>15 minutos antes</strong> de tu convocatoria con tu DNI o pasaporte original vigente (no se aceptan documentos digitales, fotocopias ni identificaciones caducadas). El centro proporcionará el equipo informático y el entorno controlado necesario para realizar el examen.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para la modalidad remota supervisada, necesitas un ordenador con cámara web funcional, micrófono, conexión estable a internet de al menos 2 Mbps, navegador actualizado (Chrome o Firefox recomendados) y un espacio privado silencioso con buena iluminación. Antes del examen, realizarás una prueba técnica para verificar que tu equipo cumple los requisitos mínimos.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                <strong>Prohibiciones estrictas aplicables a ambas modalidades:</strong> no puedes llevar relojes de ningún tipo, teléfonos móviles, smartwatches, auriculares, reproductores de audio/vídeo ni dispositivos electrónicos personales. Violar estas normas puede resultar en descalificación inmediata sin derecho a reembolso. Tampoco se permiten diccionarios, notas o materiales de referencia durante el examen.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Advertencia crítica:</strong> Si eliges modalidad remota, asegúrate de realizar la prueba técnica con al menos 48 horas de antelación. Los problemas técnicos detectados el día del examen raramente resultan en reprogramaciones sin coste adicional.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-green-600" />
                Preguntas Frecuentes (FAQ)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-zinc-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-zinc-50 transition-colors"
                    >
                      <span className="font-semibold text-zinc-900 pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 transition-transform flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 bg-zinc-50">
                        <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Conclusión: Invierte Inteligentemente en tu Certificación
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El precio de 130 euros del examen Linguaskill representa una inversión accesible para obtener una certificación reconocida internacionalmente en menos de una semana. Aprovecha el descuento universitario si eres estudiante de instituciones públicas y reserva con antelación suficiente para asegurar tu fecha preferida. La clave está en elegir la modalidad que mejor se adapte a tus necesidades tecnológicas y de disponibilidad.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Para maximizar tu inversión, prepárate adecuadamente antes del examen mediante recursos oficiales y familiarízate con el formato adaptativo de las preguntas. En nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-green-600 hover:underline font-medium">academia de inglés en Barrio del Pilar</Link>, ofrecemos <Link to="/ingles-la-vaguada/adultos" className="text-green-600 hover:underline font-medium">cursos de preparación para adultos</Link> específicos para Linguaskill que pueden mejorar significativamente tu puntuación final. Si prefieres atención personalizada, consulta nuestras <Link to="/ingles-la-vaguada/particulares" className="text-green-600 hover:underline font-medium">clases particulares de inglés</Link>. Recuerda verificar todos los requisitos técnicos y documentales antes del día del examen para evitar contratiempos innecesarios.
              </p>
            </section>

          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Necesitas preparar tu examen Linguaskill?
                </h2>
                <p className="text-xl text-white/80">
                  Reserva tu clase gratuita y maximiza tu inversión con preparación especializada.
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
                to="/linguaskill/precios-sedes"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-green-600 text-sm font-medium">Hub Principal</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Linguaskill: Precios, Sedes y Servicios</h3>
                <p className="text-zinc-600 text-sm mt-2">Guía completa de precios y sedes en España.</p>
              </Link>
              <Link
                to="/linguaskill/centros"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-green-600 text-sm font-medium">Centros</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Centros Linguaskill en España</h3>
                <p className="text-zinc-600 text-sm mt-2">Dónde examinarte en Madrid, Valencia y Zaragoza.</p>
              </Link>
              <Link
                to="/linguaskill/online-desde-casa"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-green-600 text-sm font-medium">Online</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Linguaskill Online desde Casa</h3>
                <p className="text-zinc-600 text-sm mt-2">Cómo hacer el examen desde tu hogar.</p>
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* External Authority Link */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-blue hover:underline"
          >
            → Más información en Cambridge English - Linguaskill oficial
          </a>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
