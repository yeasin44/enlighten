import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import "./TopicsDetails.css";

const TopicsDetails = ({ topics }) => {
  const { image_url, title, details, price, _id } = topics;
  return (
    // <Card className="mb-5">
    //   <Card.Header className="d-flex justify-content-between align-items-center">
    //     <div className="d-flex">
    //       <Image
    //         roundedCircle
    //         className="me-2"
    //         style={{ height: "60px" }}
    //       ></Image>
    //       <div>
    //         <p className="mb-0"></p>
    //         <p></p>
    //       </div>
    //     </div>
    //     <div>
    //       <FaBookmark className="me-2"></FaBookmark>
    //       <FaShareAlt></FaShareAlt>
    //     </div>
    //   </Card.Header>
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Img variant="top" src={image_url} />
    //     <Card.Text>
    //       {details.length > 250 ? (
    //         <>
    //           {details.slice(0, 250) + "..."}{" "}
    //           <Link to={`/topics/${_id}`}>Read more</Link>
    //         </>
    //       ) : (
    //         details
    //       )}
    //     </Card.Text>
    //   </Card.Body>
    //   <Card.Footer className="d-flex justify-content-between">
    //     <div className="">
    //       <FaStar className="text-warning me-2"></FaStar>
    //       <span>{}</span>
    //     </div>
    //     <div>
    //       <FaEye className="me-2"></FaEye>
    //       <span>{}</span>
    //     </div>
    //   </Card.Footer>
    // </Card>
    <div className="">
      <Card style={{ width: "18rem", height: "400px" }}>
        <div
          className="border rounded "
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
            <Button variant="primary w-75 position-absolute bottom-0 mb-2">
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
