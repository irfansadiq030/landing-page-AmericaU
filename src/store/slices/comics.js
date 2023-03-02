import { createSelector, createSlice } from "@reduxjs/toolkit";

const comicsSlice = createSlice({
  name: "comics",
  initialState: { list: [], data: {} },
  reducers: {
    loadComics(state, action) {
      return action.payload;
    },
    unloadComics(state, action) {
      return [];
    },
  },
});

export const { loadComics, unloadComics } = comicsSlice.actions;

const comics = (state) => state.comics;

export const getComics = createSelector(comics, (comics) => comics);

export default comicsSlice.reducer;
