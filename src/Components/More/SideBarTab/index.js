import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { SideMenu } from "../../../Configs/More";
import AboutPageImage from "../../../Assets/Images/aboutPage.png";
import "./About.css";
import WhyChooseUs from "./WhyChoose/index";
import About from "./About";
import { useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const navigator = useNavigate();
  const [isAboutActive, setIsAboutActive] = useState(1);
  const [storeLabel, setStoreLabel] = useState();
  const [choose, setChoose] = useState(false);
  const [industries, setIndustries] = useState(false);
  const [presence, setPresence] = useState(false);
  const [customers, setCustomers] = useState(false);
  //   const [choose, setChoose] = useState(false)
  //   const [choose, setChoose] = useState(false)
  //   const [choose, setChoose] = useState(false)
  const filteredLabel = SideMenu.filter((item, i) => {
    return item;
  });
  console.log(storeLabel);
  return (
    <Grid item container spacing={2}>
      <Grid item xs={2}>
        <div>
          <div className="my-5">
            {SideMenu.map((item, i) => {
              return (
                <>
                  <NavLink to={item.path} style={{ textDecoration: "none" }}>
                    <div className="commonClass displayFlex" key={i}>
                      <button className="border-0 backgroundColorWhite">
                        {item.label}
                      </button>
                      <CgArrowLongRight />
                    </div>
                  </NavLink>
                </>
              );
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
