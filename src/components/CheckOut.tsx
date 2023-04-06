/**
 * 파일 역할: 장바구니 컴포넌트
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.23.
 */

import CheckOutItem from "./CheckOutItem";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, clear } from "../state/slice/cartSlice";
import { toggle } from "../state/slice/checkOutSlice";
import { notify } from "../utils/toast";
import { Toaster } from "react-hot-toast";
import { HiOutlineChevronLeft, HiTrash } from "react-icons/hi";

const CheckOut = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector(cartSelector);

  const clearCartHandler = () => {
    dispatch(clear());
    notify("장바구니가 초기화 되었습니다");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 top-0 z-30 h-screen w-full bg-transparentBlack"
    >
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
                <div className="mt-12 flex items-center justify-between">
                  <span>
                    합계{" "}
                    <span className="font-bold">
                      {total.toLocaleString("ko-KR")}원
                    </span>
                  </span>
                  <HiTrash
                    onClick={clearCartHandler}
                    className="cursor-pointer text-2xl"
                  />
                </div>
                <div className="mt-8 cursor-pointer bg-black p-3 text-center text-white">
                  Check Out
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </motion.div>
  );
};

export default CheckOut;
