import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Bkash from "../../assets/images/bkash.png";
import paypel from "../../assets/images/paypel.png";
import pioner from "../../assets/images/pioner.png";
import { Container } from "react-bootstrap";
const CheckOut = () => {
  return (
    <Container>
      <div>
        <h3 className="mt-3">Check Out</h3>
        <div className="border mt-4 w-50 "></div>
        <h3 className="text-white">Login</h3>
        <Form className="w-50 text-white">
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <h5 className="text-dark">Payment method:</h5>
          <div className="d-flex justify-content-evenly">
            <div>
              <input
                type="checkbox"
                id="checkbox"
                name="check"
                value="check"
                className="me-2"
              ></input>
              <img
                className="mb-2"
                src={Bkash}
                alt=""
                style={{ width: "50px" }}
              />
            </div>
            <div className="">
              <input
                type="checkbox"
                id="checkbox"
                name="check"
                value="check"
                className="me-2"
              ></input>
              <img
                className="mb-2"
                src={paypel}
                alt=""
                style={{ width: "50px" }}
              />
            </div>
            <div className="">
              <input
                type="checkbox"
                id="checkbox"
                name="check"
                value="check"
                className="me-2"
              ></input>
              <img
                className="mb-2"
                src={pioner}
                alt=""
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <Button variant="primary w-100" type="submit">
            Pay
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CheckOut;
