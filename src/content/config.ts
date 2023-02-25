import { defineCollection, z } from 'astro:content';

const docsSchema = z.object({
  title: z.string(),
  index: z.number().positive().optional()
});

const docs = defineCollection({
  schema: docsSchema
});

export type Docs = z.infer<typeof docsSchema>;

export const collections = {
  docs
};
