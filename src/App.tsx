import { useSelector } from "react-redux";
import CheckOut from "./components/CheckOut";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import { RootState } from "./state/store";

function App() {
  const { isOpen } = useSelector((state: RootState) => state.checkOut);

  return (
    <div>
      <Navbar />
      <ShoppingContainer />
      {isOpen && <CheckOut />}
    </div>
  );
}

export default App;
