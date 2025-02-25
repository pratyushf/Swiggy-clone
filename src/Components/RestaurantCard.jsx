import { MdStars } from "react-icons/md";

const RestaurantCard = () => {
  const rating = 4.3;
  const time = "25-30 min";

  return (
    <div className=" flex flex-col p-3 w-fit cursor-pointer transition delay-50 duration-300 hover:-translate-y-1 hover:scale-90">
      <div className="relative">
        <img
          className=" h-60 rounded-xl"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/5144f5fa-40d0-471a-a88b-ec2478e5835d_236456.jpg"
          alt="restaurantImg"
        />
        <p className=" absolute bottom-3 text-lg left-1 font-extrabold text-white bg-orange-600 px-1 rounded-lg">
          50% OFF UPTO ₹100
        </p>
      </div>
      <div className=" flex flex-col">
        <p className=" font-bold text-xl">Pizza Hut</p>
        <div className=" flex items-center gap-1">
          <MdStars className=" text-green-500 text-xl" />
          <p>{rating}</p>
          <p>.</p>
          <p>{time}</p>
        </div>
        <p className=" text-lg text-gray-400">Pizzas</p>
        <p className=" text-lg text-gray-400">Location</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
