import { RecipeType } from "@/lib/util/types";
import Link from "next/link";
import Recipe from "./components/Recipe";

async function getRecipe(): Promise<RecipeType[]> {
  let res = await fetch("http://localhost:3000/api/recipes", {
    cache: "no-cache",
  });
  return res.json();
}

export default async function Home() {
  let recipes: RecipeType[] = await getRecipe();
  return (
    <main>
      <h1 className="text-slate-200 text-6xl">Book</h1>
      <Link href={"recipes/add"} className="bg-slate-600 rounded-xl p-4">
        Add Recipe
      </Link>
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
