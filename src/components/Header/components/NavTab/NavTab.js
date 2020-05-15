import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = ({ navItem }) => {
  return (
    <NavLink
      className="menu-item"
      activeClassName="active"
      exact
      to={navItem.path}
    >
      {navItem.title}
    </NavLink>
  );
};

export default NavTab;
