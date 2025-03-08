import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useState } from "react";
import { data } from "../Data/data";

const baseImageUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

const FoodItems = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5; // Number of visible items
  const shiftValue = 3; // Number of items to shift per click
  const maxIndex = data.length - itemsPerPage; // Prevent overflow

  const handleNext = () => {
    if (startIndex + shiftValue <= maxIndex) {
      setStartIndex(startIndex + shiftValue);
    } else {
      setStartIndex(maxIndex); // Stop at last page
    }
  };

  const handlePrev = () => {
    if (startIndex - shiftValue >= 0) {
      setStartIndex(startIndex - shiftValue);
    } else {
      setStartIndex(0); // Stop at first page
    }
  };

  return (
    <div className="flex p-1 flex-col h-full w-[80%] gap-5 border-b-2 border-b-gray-200">
      <div className="flex justify-between">
        <p className="p-2 text-2xl font-semibold">Pratyush, what's on your mind?</p>
        <div className="flex items-center text-3xl gap-2">
          <FaRegArrowAltCircleLeft
            onClick={handlePrev}
            className={`cursor-pointer hover:text-orange-600 ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
          <FaRegArrowAltCircleRight
            onClick={handleNext}
            className={`cursor-pointer hover:text-orange-600 ${
              startIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </div>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)` }}
        >
          {data.map((e) => (
            <img
              key={e.id}
              className="h-42 w-40 m-4 cursor-pointer transition-transform hover:scale-105"
              src={`${baseImageUrl}${e.imageId}`}
              alt={e?.action.text || "Food Item"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
