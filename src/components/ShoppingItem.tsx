/**
 * 파일 역할: 상품 컴포넌트
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.07.
 */

import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { add } from "../state/slice/cartSlice";
import { toggle } from "../state/slice/checkOutSlice";
import { Toaster } from "react-hot-toast";
import { notify } from "../utils/toast";

type ItemProps = {
  item: CartItemType;
};

const ShoppingItem = ({ item }: ItemProps) => {
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
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -8 }}
          className="group flex h-[400px] items-center justify-center rounded-lg bg-grey"
        >
          <img
            alt="item"
            src={image}
            className="w-[200px] group-hover:scale-105"
          />
        </motion.div>
      </Link>
      <div className="mt-6 flex items-center justify-between px-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="mb-3 text-xl font-bold">{name}</span>
            <span className="text-base font-semibold">
              {price.toLocaleString("ko-KR")}원
            </span>
          </div>
          <AddToCartButton addItemHandler={addToCartHandler} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ShoppingItem;
