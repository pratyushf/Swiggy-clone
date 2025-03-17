/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseQuantity,
  decreaseQuantity,
} from "../utils/cartSlice";
import { PiTriangleFill } from "react-icons/pi";
import { FaCircleStop } from "react-icons/fa6";
import { MdStars, MdLocalOffer } from "react-icons/md";

const RestaurantDetailCard = ({ data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [quantity, setQuantity] = useState(0);

  const {
    name,
    description,
    imageId,
    offerTags = [],
    ratings,
    itemAttribute,
    variantsV2,
    addons,
  } = data.card.info || {};

  const offer =
    offerTags.length > 0
      ? `${offerTags[0]?.title} ${offerTags[0]?.subTitle || ""}`
      : "No offers available";
  const ratingCount =
    ratings?.aggregatedRating?.ratingCountV2 || "No ratings yet";

  const item = {
    id: imageId, // Use a unique ID
    name,
    price:
      (variantsV2?.variantGroups?.[0]?.variations?.[0]?.price ??
        variantsV2?.variantGroups?.[1]?.variations?.[0]?.price ??
        addons?.[0]?.choices?.[0]?.price/10) ||
      0, // Default to 0 if no price is found
    imageId,
    isVeg: itemAttribute?.vegClassifier !== "NONVEG",
  };

  const handleAddToCart = () => {
    dispatch(addItem(item));
    setQuantity(1);
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(item.id));
      setQuantity(quantity - 1);
    } else {
      setQuantity(0); // Reset local state
      dispatch(decreaseQuantity(item.id)); // Remove item when quantity is 0
    }
  };

  return (
    <div className="flex w-full h-fit p-2 gap-2 border-b border-gray-200">
      <div className="flex flex-col gap-2 p-2 w-[70%]">
        {itemAttribute?.vegClassifier === "NONVEG" ? (
          <PiTriangleFill className="text-red-600" />
        ) : (
          <FaCircleStop className="text-green-600" />
        )}
        <p className="text-gray-700 text-xl font-semibold">
          {name || "Unnamed Dish"}
        </p>

        <div className="flex items-center">
          <p className="mr-4">
            Rs.{" "}
            {variantsV2?.variantGroups?.[0]?.variations?.[0]?.price ||
              variantsV2?.variantGroups?.[1]?.variations?.[0]?.price ||
              addons?.[0]?.choices?.[0]?.price/10}
          </p>

          {offerTags.length > 0 && (
            <>
              <MdLocalOffer className="text-green-600" />
              <p>{offer}</p>
            </>
          )}
        </div>

        <div className="flex items-center gap-1">
          <MdStars className="text-green-600" />
          <p>({ratingCount})</p>
        </div>

        <p className="text-gray-600">
          {description || "No description available."}
        </p>
      </div>

      <div className="w-[30%] flex flex-col items-end justify-center">
        <img
          className="h-32 w-40 object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
          alt={name || "Food item"}
        />

        {quantity > 0 ? (
          <div className="flex w-40 items-center justify-around border border-green-500 rounded-lg px-3 py-1 mt-2">
            <button
              onClick={handleDecrease}
              className="cursor-pointer text-2xl font-bold text-green-500 px-2"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="cursor-pointer text-2xl font-bold text-green-500 px-2"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mt-2 cursor-pointer border font-semibold mr-4 bg-white w-30 h-10 rounded-xl text-green-500 hover:bg-green-500 hover:text-white transition-all"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetailCard;
