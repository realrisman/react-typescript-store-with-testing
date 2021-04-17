import { render } from "@testing-library/react";
import { CheckoutForm } from "./CheckoutForm";

describe("CheckoutForm", () => {
  it("renders correctly", () => {
    const { container } = render(<CheckoutForm />);

    expect(container.innerHTML).toMatch("Cardholder's Name");
    expect(container.innerHTML).toMatch("Card Number");
    expect(container.innerHTML).toMatch("Expiration Date");
    expect(container.innerHTML).toMatch("CVV");
  });

  describe("with invalid inputs", () => {
    it.todo("show errors");
  });

  describe("with valid inputs", () => {
    describe("on place order button click", () => {
      it.todo("calls submit function with form data");
    });
  });
});
