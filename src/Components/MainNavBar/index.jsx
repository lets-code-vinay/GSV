import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0.5,
    // padding: "0.5%",
  },

  appBar: {
    color: "#0C1B29",
    backgroundColor: "red",
  },
  logo: {
    "&:hover": {
      cursor: "pointer",
      // backgroundColor: "none",
    },
  },

  navbar_text: {
    fontSize: "1.3rem",
    marginRight: "10%",
    marginTop: "-12%",
    paddingTop: "10%",
    fontWeight: "600",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "red",
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
}));

const Navbar = ({ onLoginClick }) => {
  const classes = useStyles();
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
    console.log(menu);
    console.log("event", event);
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
  const renderMobileMenu = (
    <Box className={`${classes.menu} menu`}>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        className={`${classes.menu} menu`}
      >
        {Object.values(NAVBAR_MENUS).map((menu, index) => {
          return (
            <MenuItem key={`${menu.value}-${index}`}>
              <Typography
                variant={"body1"}
                className={classes.navbar_text}
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

  return (
    <div className="Navbar" id="home">
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar} elevation={0}>
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
              {Object.values(NAVBAR_MENUS).map((menu) => {
                return (
                  <MenuItem onClick={handleMainNavbarClick(menu)}>
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
                <MoreIcon />
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

export default Navbar;
