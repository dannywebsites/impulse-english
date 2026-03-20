import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, FileText, HelpCircle, ChevronDown, Laptop, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

const tableOfContents = [
  { id: 'que-es', title: '¿Qué es Linguaskill Online y Cómo Funciona?' },
  { id: 'requisitos', title: 'Requisitos Técnicos y Logísticos' },
  { id: 'estructura', title: 'Estructura y Duración del Examen Online' },
  { id: 'ventajas', title: 'Ventajas y Consideraciones de la Modalidad Online' },
  { id: 'faq', title: 'Preguntas Frecuentes (FAQ)' },
];

const faqs = [
  {
    question: "¿Linguaskill desde casa es fiable?",
    answer: "Linguaskill desde casa es fiable gracias a su formato 100 % online, supervisión remota y tecnología adaptativa que ajusta la dificultad en tiempo real. Utiliza inteligencia artificial para evaluar Speaking y Writing con precisión, ofrece resultados en 48 horas y cuenta con reconocimiento oficial internacional."
  },
  {
    question: "¿Es trampa usar Linguaskill online?",
    answer: "Usar Linguaskill online no es trampa, ya que Cambridge aplica estrictas medidas de seguridad: verificación de identidad, vigilancia remota y navegador seguro. Su formato adaptativo reduce opciones de copia. Respetar las normas es esencial para garantizar la validez y reconocimiento oficial del certificado."
  },
  {
    question: "¿Puedo repetir solo una parte de Linguaskill?",
    answer: "En 2026, Linguaskill permite repetir solo módulos individuales (Reading, Listening, Writing o Speaking) sin necesidad de hacer el examen completo, facilitando mejorar puntuaciones específicas. Esta opción ofrece flexibilidad, ahorro de tiempo y mantiene la validez oficial del certificado para cada destreza evaluada."
  },
  {
    question: "¿Cómo funciona el Speaking de Linguaskill?",
    answer: "El módulo Speaking de Linguaskill evalúa la expresión oral en inglés en cinco partes durante 15 minutos, incluyendo entrevista, lectura en voz alta, exposiciones y diálogo basado en gráficos. Se realiza online con micrófono, respuestas grabadas y evaluación híbrida humano-tecnológica, entregando resultados en 48 horas."
  },
  {
    question: '¿Cuánto cuesta hacer Linguaskill online desde casa en 2025?',
    answer: 'El precio varía según el centro examinador y módulos seleccionados, oscilando entre 75€ para un módulo único y 180€ para el examen completo de cuatro destrezas. Los centros españoles oficiales suelen cobrar 90-110€ por Reading & Listening, 50-60€ por Speaking y 40-50€ por Writing. Es posible realizar únicamente los módulos que necesitas certificar según requisitos específicos de tu institución.'
  },
  {
    question: '¿Puedo usar diccionario o apuntes durante el examen online?',
    answer: 'Absolutamente no. El uso de cualquier material de apoyo (diccionarios, apuntes, móvil, segundo monitor) está estrictamente prohibido y resulta en descalificación automática. La supervisión remota detecta movimientos oculares sospechosos, presencia de papeles en el escritorio y uso de dispositivos no autorizados. La grabación completa se revisa posteriormente y cualquier irregularidad invalida permanentemente tu resultado.'
  },
  {
    question: '¿Qué pasa si mi conexión a internet falla durante el examen?',
    answer: 'El sistema guarda automáticamente tu progreso cada 30 segundos. Si la conexión se interrumpe por menos de 5 minutos, puedes reconectar y continuar desde el último punto guardado sin penalización. Desconexiones superiores a 5 minutos requieren contacto inmediato con soporte técnico quien determinará si puedes continuar, reprogramar o si el examen se invalida. Por esto es crítico verificar estabilidad de conexión previamente.'
  },
  {
    question: '¿Cuánto tiempo tengo para preparar el examen Linguaskill desde casa?',
    answer: 'No existe tiempo mínimo obligatorio de preparación, pero Cambridge recomienda 4-6 semanas de estudio estructurado para candidatos con nivel intermedio que buscan mejorar su puntuación. La clave es familiarizarse con el formato adaptativo, practicar las tareas específicas de cada módulo y realizar simulacros completos en condiciones reales. Cursos online especializados ofrecen preparación enfocada en 20-30 horas lectivas.'
  },
  {
    question: '¿El certificado Linguaskill online tiene validez internacional permanente?',
    answer: 'El certificado Linguaskill no caduca formalmente, pero la mayoría de instituciones académicas y empleadores aceptan únicamente certificados con antigüedad máxima de 2 años, asumiendo que competencias lingüísticas pueden deteriorarse sin uso regular. Para estudios universitarios, visados o procesos selectivos públicos, verifica siempre el plazo de validez específico requerido. El reconocimiento internacional abarca más de 40,000 organizaciones globalmente, incluyendo CRUE en España.'
  },
];

export default function LinguaskillOnlineCasaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = generateArticleSchema({
    headline: "Linguaskill Online desde Casa: Guía Completa 2025",
    description: "Todo sobre el examen Linguaskill online desde casa: requisitos técnicos, estructura, precio y ventajas de la modalidad remota.",
    url: `${businessInfo.url}/linguaskill/linguaskill-online-casa`,
    datePublished: "2025-01-14"
  });

  return (
    <>
      <SEOHead
        title="Linguaskill Online desde Casa 2025: Guía Completa del Examen Remoto"
        description="Todo sobre el examen Linguaskill online desde casa: requisitos técnicos, supervisión remota, estructura del examen, ventajas y preparación efectiva. Guía completa actualizada 2025."
        keywords="Linguaskill online, Linguaskill desde casa, examen Linguaskill remoto, Linguaskill supervisión online, requisitos técnicos Linguaskill, hacer Linguaskill casa"
        canonical="/linguaskill/online-desde-casa"
        ogType="article"
      />
      <Navbar />

      <article>
        {/* Hero Section */}
        <header className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-purple-600 to-purple-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blogs-impulse' },
                  { label: 'Linguaskill Online' }
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
                Linguaskill Online desde Casa: Cómo Hacer el Examen 2025
              </h1>

              <p className="text-xl text-white/90 font-light mb-8">
                Descubre cómo hacer el examen Linguaskill online desde casa: requisitos técnicos, supervisión remota, ventajas y preparación efectiva.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  7 min de lectura
                </span>
                <span className="flex items-center gap-2">
                  <Laptop className="w-4 h-4" />
                  Examen remoto
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1600&auto=format&fit=crop"
              alt="Linguaskill online desde casa - examen remoto"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Breadcrumb to Hub */}
        <div className="container mx-auto max-w-5xl px-6 mb-8">
          <Link
            to="/linguaskill"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ← Volver a la Guía Completa de Linguaskill
          </Link>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto max-w-5xl px-6 mb-12">
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              Tabla de Contenidos
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-zinc-600 hover:text-purple-600 transition-colors py-1"
                >
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold flex items-center justify-center">
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
                ¿Necesitas certificar tu nivel de inglés pero no puedes desplazarte a un centro de examen? Linguaskill online desde casa es la solución flexible de Cambridge que permite realizar el examen completo con supervisión remota desde cualquier ubicación. Este artículo explica exactamente cómo funciona esta modalidad, qué necesitas para hacerlo correctamente y cómo garantizar que tu experiencia sea exitosa. Con más de 40,000 organizaciones reconociendo este examen globalmente, entender la modalidad online es fundamental para planificar tu certificación en 2025.
              </p>
            </section>

            {/* Section 1 */}
            <section id="que-es" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué es Linguaskill Online y Cómo Funciona desde Casa?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill online es un examen multinivel desarrollado por Cambridge Assessment English que evalúa las cuatro competencias lingüísticas mediante tecnología adaptativa. El examen desde casa utiliza supervisión remota combinando inteligencia artificial y vigilancia humana en tiempo real para garantizar la integridad del proceso. Los resultados están disponibles en un máximo de 48 horas tras completar el examen, certificando tu nivel según el Marco Común Europeo de Referencia (MCER) desde A1 hasta C1+. Toda la información oficial sobre el formato y estructura está disponible en la <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">página de Cambridge Linguaskill</a>.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La modalidad online desde casa surgió como respuesta a la necesidad de flexibilidad en la certificación lingüística, especialmente relevante desde 2020. A diferencia de exámenes tradicionales con fechas fijas, Linguaskill permite reservar el examen "on demand" eligiendo el día y hora que mejor se adapten a tu agenda. El sistema adaptativo ajusta la dificultad de las preguntas según tus respuestas previas, proporcionando una evaluación precisa de tu nivel real de inglés en aproximadamente 60-85 minutos para Reading & Listening combinados.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Cambridge garantiza que el examen desde casa mantiene los mismos estándares de seguridad y fiabilidad que la versión presencial. El software de supervisión monitoriza continuamente tu comportamiento mediante webcam, detectando movimientos sospechosos o presencia de terceras personas. Un supervisor humano revisa simultáneamente múltiples exámenes, interviniendo si detecta irregularidades. Este sistema híbrido ha demostrado un 99.7% de efectividad en prevención de fraude según datos internos de Cambridge 2024.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Consejo crítico:</strong> Verifica siempre que la institución que solicita tu certificado acepta específicamente la modalidad online desde casa. Algunas universidades españolas requieren explícitamente la versión presencial en centros autorizados, especialmente para requisitos de graduación.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="requisitos" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Requisitos Técnicos y Logísticos para el Examen desde Casa
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Para realizar Linguaskill online desde casa necesitas un ordenador portátil o de sobremesa con Windows 10/11 o macOS 10.14 o superior, equipado con cámara web integrada o externa de mínimo 720p, micrófono funcional y altavoces o auriculares. La conexión a internet debe ser estable con velocidad mínima de descarga de 10 Mbps y 5 Mbps de subida, verificable mediante test previo obligatorio. El navegador compatible es Google Chrome actualizado a su última versión, ya que el sistema no funciona correctamente en Firefox, Safari o Edge.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El espacio físico donde realizas el examen debe cumplir requisitos específicos de privacidad y ambiente. Necesitas una habitación cerrada, bien iluminada con luz natural o artificial que ilumine claramente tu rostro, libre de ruidos externos y donde no entre ninguna persona durante las 2-3 horas que dura el proceso completo. Tu escritorio debe estar completamente despejado: únicamente el ordenador, ratón y teclado están permitidos. Cualquier papel, libro, móvil o segundo monitor resultará en descalificación inmediata del examen.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El software de supervisión remota se descarga e instala 30 minutos antes del inicio programado del examen. Este programa accede a tu cámara, micrófono y pantalla completa, grabando toda la sesión para revisión posterior. Durante la instalación, se realiza un system check automático que verifica todos los requisitos técnicos: velocidad de conexión, funcionamiento de cámara y micrófono, compatibilidad del navegador y capacidad de procesamiento del equipo. Si algún elemento falla, el sistema te avisa con 48 horas de antelación para corregirlo.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Advertencia importante:</strong> Realizar el examen desde un portátil con batería baja es arriesgado. Asegura estar conectado a corriente eléctrica durante todo el proceso. Un corte inesperado de energía puede invalidar tu examen sin posibilidad de reembolso ni repetición gratuita.
                </p>
              </div>

              {/* Requirements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-zinc-50 p-6 rounded-xl">
                  <Laptop className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-zinc-900 mb-2">Equipo necesario</h3>
                  <ul className="text-zinc-600 text-sm space-y-1">
                    <li>• Windows 10/11 o macOS 10.14+</li>
                    <li>• Cámara web 720p mínimo</li>
                    <li>• Micrófono funcional</li>
                    <li>• Google Chrome actualizado</li>
                  </ul>
                </div>
                <div className="bg-zinc-50 p-6 rounded-xl">
                  <Wifi className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-zinc-900 mb-2">Conexión y espacio</h3>
                  <ul className="text-zinc-600 text-sm space-y-1">
                    <li>• 10 Mbps descarga / 5 Mbps subida</li>
                    <li>• Habitación privada y silenciosa</li>
                    <li>• Buena iluminación frontal</li>
                    <li>• Escritorio despejado</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="estructura" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Estructura y Duración del Examen Linguaskill Online
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo combinado Reading & Listening de Linguaskill online dura entre 60 y 85 minutos, comenzando con la parte de lectura que incluye 3 tareas adaptativas evaluando comprensión de textos cortos, largos y gramática contextual. La sección de Listening continúa inmediatamente con 4 tareas que evalúan comprensión de conversaciones, presentaciones y textos extensos mediante audio pregrabado. El sistema adapta la dificultad automáticamente: si respondes correctamente, las preguntas siguientes son más complejas; si fallas, se ajustan a nivel inferior.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo de Writing consiste en dos tareas obligatorias completadas en 45 minutos totales: primero escribes un email de mínimo 50 palabras respondiendo a una situación comunicativa específica, y después redactas un texto extenso de mínimo 180 palabras argumentando sobre un tema proporcionado. Ambos textos se escriben directamente en el navegador utilizando un editor de texto básico sin corrector ortográfico ni gramatical. La evaluación combina corrección automática por IA y revisión humana posterior, garantizando objetividad en la puntuación.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                El módulo Speaking dura exactamente 15 minutos y consta de 5 partes donde respondes oralmente a preguntas grabadas: presentación personal (1 minuto), lectura en voz alta (8 segundos por frase), descripción de imagen (1 minuto), respuesta a preguntas sobre temas cotidianos (40 segundos cada una) y presentación extensa sobre tema dado (1 minuto preparación + 1 minuto respuesta). Tus respuestas se graban automáticamente y posteriormente son evaluadas por examinadores certificados de Cambridge combinando criterios de fluidez, pronunciación, gramática y vocabulario.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Dato relevante:</strong> El formato adaptativo significa que no existe una versión única del examen. Dos candidatos realizando Linguaskill simultáneamente recibirán preguntas diferentes calibradas según su nivel de respuestas, haciendo imposible la comparación directa de dificultad entre exámenes.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="ventajas" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Ventajas y Consideraciones de la Modalidad Online desde Casa
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                La principal ventaja de Linguaskill online desde casa es la flexibilidad absoluta en planificación: reservas el examen con 48 horas de antelación mínima eligiendo día y hora, sin esperar convocatorias oficiales mensuales como ocurre con Cambridge B2 First o C1 Advanced. Esta modalidad elimina costes y tiempo de desplazamiento, especialmente beneficioso para residentes en zonas rurales o alejadas de centros examinadores. Además, realizar el examen en tu entorno familiar reduce significativamente el estrés asociado a espacios desconocidos, mejorando potencialmente tu rendimiento.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Los resultados en máximo 48 horas representan otra ventaja crucial frente a certificaciones tradicionales que tardan 4-6 semanas. Este tiempo de respuesta es fundamental cuando necesitas el certificado urgentemente para solicitudes universitarias, procesos de contratación o trámites administrativos con plazos ajustados. El certificado digital descargable inmediatamente incluye un código de verificación único permitiendo a instituciones confirmar su autenticidad online instantáneamente, reduciendo riesgos de falsificación.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Sin embargo, existen limitaciones importantes a considerar. Algunas universidades públicas españolas, especialmente para requisitos de graduación, no aceptan la modalidad online desde casa exigiendo explícitamente la versión presencial en centro autorizado. Es absolutamente imprescindible verificar con 3-4 meses de antelación qué modalidad acepta tu institución destino. Técnicamente, necesitas equipamiento adecuado y conexión estable: candidatos con portátiles antiguos o internet rural de baja velocidad pueden experimentar problemas técnicos invalidantes.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl my-8">
                <p className="text-zinc-700 font-medium">
                  <strong>Recomendación práctica:</strong> Realiza el system check completo al menos 7 días antes de tu fecha programada, no el mismo día. Esto te permite tiempo suficiente para resolver problemas técnicos, actualizar software o incluso cambiar de equipo si es necesario, evitando pérdidas económicas por cancelaciones de última hora.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-purple-600" />
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
                Conclusión: Tu Certificación de Inglés Flexible y Fiable
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-6">
                Linguaskill online desde casa representa la evolución natural de la certificación lingüística, combinando flexibilidad, rapidez y seguridad mediante tecnología de supervisión avanzada. Con requisitos técnicos accesibles y resultados en 48 horas, es la opción ideal para quienes necesitan certificación ágil sin comprometer fiabilidad oficial de Cambridge.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Tu siguiente paso es verificar la aceptación específica de tu institución destino y reservar tu fecha óptima considerando plazos de entrega de certificados. En nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-purple-600 hover:underline font-medium">academia de inglés en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-purple-600 hover:underline font-medium">La Vaguada</Link>, ofrecemos <Link to="/ingles-la-vaguada/adultos" className="text-purple-600 hover:underline font-medium">cursos de preparación para adultos</Link> que adaptan el entrenamiento al formato específico del <Link to="/examenes-cambridge/linguaskill" className="text-purple-600 hover:underline font-medium">examen Linguaskill</Link>.
              </p>
            </section>

          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-900 mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Preparado para tu examen Linguaskill online?
                </h2>
                <p className="text-xl text-white/80">
                  Reserva tu clase gratuita y prepárate con expertos en certificaciones Cambridge.
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
                to="/linguaskill"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-purple-600 text-sm font-medium">Hub Principal</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Guía Completa del Examen Linguaskill</h3>
                <p className="text-zinc-600 text-sm mt-2">Todo sobre estructura, ejemplos y preparación.</p>
              </Link>
              <Link
                to="/linguaskill/ejemplo-examen"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-purple-600 text-sm font-medium">Formato</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Ejemplo Examen Linguaskill</h3>
                <p className="text-zinc-600 text-sm mt-2">Formato y estructura del test con ejemplos.</p>
              </Link>
              <Link
                to="/linguaskill/precio-reservar"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-purple-600 text-sm font-medium">Precios</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-2">Precio Linguaskill y Reserva</h3>
                <p className="text-zinc-600 text-sm mt-2">Tarifas actualizadas y proceso de inscripción.</p>
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

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
