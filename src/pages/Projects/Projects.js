import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./Projects.css";
import AppStore from "../../stores/AppStore"

const Projects = observer(() => {
  const appStore = useContext(AppStore);
  appStore.changeActivePage("projects");
  return <div>Projects Page</div>;
});

export default withRouter(Projects);
