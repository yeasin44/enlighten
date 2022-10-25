import React from "react";
import Carousel from "react-bootstrap/Carousel";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.jpg";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.jpg";
import bootstrap from "../../assets/images/bootstrap.png";
import tailwind from "../../assets/images/tailwind.png";

const Home = () => {
  return (
    <div className="mt-2 mb-4 border rounded-3 bg-dark">
      <Carousel fade>
        <Carousel.Item style={{ height: "500px" }}>
          <img className="d-block w-100" src={html} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img className="d-block w-100" src={css} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img className="d-block w-100" src={javascript} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img className="d-block w-100" src={react} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img className="d-block w-100" src={bootstrap} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img className="d-block w-100" src={tailwind} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
