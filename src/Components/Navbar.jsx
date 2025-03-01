/* eslint-disable react/prop-types */
import { useState } from "react";
import swiggyLogo from "../assets/swiggy.svg";
import { IoSearch, IoBagSharp, IoHelpBuoyOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ loginDropdown, setLoginDropdown }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const clickLogin = () => {
    setLoginDropdown(!loginDropdown);
    console.log(loginDropdown);
  };

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <div className="w-full p-5 flex justify-center gap-9 items-center shadow-gray-400 shadow bg-white text-gray-800">
      <img src={swiggyLogo} className="h-10 cursor-pointer" alt="logo" />
      <p className="font-medium line cursor-pointer hover:text-orange-600 py-2">
        Home
      </p>
      <p className="w-1/5 truncate cursor-pointer hover:text-gray-600">
        Shanker Nagar, Savarkar Nagar, Nashik, Maharashtra 422013, India
      </p>
      <p className="font-medium line flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <IoBagSharp className="text-2xl" /> Swiggy Corporate
      </p>
      <p className="font-medium line flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <IoSearch className="text-2xl" /> Search
      </p>
      <p className="font-medium line flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <BiSolidOffer className="text-2xl" /> Offers
      </p>
      <p className="font-medium line flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <IoHelpBuoyOutline className="text-2xl" /> Help
      </p>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative py-2"
      >
        <p
          onClick={clickLogin}
          className="font-medium line flex items-center gap-1.5 cursor-pointer hover:text-orange-600"
        >
          <FaUserLarge className="text-xl" /> Sign In
        </p>
        <div
          className={`absolute left-1/2 -translate-x-[45%] mt-2 w-60 bg-white border shadow-lg flex flex-col items-start border-t-2 border-t-orange-600 transition-all delay-100 duration-200 ease-in-out ${
            isDropdownOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <p className="block w-full px-4 py-2 m-1 cursor-pointer hover:font-semibold">
            Profile
          </p>
          <p className="block w-full px-4 py-2 m-1 cursor-pointer hover:font-semibold">
            Orders
          </p>
          <p className="block w-full px-4 py-2 m-1 cursor-pointer hover:font-semibold">
            Swiggy One
          </p>
          <p className="block w-full px-4 py-2 m-1 cursor-pointer hover:font-semibold">
            Favourites
          </p>
          <p className="block w-full px-4 py-2 m-1 cursor-pointer hover:font-semibold">
            Logout
          </p>
        </div>
      </div>

      <p className="font-medium line flex items-center gap-1.5 cursor-pointer hover:text-orange-600 py-2">
        <FaShoppingCart className="text-2xl" /> Cart
      </p>
    </div>
  );
};

export default Navbar;
