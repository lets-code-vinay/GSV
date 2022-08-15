import React from "react";
import { bool } from "prop-types";
import { Box, Button, Drawer, Typography } from "@material-ui/core";
import {
  Close as CloseIcon,
  Search as SearchIcon,
  TrendingFlat as TrendingFlatIcon,
} from "@material-ui/icons";

import BlueLogo from "../../../Assets/Images/blueLogo.png";

import "./style.css";
import { NAVBAR_MENUS } from "../../../Configs/NavBar/navbar";

const MainMobileMenu = ({ isMobileNavbarOpened = false }) => {
  return (
    <>
      <Box>
        <Drawer className="main-mobile-menu" open={isMobileNavbarOpened}>
          <Box className="mobile-menu-top-bar">
            <CloseIcon className="mobile-menu-icon" />
            <img
              src={BlueLogo}
              alt="Logo in blue"
              className="mobile-menu-logo"
            />
            <SearchIcon className="mobile-menu-icon" />
          </Box>
          <Box className="mobile-menu-container">
            {Object.values(NAVBAR_MENUS).map(
              ({ label, isMore, value, menus }, index) => {
                return (
                  <Box className="mobile-menu-list" key={`${value}-${index}`}>
                    <Typography className="mobile-menu-text">
                      {label}
                    </Typography>
                    <TrendingFlatIcon className="mobile-menu-arrow-icon" />
                  </Box>
                );
              }
            )}
          </Box>
          <Button className="mobile-menu-button">Contact</Button>
        </Drawer>
      </Box>
    </>
  );
};

/**
 * @description: Props validation
 */
MainMobileMenu.propTypes = {
  isMobileNavbarOpened: bool,
};

/**
 * @description: Default Props
 */
MainMobileMenu.defaultProps = {
  isMobileNavbarOpened: false,
};

export default MainMobileMenu;
