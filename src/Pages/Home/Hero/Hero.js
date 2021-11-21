import "./Hero.css";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import docslide1 from "../../../images/docslide1.jpg";
import docslide2 from "../../../images/docslide2.jpg";
import docslide3 from "../../../images/docslide3.jpg";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container">
      <Carousel className="container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={docslide1}
            alt="First slide"
          />
          <Carousel.Caption className="text-dark ">
            <h1 className="fw-bold">Combining excellence and expertise</h1>
            <p>
              Our hospitals excel in most aspects of medicine and offer a wide
              range of diagnostic and treatment services, some have been awarded
              an 'Outstanding' quality check by the Care Quality Commission.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={docslide2}
            alt="Second slide"
          />

          <Carousel.Caption className="text-dark">
            <h1 className="fw-bold">
              Our services are delivered by highly-skilled professional
            </h1>
            <p>
              We have intensive care facilities in all of our hospitals, and
              dedicated and expert teams to look after you no matter what
              happens.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={docslide3}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
            <h1 className="fw-bold">Our hospital provides 24/7 hour service</h1>
            <p>
              Our hospitals, clinics, outpatient and diagnostics centres, and
              NHS partnerships cover all areas of medicine, including complex
              conditions in both adults and children.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
