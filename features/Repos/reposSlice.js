import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
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

export const loadRepoDetail = createAsyncThunk(
  "repos/loadRepoDetail",
  async ({ username, repo }, thunkApi) => {
    try {
      const response = await get(
        `https://api.github.com/repos/${username}/${repo}`
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
    repoDetail: {},
    loading: "idle",
    error: null,
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
    [loadRepoDetail.pending]: (state) => {
      state.repoDetail = {};
      state.loading = "loading";
    },
    [loadRepoDetail.fulfilled]: (state, action) => {
      state.repoDetail = action.payload;
      state.loading = "loaded";
    },
    [loadRepoDetail.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.payload.error;
    },
    [HYDRATE]: (state, action) => action.payload.repos,
  },
});

export const selectRepos = createSelector(
  (state) => ({
    repos: state.repos.repos,
    repoDetail: state.repos.repoDetail,
    error: state.repos.error,
    loading: state.repos.loading,
  }),
  (state) => state
);

export default reposSlice.reducer;
