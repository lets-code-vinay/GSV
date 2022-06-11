import { Grid } from "@mui/material";
import React from "react";
import SideBar from "..";
import "./style.css"

const Industries = () => {
  return (
    <SideBar>
      <Grid item xs={12}>
      <h1 className="industriesHeading my-5">Industries</h1>
      <div>
        <p>Coming Soon...</p>
      </div>
      </Grid>
    </SideBar>
  );
};

export default Industries;
