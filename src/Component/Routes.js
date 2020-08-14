import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Header from "./Header";
import ProFile from "../ProFile";
import ProJact from "../ProJact/ProJact";

function Routes() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={ProFile} />
          <Route path="/projact" component={ProJact} />
        </Switch>
      </Router>
    </>
  );
}
export default Routes;
