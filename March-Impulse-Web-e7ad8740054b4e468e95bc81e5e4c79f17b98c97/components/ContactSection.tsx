import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import LeadForm from './LeadForm';
import { NAP } from '../utils/napData';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-zinc-50 py-16 md:py-24 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-6">
            Contacta con nosotros
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <h4 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-blue" />
                </div>
                Email
              </h4>
              <a
                href={`mailto:${NAP.email}`}
                className="text-lg text-zinc-600 hover:text-accent-blue transition-colors"
              >
                {NAP.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <h4 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-blue" />
                </div>
                Llamar
              </h4>
              <a
                href={NAP.phoneTel}
                className="text-lg text-zinc-600 hover:text-accent-blue transition-colors"
              >
                {NAP.phone}
              </a>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <h4 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                </div>
                Dirección
              </h4>
              <address className="text-lg text-zinc-600 not-italic">
                <p>{NAP.shortAddress}</p>
                <p className="text-sm text-zinc-500 mt-1">Academia de inglés en La Vaguada / Barrio del Pilar</p>
              </address>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-sm border border-zinc-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.2889!2d-3.7084812!3d40.4743948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422909a0b6b11b%3A0xbe6ef3e2ba8bb87b!2sImpulse%20English%20Academy!5e0!3m2!1sen!2ses!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Impulse English Academy"
              />
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white p-8 rounded-lg border border-zinc-100 shadow-sm">
            <LeadForm
              title="¿Listo para empezar?"
              subtitle="Solicita información y te contactamos en menos de 24 horas"
              ctaText="Solicitar información"
              source="homepage-contact"
              showPhone={true}
              showAge={true}
              showLevel={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
