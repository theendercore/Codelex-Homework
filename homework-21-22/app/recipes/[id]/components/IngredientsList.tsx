import { IngredientType } from "@/lib/util/types";
import Ingredient from "./Ingredient";

type IngredientsListProps = {
  ingredients: IngredientType[];
};

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient._id} ingredient={ingredient} />
      ))}
    </div>
  );
}
