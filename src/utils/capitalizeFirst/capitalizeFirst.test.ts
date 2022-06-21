import capitalizeFirst from "./capitalizeFirst";

describe("'capitalizeFirst' utility", () => {
  it("capitalizes the first character of a string", async () => {
    expect(capitalizeFirst("hello")).toEqual("Hello");
    expect(capitalizeFirst("hello world")).toEqual("Hello world");
  });
});
