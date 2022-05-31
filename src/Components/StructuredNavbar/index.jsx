import React, { useState } from "react";
import Navbar from "../MainNavbar";
import SubNavBar from "../SubNavBar";

export default function StructuredNavbar() {
  const [isSubNavbarOpened, setSubNavbarOpen] = useState(false);
  const [subNavMenus, setSubNavMenus] = useState({});

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

  return (
    <>
      <Navbar onSubNavbarOpen={handleSubNavbarOpen} />

      {isSubNavbarOpened && (
        <SubNavBar subNavMenus={subNavMenus} isOpen={true} />
      )}
    </>
  );
}
