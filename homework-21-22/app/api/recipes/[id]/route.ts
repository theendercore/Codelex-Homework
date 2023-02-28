import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  request: NextApiRequest,
  params: { id: string }
): Promise<Response> {

  return NextResponse.json({
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
  });
}
