export type RecipeType = {
  id: string;
  title: string;
  descriptions: string;
  ingredients: IngredientType[];
  category: String[];
  image: string;
};

export type IdLessRecipe = Omit<RecipeType, "id">;

export type IngredientType = {
  _id: string;
  name: string;
};
