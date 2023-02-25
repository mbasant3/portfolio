import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/home";
import About from "./pages/About";
import Interest from "./pages/Interest";

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/interest" exact component={Interest} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
