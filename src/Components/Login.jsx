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

  const validateInput = (type) => {
    if (type === "login") {
      const { email, password } = loginData;
      if (!email || !password) return "All fields are required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format.";
      if (password.length < 6) return "Password must be at least 6 characters long.";
    } else {
      const { name, email, phone, password } = registerData;
      if (!name || !email || !phone || !password) return "All fields are required.";
      if (!/^[a-zA-Z ]+$/.test(name)) return "Name should contain only letters and spaces.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format.";
      if (!/^[0-9]{10}$/.test(phone)) return "Phone number must be exactly 10 digits.";
      if (password.length < 6) return "Password must be at least 6 characters long.";
    }
    return "";
  };

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogin = async () => {
    const error = validateInput("login");
    if (error) {
      setErrorMessage(error);
      return;
    }
    try {
      const response = await fetch("https://swiggy-backend-135h.onrender.com/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message || "Invalid credentials. Please try again.");
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
    const error = validateInput("register");
    if (error) {
      setErrorMessage(error);
      return;
    }
    try {
      const response = await fetch("https://swiggy-backend-135h.onrender.com/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message || "Registration failed. Please try again.");
        return;
      }
      dispatch(setRegister(true));
      dispatch(closeLoginDropdown());
    } catch (error) {
      setErrorMessage("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="flex flex-col h-screen p-10 gap-3 w-2/3">
      <RxCross2 onClick={() => dispatch(toggleLoginDropdown())} className="text-2xl cursor-pointer" />
      <div className="flex gap-10">
        <div className="flex flex-col w-1/2">
          <p className="font-semibold text-3xl mb-1">{isRegistering ? "Register" : "Login"}</p>
          <p onClick={() => setIsRegistering(!isRegistering)} className="text-sm text-orange-600 cursor-pointer">
            {isRegistering ? "Login to your account" : "Create an account"}
          </p>
        </div>
      </div>

      {isRegistering ? (
        <>
          <input className="p-2 border h-12" type="text" name="name" placeholder="Name" onChange={(e) => handleChange(e, "register")} />
          <input className="p-2 border h-12" type="email" name="email" placeholder="Email" onChange={(e) => handleChange(e, "register")} />
          <input className="p-2 border h-12" type="text" name="phone" placeholder="Phone Number" onChange={(e) => handleChange(e, "register")} />
          <input className="p-2 border h-12" type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e, "register")} autoComplete="off" />
          {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
          <button className="bg-orange-600 h-12 text-white cursor-pointer mt-2" onClick={handleRegister}>Register</button>
        </>
      ) : (
        <>
          <input className="p-2 border h-12" type="email" name="email" placeholder="Email" onChange={(e) => handleChange(e, "login")} />
          <input className="p-2 border h-12" type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e, "login")} autoComplete="off" />
          {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
          <button className="bg-orange-600 h-12 text-white cursor-pointer mt-2" onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
