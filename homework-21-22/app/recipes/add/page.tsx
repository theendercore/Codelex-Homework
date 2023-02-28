import React from "react";

export default function page() {
  return (
    <form>
      <label>
        Title
        <input type="text" name="title" id="title" />
      </label>

      <label>
        Description
        <input type="text" name="description" id="description" />
      </label>

      <select name="category" id="category">
        <option value="cake">cake</option>
        <option value="pie">pie</option>
      </select>
      <label>
        Image
        <input type="text" name="image" id="image" />
      </label>
      {/*
  ingredients: IngredientType[];
  category: String[];
  */}
    </form>
  );
}
