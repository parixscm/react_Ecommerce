import { useDispatch } from "react-redux";
import { add } from "../state/slice/cartSlice";
import { Link } from "react-router-dom";
import { toggle } from "../state/slice/checkOutSlice";
import { Toaster } from "react-hot-toast";
import { notify } from "../utils/toast";

type Props = {
  item: CartItemType;
};

const ShoppingItem = ({ item }: Props) => {
  const { id, image, price, name } = item;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(add(item));
    dispatch(toggle());
    notify("상품이 장바구니에 담겼습니다");
  };

  return (
    <div>
      <Link to={`/itemDetail/${id}`} state={{ item }}>
        <div className="flex h-[400px] items-center justify-center bg-grey">
          <img alt="item" src={image} className="w-[200px]" />
        </div>
      </Link>
      <div className="mt-6 flex items-center justify-between px-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="mb-3 text-xl font-bold">{name}</span>
            <span className="text-base font-semibold">
              {price.toLocaleString("ko-KR")}원
            </span>
          </div>
          <button onClick={addToCartHandler} className="rounded-md bg-grey p-3">
            Add to Cart
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ShoppingItem;
