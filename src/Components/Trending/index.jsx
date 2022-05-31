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
              <TabPanel key={`${label}-${index}`}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <figure>
                      <img className="img-fluid" src={icon} alt={title} />
                    </figure>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
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
  },
}));
