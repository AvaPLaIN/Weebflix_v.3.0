import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import HighlightSlider from ".";

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub";
  },
}));

describe("HighlightSlider", () => {
  test("renders a HighlightSlider", () => {
    render(<div data-testid="highlightslider" />);

    const highlightslider = screen.getByTestId("highlightslider");

    expect(highlightslider).toBeInTheDocument();
  });
});
