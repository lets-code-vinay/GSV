import React, { useState } from "react";
import { Box, makeStyles, MenuItem, Typography } from "@material-ui/core";
import { object } from "prop-types";

const SubNavBar = ({ subNavMenus, isOpen = true }) => {
  const classes = useStyles();

  const [isActive, setActive] = useState(false);

  const handleMainNavbarClick = (menu) => (_) => {
    // onSubNavbarOpen({ isOpen: true, menu, event }); // TODO
    setActive(menu.value);
  };

  return (
    <Box
      id={subNavMenus.value}
      style={{
        border: "2px solid red",
      }}
      className={`${classes.hello}  hello`}
    >
      {Object.values(subNavMenus.menus).map((menu, index) => {
        console.log("menu", menu.label);
        return (
          <MenuItem
            onClick={handleMainNavbarClick(menu)}
            key={index}
            style={{
              borderBottom:
                isActive === menu.value
                  ? "3px solid #000000"
                  : "3px solid transparent",
            }}
          >
            <Typography variant={"body1"} className={classes.navbar_text}>
              {menu.label}
            </Typography>
          </MenuItem>
        );
      })}
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
  navbar_text: {
    fontSize: "1.3rem",
    marginRight: "10%",
    marginTop: "-12%",
    paddingTop: "10%",
    color: "#000000",
  },
  hello: {
    fontSize: "1.3rem",
  },
}));
