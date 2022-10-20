import { createSelector, createSlice } from "@reduxjs/toolkit"

const seasonSlice = createSlice({
    name: "seasons",
    initialState: [],
    reducers: {
        loadSeasons(state, action) {
            return action.payload;
        },
        unloadSeasons(state, action) {
            return [];
        },

    }
});

export const { loadSeasons, unloadSeasons } = seasonSlice.actions;

const seasons = state => state.seasons
export const getSeasons = createSelector(seasons, (seasons) => seasons);

export default seasonSlice.reducer