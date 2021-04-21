import { render } from "@testing-library/react";
import { FormField } from "./FormField";

describe("FormField", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <FormField label="Foo label" name="foo" />
    );
    const input = getByLabelText("Foo label");
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveClass("is-error");
    expect(input).toHaveAttribute("name", "foo");
  });

  describe("with error", () => {
    it("render error message", () => {
      const { getByText } = render(
        <FormField
          label="Foo label"
          name="foo"
          errors={{ message: "Example error" }}
        />
      );
      expect(getByText("Error: Example error")).toBeInTheDocument();
    });
  });

  describe("on change", () => {
    it.todo("normalizes the input");
  });
});
