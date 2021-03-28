import { detectEnv } from "../index";

describe("detect env", () => {
  it("should detect node environment", () => {
    expect.assertions(1);

    expect(detectEnv()).toBe("node");
  });
});
