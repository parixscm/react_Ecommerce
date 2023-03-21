import { HiOutlineChevronLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggle } from "../state/slice/checkOutSlice";
const CheckOut = () => {
  const dispatch = useDispatch();

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
            <div>Shopping Bag (0)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
