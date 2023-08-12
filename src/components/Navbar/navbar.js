import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import news from "../../assets/icons/news.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar({ fetchNews }) {
  return (
    <>
      <Navbar expand="lg" className="bg-dark fw-bold">
        <Container fluid>
          <Navbar.Brand role="button" tabIndex="0" className="text-white">
            <img
              alt=""
              src={news}
              width="30"
              height="30"
              className="d-inline-block align-center text-white"
            />{" "}
            <Link
              className="text-white text-center fs-4 text-decoration-none"
              to="/"
            >
              IndiaNews.com
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Link
                className="nav-link-style text-white fw-bold m-2 text-decoration-none mx-4"
                to="/india"
              >
                India
              </Link>
              <Link
                className="nav-link-style text-white fw-bold m-2 text-decoration-none mx-4"
                to="/business"
              >
                Business
              </Link>
              <Link
                className="nav-link-style text-white fw-bold m-2 text-decoration-none mx-4"
                to="/health"
              >
                Health
              </Link>
              <Link
                className="nav-link-style text-white fw-bold m-2 text-decoration-none mx-4"
                to="/technology"
              >
                Technology
              </Link>
              <Link
                className="nav-link-style text-white fw-bold m-2 text-decoration-none mx-4"
                to="/sports"
              >
                Sports
              </Link>
              <Link
                className="nav-link-style text-white fw-bold m-2 text-decoration-none mx-4"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
