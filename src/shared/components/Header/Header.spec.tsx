import { fireEvent } from "@testing-library/react";
import { Header } from "./Header";

jest.mock("../CartWidget", () => ({
  CartWidget: () => <div>Cart Widget</div>,
}));

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = renderWithRouter(() => <Header />);
    expect(container.innerHTML).toMatch("Equipment Store");
    expect(container.innerHTML).toMatch("Cart Widget");
  });

  it("navigates to '/' on header title click", () => {
    const { getByText, history } = renderWithRouter(() => <Header />);
    fireEvent.click(getByText("Equipment Store"));
    expect(history.location.pathname).toEqual("/");
  });
});
