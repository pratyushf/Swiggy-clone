import "./App.css";
import Navbar from "./Components/Navbar";
import FoodItems from "./Components/FoodItems";
import TopRestaurants from "./Components/TopRestaurants";

function App() {
  return (
    <div className="w-screen m-0 p-0 bg-#ffffff flex flex-col ">
      <Navbar />
      <div className="justify-center items-center flex h-2/5">
        <FoodItems />
      </div>
      {/* <RestaurantCard/> */}
      <div className=" flex justify-center items-center">
        <TopRestaurants />
      </div>
    </div>
  );
}

export default App;
