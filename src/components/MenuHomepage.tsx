import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
// import LeftDropdown from "./LeftDropdown";
// import { BiX } from "react-icons/bi";
import "../css/leftDropdown.css";
import LeftDropdown from "./LeftDropdown";

const MenuHomepage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [putOverlay, setPutOverlay] = useState(false);

  return (
    <>
      <Container fluid className="container-menu">
        {showDropdown && (
          // <aside className="d-flex flex-column aside-sidebar">
          //   <BiX
          //     className="align-self-end mb-3"
          //     onClick={() => {
          //       setPutOverlay(false);
          //       setShowDropdown(false);
          //     }}
          //   />
          //   <p className="options">Libri preferiti</p>
          //   <p className="options">Pagina personale</p>
          //   <p className="options">Impostazioni</p>
          // </aside>
          <LeftDropdown setShowDropdown={setShowDropdown} />
        )}
        {/* {putOverlay && <div className="overlay"></div>} */}

        <Row
          className="justify-content-start
       py-2 border border-1"
        >
          <div className="w-25">
            <FaList
              className="text-end"
              onClick={() => {
                // setPutOverlay(true);
                setShowDropdown(true);
              }}
            />
          </div>
        </Row>
        <Row xs={2}>
          <Col className="py-3 text-center border border-1 fw-semibold menu-item">
            <Link to="/homepage" className="text-decoration-none text-light">
              Biblioteca
            </Link>
          </Col>
          <Col className="py-3 text-center border border-1 fw-semibold menu-item">
            Altri libri
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuHomepage;
