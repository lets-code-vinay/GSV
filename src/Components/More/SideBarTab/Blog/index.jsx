import { Grid } from "@mui/material";
import React from "react";
import SideBar from "..";
import "./style.css"

const Blogs = () => {
  return (
    <SideBar>
      <Grid xs={12}>
      <h1 className="blogsHeading my-5">Blogs</h1>
      <div>
        <p>Coming Soon...</p>
      </div>
      </Grid>
    </SideBar>
  );
};

export default Blogs;
