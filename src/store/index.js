import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import newsSlice from "./slices/news";
import seasonSlice from "./slices/season";
import eventsSlice from "./slices/events";
import gamesSlice from "./slices/games";
import comicsSlice from "./slices/comics";
import blogSlice from "./slices/blog";
import videosSlice from "./slices/videos";

export const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsSlice,
    seasons: seasonSlice,
    events: eventsSlice,
    games: gamesSlice,
    comics: comicsSlice,
    blog: blogSlice,
    videos: videosSlice,
  },
});
