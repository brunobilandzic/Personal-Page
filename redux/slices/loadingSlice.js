import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    clearLoading: () => initialState,
  },
});

export const { setLoading, clearLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
