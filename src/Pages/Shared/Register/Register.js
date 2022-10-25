import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import register from "../../../assets/images/register.png";

const Register = () => {
  return (
    <div className="border mt-2 mb-5 rounded-3 register-container">
      <div className="mt-5 mb-5">
        <Row>
          <Col lg="6">
            <img src={register} alt="" className="w-50 ms-5" />
          </Col>
          <Col lg="6" className="mt-3">
            <h3 className="text-white">Login</h3>
            <Form className="w-75 text-white">
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
