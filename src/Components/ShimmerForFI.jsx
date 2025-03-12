/* eslint-disable react/prop-types */
const ShimmerForFI = ({ length }) => {
    return (
      <div className="overflow-hidden relative w-full">
        <div className="flex transition-transform duration-500 ease-in-out">
          {Array.from({ length }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-gray-200 h-40 w-40 m-4 cursor-pointer transition-transform hover:scale-105 rounded-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent before:animate-shimmer"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ShimmerForFI;
  
  
