/**
 * 파일 역할: 상품 상세 페이지
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.23.
 */

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { add } from "../state/slice/cartSlice";
import { toggle } from "../state/slice/checkOutSlice";
import { Toaster } from "react-hot-toast";
import { notify } from "../utils/toast";

const ItemDetail = () => {
  const dispatch = useDispatch();
  const item = useLocation().state.item;
  const { name, price, image } = item;

  const addToCartHandler = () => {
    dispatch(add(item));
    dispatch(toggle());
    notify("상품이 장바구니에 담겼습니다");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="items-center justify-center lg:flex">
        <img
          alt="item"
          src={image}
          className="w-[25rem] md:w-[30rem] lg:w-[35rem]"
        />
        <div>
          <div className="mb-4 text-3xl font-extrabold">{name}</div>
          <div className="mb-4">{price.toLocaleString("ko-KR")} 원</div>
          <p className="mb-4 max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            suscipit corporis doloribus impedit excepturi rerum quo voluptatem
            expedita, perspiciatis unde libero numquam soluta aliquid sunt.
          </p>
          <button
            onClick={addToCartHandler}
            className="bg-black p-3 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ItemDetail;
