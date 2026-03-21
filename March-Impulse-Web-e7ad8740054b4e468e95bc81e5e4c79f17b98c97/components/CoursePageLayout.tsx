import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Award, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadForm from './LeadForm';
import { NAP } from '../utils/napData';

interface CourseFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CoursePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt?: string;
  ageRange?: string;
  methodology?: string;
  methodologyDescription?: string;
  features: CourseFeature[];
  highlights: string[];
  ctaText?: string;
  formSource: string;
  showAgeInForm?: boolean;
  showLevelInForm?: boolean;
}

export default function CoursePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  heroImageAlt,
  ageRange,
  methodology,
  methodologyDescription,
  features,
  highlights,
  ctaText = "Reservar clase de prueba",
  formSource,
  showAgeInForm = false,
  showLevelInForm = true
}: CoursePageLayoutProps) {
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

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-accent-blue to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt={heroImageAlt || `${title} - Impulse English Academy La Vaguada Madrid`} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/90 to-accent-blue/70"></div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            {ageRange && (
              <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                {ageRange}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formulario"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={NAP.phoneTel}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-accent-blue transition-all text-center"
              >
                Llamar ahora: {NAP.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-blue mb-6">
                Descripción del curso
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                {description}
              </p>

              {methodology && (
                <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                  <h3 className="text-xl font-bold text-accent-blue mb-2">{methodology}</h3>
                  {methodologyDescription && (
                    <p className="text-zinc-600">{methodologyDescription}</p>
                  )}
                </div>
              )}
            </div>

            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt={title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              ¿Qué incluye el curso?
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para alcanzar tus objetivos de aprendizaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-lg transition-all reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Lo que nos diferencia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-700 text-lg">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="formulario" className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title={ctaText}
            subtitle="Rellena el formulario y te contactamos en menos de 24 horas"
            ctaText="Solicitar información"
            source={formSource}
            showPhone={true}
            showAge={showAgeInForm}
            showLevel={showLevelInForm}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
