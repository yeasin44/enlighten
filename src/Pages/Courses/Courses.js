import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import LeftSide from "../Shared/LeftSide/LeftSide";
import RightSide from "../Shared/RightSide/RightSide";
import "./Courses.css";

const Courses = () => {
  return (
    <div>
      <Container className="course-container">
        <LeftSide></LeftSide>

        <RightSide></RightSide>
      </Container>
    </div>
  );
};

export default Courses;
