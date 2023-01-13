import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "./slices/errorSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    error: errorReducer,
    loading: loadingReducer,
  },
});
