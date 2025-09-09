import Book from "./Book";

export default interface ActionSingleBook {
  type: string;
  payload: Book;
}
