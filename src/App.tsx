import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { checkOutSelector } from "./state/slice/checkOutSlice";
import { cartSelector, total } from "./state/slice/cartSlice";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import CheckOut from "./components/CheckOut";
import ItemDetail from "./components/ItemDetail";

const Layout = () => {
  const { isOpen } = useSelector(checkOutSelector);
  return (
    <div>
      <Navbar />
      {isOpen && <CheckOut />}
      <Outlet />
    </div>
  );
};

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

  useEffect(() => {
    dispatch(total());
  }, [cartItems, dispatch]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
