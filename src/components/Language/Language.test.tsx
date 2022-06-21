import { render, screen } from "@utils/test-utils";
import Language from "./Language";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/test",
      locale: "en",
    };
  },
}));

describe("Language component", () => {
  it("should render correctly", () => {
    render(<Language />, null);
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("NL");
    expect(link).toHaveAttribute("href", "/test");
  });
});
