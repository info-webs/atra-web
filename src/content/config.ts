import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    category: z.enum([
      'TCA',
      'Obesidad',
      'Familia',
      'Eventos',
      'Recursos',
      'Testimonios',
      'Noticias'
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
