import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import MenuHomepage from "./MenuHomepage";
import "../css/addBook.css";
import Book from "../types/Book";
import { BiSolidCameraPlus } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookAction, addToFavourites } from "../redux/actions";
import { Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const noBook: Book = {
  title: "",
  author: "",
  genre: "",
  cover: undefined,
  favourite: false,
  type: "cartaceo",
  editor: "",
  alreadyRead: false,
  code: "",
};

const AddBook = () => {
  // If there's an ID in the location path, it means we're trying to modify
  // a book; so we need the data of this book
  const { state } = useLocation();
  const book: Book = state ? state : noBook;
  // console.log("book", book);
  const [
    modify,
    // setModify
  ] = useState(book !== noBook);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm<Book>({ defaultValues: book });

  const [cover, setCover] = useState<string | undefined>(book.cover);

  const onSubmit: SubmitHandler<Book> = (data) => {
    // data.cover =
    //   "https://covers.openlibrary.org/b/isbn/" + data.code + "-M.jpg";
    // console.log("data.cover", data.cover);
    // console.log(data);
    // if (modify) {
    //   localStorage.removeItem(data.code);
    // }
    data.cover = cover;
    localStorage.setItem(data.code, JSON.stringify(data));
    console.log("data", data);
    dispatch(addBookAction(data));
    dispatch(addToFavourites(data));
    if (!modify) {
      alert("Libro salvato!");
      navigate("/homepage");
    }
    // setBook(data);
    // console.log("book", book);
    // console.log("localStorage", localStorage.length);
  };

  return (
    <>
      <MenuHomepage />
      <section className="d-flex flex-column justify-content-center align-items-center m-4 mt-5">
        <h2>Nuovo libro</h2>
        {/* <Form onSubmit={() => setBook()}> */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail"> */}

          {/* Aggiungere foto della copertina o del libro in generale */}
          <p className="mb-0">Immagine di copertina</p>
          {cover ? (
            <Form.Group
              as={Row}
              className="chooseCover mb-3 position-relative text-center py-3 w-50 mt-2 ms-1"
            >
              <img src={cover} alt="Cover del libro" />
              <Col sm={10}>
                <Form.Control
                  type="file"
                  {...register("cover", { required: false })}
                  accept="image/*;capture=camera"
                  onChange={(e) => {
                    const urlImage = URL.createObjectURL(
                      (e.target as HTMLInputElement).files![0]
                    );
                    setCover(urlImage);
                    console.log("cover", cover);
                  }}
                />
              </Col>
              <p className="mb-0 mt-2 small" style={{ fontSize: "0.8em" }}>
                Clicca l'immagine per cambiarla
              </p>
            </Form.Group>
          ) : (
            <Form.Group
              as={Row}
              className="chooseCover mb-3 position-relative text-center py-3 w-50 mt-2 ms-1"
            >
              <div>
                <BiSolidCameraPlus className="fs-2" />
              </div>
              <Col sm={10}>
                <Form.Control
                  type="file"
                  {...register("cover", { required: false })}
                  accept="image/*;capture=camera"
                  onChange={(e) => {
                    const urlImage = URL.createObjectURL(
                      (e.target as HTMLInputElement).files![0]
                    );
                    setCover(urlImage);
                    // console.log("cover", cover);
                  }}
                />
              </Col>
            </Form.Group>
          )}

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              {"Titolo (*)"}
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                {...register("title", { required: true })}
                // {modify ? setValue(book.title) : ""}
                // required
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && (
                <span>É necessario completare questo campo</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              {"Autore (*)"}
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                // value={modify ? book.author : ""}
                // required
                // value={author}
                // onChange={(e) => setAuthor(e.target.value)}
                {...register("author", { required: true })}
              />
              {errors.author && (
                <span>É necessario completare questo campo</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              {"Genere (*)"}
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                // value={modify ? book.genre : ""}
                // required
                // value={genre}
                // onChange={(e) => setGenre(e.target.value)}
                {...register("genre", { required: true })}
              />
              {errors.genre && (
                <span>É necessario completare questo campo</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Numero di pagine
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                // value={modify ? book.numPages?.toString() : ""}
                // value={price}
                // onChange={(e) => setPrice(Number(e.target.value))}
                {...register("numPages")}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Data di pubblicazione
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                // value={modify ? book.published?.toString() : ""}
                // onChange={(e) => setPublished(e.target.value)}
                {...register("published")}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              {"Editore (*)"}
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                // value={modify ? book.editor : ""}
                // required
                // value={editor}
                // onChange={(e) => setEditor(e.target.value)}
                {...register("editor", { required: true })}
              />
              {errors.editor && (
                <span>É necessario completare questo campo</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              {"Codice (*)"}
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                // value={modify ? book.code : ""}
                // value={code}
                // onChange={(e) => setCode(e.target.value)}
                {...register("code")}
                // onChange={(e) => {
                //   setCover(
                //     "https://covers.openlibrary.org/b/isbn/" +
                //       e.target.value +
                //       "-S.jpg"
                //   );
                // }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Prezzo
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                step="0.01"
                // value={modify ? book.price?.toString() : ""}
                // value={price}
                // onChange={(e) => setPrice(Number(e.target.value))}
                {...register("price")}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Data di acquisto
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="date"
                // value={modify ? book.dateYouBought : ""}
                // onChange={(e) => setBought(e.target.value)}
                {...register("dateYouBought")}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                {"Tipo del libro (*)"}
              </Form.Label>
              <Col sm={10}>
                <select {...register("type", { required: true })}>
                  <option value="cartaceo">Cartaceo</option>
                  <option value="ebook">Ebook</option>
                  <option value="audiobook">Audiobook</option>
                </select>
                {errors.type && (
                  <span>É necessario completare questo campo</span>
                )}
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Hashtags
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                {...register("hashtag")}
                // value={modify && book.hashtag ? book.hashtag.toString() : ""}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Note
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                // value={modify && book.note ? book.note : ""}
                {...register("note")}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              L'hai già letto?
            </Form.Label>
            <Col sm={10} className="d-flex gap-3">
              <div className="d-flex">
                <input
                  type="radio"
                  id="yesRead"
                  value="true"
                  className="me-1"
                  {...register("alreadyRead", { required: true })}
                />
                <Form.Label column sm={2}>
                  Sì
                </Form.Label>
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  id="whileRead"
                  value="while"
                  className="me-1"
                  {...register("alreadyRead", { required: true })}
                />
                <Form.Label column sm={2}>
                  In lettura
                </Form.Label>
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  id="noRead"
                  {...register("alreadyRead", { required: true })}
                  value=""
                  defaultChecked
                  className="me-1"
                />
                <Form.Label column sm={2}>
                  No
                </Form.Label>
              </div>
              {/* <select >
                <option value="true">Sì</option>
                <option value="false">No</option>
              </select> */}
              {errors.alreadyRead && (
                <span>É necessario completare questo campo</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              {"Metterlo tra i preferiti? (*)"}
            </Form.Label>
            <Col sm={10} className="d-flex gap-3">
              <div className="d-flex">
                <input
                  type="radio"
                  id="yes"
                  value="yes"
                  className="me-1"
                  {...register("favourite", { required: true })}
                />
                <Form.Label column sm={2}>
                  Sì
                </Form.Label>
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  id="no"
                  {...register("favourite", { required: true })}
                  value=""
                  defaultChecked
                  className="me-1"
                />
                <Form.Label column sm={2}>
                  No
                </Form.Label>
              </div>
              {/* <select >
                <option value="true">Sì</option>
                <option value="false">No</option>
              </select> */}
              {errors.favourite && (
                <span>É necessario completare questo campo</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <p className="small opacity-75">
              {"I campi contrassegnati da (*) sono obbligatori"}
            </p>
            <Col>
              {modify ? (
                <>
                  <Alert>
                    Controlla che tutti i campi siano compilati correttamente,
                    anche quelli che non hai modificato
                  </Alert>
                  <Button
                    type="submit"
                    onClick={() => {
                      alert("Modifiche salvate!");
                      navigate("/details/" + book.code);
                    }}
                  >
                    Salva modifiche
                  </Button>
                </>
              ) : (
                <Button
                  type="submit"
                  // onClick={() => {
                  //   alert("Libro salvato!");
                  // }}
                >
                  Salva
                </Button>
              )}
            </Col>
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default AddBook;
