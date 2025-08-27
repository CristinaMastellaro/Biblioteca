import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import MenuHomepage from "./MenuHomepage";
import "../css/homepage.css";

const AddBook = () => {
  return (
    <>
      <MenuHomepage />
      <section className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h2>Nuovo libro</h2>
        <Form>
          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail"> */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Titolo
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Autore
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Genere
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Data di pubblicazione
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="date" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Editore
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Codice
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Prezzo
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Data di acquisto
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="date" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Tipo del libro
              </Form.Label>
              <Col sm={10}>
                <Form.Check
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
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Hashtags
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Note
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
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
