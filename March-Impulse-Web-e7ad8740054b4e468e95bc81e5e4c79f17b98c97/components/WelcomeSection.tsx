import { ArrowRight } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="section-lead w-full bg-white px-6">
      <div className="mx-auto w-full max-w-7xl">
        {/* Opening statement gets an editorial two-column split: the title holds
            the left rail, the prose runs at a readable measure beside it. */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-4">
              Nuestra Academia
            </span>
            <h2 className="t-h2 text-zinc-900 mb-5">
              ¡Bienvenido a tu academia de inglés en La Vaguada!
            </h2>
            <div className="rule"></div>
          </div>

          <div className="space-y-6 t-body text-zinc-600 lg:col-span-7">
            <p>
              En Impulse English Academy somos una academia de inglés en Madrid norte, ubicada en La Vaguada / Barrio del Pilar, donde ayudamos a niños, jóvenes y adultos a aprender inglés de forma eficaz, práctica y motivadora.
            </p>

            <p>
              Ofrecemos clases de inglés presenciales adaptadas a cada etapa y objetivo, desde el aprendizaje general hasta la preparación de exámenes oficiales de Cambridge. Nuestro enfoque combina método, seguimiento y motivación para que cada alumno avance con seguridad y confianza en un mundo cada vez más globalizado.
            </p>

            <p>
              Nos encontrarás en la Av. de El Ferrol, 22, junto al Centro Comercial La Vaguada y el Parque de la Alcazaba, a pocos minutos de la estación de Metro Barrio del Pilar (Línea 9). Un entorno tranquilo, con zona verde y aparcamiento, ideal para que niños, adolescentes y adultos aprendan inglés cerca de casa. Descubre nuestras{' '}
              <a href="/academia-ingles-la-vaguada/" className="link-inline">
                clases de inglés en La Vaguada
              </a>{' '}
              y en{' '}
              <a href="/academia-ingles-barrio-del-pilar/" className="link-inline">
                Barrio del Pilar
              </a>.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:col-span-7 lg:col-start-6">
            <a href="/reservar-clase/" className="btn-secondary btn-lg group">
              Haz tu prueba de nivel
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div>
              <p className="t-small text-zinc-500">
                Descubre tu punto de partida
              </p>
              <a
                href="/metodologia/"
                className="group mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue transition-colors hover:text-accent-blue-800"
              >
                Conoce nuestra metodología
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
