import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography, makeStyles } from "@material-ui/core";
import "./style.css";

import {
  AFRICA,
  AFRICA_ROTATION,
  ASIA,
  ASIA_ROTATION,
  SOUTH_AMERICA,
  SOUTH_AMERICA_ROTATION,
} from "../../Configs/OurPresence/index.js";
import MapCharts from "./Maps.jsx";

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

export default function MapContainer({ isMapTitleEnable = false, title = "" }) {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={`${classes.presenceMain} presenceMain`}>
      {isMapTitleEnable && <h1 className="mapTitle my-3">{title}</h1>}

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
        <MapCharts markers={ASIA} region={"Asia"} rotation={ASIA_ROTATION} />
      </Presence>

      <Presence value={value} index={2}>
        <MapCharts
          markers={AFRICA}
          region={"Africa"}
          rotation={AFRICA_ROTATION}
        />
      </Presence>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  presenceMain: {
    width: "80%",
    margin: "auto",
    color: "white",
    backgroundColor: "#0d274d",
  },
  leftSideWorld: {
    width: "80%",
    marginLeft: "30%",
  },
}));
