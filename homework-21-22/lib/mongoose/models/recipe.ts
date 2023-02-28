import { Schema, model } from "mongoose";
import { RecipeType } from "../../util/types";

const RecipeSchema = new Schema<RecipeType>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    categories: [{ type: String, required: true }],
    image: { type: String, required: true },
  }
);

const RecipeModel = model<RecipeType>("RecipeModel", RecipeSchema);

export default RecipeModel;
