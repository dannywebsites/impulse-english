import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, FileText, HelpCircle, ChevronDown, CreditCard, Euro } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

const tableOfContents = [
  { id: 'que-incluye', title: '¿Qué Incluye el Precio del Examen Linguaskill?' },
  { id: 'descuentos', title: 'Descuentos y Tarifas Especiales para Estudiantes' },
  { id: 'como-reservar', title: 'Cómo Reservar tu Examen Paso a Paso' },
  { id: 'modalidades', title: 'Modalidades de Examen y Requisitos' },
  { id: 'faq', title: 'Preguntas Frecuentes (FAQ)' },
];

export const faqs: FAQItem[] = [
  {
    question: '¿Puedo pagar el examen Linguaskill en cuotas o necesito abonar el importe completo al reservar?',
    answer: 'El pago completo de 130 euros (o 120 euros con descuento universitario) debe realizarse en el momento de la reserva para confirmar tu plaza. Los centros autorizados no ofrecen habitualmente planes de pago fraccionado, aunque algunas universidades pueden incluir el examen en tasas académicas pagables en plazos. Contacta directamente con tu centro de examen específico para confirmar opciones disponibles.'
  },
  {
    question: '¿Qué ocurre si necesito cancelar o cambiar la fecha de mi examen después de pagar?',
    answer: 'Las políticas de cancelación varían según cada centro autorizado. Generalmente, cancelaciones con más de 14 días de antelación permiten reembolso parcial (70-80%) o cambio de fecha sin coste adicional. Cancelaciones con menos de 7 días suelen no ser reembolsables. Ausencias sin justificación el día del examen resultan en pérdida total del importe sin posibilidad de recuperación.'
  },
  {
    question: '¿El precio incluye el certificado oficial o debo pagar algo adicional por él?',
    answer: 'El precio de 130 euros incluye tu informe de resultados digital oficial, accesible aproximadamente 5 días después del examen. Linguaskill no emite certificados físicos tradicionales con sello y firma como otros exámenes Cambridge. El informe PDF descargable desde tu portal de candidato es el documento oficial reconocido internacionalmente. No existen costes adicionales por acceder a tus resultados.'
  },
  {
    question: '¿Puedo examinarme solo de Speaking o Writing pagando un precio reducido?',
    answer: 'No. El precio de 130 euros cubre el examen completo con las cuatro destrezas evaluadas (Reading & Listening como módulo único, Writing y Speaking). Linguaskill no permite inscripciones para módulos individuales como sucede con otros exámenes Cambridge. Debes completar todas las secciones aunque solo necesites certificar una destreza específica para tu objetivo particular.'
  },
  {
    question: '¿Los resultados de Linguaskill tienen fecha de caducidad o validez temporal?',
    answer: 'Cambridge Assessment English no establece una fecha de caducidad oficial para resultados de Linguaskill. Sin embargo, instituciones receptoras (universidades, empleadores) frecuentemente solicitan certificaciones con antigüedad máxima de 2 años, considerando que el nivel de idioma puede cambiar con el tiempo. Verifica requisitos específicos de la entidad que solicita tu acreditación antes de presentar resultados antiguos.'
  },
];

export const articleSchema = generateArticleSchema({
    headline: "Precio Linguaskill 2025: Tarifas y Reserva del Examen",
    description: "Descubre el precio del examen Linguaskill en 2025 (130€), descuentos universitarios (120€) y cómo reservar tu plaza paso a paso en centros oficiales.",
    url: `${businessInfo.url}/blog/precio-linguaskill-reservar`,
    datePublished: "2024-12-01"
  });

export default function PrecioLinguaskillReservarPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      <article>
        {/* Hero Section */}
        <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={blogImages.technologyClassroom.url} alt="Aula tecnológica preparación Linguaskill Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
            items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Precio Linguaskill' }
            ]}
            variant="light"
            />

            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                  Linguaskill
                </span>
                <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actualizado Diciembre 2024
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Precio Linguaskill 2025: Tarifas y Reserva del Examen
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                Descubre el precio del examen Linguaskill en 2025 (130€), descuentos universitarios (120€) y cómo reservar tu plaza paso a paso en centros oficiales.
              </p>
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
          <a
              href="/linguaskill/precios-fechas/"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ← Volver a Linguaskill: Precios, Sedes y Servicios
          </a>
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
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-zinc-50">
                          <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
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
                Para maximizar tu inversión, prepárate adecuadamente antes del examen mediante recursos oficiales y familiarízate con el formato adaptativo de las preguntas. En nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-green-600 hover:underline font-medium">academia de inglés en Barrio del Pilar</a>, ofrecemos <a href="/cursos-ingles/adultos/" className="text-green-600 hover:underline font-medium">cursos de preparación para adultos</a> específicos para Linguaskill que pueden mejorar significativamente tu puntuación final. Si prefieres atención personalizada, consulta nuestras <a href="/cursos-ingles/particulares/" className="text-green-600 hover:underline font-medium">clases particulares de inglés</a>. Recuerda verificar todos los requisitos técnicos y documentales antes del día del examen para evitar contratiempos innecesarios.
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
              <a
              href="/linguaskill/precios-fechas/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-green-600 text-sm font-medium">Hub Principal</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Linguaskill: Precios, Sedes y Servicios</h3>
                <p className="text-zinc-600 text-sm mt-2">Guía completa de precios y sedes en España.</p>
              </a>
              <a
              href="/linguaskill/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-green-600 text-sm font-medium">Centros</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Centros Linguaskill en España</h3>
                <p className="text-zinc-600 text-sm mt-2">Dónde examinarte en Madrid, Valencia y Zaragoza.</p>
              </a>
              <a
              href="/linguaskill/"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-green-600 text-sm font-medium">Online</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Linguaskill Online desde Casa</h3>
                <p className="text-zinc-600 text-sm mt-2">Cómo hacer el examen desde tu hogar.</p>
              </a>
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
</>
  );
}
