import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./Skills.css";
import AppStore from "../../stores/AppStore"

const Skills = observer(() => {
  const appStore = useContext(AppStore);
  appStore.changeActivePage("skills");
  return <div>Skills Page</div>;
});

export default withRouter(Skills);
