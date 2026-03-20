import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewsOverlay from '../components/NewsOverlay';
import WelcomeSection from '../components/WelcomeSection';
import TeamSection from '../components/TeamSection';
import CoursesSection from '../components/CoursesSection';
import MetodoSection from '../components/MetodoSection';
import PartnersSection from '../components/PartnersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import VideoCTA from '../components/VideoCTA';
import Newsletter from '../components/Newsletter';
import LocationsSection from '../components/LocationsSection';
import Footer from '../components/Footer';
import SchemaMarkup from '../components/SchemaMarkup';
import SEOHead from '../components/SEOHead';
import { generateOrganizationSchema, generateWebSiteSchema } from '../utils/schemaData';

export default function HomePage() {
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
      <SEOHead
        title="Impulse English Academy | academia de inglés en Barrio del Pilar, Madrid. Con profesores nativos especializados en exámenes Cambridge, ofrecemos cursos para niños, infantiles, adolescentes y adultos"
        description="Academia de inglés en Barrio del Pilar, Madrid. Profesores nativos especializados en exámenes Cambridge. Cursos para niños, infantiles, adolescentes y adultos. 100% aprobados."
        keywords="academia inglés barrio del pilar, academia inglés la vaguada, cambridge madrid, cursos inglés niños, clases inglés adultos, profesores nativos madrid"
        canonical="/"
        fullTitle={true}
      />
      {/* Hero Wrapper: Full Screen 100dvh */}
      <div className="relative w-full h-[100dvh] overflow-hidden bg-accent-blue">

        {/* DESKTOP BACKGROUND: Video Layer - Visible only on XL+ */}
        <div className="hidden xl:block absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <iframe
              src="https://player.vimeo.com/video/1143999306?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&loop=1&autoplay=1&background=1"
              className="w-full h-full object-cover"
              style={{ minWidth: '100%', minHeight: '100%' }}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Impulse English Academy, La Vaguada, Barrio del Pilar."
            ></iframe>
        </div>

        {/* MOBILE/TABLET BACKGROUND: Video Layer - Visible on < XL */}
        <div className="xl:hidden absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[178vh] h-[100vh] pointer-events-none">
                 <iframe
                    src="https://player.vimeo.com/video/1143999306?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&loop=1&autoplay=1&background=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    className="w-full h-full"
                    title="Impulse English Academy"
                 ></iframe>
            </div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center pointer-events-none">
            <Hero />
        </div>

        {/* DESKTOP News Overlay */}
        <div className="hidden xl:block absolute bottom-0 left-0 right-0 z-20 xl:translate-y-12 pointer-events-auto">
           <NewsOverlay />
        </div>

        {/* MOBILE/TABLET News Overlay */}
        <div className="xl:hidden absolute bottom-0 left-0 right-0 z-20 pointer-events-auto">
            <div className="bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] pb-4 pt-2">
                <div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mt-3 mb-1"></div>
                <NewsOverlay mobile={true} />
            </div>
        </div>
      </div>

      {/* H2: ¡Bienvenido a nuestra Academia de Inglés */}
      <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <WelcomeSection />
      </div>

      {/* H2: Un equipo apasionado por formarte */}
      <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <TeamSection />
      </div>

      {/* H2: Aprende inglés en todos los niveles */}
      <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <CoursesSection />
      </div>

      {/* H2: El Método Impulse */}
      <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <MetodoSection />
      </div>

      {/* Partners Section - Colaboradores Oficiales */}
      <div id="community" className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <PartnersSection />
      </div>

      {/* H2: Lo que dicen nuestros estudiantes… */}
      <div id="testimonials" className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
        <TestimonialsSection />
      </div>

      {/* Video CTA */}
      <VideoCTA />

      {/* Locations Section */}
      <div id="locations" className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <LocationsSection />
      </div>

      {/* H2: Contacta con nosotros */}
      <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <ContactSection />
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={[generateOrganizationSchema(), generateWebSiteSchema()]} />
    </>
  );
}
