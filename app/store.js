import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import reposReducer from "features/Repos/reposSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      repos: reposReducer,
    },
    devTools: process.env.NODE_ENV === "development",
  });

export const wrapper = createWrapper(makeStore);
