import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { FaRegFilePdf } from "react-icons/fa";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Topics.css";

import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Topics = () => {
  const topics = useLoaderData();
  const { image_url, title, details, price } = topics;
  return (
    <div className="topics-container">
      <Card style={{}} className="w-75 mx-auto card-container">
        <Card.Header className=" d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="card-title">
              <h5>{title}</h5>
            </div>
          </div>
          <div className="pdf-icon">
            <>
              {["bottom"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      <strong> Download PDF</strong>.
                    </Tooltip>
                  }
                >
                  <Button variant="">
                    <FaRegFilePdf className="text-danger"></FaRegFilePdf>{" "}
                  </Button>
                </OverlayTrigger>
              ))}
            </>
          </div>
        </Card.Header>
        <div className="mx-auto topics-img">
          <Card.Img variant="top" src={image_url} />
        </div>

        <Card.Body>
          <Card.Text className="fw-bold  text-danger">Price:{price}</Card.Text>

          <Card.Text className="card-description">{details}</Card.Text>
          <Link to="/checkout">
            <Button variant="primary">Get Premium</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Topics;
