import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { CartProvider } from "./shared/hooks/CartContext";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
