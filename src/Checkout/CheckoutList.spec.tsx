import { render } from "@testing-library/react";
import { Product } from "../shared/types";
import { CheckoutList } from "./CheckoutList";

describe("CheckoutList", () => {
  it("renders list of products", () => {
    const products: Product[] = [
      {
        name: "Product foo",
        price: 10,
        image: "/foo.png",
      },
      {
        name: "Product bar",
        price: 20,
        image: "/bar.png",
      },
    ];

    const { container } = render(<CheckoutList products={products} />);

    expect(container.innerHTML).toMatch("Product foo");
    expect(container.innerHTML).toMatch("Product bar");
  });
});
