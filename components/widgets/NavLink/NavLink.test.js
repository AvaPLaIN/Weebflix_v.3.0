import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NavLink from ".";

describe("NavLink", () => {
  test("renders NavLink", () => {
    render(
      <NavLink>
        <p data-testid="navlink">NavLink</p>
      </NavLink>
    );

    const navlink = screen.getByTestId("navlink");

    expect(navlink).toBeInTheDocument();
  });
});
