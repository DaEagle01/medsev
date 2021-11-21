import "./Footer.css";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-primary text-light">
      <div className="container">
        <div className="row py-md-5">
          <div className="col-md-4 mx-auto text-center">
            <h4 className="text-center fw-bold text-light mt-md-0  my-3 mb-lg-3">
              Contact Us
            </h4>
            <div className="row d-flex flex-wrap">
              <div className="d-flex justify-content-between">
                <div className="col-6">
                  <div className="col-md-3 col-12 mx-auto text-center mb-2">
                    <i class="fas fa-envelope fa-lg-3x fa-2x text-light mb-lg-3 mx-auto"></i>
                  </div>
                  <div className="col-md-9 col-12">
                    <p>info@medsev.com</p>
                    <p>help@medsev.com</p>
                  </div>
                </div>
                <div className=" col-6">
                  <div className="col-md-3 col-12 mx-auto text-center mb-2">
                    <i class="fas fa-headset fa-lg-3x fa-2x text-light mb-lg-3 mx-auto"></i>
                  </div>
                  <div className="col-md-9 col-12">
                    <p>+8801629450417</p>
                    <p>+8801854736026</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className=" col-6">
                  <div className="col-md-3 col-12 mx-auto text-center mb-2">
                    <i class="fas fa-map-marker-alt fa-lg-3x fa-2x text-light mb-lg-3 mx-auto"></i>
                  </div>
                  <div className="col-md-9 col-12">
                    <p>Maghbazar, Outer Circular Rd,</p>
                    <p>Dhaka 1217</p>
                  </div>
                </div>
                <div className=" col-6">
                  <div className="col-md-3 col-12 mx-auto text-center mb-2">
                    <i class="fas fa-clock fa-lg-3x fa-2x text-light mb-lg-3 mx-auto"></i>
                  </div>
                  <div className="col-md-9 col-12">
                    <p>Sat-Friday: 9am to 18pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <h4 className=" fw-bold text-light mb-lg-3"> Quick Links</h4>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p> About us </p>
            </Link>
            <p>Blog</p>
            <p>Our Expertise</p>
            <p>FAQ</p>
            <p>Doctors</p>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Contact us</p>
            </Link>
          </div>
          <div className="col-md-2 col-6">
            <h4 className=" fw-bold text-light mb-lg-3"> Our Services</h4>
            <p>Diagnosis</p>
            <p>Pathology</p>
            <p>Dental Care</p>
            <p>Cardiology</p>
            <p>ICU</p>
            <p>Neurology</p>
            <p>Psychiatrist</p>
          </div>
          <div className="col-md-4">
            <h4 className=" fw-bold text-white mb-lg-3"> Feedback </h4>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
                className="btn btn-info fw-bold text-light"
                value="Submit"
              />
            </Form>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <p className="text-center p-lg-3 p-2 mt-3 mb-0">
          <small>
            Copyright &copy; 2021 All Rights Reserved, designed & developed by
            FahadCodes.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
