/**
 * 파일 역할: 프로젝트 루트 컴포넌트
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.23.
 */

import Header from "./components/Header";
import ShoppingContainer from "./components/ShoppingContainer";
import CheckOut from "./components/CheckOut";
import ItemDetail from "./components/ItemDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { checkOutSelector } from "./state/slice/checkOutSlice";
import { cartSelector, total } from "./state/slice/cartSlice";

// 프로젝트 최상단 경로에 위치할 레이아웃 컴포넌트
const Layout = () => {
  const { isOpen } = useSelector(checkOutSelector);

  return (
    <div>
      <Header />
      {isOpen && <CheckOut />}
      <Outlet />
    </div>
  );
};

// 프로젝트 라우팅 구조
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShoppingContainer />,
      },
      {
        path: "/itemDetail/:id",
        element: <ItemDetail />,
      },
    ],
  },
]);

function App() {
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();

  // cartItems 변경 시 장바구니 내 상품 총 수량을 다시 계산
  useEffect(() => {
    dispatch(total());
  }, [cartItems, dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
