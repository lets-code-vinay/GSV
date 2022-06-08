import * as React from "react";
import PropTypes from "prop-types";

import {
  Tabs,
  Tab,
  Box,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";

import {
  AFRICA,
  AFRICA_ROTATION,
  ASIA,
  ASIA_ROTATION,
  SOUTH_AMERICA,
  SOUTH_AMERICA_ROTATION,
} from "../../Configs/OurPresence/index.js";
import MapCharts from "./Maps.jsx";
import wave1 from "../../Assets/SVGs/wave1white.svg";
import wave2 from "../../Assets/SVGs/wave2grey.svg";

function Presence(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Presence.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OurPresence() {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className={`${classes.mainBody} mainBody`}>
        <Box className={`${classes.wave1grey} wave1grey`}>
          <img
            src={wave2}
            alt="wave 1"
            className={`${classes.firstWave} firstWave `}
          />
          <img src={wave2} alt="wave 1" />
          <img src={wave2} alt="wave 1" />
        </Box>
        <Box className={`${classes.wave1white} wave1white`}>
          <img
            src={wave1}
            alt="wave 1"
            className={`${classes.firstWave} firstWave `}
          />
          <img src={wave1} alt="wave 1" />
          <img src={wave1} alt="wave 1" />
        </Box>

        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={`${classes.gridLeft} gridLeft`}
          >
            <Box className={`${classes.leftSideWorld} leftSideWorld`}>
              <Typography variant={"h2"}>Worldwide Presence</Typography>
              <Typography variant={"p"}>
                We provide Best in class services belongs to all IT technologies
                If you’re searching for talented tech minds who are dedicated to
                their work, we are a perfect fit. We are a dynamic
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={`${classes.presenceMain} presenceMain`}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <Presence value={value} index={0}>
                <MapCharts
                  markers={SOUTH_AMERICA}
                  region={"Americas"}
                  rotation={SOUTH_AMERICA_ROTATION}
                />
              </Presence>

              <Presence value={value} index={1}>
                <MapCharts
                  markers={ASIA}
                  region={"Asia"}
                  rotation={ASIA_ROTATION}
                />
              </Presence>

              <Presence value={value} index={2}>
                <MapCharts
                  markers={AFRICA}
                  region={"Africa"}
                  rotation={AFRICA_ROTATION}
                />
              </Presence>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  mainBody: {
    width: "100%",
    background: "#0d274d",
    color: "white",
    position: "relative",
  },
  gridLeft: {
    margin: "auto",
  },
  presenceMain: {
    width: "80%",
    margin: "auto",
    color: "white",
  },
  leftSideWorld: {
    width: "80%",
    marginLeft: "30%",
  },

  wave1white: {
    display: "flex",
    flexDirection: "row",
    width: "33%",
    marginLeft: "1%",
    position: "absolute",
    top: "2%",
  },

  firstWave: {
    width: "138%",
    marginLeft: "-19px",
    marginTop: "1px",
  },

  wave1grey: {
    display: "flex",
    flexDirection: "row",
    width: "33%",
    marginLeft: "1%",
    position: "relative",
    top: "10%",
  },
}));
