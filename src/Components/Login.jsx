import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginDropdown} from "../utils/authSlice";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !formData.email ||
      !formData.password ||
      (showRegister && (!formData.name || !formData.phone))
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const endpoint = showRegister
      ? "http://localhost:5000/api/users/register"
      : "http://localhost:5000/api/users/login";

    const payload = showRegister
      ? {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }
      : { email: formData.email, password: formData.password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert(showRegister ? "Registration successful!" : "Login successful!");
        localStorage.setItem("token", data.token); // Store JWT
        dispatch(toggleLoginDropdown()); // Close modal
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong!");
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
          className="h-[120px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="Login_Logo"
        />
      </div>

      {showRegister && (
        <input
          className="p-2 border border-gray-300 h-12"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
      )}
      <input
        className="p-2 border border-gray-300 h-12"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      {showRegister && (
        <input
          className="p-2 border border-gray-300 h-12"
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
      )}
      <input
        className="p-2 border border-gray-300 h-12"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button
        className="bg-orange-600 h-12 text-white cursor-pointer mt-2"
        onClick={handleSubmit}
      >
        {showRegister ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Login;
