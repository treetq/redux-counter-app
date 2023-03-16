import { counterReduce } from "../slices/counterSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "../slices/themeSlice";

const combineReducer = combineReducers({
  theme: themeReducer,
  counter: counterReduce,
});

export const store = configureStore({
  reducer: combineReducer,
});
