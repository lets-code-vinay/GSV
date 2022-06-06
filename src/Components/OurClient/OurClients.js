import React from "react";
import Slider from "react-slick";
import { FaPeopleArrows } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Box, makeStyles, Typography } from "@material-ui/core";

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
  const classes = useStyles();

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
          dots: !true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: !true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
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
    ],
  };

  return (
    <Box className={`${classes.ourClientsMain} ourClientsMain`}>
      <Box className="container topContainer">
        <Box className={`${classes.ourClientsTitle} ourClientsTitle`}>
          <FaPeopleArrows
            className={`${classes.ourClientsIcon} ourClientsIcon`}
          />
          <Typography
            variant="h4"
            className={`${classes.ourClientsText} ourClientsText `}
          >
            Our Clients
          </Typography>
        </Box>
        <hr className={`${classes.hr} hr`} />

        <Slider {...settings}>
          <Box className="firstImage ">
            <img
              src={Granitize}
              className="firstimage imageToResponsive "
              alt="Granitize"
            />
          </Box>
          <Box className="secondImage">
            <img
              src={AirportAuthority}
              className="secondimage imageToResponsive"
              alt="AirportAuthority"
            />
          </Box>
          <Box className="thirdImage">
            <img
              src={TouchBase}
              className="thirdimage imageToResponsive"
              alt="TouchBase"
            />
          </Box>
          <Box className="fourthImage imageStyle">
            <img
              src={EljayEngineering}
              className="fourthimage imageToResponsive"
              alt="EljayEngineering"
            />
          </Box>
          <Box className="fifthImage ">
            <img
              src={BestWestern}
              className="fifthimage imageToResponsive "
              alt="BestWestern"
            />
          </Box>
          <Box className="sixthImage imageStyle">
            <img src={IBM} className="sixthimage imageToResponsive" alt="IBM" />
          </Box>
          <Box className="sevenImage ">
            <img
              src={IBM}
              className="sevenimage imageToResponsive "
              alt="IBM"
            />
          </Box>
          <Box className="eightImage">
            <img src={TechBserver} className="eightimage" alt="TechBserver" />
          </Box>
          <Box className="firstImage ">
            <img
              src={Granitize}
              className="firstimage imageToResponsive"
              alt="Granitize"
            />
          </Box>
          <Box className="secondImage">
            <img
              src={AirportAuthority}
              className="secondimage imageToResponsive"
              alt="AirportAuthority"
            />
          </Box>
          <Box className="thirdImage">
            <img
              src={TouchBase}
              className="thirdimage imageToResponsive"
              alt="TouchBase"
            />
          </Box>
          <Box className="fourthImage imageStyle">
            <img
              src={EljayEngineering}
              className="fourthimage imageToResponsive"
              alt="EljayEngineering"
            />
          </Box>
          <Box className="fifthImage ">
            <img
              src={BestWestern}
              className="fifthimage imageToResponsive "
              alt="BestWestern"
            />
          </Box>
          <Box className="sixthImage imageStyle">
            <img src={IBM} className="sixthimage imageToResponsive" alt="IBM" />
          </Box>
          <Box className="sevenImage ">
            <img
              src={IBM}
              className="sevenimage imageToResponsive "
              alt="IBM"
            />
          </Box>
          <Box className="eightImage">
            <img
              src={TechBserver}
              className="eightimage imageToResponsive"
              alt="TechBserver"
            />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default OurClients;

const useStyles = makeStyles((theme) => ({
  ourClientsMain: {
    margin: "3% 0",
  },
  hr: {
    height: "2px",
    backgroundColor: "#0d274d",
    width: "130%",
    margin: "2% -16%",
  },

  ourClientsText: {
    marginTop: "10px",
    fontWeight: "700",
    color: "#0d274d",
  },

  ourClientsTitle: {
    display: "flex",
    flexDirection: "row",
    padding: "2% 0 0 0",
    alignItem: "center",
  },

  ourClientsIcon: {
    fontSize: "60px",
    margin: "0 10px 0 0",
    color: "#0d274d",
  },
}));
