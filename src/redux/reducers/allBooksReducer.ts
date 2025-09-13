import Action from "../../types/Action";
import Book from "../../types/Book";
import {
  ALL_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  ADD_TO_FAVOURITES,
} from "../actions/index.ts";

const initialState: Book[] = [];

const allBooksReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ALL_BOOKS:
      state = initialState;
      return state.concat(action.payload);
    case ADD_BOOK:
      return state.concat(action.payload);
    case DELETE_BOOK:
      return state.filter((book) => book !== action.payload);
    case ADD_TO_FAVOURITES:
      return state
        .filter((book) => book.code != (action.payload as Book).code)
        .concat(action.payload);
    default:
      return state;
  }
};

export default allBooksReducer;
