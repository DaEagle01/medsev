import "./NotFound.css";
import React from "react";
import errorPage from "../../images/errorpage.jpg";

const NotFound = () => {
  return (
    <div>
      <div>
        <img className='img-fluid w-50 mx-auto' src={errorPage} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
