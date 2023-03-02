import { configureStore } from "@reduxjs/toolkit";
import  AnimalListSlice  from "./slices/AnimalListSlice";
import  SpeciesSlice  from "./slices/SpeciesSlice";

export const store = configureStore({
  reducer: {
    animalsList: AnimalListSlice,
    species: SpeciesSlice,
  },
});
