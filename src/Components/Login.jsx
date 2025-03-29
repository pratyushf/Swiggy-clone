import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleLoginDropdown,
  closeLoginDropdown,
  setLoggedIn,
  setUserData,
  setRegister
} from "../utils/authSlice";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRegistered = useSelector((state) => state.auth.isRegistered);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(closeLoginDropdown());
    }
  }, [isLoggedIn, dispatch]);

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogin = async () => {
    setErrorMessage("");
    if (!loginData.email || !loginData.password) {
      setErrorMessage("All fields are required.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(
          data.message || "Invalid credentials. Please try again."
        );
        return;
      }
      localStorage.setItem("token", data.token);
      dispatch(setLoggedIn(true));
      dispatch(setUserData(data.user));
      setTimeout(() => dispatch(toggleLoginDropdown()), 1000);
    } catch (error) {
      setErrorMessage("Something went wrong! Please try again.");
    }
  };

  const handleRegister = async () => {
    setErrorMessage("");
    if (
      !registerData.name ||
      !registerData.email ||
      !registerData.phone ||
      !registerData.password
    ) {
      setErrorMessage("All fields are required.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(
          data.message || "Registration failed. Please try again."
        );
        return;
      }
      dispatch(setRegister(true))
      dispatch(closeLoginDropdown());
    } catch (error) {
      setErrorMessage("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="flex flex-col h-screen p-10 gap-3 w-2/3">
      <RxCross2
        onClick={() => dispatch(toggleLoginDropdown())}
        className="text-2xl cursor-pointer"
      />
      <div className="flex gap-10">
        <div className="flex flex-col w-1/2">
          <p className="font-semibold text-3xl mb-1">
            {isRegistering ? "Register" : "Login"}
          </p>
          <p
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-sm text-orange-600 cursor-pointer"
          >
            {isRegistering ? "Login to your account" : "Create an account"}
          </p>
        </div>
        <img
          className="h-[120px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="Login_Logo"
        />
      </div>

      {isRegistering ? (
        <>
          <input
            className="p-2 border border-gray-300 h-12"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => handleChange(e, "register")}
          />
          <input
            className="p-2 border border-gray-300 h-12"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e, "register")}
          />
          <input
            className="p-2 border border-gray-300 h-12"
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={(e) => handleChange(e, "register")}
          />
          <input
            className="p-2 border border-gray-300 h-12"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e, "register")}
            autoComplete="off"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
          <button
            className="bg-orange-600 h-12 text-white cursor-pointer mt-2"
            onClick={handleRegister}
          >
            Register
          </button>
        </>
      ) : (
        <>
          <input
            className="p-2 border border-gray-300 h-12"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e, "login")}
          />
          <input
            className="p-2 border border-gray-300 h-12"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e, "login")}
            autoComplete="off"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
          <button
            className="bg-orange-600 h-12 text-white cursor-pointer mt-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
