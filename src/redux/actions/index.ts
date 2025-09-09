import Book from "../../types/Book";

export const ALL_BOOKS = "ALL_BOOKS";
export const ADD_BOOK = "ADD_BOOK";
export const MODIFY_BOOK = "MODIFY_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";

export const allBooksAction = (data: Book[]) => {
  // const titles = data.map((book) => book.title).sort();
  // const books: Book[] = [];
  // for (let i = 0; i < titles.length; i++) {
  //   data.forEach((book) => {
  //     if (book.title === titles[i]) books.push(book);
  //   });
  // }
  // console.log("books rearranged", books);
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

export const deleteBookAction = (data: Book) => {
  localStorage.removeItem(data.code);
  return {
    type: DELETE_BOOK,
    payload: data,
  };
};
