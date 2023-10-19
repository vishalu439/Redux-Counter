import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";

const persistedState = localStorage.getItem("reduxState");
const preloadedState = persistedState ? JSON.parse(persistedState) : {};

const store = configureStore({
  reducer: {
    counter1: CounterReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
