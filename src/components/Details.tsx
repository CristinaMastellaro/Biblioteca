import { useNavigate, useParams } from "react-router-dom";
import MenuHomepage from "./MenuHomepage";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import State from "../types/State";
import Book from "../types/Book";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Details = () => {
  const [book, setBook] = useState<Book>();
  const [modify, setModify] = useState(false);

  const navigate = useNavigate();

  let code = useParams().code;
  if (code?.includes("-")) {
    code = code.replaceAll("-", "");
  }
  console.log("code", code);
  const myBook: Book[] = useSelector((state: State) => {
    return state.allBooks.filter(
      (book) => book.code.replaceAll("-", "") === code
    );
  });

  useEffect(() => {
    setBook(myBook[0]);
    console.log("book", myBook);
  }, []);

  return (
    <>
      <MenuHomepage />
      <section className="d-flex flex-column m-4">
        {book ? (
          <>
            <img
              src={book.cover}
              alt="Cover"
              className="mx-auto mb-3"
              style={{ maxWidth: "150px" }}
            />
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.editor}</p>
            <p>Codice ISBN: {book.code}</p>
            <p>Genere: {book.genre}</p>
            <p>Formato: {book.type}</p>
            {book.dateYouBought ? (
              <p>Data d'acquisto: {book.dateYouBought}</p>
            ) : (
              // <p>Data d'acquisto: {book.dateYouBought.toDateString()}</p>
              ""
            )}
            {book.price ? <p>Prezzo: {book.price}€</p> : ""}
            {book.numPages ? <p>Numero di pagine: {book.numPages}</p> : ""}
            {book.hashtag ? <p>Hashtags: {book.hashtag}</p> : ""}
            {book.note ? <p>notes: {book.hashtag}</p> : ""}
            {modify ? (
              <div className="d-flex gap-2">
                <Button
                  variant="success"
                  onClick={() => {
                    setModify(false);
                    alert("Modifiche salvate!");
                  }}
                >
                  Salva
                </Button>
                <Button variant="danger">Cancella</Button>
              </div>
            ) : (
              <Button onClick={() => navigate("/addBook", { state: book })}>
                Modifica
              </Button>
            )}
          </>
        ) : (
          <span>Scegli un libro!</span>
        )}
      </section>
    </>
  );
};

export default Details;
