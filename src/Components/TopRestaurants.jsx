import RestaurantCard from "./RestaurantCard";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector
import ShimmerForTR from "./ShimmerForTR";

const ITEMS_PER_PAGE = 4; // Number of restaurants to show at a time

const TopRestaurants = () => {
  const [topResData, setTopResData] = useState([]);
  const [heading, setHeading] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get location from Redux
  const latitude = useSelector((state) => state.location.latitude);
  const longitude = useSelector((state) => state.location.longitude);

  useEffect(() => {
    if (latitude && longitude) {
      fetchResData(latitude, longitude);
    }
  }, [latitude, longitude]);

  const fetchResData = async (lat, lng) => {
    const apiUrl = encodeURIComponent(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`
    );

    const apiData = await fetch(
      `https://cors-resolvepf.netlify.app/.netlify/functions/cors-proxy?url=${apiUrl}`
    );

    const apiDataJson = await apiData.json();
    setHeading(apiDataJson.data.cards[1].card.card.header.title);
    setTopResData(
      apiDataJson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const nextPage = () => {
    if (currentIndex + ITEMS_PER_PAGE < topResData.length) {
      setCurrentIndex(currentIndex + ITEMS_PER_PAGE);
    }
  };

  const prevPage = () => {
    if (currentIndex - ITEMS_PER_PAGE >= 0) {
      setCurrentIndex(currentIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="w-[80%] m-3 p-1">
      <div className="flex justify-between">
        <p className="p-2 text-2xl font-semibold">
          {topResData.length === 0 ? "Loading..." : heading}
        </p>
        <div className="flex items-center text-3xl gap-2">
          <FaRegArrowAltCircleLeft
            className={`cursor-pointer hover:text-orange-600 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={prevPage}
          />
          <FaRegArrowAltCircleRight
            className={`cursor-pointer hover:text-orange-600 ${
              currentIndex + ITEMS_PER_PAGE >= topResData.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={nextPage}
          />
        </div>
      </div>
      {topResData.length === 0 ? (
        <ShimmerForTR length={4} />
      ) : (
        <div className="flex justify-between flex-wrap">
          {topResData
            .slice(currentIndex, currentIndex + ITEMS_PER_PAGE)
            .map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
            ))}
        </div>
      )}
    </div>
  );
};

export default TopRestaurants;
