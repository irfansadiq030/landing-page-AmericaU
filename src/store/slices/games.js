import { createSelector, createSlice } from "@reduxjs/toolkit"

const gamesSlice = createSlice({
    name: "games",
    initialState: [],
    reducers: {
        loadGames(state, action) {
            return action.payload;
        },
        unloadGames(state, action) {
            return [];
        },

    }
});

export const { loadGames, unloadGames } = gamesSlice.actions;

const games = state => state.games
export const getGames = createSelector(games, (games) => games);

export default gamesSlice.reducer