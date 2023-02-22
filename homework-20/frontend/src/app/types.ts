import { store } from "./store";

export interface CounterState {
  value: number;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
