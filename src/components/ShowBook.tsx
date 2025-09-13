import { Card } from "react-bootstrap";
import Book from "../types/Book";
import { BiStar, BiSolidStar } from "react-icons/bi";
import "../css/showBook.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addBookAction,
  addToFavourites,
  titleOrderedAction,
} from "../redux/actions";

interface ShowBookProps {
  book: Book;
}

const ShowBook = ({ book }: ShowBookProps) => {
  const [favourite, setFavourite] = useState(book.favourite);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card
      className={
        "m-3 flex-row border border-3 card-book" +
        (favourite ? " favourite-book" : "")
      }
    >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body
        onClick={() => {
          navigate("/details/" + book.code);
        }}
      >
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="mb-1">{book.author}</Card.Text>
        <Card.Text style={{ fontSize: "0.8em" }}>{book.editor}</Card.Text>
      </Card.Body>
      <div className="d-flex align-items-center justify-content-center w-25">
        {favourite ? (
          <BiSolidStar
            onClick={() => {
              setFavourite(false);
              book = { ...book, favourite: false };
              dispatch(addToFavourites(book));
              // localStorage.setItem(book.code, JSON.stringify(book));
              dispatch(titleOrderedAction("a-z"));
            }}
          />
        ) : (
          <BiStar
            onClick={() => {
              setFavourite(true);
              book = { ...book, favourite: true };
              dispatch(addToFavourites(book));
              dispatch(titleOrderedAction("a-z"));
              // localStorage.setItem(book.code, JSON.stringify(book));
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default ShowBook;
