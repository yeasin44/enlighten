import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Bkash from "../../assets/images/bkash.png";
import paypel from "../../assets/images/paypel.png";
import pioner from "../../assets/images/pioner.png";
const CheckOut = () => {
  const [error, setError] = useState("");

  const { login, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        console.log(user);
        if (user) {
          navigate(from, { replace: true });
          toast.success("Login successfully");
        } else {
          toast.error("Error");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <h3>Check Out</h3>
      <h3 className="text-white">Login</h3>
      <Form onSubmit={handleLogin} className="w-50 text-white">
        <Form.Group className="mb-3 " controlId="formBasicEmail">
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
        <p>{error}</p>
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
        <div className="border mt-4  mx-auto"></div>
      </Form>
    </div>
  );
};

export default CheckOut;
