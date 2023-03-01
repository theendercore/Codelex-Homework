import { dbConnect } from "@/lib/mongoose";
import { addRecipe, getRecipes } from "@/lib/mongoose/recipes";
import { IdLessRecipe, IdLessRecipeSchema } from "@/lib/util/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { recipes, error } = await getRecipes();
    if (recipes === undefined)
      throw new Error(`Could not get Recipes: ${error}`);

    return NextResponse.json(recipes);
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      message: "there was a problem retrieving the recipes",
      error,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    let recIn = await req.json();
    const { recipe, error } = await addRecipe(IdLessRecipeSchema.parse(recIn));
    if (recipe === undefined) throw new Error(`Could not add Recipe: ${error}`);

    return NextResponse.json(recipe);
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      message: "There was a problem adding a recipe",
      error,
    });
  }
}
