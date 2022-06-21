import { render } from "@utils/test-utils";
import Spacer from "./Spacer";

describe("Spacer component", () => {
  it("should render correctly", () => {
    const { container } = render(<Spacer x={1} y={1} />, null);
    expect(container).toBeInTheDocument();
  });
});
