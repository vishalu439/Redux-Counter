import { configureStore } from "@reduxjs/toolkit";
 import CounterReducer from "./CounterSlice";

const store=configureStore({
reducer:{
counter1:CounterReducer


}

})
export default store;