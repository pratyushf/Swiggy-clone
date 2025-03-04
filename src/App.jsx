import Navbar from "./Components/Navbar";
import FoodItems from "./Components/FoodItems";
import TopRestaurants from "./Components/TopRestaurants";
import MainRestaurants from "./Components/MainRestaurants";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginDropdown } from "./authSlice";

function App() {
  const loginDropdown = useSelector((state) => state.auth.loginDropdown);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-screen m-0 p-0 bg-white flex flex-col">
        <Navbar />
        <div onClick={() => dispatch(closeLoginDropdown())}>
          <div className="flex justify-center items-center h-2/5">
            <FoodItems />
          </div>

          <div className="flex justify-center items-center">
            <TopRestaurants />
          </div>

          <div className="flex justify-center items-center">
            <MainRestaurants />
          </div>

          <Footer />
        </div>

        <div
          className={`fixed top-0 right-0 w-2/5 h-full bg-white shadow-2xl z-50 transition-transform ${
            loginDropdown ? "transform-none" : "transform translate-x-full"
          }`}
        >
          {loginDropdown && <Login />}
        </div>
      </div>
    </div>
  );
}

export default App;
