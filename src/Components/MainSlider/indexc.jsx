import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import SECURITY from "../../Assets/Images/Slider-images/2-security.jpg";
import NETWORK from "../../Assets/Images/Slider-images/1-network.jpg";
import DATA from "../../Assets/Images/Slider-images/3-data.jpg";
import { Box } from "react-feather";
import { makeStyles, Typography } from "@material-ui/core";
import { THEME_COLOR } from "../../Configs/Theme";

const MainSlider = () => {
  const classes = useStyles();
  return (
    <>
      <Carousel
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
      >
        <div>
          <img
            src={NETWORK}
            alt="NETWORK"
            width={"100%"}
            className="image-slider"
          />
          <p className="legend">NETWORK</p>
        </div>
        <div className="">
          <img
            src={SECURITY}
            alt="SECURITY"
            width={"100%"}
            className="image-slider"
          />
          <p className="legend">SECURITY</p>
        </div>
        <div>
          <img src={DATA} alt="DATA" width={"100%"} className="image-slider" />
          <p className="legend">DATA</p>
        </div>
      </Carousel>
    </>
  );
};

export default MainSlider;

const useStyles = makeStyles((theme) => ({
  informationBar: {
    width: "20%",
    height: "210px",
    position: "absolute",
    bottom: "0%",
  },
  informationMSGContainer: {
    width: "100%",
    height: "50%",
    color: "#ffffff",
    padding: "2%",
    borderRadius: "0 60px 60px 0",
  },
  informationMSG: {
    color: "#ffffff",
    padding: "2%",
    fontSize: "0.8rem",
  },
  informationBarTitle: {
    color: "#ffffff",
    padding: "2%",
    textShadow: "3px 3px black",
  },
}));
