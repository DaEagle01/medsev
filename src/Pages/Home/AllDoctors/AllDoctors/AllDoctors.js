import "./AllDoctors.css";
import React, { useEffect, useState } from "react";
import AllDoctor from "../AllDoctor/AllDoctor";
import { Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const AllDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="m-md-4 m-3">
        <h1 className="text-primary m-md-4 fw-bold p-lg-3">Our Top Doctors</h1>
      </div>
      <Row
        xs={1}
        md={3}
        className="g-2 mx-auto mb-5"
        style={{ maxWidth: "1272px" }}
      >
        {allDoctors.map((allDoctor) => (
          <AllDoctor
            // data-aos="zoom-in-up"
            key={allDoctor.id}
            allDoctor={allDoctor}
          ></AllDoctor>
        ))}
      </Row>
    </div>
  );
};

export default AllDoctors;
