import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../state/slice/cartSlice";
import { toggle } from "../state/slice/checkOutSlice";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { amount } = useSelector(cartSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <header
      className={`${
        isScrolled && "bg-grey shadow-lg"
      } fixed top-0 left-0 z-20 w-full`}
    >
      <div className="container mx-auto flex items-center justify-between px-2 py-4">
        <Link to="/">
          <span className="text-xl font-bold">Jason's</span>
        </Link>
        <div
          onClick={() => dispatch(toggle())}
          className="relative cursor-pointer"
        >
          <BiShoppingBag className="text-3xl opacity-80" />
          <div className="absolute right-[-3px] bottom-[-3px] z-10 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
            {amount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
