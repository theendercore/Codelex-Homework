import { RecipeType } from "@/util/types";
import Link from "next/link";
import Recipe from "./components/Recipe";

function getRecipe() {
  return fetch("http://localhost:3000/api/recipes").then((res) =>
    res.json()
  ) as Promise<RecipeType[]>;
}

export default async function Home() {
  let recipes: RecipeType[] = await getRecipe();
  return (
    <main>
      <h1 className="text-slate-200 text-6xl">oh on</h1>
      <Link href={"/recipes/3"}>Page</Link>
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}/>
        ))}
      </div>
    </main>
  );
}
