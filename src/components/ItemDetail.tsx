import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { items } from "../cartItems";
import { add } from "../state/slice/cartSlice";
import { toggle } from "../state/slice/checkOutSlice";

const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = items.find((item) => item.id === +id!);
  const { name, price, image } = item!;

  const addToCartHandler = () => {
    dispatch(add(item));
    dispatch(toggle());
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
          <div className="mb-4">{price} 원</div>
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
    </div>
  );
};

export default ItemDetail;
