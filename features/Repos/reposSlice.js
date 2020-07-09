import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { get } from "api/apiHelper";

export const loadRepos = createAsyncThunk(
  "repos/loadRepos",
  async (username, thunkApi) => {
    try {
      const response = await get(
        `https://api.github.com/users/${username}/repos`
      );
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue({
        error: error?.response?.data?.message,
      });
    }
  }
);

const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: {
    [loadRepos.pending]: (state) => {
      state.repos = [];
      state.loading = "loading";
    },
    [loadRepos.fulfilled]: (state, action) => {
      state.repos = action.payload;
      state.loading = "loaded";
    },
    [loadRepos.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.payload.error;
    },
  },
});

export const selectRepos = createSelector(
  (state) => ({
    repos: state.repos.repos,
    error: state.repos.error,
    loading: state.repos.loading,
  }),
  (state) => state
);

export default reposSlice.reducer;
