import { useDispatch } from "react-redux";
import { add } from "../state/slice/cartSlice";
import { Link } from "react-router-dom";

type Props = {
  item: CartItemType;
};

const ShoppingItem = ({ item }: Props) => {
  const { id, image, price, name } = item;
  const dispatch = useDispatch();

  return (
    <div>
      {/* TODO: 데이터 넘기는 법 찾기 */}
      <Link to={`/itemDetail/${id}`}>
        <div className="flex h-[400px] items-center justify-center bg-grey">
          <img alt="item" src={image} className="w-[200px]" />
        </div>
      </Link>

      <div className="mt-6 flex items-center justify-between px-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="mb-3 text-xl font-bold">{name}</span>
            <span className="text-base font-semibold">{price}원</span>
          </div>
          <button
            onClick={() => dispatch(add(item))}
            className="rounded-md bg-grey p-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
