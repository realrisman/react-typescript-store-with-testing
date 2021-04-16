import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "./Home";

export const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};
