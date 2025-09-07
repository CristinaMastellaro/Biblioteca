import { Container } from "react-bootstrap";
import MenuHomepage from "./MenuHomepage";
import "../css/homepage.css";
import MyBooks from "./MyBooks";

const Homepage = () => {
  return (
    <>
      <div className="wallpaper"></div>
      <MenuHomepage />
      <Container className="container p-0 mx-3">
        <MyBooks />
      </Container>
    </>
  );
};

export default Homepage;
