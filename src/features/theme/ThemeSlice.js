import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "dark",
        nav: true,
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        toggleNav: (state) => {
            state.nav = state.nav === true ? false : true;
        },
    },
});

export const { toggleTheme, toggleNav } = themeSlice.actions;

export default themeSlice.reducer;
