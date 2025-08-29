import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers/indexReducers";
import allBooksReducer from "../reducers/allBooksReducer";

const store = configureStore({
  reducer: combineReducers({
    allBooks: allBooksReducer,
  }),
});

export default store;
