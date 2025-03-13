/* eslint-disable react/prop-types */
import RestaurantDetailCard from "./RestaurantDetailCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const RestaurantDropdown = ({ data }) => {
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const { title, itemCards = [] } = data?.card?.card || {};

  return (
    <div className="border-t-2 border-gray-400 mt-4">
      <div className="flex w-full justify-between p-5">
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-xl font-semibold">({itemCards.length})</p>
        </div>
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          {dropdownOpen ? (
            <IoIosArrowUp className="text-3xl cursor-pointer" />
          ) : (
            <IoIosArrowDown className="text-3xl cursor-pointer" />
          )}
        </button>
      </div>
      {dropdownOpen && (
        <div>
          {itemCards.length > 0 ? (
            itemCards.map((data) => (
              <div key={data.card.info.id}>
                <RestaurantDetailCard data={data} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 p-4">No items available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantDropdown;
