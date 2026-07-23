import React from 'react';
import { MapPin, Clock, Phone, Train, Navigation, ArrowRight, Bus, Car } from 'lucide-react';
import { NAP } from '../utils/napData';
import { BARRIO_AREAS } from '../utils/barrioAreas';

export default function LocationsSection() {
  const areas = BARRIO_AREAS;

  // Rutas reales hasta Av. de El Ferrol, 22. Cada barrio se enlaza una sola vez
  // en todo el bloque para no sobrecargar de enlaces internos.
  const metroRoutes = [
    { from: "Peñagrande", line: "L9", time: "~3 min", href: "/academia-ingles-penagrande/" },
    { from: "Mirasierra", line: "L9", time: "~4 min", href: "/academia-ingles-mirasierra/" },
    { from: "Herrera Oria", line: "L9", time: "~5 min", href: null },
    { from: "Montecarmelo", line: "L9", time: "~8 min", href: "/academia-ingles-montecarmelo-las-tablas/" },
    { from: "Plaza Castilla", line: "L9", time: "~12 min", href: "/academia-ingles-plaza-castilla/" },
    { from: "Av. de la Ilustración", line: "L7", time: "~10 min + bus 147", href: null }
  ];

  const busRoutes = [
    { line: "147", from: "Tetuán y Valdeacederas", time: "~8 min", href: "/academia-ingles-tetuan/" },
    { line: "42", from: "Plaza Castilla", time: "~15 min", href: null },
    { line: "83", from: "Moncloa", time: "~20 min", href: null },
    { line: "126", from: "Nuevos Ministerios", time: "~18 min", href: null },
    { line: "N23", from: "Servicio nocturno", time: "Toda la noche", href: null }
  ];

  const carRoutes = [
    { from: "Peñagrande", via: "Av. de Peñagrande → Av. de El Ferrol", time: "3–5 min" },
    { from: "Mirasierra", via: "Fermín Caballero → Av. de El Ferrol", time: "5–8 min" },
    { from: "Herrera Oria", via: "Ginzo de Limia → Av. de El Ferrol", time: "5–8 min" },
    { from: "Montecarmelo y Las Tablas", via: "Av. de la Ilustración → Av. de El Ferrol", time: "10–12 min" },
    { from: "Tetuán y Valdeacederas", via: "Av. de la Paz → Av. de El Ferrol", time: "8–12 min" },
    { from: "Plaza Castilla", via: "Paseo de la Castellana → Av. de El Ferrol", time: "10–15 min" }
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

        {/* Cómo llegar desde tu barrio — contenido de proximidad */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-3">
            Cómo llegar desde tu barrio
          </h3>
          <p className="text-zinc-500 max-w-3xl mb-8">
            Estamos en la Av. de El Ferrol, 22, a 3 minutos andando del metro de Barrio del Pilar.
            La Línea 9 recorre todo el eje norte de Madrid (Herrera Oria → Mirasierra → Barrio del
            Pilar → Ventilla), así que llegas desde casi cualquier barrio de la zona en menos de 15
            minutos. Estos son los tiempos reales desde cada punto de origen:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metro */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-5">
                <Train className="w-5 h-5 text-accent-blue" />
                <h4 className="text-lg font-bold text-zinc-900">En metro</h4>
              </div>
              <ul className="space-y-3">
                {metroRoutes.map((route, index) => (
                  <li key={index} className="flex items-baseline justify-between gap-3 text-sm border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-zinc-700">
                      {route.href ? (
                        <a href={route.href} className="font-medium hover:text-accent-blue hover:underline transition-colors">
                          {route.from}
                        </a>
                      ) : (
                        <span className="font-medium">{route.from}</span>
                      )}
                      <span className="text-zinc-400 ml-2">{route.line}</span>
                    </span>
                    <span className="text-zinc-500 whitespace-nowrap">{route.time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-400 mt-4">
                Todos los tiempos hasta la estación de Barrio del Pilar, más 3 minutos andando hasta la academia.
              </p>
            </div>

            {/* Autobús */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-5">
                <Bus className="w-5 h-5 text-accent-blue" />
                <h4 className="text-lg font-bold text-zinc-900">En autobús</h4>
              </div>
              <ul className="space-y-3">
                {busRoutes.map((route, index) => (
                  <li key={index} className="flex items-baseline justify-between gap-3 text-sm border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-zinc-700">
                      <span className="inline-block bg-accent-blue/10 text-accent-blue font-bold rounded px-1.5 py-0.5 mr-2 text-xs">
                        {route.line}
                      </span>
                      {route.href ? (
                        <a href={route.href} className="font-medium hover:text-accent-blue hover:underline transition-colors">
                          {route.from}
                        </a>
                      ) : (
                        <span className="font-medium">{route.from}</span>
                      )}
                    </span>
                    <span className="text-zinc-500 whitespace-nowrap">{route.time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-400 mt-4">
                Parada Ginzo de Limia – Ferrol, a 1 minuto andando de la academia.
              </p>
            </div>

            {/* Coche */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-5">
                <Car className="w-5 h-5 text-accent-blue" />
                <h4 className="text-lg font-bold text-zinc-900">En coche</h4>
              </div>
              <ul className="space-y-3">
                {carRoutes.map((route, index) => (
                  <li key={index} className="text-sm border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-zinc-700 font-medium">{route.from}</span>
                      <span className="text-zinc-500 whitespace-nowrap">{route.time}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{route.via}</p>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-400 mt-4">
                Aparcamiento en superficie en la propia Av. de El Ferrol y calles adyacentes. Acceso directo desde la M-30.
              </p>
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
