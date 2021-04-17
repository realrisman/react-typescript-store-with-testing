import { Cart } from "./Cart";

describe("Cart", () => {
  describe("without products", () => {
    const stubCartHook = () => ({
      products: [],
      removeFromCart: () => {},
      totalPrice: () => 0,
    });

    it("renders empty cart message", () => {
      const { container } = renderWithRouter(() => (
        <Cart useCartHook={stubCartHook} />
      ));

      expect(container.innerHTML).toMatch("Your cart is empty.");
    });

    describe("on 'Back to main page'", () => {
      it.todo("redirects to '/");
    });
  });

  describe("with products", () => {
    it.todo("renders cart products list with total price");

    describe("on 'go to checkout' click", () => {
      it.todo("redirects to '/checkout'");
    });
  });
});
