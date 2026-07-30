import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import LeadForm from './LeadForm';
import { NAP } from '../utils/napData';

export default function ContactSection() {
  return (
    <section id="contact" className="section-lead surface-alt w-full px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="eyebrow mb-4">
            Contacto
          </span>
          <h2 className="t-h2 text-zinc-900 mb-5">
            Contacta con nosotros
          </h2>
          <div className="rule"></div>
        </div>

        {/* 5/7 split: the form is the action, the details are reference. */}
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Contact Info */}
          <div className="space-y-5 lg:col-span-5">
            {/* Email */}
            <div className="card p-6">
              <h4 className="mb-3 flex items-center gap-3 text-base font-semibold text-zinc-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue-50">
                  <Mail className="w-5 h-5 text-accent-blue" />
                </div>
                Email
              </h4>
              <a
                href={`mailto:${NAP.email}`}
                className="t-body text-zinc-600 transition-colors hover:text-accent-blue"
              >
                {NAP.email}
              </a>
            </div>

            {/* Phone */}
            <div className="card p-6">
              <h4 className="mb-3 flex items-center gap-3 text-base font-semibold text-zinc-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue-50">
                  <Phone className="w-5 h-5 text-accent-blue" />
                </div>
                Llamar
              </h4>
              <a
                href={NAP.phoneTel}
                className="t-body text-zinc-600 transition-colors hover:text-accent-blue"
              >
                {NAP.phone}
              </a>
            </div>

            {/* Address */}
            <div className="card p-6">
              <h4 className="mb-3 flex items-center gap-3 text-base font-semibold text-zinc-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue-50">
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
            <div className="overflow-hidden rounded-2xl border border-zinc-200/80 shadow-card">
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

          {/* Lead Form. LeadForm renders its own card, so the extra white panel
              that used to wrap it here has gone — it was a card inside a card. */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <LeadForm
              title="¿Listo para empezar?"
              subtitle="Solicita información y te contactamos en menos de 24 horas"
              ctaText="Solicitar información"
              source="homepage-contact"
              showPhone={true}
              showAge={true}
              showLevel={true}
              variant="refresh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
