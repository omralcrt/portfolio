import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./Home.css";
import AppStore from "../../stores/AppStore"

const Home = observer(() => {
  const appStore = useContext(AppStore);
  appStore.changeActivePage("home");
  return <div className="Home">Home Page</div>;
});

export default withRouter(Home);
