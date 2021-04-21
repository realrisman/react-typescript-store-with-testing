import React from "react";
import Routes from "./routes";
import { Header } from "./shared/components/Header";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Routes />
      </div>
    </React.Fragment>
  );
};
