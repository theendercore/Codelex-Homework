import { IdLessRecipe } from "../util/types";
import RecipeModel from "./models/recipe";
import { dbConnect } from "./index";

export async function getRecipes() {
  try {
    dbConnect();
    let recipes = await RecipeModel.find();
    return { recipes };
  } catch (error) {
    return { error };
  }
}

export async function getRecipe(id: string) {
  try {
    dbConnect();
    let recipe = await RecipeModel.findById(id);
    return { recipe };
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
