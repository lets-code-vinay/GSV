import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
import { IndustriesCardData } from "../../../../Configs/IndutriesCard";

const Industries = () => {
  return (
    <>
      <h1 className="industriesHeading my-5">Industries</h1>
      <Grid container className="displayFlex">
        {IndustriesCardData.map((item, i) => {
          return (
            <Grid item sm={6} xs={12} md={9} lg={4}>
              <img src={item.img} alt="" />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Industries;
