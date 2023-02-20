import { createSelector, createSlice } from "@reduxjs/toolkit";

const seasonSlice = createSlice({
  name: "seasons",
  initialState: {},
  reducers: {
    loadSeasons(state, action) {
      return { ...state, ...action.payload };
    },
    unloadSeasons(state, action) {
      return {};
    },
    loadStories(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { loadSeasons, unloadSeasons, loadStories } = seasonSlice.actions;

const seasons = (state) => state.seasons;
export const getSeasons = createSelector(seasons, (seasons) => seasons);

export default seasonSlice.reducer;
