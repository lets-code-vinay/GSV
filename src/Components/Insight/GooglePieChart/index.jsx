import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { Button, Box } from "@material-ui/core";
import "./style.css";

import Logo from "../../../Assets/Images/blueLogo.png";
import { INSIGHT_DATA } from "../insightData";

const PieChart = ({ fetchInsightDetails }) => {
  const [slice, setSlice] = useState(null);
  const [color, setColor] = useState("#3C454A");
  const [insightData, setInsightData] = useState(
    Object.values(INSIGHT_DATA)[0]
  );

  /**
   * @description : Preparing data
   */
  useEffect(() => {
    const insightDataFormat = Object.values(INSIGHT_DATA).map(
      ({ label = "", value = 10 }) => {
        return [label, value];
      }
    );

    const colorSet = Object.values(INSIGHT_DATA).map(
      ({ color = "#3C454A" }) => {
        return color;
      }
    );
    setColor(colorSet);
    setInsightData([["Services", "Services by GSV"], ...insightDataFormat]);
  }, []);

  /**
   * @description :options for charts
   */
  const options = {
    pieHole: 0.3,
    fontSize: 15,
    is3D: false,
    pieSliceText: "label",
    pieSliceTextStyle: {
      color: "#1A73E8", // slice label color can be changed from here
    },
    legend: "none",
    tooltip: {
      trigger: "none",
    },
    slices: {
      [slice ?? 0]: {
        offset: "0.04",
        color: slice ? color[slice] : "#002446",
        textStyle: "roboto",
      },
    },
    width: "100%",
    height: "100%",
    colors: ["#EDF1F2"], // Slice background color can be changed from here
    chartArea: {
      left: "6%",
      top: "6%",
      height: "90%",
      width: "90%",
    },
  };

  /**
   * @description handle Click on pie chart slice Button
   */
  const handleButtonClick = (slice) => () => {
    fetchInsightDetails(slice);
  };

  /**
   * @description handle button mouse hover on pie chart slice Button
   */
  const handleButtonMouseEnter = (buttonNum) => () => {
    fetchInsightDetails(buttonNum);
  };

  /**
   * @description handle button mouse leave on pie chart slice Button
   */
  const handleButtonMouseLeave = (buttonNum) => () => {
    fetchInsightDetails(buttonNum);
  };

  /**
   * @description Handle hover use
   * @impact : slice split,
   *
   * @param {Number} slice
   */
  const handleSliceHoverIn = (slice) => {
    setSlice(slice);
    fetchInsightDetails(slice);
  };

  /**
   * @description Handle hover out use
   * @impact : slice split,
   *
   * @param {Number} slice
   */
  const handleSliceHoverOut = () => {
    setSlice(null);
    fetchInsightDetails(null);
  };

  return (
    <>
      <Box className="pie">
        <Chart
          chartType="PieChart"
          width="100%"
          height="500px"
          data={insightData}
          options={options}
          chartEvents={[
            {
              eventName: "ready",
              callback: ({ chartWrapper, google }) => {
                const chart = chartWrapper.getChart();

                google.visualization.events.addListener(
                  chart,
                  "onmouseover",
                  (e) => {
                    const { row, column } = e;
                    handleSliceHoverIn(row);
                  }
                );
                google.visualization.events.addListener(
                  chart,
                  "onmouseout",
                  (e) => {
                    const { row, column } = e;
                    handleSliceHoverOut(row);
                  }
                );

                google.visualization.events.addListener(chart, "click", (e) => {
                  console.log("clicked on slice");
                });
              },
            },
          ]}
        />
        <img src={Logo} alt={"logo inside"} className={` logoInside`} />

        {(!slice || slice == 0) && (
          <Button
            className="button-0"
            onClick={handleButtonClick(0)}
            onMouseEnter={handleButtonMouseEnter(0)}
            onMouseLeave={handleButtonMouseLeave(0)}
          >
            know More
          </Button>
        )}

        {slice == 1 && (
          <Button
            className="button-1"
            onClick={handleButtonClick(1)}
            onMouseEnter={handleButtonMouseEnter(1)}
            onMouseLeave={handleButtonMouseLeave(1)}
          >
            know More
          </Button>
        )}

        {slice == 2 && (
          <Button
            className="button-2"
            onClick={handleButtonClick(2)}
            onMouseEnter={handleButtonMouseEnter(2)}
            onMouseLeave={handleButtonMouseLeave(2)}
          >
            know More
          </Button>
        )}

        {slice == 3 && (
          <Button
            variant="secondary"
            className="button-3"
            onClick={handleButtonClick(3)}
            onMouseEnter={handleButtonMouseEnter(3)}
            onMouseLeave={handleButtonMouseLeave(3)}
          >
            know More
          </Button>
        )}
        {slice == 4 && (
          <Button
            variant="secondary"
            className="button-4"
            onClick={handleButtonClick(4)}
            onMouseEnter={handleButtonMouseEnter(4)}
            onMouseLeave={handleButtonMouseLeave(4)}
          >
            know More
          </Button>
        )}
        {slice == 5 && (
          <Button
            variant="secondary"
            className="button-5"
            onClick={handleButtonClick(5)}
            onMouseEnter={handleButtonMouseEnter(5)}
            onMouseLeave={handleButtonMouseLeave(5)}
          >
            know More
          </Button>
        )}
        {slice == 6 && (
          <Button
            variant="secondary"
            className="button-6"
            onClick={handleButtonClick(6)}
            onMouseEnter={handleButtonMouseEnter(6)}
            onMouseLeave={handleButtonMouseLeave(6)}
          >
            know More
          </Button>
        )}
      </Box>
    </>
  );
};

export default PieChart;
