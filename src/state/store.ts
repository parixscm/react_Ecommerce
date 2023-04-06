/**
 * 파일 역할: 상태 관리 store
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.23.
 */

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
