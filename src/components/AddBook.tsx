import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import MenuHomepage from "./MenuHomepage";
import "../css/homepage.css";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
import Book from "../types/Book";
import { SubmitHandler, useForm } from "react-hook-form";
// import { useState } from "react";

const AddBook = () => {
  // const [book, setBook] = useState<Book>();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Book>();

  const onSubmit: SubmitHandler<Book> = (data) => {
    // console.log(data);
    localStorage.setItem(data.code, JSON.stringify(data));
    // setBook(data);
    // console.log("book", book);
    // console.log("localStorage", localStorage.length);
  };

  // const [title, setTitle] = useState<string>("");
  // const [author, setAuthor] = useState<string>("");
  // const [genre, setGenre] = useState<string>("");
  // const [published, setPublished] = useState<string>("");
  // const [editor, setEditor] = useState<string>("");
  // const [code, setCode] = useState<string>("");
  // const [price, setPrice] = useState<number>();
  // const [bought, setBought] = useState<string>("");

  return (
    <>
      <MenuHomepage />
      <section className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h2>Nuovo libro</h2>
        {/* <Form onSubmit={() => setBook()}> */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail"> */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Titolo
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                {...register("title", { required: true })}
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
              Autore
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
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
              Genere
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
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
                // onChange={(e) => setPublished(e.target.value)}
                {...register("published")}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Editore
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
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
              Codice
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                // value={code}
                // onChange={(e) => setCode(e.target.value)}
                {...register("code")}
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
                // onChange={(e) => setBought(e.target.value)}
                {...register("dateYouBought")}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Tipo del libro
              </Form.Label>
              <Col sm={10}>
                <select {...register("type", { required: true })}>
                  <option value="ebook">Ebook</option>
                  <option value="cartaceo">Cartaceo</option>
                  <option value="audiobook">Audiobook</option>
                </select>
                {errors.type && (
                  <span>É necessario completare questo campo</span>
                )}
                {/* <Form.Check
                  type="radio"
                  label="Cartaceo"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  required
                />
                <Form.Check
                  type="radio"
                  label="Ebook"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Audiobook"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                /> */}
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Hashtags
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" {...register("hashtag")} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Note
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" {...register("note")} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Metterlo tra i preferiti?
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
                  value="huey"
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
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Salva</Button>
            </Col>
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default AddBook;
