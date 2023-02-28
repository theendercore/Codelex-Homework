import { dbConnect } from "@/lib/mongoose";
import { getRecipes } from "@/lib/mongoose/recipes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  dbConnect();
  try {
    const { recipes, error } = await getRecipes();
    if (recipes === undefined) throw new Error(`message: ${error}`);
    return NextResponse.json({ ...recipes });
  } catch (error) {
    return NextResponse.json({
      message: "there was an error",
      error: JSON.stringify(error),
    });
  }
}
