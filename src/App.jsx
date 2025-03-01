import "./App.css";
import Navbar from "./Components/Navbar";
import FoodItems from "./Components/FoodItems";
import TopRestaurants from "./Components/TopRestaurants";
import MainRestaurants from "./Components/MainRestaurants";
import Footer from "./Components/Footer";
import { useState } from "react";
import Login from "./Components/Login";

function App() {
  const [loginDropdown, setLoginDropdown] = useState(false);

  return (
    <div>
      <div className="w-screen m-0 p-0 bg-white flex flex-col">
        <Navbar
          loginDropdown={loginDropdown}
          setLoginDropdown={setLoginDropdown}
        />
        <div
          onClick={() => {
            setLoginDropdown(false);
          }}
        >
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
      </div>

      <div
        className={` bg-white flex w-2/5 shadow-black shadow-2xl ml-auto fixed top-0 right-0 h-full z-50 transition-transform ${
          loginDropdown ? "transform-none" : "transform translate-x-full"
        }`}
      >
        {loginDropdown ? (
          <Login
            loginDropdown={loginDropdown}
            setLoginDropdown={setLoginDropdown}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
