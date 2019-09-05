import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";

export default () =>
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/about" exact component={About} />
  </Switch>;