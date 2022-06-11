import React from "react"
import { Grid } from "@mui/material";
import { CgArrowLongRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { SideMenu } from "../../../Configs/More";
import "../SideBarTab/About/About.css";

const SideBar = (props) => {
  return (
    <Grid item container spacing={2}>
      <Grid item xs={2}>
        <div>
          <div className="my-5">
            {SideMenu.map(({ path = "", label = "" }, index) => {
              return <NavLink to={path} style={{ textDecoration: "none" }} key={index}>
                <div className="commonClass displayFlex" >
                  <button
                    className="border-0 backgroundColorWhite"
                  >
                    {label}
                  </button>
                  <CgArrowLongRight />
                </div>
              </NavLink>
            })}
          </div>
        </div>
      </Grid>
      <Grid item xs={10} >
        {props.children}
      </Grid>
    </Grid>
  );
};

export default SideBar;
