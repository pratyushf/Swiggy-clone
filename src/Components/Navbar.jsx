import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginDropdown } from "../utils/authSlice";
import {
  IoSearch,
  IoBagSharp,
  IoHelpBuoyOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import swiggyLogo from "../assets/swiggy.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Get total number of items in the cart
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="fixed h-[9vh] z-50 top-0 left-0 w-full flex items-center bg-white shadow-md text-gray-800">
      <div className=" w-full flex items-center justify-center gap-9 p-4 md:p-5">
        {/* Logo */}
        <img src={swiggyLogo} className="h-10 cursor-pointer" alt="logo" />

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <IoClose
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <IoMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-9 items-center justify-center w-fit">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <p className="truncate cursor-pointer hover:text-gray-600">
            Login to select Address..
          </p>
          <p className="flex items-center gap-1.5 cursor-pointer hover:text-orange-500">
            <IoBagSharp className="text-2xl" /> Swiggy Corporate
          </p>
          <Link
            to="/search"
            className="flex items-center gap-1.5 cursor-pointer hover:text-orange-500"
          >
            <IoSearch className="text-2xl" /> Search
          </Link>
          <p className="flex items-center gap-1.5 cursor-pointer hover:text-orange-500">
            <BiSolidOffer className="text-2xl" /> Offers
          </p>
          <Link
            to="/support"
            className="flex items-center gap-1.5 cursor-pointer hover:text-orange-500"
          >
            <IoHelpBuoyOutline className="text-2xl" /> Help
          </Link>

          {/* Sign-in Dropdown */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative"
          >
            <p
              onClick={() => dispatch(toggleLoginDropdown())}
              className="flex items-center gap-1.5 cursor-pointer hover:text-orange-500"
            >
              <FaUserLarge className="text-xl" /> Sign In
            </p>
            {isDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border shadow-lg flex flex-col border-t-2 border-t-orange-500">
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

          {/* Cart */}
          <Link
            to="/checkout"
            className="relative flex items-center gap-1.5 cursor-pointer hover:text-orange-500"
          >
            <FaShoppingCart className="text-2xl" /> Cart
            {cartItemCount > 0 && (
              <span className="absolute top-[-5px] right-[-12px] bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 left-0 w-3/4 h-full bg-white shadow-md flex flex-col items-start p-6 transition-transform duration-300">
            <IoClose
              className="text-3xl self-end cursor-pointer mb-4"
              onClick={() => setMenuOpen(false)}
            />
            <Link
              to="/"
              className="py-3 text-lg font-semibold hover:text-orange-500 w-full"
            >
              Home
            </Link>
            <p className="py-3 text-lg font-semibold cursor-pointer hover:text-gray-600 w-full">
              Login to select Address..
            </p>
            <p className="py-3 flex items-center text-lg font-semibold gap-2 cursor-pointer hover:text-orange-500 w-full">
              <IoBagSharp className="text-2xl" /> Swiggy Corporate
            </p>
            <Link
              to="/search"
              className="py-3 flex items-center text-lg font-semibold gap-2 cursor-pointer hover:text-orange-500 w-full"
            >
              <IoSearch className="text-2xl" /> Search
            </Link>
            <p className="py-3 flex items-center text-lg font-semibold gap-2 cursor-pointer hover:text-orange-500 w-full">
              <BiSolidOffer className="text-2xl" /> Offers
            </p>
            <Link
              to="/support"
              className="py-3 flex items-center text-lg font-semibold gap-2 cursor-pointer hover:text-orange-500 w-full"
            >
              <IoHelpBuoyOutline className="text-2xl" /> Help
            </Link>
            <Link
              to="/checkout"
              className="relative py-3 flex items-center text-lg font-semibold gap-2 cursor-pointer hover:text-orange-500 w-full"
            >
              <FaShoppingCart className="text-2xl" /> Cart
              {cartItemCount > 0 && (
                <span className="absolute top-1 right-4 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
