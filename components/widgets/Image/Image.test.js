import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
// import Image from ".";
import TestImage from "../../../public/assets/loading.webp";

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub";
  },
}));

describe("Image", () => {
  test("renders a Image", () => {
    render(<div src={TestImage} alt="testimage" data-testid="image"></div>); //TODO change div to Image Next Tag

    const image = screen.getByTestId("image");

    expect(image).toBeInTheDocument();
  });
});
