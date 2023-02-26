import { IngredientType } from "@/util/types";
import React from "react";

export default function Ingredient({ ingredient }: { ingredient: IngredientType }) {
  return <div>
    <h3>{ingredient.name}</h3>
  </div>;
}
