import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import "slick-carousel/slick/slick.css";

import "./OurClient.css";

import IBM from "../../Assets/ibm.png";
import Granitize from "../../Assets/Granitize.png";
import TouchBase from "../../Assets/touchBase.png";
import TechBserver from "../../Assets/techBserver.png";
import BestWestern from "../../Assets/bestWestern.png";
import EljayEngineering from "../../Assets/eljayEngineering.png";
import AirportAuthority from "../../Assets/airportAuthority.png";


const OurClients = () => {
  const settings = {
    className: "center",
    centerMode: !true,
    infinite: true,
    centerPadding: "5%",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: !true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: !true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      //  needs this code for responsive in future-------
      // {
      //   breakpoint: 420,
      //   settings: {
      //     className:"upto420",
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // },
      // {
      //   breakpoint: 280,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };
  return (
    <>
      <div className="backgroundColor">
        
        <div className="container topContainer">
        <h2 className="ourClientHading">Our Clients</h2>
          <Slider {...settings}>
            <div className="firstImage ">
              <img src={Granitize} className="firstimage " alt="Granitize" />
            </div>
            <div className="secondImage">
              <img src={AirportAuthority} className="secondimage" alt="AirportAuthority"/>
            </div>
            <div className="thirdImage" >
              <img src={TouchBase}  className="thirdimage" alt="TouchBase"/>
            </div>
            <div className="fourthImage imageStyle">
              <img src={EljayEngineering}  className="fourthimage" alt="EljayEngineering"/>
            </div>
            <div className="fifthImage ">
              <img src={BestWestern} className="fifthimage " alt="BestWestern"/>
            </div>
            <div className="sixthImage imageStyle">
              <img src={IBM} className="sixthimage" alt="IBM"/>
            </div>
            <div className="sevenImage ">
              <img src={IBM} className="sevenimage " alt="IBM"/>
            </div>
            <div className="eightImage">
              <img src={TechBserver} className="eightimage" alt="TechBserver"/>
            </div>
            <div className="firstImage ">
              <img src={Granitize} className="firstimage " alt="Granitize" />
            </div>
            <div className="secondImage">
              <img src={AirportAuthority} className="secondimage" alt="AirportAuthority"/>
            </div>
            <div className="thirdImage" >
              <img src={TouchBase}  className="thirdimage" alt="TouchBase"/>
            </div>
            <div className="fourthImage imageStyle">
              <img src={EljayEngineering}  className="fourthimage" alt="EljayEngineering"/>
            </div>
            <div className="fifthImage ">
              <img src={BestWestern} className="fifthimage " alt="BestWestern"/>
            </div>
            <div className="sixthImage imageStyle">
              <img src={IBM} className="sixthimage" alt="IBM"/>
            </div>
            <div className="sevenImage ">
              <img src={IBM} className="sevenimage " alt="IBM"/>
            </div>
            <div className="eightImage">
              <img src={TechBserver} className="eightimage" alt="TechBserver"/>
            </div>
          </Slider>
          <div>
            <p className="allCustomer">ALL CUSTOMERS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
