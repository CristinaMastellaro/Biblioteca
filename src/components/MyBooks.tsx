import { FaPlus } from "react-icons/fa";
import { BiSort, BiSearch } from "react-icons/bi";
import "../css/myBooks.css";
// import Book from "../types/Book";
import { Dispatch, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowBook from "./ShowBook";
import { useDispatch, useSelector } from "react-redux";
import {
  authorOrderedAction,
  editorOrderedAction,
  titleOrderedAction,
} from "../redux/actions";
import State from "../types/State";
// import Action from "../types/Action";
import { Action } from "@reduxjs/toolkit";

const MyBooks = () => {
  // const [books, setBooks] = useState<Book[]>(
  //   useSelector((state: State) => state.allBooks)
  // );
  const books = useSelector((state: State) => state.allBooks);

  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // console.log("books da selector", books);

  const dispatch: Dispatch<Action> = useDispatch();

  useEffect(() => {
    dispatch(titleOrderedAction("a-z"));
  }, []);
  // console.log("localStorage.length", localStorage.length);

  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      // console.log("Sto cliccando");
      // const t: target = e.target;
      const { target } = e;
      if (target instanceof HTMLElement) {
        if (
          !(
            target.classList.contains("drop-order") ||
            target.classList.contains("on-click")
          )
        ) {
          setShowDropdown(false);
        }
      }
    });
  }, []);

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
              <li
                onClick={() => dispatch(titleOrderedAction("a-z"))}
                className="border-top"
              >
                {"Titolo (A-Z)"}
              </li>
              <li onClick={() => dispatch(titleOrderedAction("z-a"))}>
                {"Titolo (Z-A)"}
              </li>
              <li
                onClick={() => dispatch(authorOrderedAction(books, "a-z"))}
                className="border-top"
              >
                {"Autore (A-Z)"}
              </li>
              <li onClick={() => dispatch(authorOrderedAction(books, "z-a"))}>
                {"Autore (Z-A)"}
              </li>
              <li
                onClick={() => dispatch(editorOrderedAction(books, "a-z"))}
                className="border-top"
              >
                {"Editore (A-Z)"}
              </li>
              <li onClick={() => dispatch(editorOrderedAction(books, "z-a"))}>
                {"Editore (Z-A)"}
              </li>
            </ul>
          </div>
        )}
      </div>
      {books.length !== 0 ? (
        books
          .filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((book) => {
            return <ShowBook book={book} key={book.code} wishList={false} />;
          })
      ) : (
        <span>"Salva il tuo primo libro!"</span>
      )}
    </section>
  );
};

export default MyBooks;
