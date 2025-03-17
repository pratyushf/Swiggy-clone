import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginDropdown } from "../utils/authSlice";
import { IoSearch, IoBagSharp, IoHelpBuoyOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import swiggyLogo from "../assets/swiggy.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Get total number of items in the cart
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="fixed z-50 top-0 left-0 h-[9vh] w-full p-5 flex justify-center gap-9 items-center shadow-gray-400 shadow-sm bg-white text-gray-800">
      <img src={swiggyLogo} className="h-10 cursor-pointer" alt="logo" />
      <Link
        to="/"
        className="font-medium cursor-pointer hover:text-orange-500 py-2"
      >
        Home
      </Link>
      <p className="w-1/5 truncate cursor-pointer hover:text-gray-600">
        Login to select Address..
      </p>
      <p className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-500 py-2">
        <IoBagSharp className="text-2xl" /> Swiggy Corporate
      </p>
      <Link
        to="/search"
        className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-500 py-2"
      >
        <IoSearch className="text-2xl" /> Search
      </Link>
      <p className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-500 py-2">
        <BiSolidOffer className="text-2xl" /> Offers
      </p>
      <Link
        to="/support"
        className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-500 py-2"
      >
        <IoHelpBuoyOutline className="text-2xl" /> Help
      </Link>

      {/* Sign-in Dropdown */}
      <div
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
        className="relative py-2"
      >
        <p
          onClick={() => dispatch(toggleLoginDropdown())}
          className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-500"
        >
          <FaUserLarge className="text-xl" /> Sign In
        </p>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="z-10 absolute left-1/2 -translate-x-[50%] mt-2 w-48 bg-white border shadow-lg flex flex-col border-t-2 border-t-orange-500">
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">
              Profile
            </p>
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">
              Orders
            </p>
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">
              Swiggy One
            </p>
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">
              Favourites
            </p>
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">
              Logout
            </p>
          </div>
        )}
      </div>

      {/* Cart with Item Count */}
      <Link
        to="/checkout"
        className="relative font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-500 py-2"
      >
        <FaShoppingCart className="text-2xl" />
        Cart
        {cartItemCount > 0 && (
          <span className="absolute top-[-5px] right-[-12px] bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartItemCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Navbar;
