import React from "react";
import { MdMultipleStop } from "react-icons/md";
import { Box, makeStyles, Typography } from "@material-ui/core";
import InfinitySlider from "../InfinitySlider";
import { THEME_COLOR } from "../../Configs/Theme";

const InfinitySliderContainer = () => {
  const classes = useStyles();

  return (
    <Box className={`${classes.multiVendor} multiVendor`}>
      <Box className={`${classes.multiVendorTitle} multiVendorTitle`}>
        <MdMultipleStop
          className={`${classes.multiVendorIcon} multiVendorIcon`}
        />
        <Typography
          variant="h4"
          className={`${classes.trendingText} trendingText`}
        >
          Multi Vendor Support
        </Typography>
      </Box>
      <hr className={`${classes.hr} hr`} />

      <InfinitySlider isSlideSpeedFast={false} />
      <InfinitySlider isSlideSpeedFast={true} />
    </Box>
  );
};

export default InfinitySliderContainer;

const useStyles = makeStyles((theme) => ({
  multiVendor: {
    backgroundColor: THEME_COLOR.popular_color,
  },
  multiVendorTitle: {
    display: "flex",
    flexDirection: "row",
    margin: "0 0 0 15%",
    padding: "2% 0 0 0",

    fontWeight: "800",
    color: "#0d274d",
  },

  multiVendorIcon: {
    fontSize: "60px",
    transform: "rotate(15deg)",
    margin: "0 10px 0 0",
    color: "#0d274d",
  },

  hr: {
    height: "2px",
    backgroundColor: "#0d274d",
    width: "90%",
    margin: "1% auto",
  },
}));
