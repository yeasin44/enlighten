import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.jpg";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.jpeg";
import bootstrap from "../../assets/images/bootstrap.png";
import tailwind from "../../assets/images/tailwind.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="border rounded-3 bg-dark home-container home-main">
      <Carousel fade>
        <Carousel.Item style={{}} className="home-container2">
          <img className="d-block w-100 " src={html} alt="First slide" />
          <Carousel.Caption className=" mb-3 w-50 mx-auto" style={{}}>
            <h2>HTML & CSS Crash course</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{}} className=" home-container2">
          <img className="d-block w-100" src={css} alt="Second slide" />

          <Carousel.Caption>
            <h2>JavaScript Crash course</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{}} className=" home-container2">
          <img className="d-block w-100" src={javascript} alt="Third slide" />

          <Carousel.Caption>
            <h2>React Crash course</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{}} className=" home-container2">
          <img className="d-block w-100" src={react} alt="Third slide" />

          <Carousel.Caption>
            <h2>UX/UI Design Crash course</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{}} className=" home-container2">
          <img className="d-block w-100" src={bootstrap} alt="Third slide" />

          <Carousel.Caption>
            <h2>Bootstrap Crash course</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{}} className=" home-container2">
          <img className="d-block w-100" src={tailwind} alt="Third slide" />

          <Carousel.Caption>
            <h2>Tailwind Crash course</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
