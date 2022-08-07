import React, { useState } from "react";
import { shape } from "prop-types";
import {
  Box,
  Button,
  ClickAwayListener,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./styles.css";

import { THEME_COLOR } from "../../Configs/Theme";

const NavbarMenus = ({ navMenus = {} }) => {
  const classes = useStyles();

  const [isPopularEnabled] = useState(
    Object.keys(navMenus?.menus).includes("POPULAR")
  );

  const handleClose = (_) => {};

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Grid container className={`${classes.subMenu1} subMenu1`}>
        <Grid
          item
          xs={0}
          sm={0}
          md={2}
          lg={2}
          className={`${classes.menuImage} menuImage`}
        >
          <Box className={`${classes.imageBlock} imageBlock block`}>
            {/* image size 180 x 404 */}{" "}
            <img
              src={navMenus?.image || null}
              alt={navMenus?.title}
              className={`${classes.imageSubMenu} imageSubMenu`}
            />
            <Box className={`${classes.menuInformationBar} menuInformationBar`}>
              <Typography
                variant={"h4"}
                className={`${classes.menuInformationBarTitle} menuInformationBarTitle`}
              >
                {navMenus?.title}{" "}
              </Typography>
              <Box
                className={`${classes.menuInformationMSGContainer} menuInformationMSGContainer`}
                style={{ backgroundColor: navMenus?.color }}
              >
                <Typography
                  variant="body1"
                  className={`${classes.menuInformationMSG} menuInformationMSG`}
                >
                  {navMenus?.subtitle}
                </Typography>
              </Box>
              <Button
                className="get-in-touch"
                style={{ backgroundColor: navMenus?.color }}
              >
                Get in touch
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <ResponsiveMasonry
            className={`${classes.menuBlock} menuBlock`}
            columnsCountBreakPoints={{ 350: 1, 750: 2 }}
          >
            <Masonry gutter="1">
              {Object.values(navMenus?.menus).map(
                ({ value = "", label = "", menus = {} }, index) => {
                  if (value === "POPULAR") return "";
                  return (
                    <Box
                      key={index}
                      className={`${classes.MenuTitleContainerBox} MenuTitleContainerBox`}
                    >
                      <Box
                        className={`${classes.MenuTitleContainer} MenuTitleContainer`}
                      >
                        <Typography
                          variant={"h5"}
                          className={`${classes.mainMenuTitle} mainMenuTitle`}
                        >
                          {label}
                        </Typography>
                      </Box>
                      {Object.values(menus).map(
                        ({ path = "", value, label }, index) => {
                          return (
                            <a
                              href={path}
                              key={`${value}-${index}`}
                              className={`${classes.mainMenuLink} mainMenuLink`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Typography
                                className={`${classes.mainMenuText} mainMenuText`}
                                variant={"body1"}
                              >
                                {label}
                              </Typography>
                            </a>
                          );
                        }
                      )}
                    </Box>
                  );
                }
              )}
            </Masonry>
          </ResponsiveMasonry>
        </Grid>

        {isPopularEnabled && (
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box
              className={`${classes.popularBlock} popularBlock block`}
              style={{ backgroundColor: THEME_COLOR.popular_color }}
            >
              {Object.values(navMenus?.menus).map(
                ({ value = "", label, menus }, index) => {
                  if (value !== "POPULAR") return null;
                  return (
                    <Box key={index}>
                      <Box
                        className={`${classes.popularTitleContainer} popularTitleContainer`}
                      >
                        <Typography
                          variant={"h5"}
                          className={`${classes.popularTitle} popularTitle`}
                        >
                          {label}
                        </Typography>
                      </Box>
                      <Grid container>
                        {Object.values(menus).map((popMenu, index) => {
                          return (
                            <Grid item sm={12} xs={12} md={6} lg={6}>
                              <a
                                href={popMenu.path}
                                key={`${popMenu.value}-${index}`}
                                className={`${classes.popularLink} popularLink`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Typography
                                  className={`${classes.popularText} popularText`}
                                  variant={"body1"}
                                >
                                  {popMenu.label}
                                </Typography>
                              </a>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  );
                }
              )}
            </Box>
          </Grid>
        )}
      </Grid>
    </ClickAwayListener>
  );
};

/**
 * Props validation
 */
NavbarMenus.propTypes = {
  navMenus: shape({}),
};

/**
 *  Default Props
 */
NavbarMenus.defaultProps = {
  navMenus: {},
};

export default NavbarMenus;

const useStyles = makeStyles((theme) => ({
  subMenu1: {
    position: "absolute",
    zIndex: "10",
    height: "82vh",
  },

  imageSubMenu: {
    objectFit: "cover",
    objectPosition: "20% 10%" /* try 20px 10px */,
  },

  imageBlock: {
    overflow: "hidden",
  },
  //--------information bar-------------
  menuInformationBar: {
    position: "absolute",
  },
  menuInformationMSGContainer: {
    color: "#ffffff",
    padding: "2%",
    borderRadius: "0 60px 60px 0",
  },
  menuInformationMSG: {
    color: "#ffffff",
    padding: "2%",
  },
  menuInformationBarTitle: {
    color: "#ffffff",
    padding: "2%",
    textShadow: "0px 0px 5px black",
  },
  //   ----------Menu block--------------
  menuBlock: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    padding: "3% 3% 0 10%",
  },
  MenuTitleContainer: {
    display: "flex",
    justifyContent: "start",
    margin: "2% 0px 0%",
    width: "80%",
  },
  mainMenuTitle: {
    color: THEME_COLOR.main_color,
    fontWeight: "500",
  },
  mainMenuLink: {
    textDecoration: "none",
  },

  mainMenuText: {
    textDecoration: "none",
    margin: "1% 0",
    width: "90%",
    color: THEME_COLOR.main_color,

    "&:hover": {
      color: THEME_COLOR.color_5,
      letterSpacing: "0",
    },
  },

  //   /-----------------------Popular Block------------
  popularBlock: {
    width: "100%",
    height: "100%",
  },

  popularTitleContainer: {
    display: "flex",
    justifyContent: "start",
    margin: "2% 0px 0%",
    width: "40%",
  },
  popularTitle: {
    color: THEME_COLOR.main_color,
    fontWeight: "500",
  },

  popularLink: {
    textDecoration: "none",
  },

  popularText: {
    textDecoration: "none",
    margin: "1% 0",
    width: "80%",

    color: THEME_COLOR.main_color,
    "&:hover": {
      color: THEME_COLOR.color_5,
      letterSpacing: "0",
    },
  },
}));
