import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import "./TopicsDetails.css";

const TopicsDetails = ({ topics }) => {
  const { image_url, title, details, price, _id } = topics;
  return (
    <div className="details-card">
      <Card style={{ width: "18rem", height: "400px" }} className="">
        <div
          className="border rounded details-card"
          style={{ overflow: "hidden", width: "286px", height: "140px" }}
        >
          <Card.Img variant="top" src={image_url} style={{}} />
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {" "}
            {details.length > 100 ? (
              <>{details.slice(0, 100) + "..."} </>
            ) : (
              details
            )}
          </Card.Text>
          <div className="bottom-position">
            <Button variant="primary w-50 position-absolute bottom-0 mb-2 ">
              <Link
                className="text-white text-decoration-none"
                to={`/topics/${_id}`}
              >
                View details
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopicsDetails;
