import React from "react";
import { Grid } from "@material-ui/core";

import "./styles.css";

const ImageTextList = ({
  title = "",
  subtitle = "",
  image = "",
  alt = "",
  listTitle = "",
  list = [],
}) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div>
            <h1 className="ImageTextList my-5">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={12} className="displayFlex">
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <div>
              <img src={image} height={`100%`} width={`95%`} alt={alt} />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={7} lg={8}>
            <div>
              <h4 className="textColorRed">{listTitle}</h4>
              {list ||
                [].map((list) => <p className="backTextColor">{list} </p>)}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ImageTextList;
