/**
 * 파일 역할: 상품 모음 컴포넌트
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.23.
 */

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
