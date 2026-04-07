import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, FileText, Headphones, Mic, PenTool, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadForm from './LeadForm';
import LazyVideo from './LazyVideo';
import Breadcrumb from './Breadcrumb';
import FAQSection from './FAQSection';
import { s3CambridgeImages, s3SecondaryImages } from '../src/data/images';
import { NAP } from '../utils/napData';

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
  heroImageMobile?: string;
  galleryImages?: { url: string; alt: string }[];
  faqs?: { question: string; answer: string }[];
}

// Default gallery images - using landscape photos that show well
const defaultGalleryImages = [
  { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg", alt: "Estudiantes con certificados Cambridge en Impulse English Academy" },
  { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-18.JPEG", alt: "Clase de inglés en Impulse English Academy La Vaguada Madrid" },
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
  heroImageMobile,
  galleryImages = defaultGalleryImages,
  faqs
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
      <section className={`relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden`}>
        {heroImage && (
          <div className="absolute inset-0">
            {heroImageMobile ? (
              <picture>
                <source media="(max-width: 640px)" srcSet={`${heroImageMobile}.webp`} type="image/webp" />
                <source media="(max-width: 640px)" srcSet={`${heroImageMobile}.jpg`} type="image/jpeg" />
                <img src={heroImage} alt={`${examName} preparation`} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
              </picture>
            ) : (
              <img src={heroImage} alt={`${examName} preparation`} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            )}
          </div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${heroColor}`} style={{opacity: 0.88}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-36 -right-36 w-[480px] h-[480px] rounded-full bg-white/[0.04]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-red/[0.05]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Exámenes Cambridge', href: '/examenes-cambridge' },
              { label: examName }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                {cefrLevel} · 100% aprobados
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              {examName}
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              {tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-up animation-delay-300">
              <a href="#formulario" className="bg-white text-zinc-900 font-display font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-zinc-100">
                Solicitar prueba de nivel
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={NAP.phoneTel} className="backdrop-blur-sm border border-white/25 text-white font-display font-medium py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                Llamar: {NAP.phone}
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

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs} title={`Preguntas frecuentes sobre ${examName}`} />
      )}

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
              Nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-accent-blue hover:underline font-medium">academia en Barrio del Pilar</a>, junto a <a href="/academia-ingles-la-vaguada/" className="text-accent-blue hover:underline font-medium">La Vaguada</a>, es centro preparador oficial Cambridge. Bien comunicada desde <a href="/academia-ingles-plaza-castilla/" className="text-accent-blue hover:underline font-medium">Plaza Castilla</a>, <a href="/academia-ingles-tetuan/" className="text-accent-blue hover:underline font-medium">Tetuán</a> y <a href="/academia-ingles-cuatro-torres/" className="text-accent-blue hover:underline font-medium">Cuatro Torres</a>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/cursos-ingles/adultos/" className="text-accent-blue hover:underline text-sm">Cursos adultos</a>
              <span className="text-zinc-400">•</span>
              <a href="/cursos-ingles/secundaria/" className="text-accent-blue hover:underline text-sm">Cursos secundaria</a>
              <span className="text-zinc-400">•</span>
              <a href="/cursos-ingles/particulares/" className="text-accent-blue hover:underline text-sm">Clases particulares</a>
              <span className="text-zinc-400">•</span>
              <a href="/examenes-cambridge/" className="text-accent-blue hover:underline text-sm">Todos los exámenes Cambridge</a>
              <span className="text-zinc-400">•</span>
              <a href="/linguaskill/" className="text-accent-blue hover:underline text-sm">Linguaskill</a>
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
