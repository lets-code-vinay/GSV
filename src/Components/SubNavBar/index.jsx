import React, { useState } from "react";
import { object } from "prop-types";
import { Box, makeStyles, Tab, Tabs } from "@material-ui/core";

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

  const [menuListing, setMenuListing] = useState({});
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setMenuListing(Object.values(subNavMenus?.menus)[newValue] || menuListing);
    onNavMenus(Object.values(subNavMenus?.menus)[newValue] || menuListing);
  };

  return (
    <Box className={`${classes.headBar}  headBar`}>
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
            aria-label="basic tabs"
            className={`${classes.subMenuTabContainer}  subMenuTabContainer ${easeOutClass}`}
          >
            {Object.values(subNavMenus?.menus).map((menu, index) => {
              return (
                <Tab
                  label={menu?.label}
                  {...a11yProps({ index })}
                  key={index}
                  className={` ${classes.sub_navbar_text} sub_navbar_text`}
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
    background: "white",
    width: "100%",
  },

  subMenu: {
    cursor: "pointer",
  },

  sub_navbar_text: {
    whiteSpace: "initial",
  },

  subMenuBar: {
    display: "inline",
    borderBottom: "1px solid rgb(13,39,77, 0.5) ",
    whiteSpace: "break-spaces",
  },
}));
