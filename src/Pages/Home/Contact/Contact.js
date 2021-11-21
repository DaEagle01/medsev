import "./Contact.css";
import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="container">
      <div className=" btn-primary container">
        <h1 className="text-light fw-bold p-lg-3">Contact us</h1>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-12 mx-auto text-center">
          <img
            src="https://img.freepik.com/free-vector/call-center-abstract-concept_335657-3001.jpg?size=338&ext=jpg"
            alt=""
            className="img-fluid text-center mx-auto"
          />
        </div>
        <div className="col-md-6 col-12">
          <div className="container-fluid">
            <h2 className=" fw-bold text-info mb-lg-3 my-5"> MedSev </h2>
            <Form className="container">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="mb-3 input-footer"
                  type="email"
                  placeholder="Your name"
                />
                <Form.Control
                  className="mb-3 input-footer"
                  type="email"
                  placeholder="Email"
                />
                <Form.Control
                  className="mb-3 input-footer"
                  type="password"
                  placeholder="Phone number"
                />
                <Form.Control
                  className="mb-3 input-footer"
                  type="password"
                  placeholder="Your address"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  className="input-footer"
                  placeholder="Your message..."
                  rows={3}
                />
              </Form.Group>
              <input
                type="submit"
                className="btn btn-info fw-bold text-light mb-4"
                value="Submit"
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
