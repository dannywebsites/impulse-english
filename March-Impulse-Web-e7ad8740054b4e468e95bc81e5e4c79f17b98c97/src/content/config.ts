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
    articleImages: z.array(z.object({
      url: z.string(),
      alt: z.string(),
      placement: z.enum(['hero', 'inline']),
    })).min(3).optional(),
  }),
});

export const collections = { articles };
