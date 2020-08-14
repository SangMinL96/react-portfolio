import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Header from "./Header";

import ProJact from "../ProJact/ProJact";
import ProFile from "../ProFile/ProFile";
import End from "../End/End";

function Routes() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={ProFile} />
          <Route path="/projact" component={ProJact} />
          <Route path="/End" component={End} />
        </Switch>
      </Router>
    </>
  );
}
export default Routes;
