import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Menu } from "semantic-ui-react";
import "./Header.css"
import AppStore from "../../stores/AppStore"

const Header = observer(() => {
  const appStore = useContext(AppStore);
  return (
    <Menu inverted pointing secondary>
      <Menu.Item as={Link} to="/" active={appStore.activePage === "home"}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/skills" active={appStore.activePage === "skills"}>
        Skills
      </Menu.Item>
      <Menu.Item as={Link} to="/projects" active={appStore.activePage === "projects"}>
        Projects
      </Menu.Item>
      <Menu.Item as={Link} to="/contact" active={appStore.activePage === "contact"}>
        Contact
      </Menu.Item>
    </Menu>
  );
});

export default Header;
