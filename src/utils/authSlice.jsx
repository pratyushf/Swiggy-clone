import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDropdown: false,
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
  },
});

export const { toggleLoginDropdown, closeLoginDropdown } = authSlice.actions;
export default authSlice.reducer;
