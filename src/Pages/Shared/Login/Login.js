import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import logo from "../../../assets/images/login.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");

  const { login, setLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

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
          toast.success("Login successfull");
        } else {
          toast.error("Error");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        toast.error(error.message.slice(22, -2));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Login successfull");
      })
      .catch((error) => console.error(error));
  };
  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Login successfull");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="border mt-2 mb-5 rounded-3 login-container">
      <div className="mt-5 mb-5 mx-auto">
        <div lg="" className="mt-3 form-container ">
          <h3 className="text-white">Login</h3>
          <Form onSubmit={handleLogin} className=" text-white form-width">
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
            <Button variant="primary w-100" type="submit">
              Login
            </Button>
            <div className="border mt-4  mx-auto"></div>
          </Form>
          <div className="mt-4">
            <Button
              onClick={handleGoogleLogin}
              variant="light fw-semibold me-5 md:d-block"
              className="btn-google"
            >
              <FaGoogle /> Login with Google
            </Button>
            <Button
              onClick={handleGithubLogin}
              variant="dark fw-semibold text-white"
            >
              <FaGithub /> Login with Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
