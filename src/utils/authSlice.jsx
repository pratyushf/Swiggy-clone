import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDropdown: false,
  isLoggedIn: null,
  isRegistered: false,
  user: null,
  city: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginDropdown: (state) => {
      state.loginDropdown = !state.loginDropdown;
    },
    closeLoginDropdown: (state) => {
      state.loginDropdown = false;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setRegister: (state, action) => {
      state.isRegistered = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  toggleLoginDropdown,
  closeLoginDropdown,
  setLoggedIn,
  setUserData,
  setRegister
} = authSlice.actions;
export default authSlice.reducer;
