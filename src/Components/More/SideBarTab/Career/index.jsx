import { Grid } from "@mui/material";
import React from "react";
import SideBar from "..";
import "./style.css"

const Career = () => {
  return (
    <SideBar>
      <Grid item xs={12}>
      <h1 className="careerHeading my-5">Career</h1>
      <div>
        <p>Coming Soon...</p>
      </div>
      </Grid>
    </SideBar>
  );
};

export default Career;
