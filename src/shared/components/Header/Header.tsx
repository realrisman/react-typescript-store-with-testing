import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget";

export const Header = () => (
  <header>
    <div className="container">
      <div className="nav-brand">
        <Link to="/">
          <h1>Equipment Store</h1>
        </Link>
        <p>All you need is here</p>
      </div>
      <div className="cart">
        <CartWidget />
      </div>
    </div>
  </header>
);
