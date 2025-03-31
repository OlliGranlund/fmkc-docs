import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: ({ image }) => {
        return z.object({
          // Add a field that must resolve to a local image
          ogImage: image().optional(),
        });
      },
    }),
  }),
};