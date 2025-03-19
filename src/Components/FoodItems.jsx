import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import Redux hook
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import ShimmerForFI from "./ShimmerForFI";

const baseImageUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

const FoodItems = () => {
  const [listOfFood, setListOfFood] = useState([]);
  const [heading, setHeading] = useState("");

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
    setHeading(apiDataJson.data.cards[0].card.card.header.title);
    setListOfFood(apiDataJson.data.cards[0].card.card.imageGridCards.info);
  };

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const shiftValue = 3;
  const maxIndex = listOfFood.length - itemsPerPage;

  const handleNext = () => {
    if (startIndex + shiftValue <= maxIndex) {
      setStartIndex(startIndex + shiftValue);
    } else {
      setStartIndex(maxIndex);
    }
  };

  const handlePrev = () => {
    if (startIndex - shiftValue >= 0) {
      setStartIndex(startIndex - shiftValue);
    } else {
      setStartIndex(0);
    }
  };

  return (
    <div className="mt-20 flex p-1 flex-col h-full w-[90%] md:w-[80%] gap-5 border-b-2 border-b-gray-200">
      <div className="flex justify-between">
        <p className="p-2 text-xl md:text-2xl font-semibold">
          {listOfFood.length === 0 ? "Loading..." : heading}
        </p>
        <div className="flex items-center text-2xl md:text-3xl gap-2">
          <FaRegArrowAltCircleLeft
            onClick={startIndex === 0 ? null : handlePrev}
            className={`cursor-pointer hover:text-orange-600 ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed pointer-events-none"
                : ""
            }`}
          />
          <FaRegArrowAltCircleRight
            onClick={startIndex >= maxIndex ? null : handleNext}
            className={`cursor-pointer hover:text-orange-600 ${
              startIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed pointer-events-none"
                : ""
            }`}
          />
        </div>
      </div>

      {listOfFood.length === 0 ? (
        <ShimmerForFI length={7}></ShimmerForFI>
      ) : (
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {listOfFood.map((e) => (
              <img
                key={e.id}
                className="h-32 w-32 md:h-42 md:w-40 m-2 md:m-4 cursor-pointer transition-transform hover:scale-105"
                src={`${baseImageUrl}${e.imageId}`}
                alt={e?.action.text || "Food Item"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodItems;
