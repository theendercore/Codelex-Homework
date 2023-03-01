import { getNextRecipe, getPreviousRecipe } from "@/lib/mongoose/recipes";
import { NextRequest, NextResponse } from "next/server";

type IdParams = { params: { id: string } };

export async function GET(request: NextRequest, { params }: IdParams) {
  try {
    let { next, nextE } = await getNextRecipe(params.id);
    let { last, lastE } = await getPreviousRecipe(params.id);
    if (nextE || lastE) throw Error(`${nextE || lastE}`);

    return NextResponse.json({ next, last });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      message: "There was a problem retrieving the recipes",
      error,
    });
  }
}
