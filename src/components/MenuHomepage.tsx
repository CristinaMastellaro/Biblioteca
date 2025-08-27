import { Container, Row, Col } from "react-bootstrap";
import { FaList } from "react-icons/fa";

const MenuHomepage = () => {
  return (
    <Container>
      <Row className="justify-content-end py-2 border border-1">
        <div className="w-25">
          <FaList className="text-end" />
        </div>
      </Row>
      <Row xs={2}>
        <Col className="py-3 text-center border border-1 fw-semibold menu-item">
          Biblioteca
        </Col>
        <Col className="py-3 text-center border border-1 fw-semibold menu-item">
          Altri libri
        </Col>
      </Row>
    </Container>
  );
};

export default MenuHomepage;
