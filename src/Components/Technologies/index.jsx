import * as React from "react";
import { GrTechnology } from "react-icons/gr";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

import "./style.css";

import Software_Define_Grid from "../../Assets/Images/Software_Define_grid.png";
import Security_Img from "../../Assets//Images/security.png";
import technologyWireImage from "../../Assets/Images/technology-wire.png";
import DevOps from "../../Assets/Images/devops.png";
import Data_Center from "../../Assets/Images/data-center.png";
import Cloud_Computing from "../../Assets/Images/cloud_computing.png";
import DesktopImage from "../../Assets/Images/desktop-image.png";
import Networking from "../../Assets/Images/networking.png";
import Docker_img from "../../Assets/Images/Docker_img.png";
import { cardBox } from "../../Configs/Technologies";

// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${CardBackImg})`,
//   },
// };
export default function Technologies() {
  const classes = useStyles();
  return (
    <Box className="technologiesPage" style={{ width: "80%", margin: "auto" }}>
      <Box className={`${classes.technologiesTitle} technologiesTitle`}>
        <GrTechnology
          className={`${classes.TechnologiesIcon} TechnologiesIcon`}
        />
        <Typography
          variant="h4"
          className={`${classes.technologiesText} technologiesText`}
        >
          Technologies
        </Typography>
      </Box>

      <hr className={`${classes.hr} hr`} />

      <p>
        We provide services belongs to all IT technlogoies We provide services
        belongs to all IT technlogoies{" "}
      </p>

      <Grid container spacing={0} className={`${classes.grid1} grid1`}>
        <Grid item xs={6} sm={6} md={6}>
          <div className="column_first">
            <h3 className="card_header">Enterprise Networking & Wireless</h3>
            <div>
              <h3 className="card_heading">
                End to End Wired and Wireless Services
              </h3>
            </div>
            <div>
              <h4 className="card_text">
                Design, Deployment, Monitoring, Support, dsdasd, dasdasdsd
                dsdsdsd trtrtr wewewew ewewe wewewe wewewewewe wewewewew{" "}
              </h4>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <img
            src={technologyWireImage}
            height="100%"
            width="100%"
            className="hoverEffect"
          />
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="marginTop "
      >
        <Grid item xs={8} className="bck1">
          <div className="divImgClass imageLeft" src={Software_Define_Grid}>
            <img src={Software_Define_Grid} className="imgTagSoftware" />
          </div>
          <h3 className="text">Software-Defined Networking</h3>
        </Grid>
        <Grid item xs={4} className="bck2">
          <div className="secirutyOverlay">
            <div
              className="bgColor card-background divSecurity"
              src={Security_Img}
            >
              <img src={Security_Img} className="imageRight securityImgTag" />
            </div>
            <div className="topHeading">
              <p>Security</p>
              <div className="rightImgGradient">
                <h3 className="heading3">Security</h3>
                <div className="paraDiv">
                  <p>this is paragraph</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={0} className="cardGrid">
        <Grid className="cardBody">
          {cardBox.map((item, i) => {
            return (
              <Card key={i} sx={{ minWidth: 275 }} className="cardMenu">
                <CardContent className="cardContent position-relative">
                  <div className="overlay">
                    <div className={item.className} src={item.img}>
                      {/* style={{ color: "white", padding: "20px" }} */}
                      <img
                        src={item.img}
                        width="100%"
                        height="100%"
                        alt="Master the digital landscape"
                        className="overlayImgClass"
                      />
                    </div>
                    <div className="darkOverlay">
                      <h3 className="headingCard">{item.heading}</h3>
                      <div className="imgInnerContent">
                        <h3>{item.text}</h3>
                        <div className="para">
                          <p>{item.para}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
      <Grid container spacing={0} className="">
        <Grid item style={{ width: "100%" }} className="boxBelow"></Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  technologiesTitle: {
    display: "flex",
    flexDirection: "row",
    margin: "0 0 0 15%",
    padding: "2% 0 0 0",
    color: "#0d274d",
  },
  TechnologiesIcon: {
    fontSize: "60px",
    transform: "rotate(15deg)",
    margin: "0 10px 0 0",
    color: "#0d274d",
  },
  technologiesText: {
    fontWeight: "800",
  },

  technologiesPage: {
    width: "80%",
    margin: "auto",
  },
}));
