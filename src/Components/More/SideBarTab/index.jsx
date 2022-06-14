import React, { useState } from "react";
import { Box, Button, Grid, makeStyles, Modal } from "@material-ui/core";

import "./styles.css";
import Arrow from "../../../Assets/Icons/arrow.svg";
import { SideMenu } from "../../../Configs/More";
import ImageText from "./ImageText";
import GridPage from "./GridPage/Index";
import ImageTextList from "./ImageTextList";
import MapCharts from "../../Presence/Maps";
import OurPresence from "../../Presence";

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
  const onShowArrow = (value, menu) => (_) => {
    setShowArrow(value);
    setOptionType(menu);
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
                      onMouseEnter={onShowArrow(value, menu)}
                      onMouseLeave={onHideArrow(value, menu)}
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

          {optionType.type == "grid" && (
            <GridPage title={optionType.title} data={optionType.data} />
          )}

          {optionType.type == "coming_soon" && (
            <GridPage title={optionType.title} />
          )}

          {optionType.type == "map" && <OurPresence />}

          {optionType.type == "image_text_list" && (
            <ImageTextList
              title={optionType.title}
              subtitle={optionType.subtitle}
              image={optionType.image}
              alt={optionType.alt}
              listTitle={optionType.listTitle}
              list={optionType.list}
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
