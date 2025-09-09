import { FaPlus } from "react-icons/fa";
import { BiSort, BiSearch } from "react-icons/bi";
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

  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // console.log("books da selector", books);

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
      const titles = add.map((book) => book.title).sort();
      const rearrangedBooks: Book[] = [];
      for (let i = 0; i < titles.length; i++) {
        add.forEach((book) => {
          if (book.title === titles[i]) rearrangedBooks.push(book);
        });
      }
      setBooks(rearrangedBooks);
      dispatch(allBooksAction(rearrangedBooks));
      // console.log("books", books);
    }
  }, [books]);
  console.log("localStorage.length", localStorage.length);

  const navigate = useNavigate();

  document.addEventListener("click", (e) => {
    // console.log("Sto cliccando");
    if (
      !(
        e.target!.classList.contains("drop-order") ||
        e.target!.classList.contains("on-click")
      )
    ) {
      setShowDropdown(false);
    }
  });

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
      <div className="position-relative d-flex justify-content-around align-items-center p-3">
        <div className="border border-black rounded-2 p-2 flex-grow-1 me-3 d-flex align-items-center">
          <BiSearch className="text-dark me-2 " />
          <input
            type="text"
            placeholder="Cerca un libro"
            className="border-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <BiSort
          className="text-dark on-click"
          onClick={() => setShowDropdown(!showDropdown)}
          onBlur={() => setShowDropdown(false)}
        />
        {showDropdown && (
          <div className="drop-order text-dark small">
            <legend className="ms-2 mt-2">Ordine</legend>
            <ul>
              <li>Titolo</li>
              <li>Autore</li>
              <li>Editore</li>
            </ul>
          </div>
        )}
      </div>
      {books ? (
        books
          .filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((book) => {
            return <ShowBook book={book} key={book.code} />;
          })
      ) : (
        <span>"Salva il tuo primo libro!"</span>
      )}
    </section>
  );
};

export default MyBooks;
