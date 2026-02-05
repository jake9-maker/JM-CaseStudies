import { defineCollection, z } from 'astro:content';

// Define the schema for case study projects
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    summary: z.string(),
    role: z.string(),
    team_size: z.number().int().positive(),
    duration: z.string(),
    featured: z.boolean(),
    featured_image: z.string(),
    featured_order: z.number().int().min(1).max(10),
    pillars: z.array(z.enum(['complex-problem-solving', 'ai-integration', 'ux-research', 'retention-strategy', 'data-driven-design', 'mobile-ux', 'operational-design', 'field-research', 'product-strategy', 'market-discovery'])).min(1),

    // Optional fields
    impact: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    headings: z.array(z.object({
      depth: z.number(),
      slug: z.string(),
      text: z.string(),
    })).optional(),
  }),
});

// Export the collections
export const collections = {
  'projects': projectsCollection,
};
