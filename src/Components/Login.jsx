/* eslint-disable react/prop-types */

import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Login = ({ loginDropdown, setLoginDropdown }) => {
  const [showRegister, setShowRegister] = useState(false);

  const clickLogin = () => {
    setLoginDropdown(!loginDropdown);
    console.log(loginDropdown);
  };

  return (
    <div className=" flex flex-col h-screen p-10 gap-3 w-2/3">
      <RxCross2
        onClick={clickLogin}
        className="text-2xl cursor-pointer"
      ></RxCross2>
      <div className=" flex gap-25">
        <div className=" flex flex-col w-1/2">
          <p className="font-semibold text-3xl mb-1">
            {showRegister ? "Register" : "Login"}
          </p>

          <div className=" block">
            {" "}
            or{" "}
            <p
              onClick={() => setShowRegister(!showRegister)}
              className=" text-sm text-orange-600 cursor-pointer"
            >
              {showRegister ? "login to your account" : "create an account"}
            </p>{" "}
          </div>
        </div>
        <div className="">
          <img
            className=" h-30"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="Login_Logo"
          />
        </div>
      </div>
      {showRegister ? (
        <>
          <input
            className=" p-5 border-gray-300 border h-15 placeholder:text-sm placeholder:p-1 placeholder:font-semibold"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className=" p-5 border-gray-300 border h-15 placeholder:text-sm placeholder:p-1 placeholder:font-semibold"
            type="text"
            placeholder="Name"
          />
          <input
            className=" p-5 border-gray-300 border h-15 placeholder:text-sm placeholder:p-1 placeholder:font-semibold"
            type="email"
            placeholder="Email"
          />
        </>
      ) : (
        <input
          className=" p-5 border-gray-300 border h-15 placeholder:text-sm placeholder:p-1 placeholder:font-semibold"
          type="text"
          placeholder="Phone Number"
        />
      )}
      <p className=" text-blue-500 font-medium">{showRegister ? "Have a referral code?" : ""}</p>
      <button className=" bg-orange-600 h-12 text-white cursor-pointer">
        {showRegister ? "Register" : "Login"}
      </button>

      <p className=" text-sm">
        By clicking on {showRegister ? "Register" : "Login"}, I accept the Terms
        & Conditions & Privacy Policy.
      </p>
    </div>
  );
};

export default Login;
