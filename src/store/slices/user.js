import { createSelector, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        login(state, action) {
            return action.payload;
        },
        logout(state, action) {
            return null;
        },
        updateUser(state, action) {
            return { ...state, ...action.payload }
        }
    }
});

export const { login, logout, updateUser } = userSlice.actions;

const user = state => state.user
export const getUser = createSelector(user, (user) => user);

export default userSlice.reducer