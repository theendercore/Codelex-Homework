import { getRecipes } from "@/lib/mongoose/recipes";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(
  request: NextRequest,
  response: NextResponse
) {
  console.log("get run");
  if (request.method === "GET") {
    try {
      const { recipes, error } = await getRecipes();
      if (error !== undefined || error !== null) throw new Error("problem");
      return NextResponse.json({ recipes });
    } catch (error) {
      return NextResponse.json({
        message: "there was an error",
        error: JSON.stringify(error),
      });
    }
  }

  // return NextResponse.json([
  //   {
  //     id:"1",
  //     title: "yes",
  //     descriptions: "words",
  //     ingredients: [
  //       {
  //         _id: "wowmgic",
  //         name: "pickles",
  //       },
  //       {
  //         _id: "ansdjnd",
  //         name: "tomato",
  //       },
  //     ],
  //     image: "https://picsum.photos/id/3/300",
  //   },
  //   {
  //     id:"2",
  //     title: "no not at alType",
  //     descriptions: "nnoonno",
  //     ingredients: [
  //       {
  //         _id: "asdasd",
  //         name: "pickles",
  //       }
  //     ],
  //     image: "https://picsum.photos/id/4/300",
  //   },
  // ]);
}
