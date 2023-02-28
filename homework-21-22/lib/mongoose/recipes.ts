import { IdLessRecipe, RecipeType } from "../util/types";
import RecipeModel from "./models/recipe";
import { dbConnect } from "./index";

export async function getRecipes() {
  try {
    dbConnect();
    let recipes = await RecipeModel.find<RecipeType[]>();
    return { recipes };
  } catch (error) {
    return { error };
  }
}

export async function getRecipe(id: string) {
  try {
    dbConnect();
    let recipe = await RecipeModel.findById<RecipeType>(id);
    return { recipe };
  } catch (error) {
    return { error };
  }
}

export async function getNextRecipe(id: string) {
  try {
    dbConnect();
    let recipe = await RecipeModel.find<RecipeType>({ _id: { $gt: id } }).limit(
      1
    );
    if (!recipe) throw Error("Recipe not found");
    return { next: recipe[0] };
  } catch (error) {
    return { nextE: error };
  }
}

export async function getPreviousRecipe(id: string) {
  try {
    dbConnect();
    let recipe = await RecipeModel.find<RecipeType>({ _id: { $lt: id } })
    if (!recipe) throw Error("Recipe not found");
    return { last: recipe.pop() };
  } catch (error) {
    return { lastE: error };
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
