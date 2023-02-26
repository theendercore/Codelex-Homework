import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  params: { [key: string]: string }
): Promise<Response> {
  // console.log(params);

  return NextResponse.json({
    title: "yes",
    descriptions: "words",
    ingredients: [
      {
        "_id": "wowmgic",
        name:"pickles"
      }
      ,{
        "_id": "ansdjnd",
        name:"tomato"
      }
    ],
    image: "https://picsum.photos/id/3/300",
  });
}
