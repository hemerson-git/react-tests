import { render } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("should render button", () => {
    const { getByText, getByRole } = render(<Button>button</Button>);

    const buttonElement = getByRole("button");
    const buttonTextElement = getByText(/button/);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });

  it("should render the loading text when isLoading was passed in", () => {
    const { getByText } = render(<Button isLoading>button</Button>);

    const isLoadingText = getByText("Loading...");

    expect(isLoadingText).toBeInTheDocument();
  });

  it("should render with the default background color as green", () => {
    const { getByText } = render(<Button>button</Button>);

    const button = getByText("button");

    expect(button).toHaveClass("bg-[green]");
  });
});
