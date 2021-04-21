import React from "react";
import { Route, Switch } from "react-router";
import { Cart } from "./pages/Cart";
import { Checkout } from "./Checkout";
import { Home } from "./pages/Home";
import { OrderSummary } from "./OrderSummary";
import { Header } from "./shared/components/Header";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/order">
            <OrderSummary />
          </Route>
          <Route>Page not found</Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};
