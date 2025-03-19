import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

const Search = () => {
  const [resInput, setResInput] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const navigate = useNavigate();
  const baseImageUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

  // Get location from Redux store
  const latitude = useSelector((state) => state.location.latitude);
  const longitude = useSelector((state) => state.location.longitude);

  useEffect(() => {
    const fetchResData = async () => {
      if (!resInput || !latitude || !longitude) {
        setSearchRes([]);
        return;
      }

      try {
        const apiUrl = encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${latitude}&lng=${longitude}&str=${resInput}&trackingId=null&includeIMItem=true`
        );

        const apiData = await fetch(
          `https://cors-resolvepf.netlify.app/.netlify/functions/cors-proxy?url=${apiUrl}`
        );

        const apiDataJson = await apiData.json();
        setSearchRes(apiDataJson?.data?.suggestions || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchResData();
  }, [resInput, latitude, longitude]);

  return (
    <div className="flex flex-col mt-20 h-[85vh] w-full items-center">
      <div className="w-full md:w-2/5 h-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="relative">
          <input
            placeholder="Search for Restaurant and Food"
            className="border border-gray-300 bg-white w-full h-12 placeholder:text-gray-600 p-3 pr-12 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm"
            type="text"
            value={resInput}
            onChange={(e) => setResInput(e.target.value)}
          />
          <IoSearchOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        {searchRes.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold text-lg">Search Results</p>
            <div className="flex flex-col w-full p-2 rounded-md border border-gray-200 shadow-sm bg-gray-50 mt-2">
              {searchRes.map((unit) => {
                let primaryRestaurantId = null;
                try {
                  if (unit.metadata) {
                    const parsedMetadata = JSON.parse(unit.metadata);
                    primaryRestaurantId =
                      parsedMetadata?.data?.primaryRestaurantId;
                  }
                } catch (error) {
                  console.error("Error parsing metadata:", error);
                }

                return (
                  <div
                    onClick={() =>
                      navigate(`/restaurantMenu/${primaryRestaurantId}`)
                    }
                    key={unit.restaurantId || primaryRestaurantId}
                    className="flex flex-col sm:flex-row items-center justify-between p-3 hover:bg-orange-100 transition duration-200 rounded-md cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="rounded-xl h-16 w-16 sm:h-20 sm:w-20 cursor-pointer transition-transform hover:scale-105"
                        src={`${baseImageUrl}${unit.cloudinaryId}`}
                        alt={unit?.text || "Food Item"}
                      />
                      <div className="flex flex-col text-center sm:text-left">
                        <p className="text-gray-800 font-medium">
                          {unit?.text}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {unit?.subCategory}
                        </p>
                      </div>
                    </div>
                    <IoSearchOutline className="text-gray-600 hidden sm:block" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Popular Cuisines */}
        <div className="mt-6">
          <p className="font-semibold text-lg">Popular Cuisines</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
            {["Indian", "Chinese", "Italian", "Mexican"].map((cuisine) => (
              <span
                key={cuisine}
                className="px-4 py-2 text-sm bg-orange-100 text-orange-700 rounded-full cursor-pointer hover:bg-orange-200 transition text-center"
              >
                {cuisine}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
