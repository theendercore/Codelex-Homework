import { z } from "zod";
import {
  BlogCommentSchema,
  BlogContentSchema,
  BlogPostSchema,
  UserSchema,
} from "./const";

// extract the inferred type
type User = z.infer<typeof UserSchema>;
type BlogContent = z.infer<typeof BlogContentSchema>;
type BlogPost = z.infer<typeof BlogPostSchema>;
type BlogComment = z.infer<typeof BlogCommentSchema>;
