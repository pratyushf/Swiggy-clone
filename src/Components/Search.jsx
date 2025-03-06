import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const searchArray = ["A", "B", "D", "E", "F"];
  return (
    <div className="flex flex-col mt-10 h-[92vh] w-full items-center">
      <div className="w-2/5 h-2/3 p-7">
        <div className="relative">
          <input
            placeholder="Search for Restaurant and Food"
            className=" border border-orange-500 bg-white w-full h-10 placeholder:text-gray-700 p-3 pr-10"
            type="text"
          />
          <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <div className="flex flex-col mt-4">
          <p className="font-semibold">Recent Searches</p>
          <div className="flex flex-col p-2 rounded-md">
            {searchArray.map((unit) => (
              <div key={unit} className="flex items-center p-1 gap-2">
                <IoSearchOutline></IoSearchOutline>
                <p  className="text-gray-800">
                  {unit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Popular Cuisines</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
