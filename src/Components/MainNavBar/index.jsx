import React, { useRef, useState } from "react";
import { bool, func } from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import { BiUser, BiSearchAlt2, BiGlobe } from "react-icons/bi";
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

const MainNavBar = ({
  onSubNavbarOpen,
  onMoreOpen,
  setActive,
  isActive,
  onNavMenus,
  isSubSectionOpen,
  isMoreOpen,
}) => {
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

    onSubNavbarOpen({
      isOpen: true,
      menu,
      event,
    });
    setActive(menu);
    onNavMenus(Object.values(menu?.menus)[0]);
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
      <AppBar
        position="static"
        className={`${classes.grow} appBar`}
        elevation={0}
        ref={anchor}
        style={{
          backgroundColor:
            isSubSectionOpen || isMoreOpen ? "#0D274D" : "transparent",
        }}
      >
        <Toolbar className={`${classes.appBarChild} appBarChild`}>
          <Box
            edge="start"
            className={`${classes.menuButton} display`}
            color="inherit"
          >
            <img
              src={Logo}
              alt="main-logo"
              className={`${classes.logo} logo-1`}
            />
            <div className={`${classes.sectionDesktop} sectionDesktop`}>
              {Object.values(NAVBAR_MENUS).map((menu, i) => {
                return (
                  <MenuItem
                    onClick={handleMainNavbarClick(menu)}
                    style={{
                      borderBottom:
                        isSubSectionOpen && isActive.value === menu.value
                          ? "3px solid #ffff"
                          : "3px solid transparent",
                    }}
                    key={i}
                    className={`${classes.sectionDesktopMenus} sectionDesktopMenus`}
                  >
                    <Typography
                      variant={"body1"}
                      className={`${classes.navbar_text} navbar_text`}
                    >
                      {menu.label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </div>
          </Box>
          <Box className="nav-bar-grow"></Box>
          <Box className="nav-bar-icons">
            <BiSearchAlt2 className="search" />
            <BiUser className="profile" />
            <BiGlobe className="globe" />
          </Box>

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
  );
};

/**
 * Props validation
 */
MainNavBar.propsType = {
  onSubNavbarOpen: func.isRequired,
  onNavMenus: func,
  isSubSectionOpen: bool,
};

/**
 *  Default Props
 */
MainNavBar.defaultProps = {
  onSubNavbarOpen: () => {},
  onNavMenus: () => {},
  isSubSectionOpen: false,
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
  },

  navbar_text: {
    color: "#ffffff",
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
  },

  mobile3Dots: {
    color: "#ffffff",
  },
}));
