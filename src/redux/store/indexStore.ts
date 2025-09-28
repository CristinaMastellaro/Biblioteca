import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers/indexReducers";
import allBooksReducer from "../reducers/allBooksReducer";
import wishListReducer from "../reducers/wishListReducer";

const rootReducer = combineReducers({
  allBooks: allBooksReducer,
  wishList: wishListReducer,
});
// export type IRootState = ReturnType<typeof rootReducer>;

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false
// })

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableStateInvariant: false,
    }),
});
export type IRootState = ReturnType<typeof store.getState>;

export default store;
