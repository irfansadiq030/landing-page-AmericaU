import { createSelector, createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
    name: "blog",
    initialState: [],
    reducers: {
        loadBlog(state, action) {
            return action.payload;
        },
        unloadBlog(state, action) {
            return [];
        },

    }
});

export const { loadBlog, unloadBlog } = blogSlice.actions;

const blog = state => state.blog
export const getBlog = createSelector(blog, (comics) => comics);

export default blogSlice.reducer