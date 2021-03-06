import { detect_env } from "../index";

describe("detect env", () => {
  it("should detect node enviremont", () => {
    expect.assertions(1);

    expect(detect_env()).toBe("node");
  });
});
