import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, Headphones, Mic, PenTool, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadForm from './LeadForm';
import LazyVideo from './LazyVideo';
import Breadcrumb from './Breadcrumb';
import { s3CambridgeImages, s3SecondaryImages, blogImages } from '../../utils/images';

interface ExamPart {
  name: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

interface ExamPageLayoutProps {
  examName: string;
  cefrLevel: string;
  tagline: string;
  description: string;
  heroColor: string;
  examParts: ExamPart[];
  whoIsItFor: string[];
  whatYouGet: string[];
  preparationApproach: string;
  formSource: string;
  heroImage?: string;
  galleryImages?: { url: string; alt: string }[];
}

// Default gallery images - using local image registry
const defaultGalleryImages = [
  { url: blogImages.jpWithStudents.url, alt: "Estudiantes con certificados Cambridge en Impulse English Academy" },
  { url: blogImages.mainClassroom.url, alt: "Clase de inglés en Impulse English Academy La Vaguada Madrid" },
];

export default function ExamPageLayout({
  examName,
  cefrLevel,
  tagline,
  description,
  heroColor,
  examParts,
  whoIsItFor,
  whatYouGet,
  preparationApproach,
  formSource,
  heroImage,
  galleryImages = defaultGalleryImages
}: ExamPageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const totalDuration = examParts.reduce((acc, part) => {
    const mins = parseInt(part.duration) || 0;
    return acc + mins;
  }, 0);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={`relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br ${heroColor} overflow-hidden`}>
        <div className="relative container mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Exámenes Cambridge', href: '/examenes-cambridge' },
                { label: examName }
              ]}
              variant="light"
            />
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white/20 text-white text-lg font-bold px-4 py-2 rounded-lg">
                {cefrLevel}
              </span>
              <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                100% aprobados
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              {examName}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              {tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formulario"
                className="bg-white text-zinc-900 font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 hover:bg-zinc-100"
              >
                Solicitar prueba de nivel
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+34604910611"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition-all text-center"
              >
                Llamar: +34 604 910 611
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the exam */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-blue mb-6">
                Sobre el examen
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                {description}
              </p>

              <div className="bg-zinc-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent-blue" />
                  <span className="text-lg font-bold text-zinc-900">
                    Duración total: ~{Math.floor(totalDuration / 60)}h {totalDuration % 60}min
                  </span>
                </div>
                <p className="text-zinc-600 text-sm">
                  El examen consta de {examParts.length} partes que evalúan todas las destrezas comunicativas según el <a href="https://www.coe.int/es/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">MCER</a>.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">¿Para quién es?</h3>
              <div className="space-y-3">
                {whoIsItFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Structure */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Estructura del examen
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Conoce cada parte del examen y cómo te preparamos para ella
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examParts.map((part, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue flex-shrink-0">
                    {part.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-zinc-900">{part.name}</h3>
                      <span className="text-sm text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                        {part.duration}
                      </span>
                    </div>
                    <p className="text-zinc-600 text-sm">{part.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Nuestra preparación
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-12">
              {preparationApproach}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouGet.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Ambiente de aprendizaje
            </h2>
            <p className="text-zinc-600 text-lg">
              Instalaciones diseñadas para tu éxito
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`aspect-[4/3] rounded-xl overflow-hidden shadow-lg reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ${index > 0 ? 'delay-100' : ''}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Below the fold for performance */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Cómo preparamos el {examName}
            </h2>
            <p className="text-zinc-600">
              Conoce nuestro método de preparación específico para este examen
            </p>
          </div>
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
            <LazyVideo
              videoId="Fdso-d9_F20"
              title={`Preparación ${examName}`}
              className="shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Location & Related Links Section */}
      <section className="py-12 px-6 bg-white border-t border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
            <h3 className="font-bold text-zinc-900 mb-4 text-lg">¿Dónde preparar tu examen {examName}?</h3>
            <p className="text-zinc-700 text-sm mb-4">
              Nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-accent-blue hover:underline font-medium">academia en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-accent-blue hover:underline font-medium">La Vaguada</Link>, es centro preparador oficial Cambridge. Bien comunicada desde <Link to="/academia-ingles-plaza-castilla" className="text-accent-blue hover:underline font-medium">Plaza Castilla</Link>, <Link to="/academia-ingles-tetuan" className="text-accent-blue hover:underline font-medium">Tetuán</Link> y <Link to="/academia-ingles-cuatro-torres" className="text-accent-blue hover:underline font-medium">Cuatro Torres</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/ingles-la-vaguada/adultos" className="text-accent-blue hover:underline text-sm">Cursos adultos</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/ingles-la-vaguada/secundaria" className="text-accent-blue hover:underline text-sm">Cursos secundaria</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/ingles-la-vaguada/particulares" className="text-accent-blue hover:underline text-sm">Clases particulares</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/examenes-cambridge" className="text-accent-blue hover:underline text-sm">Todos los exámenes Cambridge</Link>
              <span className="text-zinc-400">•</span>
              <Link to="/examenes-cambridge/linguaskill" className="text-accent-blue hover:underline text-sm">Linguaskill</Link>
            </div>
          </div>

          <h3 className="font-bold text-zinc-900 mb-4">Recursos oficiales y referencias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              <ArrowRight className="w-4 h-4" />
              Cambridge English - Exámenes oficiales
            </a>
            <a
              href="https://www.coe.int/es/web/common-european-framework-reference-languages"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              <ArrowRight className="w-4 h-4" />
              Consejo de Europa - Marco Común Europeo (MCER)
            </a>
            <a
              href="https://www.crue.org/acreditacion-de-idiomas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              <ArrowRight className="w-4 h-4" />
              CRUE - Acreditación de idiomas en universidades
            </a>
            <a
              href="https://www.cambridgeenglish.org/es/test-your-english/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              <ArrowRight className="w-4 h-4" />
              Cambridge - Test de nivel gratuito
            </a>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="formulario" className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title={`Prepárate para ${examName}`}
            subtitle="Solicita información y te hacemos una prueba de nivel gratuita"
            ctaText="Solicitar prueba de nivel"
            source={formSource}
            showPhone={true}
            showLevel={true}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
