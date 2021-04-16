import { createMemoryHistory } from "history";
import { App } from "./App";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

describe("App", () => {
  it("render correctly", () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(container.innerHTML).toMatch("Equipment Store");
  });
});
