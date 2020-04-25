import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./Contact.css";
import AppStore from "../../stores/AppStore"

const Contact = observer(() => {
  const appStore = useContext(AppStore);
  appStore.changeActivePage("contact");
  return <div>Contact Page</div>;
});

export default withRouter(Contact);
