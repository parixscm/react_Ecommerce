# **Jason's 미니 쇼핑몰 🛒**

👉🏻 https://jason-mall.vercel.app

## **🎯 개발 목표**

- Redux-Toolkit 상태관리 라이브러리를 사용해 쇼핑몰 장바구니 기능을 구현하고자 했습니다.
- 반응형 디자인을 적용한 이커머스 유형의 웹 페이지를 구현해보고 싶었습니다.

<br />

## **🕹 사용한 기술**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

<br />

## **👨🏻‍🏫 Advanced Feature**

- 상품 추가/삭제 및 상품 수량 수정 기능을 구현했습니다.

<br />

## **💻 코드**

```
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

```
