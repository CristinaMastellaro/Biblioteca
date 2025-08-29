import Book from "../../types/Book";

export const ALL_BOOKS = "ALL_BOOKS";
export const ADD_BOOK = "ADD_BOOK";
export const MODIFY_BOOK = "MODIFY_BOOK";

export const allBooksAction = (data: Book[]) => {
  return {
    type: ALL_BOOKS,
    payload: data,
  };
};

export const addBookAction = (data: Book) => {
  localStorage.setItem(data.code, JSON.stringify(data));
  return {
    type: ADD_BOOK,
    payload: data,
  };
};

export const modifyBookAction = (data: Book) => {
  // localStorage.getItem(data.code)
  localStorage.setItem(data.code, JSON.stringify(data));
  return {
    type: MODIFY_BOOK,
    payload: data,
  };
};
