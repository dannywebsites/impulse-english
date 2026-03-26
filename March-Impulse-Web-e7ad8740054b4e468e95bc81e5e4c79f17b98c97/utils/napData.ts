// napData.ts — Single source of truth for all NAP (Name, Address, Phone) data
// Every component, schema, and page must import from here. Never hardcode NAP values.

export const NAP = {
  // Business identity
  name: "Impulse English Academy La Vaguada",
  shortName: "Impulse English",
  legalName: "Impulse English Academy La Vaguada",

  // Address components
  streetAddress: "Av. de El Ferrol, 22",
  neighborhood: "La Vaguada, Barrio del Pilar",
  district: "Fuencarral-El Pardo",
  postalCode: "28029",
  city: "Madrid",
  addressRegion: "Community of Madrid",
  country: "ES",

  // Formatted address strings
  fullAddress: "Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid",
  shortAddress: "Av. de El Ferrol, 22, 28029 Madrid",

  // Contact
  phone: "+34 604 910 611",
  phoneRaw: "+34604910611",
  phoneTel: "tel:+34604910611",
  whatsappUrl: "https://wa.me/34604910611",
  email: "info@impulse-english.es",

  // Web
  website: "https://impulse-english.es",
  gbpUrl: "https://share.google/GuRfJ3TjrnIIUhrdk",

  // Assets
  logo: "https://impulse-english.es/images/optimized/impulse-logo-400.webp",
  image: "https://impulse-english.es/images/optimized/impulse-logo-400.webp",

  // Geo coordinates
  geo: {
    latitude: 40.4789,
    longitude: -3.7114,
  },

  // Google Maps embed (based on address coordinates)
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7136!3d40.4789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229b1c1a2b3c5%3A0x1234567890abcdef!2sAv.+de+El+Ferrol%2C+22%2C+28029+Madrid!5e0!3m2!1ses!2ses!4v1709900000000",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+de+El+Ferrol+22+28029+Madrid+Spain",

  // Opening hours
  openingHours: [
    { dayOfWeek: "Monday", opens: "10:00", closes: "21:30" },
    { dayOfWeek: "Tuesday", opens: "15:30", closes: "21:30" },
    { dayOfWeek: "Wednesday", opens: "10:00", closes: "21:30" },
    { dayOfWeek: "Thursday", opens: "15:30", closes: "21:30" },
    { dayOfWeek: "Friday", opens: "13:30", closes: "19:30" },
  ],

  // Human-readable hours
  openingHoursText: [
    "Lunes: 10:00 – 21:30",
    "Martes: 15:30 – 21:30",
    "Miércoles: 10:00 – 21:30",
    "Jueves: 15:30 – 21:30",
    "Viernes: 13:30 – 19:30",
    "Sábado – Domingo: Cerrado",
  ],

  // Price range
  priceRange: "€64 - €79/mes",

  // Social profiles
  social: {
    instagram: "https://www.instagram.com/impulse_english_lavaguada/",
    facebook: "https://www.facebook.com/impulseenglishlavaguada/",
    tiktok: "https://www.tiktok.com/@impulse_english_lavaguada",
    x: "https://x.com/impulse_vaguada",
    linkedin: "https://www.linkedin.com/company/101859096/",
    youtube: "https://www.youtube.com/@Impulse-English",
  },

  // All sameAs URLs for schema
  sameAs: [
    "https://share.google/GuRfJ3TjrnIIUhrdk",
    "https://www.instagram.com/impulse_english_lavaguada/",
    "https://www.facebook.com/impulseenglishlavaguada/",
    "https://www.tiktok.com/@impulse_english_lavaguada",
    "https://x.com/impulse_vaguada",
    "https://www.linkedin.com/company/101859096/",
    "https://www.youtube.com/@Impulse-English",
  ],

  // Areas served
  areaServed: [
    "Barrio del Pilar",
    "La Vaguada",
    "Peñagrande",
    "La Ventilla",
    "La Paz",
    "Plaza Castilla",
    "Tetuán",
    "Cuatro Torres",
    "Mirasierra",
    "Montecarmelo",
    "Las Tablas",
    "Fuencarral-El Pardo",
    "Madrid",
  ],

  // Transit info
  metro: [
    "Herrera Oria (Línea 9)",
    "Barrio del Pilar (Línea 9)",
    "Peñagrande (Línea 7)",
  ],
  busLines: ["42", "49", "67", "83", "126", "128", "132", "133", "134", "137", "147"],

  // Credentials
  credentials: [
    "Official Cambridge Preparation Centre",
    "Official Linguaskill Centre",
    "Official Great Little People Centre",
    "Official Partner of ESIC Idiomas",
  ],

  // Aggregate rating (Google Reviews)
  aggregateRating: {
    ratingValue: 5,
    reviewCount: 150,
    bestRating: 5,
    worstRating: 1,
  },

  // Founding
  foundingDate: "2022",
} as const;

// Helper: Schema.org PostalAddress object
export function getSchemaAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.city,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.country,
  };
}

// Helper: Multi-line address for display
export function getAddressLines() {
  return [NAP.streetAddress, `${NAP.neighborhood}, ${NAP.postalCode} ${NAP.city}`];
}
