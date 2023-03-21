type Props = {
  item: CartItemType;
};

const ShoppingItem = ({ item }: Props) => {
  const { id, image, price, name } = item;
  return (
    <div>
      <div className="flex h-[400px] items-center justify-center bg-grey">
        <img alt="item" src={image} className="w-[200px]" />
      </div>

      <div className="mt-6 flex items-center justify-between px-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="mb-3 text-sm font-bold">{name}</span>
            <span className="text-lg font-bold">{price} 원</span>
          </div>
          <button className="rounded-md bg-grey p-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
