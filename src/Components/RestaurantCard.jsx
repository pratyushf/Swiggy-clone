/* eslint-disable react/prop-types */
import { MdStars } from "react-icons/md";

const RestaurantCard = ({ restaurant }) => {
  if (!restaurant || !restaurant.info) return null; // Handle undefined data safely


  const {
    name,
    avgRating,
    cuisines,
    sla,
    cloudinaryImageId,
    areaName,
    aggregatedDiscountInfoV3,
  } = restaurant.info;

  return (
    <div className=" w-fit flex flex-col h-fit p-3 cursor-pointer transition delay-50 duration-300 hover:-translate-y-1 hover:scale-90">
      <div className="relative">
        <img
          className="h-60 rounded-xl w-70"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
        <p className="w-70 absolute bottom-0.5 rounded-b-xl text-2xl px-1 pl-3 font-extrabold text-white bg-[rgb(4,2,2)]/60">
          {aggregatedDiscountInfoV3
            ? `${aggregatedDiscountInfoV3.header} ${
                aggregatedDiscountInfoV3.subHeader || ""
              }`
            : ""}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-xl">
          {name?.length > 23 ? name.slice(0, 23)+"..." : name}
        </p>
        <div className="flex items-center gap-1">
          <MdStars className="text-green-500 text-xl" />
          <p>{avgRating || "N/A"}</p>
          <p>.</p>
          <p>{sla?.deliveryTime ? `${sla.deliveryTime} min` : "N/A"}</p>
        </div>
        <p className="text-lg text-gray-400">
          {cuisines?.join(", ").length > 30
            ? cuisines.join(", ").slice(0, 30) + "..."
            : cuisines.join(", ") || "N/A"}
        </p>

        <p className="text-lg text-gray-400">{areaName || "N/A"}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
