import { useNavigate, useParams } from "react-router-dom";
import MenuHomepage from "./MenuHomepage";
import {
  useDispatch,
  // useDispatch,
  useSelector,
} from "react-redux";
import State from "../types/State";
import Book from "../types/Book";
import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { deleteBookAction } from "../redux/actions";

const Details = () => {
  const [book, setBook] = useState<Book>();
  const [modify, setModify] = useState(false);
  const [doDelete, setDoDelete] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    // book!.cover = URL.createObjectURL(book.cover);
    console.log("book", myBook);
  }, []);

  return (
    <>
      <MenuHomepage />
      <section className="d-flex flex-column m-4 p-3">
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
            {
              book.dateYouBought && <p>Data d'acquisto: {book.dateYouBought}</p>
              // : (
              //   // <p>Data d'acquisto: {book.dateYouBought.toDateString()}</p>
              //   ""
              // )
            }
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
              <div>
                <Button
                  className="me-2"
                  onClick={() => navigate("/addBook", { state: book })}
                >
                  Modifica
                </Button>
                <Button onClick={() => setDoDelete(true)} variant="danger">
                  Elimina
                </Button>
              </div>
            )}
          </>
        ) : (
          <span>Scegli un libro!</span>
        )}
        {doDelete && book && (
          <div className="mt-2">
            <Alert>Vuoi cancellare il libro dalla tua biblioteca?</Alert>
            <div>
              <Button
                variant="info"
                className="me-2"
                onClick={() => setDoDelete(false)}
              >
                No
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  setDoDelete(false);
                  alert("Libro cancellato!");
                  dispatch(deleteBookAction(book));
                  navigate("/homepage");
                }}
              >
                Sì
              </Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Details;
