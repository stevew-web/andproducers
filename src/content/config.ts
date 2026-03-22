import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    topic: z.enum([
      'production-ops',
      'creative-strategy',
      'in-housing',
      'martech',
      'social-content',
      'video-motion'
    ]),
    author: z.string().default('AndProducers'),
    readingTime: z.number().optional(), // minutes
    featured: z.boolean().default(false),
    download: z.string().optional(), // path to downloadable asset
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const guideCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    topic: z.enum([
      'production-ops',
      'creative-strategy',
      'in-housing',
      'martech',
      'social-content',
      'video-motion'
    ]),
    download: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const templateCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    topic: z.enum([
      'production-ops',
      'creative-strategy',
      'in-housing',
      'martech',
      'social-content',
      'video-motion'
    ]),
    download: z.string(), // required for templates
    fileType: z.string().default('PDF'), // PDF, XLSX, DOCX etc
    featured: z.boolean().default(false),
  }),
});

const playbookCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    topic: z.enum([
      'production-ops',
      'creative-strategy',
      'in-housing',
      'martech',
      'social-content',
      'video-motion'
    ]),
    download: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles: articleCollection,
  guides: guideCollection,
  templates: templateCollection,
  playbooks: playbookCollection,
};
