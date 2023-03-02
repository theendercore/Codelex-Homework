import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/types";
import { SpeciesData } from '../types';

const initialState: SpeciesData[] = [];

export const SpeciesSlice = createSlice({
  name: "Species",
  initialState,
  reducers: {
    addOne: (state, action: PayloadAction<SpeciesData>) => {
      return [...state, action.payload];
    },
  },
});

export const { addOne } = SpeciesSlice.actions;

export const selectSpecies = (state: RootState) => state.species;

export default SpeciesSlice.reducer;
