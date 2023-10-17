import { render, screen, logRoles } from "@testing-library/react";
import { SignInForm } from "@/app/components/signInForm";

describe("<SignInForm />", () => {
  it("should render the sign in form", () => {
    const { container } = render(<SignInForm />);

    const title = screen.getByRole("heading", {
      name: /sign in/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: "email",
    });
    const passwordInput = screen.getByPlaceholderText("type your password");
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    logRoles(container);

    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(submitButton).toBeVisible();
    expect(title).toBeVisible();
  });

  it("should be able to login", () => {
    const {} = render(<SignInForm />);
  });
});
