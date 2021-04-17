import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
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
    it("show errors", async () => {
      const { container, getByText } = render(<CheckoutForm />);

      await act(async () => {
        fireEvent.click(getByText("Place order"));
      });

      expect(container.innerHTML).toMatch("name is a required field");
      expect(container.innerHTML).toMatch("cardNumber is a required field");
      expect(container.innerHTML).toMatch("expDate is a required field");
      expect(container.innerHTML).toMatch("cvv is a required field");
    });
  });

  describe("with valid inputs", () => {
    describe("on place order button click", () => {
      it.todo("calls submit function with form data");
    });
  });
});
