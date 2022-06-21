import rem from "./rem";

describe("'rem' utility", () => {
  it("should calculate given number values to rem", () => {
    const outputs = [rem(-99), rem(0), rem(8), rem(32), rem(99)];

    expect(outputs).toEqual([
      "-6.1875rem",
      "0rem",
      "0.5rem",
      "2rem",
      "6.1875rem",
    ]);
  });
});
