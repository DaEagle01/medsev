import "./Service.css";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description } = service;
  return (
    <div>
      <Col className="p-3" data-aos="zoom-in-up">
        <Card className="h-100">
          <Card.Img style={{ height: "330px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h4>{name}</h4>{" "}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Link to={`/service/${id}`} className="btn btn-info">
            Details
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
