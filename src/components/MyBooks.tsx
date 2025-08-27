import { FaPlus } from "react-icons/fa";
import "../css/myBooks.css";
// import Book from "../types/Book";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyBooks = () => {
  const getBooks = localStorage.getItem("books");

  //   const [books, setBooks] = useState<Book[]>([]);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  if (getBooks) {
    setBooks(JSON.parse(getBooks));
  }

  return (
    <section className="my-3">
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
            return book;
          })
        : "Salva il tuo primo libro!"}
    </section>
  );
};

export default MyBooks;
