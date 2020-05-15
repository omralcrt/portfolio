import React from "react";
import "./Header.css";
import NavItem from "./components/NavTab/NavTab";
import navMenu from "./NavMenu.json";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-gray-800">
      <div className="menu">
        {navMenu.map((menuItem, index) => {
          return <NavItem navItem={menuItem} key={index} />;
        })}
      </div>
    </header>
  );
};

export default Header;
