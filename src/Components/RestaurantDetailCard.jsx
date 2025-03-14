/* eslint-disable react/prop-types */
import { PiTriangleFill } from "react-icons/pi";
import { FaCircleStop } from "react-icons/fa6";
import { MdStars, MdLocalOffer } from "react-icons/md";

const RestaurantDetailCard = ({ data }) => {
  const {
    name,
    price,
    description,
    imageId,
    offerTags = [],
    ratings,
    itemAttribute,
  } = data.card.info || {};

  const offer =
    offerTags.length > 0
      ? `${offerTags[0]?.title} ${offerTags[0]?.subTitle || ""}`
      : "No offers available";
  const ratingCount =
    ratings?.aggregatedRating?.ratingCountV2 || "No ratings yet";

  return (
    <div className="flex w-full h-fit p-2 gap-2 border-b border-gray-200">
      {/* Left Section */}
      <div className="flex flex-col gap-2 p-2 w-[70%]">
        {itemAttribute.vegClassifier === "NONVEG" ? (
          <PiTriangleFill className="text-red-600" />
        ) : (
          <FaCircleStop className="text-green-600" />
        )}
        <p className="text-gray-700 text-xl font-semibold">
          {name || "Unnamed Dish"}
        </p>

        {/* Price & Offer Section */}
        <div className="flex items-center">
          <p className="mr-4">Rs. {price ? price / 100 : "N/A"}</p>
          {offerTags.length > 0 && (
            <>
              <MdLocalOffer className="text-green-600" />
              <p>{offer}</p>
            </>
          )}
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-1">
          <MdStars className="text-green-600" />
          <p>({ratingCount})</p>
        </div>

        <p className="text-gray-600">
          {description || "No description available."}
        </p>
      </div>

      {/* Right Section */}
      <div className="w-[30%] flex flex-col items-end justify-center">
        <img
          className="h-32 w-40 object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
          alt={name || "Food item"}
        />
        <button className=" mt-2 cursor-pointer border font-semibold mr-4 bg-white w-30 h-10 rounded-xl text-green-500 hover:bg-green-500 hover:text-white transition-all">
          Add
        </button>
      </div>
    </div>
  );
};

export default RestaurantDetailCard;
