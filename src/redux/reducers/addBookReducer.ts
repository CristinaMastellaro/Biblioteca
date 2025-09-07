import Action from "../../types/Action";
import Book from "../../types/Book";
import { ADD_BOOK } from "../actions";

const initialState: Book = {
  title: "",
  author: "",
  genre: "",
  alreadyRead: false,
  code: "",
  editor: "",
  type: "cartaceo",
  favourite: false,
};

const singleBookReducereducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_BOOK:
      return action.payload;

    default:
      return state;
  }
};

export default singleBookReducereducer;
