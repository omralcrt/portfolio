import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./Header.css";
import AppStore from "../../stores/AppStore";

const Header = observer(() => {
  const appStore = useContext(AppStore);
  return (
    <header className="sticky top-0 z-40 w-full bg-gray-800">
      <div className="menu">
        <NavLink
          className="menu-item"
          activeClassName={appStore.activePage === "home" ? "active" : ""}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="menu-item"
          activeClassName={appStore.activePage === "skills" ? "active" : ""}
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className="menu-item"
          activeClassName={appStore.activePage === "projects" ? "active" : ""}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="menu-item"
          activeClassName={appStore.activePage === "contact" ? "active" : ""}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
});

export default Header;
