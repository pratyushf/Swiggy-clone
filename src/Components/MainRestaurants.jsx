import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import ShimmerForTR from "./ShimmerForTR";
import { setCity } from "../utils/locationSlice";

const MainRestaurants = () => {
  const [mainResData, setMainResData] = useState([]);
  const [header, setHeader] = useState("Loading");
  const dispatch = useDispatch();

  // Get user's location from Redux
  const latitude = useSelector((state) => state.location.latitude);
  const longitude = useSelector((state) => state.location.longitude);

  useEffect(() => {
    if (latitude && longitude) {
      fetchResData(latitude, longitude);
    }
  }, [latitude, longitude]);

  const fetchResData = async (lat, lng) => {
    const apiUrl = encodeURIComponent(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
  
    const apiData = await fetch(
      `https://cors-resolvepf.netlify.app/.netlify/functions/cors-proxy?url=${apiUrl}`
    );
  
    const apiDataJson = await apiData.json();
  
    const fetchedHeader = apiDataJson?.data?.cards[2]?.card?.card?.title;
    const fetchedRestaurants =
      apiDataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
  
    setMainResData(fetchedRestaurants);
    setHeader(fetchedHeader); // Set header first
    
    if (fetchedHeader) {
      dispatch(setCity(fetchedHeader.slice(41))); // Dispatch AFTER setting header
    }
  };
  

  return (
    <div className="w-[80%] m-2">
      <div className="flex flex-col">
        <p className="p-2 text-2xl font-semibold">{header}</p>
        {/* <div className="flex items-center text-lg gap-3 ml-8">
          <button className="cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl">
            Filter
          </button>
          <button className="cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl">
            Sort By
          </button>
          <button className="cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl">
            Fast Delivery
          </button>
          <button className="cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl">
            New on Swiggy
          </button>
          <button className="cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl">
            Pure Veg
          </button>
        </div> */}
      </div>
      {mainResData.length === 0 ? (
        <ShimmerForTR length={8} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {mainResData.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainRestaurants;
