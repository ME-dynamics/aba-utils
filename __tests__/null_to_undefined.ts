import { null_to_undefined } from "../index";

describe("null to undefined", () => {
  it("should return undefined if value is null", () => {
    expect.assertions(1);
    const value = null;
    expect(null_to_undefined(value)).toBe(undefined);
  });
  it("should return value if not null", () => {
    expect.assertions(1);
    const value = "some value";
    expect(null_to_undefined<string>(value)).toBe(value);
  });
});
