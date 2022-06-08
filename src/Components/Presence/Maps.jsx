import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { ASIA_ROTATION } from "../../Configs/OurPresence";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapCharts = ({ markers = [], region = "", rotation = ASIA_ROTATION }) => {
  console.log("rotation", rotation);
  console.log("markers", markers);
  console.log("region", region);

  const [scale, setScale] = useState(1);

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: rotation,
        scale: 300,
      }}
    >
      <ZoomableGroup zoom={1} onMoveEnd={({ zoom }) => setScale(zoom)}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((d) => d.properties.REGION_UN === region)
              .map((geo) => {
                return (
                  <Geography
                    style={{
                      cursor: "pointer",
                      backgroundColor: "red",
                      fill: "blue",
                      default: {
                        cursor: "pointer",
                        fill: "#e9ecef",
                        stroke: "#adb5bd",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        cursor: "pointer",
                        fill: "#0d274d",
                        stroke: "#e9ecef",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        cursor: "pointer",
                        fill: "red",
                        stroke: "#adb5bd",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    fill="yellow"
                    stroke="#D6D6DA"
                  />
                );
              })
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            {/* <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
          </svg> */}
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapCharts;
