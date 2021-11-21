import "./ServiceDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetch("/servicesdetail.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  const singleService = serviceDetails.filter(
    (serviceData) => serviceData.id == id
  );
  console.log(singleService);

  return (
    <div className="container mb-5">
      <div className="row">
        <h3 className='my-lg-5 my-3 text-lg-4xl fw-bold text-indigo-500'>We Are Commited To Provide You The Best Service </h3>
        <div className="col-md-6 col-12">
          <div>
            <img className=" mx-auto" src={singleService[0]?.img} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <h1 className='fw-bold text-primary mt-4 mb-3'> {singleService[0]?.detailsHeader}</h1>
          <p className='p-lg-3 p-2'>{singleService[0]?.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
