import React, { useState } from "react";
import IBM from "../../Assets/ibm.png";
import "./OurClient.css";
import Granitize from "../../Assets/Granitize.png";
import BestWestern from "../../Assets/bestWestern.png";
import EljayEngineering from "../../Assets/eljayEngineering.png";
import TechBserver from "../../Assets/techBserver.png";
import TouchBase from "../../Assets/touchBase.png";
import AirportAuthority from "../../Assets/airportAuthority.png";
import { ChevronLeft, ChevronRight } from "react-feather";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const OurClients = () => {
  const [step, setStep] = useState(0);
  const settings = {
    className: "center",
    centerMode: !true,
    infinite: true,
    centerPadding: "5%",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <ChevronRight className="arrowRight" />,
    prevArrow: <ChevronLeft className="arrowLeft" />
  };
  return (
    <>
      <div className="backgroundColor">
        <h2 className="ourClientHading">Our Clients</h2>
        <div className="container">
          <Slider {...settings}>
            <div className="firstImage ">
              <img src={Granitize} className="firstimage " />
            </div>
            <div className="secondImage">
              <img src={AirportAuthority} />
            </div>
            <div className="thirdImage ">
              <img src={TouchBase} />
            </div>
            <div className="fourthImage imageStyle">
              <img src={EljayEngineering} />
            </div>
            <div className="fifthImage ">
              <img src={BestWestern} />
            </div>
            <div className="sixthImage imageStyle">
              <img src={IBM} />
            </div>
            <div className="sevenImage ">
              <img src={IBM} />
            </div>
            <div className="eightImage">
              <img src={TechBserver} />
            </div>
            <div className="firstImage ">
              <img src={Granitize} className="firstimage " />
            </div>
            <div className="secondImage">
              <img src={AirportAuthority} />
            </div>
            <div className="thirdImage ">
              <img src={TouchBase} />
            </div>
            <div className="fourthImage imageStyle">
              <img src={EljayEngineering} />
            </div>
            <div className="fifthImage ">
              <img src={BestWestern} />
            </div>
            <div className="sixthImage imageStyle">
              <img src={IBM} />
            </div>
            <div className="sevenImage ">
              <img src={IBM} />
            </div>
            <div className="eightImage">
              <img src={TechBserver} />
            </div>
          </Slider>
          <div>
            <p className="allCustomer">ALL CUSTOMER</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
