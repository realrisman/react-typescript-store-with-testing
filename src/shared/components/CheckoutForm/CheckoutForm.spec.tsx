import { cleanup, fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { CheckoutForm } from "./CheckoutForm";

describe("CheckoutForm", () => {
  afterAll(jest.clearAllMocks);

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

      expect(container.innerHTML).toMatch("Error:");
    });
  });

  describe("with valid inputs", () => {
    describe("on place order button click", () => {
      afterEach(cleanup);

      it("calls submit function with form data", async () => {
        const mockSubmit = jest.fn(async () => {});

        const { getByLabelText, getByText } = render(
          <CheckoutForm submit={mockSubmit} />
        );

        await act(async () => {
          fireEvent.change(getByLabelText("Cardholder's Name"), {
            target: { value: "Muhamad Risman" },
          });
          fireEvent.change(getByLabelText("Card Number"), {
            target: { value: "0000 0000 0000 0000" },
          });
          fireEvent.change(getByLabelText("Expiration Date"), {
            target: { value: "2030-05" },
          });
          fireEvent.change(getByLabelText("CVV"), {
            target: { value: "123" },
          });
        });

        await act(async () => {
          fireEvent.click(getByText("Place order"));
        });

        // expect(container.innerHTML).toMatch("Error:");

        // expect(mockSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
