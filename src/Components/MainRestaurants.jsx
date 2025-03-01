import RestaurantCard from "./RestaurantCard";

const MainRestaurants = () => {
  const arr2 = [1, 3, 4, 5, 6, 6, 6, 6, 6];

  return (
    <div className="w-[80%] m-3 p-1">
      <div className=" flex flex-col ">
        <p className=" p-2 text-2xl font-semibold ">
          Restaurants with online food delivery in Nashik
        </p>
        <div className=" flex items-center text-lg gap-3 ml-8">
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            Filter
          </button>
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            Sort By
          </button>
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            Fast Delivery
          </button>
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            New on Swiggy
          </button>
          <button className=" cursor-pointer border-gray-400 border hover:bg-orange-500 hover:text-gray-100 px-2 py-1 m-1 rounded-2xl ">
            Pure Veg
          </button>
        </div>
      </div>
      <div className="gap-3 flex flex-wrap p-5">
        {arr2.map((e) => {
          return <RestaurantCard key={e} />;
        })}
      </div>
    </div>
  );
};

export default MainRestaurants;
