"use client";

import React from "react";

export default function page() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        let json = JSON.stringify(new FormData(e.currentTarget));
        console.log(json);
      }}
    >
      <label>
        Title
        <input type="text" name="title" id="title" />
      </label>

      <label>
        Description
        <input type="text" name="description" id="description" />
      </label>

      <label>
        Ingredients
        <input type="text" name="ingredients" id="ingredients" />
      </label>

      <label>
        Category
        <input type="text" name="category" id="category" />
      </label>

      <label>
        Image
        <input type="text" name="image" id="image" />
      </label>
      <button>add to server</button>
      {/*
  ingredients: IngredientType[];
  category: String[];
  */}
    </form>
  );
}
