import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./LeftSide.css";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topics-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="left-container">
      <div className="bg-dark mt-2 mb-2 rounded-2 left-container" style={{}}>
        <div className="">
          <h5 className="text-white text-center left-title">Courses</h5>
          <div className="border  mx-auto mb-2"></div>
          {categories.map((category) => (
            <ListGroup className="w-75 mx-auto">
              <ListGroup.Item
                key={category.id}
                className="rounded title-box mb-2"
              >
                <Link
                  className="text-decoration-none text-dark fw-semibold"
                  to={`/category/${category.id}`}
                >
                  {category.name}
                </Link>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
