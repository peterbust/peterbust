import stringToSlug from "./stringToSlug";

describe("stringToSlug util", () => {
  it("should convert strings to url-friendly slugs", () => {
    expect(stringToSlug("Hello World")).toBe("hello-world");
    expect(stringToSlug(" Hello    WORLD    ")).toBe("hello-world");
    expect(stringToSlug("Héllö Wòrld")).toBe("hello-world");
    expect(stringToSlug("Hello___World")).toBe("hello-world");
    expect(stringToSlug("Hello---World")).toBe("hello-world");
    expect(stringToSlug("Hello ;/?:@&=+$,{}|^[]` World")).toBe("hello-world");
  });
});
