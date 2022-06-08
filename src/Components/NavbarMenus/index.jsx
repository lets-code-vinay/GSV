import React, { useState } from "react";
import { bool, shape } from "prop-types";
import {
  Box,
  ClickAwayListener,
  Grid,
  Grow,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "./style.css";
import { THEME_COLOR } from "../../Configs/Theme";

const NavbarMenus = ({ isOpen, navMenus }) => {
  const classes = useStyles();

  const [isMenuOpened, setOpen] = useState(isOpen);
  const [isPopularEnabled] = useState(
    Object.keys(navMenus.menus).includes("POPULAR")
  );

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <Grow
          in={isMenuOpened}
          style={{ transformOrigin: "0 0 0" }}
          {...(isMenuOpened ? { timeout: 600 } : {})}
        >
          <Grid container className={`${classes.subMenu_1} subMenu_1`}>
            <Grid
              item
              xs={0}
              sm={0}
              md={2}
              lg={2}
              className={`${classes.menuImage} menuImage`}
            >
              <Box className={`${classes.imageBlock} imageBlock block`}>
                <img
                  src={navMenus.image}
                  alt={navMenus.title}
                  className={`${classes.imageSubMenu} imageSubMenu`}
                />
                <Box className={`${classes.informationBar} informationBar`}>
                  <Typography
                    variant={"h4"}
                    className={`${classes.informationBarTitle} informationBarTitle`}
                  >
                    {navMenus.title}{" "}
                  </Typography>
                  <Box
                    className={`${classes.informationMSGContainer} informationMSGContainer`}
                    style={{ backgroundColor: THEME_COLOR.color_5 }}
                  >
                    <Typography
                      variant="body1"
                      className={`${classes.informationMSG} informationMSG`}
                    >
                      {navMenus.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={`${classes.menuBlock} menuBlock`}>
                <Grid container>
                  {Object.values(navMenus.menus).map(
                    (
                      { value = "", image = "", label = "", menus = {} },
                      index
                    ) => {
                      if (value === "POPULAR") return null;
                      return (
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Box key={index}>
                            <Box
                              className={`${classes.MenuTitleContainer} MenuTitleContainer`}
                            >
                              {/* <img
                                src={image}
                                alt={label}
                                style={{ width: "24px" }}
                              /> */}

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
                                  <Grid item sm={12} xs={12} md={6} lg={6}>
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
                                  </Grid>
                                );
                              }
                            )}
                          </Box>
                        </Grid>
                      );
                    }
                  )}
                </Grid>
              </Box>
            </Grid>

            {isPopularEnabled && (
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box
                  className={`${classes.popularBlock} popularBlock block`}
                  style={{ backgroundColor: THEME_COLOR.popular_color }}
                >
                  {Object.values(navMenus.menus).map(
                    ({ value = "", image = "", label, menus }, index) => {
                      if (value !== "POPULAR") return null;
                      return (
                        <Box key={index}>
                          <Box
                            className={`${classes.popularTitleContainer} popularTitleContainer`}
                          >
                            {/* <img
                              src={image}
                              alt={label}
                              style={{ width: "24px" }}
                            /> */}

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
        </Grow>
      </ClickAwayListener>
    </>
  );
};
/**
 * Props validation
 */
NavbarMenus.propTypes = {
  isOpen: bool,
  navMenus: shape({}),
};

/**
 *  Default Props
 */
NavbarMenus.defaultProps = {
  isOpen: false,
  navMenus: {},
};

export default NavbarMenus;

const useStyles = makeStyles((theme) => ({
  subMenu_1: {
    position: "absolute",
    top: "16.5% ",
    zIndex: "10",
    height: "500px",
  },

  imageSubMenu: {
    height: "500px",
    objectFit: "cover",
    objectPosition: "20% 10%" /* try 20px 10px */,
  },

  imageBlock: {
    overflow: "hidden",
  },
  //--------information bar-------------
  informationBar: {
    width: "20%",
    height: "210px",
    position: "absolute",
    bottom: "0%",
  },
  informationMSGContainer: {
    width: "100%",
    height: "50%",
    color: "#ffffff",
    padding: "2%",
    borderRadius: "0 60px 60px 0",
  },
  informationMSG: {
    color: "#ffffff",
    padding: "2%",
    fontSize: "0.8rem",
  },
  informationBarTitle: {
    color: "#ffffff",
    padding: "2%",
    textShadow: "3px 3px black",
  },
  //   ----------Menu block--------------
  menuBlock: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    padding: "2% 10%",
  },
  MenuTitleContainer: {
    display: "flex",
    justifyContent: "start",
    marginBottom: "10px",
    width: "80%",
  },
  mainMenuTitle: {
    margin: "10px 0",
    color: THEME_COLOR.main_color,
    fontWeight: "600",
  },
  mainMenuLink: {
    textDecoration: "none",
  },

  mainMenuText: {
    textDecoration: "none",

    color: THEME_COLOR.main_color,
    "&:hover": {
      color: THEME_COLOR.color_5,
      fontSize: "1.075rem",
      letterSpacing: "0",
    },
  },

  //   /-----------------------Popular Block------------
  popularBlock: {
    width: "100%",
    height: "100%",
    padding: "2% 3%",
  },

  popularTitleContainer: {
    display: "flex",
    justifyContent: "start",
    marginBottom: "10px",
    width: "40%",
  },
  popularTitle: {
    margin: "10px 0px",
    color: THEME_COLOR.main_color,
    fontWeight: "600",
  },

  popularLink: {
    textDecoration: "none",
  },

  popularText: {
    textDecoration: "none",

    color: THEME_COLOR.main_color,
    "&:hover": {
      color: THEME_COLOR.color_5,
      fontSize: "1.025rem",
      letterSpacing: "0",
    },
  },
}));
