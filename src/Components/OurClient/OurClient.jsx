import React from "react";
import "./OurClient.css";

const OurClient = () => {
  return (
    <>
      <div className="headerClient">
        <h3 className="ourClientHead">Our Client</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..this." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..sdfasdfasd." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt=".asdfasdf.." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default OurClient;
