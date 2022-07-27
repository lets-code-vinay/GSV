import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  Menu,
  MenuList,
} from "@material-ui/core";
import "./styles.css";
import PieChart from "./PieChart";
import { INSIGHT_DATA } from "./PieChart/insightData";
import Logo from "../../Assets/Images/blueLogo.png";

const Insight = () => {
  const classes = useStyles();

  const [insightDetail, setInsightDetail] = useState(
    Object.keys(INSIGHT_DATA)[0]
  );

  /**
   * @description update values in right grid from selection
   *
   * @param {Object} insight
   */
  const getInsightDetail = (insight) => {
    setInsightDetail(insight);
  };

  const {
    data: {
      color = "#0d274d",
      info = INSIGHT_DATA.NETWORK.info,
      label = INSIGHT_DATA.NETWORK.label,
    } = {},
  } = insightDetail || INSIGHT_DATA.NETWORK;

  return (
    <Paper elevation={24} className={`${classes.piePaper} piePaper`}>
      <Grid container className={`${classes.pieGrid} pieGrid`}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={`${classes.pieBox} pieBox`}
        >
          <PieChart
            data={INSIGHT_DATA}
            fetchInsightDetails={getInsightDetail}
          />
          <img
            src={Logo}
            alt={"logo inside"}
            className={`${classes.logoInside} logoInside`}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box className={`${classes.pieDetail} pieDetail`}>
            <Typography
              variant={"h4"}
              className={`${classes.pieTitle} pieTitle`}
              style={{ color: color }}
            >
              {label}
            </Typography>
            <Typography
              variant={"body1"}
              className={`${classes.pieInfo} pieInfo`}
            >
              {info}
            </Typography>

            <Button
              variant="contained"
              className={`${classes.pieButton} pieButton`}
              style={{
                backgroundColor: color,
              }}
            >
              Know More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Insight;

const useStyles = makeStyles((theme) => ({
  piePaper: {
    width: "80%",
    margin: "3% auto",
    borderRadius: "50px"
  },
  pieGrid: {},

  pieBox: {
    width: "100%",
    height: "600px",
  },
  pieDetail: {
    width: "80%",
    margin: "12% auto",
  },
  pieInfo: {
    marginTop: "5%",
    color: "#0d274d",
  },
  pieButton: {
    color: "white",
    marginTop: "5%",
  },
  logoInside: {
    position: "relative",
    top: "-58%",
    width: "20%",
    left: "40%",
  },
}));
