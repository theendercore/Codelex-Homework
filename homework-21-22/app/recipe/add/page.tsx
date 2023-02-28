"use client";

import { useState } from "react";
import { IdLessRecipe, IdLessRecipeSchema } from "@/lib/util/types";

import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
const { API_URL } = process.env;

type Data = { state: boolean; message?: string };

function ifBadData(data: Data, setData: Function) {
  if (!data.state) return;
  setTimeout(() => setData({ state: false }), 5000);
  return (
    <span className="text-xl">
      Make sure your inputs are valid!
      <br />
      {data.message}
    </span>
  );
}

export default function page() {
  const [recipe, setRecipe] = useState<IdLessRecipe>({
    title: "",
    description: "",
    ingredients: [],
    categories: [],
    image: "",
  });
  const [badData, setBadData] = useState<Data>({ state: false });

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        let x = {
          ...recipe,
          ingredients: recipe.ingredients.map((i) => i.trim()),
          categories: recipe.categories.map((i) => i.trim()),
        };
        try {
          const result = IdLessRecipeSchema.parse(x);
          axios
            .post<IdLessRecipe>(`http://localhost:3000/api/recipes`, result)
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          setBadData({
            state: true,
            message: JSON.parse(error.message)[0].message,
          });
        }
      }}
    >
      {ifBadData(badData, setBadData)}
      <label>
        Title
        <input
          type="text"
          name="title"
          id="title"
          value={recipe.title}
          onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          required
        />
      </label>

      <label>
        Description
        <input
          type="text"
          name="description"
          id="description"
          value={recipe.description}
          onChange={(e) =>
            setRecipe({ ...recipe, description: e.target.value })
          }
          required
        />
      </label>

      <label className="flex flex-col">
        Ingredients
        <span className="text-sm">Separate the category with commas</span>
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          value={recipe.ingredients}
          onChange={(e) =>
            setRecipe({
              ...recipe,
              ingredients: e.target.value.split(","),
            })
          }
          required
        />
      </label>

      <label className="flex flex-col">
        Category
        <span className="text-sm">Separate the category with commas</span>
        <input
          type="text"
          name="category"
          id="category"
          value={recipe.categories}
          onChange={(e) =>
            setRecipe({
              ...recipe,
              categories: e.target.value.split(","),
            })
          }
          required
        />
      </label>

      <label>
        Image
        <input
          type="text"
          name="image"
          id="image"
          value={recipe.image}
          onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          required
        />
      </label>
      <button>add to server</button>
    </form>
  );
}
