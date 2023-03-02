import { store } from "./store";

export interface CounterState {
  value: number;
}

export type AnimalData = {
  id:number;
  name: string;
  image: string;
  species: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
