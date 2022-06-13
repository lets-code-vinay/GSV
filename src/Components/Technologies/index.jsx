import React, { useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "./style.css";

import Software_Define_Grid from "../../Assets/Images/Software_Define_grid.png";
import Security_Img from "../../Assets//Images/security.png";
import technologyWireImage from "../../Assets/Images/technology-wire.png";
import { cardBox } from "../../Configs/Technologies";

export default function Technologies() {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  const handleHoverEvent = (e) => {
    setIsHover(true);
    e.target.style.background = "red";
    console.log("mouse hover");
  };
  const handleMouseLeaveEvent = () => {
    console.log("mouse out");
    setIsHover(false);
  };
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
          <div className="wireImage" src={technologyWireImage}>
            <img
              src={technologyWireImage}
              height="100%"
              width="100%"
              className="hoverEffect"
            />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="marginTop "
      >
        <Grid item xs={8} className="bck1">
          <div className="softwareImageOverlay">
            <div className="divImgClass imageLeft" src={Software_Define_Grid}>
              <img src={Software_Define_Grid} className="imgTagSoftware" />
            </div>
            <h3 className="text">Software-Defined Networking</h3>
            <div className="headingMainDivSoftware">
              <div className="cardDiv">
                <h4 className="cardTextHeading">
                  Let us Help you to come in Future of SDN{" "}
                </h4>
                <div className="paraText">
                  <p>
                    Cisco-SDWAN, Cisco-DNA-C, Cisco ACI, VeloCloud,Silverlight
                    and many more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="bck2">
        <div className="securityOverlay position-relative">
            <div className="divImgClassSecurity imageRight" src={Security_Img}>
              <img src={Security_Img} className="imgTagSecurity" />
            </div>
            <h3 className="textSecurity">Security</h3>
            <div className="headingMainDivSoftware">
              <div className="cardDivSecurity">
                <h4 className="cardTextHeadingSecurity">
                Advance Security tactics{" "}
                </h4>
                <div className="paraTextSecurity">
                  <p>
                  Cybersecurity, AMP, Network and Cloud Security
                  </p>
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
                      <img
                        src={item.img}
                        width="100%"
                        height="100%"
                        alt="Master the digital landscape"
                        className="overlayImgClass"
                      />
                    </div>
                    <span className="gradient"></span>
                    <div className="headingMainDiv">
                      <h3 className="cardTopHeading">{item.heading}</h3>
                      <div className="cardTextDiv">
                        <h4 className="cardText">{item.text}</h4>
                        <div className="paragraph">
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
