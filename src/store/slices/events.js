import { createSelector, createSlice } from "@reduxjs/toolkit"

const eventsSlice = createSlice({
    name: "events",
    initialState: [],
    reducers: {
        loadEvents(state, action) {
            return action.payload;
        },
        unloadEvents(state, action) {
            return [];
        },

    }
});

export const { loadEvents, unloadEvents } = eventsSlice.actions;

const events = state => state.events
export const getEvents = createSelector(events, (events) => events);

export default eventsSlice.reducer