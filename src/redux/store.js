import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./featureSlice/counterSlice";

export const store = configureStore({
      reducer:{
        counter:countReducer
      }
})