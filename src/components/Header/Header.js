import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-gray-800">
      <div className="menu">
        <NavLink className="menu-item" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink
          className="menu-item"
          activeClassName="active"
          exact
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className="menu-item"
          activeClassName="active"
          exact
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="menu-item"
          activeClassName="active"
          exact
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
