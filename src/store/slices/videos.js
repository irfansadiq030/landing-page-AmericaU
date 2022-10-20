import { createSelector, createSlice } from "@reduxjs/toolkit"

const videosSlice = createSlice({
    name: "videos",
    initialState: [],
    reducers: {
        loadVideos(state, action) {
            return action.payload;
        },
        unloadVideos(state, action) {
            return [];
        },

    }
});

export const { loadVideos, unloadVideos } = videosSlice.actions;

const videos = state => state.videos
export const getVideos = createSelector(videos, (videos) => videos);

export default videosSlice.reducer