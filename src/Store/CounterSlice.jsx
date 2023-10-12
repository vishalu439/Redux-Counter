import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    countmemory: [],
  },
  reducers: {
    increment: (state, action) => ({
      ...state,
      count: state.count + parseInt(action.payload.increment),
      countmemory: [...state.countmemory, action.payload],
    }),
    decrement: (state, action) => ({
      ...state,
      count: state.count - parseInt(action.payload.decrement),
      countmemory: [...state.countmemory, action.payload],
    }),
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
