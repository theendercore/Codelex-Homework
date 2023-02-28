import { IdLessRecipe } from "../util/types";
import RecipeSchema from "./models/recipe";
import RecipeModel from "./models/recipe";
import { dbConnect } from "./index";

export async function getRecipes() {
  try {
    dbConnect();
    let recipes = await RecipeSchema.find().catch(console.error);
    return { recipes };
  } catch (error) {
    return { error };
  }
}

export async function addRecipe(recipeIn: IdLessRecipe) {
  try {
    dbConnect();
    let recipe = await RecipeModel.create(recipeIn);
    return { recipe };
  } catch (error) {
    return { error };
  }
}
