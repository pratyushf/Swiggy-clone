import { useSelector, useDispatch } from "react-redux";
import { closeLoginDropdown } from "../utils/authSlice";
import { setLocation } from "../utils/locationSlice"; // Import action
import { useEffect } from "react";
import FoodItems from "./FoodItems";
import TopRestaurants from "./TopRestaurants";
import MainRestaurants from "./MainRestaurants";
import Footer from "./Footer";
import Login from "./Login";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Homepage() {
  const loginDropdown = useSelector((state) => state.auth.loginDropdown);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRegister = useSelector((state) => state.auth.isRegistered);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );
      },
      (error) => console.error("Error getting location:", error),
      { enableHighAccuracy: true }
    );
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      toast.success("Login successful!");
    } else {
      const wasLoggedIn = localStorage.getItem("wasLoggedIn");
      if (wasLoggedIn === "true") {
        toast.success("Logged out Successfully!");
      }
    }
    localStorage.setItem("wasLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    if (isRegister) {
      toast.success("Registration successful!");
    }
  }, [isRegister]);

  return (
    <div>
      <ToastContainer position="top-left" autoClose={3000} />
      <div className="w-screen m-0 p-0 bg-gray-50 flex flex-col">
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

export default Homepage;
