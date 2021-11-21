import "./Doctors.css";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="my-5">
      <h1 className="fw-bold text-info">Meet Our Doctors</h1>
      <Row xs={1} md={3} className="g-2 mx-auto" style={{ maxWidth: "1272px" }}>
        {doctors.slice(1, 4).map((doctor) => (
          <Doctor
            // data-aos="zoom-in-up"
            key={doctor.id}
            doctor={doctor}
          ></Doctor>
        ))}
      </Row>
      <div className="d-grid gap-2 w-100 mx-auto">
        <Link to="/alldoctors">
          <Button variant="outline-secondary" size="md">
            Load more...
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Doctors;
