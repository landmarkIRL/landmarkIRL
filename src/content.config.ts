import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";
import type { RoughAnnotationType } from "rough-notation/lib/model";
import type { ThemeColor } from "./data/colors";

export const collections = {
  authors: defineCollection({
    loader: glob({ pattern: "**/[^_]*.yaml", base: "./src/content/authors" }),
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        role: z.string(),
        bio: z.string(),
        avatar: image(),
        socialLinks: z
          .object({
            name: z.string(),
            url: z.string().url(),
          })
          .array()
          .optional(),
      }),
  }),

  pages: defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/pages" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        ogImage: z
          .object({
            image: image(),
            alt: z.string(),
          })
          .optional(),
        annotation: z.custom<RoughAnnotationType>().optional(),
        color: z.custom<ThemeColor>().optional(),
      }),
  }),

  posts: defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/posts" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().min(70).max(160),
        publishDate: z
          .string()
          .or(z.date())
          .transform((v) => new Date(v)),
        authors: z.array(reference("authors")),
        image: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .optional(),
        tags: z.array(z.string()).optional(),
      }),
  }),
};
