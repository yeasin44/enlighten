import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../../assets/logo/logo.png";
import payWith from "../../../assets/images/paywith.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark  bottom">
      <Container>
        <Row>
          <Col lg="4">
            <h5 className="text-white">Pay with</h5>
            <div className=" mt-2 overflow-hidden">
              <img
                src={payWith}
                alt=""
                style={{ width: "300px" }}
                className="border rounded"
              />
            </div>
          </Col>
          <Col lg="5">
            <div className="text-center mt-4">
              <Link
                to="/"
                className="d-block text-decoration-none  fw-bold text-white"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="d-block text-decoration-none  fw-bold text-white"
              >
                Blog
              </Link>

              <Link
                to="/blog"
                className="d-block text-decoration-none  fw-bold text-white"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/blog"
                className="text-decoration-none  fw-bold text-white"
              >
                Privacy policy
              </Link>
            </div>
            <p className="text-light text-center mt-5 fw-semibold">
              Copyright &copy; 2022 Enlighten.com
            </p>
          </Col>
          <Col lg="3">
            <div className="d-flex align-items-center mt-5">
              <img style={{ width: "50px" }} src={Logo} alt="" />
              <h3 className="mt-2 ms-2 text-white">Enlighten</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
