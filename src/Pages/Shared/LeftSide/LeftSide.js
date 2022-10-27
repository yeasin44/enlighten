import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topics-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="bg-dark mt-2 mb-2 rounded-2" style={{ height: "420px" }}>
        <div className="">
          <h5 className="text-white text-center">Courses</h5>
          <div className="border w-75 mx-auto"></div>
          {categories.map((category) => (
            <ListGroup className="w-75 mx-auto">
              <p></p>
              <ListGroup.Item key={category.id} className="rounded ">
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
