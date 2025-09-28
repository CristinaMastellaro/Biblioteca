import { Card } from "react-bootstrap";
import Book from "../types/Book";
import { BiStar, BiSolidStar } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import "../css/showBook.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavourites, titleOrderedAction } from "../redux/actions";
import WishedBook from "../types/WishedBook";

interface ShowBookProps {
  book: Book | WishedBook;
  wishList: boolean;
}

const ShowBook = ({ book, wishList }: ShowBookProps) => {
  const [favourite, setFavourite] = useState(false);
  useEffect(() => {
    if (!wishList) {
      setFavourite((book as Book).favourite);
    }
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card
      className={
        "m-3 flex-row border border-3 card-book" +
        (favourite ? " favourite-book" : "") +
        (wishList ? " text-start" : "") +
        (wishList && (book as WishedBook).priority === "important"
          ? " high-priority"
          : "")
      }
    >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body
        onClick={() => {
          if (!wishList) navigate("/details/" + (book as Book).code);
        }}
      >
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="mb-1">{book.author}</Card.Text>
        <Card.Text style={{ fontSize: "0.8em" }}>{book.editor}</Card.Text>
      </Card.Body>
      {wishList ? (
        <div className="d-flex align-items-center justify-content-center w-25">
          {(book as WishedBook).priority === "important" && (
            <FaCrown style={{ color: "rgba(194, 12, 21, 1)" }} />
          )}
          {/* Tipo scrivere: "Lo voglio subito!", "Sarebbe bello leggerlo", "Carino, ma può aspettare" */}
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center w-25">
          {favourite ? (
            <BiSolidStar
              onClick={() => {
                setFavourite(false);
                book = { ...book, favourite: false };
                dispatch(addToFavourites(book as Book));
                // localStorage.setItem(book.code, JSON.stringify(book));
                dispatch(titleOrderedAction("a-z"));
              }}
            />
          ) : (
            <BiStar
              onClick={() => {
                setFavourite(true);
                book = { ...book, favourite: true };
                dispatch(addToFavourites(book as Book));
                dispatch(titleOrderedAction("a-z"));
                // localStorage.setItem(book.code, JSON.stringify(book));
              }}
            />
          )}
        </div>
      )}
    </Card>
  );
};

export default ShowBook;
