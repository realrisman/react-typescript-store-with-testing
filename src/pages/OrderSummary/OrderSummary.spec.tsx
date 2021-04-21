import { fireEvent, render } from "@testing-library/react";
import { Loader } from "../../shared/components/Loader";
import { OrderSummary } from "./OrderSummary";

jest.mock("../../shared/components/Loader", () => ({
  Loader: jest.fn(() => null),
}));

describe("OrderSummary", () => {
  afterEach(jest.clearAllMocks);

  describe("while order data being loaded", () => {
    it("renders loader", () => {
      const stubUseOrder = () => ({
        isLoading: true,
        order: undefined,
      });
      render(<OrderSummary useOrderHook={stubUseOrder} />);
      expect(Loader).toHaveBeenCalled();
    });
  });

  describe("when order is loaded", () => {
    const stubUseOrder = () => ({
      isLoading: false,
      order: {
        products: [
          {
            name: "Diamond Sword",
            price: 1000,
            image: "image.png",
          },
        ],
      },
    });

    it("renders order info", () => {
      const { container } = renderWithRouter(() => (
        <OrderSummary useOrderHook={stubUseOrder} />
      ));

      expect(container.innerHTML).toMatch("Diamond Sword");
    });

    it("navigates to main page on button click", () => {
      const { getByText, history } = renderWithRouter(() => (
        <OrderSummary useOrderHook={stubUseOrder} />
      ));

      fireEvent.click(getByText("Back to the store"));

      expect(history.location.pathname).toEqual("/");
    });
  });

  describe("without order", () => {
    it("renders error message", () => {
      const stubUseOrder = () => ({
        isLoading: false,
        order: undefined,
      });

      const { container } = render(
        <OrderSummary useOrderHook={stubUseOrder} />
      );

      expect(container.innerHTML).toMatch("Couldn't load order info.");
    });
  });
});
