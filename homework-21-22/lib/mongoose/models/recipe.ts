import { Schema, model } from "mongoose";
import { RecipeType } from "../../util/types";

const StringReq = { type: String, required: true };

const RecipeSchema = new Schema<RecipeType>({
  title: StringReq,
  description: StringReq,
  ingredients: [StringReq],
  categories: [StringReq],
  image: StringReq,
});

const RecipeModel = model<RecipeType>("RecipeModel", RecipeSchema);

export default RecipeModel;
