import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
    incrementByAmount: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrementByAmount: (state, action) => {
      state.counter = state.counter - action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;
export const counterReduce = counterSlice.reducer;
