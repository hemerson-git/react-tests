import { fireEvent, render, screen, within } from "@testing-library/react";

import { Card } from "./";

describe("<Card />", () => {
  it("should render component by default", () => {
    render(<Card />);

    const divElement = screen.getByRole("contentinfo");

    expect(divElement).toBeVisible();
    expect(within(divElement).getByRole("heading")).toBeVisible();
  });

  it("should render async component by default", async () => {
    render(<Card />);

    // It will try to get the item synchronously
    // And will not find the item
    // const mainElement = screen.getByRole("main");

    // With find we can use await, though
    const mainElement = await screen.findByRole("main");

    expect(mainElement).toBeVisible();
  });

  it("should open component when button was clicked", async () => {
    render(<Card />);

    const buttonElement = screen.getByRole("button", {
      name: "open",
    });

    expect(buttonElement).toBeVisible();

    expect(screen.queryByRole("main")).not.toBeInTheDocument();

    fireEvent.click(buttonElement);

    const mainElement = screen.getByRole("main");

    expect(mainElement).toBeVisible();
  });
});
