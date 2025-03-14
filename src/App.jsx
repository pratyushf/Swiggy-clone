import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Help from "./Components/Help";
import Search from "./Components/Search";
import RestaurantMenu from "./Components/RestaurantMenu";

const RootLayout = () => (
  <div>
    <Navbar />
    <Outlet /> 
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "restaurantMenu/:resId", element: <RestaurantMenu /> }, 
      { path: "checkout", element: <Cart /> },
      { path: "support", element: <Help /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

const App = () => {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
