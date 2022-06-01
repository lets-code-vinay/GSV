import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
// import FlashOnIcon from "@mui/icons-material/FlashOn";
import { TRENDING_CONFIGS } from "../../Configs/Trending";

const Trending = () => {
  const classes = useStyles();

  return (
    <main className={`${classes.containerTrending} containerTrending`}>
      <Tabs>
        <TabList>
          {Object.keys(TRENDING_CONFIGS).map((trending, index) => {
            return (
              <Tab key={`${trending}-${index}`}>
                <Button Boxor="outline-primary">{trending}</Button>
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
                      <Typography variant={"h2"}>{title}</Typography>
                      <Typography variant="body">{subtitle}</Typography>

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
    width: "60%",
    margin: "auto",
    padding: "6% 4%",
  },
  tabMatter: {
    padding: "5%",
  },
  tabContainer: {},
}));
