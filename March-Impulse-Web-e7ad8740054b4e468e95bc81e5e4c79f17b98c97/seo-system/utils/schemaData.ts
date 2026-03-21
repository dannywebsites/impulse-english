// Centralized Schema.org structured data for Impulse English Academy
// This file contains reusable schema data that can be imported across components

export const businessInfo = {
  name: "Impulse English Academy",
  alternateName: "Impulse English",
  description: "Academia de inglés en Madrid especializada en preparación de exámenes Cambridge, Linguaskill y clases para todas las edades. Centro oficial Cambridge con 100% de aprobados.",
  url: "https://impulse-english.es",
  logo: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG",
  image: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG",
  telephone: "+34604910611",
  email: "info@impulse-english.es",
  foundingDate: "2022",

  // Address
  address: {
    streetAddress: "Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar",
    addressLocality: "Madrid",
    addressRegion: "Madrid",
    postalCode: "28029",
    addressCountry: "ES",
    neighborhood: "La Vaguada, Barrio del Pilar"
  },

  // Geo coordinates (Barrio del Pilar, Madrid)
  geo: {
    latitude: 40.4789,
    longitude: -3.7114
  },

  // Business hours
  openingHours: [
    { dayOfWeek: "Monday", opens: "10:00", closes: "21:30" },
    { dayOfWeek: "Tuesday", opens: "15:30", closes: "21:30" },
    { dayOfWeek: "Wednesday", opens: "10:00", closes: "21:30" },
    { dayOfWeek: "Thursday", opens: "15:30", closes: "21:30" },
    { dayOfWeek: "Friday", opens: "15:30", closes: "19:30" }
  ],

  // Price range
  priceRange: "€64 - €79/mes",

  // Social profiles & multi-entity connections
  sameAs: [
    "https://www.google.com/maps/place/Impulse+English+Academy/@40.4743948,-3.7084812,17z",
    "https://www.instagram.com/impulse_english_academy/",
    "https://www.facebook.com/impulseenglish.es",
    "https://www.tiktok.com/@impulse_english",
    "https://x.com/impulse_vaguada",
    "https://www.linkedin.com/company/101859096/",
    "https://www.youtube.com/@Impulse-English"
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
    "Fuencarral-El Pardo",
    "Madrid"
  ],

  // Credentials & certifications
  credentials: [
    "Official Cambridge Preparation Centre",
    "Official Linguaskill Centre",
    "Official Great Little People Centre",
    "Official Partner of ESIC Idiomas"
  ],

  // Aggregate rating (from Google Reviews)
  aggregateRating: {
    ratingValue: 5,
    reviewCount: 145,
    bestRating: 5,
    worstRating: 1
  }
};

// Generate LocalBusiness + EducationalOrganization schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    description: businessInfo.description,
    url: businessInfo.url,
    logo: {
      "@type": "ImageObject",
      url: businessInfo.logo
    },
    image: businessInfo.image,
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    foundingDate: businessInfo.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude
    },
    openingHoursSpecification: businessInfo.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes
    })),
    priceRange: businessInfo.priceRange,
    sameAs: businessInfo.sameAs,
    areaServed: businessInfo.areaServed.map(area => ({
      "@type": "City",
      name: area
    })),
    hasCredential: businessInfo.credentials.map(cred => ({
      "@type": "EducationalOccupationalCredential",
      name: cred
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessInfo.aggregateRating.ratingValue,
      reviewCount: businessInfo.aggregateRating.reviewCount,
      bestRating: businessInfo.aggregateRating.bestRating,
      worstRating: businessInfo.aggregateRating.worstRating
    },
    // Additional educational organization properties
    knowsLanguage: ["es", "en"],
    slogan: "Tu academia de inglés en Madrid"
  };
}

// Generate Course schema
export interface CourseSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  courseCode?: string;
  educationalLevel?: string;
  timeRequired?: string;
  price?: string;
  priceCurrency?: string;
  image?: string;
}

export function generateCourseSchema(props: CourseSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: props.name,
    description: props.description,
    url: props.url,
    provider: {
      "@type": "EducationalOrganization",
      name: props.provider || businessInfo.name,
      url: businessInfo.url,
      logo: businessInfo.logo
    },
    ...(props.courseCode && { courseCode: props.courseCode }),
    ...(props.educationalLevel && { educationalLevel: props.educationalLevel }),
    ...(props.timeRequired && { timeRequired: props.timeRequired }),
    ...(props.image && { image: props.image }),
    inLanguage: "en",
    availableLanguage: ["es", "en"],
    ...(props.price && {
      offers: {
        "@type": "Offer",
        price: props.price,
        priceCurrency: props.priceCurrency || "EUR",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01"
      }
    })
  };
}

// Generate Article/BlogPosting schema
export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  wordCount?: number;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    description: props.description,
    url: props.url,
    image: props.image || businessInfo.image,
    datePublished: props.datePublished || "2025-01-01",
    dateModified: props.dateModified || props.datePublished || "2025-01-01",
    author: {
      "@type": "Organization",
      name: props.author || businessInfo.name,
      url: businessInfo.url
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.url,
      logo: {
        "@type": "ImageObject",
        url: businessInfo.logo
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": props.url
    },
    ...(props.wordCount && { wordCount: props.wordCount }),
    inLanguage: "es"
  };
}

// Generate FAQPage schema
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

// Generate BreadcrumbList schema
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// Generate WebPage schema
export interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumb?: BreadcrumbItem[];
}

export function generateWebPageSchema(props: WebPageSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: props.name,
    description: props.description,
    url: props.url,
    isPartOf: {
      "@type": "WebSite",
      name: businessInfo.name,
      url: businessInfo.url
    },
    ...(props.breadcrumb && {
      breadcrumb: generateBreadcrumbSchema(props.breadcrumb)
    }),
    inLanguage: "es"
  };
}

// Generate Service schema (for exam preparation)
export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  price?: string;
}

export function generateServiceSchema(props: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.name,
    description: props.description,
    url: props.url,
    serviceType: props.serviceType,
    provider: {
      "@type": "EducationalOrganization",
      name: businessInfo.name,
      url: businessInfo.url
    },
    areaServed: {
      "@type": "City",
      name: "Madrid"
    },
    ...(props.price && {
      offers: {
        "@type": "Offer",
        price: props.price,
        priceCurrency: "EUR"
      }
    })
  };
}

// Generate LocalBusiness + Service schema for location pages
export interface LocationPageSchemaProps {
  locationName: string; // e.g., "La Vaguada", "Plaza Castilla"
  pageUrl: string;
}

export function generateLocationPageSchema(props: LocationPageSchemaProps) {
  const services = [
    {
      "@type": "Service",
      name: `Clases de Inglés Infantil cerca de ${props.locationName}`,
      description: `Clases de inglés para niños de 2-5 años con metodología Great Little People cerca de ${props.locationName}, Madrid.`,
      serviceType: "English Classes for Children",
      offers: {
        "@type": "Offer",
        price: "64",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "64",
          priceCurrency: "EUR",
          unitText: "mes"
        }
      }
    },
    {
      "@type": "Service",
      name: `Clases de Inglés Primaria cerca de ${props.locationName}`,
      description: `Clases de inglés para niños de 6-12 años con preparación Cambridge Young Learners cerca de ${props.locationName}, Madrid.`,
      serviceType: "English Classes for Primary School",
      offers: {
        "@type": "Offer",
        price: "71",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "71",
          priceCurrency: "EUR",
          unitText: "mes"
        }
      }
    },
    {
      "@type": "Service",
      name: `Clases de Inglés Secundaria cerca de ${props.locationName}`,
      description: `Clases de inglés para adolescentes de 13-17 años con preparación Cambridge B1/B2/C1 y EBAU cerca de ${props.locationName}, Madrid.`,
      serviceType: "English Classes for Secondary School",
      offers: {
        "@type": "Offer",
        price: "75",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "75",
          priceCurrency: "EUR",
          unitText: "mes"
        }
      }
    },
    {
      "@type": "Service",
      name: `Clases de Inglés para Adultos cerca de ${props.locationName}`,
      description: `Clases de inglés para adultos con preparación Cambridge y Linguaskill cerca de ${props.locationName}, Madrid.`,
      serviceType: "English Classes for Adults",
      offers: {
        "@type": "Offer",
        price: "79",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "79",
          priceCurrency: "EUR",
          unitText: "mes"
        }
      }
    },
    {
      "@type": "Service",
      name: `Preparación Exámenes Cambridge cerca de ${props.locationName}`,
      description: `Centro oficial de preparación de exámenes Cambridge (B1, B2 First, C1 Advanced) cerca de ${props.locationName}, Madrid. 100% aprobados.`,
      serviceType: "Cambridge Exam Preparation"
    },
    {
      "@type": "Service",
      name: `Examen Linguaskill cerca de ${props.locationName}`,
      description: `Centro oficial Linguaskill para certificación rápida de inglés cerca de ${props.locationName}, Madrid. Resultados en 48 horas.`,
      serviceType: "Linguaskill Certification"
    }
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": `${businessInfo.url}/#organization`,
        name: businessInfo.name,
        alternateName: businessInfo.alternateName,
        description: `Academia de inglés cerca de ${props.locationName}, Madrid. Centro oficial Cambridge y Linguaskill con 100% de aprobados. Clases para todas las edades.`,
        url: props.pageUrl,
        logo: {
          "@type": "ImageObject",
          url: businessInfo.logo
        },
        image: businessInfo.image,
        telephone: businessInfo.telephone,
        email: businessInfo.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. de El Ferrol, 22",
          addressLocality: "La Vaguada, Barrio del Pilar",
          addressRegion: "Madrid",
          postalCode: "28029",
          addressCountry: "ES"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: businessInfo.geo.latitude,
          longitude: businessInfo.geo.longitude
        },
        openingHoursSpecification: businessInfo.openingHours.map(hours => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: hours.dayOfWeek,
          opens: hours.opens,
          closes: hours.closes
        })),
        priceRange: businessInfo.priceRange,
        sameAs: businessInfo.sameAs,
        areaServed: [
          {
            "@type": "Place",
            name: props.locationName
          },
          {
            "@type": "City",
            name: "Madrid"
          }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cursos de Inglés",
          itemListElement: services
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: businessInfo.aggregateRating.ratingValue,
          reviewCount: businessInfo.aggregateRating.reviewCount,
          bestRating: businessInfo.aggregateRating.bestRating,
          worstRating: businessInfo.aggregateRating.worstRating
        },
        hasCredential: businessInfo.credentials.map(cred => ({
          "@type": "EducationalOccupationalCredential",
          name: cred
        }))
      },
      ...services.map(service => ({
        "@context": "https://schema.org",
        ...service,
        provider: {
          "@type": "EducationalOrganization",
          name: businessInfo.name,
          url: businessInfo.url
        },
        areaServed: {
          "@type": "Place",
          name: `${props.locationName}, Madrid`
        }
      }))
    ]
  };
}
