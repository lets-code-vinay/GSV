import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

import { IoIosPeople } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BiMobileAlt, BiPhone } from "react-icons/bi";
import { GiFactory } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import {
  MdAlternateEmail,
  MdOutlineLocationOn,
  MdOutlineStickyNote2,
  MdOutlineEditNote,
  MdOutlinePrivacyTip,
} from "react-icons/md";

import "./style.css";

import Logo from "../../Assets/Images/white-logo.png";
import { THEME_COLOR } from "../../Configs/Theme";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.footer} footer`}>
      <Grid container className={`${classes.footerBody} footerBody`}>
        <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
          <img
            src={Logo}
            alt={"logo of company"}
            className={`${classes.footerLogo} footerLogo`}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} id="grid">
          <Typography
            variant={"h5"}
            className={`${classes.menuListTitle} menuListTitle`}
          >
            Menu
          </Typography>
          <Box className={`${classes.menuList} menuList`}>
            <IoIosPeople className={`${classes.menuListIcon} menuListIcon`} />
            <a href="#" className={`${classes.menuListLink} menuListLink`}>
              <Typography
                variant={"body1"}
                className={`${classes.menuListText} menuListText`}
              >
                About
              </Typography>
            </a>
          </Box>
          <Box className={`${classes.menuList} menuList`}>
            <MdOutlineLocationOn
              className={`${classes.menuListIcon} menuListIcon`}
            />
            <a href="#" className={`${classes.menuListLink} menuListLink`}>
              <Typography
                variant={"body1"}
                className={`${classes.menuListText} menuListText`}
              >
                Our Presence
              </Typography>
            </a>
          </Box>
          <Box className={`${classes.menuList} menuList`}>
            <GiFactory className={`${classes.menuListIcon} menuListIcon`} />
            <a href="#" className={`${classes.menuListLink} menuListLink`}>
              <Typography
                variant={"body1"}
                className={`${classes.menuListText} menuListText`}
              >
                Industries
              </Typography>
            </a>
          </Box>
          <Box className={`${classes.menuList} menuList`}>
            <MdOutlineStickyNote2
              className={`${classes.menuListIcon} menuListIcon`}
            />
            <a href="#" className={`${classes.menuListLink} menuListLink`}>
              <Typography
                variant={"body1"}
                className={`${classes.menuListText} menuListText`}
              >
                Career
              </Typography>
            </a>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={3} id="grid">
          <Typography
            variant={"h5"}
            className={`${classes.menuListTitle} menuListTitle`}
          >
            Support
          </Typography>

          <Box className={`${classes.menuList} menuList`}>
            <FaQuestion className={`${classes.menuListIcon} menuListIcon`} />
            <a href="#" className={`${classes.menuListLink} menuListLink`}>
              <Typography
                variant={"body1"}
                className={`${classes.menuListText} menuListText`}
              >
                FAQ
              </Typography>
            </a>
          </Box>
          <Box className={`${classes.menuList} menuList`}>
            <MdOutlineEditNote
              className={`${classes.menuListIcon} menuListIcon`}
            />
            <a href="#" className={`${classes.menuListLink} menuListLink`}>
              <Typography
                variant={"body1"}
                className={`${classes.menuListText} menuListText`}
              >
                Terms & Conditions
              </Typography>
            </a>
          </Box>
          <Box className={`${classes.menuList} menuList`}>
            <MdOutlinePrivacyTip
              className={`${classes.menuListIcon} menuListIcon`}
            />
            <a href="#" className={`${classes.menuListLink} menuListLink`}>
              <Typography
                variant={"body1"}
                className={`${classes.menuListText} menuListText`}
              >
                Privacy Policy
              </Typography>
            </a>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
          <Typography
            variant={"h5"}
            className={`${classes.menuListTitle} menuListTitle`}
          >
            Contact Us
          </Typography>
          <Typography
            variant={"body1"}
            className={`${classes.menuListTextContact} menuListTextContact`}
          >
            <IoLocationSharp
              className={`${classes.menuListIcon} menuListIcon`}
            />
            90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Haryana
            (India) 122008
          </Typography>
          <br />
          <Typography
            variant={"body1"}
            className={`${classes.menuListTextContact} menuListTextContact`}
          >
            <BiMobileAlt className={`${classes.menuListIcon} menuListIcon`} />
            Mobile: 9818958822
          </Typography>
          <Typography
            variant={"body1"}
            className={`${classes.menuListTextContact} menuListTextContact`}
          >
            <BiPhone className={`${classes.menuListIcon} menuListIcon`} />
            Phone: +91 - 124 4278999
          </Typography>
          <Typography
            variant={"body1"}
            className={`${classes.menuListTextContact} menuListTextContact`}
          >
            <MdAlternateEmail
              className={`${classes.menuListIcon} menuListIcon`}
            />
            Email: sales@asianglobalsolutions.in
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: THEME_COLOR.main_color,
  },
  footerBody: {
    padding: "2%",
    width: "80%",
    margin: "auto",
  },
  footerLogo: {
    width: "250px",
  },
  menuListTitle: {
    fontSize: "1.6rem",
    color: THEME_COLOR.color_3,
    borderBottom: `2px solid ${THEME_COLOR.color_3}`,
    width: "80%",
    marginBottom: "20px",
    fontWeight: "600",
  },
  menuList: {
    display: "flex",
    justifyContent: "start",
  },
  menuListIcon: {
    color: "white",
    fontSize: "1rem",
    marginRight: "10px",
    marginTop: "3px",
    "&:hover": {
      color: THEME_COLOR.color_5,
      fontSize: "1.2rem",
    },
  },
  menuListLink: {
    textDecoration: "none",
    color: "white",
  },

  menuListText: {
    listDecoration: "none",
    marginLeft: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    color: THEME_COLOR.popular_color,

    "&:hover": {
      color: THEME_COLOR.color_5,
      fontSize: "1.2rem",
    },
  },
  menuListTextContact: {
    listDecoration: "none",
    marginLeft: "5px",
    fontSize: "1rem",
    width: "80%",
    cursor: "default",
    color: THEME_COLOR.popular_color,

    "&:hover": {
      color: THEME_COLOR.color_5,
    },
  },
}));
