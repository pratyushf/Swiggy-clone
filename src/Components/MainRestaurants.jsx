import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerForTR from "./ShimmerForTR";

const MainRestaurants = () => {
  const [mainResData, setMainResData] = useState([]);
  const [header, setHeader] = useState("Loading");

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {

    const apiUrl = encodeURIComponent(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const apiData = await fetch(
      `https://cors-resolvepf.netlify.app/.netlify/functions/cors-proxy?url=${apiUrl}`
    );

    const apiDataJson = await apiData.json();
    setMainResData(
      apiDataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setHeader(apiDataJson?.data?.cards[2]?.card?.card?.title);
  };

  return (
    <div className="w-[80%] m-2">
      <div className=" flex flex-col ">
        <p className=" p-2 text-2xl font-semibold ">{header}</p>
        <div className=" flex items-center text-lg gap-3 ml-8">
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            Filter
          </button>
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            Sort By
          </button>
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            Fast Delivery
          </button>
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            New on Swiggy
          </button>
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            Pure Veg
          </button>
        </div>
      </div>
      {mainResData.length == 0 ? (
        <ShimmerForTR length={8}></ShimmerForTR>
      ) : (
        <div className="gap-2 flex flex-wrap p-4">
          {mainResData.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.info.id}
                restaurant={restaurant}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainRestaurants;
