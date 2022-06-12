import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { shape } from "prop-types";

const PieChart = ({ data = {}, fetchInsightDetails }) => {
  /**
   * @description Getting value of current slice
   *
   * @param {Object} node
   * @param {Object} event
   */
  const handleMouseEnter = (node, event) => {
    fetchInsightDetails(node);
  };

  /**
   * @description Getting value of current slice on click
   *
   * @param {Object} node
   * @param {Object} event
   */
  const handleClick = (node, event) => {
    fetchInsightDetails(node);
  };
  return (
    <ResponsivePie
      data={Object.values(data)}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      OrdinalColorScaleConfig={{ Categorical: "Dark 2" }}
      innerRadius={0.5}
      padAngle={0}
      //   cornerRadius={3}
      enableArcLabels={true}
      enableArcLinkLabels={false}
      activeOuterRadiusOffset={20}
      borderWidth={0.5}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabel={() => "20%"}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 10]] }}
      onMouseEnter={(node, e) => handleMouseEnter(node, e)}
      onClick={(node, e) => handleClick(node, e)}
      motionConfig={{ mass: 5, tension: 105, friction: 5 }}
      //   colors={(item) => {
      //     console.log("item", item);
      //     return Object.values(data).find(({ color }) => color);
      //   }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
    />
  );
};

/**
 * Props Validation
 */
PieChart.propsType = {
  data: shape({}),
};

/**
 * Default Props
 */
PieChart.defaultProps = {
  data: {},
};

export default PieChart;
