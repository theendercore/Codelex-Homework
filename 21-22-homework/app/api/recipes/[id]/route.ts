import { getRecipe } from "@/lib/mongoose/recipes";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

type IdParams = { params: { id: string } };

export async function GET(request: NextApiRequest, { params }: IdParams) {
  try {
    const { recipe, error } = await getRecipe(params.id);
    if (recipe === undefined) throw new Error(`Could not get Recipe: ${error}`);

    return NextResponse.json(recipe);
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      message: "there was a problem retrieving a recipe",
      error,
    });
  }
}
