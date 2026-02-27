import { configureStore } from "@reduxjs/toolkit";
import announcementReducer from "../feature/keySlice.js";

// 🔥 Load from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("announcementState");
        if (serializedState === null) return undefined;
        return { announcement: JSON.parse(serializedState) };
    } catch (err) {
        return undefined;
    }
};

// 🔥 Save to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.announcement);
        localStorage.setItem("announcementState", serializedState);
    } catch { }
};

const store = configureStore({
    reducer: {
        announcement: announcementReducer,
    },
    preloadedState: loadState(),
});

// Subscribe to store changes
store.subscribe(() => {
    saveState(store.getState());
});

export default store;