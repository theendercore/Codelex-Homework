import { RecipeType } from "@/lib/util/types";
import Image from "next/image";
import Link from "next/link";
type RecipeProps = {
  recipe: RecipeType;
};

export default function Recipe({ recipe }: RecipeProps) {
  return (
    <Link href={"/recipe/" + recipe.id}>
      <Image src={recipe.image} alt={recipe.title} width="300" height="300" />
      <span>{recipe.title}</span>
    </Link>
  );
}
