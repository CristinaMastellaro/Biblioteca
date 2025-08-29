import Action from "../../types/Action";
import Book from "../../types/Book";
import { ALL_BOOKS } from "../actions/index.ts";

const initialState: Book[] = [];

const allBooksReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ALL_BOOKS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default allBooksReducer;
