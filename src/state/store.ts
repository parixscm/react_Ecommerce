import { configureStore } from "@reduxjs/toolkit";
import checkOutReducer from "./slice/checkOutSlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    checkOut: checkOutReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
