import React from 'react';
import { MapPin, Clock, Phone, Train, Navigation, ArrowRight } from 'lucide-react';
import { NAP } from '../utils/napData';

export default function LocationsSection() {
  const areas = [
    { name: "Barrio del Pilar", href: "/academia-ingles-barrio-del-pilar" },
    { name: "La Vaguada", href: "/academia-ingles-la-vaguada" },
    { name: "Peñagrande", href: "/academia-ingles-penagrande" },
    { name: "La Ventilla", href: "/academia-ingles-la-ventilla" },
    { name: "La Paz", href: "/academia-ingles-la-paz" },
    { name: "Plaza Castilla", href: "/academia-ingles-plaza-castilla" },
    { name: "Tetuán", href: "/academia-ingles-tetuan" },
    { name: "Cuatro Torres", href: "/academia-ingles-cuatro-torres" }
  ];

  return (
    <section className="w-full bg-zinc-50 py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
            Dónde encontrarnos
          </h2>
          <div className="w-24 h-1 bg-accent-blue/20 mb-6"></div>
          <p className="text-zinc-500 text-lg max-w-2xl">
            En el corazón del Barrio del Pilar, a 4 minutos andando del Metro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Location Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="/images/academy/outside-academy.jpg"
                alt="Fachada exterior Impulse English Academy La Vaguada Barrio del Pilar Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{NAP.name}</h3>
              <div className="space-y-4 text-zinc-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900">{NAP.streetAddress}</p>
                    <p>{NAP.neighborhood}</p>
                    <p>{NAP.postalCode} {NAP.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900 mb-1">Horario</p>
                    <div className="text-sm space-y-0.5">
                      {NAP.openingHoursText.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  <a href={NAP.phoneTel} className="hover:text-accent-blue transition-colors font-medium">
                    {NAP.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900 mb-1">Metro</p>
                    <p className="text-sm">Línea 9 - Barrio del Pilar (4 min)</p>
                    <p className="text-sm">Línea 7 - Peñagrande (8 min)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={NAP.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-accent-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </a>
                <a
                  href={`${NAP.whatsappUrl}?text=Hola,%20me%20gustaría%20información%20sobre%20los%20cursos%20de%20inglés`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Areas Served Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">
              <MapPin className="inline w-6 h-6 text-red-500 mr-2" />
              Zonas que servimos
            </h3>
            <p className="text-zinc-500 mb-6">
              Atendemos a familias de todo el norte de Madrid. Si vives en alguna de estas zonas, ¡estamos muy cerca de ti!
            </p>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <a
                  key={index}
                  href={area.href}
                  className="flex items-center gap-2 bg-zinc-50 px-4 py-3 rounded-lg hover:bg-accent-blue/10 hover:border-accent-blue/20 border border-transparent transition-colors group"
                >
                  <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                  <span className="text-zinc-700 font-medium group-hover:text-accent-blue transition-colors">{area.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a href="/academias-ingles-madrid/por-barrios/" className="text-accent-blue hover:underline text-sm font-medium inline-flex items-center gap-1">
                Ver todas las ubicaciones <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 p-4 bg-accent-blue/5 rounded-lg border border-accent-blue/10">
              <p className="text-sm text-accent-blue font-medium">
                ¿Vives fuera de estas zonas? También ofrecemos clases online para toda España.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-zinc-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-blue">4 min</div>
                <div className="text-xs text-zinc-500">del Metro</div>
              </div>
              <div className="text-center p-4 bg-zinc-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-blue">150+</div>
                <div className="text-xs text-zinc-500">Reseñas Google</div>
              </div>
              <div className="text-center p-4 bg-zinc-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-blue">100%</div>
                <div className="text-xs text-zinc-500">Aprobados</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="aspect-[21/9] w-full bg-zinc-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7084812!3d40.4743948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422909a0b6b11b%3A0xbe6ef3e2ba8bb87b!2sImpulse%20English%20Academy!5e0!3m2!1ses!2ses!4v1701964800000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Ubicación de ${NAP.name}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
