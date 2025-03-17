import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./utils/authSlice";
import cartReducer from "./utils/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
