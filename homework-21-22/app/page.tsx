import { RecipeType } from "@/lib/util/types";
import axios from "axios";
import Link from "next/link";
import Recipe from "./components/Recipe";

async function getRecipe() {
  let {data} = await axios.get<RecipeType[]>("http://localhost:3000/api/recipes");
  return data;
}

export default async function Home() {
  let recipes = await getRecipe();
  return (
    <main>
      <h1 className="text-slate-200 text-6xl">Book</h1>
      <Link href={"recipe/add"} className="bg-slate-600 rounded-xl p-4">
        Add Recipe
      </Link>
      <div>
        {JSON.stringify(recipes)}
        {/* {[...recipes].map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))} */}
      </div>
    </main>
  );
}
