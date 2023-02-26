import { NextResponse } from "next/server";

export async function GET(
  request: Request
): Promise<Response> {

  return NextResponse.json([
    {
      id:"1",
      title: "yes",
      descriptions: "words",
      ingredients: [
        {
          _id: "wowmgic",
          name: "pickles",
        },
        {
          _id: "ansdjnd",
          name: "tomato",
        },
      ],
      image: "https://picsum.photos/id/3/300",
    },
    {
      id:"2",
      title: "no not at alType",
      descriptions: "nnoonno",
      ingredients: [
        {
          _id: "asdasd",
          name: "pickles",
        }
      ],
      image: "https://picsum.photos/id/4/300",
    },
  ]);
}
