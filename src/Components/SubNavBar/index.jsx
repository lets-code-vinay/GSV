import React, { useState, useRef } from "react";
import { object } from "prop-types";
import { Box, makeStyles, Modal, Tab, Tabs } from "@material-ui/core";

import "./styles.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SubNavBar = ({
  subNavMenus = {},
  onNavMenus,
  refOfSubNav,
  easeOutClass,
}) => {
  const classes = useStyles();
  const anchorEle = useRef(null);

  const [menuListing, setMenuListing] = useState({});
  const [value, setValue] = useState(0);
  const [anchor, setAnchor] = useState(anchorEle);

  const handleChange = (event, newValue) => {
    setAnchor();
    setValue(newValue);
    setMenuListing(Object.values(subNavMenus?.menus)[newValue] || menuListing);
    onNavMenus(Object.values(subNavMenus?.menus)[newValue] || menuListing);
  };

  return (
    <Box ref={anchor} className={`${classes.headBar}  headBar`}>
      {!subNavMenus.isMore && (
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          id={subNavMenus?.value}
          className={`${classes.subMenuBar}  subMenuBar ${easeOutClass}`}
          ref={refOfSubNav}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {Object.values(subNavMenus?.menus).map((menu, index) => {
              return (
                <Tab
                  label={menu?.label}
                  {...a11yProps({ index })}
                  key={index}
                  className={` ${classes.navbar_text} navbar_text`}
                />
              );
            })}
          </Tabs>
        </Box>
      )}
    </Box>
  );
};

/**
 * Props validation
 */
SubNavBar.propTypes = {
  subNavMenus: object,
};

/**
 * Default Props
 */
SubNavBar.defaultProps = {
  subNavMenus: {},
};

export default SubNavBar;

const useStyles = makeStyles((theme) => ({
  headBar: {
    position: "absolute",
    top: "87px",
    background: "white",
    width: "100%",
  },
  subMenu: {
    cursor: "pointer",
  },
  navbar_text: {
    fontSize: "1rem",
    marginRight: "2%",
    color: "#000000",
    whiteSpace: "initial",
    // width: "70%",
  },
  subMenuBar: {
    fontSize: "1.3rem",
    display: "inline",
    borderBottom: "1px solid rgb(13,39,77, 0.5) ",
    minWidth: "180px",
    whiteSpace: "break-spaces",
  },
}));
