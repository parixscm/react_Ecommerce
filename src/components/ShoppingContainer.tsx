import { items } from "../cartItems";
import ShoppingItem from "./ShoppingItem";

const ShoppingContainer = () => {
  return (
    <div className="section grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ShoppingItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShoppingContainer;
