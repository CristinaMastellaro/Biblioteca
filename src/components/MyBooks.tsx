import { FaPlus } from "react-icons/fa";
import "../css/myBooks.css";
import Book from "../types/Book";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowBook from "./ShowBook";

const MyBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // const getBooks = localStorage.length;
    const add = books;
    if (books.length !== localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        const index = localStorage.key(i);
        const book: Book = JSON.parse(localStorage.getItem(index!)!);
        // console.log("book", book);
        add.push(book);
        // console.log("book", typeof book);
        // setBooks(add);
      }
      setBooks(add);
      console.log("books", books);
    }
  }, []);
  // console.log("getBooks", getBooks);

  //   const [books, setBooks] = useState<Book[]>([]);

  const navigate = useNavigate();

  // if (getBooks) {
  //   setBooks(JSON.parse(getBooks));
  // }

  return (
    <section className="my-3 book-sec">
      <div
        className="p-3 position-fixed plus-button"
        onClick={() => {
          navigate("/addBook");
        }}
      >
        <FaPlus />
      </div>
      <h1 className="text-center p-3">I libri della tua biblioteca</h1>
      {books
        ? books.map((book) => {
            return <ShowBook book={book} key={book.code} />;
          })
        : "Salva il tuo primo libro!"}
    </section>
  );
};

export default MyBooks;
