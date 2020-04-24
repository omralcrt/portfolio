import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Header() {
  return (
    <Menu pointing secondary>
      <Menu.Item as={Link} to="/" active>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/skills">
        Skills
      </Menu.Item>
      <Menu.Item as={Link} to="/projects">
        Projects
      </Menu.Item>
      <Menu.Item as={Link} to="/contact">
        Contact
      </Menu.Item>
    </Menu>
  );
}

export default Header;
