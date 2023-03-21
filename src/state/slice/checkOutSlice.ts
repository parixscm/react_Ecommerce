import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CheckOutState {
  isOpen: boolean;
}

const initialState: CheckOutState = { isOpen: false };

const checkOutSlice = createSlice({
  name: "checkOut",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { toggle } = checkOutSlice.actions;
export const checkOutSelector = (state: RootState) => state.checkOut;

export default checkOutSlice.reducer;
