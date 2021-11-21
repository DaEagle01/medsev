import "./About.css";
import React from "react";

const About = () => {
  return (
    <div className=" container">
      <div className=" btn-primary container">
        <h1 className="text-light fw-bold p-lg-3">About Us</h1>
      </div>
      <div className="row my-lg-5">
        <div className="col-md-6 col-12">
          <img
            src="https://image.freepik.com/free-vector/teamwork-concept-with-people-illustration_52683-52977.jpg"
            alt=""
            className=" p-3"
          />
        </div>
        <div className="col-md-6 col-12">
          <h2 className="fw-bold text-info">MedSev</h2>
          <p className="text-left">
            MedSev is an I.T empowered Medical Clinic giving qualified Doctors
            to treat patients. Visit to the specialist’s facility for treatment
            can be awkward and tedious, for the patient as well as for relatives
            also. <br /> Venturing out to the Clinic/Hospital, confronting the
            danger of introduction to doctor’s facility or clinical germs,
            ceasing over at the therapeutic store or at the Pathology Lab for
            examination for the most part removes time from another beneficial
            movement. <br /> A quick, proficient, and financially savvy strategy
            to get treatment in the solace of your home or office results in
            better Doctor-Patient communication and treatment.PQR every minute
            of every day consolidates cutting edge telemedicine, telemonitoring
            and home wellbeing to give you prompt access to western prepared
            specialists and health specialists for sound, intense and unending
            conditions the board and counsel through voice/video calls, live
            talk and additionally on-location specialist visits and centers.{" "}
            <br /> You can converse with our western prepared specialists and
            wellbeing specialists from anyplace on the planet, regardless of
            whether you are at home, at the workplace, on an excursion for work
            or in the midst of some recreation. <br /> Our full-time western
            prepared specialists practice Evidence-Based Medicine through NHS
            International Guidelines and will reveal to you reality about what
            you require, not exactly what you can bear the cost of in this
            manner guaranteeing better clinical and budgetary results. <br /> We
            will probably guarantee suitable harmony among quality and cost,
            beginning from the minute you get to our doctor helpline (by means
            of our intelligent versatile application called XYZ all day, every
            day, or without toll number 800-MD247) to the point of recuperation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
