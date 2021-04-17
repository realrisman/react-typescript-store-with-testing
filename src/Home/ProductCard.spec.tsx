import { render } from "@testing-library/react";
import { Product } from "../shared/types";
import { ProductCard } from "./ProductCard";

const product: Product = {
  name: "Product foo",
  price: 55,
  image: "/test.jpg",
};

describe("ProductCard", () => {
  it("renders correctly", () => {
    const { container, getByRole } = render(<ProductCard datum={product} />);

    expect(container.innerHTML).toMatch("Product foo");
    expect(container.innerHTML).toMatch("55 Zm");
    expect(getByRole("img")).toHaveAttribute("src", "/test.jpg");
  });

  describe("when product is in the cart", () => {
    it("the 'Add to cart' button is disabled", () => {
      const mockUseCartHook = () => ({
        addToCart: () => {},
        products: [product],
      });

      const { getByRole } = render(
        <ProductCard datum={product} useCartHook={mockUseCartHook as any} />
      );

      expect(getByRole("button")).toBeDisabled();
    });
  });

  describe("when product is not in the cart", () => {
    describe("on 'Add to cart' click", () => {
      it.todo("calls 'addToCard' function");
    });
  });
});
