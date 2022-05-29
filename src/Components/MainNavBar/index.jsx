import React, { useState } from "react";
import { Link } from "react-scroll";

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
  Button,
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

  console.log(Object.values(NAVBAR_MENUS).map((menu) => menu.label));

  // /**
  //  * @description: To redirect to Login Screen
  //  */
  // const handleLogInClick = () => {
  //   onLoginClick();
  // };

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
        <div>
          <MenuItem className={`${classes.menuItem} menuItem menuItemMobile`}>
            <Link to="whatWeDoId" spy={true} smooth={true} duration={250}>
              <Typography
                variant={"body1"}
                className={`${classes.navbar_text} navbar_menu_mobile`}
              >
                Product
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem className={`${classes.menuItem} menuItem menuItemMobile`}>
            <Link to="queryPageId" spy={true} smooth={true} duration={250}>
              <Typography
                variant={"body1"}
                className={`${classes.navbar_text} navbar_menu_mobile`}
              >
                Pricing
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem className={`${classes.menuItem} menuItem menuItemMobile`}>
            <Link to="whatWeDoId" spy={true} smooth={true} duration={250}>
              <Typography
                variant={"body1"}
                className={`${classes.navbar_text} navbar_menu_mobile`}
              >
                About us
              </Typography>
            </Link>
          </MenuItem>
        </div>
        <div>
          <MenuItem className={`${classes.menuItem} menuItem menuItemMobile`}>
            <Button
              label="Login"
              // onClick={handleLogInClick}
              className={`${classes.login_button} login_button menuButtonMobile`}
            >
              Login
            </Button>
          </MenuItem>
        </div>
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
              <MenuItem>
                <Link to="whatWeDoId" spy={true} smooth={true} duration={250}>
                  <Typography variant={"body1"} className={classes.navbar_text}>
                    Product
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="queryPageId" spy={true} smooth={true} duration={250}>
                  <Typography variant={"body1"} className={classes.navbar_text}>
                    Pricing
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="whatWeDoId" spy={true} smooth={true} duration={250}>
                  <Typography variant={"body1"} className={classes.navbar_text}>
                    About us
                  </Typography>
                </Link>
              </MenuItem>
              {/* 
              <MenuItem>
                <Button
                  label="Login"
                  // onClick={handleLogInClick}
                  variant={"outlined"}
                  className={`${classes.login_button} login_button`}
                >
                  Login
                </Button>
              </MenuItem> */}
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
