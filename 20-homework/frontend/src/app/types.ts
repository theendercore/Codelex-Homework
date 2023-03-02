import { store } from "./store";

export interface CounterState {
  value: number;
}

export type AnimalData = {
  id: string;
  name: string;
  image: string;
  speciesId: string;
};

export type SpeciesData = {
  id: string;
  name: string;
};

export type StorageType = {
  animals: AnimalData[];
  species: SpeciesData[];
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
