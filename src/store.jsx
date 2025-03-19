import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./utils/authSlice";
import cartReducer from "./utils/cartSlice";
import locationReducer from "./utils/locationSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    location:locationReducer
  },
});

export default store;
