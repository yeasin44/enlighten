import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import register from "../../../assets/images/register.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        handleUpdateUserProfile(name, photoURL);
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Register successfully");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleCheckBox = (event) => {
    setCheckBox(event.target.checked);
  };
  return (
    <div className="border mt-2 mb-5 rounded-3 register-container">
      <div className="mt-5 mb-5">
        <Row>
          <Col lg="6">
            <img src={register} alt="" className="w-50 ms-5" />
          </Col>
          <Col lg="6" className="mt-3">
            <h3 className="text-white">Register</h3>
            <Form onSubmit={handleRegister} className="w-75 text-white">
              <Form.Group className="mb-3 " controlId="formBasicFullName">
                <Form.Label>Full name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Full name" />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  name="photoURL"
                  type="text"
                  placeholder="Photo URL"
                />
              </Form.Group>
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
                <Form.Check
                  type="checkbox"
                  onClick={handleCheckBox}
                  label={
                    <>
                      Accept{" "}
                      <Link to="/terms" className="text-warning">
                        Terms and conditions
                      </Link>
                    </>
                  }
                />
              </Form.Group>
              <p className="text-red">{error}</p>
              <Button variant="danger w-100" type="submit" disabled={!checkBox}>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
