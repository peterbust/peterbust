import { render } from "@utils/test-utils";
import Container from "./Container";

describe("Container component", () => {
  it("should render correctly", () => {
    const { container } = render(<Container />, null);
    expect(container).toBeInTheDocument();
  });
});
