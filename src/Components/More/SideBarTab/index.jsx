import React, { useState } from "react";
import { Box, Button, Grid, makeStyles, Modal } from "@material-ui/core";

import "./styles.css";
import Arrow from "../../../Assets/Icons/arrow.svg";
import { SideMenu } from "../../../Configs/More";
import ImageText from "./ImageText";

const SideBar = (props) => {
  const {
    isMoreRef = null,
    isMoreOpen = false,
    onMoreClick = () => {},
  } = props || {};

  const classes = useStyles();
  const [showArrow, setShowArrow] = useState("");
  const [optionType, setOptionType] = useState(SideMenu.about_us);

  /**
   * @description Closing menu
   */
  const handleClosePopover = () => {
    onMoreClick({ isMore: false });
  };

  /**
   * @description Showing sidebar arrow on condition basis
   */
  const onShowArrow = (value) => (_) => {
    setShowArrow(value);
  };

  /**
   * @description Hiding sidebar arrow on condition basis
   */
  const onHideArrow = (value) => (_) => {
    setShowArrow(value);
  };

  /**
   * @description Showing sidebar pages
   */
  const onClickOption = (menu) => (_) => {
    setOptionType(menu);
  };

  return (
    <Modal open={isMoreOpen} anchorEl={isMoreRef} onClose={handleClosePopover}>
      <Grid item container spacing={2}>
        <Grid item xs={2}>
          <div>
            <div className="my-5">
              {Object.values(SideMenu).map((menu, index) => {
                const { label = "", value = "" } = menu || {};

                return (
                  <Box
                    className={`${classes.menuListing} commonClass menuListing`}
                    key={index}
                  >
                    <Button
                      variant={"body"}
                      onMouseEnter={onShowArrow(value)}
                      onMouseLeave={onHideArrow(value)}
                      onClick={onClickOption(menu)}
                      className={`${classes.sideBarOptions} sideBarOptions border-0 backgroundColorWhite`}
                    >
                      {label}
                    </Button>
                    <Box className={`${classes.arrowBox} arrowBox `}>
                      {Boolean(showArrow) && showArrow == value && (
                        <img src={Arrow} alt="arrow-icon" />
                      )}
                    </Box>
                  </Box>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={10}>
          {optionType.type == "image_text" && (
            <ImageText
              title={optionType.title}
              subtitle={optionType.subtitle}
              image={optionType.image}
              alt={optionType.alt}
            />
          )}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default SideBar;

const useStyles = makeStyles((theme) => ({
  menuListing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sideBarOptions: {
    width: "60%",
    display: "flex",
    justifyContent: "flex-start",
  },
  arrowBox: {
    marginTop: "3%",
  },
}));
