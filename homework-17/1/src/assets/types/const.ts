import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(50),
  surname: z.string().max(50),
  icon: z.string().url({ message: "Invalid URL" }).max(255),
});

export const BlogContentSchema = z.object({
  title: z.string().max(255),
  excerpt: z.string().max(20_000),
  text: z.string().max(1_000_000),
  image: z.string().url({ message: "Invalid URL" }).max(255),
});

export const BlogCommentSchema = z.object({
  blog_id: z.number().int().positive(),
  author_id: z.number().int().positive(),
  text: z.string().max(50_000),
});

export const BlogPostSchema = z.object({
  content: BlogContentSchema,
  author_id: z.number().int().positive(),
});
