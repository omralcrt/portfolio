import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Grid, Image } from "semantic-ui-react";
import "./Home.css";
import AppStore from "../../stores/AppStore";
import profilPhoto from "../../styles/images/profil.jpeg";
import { Linkedin, GitHub, Twitter } from "react-feather";

const Home = observer(() => {
  const appStore = useContext(AppStore);
  appStore.changeActivePage("home");
  return (
    <div className="home">
      <Grid centered className="main-grid">
        <Grid.Column >
          <Grid.Row className="center-horizontally">
            <Image src={profilPhoto} circular className="profile-photo" />
          </Grid.Row>
          <br />
          <Grid.Row className="center-horizontally">
            <h1 className="header">
              Hello, World!&nbsp;
              <span role="img" aria-label="hello">
                👋
              </span>
            </h1>
          </Grid.Row>
          <br />
          <Grid.Row className="center-horizontally">
            <h1 className="header">
              I am Ömral Cörüt.&nbsp;
              <span role="img" aria-label="developer">
                🧑‍💻
              </span>
            </h1>
          </Grid.Row>
          <br />
          <Grid.Row className="center-horizontally">
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
          </Grid.Row>
          <br />
          <Grid.Row className="center-horizontally">
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
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
});

export default withRouter(Home);
