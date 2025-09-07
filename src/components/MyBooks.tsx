import { FaPlus } from "react-icons/fa";
import "../css/myBooks.css";
import Book from "../types/Book";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowBook from "./ShowBook";
import { useDispatch, useSelector } from "react-redux";
import { allBooksAction } from "../redux/actions";
import State from "../types/State";

const MyBooks = () => {
  const [books, setBooks] = useState<Book[]>(
    useSelector((state: State) => state.allBooks)
  );

  console.log("books da selector", books);

  const dispatch = useDispatch();

  useEffect(() => {
    // const getBooks = localStorage.length;
    // const books: Book[] = [];
    // console.log("books.length", books.length);
    // console.log("localStorage.length", localStorage.length);
    if (books.length !== localStorage.length) {
      const add = [];
      for (let i = 0; i < localStorage.length; i++) {
        const index = localStorage.key(i);
        const book: Book = JSON.parse(localStorage.getItem(index!)!);
        // console.log("book", book);
        add.push(book);
        // console.log("book", typeof book);
      }
      setBooks(add);
      dispatch(allBooksAction(add));
      console.log("books", books);
    }
  }, [books]);
  console.log("localStorage.length", localStorage.length);

  const navigate = useNavigate();

  return (
    <section className="my-3 book-sec pb-1">
      <div
        className="p-3 position-fixed plus-button"
        onClick={() => {
          navigate("/addBook");
        }}
      >
        <FaPlus />
      </div>
      <h1 className="text-center p-3">I libri della tua biblioteca</h1>
      {books ? (
        books.map((book) => {
          return <ShowBook book={book} key={book.code} />;
        })
      ) : (
        <span>"Salva il tuo primo libro!"</span>
      )}
    </section>
  );
};

export default MyBooks;
