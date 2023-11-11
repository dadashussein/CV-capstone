import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: [],
  isLoading: false,
  error: null,
};

export const getEducation = createAsyncThunk("getEducation", async () => {
  const response = await fetch("api/educations");
  const data = await response.json();
  return data;
});

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEducation.fulfilled, (state, action) => {
        state.education = action.payload;
        state.isLoading = false;
      })
      .addCase(getEducation.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default educationSlice.reducer;
