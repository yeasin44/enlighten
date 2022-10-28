import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../../../assets/logo/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark footer-container">
      <Container>
        <div>
          <div className="d-flex align-items-center  footer-img">
            <img className="" src={Logo} alt="" />
            <h3 className="mt-2 ms-2 text-white">Enlighten</h3>
          </div>
        </div>
        <div className="text-center footer-menu">
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
          <Link to="/blog" className="text-decoration-none  fw-bold text-white">
            Privacy policy
          </Link>
        </div>
        <p className="text-light text-center fw-semibold footer-copyright">
          Copyright &copy; 2022 Enlighten.com
        </p>
      </Container>
    </div>
  );
};

export default Footer;
