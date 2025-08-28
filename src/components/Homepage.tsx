import { Container } from "react-bootstrap";
import MenuHomepage from "./MenuHomepage";
import "../css/homepage.css";
import MyBooks from "./MyBooks";

const Homepage = () => {
  return (
    <Container className="container p-0">
      <MenuHomepage />
      <MyBooks />
    </Container>
  );
};

export default Homepage;
