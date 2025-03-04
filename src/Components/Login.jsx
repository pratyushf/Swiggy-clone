import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginDropdown } from "../authSlice";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-screen p-10 gap-3 w-2/3">
      <RxCross2
        onClick={() => dispatch(toggleLoginDropdown())}
        className="text-2xl cursor-pointer"
      />
      <div className="flex gap-25">
        <div className="flex flex-col w-1/2">
          <p className="font-semibold text-3xl mb-1">
            {showRegister ? "Register" : "Login"}
          </p>
          <p
            onClick={() => setShowRegister(!showRegister)}
            className="text-sm text-orange-600 cursor-pointer"
          >
            {showRegister ? "Login to your account" : "Create an account"}
          </p>
        </div>
        <img
          className="h-30"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="Login_Logo"
        />
      </div>
      {showRegister ? (
        <>
          <input className="p-5 border-gray-300 border h-15" type="text" placeholder="Phone Number" />
          <input className="p-5 border-gray-300 border h-15" type="text" placeholder="Name" />
          <input className="p-5 border-gray-300 border h-15" type="email" placeholder="Email" />
        </>
      ) : (
        <input className="p-5 border-gray-300 border h-15" type="text" placeholder="Phone Number" />
      )}
      <button className="bg-orange-600 h-12 text-white cursor-pointer">
        {showRegister ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Login;
