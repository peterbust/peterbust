import { render } from "@testing-library/react";

import useCurrentDimensions from "./useCurrentDimensions";

// Example component for testing purposes
const Example = () => {
  const { width, height } = useCurrentDimensions();

  return (
    <>
      <div data-testid="width">{width}</div>
      <div data-testid="height">{height}</div>
    </>
  );
};

describe("'useCurrentDimensions' utility", () => {
  it("accurately returns window innerWidth and innerHeight", async () => {
    // Set window dimensions and check hook values
    window = Object.assign(window, { innerWidth: 500, innerHeight: 600 });

    const { getByTestId } = render(<Example />);

    expect(getByTestId("width")).toHaveTextContent("500");
    expect(getByTestId("height")).toHaveTextContent("600");

    // Reset window dimensions, await debounce, and check hook values
    window = Object.assign(window, { innerWidth: 800, innerHeight: 900 });

    setTimeout(() => {
      expect(getByTestId("width")).toHaveTextContent("800");
      expect(getByTestId("height")).toHaveTextContent("900");
    }, 101);
  });
});
