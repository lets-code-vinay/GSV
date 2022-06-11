import { Grid } from "@mui/material";
import React from "react";
import SideBar from "..";
import "./style.css"
import { IndustriesCardData } from "../../../../Configs/IndutriesCard";

const Industries = () => {
  return (
    <SideBar>
        <h1 className="industriesHeading my-5">Industries</h1>
        <Grid container className="displayFlex">
          {
            IndustriesCardData.map((item, i) => {
              return <Grid item sm={6} xs={12} md={9} lg={4} >
                <img src={item.img} />
              </Grid>
            })
          }
        </Grid>
    </SideBar>
  );
};

export default Industries;
