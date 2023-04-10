import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    contents: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    href: z.string().url(),
    tagline: z.string(),
    description: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  "blog": blogCollection,
  "projects": projectCollection,
};