import { Container } from "react-bootstrap";
import MenuHomepage from "./MenuHomepage";
import "../css/homepage.css";
import MyBooks from "./MyBooks";

const Homepage = () => {
  return (
    <>
      <div className="wallpaper"></div>
      <MenuHomepage />
      <Container className="p-0 mx-auto" style={{ width: "90%" }}>
        <MyBooks />
      </Container>
    </>
  );
};

export default Homepage;
