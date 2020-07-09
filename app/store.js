import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "features/Repos/reposSlice";

export default configureStore({
  reducer: {
    repos: reposReducer,
  },
  devTools: true,
});
