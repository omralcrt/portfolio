import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./Home.css";
import AppStore from "../../stores/AppStore";
import profilPhoto from "../../styles/images/profil.jpeg";
import { Linkedin, GitHub, Twitter } from "react-feather";

const Home = observer(() => {
  const appStore = useContext(AppStore);
  appStore.changeActivePage("home");
  return (
    <div className="home">
      <div className="home-container">
        <img src={profilPhoto} className="profile-photo" alt="Avatar" />
        <h1 className="header">
          Hello, World!&nbsp;
          <span role="img" aria-label="hello">
            👋
          </span>
        </h1>
        <h1 className="header">
          I am Ömral Cörüt.&nbsp;
          <span role="img" aria-label="developer">
            🧑‍💻
          </span>
        </h1>
        <p className="detail">
          I'm a passionate&nbsp;
          <span role="img" aria-label="passion">
            💪
          </span>
          &nbsp;and creative&nbsp;
          <span role="img" aria-label="creative">
            🖌️
          </span>
          &nbsp;mobile application developer&nbsp;
          <span role="img" aria-label="phone">
            📱
          </span>
          &nbsp;from Turkey&nbsp;
          <span role="img" aria-label="turkey">
            🇹🇷
          </span>
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/omralcrt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/omralcrt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="social-icon" />
          </a>
          <a
            href="https://twitter.com/omralcrt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default withRouter(Home);
