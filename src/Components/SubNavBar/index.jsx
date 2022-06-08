import React, { useRef, useState } from "react";
import { object } from "prop-types";
import { Box, makeStyles, MenuItem, Typography } from "@material-ui/core";
import NavbarMenus from "../NavbarMenus";

const SubNavBar = ({ subNavMenus, isOpen = true }) => {
  const classes = useStyles();

  const refForNavMenus = useRef(null);

  const [isActive, setActive] = useState(false);
  const [isMenuListingOpened, setMenuListingOpen] = useState(false);
  const [menuListing, setMenuListing] = useState({});

  const handleMainNavbarClick = (menu) => (_) => {
    setActive(menu.value);
    setMenuListingOpen(!isMenuListingOpened);
    setMenuListing(menu.menus);
  };

  return !subNavMenus.isMore ? (
    <Box id={subNavMenus.value} className={`${classes.subMenuBar}  subMenuBar`}>
      {Object.values(subNavMenus.menus).map((menu, index) => {
        return (
          <MenuItem
            onClick={handleMainNavbarClick(menu)}
            key={index}
            ref={refForNavMenus}
            style={{
              borderBottom:
                isActive === menu.value ? "3px solid blue" : "3px solid red",
            }}
            className={`${classes.subMenu}  subMenu`}
          >
            <Typography variant={"body1"} className={classes.navbar_text}>
              {menu.label}
            </Typography>
          </MenuItem>
        );
      })}

      {isMenuListingOpened && (
        <NavbarMenus
          isOpen={isMenuListingOpened}
          navMenus={menuListing}
          isActive={isActive}
        />
      )}
    </Box>
  ) : (
    <h3>Menu page should be here</h3>
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
  subMenu: {
    cursor: "pointer",
  },
  navbar_text: {
    fontSize: "1rem",
    marginRight: "10%",
    color: "#000000",
  },
  subMenuBar: {
    fontSize: "1.3rem",
    display: "flex",
    borderBottom: "1px solid rgb(13,39,77, 0.5) ",
    minWidth: "180px",
    whiteSpace: "break-spaces",
  },
}));
