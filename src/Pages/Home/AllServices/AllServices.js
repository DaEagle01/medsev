import "./AllServices.css";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import AllService from "../AllService/AllService";

import Aos from "aos";
import "aos/dist/aos.css";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="my-4 container">
      <h1 className="fw-bold text-info">All Services Of Our Hospital </h1>
      <Row xs={1} md={3} className="g-2">
        {allServices.map((allService) => (
          <AllService key={AllService.id} allService={allService}></AllService>
        ))}
      </Row>
    </div>
  );
};

export default AllServices;
