import React from "react";
import Grid from "@mui/material/Grid";
import AboutPageImage from "../../../../Assets/Images/aboutPage.png";
import "./About.css";
import SideBar from "../index";

const About = (props) => {
  return (
    <SideBar>
      <Grid item xs={12} className="displayFlex">
        <Grid item xs={5}>
          <div>
            <h1 className="aboutHeading my-5">About Us</h1>
            <p>
              We are growing as a leading information and communication service
              provider and we help organizations in developing next generation
              infrastructure which keeps them operational without any disruption.
              We Design, Deliver & Manage Services that helps our customers in
              improving their customer experience, empower their people, create
              competitive edge and immediately respond to changing scenario. We
              Design, Deliver & Manage Services that helps our customers in
              improving their customer experience, empower their people, create
              competitive edge and immediately respond to changing scenario.
            </p>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div>
            <img src={AboutPageImage} alt="aboutImage" width="100%" height="100%"/>
          </div>
        </Grid>
      </Grid>
    </SideBar>
  );
};

export default About;
