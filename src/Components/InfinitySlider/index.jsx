import React from "react";

import "./style.css";

import { INFINITY_SLIDER_CONTENTS } from "../../Configs/InfinitySlider";
import { makeStyles } from "@material-ui/core";

const InfinitySlider = ({ isSlideSpeedFast = false }) => {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.slid} slid`}>
        <div
          className={`${
            isSlideSpeedFast ? classes.highSpeed : classes.lowSpeed
          } slider-track`}
        >
          {INFINITY_SLIDER_CONTENTS.map(({ name, image, alt }, index) => {
            return (
              <div
                className={`${classes.sliderImageContainer} sliderImageContainer sliding-img`}
                key={`${name}-${index}`}
              >
                <img
                  src={image}
                  alt={alt}
                  className={`${classes.sliderImage} sliderImage`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfinitySlider;

const useStyles = makeStyles((theme) => ({
  slid: {
    padding: "1% 0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
  },

  lowSpeed: {
    animation: `$slider 30s linear infinite`,
    display: "flex",
    justifyContent: "space-around",
    width: "calc(25rem * 10)",
  },

  "@keyframes slider": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: `translateX(calc(-25rem * 3))`,
    },
  },

  highSpeed: {
    animation: `$highSpeedSlide 30s linear infinite`,
    display: "flex",
    justifyContent: "space-around",
    width: "calc(25rem * 8)",
  },

  "@keyframes highSpeedSlide": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: `translateX(calc(25rem * 5))`,
    },
  },

  sliderImageContainer: {
    height: "3rem",
    width: "10rem",
  },

  sliderImage: {
    height: "3rem",
    width: "10rem",
    cursor: "pointer",
    filter: "grayscale(100%)",
    opacity: "0.2",
    "&:hover": {
      cursor: "pointer",
      filter: "none",
      opacity: "1",
    },
  },
}));
