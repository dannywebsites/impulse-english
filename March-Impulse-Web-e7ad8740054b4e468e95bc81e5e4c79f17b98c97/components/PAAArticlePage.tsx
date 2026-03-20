import React, { useEffect } from 'react';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadForm from './LeadForm';
import FAQSection from './FAQSection';
import Breadcrumb from './Breadcrumb';
import RelatedArticles from './RelatedArticles';
import { businessInfo } from '../utils/schemaData';
import { categoryConfig } from '../data/category-config';
import { resolveInternalLinks } from '../data/internal-links';
import type { PAAArticle, ArticleCard } from '../data/articles/types';

interface PAAArticlePageProps {
  article: PAAArticle;
  siblingArticles?: ArticleCard[];
}

// S3 image URLs keyed by imageKey
const articleImages: Record<string, { url: string; alt: string }> = {
  classroom: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG",
    alt: "Aula principal academia inglés La Vaguada Madrid"
  },
  infantil: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG",
    alt: "Clases inglés infantil La Vaguada Madrid"
  },
  cambridge: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG",
    alt: "Certificado Cambridge oficial La Vaguada Madrid"
  },
  adults: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG",
    alt: "Clases inglés adultos La Vaguada Madrid"
  },
  students: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG",
    alt: "Estudiantes primaria felices La Vaguada Madrid"
  },
  teenagers: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+student+happy.JPG",
    alt: "Estudiante secundaria La Vaguada Madrid"
  },
  reception: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG",
    alt: "Instalaciones academia inglés La Vaguada Madrid"
  },
  technology: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG",
    alt: "Aula tecnológica preparación Linguaskill La Vaguada Madrid"
  },
};

export default function PAAArticlePage({ article, siblingArticles = [] }: PAAArticlePageProps) {
  const config = categoryConfig[article.category];
  const image = articleImages[article.imageKey] || articleImages.classroom;
  const resolvedLinks = resolveInternalLinks(article.internalLinkRefs);
  const fullUrl = `${businessInfo.url}${article.url}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.slug]);
  return (
    <>
<Navbar />

      <article>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/80" />
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]" />

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mt-8 md:mt-12">
            <Breadcrumb
              items={article.breadcrumbs}
              variant="light"
              className="mb-6 animate-hero-fade-up"
            />

            <div className="flex items-center gap-3 mb-4 animate-hero-fade-up animation-delay-100">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                {config.displayName}
              </span>
              <span className="text-white/60 text-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} de lectura
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-150">
              {article.question}
            </h1>

            <div className="w-16 h-0.5 bg-brand-red mb-4 animate-hero-fade-up animation-delay-200" />

            <div className="flex items-center gap-4 text-white/60 text-sm animate-hero-fade-up animation-delay-200">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(article.modifiedDate)}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                Impulse English Academy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Answer Section */}
      <section className="py-10 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-accent-blue/5 border-l-4 border-accent-blue rounded-r-lg p-6 md:p-8">
            <h2 className="text-lg font-bold text-accent-blue mb-3">Respuesta directa</h2>
            <p className="text-zinc-800 text-lg leading-relaxed">{article.paaAnswer}</p>
          </div>
        </div>
      </section>

      {/* Context Sections */}
      {article.contextSections.map((section, index) => (
        <section
          key={index}
          className={`py-10 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">{section.heading}</h2>
            <div
              className="text-zinc-700 leading-relaxed space-y-4 prose prose-zinc max-w-none"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        </section>
      ))}

      {/* Internal Links Section */}
      {resolvedLinks.length > 0 && (
        <section className="py-8 px-6 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-4">Te puede interesar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resolvedLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="flex items-center gap-2 p-3 rounded-lg border border-zinc-200 hover:border-accent-blue hover:bg-accent-blue/5 transition-all group"
                >
                  <ArrowRight className="w-4 h-4 text-accent-blue flex-shrink-0" />
                  <span className="text-zinc-700 group-hover:text-accent-blue transition-colors text-sm font-medium">
                    {link.anchorText}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impulse CTA Section */}
      <section className="py-12 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {article.impulseSection.heading}
              </h2>
              <p className="text-white/85 leading-relaxed mb-6">
                {article.impulseSection.content}
              </p>
              <div className="flex flex-wrap gap-3">
                {article.impulseSection.ctaLinks.map((cta, i) => (
                  <a
                    key={i}
                    href={cta.href}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${
                      i === 0
                        ? 'bg-white text-accent-blue hover:bg-zinc-100'
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {cta.text}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <LeadForm
                source={config.leadFormSource}
                compact
                title="¿Quieres más información?"
                subtitle="Te contactamos en menos de 24 horas"
                ctaText="Solicitar información"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {article.faqItems.length > 0 && (
        <FAQSection
          faqs={article.faqItems}
          title="Preguntas relacionadas"
        />
      )}

      {/* Related Articles */}
      </article>

      <RelatedArticles articles={siblingArticles} />

      {/* Back to Hub */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="container mx-auto max-w-3xl text-center">
          <a
            href={config.hubPath}
            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 font-medium transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Volver a {config.hubLabel}
          </a>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}

function estimateWordCount(article: PAAArticle): number {
  let text = article.paaAnswer;
  for (const section of article.contextSections) {
    text += ' ' + section.content;
  }
  text += ' ' + article.impulseSection.content;
  for (const faq of article.faqItems) {
    text += ' ' + faq.question + ' ' + faq.answer;
  }
  return text.split(/\s+/).length;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
