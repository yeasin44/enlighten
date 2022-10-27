import { signOut } from "firebase/auth";
import React, { useContext, useRef, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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
                to="/faq"
                className="text-decoration-none me-2 fw-bold text-white"
              >
                FAQ
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
            <div className="button-container mt-3">
              {user?.uid ? (
                <>
                  <Button
                    variant="light ms-4 me-2 text-decoration-none fw-bold"
                    onClick={handleLogOut}
                    style={{ fontSize: "12px" }}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    className="btn btn-light me-1 fw-bold"
                    to="/register"
                    style={{ fontSize: "12px" }}
                  >
                    Register
                  </Link>
                  <Link
                    className="btn btn-primary fw-bold"
                    to="/login"
                    style={{ fontSize: "12px" }}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            <Link className="mt-2">
              <>
                {user?.photoURL ? (
                  <div ref={ref}>
                    <Image
                      className="mt-2"
                      style={{ width: "30px" }}
                      roundedCircle
                      src={user?.photoURL}
                      onClick={handleClick}
                    ></Image>

                    <Overlay
                      show={show}
                      target={target}
                      placement="bottom"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-contained">
                        {/* <Popover.Header>
                          <Image
                            className="mx-auto"
                            style={{ width: "60px" }}
                            roundedCircle
                            src={user?.photoURL}
                          ></Image>
                        </Popover.Header> */}

                        <Popover.Body>
                          <h5 className="text-dark">{user?.displayName}</h5>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </div>
                ) : (
                  <FaUserAlt className="fs-3 text-white m-2"></FaUserAlt>
                )}
              </>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
