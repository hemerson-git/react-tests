import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("<Home />", () => {
  it("should render Home", () => {
    render(<Home />);

    const docsTitle = screen.getByText("Docs");

    expect(docsTitle).toBeInTheDocument();
  });
});
