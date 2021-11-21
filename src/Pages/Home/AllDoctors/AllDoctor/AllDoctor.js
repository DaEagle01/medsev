import "./AllDoctor.css";
import React from "react";
import { Card, Col } from "react-bootstrap";

const AllDoctor = ({ allDoctor }) => {
  const { name, img, speciality } = allDoctor;
  return (
    <div className="container">
      <Col className="p-3" data-aos="zoom-in-up">
        <Card>
          <Card.Img style={{ height: "250px" }} variant="top" src={img} />

          <Card.Title className="pt-2">
            <h5>{name}</h5>
            <h6>{speciality} </h6>
          </Card.Title>
        </Card>
      </Col>
    </div>
  );
};

export default AllDoctor;
