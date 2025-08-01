import React from "react";

import laptop from "../../../components/assets/laptop-min.jpg";
import dollar from "../../../components/assets/dollar.jpg";
import england from "../../../components/assets/england2-min.jpg";
import iphone from "../../../components/assets/iphone14-min.jpg";

function LandingCarousel() {
  return (
    <div className="container">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={laptop} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={dollar} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={iphone} className="d-block w-100" alt="..." />
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
    </div>
  );
}

export default LandingCarousel;
