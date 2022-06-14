import React from "react";
import { Grid } from "@material-ui/core";
import "./styles.css";

const ImageText = ({ title = "", subtitle = "", image = "", alt = "" }) => {
  console.log("title", title);
  return (
    <Grid container className="displayFlex">
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <div>
          <h1 className="heading my-5">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <div>
          <img src={image} alt={alt} width="100%" height="100%" />
        </div>
      </Grid>
    </Grid>
  );
};

export default ImageText;
