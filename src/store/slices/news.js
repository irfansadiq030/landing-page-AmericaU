import { createSelector, createSlice } from "@reduxjs/toolkit"

const newsSlice = createSlice({
    name: "news",
    initialState: [],
    reducers: {
        loadNews(state, action) {
            return action.payload;
        },
        unloadNews(state, action) {
            return [];
        },

    }
});

export const { loadNews, unloadNews } = newsSlice.actions;

const news = state => state.news
export const getNews = createSelector(news, (news) => news);

export default newsSlice.reducer