import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z => ({
        // Add ogImage field to frontmatter
        ogImage: z.string().optional(),
      }),
    }),
  }),
};