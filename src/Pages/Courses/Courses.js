import React from "react";
import { Col, Row } from "react-bootstrap";
import LeftSide from "../Shared/LeftSide/LeftSide";

const Courses = () => {
  return (
    <div>
      <h3>Courses</h3>
      <Row>
        <Col lg="9"></Col>
        <Col lg="3">
          <LeftSide></LeftSide>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
