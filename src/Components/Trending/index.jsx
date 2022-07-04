import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../node_modules/react-tabs/style/react-tabs.css";
import "./style.css";

import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { TRENDING_CONFIGS } from "../../Configs/Trending";
import { THEME_COLOR } from "../../Configs/Theme";

const Trending = () => {
  const classes = useStyles();

  return (
    <main className={`${classes.containerTrending} containerTrending`}>
      <Box className={`${classes.trendingLogo} trendingLogo`}>
        <Typography
          variant={"h4"}
          className={`${classes.trendingText} trendingText`}
        >
          Trending
        </Typography>
      </Box>
      <Tabs
        id="controlled-tabs"
        defaultFocus={true}
        selectedTabClassName="underline"
      >
        <TabList className={`${classes.tabsClass} tabsClass`}>
          {Object.values(TRENDING_CONFIGS).map((trending, index) => {
            return (
              <Tab key={`${trending}-${index}`} style={{ padding: 0 }}>
                <Button
                  boxor="outline-primary"
                  className={`${classes.tabButton} tabButton`}
                  id="tabButton"
                >
                  {trending.label}
                </Button>
              </Tab>
            );
          })}
        </TabList>

        {Object.values(TRENDING_CONFIGS).map(
          ({ label, value, title, subtitle, icon, link, button }, index) => {
            return (
              <TabPanel
                key={`${label}-${index}`}
                className={`${classes.tabContainer} tabContainer`}
              >
                <Grid container className={`${classes.tabMatter} tabMatter`}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    className={`${classes.trendingImageGrid} trendingImageGrid`}
                  >
                    <img
                      src={icon}
                      alt={title}
                      className={`${classes.trendingImage} trendingImage`}
                      style={{ width: "250px", height: "250px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={8}>
                    <Box className="content">
                      <Typography
                        variant={"h2"}
                        className={`${classes.trendingTitle} trendingTitle`}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant={"body1"}
                        className={`${classes.trendingSubTitle} trendingSubTitle`}
                      >
                        {subtitle}
                      </Typography>

                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          className="btn btn-outline-primary"
                          boxor="outline-primary"
                          rel="noreferrer"
                        >
                          Join Now
                        </a>
                      )}

                      {button && (
                        <Button boxor="outline-primary">{button}</Button>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            );
          }
        )}
      </Tabs>
    </main>
  );
};

export default Trending;

const useStyles = makeStyles((theme) => ({
  containerTrending: {
    padding: "2% 4%",
    backgroundColor: THEME_COLOR.light_sky,
  },

  tabsClass: {
    width: "90%",
    margin: "10px auto",
    borderBottom: `5px solid ${THEME_COLOR.main_color}`,
    "&:active": {
      boxShadow: "none",
      color: `${THEME_COLOR.light_sky}`,
      backgroundColor: THEME_COLOR.light_sky,
    },
  },

  tabMatter: {
    padding: "4% 5%",
    backgroundColor: THEME_COLOR.light_sky,
  },
  tabContainer: { width: "90%", margin: "auto" },
  tabButton: {
    fontSize: "1rem",
    fontWeight: "700",
    color: `${THEME_COLOR.main_color} !important`,
    minWidth: "180px",
    width: "100%",

    "&:hover": {
      backgroundColor: `${THEME_COLOR.main_color} !important`,
      color: "white !important",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      // color: `${THEME_COLOR.light_sky} !important`,
      backgroundColor: `${THEME_COLOR.color_3} !important`,
    },
  },

  trendingTitle: {
    color: `${THEME_COLOR.main_color} !important`,
    fontWeight: "800",
    fontSize: "2.5rem",
    marginBottom: "4%",
  },

  trendingSubTitle: {
    color: `${THEME_COLOR.color_3} !important`,
    // fontWeight: "500",
    fontSize: "1.2rem",
    fontWeight: "700",
    lineHeight: "1.3",
  },

  trendingLogo: {
    display: "flex",
    flexDirection: "row",
    margin: "0 0 0 11%",
    fontWeight: "800",
    color: "#0d274d",
  },
}));
