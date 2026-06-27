import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  fullTitle?: boolean; // If true, use title as-is without appending site name
}

const DEFAULT_OG_IMAGE = '/images/academy/logo-white-background.jpg';
const SITE_NAME = 'Impulse English Academy La Vaguada – Barrio del Pilar';
const BASE_URL = 'https://impulse-english.es';
const DEFAULT_DESCRIPTION = 'Academia de inglés La Vaguada, Barrio del Pilar. Centro preparador Cambridge oficial 100% aprobados. Barrio del Pilar, Peñagrande. Cursos niños y adultos.';

/**
 * SEO component that manages meta tags for each page
 * Updates document head with title, description, Open Graph, and other SEO tags
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  publishedTime,
  modifiedTime,
  author = 'Impulse English Academy',
  fullTitle = false
}: SEOHeadProps) {

  useEffect(() => {
    // Set document title (use as-is if fullTitle, otherwise append site name)
    document.title = fullTitle ? title : `${title} | ${SITE_NAME}`;

    // Helper function to set or create meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper function to set link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // (Removed S3 preconnect/dns-prefetch — images are now served locally from /images)

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Keywords (if provided)
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Publisher
    setMetaTag('publisher', SITE_NAME);
    setMetaTag('author', author);

    // Canonical URL
    if (canonical) {
      setLinkTag('canonical', canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`);
    }

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', SITE_NAME, true);
    setMetaTag('og:locale', 'es_ES', true);
    if (canonical) {
      setMetaTag('og:url', canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Article specific tags
    if (ogType === 'article') {
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        setMetaTag('article:modified_time', modifiedTime, true);
      }
      setMetaTag('article:author', author, true);
    }

    // Update html lang attribute
    document.documentElement.lang = 'es';

  }, [title, description, keywords, canonical, ogImage, ogType, noindex, publishedTime, modifiedTime, author, fullTitle]);

  return null; // This component doesn't render anything visible
}
