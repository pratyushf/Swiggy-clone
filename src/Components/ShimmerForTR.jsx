/* eslint-disable react/prop-types */
const ShimmerForTR = ({ length = 8 }) => {
    return (
      <div className="grid grid-cols-4 gap-4 h-full w-full m-2">
        {Array.from({ length }).map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-gray-200 h-60 w-72 rounded-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent before:animate-shimmer"
          />
        ))}
      </div>
    );
  };
  
  export default ShimmerForTR;
  
