import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./featureSlice/counterSlice";
import searchReducer from "./searchSlice/searchSlice"

export const store = configureStore({
      reducer:{
        counter:countReducer,
        search:searchReducer
      }
})