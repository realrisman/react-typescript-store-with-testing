import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import cart from "./cart.svg";

export const CartWidget = () => {
  const { products } = useCart();

  return (
    <Link to="/cart" className="nes-badge is-icon">
      <span className="is-error">{products?.length || 0}</span>
      <img src={cart} width="64" height="64" alt="cart" />
    </Link>
  );
};
