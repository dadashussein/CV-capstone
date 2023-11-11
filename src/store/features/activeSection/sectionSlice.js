import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: "about",
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = sectionSlice.actions;

export default sectionSlice.reducer;
