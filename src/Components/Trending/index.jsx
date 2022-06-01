import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../node_modules/react-tabs/style/react-tabs.css";

import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
// import FlashOnIcon from "@mui/icons-material/FlashOn";
import { TRENDING_CONFIGS } from "../../Configs/Trending";
import { THEME_COLOR } from "../../Configs/Theme";

const Trending = () => {
  const classes = useStyles();

  return (
    <main className={`${classes.containerTrending} containerTrending`}>
      <Tabs
        id="controlled-tabs"
        defaultFocus={true}
        selectedTabClassName="underline"
        className={`${classes.tabsClass} tabsClass`}
      >
        <TabList>
          {Object.keys(TRENDING_CONFIGS).map((trending, index) => {
            return (
              <Tab key={`${trending}-${index}`}>
                <Button
                  Boxor="outline-primary"
                  className={`${classes.tabButton} tabButton`}
                  id="tabButton"
                >
                  {trending}
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
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <img
                      className="img-fluid"
                      src={icon}
                      alt={title}
                      style={{ width: "250px", height: "250px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box className="content">
                      <Typography
                        variant={"h2"}
                        className={`${classes.trendingTitle} trendingTitle`}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body"
                        className={`${classes.trendingSubTitle} trendingSubTitle`}
                      >
                        {subtitle}
                      </Typography>

                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          className="btn btn-outline-primary"
                          Boxor="outline-primary"
                          rel="noreferrer"
                        >
                          Join Now
                        </a>
                      )}

                      {button && (
                        <Button Boxor="outline-primary">{button}</Button>
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
    padding: "6% 4%",
    backgroundColor: THEME_COLOR.light_sky,
  },

  tabsClass: {
    width: "60%",
    margin: "auto",
  },
  tabMatter: {
    padding: "4% 5%",
    backgroundColor: THEME_COLOR.light_sky,
  },
  tabContainer: {
    backgroundColor: "green",
  },
  tabButton: {
    fontSize: "1.2rem",
    fontWeight: " 600",
    color: `${THEME_COLOR.main_color} !important`,

    "&:hover": {
      backgroundColor: `${THEME_COLOR.main_color} !important`,
      color: "white !important",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      color: "white !important",
      backgroundColor: `${THEME_COLOR.color_3} !important`,
    },
  },

  trendingTitle: {
    color: `${THEME_COLOR.main_color} !important`,
    fontWeight: "800",
    fontSize: "2.5rem !important",
    marginBottom: "4%",
  },

  trendingSubTitle: {
    color: `${THEME_COLOR.color_3} !important`,
    // fontWeight: "500",
    fontSize: "1.2rem",
    fontWeight: "700",
    lineHeight: "1.3",
  },
}));
