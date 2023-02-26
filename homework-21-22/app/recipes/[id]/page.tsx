import { RecipeType } from "@/util/types";
import Image from 'next/image';
import Ingredient from "./components/Ingredient";
import IngredientsList from "./components/IngredientsList";

type PageProps = {
  params: { id: string };
};
function getRecipe(id: string) {
  return fetch("http://localhost:3000/api/recipes/" + id).then((res) =>
    res.json()
  ) as Promise<RecipeType>;
}

export default async function Page({ params }: PageProps) {
  let recipe: RecipeType = await getRecipe(params.id);
  return (
    <main>
      <h1 className="text-6xl text-slate-200">{recipe.title}</h1>
      <p className="text-slate-300 text-xl">{recipe.descriptions}</p>
      <span className="text-slate-300 text-2xl ">
        <IngredientsList ingredients={recipe.ingredients}/>
      </span>
      <Image src={recipe.image} alt="food" width="300" height="300" />
    </main>
  );
}
