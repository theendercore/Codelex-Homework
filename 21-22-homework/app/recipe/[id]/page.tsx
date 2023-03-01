import { RecipeType } from "@/lib/util/types";
import Image from "next/image";
import axios from "axios";

type PageParams = {
  params: { id: string };
};

async function getRecipe(id: string) {
  let { data } = await axios.get<RecipeType>(
    `http://localhost:3000/api/recipes/${id}`
  );
  return data;
}

export default async function Page({ params }: PageParams) {
  let recipe: RecipeType = await getRecipe(params.id);
  return (
    <main>
      <h1 className="text-6xl text-slate-200">{recipe.title}</h1>
      <p className="text-slate-300 text-xl">{recipe.description}</p>
      <span className="text-slate-300 text-2xl ">
      </span>
      <Image src={recipe.image} alt="food" width="300" height="300" />
    </main>
  );
}
