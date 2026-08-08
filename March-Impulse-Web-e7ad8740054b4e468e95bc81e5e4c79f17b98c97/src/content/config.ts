import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    url: z.string(),
    category: z.string(),
    priority: z.enum(['High', 'Medium']),
    question: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    paaAnswer: z.string(),
    contextSections: z.array(z.object({
      heading: z.string(),
      content: z.string(),
    })),
    impulseSection: z.object({
      heading: z.string(),
      content: z.string(),
      ctaLinks: z.array(z.object({
        text: z.string(),
        href: z.string(),
      })),
    }),
    faqItems: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    internalLinkRefs: z.array(z.string()),
    breadcrumbs: z.array(z.object({
      label: z.string(),
      href: z.string().optional(),
    })),
    publishedDate: z.string(),
    modifiedDate: z.string(),
    readTime: z.string(),
    imageKey: z.string().optional(),
    // Ranked entries for a listicle ("mejores academias de inglés en X"), emitted by
    // seo-blog-writer in --format listicle mode and rendered as ItemList schema by
    // blog/[slug].astro. Optional: every pre-2026-08 article predates the format.
    listItems: z.array(z.object({
      position: z.number(),
      name: z.string(),
      description: z.string(),
    })).optional(),
    // Verbatim Google reviews, rendered by PAAArticlePage through the same
    // <GoogleReviews> component the location pages use (stars, Google mark, author
    // card). Kept out of contextSections on purpose: a markdown blockquote is not a
    // Google review, and the first listicle shipped one as bare body text.
    googleReviews: z.array(z.object({
      name: z.string(),
      text: z.string(),
    })).optional(),
    articleImages: z.array(z.object({
      url: z.string(),
      alt: z.string(),
      placement: z.enum(['hero', 'inline']),
    })).min(3).optional(),
    // YouTube clips from the academy's own channel, rendered by PAAArticlePage through
    // the existing <LazyVideo> facade and emitted as VideoObject schema by the route.
    //
    // A `hero` video is the page's hook: it renders straight after the article hero and
    // BEFORE the "Respuesta directa" card. That order is deliberate — on these queries
    // Google's AI Overview cites video ahead of text, and the SERPs carry both a video
    // carousel and a separate "Vídeos cortos" carousel.
    //
    // Optional: every pre-2026-08 article predates the field.
    videos: z.array(z.object({
      /** The 11-character YouTube ID, not a URL. The route builds both embed and thumbnail from it. */
      youtubeId: z.string(),
      title: z.string(),
      /** Goes into VideoObject.description — write it for search, not as a caption. */
      description: z.string(),
      /** YYYY-MM-DD. Required by VideoObject; Google drops the clip without it. */
      uploadDate: z.string(),
      /** ISO 8601, e.g. PT47S. */
      duration: z.string(),
      /**
       * Shorts are 9:16. Left true by default because all but four of the channel's
       * clips are Shorts, and a vertical clip in a 16:9 box pillarboxes badly while
       * `maxresdefault` centre-crops the thumbnail and cuts heads off.
       */
      vertical: z.boolean().default(true),
      placement: z.enum(['hero', 'inline']).default('hero'),
    })).optional(),
  }),
});

export const collections = { articles };
