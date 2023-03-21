import { useSelector } from "react-redux";
import CheckOut from "./components/CheckOut";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import { checkOutSelector } from "./state/slice/checkOutSlice";

function App() {
  const { isOpen } = useSelector(checkOutSelector);

  return (
    <div>
      <Navbar />
      <ShoppingContainer />
      {isOpen && <CheckOut />}
    </div>
  );
}

export default App;
