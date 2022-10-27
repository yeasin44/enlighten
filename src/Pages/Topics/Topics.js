import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link, useLoaderData } from "react-router-dom";

const Topics = () => {
  const topics = useLoaderData();
  const { image_url, title, details, category_id } = topics;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news in the category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Topics;