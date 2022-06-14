import { Box, Tabs } from "@material-ui/core";
import { Tab } from "bootstrap";
import React from "react";
import { Presence } from ".";

export default function MapContainer() {
  return (
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
