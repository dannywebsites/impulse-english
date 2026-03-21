// Centralized Schema.org structured data for Impulse English Academy
// This file contains reusable schema data that can be imported across components
// All NAP data is imported from napData.ts — the single source of truth

import { NAP, getSchemaAddress } from './napData';

export const businessInfo = {
  name: NAP.name,
  alternateName: NAP.shortName,
  description: "Academia de inglés en Madrid especializada en preparación de exámenes Cambridge, Linguaskill y clases para todas las edades. Centro oficial Cambridge con 100% de aprobados.",
  url: NAP.website,
  logo: NAP.logo,
  image: NAP.image,
  telephone: NAP.phoneRaw,
  email: NAP.email,
  foundingDate: NAP.foundingDate,

  // Address
  address: {
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.city,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.country,
    neighborhood: NAP.neighborhood
  },

  // Geo coordinates (Barrio del Pilar, Madrid)
  geo: NAP.geo,

  // Business hours
  openingHours: NAP.openingHours,

  // Price range
  priceRange: NAP.priceRange,

  // Social profiles & multi-entity connections
  sameAs: NAP.sameAs,

  // Areas served
  areaServed: NAP.areaServed,

  // Credentials & certifications
  credentials: NAP.credentials,

  // Aggregate rating (from Google Reviews)
  aggregateRating: NAP.aggregateRating
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
    hasMap: NAP.gbpUrl,
    sameAs: businessInfo.sameAs,
    areaServed: [
      { "@type": "Neighborhood", name: "Barrio del Pilar" },
      { "@type": "Neighborhood", name: "La Vaguada" },
      ...businessInfo.areaServed
        .filter(area => area !== "Barrio del Pilar" && area !== "La Vaguada")
        .map(area => ({ "@type": "City", name: area }))
    ],
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
    knowsAbout: [
      "Cambridge Exam Preparation",
      "Business English",
      "Linguaskill Certification",
      "English Language Teaching"
    ],
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
      "@id": `${businessInfo.url}/#organization`,
      name: props.provider || businessInfo.name,
      url: businessInfo.url
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
      url: businessInfo.url,
      sameAs: businessInfo.sameAs,
      hasCredential: businessInfo.credentials.map(cred => ({
        "@type": "EducationalOccupationalCredential",
        name: cred
      }))
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

// Generate WebSite schema (site-level identity for AI retrievability)
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    url: businessInfo.url,
    publisher: {
      "@type": "EducationalOrganization",
      "@id": `${businessInfo.url}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${businessInfo.url}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    inLanguage: "es"
  };
}

// Generate DefinedTerm schema (for glossary/key concepts)
export function generateDefinedTermSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name,
    description,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Terminología de Certificaciones de Inglés",
      url: `${businessInfo.url}/preguntas-frecuentes`
    }
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
        address: getSchemaAddress(),
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
