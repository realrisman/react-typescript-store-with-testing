import { Product } from "../shared/types";

interface CartItemProps {
  product: Product;
  removeFromCart: (product: Product) => void;
}

export const CartItem = ({ product, removeFromCart }: CartItemProps) => {
  return (
    <div className="cart-item">
      <img
        style={{ imageRendering: "pixelated" }}
        src={product.image}
        width="64px"
        height="64px"
        alt="Equipment"
      />
      <p>{product.name}</p>
      <p>{product.price} Zm</p>
      <button
        onClick={() => {
          removeFromCart(product);
        }}
        className="nes-btn is-error"
      >
        Remove
      </button>
    </div>
  );
};
