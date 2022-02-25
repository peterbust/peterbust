import hexToRgba from "./hexToRgba";

describe("hexToRgba() utility", () => {
  it("returns an object with RGB color value for given HEX value", async () => {
    const outputs = [
      hexToRgba("#000000", 1),
      hexToRgba("#000", 0.25),
      hexToRgba("#ffffff", 0.5),
      hexToRgba("#fff", 1),
      hexToRgba("#FFFFFF", 1),
      hexToRgba("#c0c0c0", 1),
    ];

    expect(outputs).toEqual([
      "rgba(0, 0, 0, 1)",
      "rgba(0, 0, 0, 0.25)",
      "rgba(255, 255, 255, 0.5)",
      "rgba(255, 255, 255, 1)",
      "rgba(255, 255, 255, 1)",
      "rgba(192, 192, 192, 1)",
    ]);
  });

  it("returns alpha value 1 if given alpha higher than 1", async () => {
    const value = hexToRgba("#000", 2);
    expect(value).toEqual("rgba(0, 0, 0, 1)");
  });

  it("return null if hex value is untranslatable", async () => {
    const outputs = [
      hexToRgba("some value", 1),
      hexToRgba("#something", 0.25),
      hexToRgba("1234", 1),
    ];

    expect(outputs).toEqual([null, null, null]);
  });

  it("accepts a hex value without '#' icon", async () => {
    const value = hexToRgba("000", 2);
    expect(value).toEqual("rgba(0, 0, 0, 1)");
  });
});
