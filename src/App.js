import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./App.css";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const App = observer(() => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
});

export default withRouter(App);
