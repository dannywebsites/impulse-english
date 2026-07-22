import { ArrowRight } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          <div>
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
              Nuestra Academia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
              ¡Bienvenido a tu academia de inglés en La Vaguada!
            </h2>
            <div className="w-24 h-1 bg-accent-blue/20"></div>
          </div>

          <div className="space-y-6 text-lg text-zinc-600 leading-relaxed max-w-3xl">
            <p>
              En Impulse English Academy somos una academia de inglés en Madrid norte, ubicada en La Vaguada / Barrio del Pilar, donde ayudamos a niños, jóvenes y adultos a aprender inglés de forma eficaz, práctica y motivadora.
            </p>

            <p>
              Ofrecemos clases de inglés presenciales adaptadas a cada etapa y objetivo, desde el aprendizaje general hasta la preparación de exámenes oficiales de Cambridge. Nuestro enfoque combina método, seguimiento y motivación para que cada alumno avance con seguridad y confianza en un mundo cada vez más globalizado.
            </p>

            <p>
              Nos encontrarás en la Av. de El Ferrol, 22, junto al Centro Comercial La Vaguada y el Parque de la Alcazaba, a pocos minutos de la estación de Metro Barrio del Pilar (Línea 9). Un entorno tranquilo, con zona verde y aparcamiento, ideal para que niños, adolescentes y adultos aprendan inglés cerca de casa. Descubre nuestras{' '}
              <a href="/academia-ingles-la-vaguada/" className="text-accent-blue hover:text-blue-700 font-medium underline underline-offset-2">
                clases de inglés en La Vaguada
              </a>{' '}
              y en{' '}
              <a href="/academia-ingles-barrio-del-pilar/" className="text-accent-blue hover:text-blue-700 font-medium underline underline-offset-2">
                Barrio del Pilar
              </a>.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="/reservar-clase/"
              className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Haz tu prueba de nivel
              <ArrowRight className="w-5 h-5" />
            </a>
            <div>
              <p className="text-sm text-zinc-500 mt-1">
                Descubre tu punto de partida
              </p>
              <a
                href="/metodologia/"
                className="inline-flex items-center gap-1 text-accent-blue hover:text-blue-700 font-medium text-sm mt-2 transition-colors"
              >
                Conoce nuestra metodología
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
