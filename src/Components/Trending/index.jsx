import React, { useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../node_modules/react-tabs/style/react-tabs.css";
import "react-tabs/style/react-tabs.css";
import "./style.css";

import TRENDING_LOGO from "../../Assets/Icons/trending.svg";

import { TRENDING_CONFIGS } from "../../Configs/Trending";
import { THEME_COLOR } from "../../Configs/Theme";

const Trending = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <main className={`${classes.containerTrending} containerTrending`}>
      <Box className={`${classes.trendingLogo} trendingLogo`}>
        <img
          src={TRENDING_LOGO}
          alt="Trending logo"
          className={`${classes.trendingIcon} trendingIcon`}
        />
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
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        default={0}
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
                <Box
                  className={`${classes.borderBottomClass} borderBottomClass`}
                  style={{
                    backgroundColor:
                      index == tabIndex ? "#43C6AC" : "transparent",
                  }}
                ></Box>
              </Tab>
            );
          })}
        </TabList>

        {Object.values(TRENDING_CONFIGS).map(
          ({ label, title, subtitle, icon, link, button }, index) => {
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
                    md={4}
                    lg={4}
                    className={`${classes.trendingImageGrid} trendingImageGrid`}
                  >
                    <img
                      src={icon}
                      alt={title}
                      className={`${classes.trendingImage} trendingImage`}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={8} lg={8}>
                    <Box className="content">
                      <Typography
                        variant={"h2"}
                        className={`${classes.trendingTitle} trendingTitle`}
                      >
                        {title}
                      </Typography>

                      {subtitle}

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

  trendingIcon: {
    marginTop: "-1%",
  },

  tabsClass: {
    float: "right",
    "&:active": {
      boxShadow: "none",
      borderBottom: "green",
      color: "red",
    },
  },

  tabMatter: {
    padding: "2% 0%",
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
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: `${THEME_COLOR.color_3} !important`,
      borderBottom: "green",
    },
  },

  borderBottomClass: {
    width: "100%",
    height: "4px",
  },

  trendingTitle: {
    color: `${THEME_COLOR.main_color} !important`,
    fontWeight: "800",
    fontSize: "2.5rem",
    marginBottom: "4%",
  },

  trendingLogo: {
    display: "flex",
    flexDirection: "row",
    margin: "0 0 0 11%",
    fontWeight: "800",
    color: "#0d274d",
  },
  trendingText: {
    fontWeight: "400",
  },
  trendingImage: {
    width: "300px",
    height: "300px",
  },
}));
