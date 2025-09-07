import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers/indexReducers";
import allBooksReducer from "../reducers/allBooksReducer";

const rootReducer = combineReducers({ allBooks: allBooksReducer });
// export type IRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});
export type IRootState = ReturnType<typeof store.getState>;

export default store;
