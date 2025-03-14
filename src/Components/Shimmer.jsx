const Shimmer = () => {
  return (
    <div className=" flex justify-center m-3">
      <div className="w-[60vw] h-[100vh] relative overflow-hidden bg-gray-100 rounded-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent before:animate-shimmer" />
    </div>
  );
};

export default Shimmer;
