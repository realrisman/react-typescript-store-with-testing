import { Checkout } from "./Checkout";
import { render } from "@testing-library/react";
import { CheckoutList } from "../../shared/components/CheckoutList/CheckoutList";
import { CheckoutForm } from "../../shared/components/CheckoutForm";

jest.mock("./CheckoutForm", () => ({
  CheckoutForm: jest.fn(() => null),
}));

jest.mock("./CheckoutList", () => ({
  CheckoutList: jest.fn(() => null),
}));

describe("Checkout", () => {
  afterEach(jest.clearAllMocks);

  const products = [
    {
      name: "Product foo",
      price: 0,
      image: "image.png",
    },
  ];
  const stubCartHook = () => ({
    products,
    removeFromCart: () => {},
    totalPrice: () => 55,
  });

  it("shows total price", () => {
    const { container } = render(
      <Checkout useCartHook={stubCartHook as any} />
    );
    expect(container.innerHTML).toMatch("Total: 55 Zm");
  });

  it("passes products to CheckoutList", () => {
    render(<Checkout useCartHook={stubCartHook as any} />);
    expect(CheckoutList).toHaveBeenCalledWith({ products }, {});
  });

  it("renders checkout form", () => {
    render(<Checkout useCartHook={stubCartHook as any} />);
    expect(CheckoutForm).toHaveBeenCalled();
  });
});