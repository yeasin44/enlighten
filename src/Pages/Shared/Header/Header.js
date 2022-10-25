import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="text-decoration-none">
          <div className="d-flex justify-content-center align-items-center">
            <img style={{ width: "50px" }} src={Logo} alt="" />
            <h3 className="mt-2 ms-2 text-white">Enlighten</h3>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="text-decoration-none ms-5">
              <Link
                to="/"
                className="text-decoration-none me-2 fw-bold text-white"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="text-decoration-none me-2 fw-bold text-white"
              >
                Courses
              </Link>
              <Link
                to="/blog"
                className="text-decoration-none  fw-bold text-white"
              >
                Blog
              </Link>
            </div>
          </Nav>
          <Nav>
            <Link className="btn btn-light me-1" to="/register">
              Register
            </Link>
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
            <Nav.Link eventKey={2} href="#memes">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
