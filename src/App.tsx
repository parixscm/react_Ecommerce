import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOut from "./components/CheckOut";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import { cartSelector, total } from "./state/slice/cartSlice";
import { checkOutSelector } from "./state/slice/checkOutSlice";

function App() {
  const { isOpen } = useSelector(checkOutSelector);
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, [cartItems, dispatch]);

  return (
    <div>
      <Navbar />
      <ShoppingContainer />
      {isOpen && <CheckOut />}
    </div>
  );
}

export default App;
