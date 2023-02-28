import { z } from "zod";

export const RecipeTypeSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  ingredients: z.array(z.string()),
  categories: z.array(z.string()),
  image: z.string().url(),
});
export type RecipeType = z.infer<typeof RecipeTypeSchema>;

export const IdLessRecipeSchema = RecipeTypeSchema.omit({ _id: true });
export type IdLessRecipe = z.infer<typeof IdLessRecipeSchema>;
