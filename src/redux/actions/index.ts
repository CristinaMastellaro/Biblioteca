import Book from "../../types/Book";

// First, all the methods that change all the books
// This takes all the books and sorts them based on title, author etc.
export const TITLE_ORDERED = "TITLE_ORDERED";
export const AUTHOR_ORDERED = "AUTHOR_ORDERED";
export const EDITOR_ORDERED = "EDITOR_ORDERED";

export const ALL_BOOKS = "ALL_BOOKS";
export const ADD_BOOK = "ADD_BOOK";
export const MODIFY_BOOK = "MODIFY_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";

export const titleOrderedAction = (order: string) => {
  let orderBooks;
  if (order === "a-z") {
    orderBooks = (a: string, b: string) => (a > b ? 1 : -1);
  } else {
    orderBooks = (a: string, b: string) => (a > b ? -1 : 1);
  }

  const add = [];
  for (let i = 0; i < localStorage.length; i++) {
    const index = localStorage.key(i);
    const book: Book = JSON.parse(localStorage.getItem(index!)!);
    // console.log("book", book);
    add.push(book);
    // console.log("book", typeof book);
  }
  const titles = add.map((book) => book.title).sort(orderBooks);
  const rearrangedBooks: Book[] = [];
  for (let i = 0; i < titles.length; i++) {
    add.forEach((book) => {
      if (book.title === titles[i]) rearrangedBooks.push(book);
    });
  }
  return {
    type: ALL_BOOKS,
    payload: rearrangedBooks,
  };
};

export const authorOrderedAction = (books: Book[], order: string) => {
  let orderBooks;
  if (order === "a-z") {
    orderBooks = (a: string, b: string) => (a > b ? 1 : -1);
  } else {
    orderBooks = (a: string, b: string) => (a > b ? -1 : 1);
  }

  let authors = books.map((book) => book.author).sort(orderBooks);
  authors = [...new Set(authors)];
  console.log("author", authors);
  const rearrangedBooks: Book[] = [];
  for (let i = 0; i < authors.length; i++) {
    books.forEach((book) => {
      if (book.author === authors[i]) rearrangedBooks.push(book);
    });
  }
  return {
    type: ALL_BOOKS,
    payload: rearrangedBooks,
  };
};

export const editorOrderedAction = (books: Book[], order: string) => {
  let orderBooks;
  if (order === "a-z") {
    orderBooks = (a: string, b: string) => (a > b ? 1 : -1);
  } else {
    orderBooks = (a: string, b: string) => (a > b ? -1 : 1);
  }

  let editors = books.map((book) => book.editor).sort(orderBooks);
  editors = [...new Set(editors)];
  const rearrangedBooks: Book[] = [];
  for (let i = 0; i < editors.length; i++) {
    books.forEach((book) => {
      if (book.editor === editors[i]) rearrangedBooks.push(book);
    });
  }
  return {
    type: ALL_BOOKS,
    payload: rearrangedBooks,
  };
};

export const addBookAction = (data: Book) => {
  localStorage.setItem(data.code, JSON.stringify(data));
  return {
    type: ADD_BOOK,
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

// All the methods connected to single books
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const addToFavourites = (book: Book) => {
  localStorage.setItem(book.code, JSON.stringify(book));
  return {
    type: ADD_TO_FAVOURITES,
    payload: book,
  };
};
