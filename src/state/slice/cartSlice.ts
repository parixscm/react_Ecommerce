/**
 * 파일 역할: 장바구니 슬라이스
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.23.
 */

import { notify } from "./../../utils/toast";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
  cartItems: CartItemType[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 상품 추가
    add: (state, action) => {
      state.amount += 1;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      cartItem
        ? (cartItem.amount! += 1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    // 상품 수량 증가
    increase: (state, action) => {
      state.amount += 1;
      const itemIdx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIdx].amount! += 1;
      state.total += action.payload.price;
    },
    // 상품 수량 감소
    decrease: (state, action) => {
      const itemIdx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIdx].amount! > 0 &&
        state.cartItems[itemIdx].amount!-- &&
        state.amount--;
      if (state.cartItems[itemIdx].amount === 0) {
        notify("상품을 장바구니에서 삭제했습니다");
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      }
    },
    // 장바구니 내 특정 상품 삭제
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.amount -= action.payload.amount;
    },
    // 장바구니 내 상품 총 수량 계산
    total: (state) => {
      let total = 0;
      state.cartItems.forEach(
        (cartItem) => (total += cartItem.amount! * cartItem.price)
      );
      state.total = total;
    },
    // 상품 초기화
    clear: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
  },
});

export const { add, increase, decrease, remove, total, clear } =
  cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;
