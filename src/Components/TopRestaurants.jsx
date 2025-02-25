import RestaurantCard from "./RestaurantCard";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const TopRestaurants = () => {
  const arr2 = [1, 3, 4, 5];

  return (
    <div className="w-[80%] m-3 p-1">
      <div className=" flex justify-between">
        <p className=" p-2 text-2xl font-semibold ">
          Top Restaurants in Nashik
        </p>
        <div className=" flex items-center text-3xl gap-2">
          <FaRegArrowAltCircleLeft />
          <FaRegArrowAltCircleRight />
        </div>
      </div>
      <div className=" flex justify-around">
        {arr2.map((e) => {
          return <RestaurantCard key={e} />;
        })}
      </div>
    </div>
  );
};

export default TopRestaurants;
