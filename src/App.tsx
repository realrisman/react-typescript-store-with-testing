import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "./Home";
import { Header } from "./shared/Header";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
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
