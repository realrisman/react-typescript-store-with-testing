import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <div className="container">
      <div className="nav-brand">
        <Link to="/">
          <h1>Equipment Store</h1>
        </Link>
      </div>
    </div>
  </header>
);
