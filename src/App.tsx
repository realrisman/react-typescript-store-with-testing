import React from "react";
import { Route, Switch } from "react-router";
import { Cart } from "./Cart";
import { Checkout } from "./Checkout";
import { Home } from "./Home";
import { OrderSummary } from "./OrderSummary";
import { Header } from "./shared/Header";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/order">
            <OrderSummary />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};
