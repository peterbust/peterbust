import { render } from "@testing-library/react";

import useMediaQueries from "./useMediaQueries";

const Example = () => {
  const { xsOnly, sm, smOnly, md, mdOnly, lg, lgOnly, xl } = useMediaQueries();

  return (
    <>
      {xsOnly && <p>xsOnly</p>}
      {sm && <p>sm</p>}
      {smOnly && <p>smOnly</p>}
      {md && <p>md</p>}
      {mdOnly && <p>mdOnly</p>}
      {lg && <p>lg</p>}
      {lgOnly && <p>lgOnly</p>}
      {xl && <p>xl</p>}
    </>
  );
};

describe("'useMediaQueries' utility", () => {
  it("renders different paragraphs for breakpoint 300", async () => {
    window = Object.assign(window, { innerWidth: 300 });

    const { container } = render(<Example />);

    expect(container).toHaveTextContent("xsOnly");
  });

  it("renders different paragraphs for breakpoint 1100", async () => {
    window = Object.assign(window, { innerWidth: 1100 });

    const { container } = render(<Example />);

    expect(container).toHaveTextContent("sm");
    expect(container).toHaveTextContent("md");
    expect(container).toHaveTextContent("mdOnly");
  });

  it("renders different paragraphs for breakpoint 2000", async () => {
    window = Object.assign(window, { innerWidth: 2000 });

    const { container } = render(<Example />);

    expect(container).toHaveTextContent("sm");
    expect(container).toHaveTextContent("md");
    expect(container).toHaveTextContent("lg");
    expect(container).toHaveTextContent("xl");
  });
});
