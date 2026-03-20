import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-[60vh] flex items-center justify-center py-24 px-6">
        <div className="text-center max-w-lg">
          <div className="font-serif text-8xl font-bold text-accent-blue mb-4">404</div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Página No Encontrada
          </h1>
          <p className="font-display text-zinc-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-accent-blue text-white font-display font-semibold py-3 px-8 rounded-lg hover:bg-[#0e3a68] transition-all duration-300"
            >
              Volver al Inicio
            </a>
            <a
              href="/contacto"
              className="border-2 border-accent-blue text-accent-blue font-display font-semibold py-3 px-8 rounded-lg hover:bg-accent-blue hover:text-white transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
