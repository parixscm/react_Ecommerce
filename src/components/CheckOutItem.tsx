import { HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../state/slice/cartSlice";

type Props = {
  cartItem: CartItemType;
};

const CheckOutItem = ({ cartItem }: Props) => {
  const { id, image, name, price, amount } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="mb-6 flex items-center justify-between border border-solid border-glass p-4">
      <div className="flex items-center gap-4">
        <img alt="item" src={image} className="h-20 w-20 object-cover" />
      </div>
      <div className="flex max-w-[6.8rem] flex-col items-start">
        <div>{name}</div>
        <div className="mt-2 flex items-center gap-4">
          <button
            onClick={() => dispatch(decrease(cartItem))}
            className="h-7 w-7 rounded-full bg-black text-white"
          >
            -
          </button>
          <div>{amount}</div>
          <button
            onClick={() => dispatch(increase(cartItem))}
            className="h-7 w-7 rounded-full bg-black text-white"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <HiX
          onClick={() => dispatch(remove(cartItem))}
          className="cursor-pointer text-xl"
        />
        <div>{price * amount!} ₩</div>
      </div>
    </div>
  );
};

export default CheckOutItem;
