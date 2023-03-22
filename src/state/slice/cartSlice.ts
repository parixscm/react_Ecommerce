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
    // TODO: ADD to Card 버튼을 누르면 리스트에서 삭제되도록 처리
    add: (state, action) => {
      state.amount += 1;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      cartItem
        ? (cartItem.amount! += 1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    increase: (state, action) => {
      state.amount += 1;
      const itemIdx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIdx].amount! += 1;
      state.total += action.payload.price;
    },
    // TODO: Checkout 개수가 0개면 cartItems 리스트에서 삭제
    decrease: (state, action) => {
      const itemIdx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIdx].amount! > 0 &&
        state.cartItems[itemIdx].amount!-- &&
        state.amount--;
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.amount -= action.payload.amount;
    },
    total: (state) => {
      let total = 0;
      state.cartItems.forEach(
        (cartItem) => (total += cartItem.amount! * cartItem.price)
      );
      state.total = total;
    },
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
