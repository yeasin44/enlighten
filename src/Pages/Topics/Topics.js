import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";

import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Topics = () => {
  const { user, login, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleCheckOut = (e) => {
    e.preventDefault();
    if (user) {
      setLoading(false);
      navigate(from, { replace: true });
    } else {
      toast.error("Error");
    }
  };
  const topics = useLoaderData();
  const { image_url, title, details, price } = topics;
  return (
    <Card style={{}}>
      <Card.Img variant="top" src={image_url} />

      <Card.Body>
        <Card.Text className="fw-bold bg-danger ">Price:{price}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to="/checkout">
          <Button variant="primary" onSubmit={handleCheckOut}>
            Get Premium
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Topics;
