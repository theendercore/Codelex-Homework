import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../components/Counter/counterSlice";
import { AnimalListSlice } from "./AnimalListSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    animalsList: AnimalListSlice.reducer,
  }
});


