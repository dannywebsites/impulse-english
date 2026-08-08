import React, { useEffect } from 'react';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadForm from './LeadForm';
import FAQSection from './FAQSection';
import Breadcrumb from './Breadcrumb';
import RelatedArticles from './RelatedArticles';
import CTABand from './CTABand';
import GoogleReviews from './GoogleReviews';
import LazyVideo from './LazyVideo';
import { categoryConfig } from '../data/category-config';
import { resolveInternalLinks } from '../data/internal-links';
import type { PAAArticle, ArticleCard, ArticleImage, ArticleVideo } from '../data/articles/types';

interface PAAArticlePageProps {
  article: PAAArticle;
  siblingArticles?: ArticleCard[];
}

// S3 image URLs keyed by imageKey
const articleImages: Record<string, { url: string; alt: string }> = {
  classroom: {
    url: "/images/academy/classroom-facilities-main-classroom.jpg",
    alt: "Aula principal academia inglés La Vaguada Madrid"
  },
  infantil: {
    url: "/images/academy/infantil-classes.jpg",
    alt: "Clases inglés infantil La Vaguada Madrid"
  },
  cambridge: {
    url: "/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg",
    alt: "Certificado Cambridge oficial La Vaguada Madrid"
  },
  adults: {
    url: "/images/academy/adult-one-to-one-classes.jpg",
    alt: "Clases inglés adultos La Vaguada Madrid"
  },
  students: {
    url: "/images/academy/primary-classes-students-smiling.jpg",
    alt: "Estudiantes primaria felices La Vaguada Madrid"
  },
  teenagers: {
    url: "/images/academy/secondary-classes-student-happy.jpg",
    alt: "Estudiante secundaria La Vaguada Madrid"
  },
  reception: {
    url: "/images/academy/photos-of-facilities.jpg",
    alt: "Instalaciones academia inglés La Vaguada Madrid"
  },
  technology: {
    url: "/images/academy/technology-based-classroom-photo.jpg",
    alt: "Aula tecnológica preparación Linguaskill La Vaguada Madrid"
  },
};

/**
 * One channel clip, framed for its aspect ratio.
 *
 * A Short is 9:16. Handing that to <LazyVideo> inside .container-narrow at full width
 * produces a player taller than the viewport, so the vertical case is capped and
 * centred; a 16:9 clip fills the measure as normal.
 */
function ArticleVideoBlock({ video }: { video: ArticleVideo }) {
  const vertical = video.vertical ?? true;
  return (
    <figure className={vertical ? 'mx-auto w-full max-w-xs' : 'w-full'}>
      <LazyVideo
        videoId={video.youtubeId}
        title={video.title}
        vertical={vertical}
      />
      <figcaption className="t-small mt-3 text-zinc-500">{video.title}</figcaption>
    </figure>
  );
}

export default function PAAArticlePage({ article, siblingArticles = [] }: PAAArticlePageProps) {
  // Fallback to Cambridge B2 First config if article category is invalid/missing,
  // so a bad category in content can't crash the entire build.
  const config = categoryConfig[article.category] ?? categoryConfig['Cambridge B2 First'];

  // Resolve images: prefer articleImages array, fall back to legacy imageKey
  const heroImage: { url: string; alt: string } = (() => {
    if (article.articleImages?.length) {
      const hero = article.articleImages.find(i => i.placement === 'hero') || article.articleImages[0];
      return { url: hero.url, alt: hero.alt };
    }
    return articleImages[article.imageKey || ''] || articleImages.classroom;
  })();

  const inlineImages: ArticleImage[] = article.articleImages
    ? article.articleImages.filter(i => i.placement === 'inline')
    : [];

  // Channel clips. `placement` carries a zod default of 'hero', so a frontmatter entry
  // that omits it is a hero video — but data built by hand may not have been parsed,
  // hence the explicit fallback rather than a strict === 'hero'.
  const heroVideo: ArticleVideo | null =
    article.videos?.find(v => (v.placement ?? 'hero') === 'hero') ?? null;

  const inlineVideos: ArticleVideo[] =
    article.videos?.filter(v => v.placement === 'inline') ?? [];

  const resolvedLinks = resolveInternalLinks(article.internalLinkRefs);

  // Where the mid-article CTA band goes. Placed after a section rather than at a
  // fixed index so a short article does not end up with two CTAs side by side.
  const midSectionIndex = article.contextSections.length >= 4
    ? Math.floor(article.contextSections.length / 2)
    : -1;

  // Listicle review cards go straight after the LAST ranked entry ("## 6. Kids&Us"), so
  // they close the ranking rather than trailing the article. findLastIndex is avoided:
  // the build targets a browser baseline that predates it.
  const reviews = article.googleReviews ?? [];
  let lastRankedIndex = -1;
  article.contextSections.forEach((s, i) => {
    if (/^\s*\d+[.)]\s+/.test(s.heading)) lastRankedIndex = i;
  });

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
            src={heroImage.url}
            alt={heroImage.alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/80" />
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]" />

        <div className="container-narrow relative z-10">
          <div className="mt-8 md:mt-12">
            <Breadcrumb
              items={article.breadcrumbs}
              variant="light"
              className="mb-6 animate-hero-fade-up"
            />

            {/* The site's own section-label pattern, in its on-dark variant,
                instead of the pill chip the blog had invented for itself. */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 animate-hero-fade-up animation-delay-100">
              <span className="eyebrow-light">{config.displayName}</span>
              <span className="t-small flex items-center gap-1 text-white/60">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} de lectura
              </span>
            </div>

            <h1 className="t-h1 mb-6 text-white animate-hero-fade-up animation-delay-150">
              {article.question}
            </h1>

            <span className="rule-light mb-4 animate-hero-fade-up animation-delay-200" />

            <div className="t-small flex items-center gap-4 text-white/60 animate-hero-fade-up animation-delay-200">
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

      {/* The hook. Deliberately ABOVE the direct answer: on these queries Google's AI
          Overview cites video ahead of text, and the SERP carries both a video carousel
          and a separate "Vídeos cortos" carousel. The answer follows immediately, so it
          is still the first block of prose on the page. */}
      {heroVideo && (
        <section className="section-tight">
          <div className="container-narrow">
            <ArticleVideoBlock video={heroVideo} />
          </div>
        </section>
      )}

      {/* Direct answer. This is the block AI Overviews quote, so it leads the prose. */}
      <section className="section-tight">
        <div className="container-narrow">
          <div className="card border-l-4 border-l-accent-blue p-6 md:p-8">
            <span className="eyebrow mb-3">Respuesta directa</span>
            <p className="t-lede measure text-zinc-800">{article.paaAnswer}</p>
          </div>
        </div>
      </section>

      {/* Context Sections with inline images */}
      {article.contextSections.map((section, index) => {
        // Insert inline images after sections 1 and 3 (0-indexed)
        const inlineImageIndex = index === 1 ? 0 : index === 3 ? 1 : -1;
        const inlineImg = inlineImageIndex >= 0 && inlineImageIndex < inlineImages.length
          ? inlineImages[inlineImageIndex]
          : null;

        // One inline clip per section, in order. The bundled guides ("Errores comunes
        // de gramática") give each Short its own section, so section N introduces
        // clip N and the video sits directly under the prose that sets it up.
        const inlineVid = index < inlineVideos.length ? inlineVideos[index] : null;

        return (
          <React.Fragment key={index}>
            <section className={`section ${index % 2 === 0 ? '' : 'surface-alt'}`}>
              <div className="container-narrow">
                <h2 className="t-h2 mb-4 text-zinc-900">{section.heading}</h2>
                <span className="rule mb-6" />
                {/* .article-prose styles the injected HTML. Without it the
                    <p>/<ul>/<table> inside render at browser defaults — the
                    `prose` classes that used to sit here matched nothing,
                    because @tailwindcss/typography is not installed. */}
                <div
                  className="article-prose measure"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                {inlineVid && (
                  <div className="mt-8">
                    <ArticleVideoBlock video={inlineVid} />
                  </div>
                )}
              </div>
            </section>

            {inlineImg && (
              <div className={`pb-14 md:pb-20 ${index % 2 === 0 ? '' : 'surface-alt'}`}>
                <div className="container-narrow">
                  <img
                    src={inlineImg.url}
                    alt={inlineImg.alt}
                    className="w-full rounded-2xl shadow-card"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* DESIGN.md: at least two CTAs below the hero. The article had one,
                at the very bottom, so a reader who stopped halfway had nothing
                to click. */}
            {index === midSectionIndex && (
              <CTABand
                title="¿Quieres saber en qué nivel está de verdad?"
                subtitle="Una prueba de nivel gratuita de 25 minutos te lo dice, sin compromiso."
              />
            )}

            {/* Listicle reviews: real Google review cards, straight after the last ranked
                entry. Rendered here rather than in the prose because review volume is one
                of the ranking criteria, so it belongs with the ranking, not at the end. */}
            {index === lastRankedIndex && reviews.length > 0 && (
              <GoogleReviews
                heading="Lo que dicen nuestros alumnos"
                intro="Reseñas verificadas de Google, sin editar."
                reviews={reviews}
              />
            )}
          </React.Fragment>
        );
      })}

      {/* Internal Links Section */}
      {resolvedLinks.length > 0 && (
        <section className="section-tight">
          <div className="container-narrow">
            <span className="eyebrow mb-3">Seguir leyendo</span>
            <h2 className="t-h3 mb-5 text-zinc-900">Te puede interesar</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {resolvedLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="card-interactive group flex items-center gap-2.5 p-4"
                >
                  <ArrowRight className="w-4 h-4 flex-shrink-0 text-accent-blue" />
                  <span className="t-small font-medium text-zinc-700 transition-colors group-hover:text-accent-blue">
                    {link.anchorText}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impulse CTA Section */}
      <section className="section surface-deep">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow-light mb-4">Impulse English Academy</span>
              <h2 className="t-h2 mb-5 text-white">
                {article.impulseSection.heading}
              </h2>
              <span className="rule-light mb-6" />
              <p className="t-body measure mb-7 text-white/85">
                {article.impulseSection.content}
              </p>
              <div className="flex flex-wrap gap-3">
                {article.impulseSection.ctaLinks.map((cta, i) => (
                  <a
                    key={i}
                    href={cta.href}
                    className={i === 0 ? 'btn-primary' : 'btn-on-dark'}
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
      <section className="section-tight border-t border-zinc-200/80">
        <div className="container-narrow text-center">
          <a href={config.hubPath} className="link-inline inline-flex items-center gap-2">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Volver a {config.hubLabel}
          </a>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
