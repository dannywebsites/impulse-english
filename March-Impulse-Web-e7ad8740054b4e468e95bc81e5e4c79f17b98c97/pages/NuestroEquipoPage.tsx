import React, { useEffect } from 'react';
import { Award, BookOpen, Users, ArrowRight, CheckCircle, Star, MessageCircle, Phone, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import FAQSection from '../components/FAQSection';
import Breadcrumb from '../components/Breadcrumb';
import { NAP } from '../utils/napData';
import type { FAQItem } from '../utils/schemaData';

export const faqs: FAQItem[] = [
  {
    question: "¿Los profesores de Impulse son nativos?",
    answer: "Nuestro equipo está formado por profesores altamente cualificados con amplia experiencia en la enseñanza del inglés. Combinamos profesores nativos y bilingües certificados para ofrecer la mejor experiencia de aprendizaje."
  },
  {
    question: "¿Qué cualificaciones tienen los profesores?",
    answer: "Todos nuestros profesores cuentan con formación específica en enseñanza de inglés como lengua extranjera, certificaciones Cambridge y experiencia demostrada con todas las edades."
  },
  {
    question: "¿Cómo se asigna un profesor a cada alumno?",
    answer: "Cada profesor está especializado en un rango de edad y nivel. Asignamos al profesor que mejor se adapta a tus necesidades y objetivos de aprendizaje."
  },
  {
    question: "¿Puedo conocer a mi profesor antes de matricularme?",
    answer: "Sí, durante la prueba de nivel gratuita conocerás al equipo y podrás hacerte una idea del ambiente y la metodología de la academia."
  },
  {
    question: "¿Qué experiencia tiene el equipo de Impulse?",
    answer: "Nuestro equipo acumula años de experiencia en enseñanza del inglés en centros internacionales y academias de referencia. Combinamos experiencia en Cambridge prep, enseñanza infantil y formación de adultos."
  }
];

export default function NuestroEquipoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Nuestro Equipo | Impulse English Academy La Vaguada – Barrio del Pilar';
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
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-blue/95 to-[#0a3560]"></div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
              { label: 'Nuestro Equipo' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Conoce a las personas detrás de Impulse
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Nuestro Equipo
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl animate-hero-fade-up animation-delay-200">
              Profesores cualificados y apasionados por la enseñanza del inglés
            </p>

            <div className="flex flex-wrap gap-3 mt-8 animate-hero-fade-up animation-delay-300">
              {["Centro Oficial Cambridge", "100% Aprobados 24/25", "Profesores Certificados"].map((badge, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JP Bio Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/academy/jp-with-students.jpg"
                  alt="JP, Director de Estudios, Impulse English Academy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Text */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100">
              <span className="inline-block bg-accent-blue/10 text-accent-blue text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                Director de Estudios / Head of Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                JP
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet. <strong className="text-zinc-900">[PLACEHOLDER: Añadir biografía de JP aquí — cualificaciones, experiencia, especialidades, filosofía de enseñanza]</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: <GraduationCap className="w-6 h-6" />, text: "[PLACEHOLDER: Cualificación principal]" },
                  { icon: <Award className="w-6 h-6" />, text: "[PLACEHOLDER: Certificación o logro]" },
                  { icon: <Users className="w-6 h-6" />, text: "[PLACEHOLDER: Especialidad o experiencia]" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                    <div className="text-accent-blue flex-shrink-0 mt-0.5">{item.icon}</div>
                    <span className="text-sm text-zinc-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-zinc-500 text-sm">
                  JP dirige los programas de <a href="/cursos-ingles/infantil/" className="text-accent-blue hover:underline">inglés infantil</a> y supervisa la preparación <a href="/cursos-ingles/adultos/" className="text-accent-blue hover:underline">Cambridge para adultos</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danny Fitzpatrick Bio Section (reversed layout) */}
      <section className="py-16 md:py-24 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text (left on desktop) */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 order-2 lg:order-1">
              <span className="inline-block bg-accent-blue/10 text-accent-blue text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                Profesor / Teacher
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Danny Fitzpatrick
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet. <strong className="text-zinc-900">[PLACEHOLDER: Añadir biografía de Danny aquí — cualificaciones, experiencia, especialidades, filosofía de enseñanza]</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: <GraduationCap className="w-6 h-6" />, text: "[PLACEHOLDER: Cualificación principal]" },
                  { icon: <Award className="w-6 h-6" />, text: "[PLACEHOLDER: Certificación o logro]" },
                  { icon: <Users className="w-6 h-6" />, text: "[PLACEHOLDER: Especialidad o experiencia]" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                    <div className="text-accent-blue flex-shrink-0 mt-0.5">{item.icon}</div>
                    <span className="text-sm text-zinc-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-zinc-500 text-sm">
                  Danny trabaja con estudiantes de <a href="/cursos-ingles/infantil/" className="text-accent-blue hover:underline">primaria y secundaria</a> y apoya la formación <a href="/cursos-ingles/adultos/" className="text-accent-blue hover:underline">de adultos</a>.
                </p>
              </div>
            </div>

            {/* Image (right on desktop) */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/academy/daniel-helping-secondary-school-students.jpg"
                  alt="Danny Fitzpatrick, profesor Impulse English Academy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
              Lo Que Nos Define
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
              Nuestra Filosofía de Enseñanza
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Comunicación Real",
                description: "Hablamos inglés desde el primer día. Nada de memorizar listas de vocabulario sin contexto."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Atención Personalizada",
                description: "Con grupos de máximo 7-10 alumnos, conocemos a cada estudiante y adaptamos el ritmo."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Resultados Medibles",
                description: "100% de aprobados Cambridge B2 First en 2024/2025. Resultados que hablan por sí solos."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Pasión por Enseñar",
                description: "No somos una cadena. Somos un equipo que disfruta viendo a sus alumnos progresar."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-50 p-8 rounded-2xl reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Nuestro Equipo" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Conoce a nuestro equipo en persona
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Reserva tu prueba de nivel gratuita y descubre nuestra metodología
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservar-clase/"
                className="bg-white text-accent-blue hover:bg-zinc-100 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Reservar Prueba
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={NAP.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="¿Quieres saber más sobre nuestro equipo?"
            subtitle="Contáctanos y te ayudaremos a encontrar el profesor ideal para ti"
            ctaText="Solicitar información"
            source="nuestro-equipo"
            showPhone={true}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
