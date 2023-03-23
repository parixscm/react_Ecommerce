import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../state/slice/cartSlice";
import { HiX } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  cartItem: CartItemType;
};

const CheckOutItem = ({ cartItem }: Props) => {
  const { id, image, name, price, amount } = cartItem;
  const dispatch = useDispatch();

  const notifyRemoveItem = () =>
    toast.success("상품을 장바구니에서 삭제했습니다", {
      duration: 2500,
      position: "bottom-center",
    });

  const removeFromCartHandler = () => {
    dispatch(remove(cartItem));
    notifyRemoveItem();
  };

  return (
    <div className="mb-6 flex items-center justify-between border border-solid border-glass p-4">
      <div className="flex items-center gap-4">
        <img alt="item" src={image} className="h-20 w-20 object-cover" />
      </div>
      <div className="flex max-w-[6.8rem] flex-col items-start">
        <div className="text-base">{name}</div>
        <div className="text-sm">{price.toLocaleString("ko-KR")}원</div>
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
          onClick={removeFromCartHandler}
          className="cursor-pointer text-xl"
        />
        <div className="font-bold">
          {(price * amount!).toLocaleString("ko-KR")}원
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CheckOutItem;
