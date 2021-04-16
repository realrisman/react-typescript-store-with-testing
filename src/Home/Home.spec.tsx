import { render } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  describe("while loading", () => {
    it("renders loader", () => {
      const mockUseProducts = () => ({
        categories: [],
        isLoading: true,
        error: false,
      });

      const { container } = render(<Home useProductsHook={mockUseProducts} />);

      expect(container.innerHTML).toMatch("Loading");
    });
  });

  describe("with data", () => {
    it.todo("renders categories with products");
  });

  describe("with error", () => {
    it("renders error message", () => {
      const mockUseProducts = () => ({
        categories: [],
        isLoading: false,
        error: true,
      });

      const { container } = render(<Home useProductsHook={mockUseProducts} />);

      expect(container.innerHTML).toMatch("Error");
    });
  });
});
