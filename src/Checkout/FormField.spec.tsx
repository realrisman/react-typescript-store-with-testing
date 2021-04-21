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
    it.todo("render error message");
  });

  describe("on change", () => {
    it.todo("normalizes the input");
  });
});
