import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Help from "./Components/Help";
import Search from "./Components/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Homepage />
      </div>
    ),
  },
  {
    path: "/checkout",
    element: (
      <div>
        <Navbar />
        <Cart />
      </div>
    ),
  },
  {
    path: "/support",
    element: (
      <div>
        <Navbar />
        <Help />
      </div>
    ),
  },
  {
    path: "/search",
    element: (
      <div>
        <Navbar />
        <Search />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <div className=" w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
