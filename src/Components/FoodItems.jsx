import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const FoodItems = () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex p-1 flex-col h-full w-[80%] gap-5 border-b-2 border-b-gray-200">
      <div className=" flex justify-between">
        <p className=" p-2 text-2xl font-semibold ">
          Pratyush whats on your mind ?
        </p>
        <div className=" flex items-center text-3xl gap-2">
          <FaRegArrowAltCircleLeft />
          <FaRegArrowAltCircleRight />
        </div>
      </div>
      <div className="flex">
        {arr1.map((e) => {
          return (
            <img
              key={e}
              className="h-40 w-40 m-4 cursor-pointer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
              alt="foodItems"
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodItems;
