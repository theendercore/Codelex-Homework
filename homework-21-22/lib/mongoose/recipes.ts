import { RecipeType } from '../util/types';
export async function getRecipes() {
  try {
    return {
      recipes: [
        {
          id: "1",
          title: "yes",
          descriptions: "words",
          ingredients: [
            {
              _id: "wowmgic",
              name: "pickles",
            },
            {
              _id: "ansdjnd",
              name: "tomato",
            },
          ],
          category: ["food", "food2"],
          image: "https://picsum.photos/id/3/300",
        },
        {
          id: "2",
          title: "no not at alType",
          descriptions: "nnoonno",
          ingredients: [
            {
              _id: "asdasd",
              name: "pickles",
            },
          ],
          category: ["food", "food2"],
          image: "https://picsum.photos/id/4/300",
        },
      ] as RecipeType[],
    };
  } catch (error) {
    return { error: error, message: "error ocurred" };
  }
}
