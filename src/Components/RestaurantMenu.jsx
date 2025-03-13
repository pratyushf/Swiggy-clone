import { MdStars } from "react-icons/md";
import RestaurantDropdown from "./RestaurantDropdown";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [mainResData, setMainResData] = useState([]);
  const [dropdownData, setDropdownData] = useState([]);
  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=506982&catalog_qa=undefined"
    );

    const apiDataJson = await apiData.json();
    setMainResData(apiDataJson?.data?.cards[2]?.card?.card?.info);
    setDropdownData(
      apiDataJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };
  const {
    name,
    city,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    cuisines,
    areaName,
    sla,
  } = mainResData;

  return (
    <div className="w-full flex flex-col mt-20 justify-center items-center">
      <div className=" flex gap-3 flex-col p-4 w-3/5 h-fit  ">
        <p className=" text-sm text-gray-400 mb-3 ">
          Home/{city}/{name}
        </p>
        <p className=" ml-3 text-3xl font-bold">{name}</p>
        <div className=" w-[97%] gap-2 flex flex-col h-fit rounded-2xl p-4 m-3 border-2 border-gray-500 shadow-xl shadow-gray-400">
          <div className=" font-bold text-gray-700 flex gap-2 items-center text-xl">
            <MdStars className=" text-green-600" />
            <p>{avgRating}</p>
            <p>({totalRatingsString})</p>
            <p>:</p>
            <p>{costForTwoMessage}</p>
          </div>
          <p className=" underline text-orange-500 text-lg">
            {cuisines?.[0] || "Cuisine not available"}
          </p>
          <div className=" flex gap-3">
            <p className=" font-semibold">Outlet</p>
            <p>{areaName}</p>
          </div>
          <p className=" font-semibold">{sla?.slaString}</p>
        </div>
      </div>

      <div className="w-3/5">
        {dropdownData?.slice(1).map((filter, index) => (
          <RestaurantDropdown key={index} data={filter} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
