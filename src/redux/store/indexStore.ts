import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/indexReducers";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
