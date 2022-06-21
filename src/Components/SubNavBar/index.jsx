import React, { useState } from "react";
import { object } from "prop-types";
import { Box, makeStyles, Modal, Tab, Tabs } from "@material-ui/core";

import "./styles.css";
import { useRef } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SubNavBar = ({ subNavMenus, isOpen, onNavMenus }) => {
  const classes = useStyles();
  const anchorEle = useRef(null);

  const [menuListing, setMenuListing] = useState({});
  const [value, setValue] = useState(0);
  const [anchor, setAnchor] = useState(anchorEle);

  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setAnchor();
    setValue(newValue);
    setMenuListing(Object.values(subNavMenus.menus)[newValue] || menuListing);
    onNavMenus(Object.values(subNavMenus.menus)[newValue] || menuListing);
  };

  // deal it for modal closing
  const handleClose = () => {
    setIsMoreOpen(false);
  };

  return (
    <Box ref={anchor} className={`${classes.headBar}  headBar`}>
      {!subNavMenus.isMore && (
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          id={subNavMenus.value}
          className={`${classes.subMenuBar}  subMenuBar`}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {Object.values(subNavMenus.menus).map((menu, index) => {
              return (
                <Tab
                  label={menu.label}
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
    top: "80px",
    background: "white",
    width: "100%",
  },
  subMenu: {
    cursor: "pointer",
  },
  navbar_text: {
    fontSize: "1rem",
    marginRight: "10%",
    color: "#000000",
    whiteSpace: "initial",
    width: "70%",
  },
  subMenuBar: {
    fontSize: "1.3rem",
    display: "flex",
    borderBottom: "1px solid rgb(13,39,77, 0.5) ",
    minWidth: "180px",
    whiteSpace: "break-spaces",
    justifyContent: "center",
  },
}));
