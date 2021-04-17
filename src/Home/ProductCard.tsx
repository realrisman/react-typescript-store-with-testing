import { Product } from "../shared/types";
import { useCart } from "../CartContext";

export interface ProductCardProps {
  datum: Product;
}

export const ProductCard = ({ datum }: ProductCardProps) => {
  const { addToCart, products } = useCart();

  const isInCart = !!products?.find((product) => datum.name === product.name);

  return (
    <div className="nes-container is-rounded item">
      <img
        style={{ imageRendering: "pixelated" }}
        src={datum.image}
        width="64px"
        height="64px"
        alt="equipment"
      />
      <p>{datum.name}</p>
      <p>{datum.price} Zm</p>
      {isInCart ? (
        <button className="nes-btn is-disabled">Added to cart</button>
      ) : (
        <button
          className="nes-btn is-primary"
          onClick={() => {
            addToCart(datum);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};
