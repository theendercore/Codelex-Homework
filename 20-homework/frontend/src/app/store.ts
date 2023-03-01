import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../components/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});


