import React, { useRef, useState } from "react";
import { func } from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Menu,
  Box,
} from "@material-ui/core";

import Logo from "../../Assets/Images/white-logo.png";

import { NAVBAR_MENUS } from "../../Configs/NavBar/navbar";
import { THEME_COLOR } from "../../Configs/Theme";

import "./style.css";
const MainNavBar = ({ onSubNavbarOpen, onMoreOpen,  setActive, isActive}) => {
  const classes = useStyles();

  const anchor = useRef(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMainNavbarClick = (menu) => (event) => {
    onMoreOpen({ isMore: menu?.isMore, mainRef: anchor });

    onSubNavbarOpen({ isOpen: true, menu, event });
    setActive(menu.value);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ backgroundColor: "yellow" }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  // --- Mobile Section ---
  const renderMobileMenu = (
    <Box className={`${classes.mobileMenuBG} mobileMenuBG`} id="mobile-bg">
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        className={`${classes.mobileMenu} mobileMenu`}
      >
        {Object.values(NAVBAR_MENUS).map((menu, index) => {
          return (
            <MenuItem
              key={`${menu.value}-${index}`}
              style={{ borderBottom: `3px solid ${THEME_COLOR.color_4}` }}
            >
              <Typography
                variant={"body1"}
                className={classes.navbar_text_mobile}
                style={{ color: "black !important" }}
                onClick={handleMainNavbarClick(menu)}
              >
                {menu.label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );

  // --- Desktop Section ---
  return (
    <div className={`${classes.Navbar} Navbar`} id="home">
      <div className={classes.grow}>
        <AppBar
          position="static"
          className={`${classes.appBar} appBar`}
          elevation={0}
          ref={anchor}
        >
          <Toolbar>
            <Box edge="start" className={classes.menuButton} color="inherit">
              <img
                src={Logo}
                alt="main-logo"
                className={`${classes.logo} logo-1`}
              />
            </Box>

            <div className={classes.grow} />
            <div className={`${classes.sectionDesktop} sectionDesktop`}>
              {Object.values(NAVBAR_MENUS).map((menu, i) => {
                return (
                  <MenuItem
                    onClick={handleMainNavbarClick(menu)}
                    style={{
                      borderBottom:
                        isActive === menu.value
                          ? "3px solid #ffffff"
                          : "3px solid transparent",
                    }}
                    key={i}
                  >
                    <Typography
                      variant={"body1"}
                      className={classes.navbar_text}
                    >
                      {menu.label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </div>

            {/* To open icons */}
            <div className={`${classes.sectionMobile} sectionMobile`}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon className={`${classes.mobile3Dots} mobile3Dots`} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </div>
  );
};

/**
 * Props validation
 */
MainNavBar.propsType = {
  onSubNavbarOpen: func.isRequired,
};

/**
 *  Default Props
 */
MainNavBar.defaultProps = {
  onSubNavbarOpen: () => {},
};

export default MainNavBar;

const useStyles = makeStyles((theme) => ({
  Navbar: {
    position: "absolute",
    top: "0",
    width: "100%",
    background: "#1e44714d",
  },
  grow: {
    flexGrow: 0.5,
  },

  logo: {
    "&:hover": {
      cursor: "pointer",
    },
    width: "20%",
  },

  navbar_text: {
    color: "#ffffff",
    fontSize: "1.6rem",
    fontWeight: "700",
  },
  navbar_text_mobile: {
    fontSize: "1.3rem",
    marginRight: "10%",
    marginTop: "-12%",
    paddingTop: "10%",
    color: "black",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  login_button: {
    fontSize: "1.3rem",
    marginRight: "5%",
    width: "150px",
    textAlign: "center",
    backgroundColor: "#0C1B29",
    "&:hover": {
      backgroundColor: "#080C1F",
    },
    padding: "5px",
    borderRadius: "32px",
    color: "#ffffff",
    fontWeight: "600",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    marginRight: "5%",
  },

  mobile3Dots: {
    color: "#ffffff",
  },
}));
