import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  return (
    <Container className="faq-container">
      <div className=" accordian-height">
        <div className="blog-title">
          <h4 className="text-center text-white mt-2">FAQ</h4>
        </div>
        <Accordion
          defaultActiveKey="0"
          className=" mx-auto mt-5 accordian-container"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. How to purchase?</Accordion.Header>
            <Accordion.Body>
              To purchase, click on the premium button than select the payment
              method you want. Than the pay button.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              2. How much the course duration?
            </Accordion.Header>
            <Accordion.Body>
              It is depend on the different courses.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
};

export default Faq;
