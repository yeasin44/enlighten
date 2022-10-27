import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <div className="border w-75"></div>
          {categories.map((category) => (
            <p key={category.id}>
              <Link
                className="text-decoration-none text-white "
                to={`/category/${category.id}`}
              >
                {category.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
