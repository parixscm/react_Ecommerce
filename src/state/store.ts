import { configureStore } from "@reduxjs/toolkit";
import checkOutReducer from "./slice/checkOutSlice";

export const store = configureStore({
  reducer: {
    checkOut: checkOutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
