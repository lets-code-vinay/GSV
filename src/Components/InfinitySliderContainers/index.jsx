import React from "react";
import { MdMultipleStop } from "react-icons/md";
import { Box, makeStyles, Typography } from "@material-ui/core";
import InfinitySlider from "../InfinitySlider";
import { THEME_COLOR } from "../../Configs/Theme";

const InfinitySliderContainer = () => {
  const classes = useStyles();

  return (
    <Box className={`${classes.multiVendor} multiVendor`}>
      <InfinitySlider isSlideSpeedFast={false} />
      <InfinitySlider isSlideSpeedFast={true} />
    </Box>
  );
};

export default InfinitySliderContainer;

const useStyles = makeStyles((theme) => ({}));
