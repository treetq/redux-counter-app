import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme Slice",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
