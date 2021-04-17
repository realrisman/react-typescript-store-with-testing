import { fireEvent } from "@testing-library/react";
import { Product } from "../shared/types";
import { CartItem } from "./CartItem";

describe("CartItem", () => {
  const product: Product = {
    name: "Product Foo",
    price: 100,
    image: "/image/source.png",
  };

  it("renders correctly", () => {
    const { container, getByRole } = renderWithRouter(() => (
      <CartItem product={product} removeFromCart={() => {}} />
    ));

    expect(container.innerHTML).toMatch("Product Foo");
    expect(container.innerHTML).toMatch("100 Zm");
    expect(getByRole("img")).toHaveAttribute("src", "/image/source.png");
  });

  describe("on 'Remove' click", () => {
    it("calls passed in function", () => {
      const removeFromCartMock = jest.fn();

      const { getByText } = renderWithRouter(() => (
        <CartItem product={product} removeFromCart={removeFromCartMock} />
      ));

      fireEvent.click(getByText("Remove"));
      expect(removeFromCartMock).toBeCalledWith(product);
    });
  });
});
