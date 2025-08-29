import Book from "./Book";

export default interface Action {
  type: string;
  payload: Book | Book[];
}
