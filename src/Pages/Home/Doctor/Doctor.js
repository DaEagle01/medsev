import "./Doctor.css";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  const { name, speciality, img } = doctor;
  return (
    <div>
      <Col className="p-3" data-aos="zoom-in-up">
        <Card>
          <Card.Img style={{ height: "250px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h4>{name}</h4>
              <h5>{speciality} </h5>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
