import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Box, makeStyles, Typography } from "@material-ui/core";

import "./style.css";
import { MAIN_SLIDER_DATA } from "../../Configs/MainSlider";

import { Carousel } from "react-responsive-carousel";

import SECURITY from "../../Assets/Images/Slider-images/2-security.jpg";
import NETWORK from "../../Assets/Images/Slider-images/1-network.jpg";
import DATA from "../../Assets/Images/Slider-images/3-data.jpg";
import StructuredNavbar from "../StructuredNavbar";

const MainSlider = () => {
  const classes = useStyles();

  const [currentSlideData, setCurrentSlideData] = useState({});

  const setMovieKey = (currentSlide) => {
    setCurrentSlideData(Object.values(MAIN_SLIDER_DATA)[currentSlide || 0]);
  };

  const { bg_color = "", heading = "", subtitle = "" } = currentSlideData || {};

  return (
    <>
      <span style={{ position: "relative" }}>
        <Carousel
          onChange={setMovieKey}
          showThumbs={false}
          emulateTouch={true}
          dynamicHeight={true}
          autoPlay={true}
          autoFocus={true}
          showArrows={true}
          infiniteLoop={true}
          stopOnHover={true}
          swipeable={true}
          swipeScrollTolerance={10}
          useKeyboardArrows={true}
          transitionTime="1000"
          interval="5000"
          showStatus={false}
        >
          <div>
            <img
              src={NETWORK}
              alt="NETWORK"
              width={"100%"}
              className="image-slider"
            />
          </div>
          <div>
            <img
              src={SECURITY}
              alt="SECURITY"
              width={"100%"}
              className="image-slider"
            />
          </div>
          <div>
            <img
              src={DATA}
              alt="DATA"
              width={"100%"}
              className="image-slider"
            />
          </div>
          <div>
            <img
              src={DATA}
              alt="DATA"
              width={"100%"}
              className="image-slider"
            />
          </div>
        </Carousel>
        <StructuredNavbar />
        <Typography
          variant={"h4"}
          className={`${classes.informationBarTitle} informationBarTitle`}
        >
          {heading || MAIN_SLIDER_DATA.slider_1.heading}
        </Typography>
        <Box className={`${classes.infoBlock} infoBlock block`}>
          <Box className={`${classes.informationBar} informationBar`}>
            <Box
              className={`${classes.informationMSGContainer} informationMSGContainer`}
              style={{
                backgroundColor: bg_color || MAIN_SLIDER_DATA.slider_1.bg_color,
              }}
            >
              <Typography
                variant="body1"
                className={`${classes.informationMSG} informationMSG`}
              >
                {subtitle || MAIN_SLIDER_DATA.slider_1.subtitle}
              </Typography>
            </Box>
          </Box>
        </Box>
      </span>
    </>
  );
};

export default MainSlider;

const useStyles = makeStyles((theme) => ({
  informationBar: {
    width: "60%",
    height: "210px",
    position: "absolute",
    top: "50%",
  },
  informationMSGContainer: {
    width: "100%",
    height: "fit-content",
    color: "#ffffff",
    borderRadius: "0 80px 80px 0",
    background: "rgba(0,0,0,0.8)",
  },
  informationMSG: {
    color: "#ffffff",
    padding: "2%",
    fontSize: "1.8rem",
  },
  informationBarTitle: {
    color: "#ffffff",
    padding: "3%",
    textShadow: "2px 2px black",
    fontSize: "3rem !important",
    position: "absolute",
    top: "27%",
    width: "51%",
  },
}));
