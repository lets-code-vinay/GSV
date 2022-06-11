import React from "react";
import Grid from "@mui/material/Grid";
import SideBar from "..";
import "./WhyChoose.css"

const WhyChooseUs = () => {
  return (
    <>
      <SideBar>
        <Grid item xs={12}>
          <div>
            <h1 className="whyChooseHeading my-5">Why Choose Us</h1>
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
        <Grid item xs={12} className="displayFlex">
          <Grid xs={4}>
            <div>
              <img src="/igm" alt="here image show" />
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <h4 className="textColorRed">Technology Expense Managemant and solution</h4>
              <p className="backTextColor">Here first para line </p>
              <p className="backTextColor">Here first para line </p>
              <p className="backTextColor">Here first para line </p>
              <p className="backTextColor">Here first para line </p>
              <p className="backTextColor">Here first para line </p>
              <p className="backTextColor">Here first para line </p>
            </div>
          </Grid>
        </Grid>
      </SideBar>
    </>
  );
};
export default WhyChooseUs;
