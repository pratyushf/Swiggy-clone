import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    latitude: null,
    longitude: null,
    city:null
  },
  reducers: {
    setLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setLocation,  setCity } = locationSlice.actions;
export default locationSlice.reducer;
