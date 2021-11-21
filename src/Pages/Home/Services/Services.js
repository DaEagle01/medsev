import "./Services.css";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import { Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="m-md-4 m-3">
        <h1 className="text-primary m-md-4 fw-bold p-lg-3">
          Our Hospital Services
        </h1>
      </div>
      <Row
        xs={1}
        md={3}
        className="g-2 mx-auto my-5"
        style={{ maxWidth: "1272px" }}
      >
        {services.slice(0, 6).map((service) => (
          <Service
            // data-aos="zoom-in-up"
            key={service.id}
            service={service}
          ></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
