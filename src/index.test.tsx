import { render, screen } from "@testing-library/react";
import Counter from "./index";

describe("Counter", () => {
  it("should render without crashing", () => {
    render(<Counter />);

    expect(screen.getByRole("heading")).toBeTruthy();
  });
});
