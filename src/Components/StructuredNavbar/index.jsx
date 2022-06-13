import React, { useState } from "react";
import SubNavBar from "../SubNavBar";
import MainNavBar from "../MainNavBar";
import NavbarMenus from "../NavbarMenus";

export default function StructuredNavbar() {
  const [isSubNavbarOpened, setSubNavbarOpen] = useState(false);
  const [subNavMenus, setSubNavMenus] = useState({});
  const [navMenus, setNavMenus] = useState({});

  /**
   * @description Opening and passing data to submenus
   *
   * @param {Boolean} isOpen
   * @param {Object} menu
   */
  const handleSubNavbarOpen = ({ isOpen, menu, event }) => {
    setSubNavbarOpen(isOpen);
    setSubNavMenus(menu);
  };

  /**
   * @description Opening and passing data to nav menus
   *
   * @param {Object} menu
   */
  const handleNavMenus = (menus) => {
    setNavMenus(menus);
  };

  return (
    <>
      <MainNavBar onSubNavbarOpen={handleSubNavbarOpen} />

      {/* ---- Sub nav bar --- */}
      {isSubNavbarOpened && (
        <SubNavBar
          subNavMenus={subNavMenus}
          isOpen={isSubNavbarOpened}
          onNavMenus={handleNavMenus}
        />
      )}

      {/* --- Navbar menus ---- */}
      {isSubNavbarOpened && Boolean(navMenus.value) && !subNavMenus.isMore && (
        <NavbarMenus
          isOpen={Boolean(navMenus.value)}
          navMenus={navMenus.menus}
        />
      )}
    </>
  );
}
