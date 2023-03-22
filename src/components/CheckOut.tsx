import { HiOutlineChevronLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../state/slice/cartSlice";
import { toggle } from "../state/slice/checkOutSlice";
import CheckOutItem from "./CheckOutItem";
const CheckOut = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector(cartSelector);

  return (
    <div className="fixed left-0 top-0 z-30 h-screen w-full bg-transparentBlack">
      <div className="h-full min-w-[15rem] overflow-y-auto bg-grey sm:w-[40rem]">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div
              onClick={() => dispatch(toggle())}
              className="flex cursor-pointer items-center"
            >
              <HiOutlineChevronLeft />
              <span className="select-none text-[.95rem] uppercase">
                Continue Shopping
              </span>
            </div>
            <div>Shopping Bag ({amount})</div>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="text-center text-2xl uppercase">
                Your cart is empty
              </div>
            ) : (
              <>
                {cartItems.map((cartItem) => (
                  <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <div className="mt-12 flex justify-between">
                  <span className="font-extrabold">합계 ${total} 원</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
