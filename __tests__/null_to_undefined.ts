import { nullToUndefined } from "../index";

describe("null to undefined", () => {
  it("should return undefined if value is null", () => {
    expect.assertions(1);
    const value = null;
    expect(nullToUndefined(value)).toBe(undefined);
  });
  it("should return value if not null", () => {
    expect.assertions(1);
    const value = "some value";
    expect(nullToUndefined<string>(value)).toBe(value);
  });
});
