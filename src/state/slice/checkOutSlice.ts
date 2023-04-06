/**
 * 파일 역할: 장바구니 토글 슬라이스
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.23.
 */

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
    // 장바구니 열고 닫기
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { toggle } = checkOutSlice.actions;
export const checkOutSelector = (state: RootState) => state.checkOut;

export default checkOutSlice.reducer;
