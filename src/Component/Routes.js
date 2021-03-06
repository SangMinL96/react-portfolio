import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Header from "./Header";
import ProJact from "../ProJact/ProJact";
import ProFile from "../ProFile/ProFile";
import Card from "../Card/Card";

function Routes() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/react-portfolio/" exact component={Home} />

          <Route path="/react-portfolio/profile" component={ProFile} />
          <Route path="/react-portfolio/projact" component={ProJact} />
          <Route path="/react-portfolio/card" component={Card} />
        </Switch>
      </Router>
    </>
  );
}
export default Routes;
