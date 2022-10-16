import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./featured/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
