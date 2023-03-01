import { getNextRecipe, getPreviousRecipe } from "@/lib/mongoose/recipes";
import { RecipeType } from "@/lib/util/types";
import axios from "axios";
import Link from "next/link";

export const metadata = {
  title: "Recipe",
  description: "Made by me",
};

type RecipeLayoutProps = {
  children: React.ReactNode;
  params: { id: string };
};

async function getRecipeNextAndPrev(id: string) {
  const { next, last } = await fetch(
    `http://localhost:3000/api/recipes/next-last/${id}`
  ).then(
    (res) => res.json() as Promise<{ next: RecipeType; last: RecipeType }>
  );
  return { next: next, last: last };
}

export default async function RecipeLayout({
  children,
  params,
}: RecipeLayoutProps) {
  const { next, last } = await getRecipeNextAndPrev(params.id);
  return (
    <>
      <nav className="bg-slate-600 flex flex-row gap-2">
        {last !== undefined && (
          <Link href={`/recipe/${last._id}`}>prev recipe</Link>
        )}
        <Link href="/">home</Link>
        {next !== undefined && (
          <Link href={`/recipe/${next._id}`}>next recipe</Link>
        )}
      </nav>
      {children}
    </>
  );
}
