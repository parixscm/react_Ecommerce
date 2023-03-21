import { createSlice } from "@reduxjs/toolkit";

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
export default checkOutSlice.reducer;
