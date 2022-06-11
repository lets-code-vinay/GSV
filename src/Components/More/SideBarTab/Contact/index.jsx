import { Grid } from "@mui/material";
import React from "react";
import SideBar from "..";
import "./style.css"

const Contact = () => {
  return (
    <SideBar>
      <Grid item xs={12}>
      <h1 className="contactHeading my-5">Contact</h1>
      <div>
        <p>Coming Soon...</p>
      </div>
      </Grid>
    </SideBar>
  );
};

export default Contact;
