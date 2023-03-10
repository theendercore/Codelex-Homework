import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/types";
import { AnimalData } from "../types";

const initialState: AnimalData[] = [];

export const AnimalListSlice = createSlice({
  name: "AnimalList",
  initialState,
  reducers: {
    addOne: (state, action: PayloadAction<AnimalData>) => {
      return [...state, action.payload];
    },
    addMultiple: (state, action: PayloadAction<AnimalData[]>) => {
      return [...state, ...action.payload];
    },
    loadFromStorage: (state, action: PayloadAction<AnimalData[]>) => {
      return [...action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    edit: (state, action: PayloadAction<AnimalData>) => {
      let newState = state.filter((item) => item.id !== action.payload.id);
      newState.push(action.payload);
      return newState;
    },
  },
});

export const { addOne, addMultiple, loadFromStorage, remove } =
  AnimalListSlice.actions;

export const selectAnimals = (state: RootState) => state.animalsList;

export default AnimalListSlice.reducer;
