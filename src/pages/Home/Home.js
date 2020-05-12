import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./Home.css";
import AppStore from "../../stores/AppStore";
import profilPhoto from "../../styles/images/profil.jpeg";
import { Twitter, Github, LinkedinSquare } from "@styled-icons/boxicons-logos";
import { MailSend } from "@styled-icons/boxicons-regular";

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
          I am <span className="name">Ömral Cörüt</span>&nbsp;
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
          &nbsp;from <span className="nation">Tu</span>rk
          <span className="nation">ey</span>&nbsp;
          <span role="img" aria-label="turkey">
            🇹🇷
          </span>
        </p>
        <div>
          <a
            href="https://twitter.com/omralcrt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="social-icon" />
          </a>
          <a
            href="https://github.com/omralcrt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/omralcrt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSquare className="social-icon" />
          </a>
          <a href="mailto:omralcrt@gmail.com" target="_blank" rel="noopener noreferrer">
            <MailSend className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default withRouter(Home);
