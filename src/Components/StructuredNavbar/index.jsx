import React, { useState, useEffect, useRef } from "react";
import SubNavBar from "../SubNavBar";
import MainNavBar from "../MainNavBar";
import SideBar from "../More/SideBarTab/index";
import NavbarMenus from "../NavbarMenus";
import "./style.css";

export default function StructuredNavbar() {
  const [isSubNavbarOpened, setSubNavbarOpen] = useState(false);
  const [subNavMenus, setSubNavMenus] = useState({});
  const [navMenus, setNavMenus] = useState({});
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const [isMoreRef, setMoreRef] = useState(null);
  const [easeOutClass, setEaseOutClass] = useState();
  const [isActive, setActive] = useState(false);
  const [isShowMegaMenu, setShowMegaMenu] = useState(false);
  const [isActiveMegaMenu, setActiveMegaMenu] = useState(false);
  /**
   * @description Opening and passing data to submenus
   *
   * @param {Boolean} isOpen
   * @param {Object} menu
   */
  const handleSubNavbarOpen = ({ isOpen, menu, event }) => {
    setSubNavbarOpen(isOpen);
    setSubNavMenus(menu);
    setActiveMegaMenu(true);
  };

  /**
   * @description Opening and passing data to nav menus
   *
   * @param {Object} menu
   */
  const handleNavMenus = (menus) => {
    setNavMenus(menus);
    setIsMoreOpen(false);
    setShowMegaMenu(true);
  };

  /**
   * @description Opening and passing data to More menus
   *
   * @param {Boolean} isMoreOpened
   */
  const handleMoreClick = ({ isMore, mainRef }) => {
    setMoreRef(mainRef);
    setIsMoreOpen(isMore);
  };

  //function to check if mouse outside click and close the navbar
  const refOfSubNav = useRef(null);
  useEffect(() => {
    const checkMouseClickedOutside = (e) => {
      if (
        isSubNavbarOpened &&
        refOfSubNav.current &&
        !refOfSubNav.current.contains(e.target)
      ) {
        setSubNavbarOpen(() => !isSubNavbarOpened);
        setShowMegaMenu(false);
        setEaseOutClass("test");
        setActive(false);
      }
    };

    document.addEventListener("mouseup", checkMouseClickedOutside);

    return () => {
      document.removeEventListener("mouseup", checkMouseClickedOutside);
    };
  }, [isSubNavbarOpened]);

  return (
    <>
      <MainNavBar
        onSubNavbarOpen={handleSubNavbarOpen}
        onMoreOpen={handleMoreClick}
        isActive={isActive}
        setActive={setActive}
      />

      {/* ---- Sub nav bar --- */}
      {isSubNavbarOpened && (
        <SubNavBar
          subNavMenus={subNavMenus}
          isOpen={isSubNavbarOpened}
          onNavMenus={handleNavMenus}
          refOfSubNav={refOfSubNav}
          easeOutClass={easeOutClass}
        />
      )}

      {/* --- Navbar menus ---- */}
      {isSubNavbarOpened && Boolean(navMenus.value) && !subNavMenus.isMore && (
        <NavbarMenus
          isOpen={isSubNavbarOpened}
          navMenus={navMenus.menus}
          isActiveMegaMenu={isActiveMegaMenu}
        />
      )}

      {isMoreOpen && (
        <SideBar
          isMoreRef={isMoreRef}
          isMoreOpen={isMoreOpen}
          onMoreClick={handleMoreClick}
        />
      )}
    </>
  );
}
