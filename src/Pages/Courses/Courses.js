import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import LeftSide from "../Shared/LeftSide/LeftSide";
import RightSide from "../Shared/RightSide/RightSide";

const Courses = () => {
  return (
    <div>
      <Row>
        <Col lg="3">
          <LeftSide></LeftSide>
        </Col>
        <Col lg="9">
          <RightSide></RightSide>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
