import React, { useRef, useState } from "react";
import { object } from "prop-types";
import { Box, makeStyles, MenuItem, Typography, Modal, Grid } from "@material-ui/core";
import NavbarMenus from "../NavbarMenus";
import About from "../More/SideBarTab/About";
import SideBar from "../More/SideBarTab";
import { useNavigate } from "react-router-dom";

const SubNavBar = ({ subNavMenus, isOpen = true }) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const refForNavMenus = useRef(null);

  const [isActive, setActive] = useState(false);
  const [isMenuListingOpened, setMenuListingOpen] = useState(false);
  const [menuListing, setMenuListing] = useState({});
  const [isMoreOpen, setIsMoreOpen] = useState(!false)

  const handleMainNavbarClick = (menu) => (_) => {
    setActive(menu.value);
    setMenuListingOpen(!isMenuListingOpened);
    setMenuListing(menu.menus);
    setIsMoreOpen(true)
  };

  const handleClose = () => {
    setIsMoreOpen(false)
  }
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
    <>
    {
      isMoreOpen && navigate("/about") 
    }
     {/* <ClickAwayListener onClickAway={handleClickAway}> */}
     {/* <Modal
        open={isMoreOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={BoxModalstyles} style={{ backgroundColor: "white", height :"100%" }}>
        <SideBar />
        </Box>
      </Modal> */}
    </>
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
const BoxModalstyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  height:"100%",
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
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
