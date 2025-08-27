import { Container } from "react-bootstrap";
import MenuHomepage from "./MenuHomepage";
import "../css/homepage.css";
import MyBooks from "./MyBooks";

const Homepage = () => {
  return (
    <Container>
      <MenuHomepage />
      <MyBooks />
    </Container>
  );
};

export default Homepage;
