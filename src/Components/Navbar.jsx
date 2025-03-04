import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginDropdown } from "../authSlice";
import { IoSearch, IoBagSharp, IoHelpBuoyOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import swiggyLogo from "../assets/swiggy.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full p-5 flex justify-center gap-9 items-center shadow-gray-400 shadow bg-white text-gray-800">
      <img src={swiggyLogo} className="h-10 cursor-pointer" alt="logo" />
      <p className="font-medium cursor-pointer hover:text-orange-600 py-2">Home</p>
      <p className="w-1/5 truncate cursor-pointer hover:text-gray-600">
        Shanker Nagar, Nashik, Maharashtra
      </p>
      <p className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <IoBagSharp className="text-2xl" /> Swiggy Corporate
      </p>
      <p className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <IoSearch className="text-2xl" /> Search
      </p>
      <p className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <BiSolidOffer className="text-2xl" /> Offers
      </p>
      <p className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <IoHelpBuoyOutline className="text-2xl" /> Help
      </p>

      {/* Sign-in Dropdown */}
      <div
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
        className="relative py-2"
      >
        <p
          onClick={() => dispatch(toggleLoginDropdown())}
          className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-600"
        >
          <FaUserLarge className="text-xl" /> Sign In
        </p>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-1/2 -translate-x-[50%] mt-2 w-48 bg-white border shadow-lg flex flex-col border-t-2 border-t-orange-600">
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">Profile</p>
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">Orders</p>
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">Swiggy One</p>
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">Favourites</p>
            <p className="px-4 py-2 cursor-pointer hover:font-semibold">Logout</p>
          </div>
        )}
      </div>

      <p className="font-medium flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <FaShoppingCart className="text-2xl" /> Cart
      </p>
    </div>
  );
};

export default Navbar;
