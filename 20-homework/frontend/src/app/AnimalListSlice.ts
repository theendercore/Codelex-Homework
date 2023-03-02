import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  RootState } from "../app/types";
import { AnimalData } from "./types";

const initialState: AnimalData[] = [];

export const AnimalListSlice = createSlice({
  name: "animalList",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AnimalData>) => {
      state = [...state, action.payload];
    },
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((item) => item.id !== action.payload);
    }
  },
});

export const { add, remove } = AnimalListSlice.actions;

export const selectAnimals = (state: RootState) => state.animalsList;

export default AnimalListSlice.reducer;
